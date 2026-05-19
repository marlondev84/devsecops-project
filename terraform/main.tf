resource "google_sql_database_instance" "postgres" {
  name             = var.db_instance_name
  region           = var.region
  database_version = "POSTGRES_15"

  deletion_protection = true

  settings {
    tier = "db-f1-micro"
  }
}

resource "google_cloud_run_v2_service" "secure_api" {
  name     = var.cloud_run_service_name
  location = var.region

  lifecycle {
    ignore_changes = [
      template[0].containers[0].image
    ]
  }

  template {
    volumes {
      name = "cloudsql"

      cloud_sql_instance {
        instances = [
          "devsecops-494123:us-central1:secure-api-db"
        ]
      }
    }

    containers {
      image = "us-central1-docker.pkg.dev/devsecops-494123/cloud-run-source-deploy/secure-api:latest"

      env {
        name  = "DB_USER"
        value = "apiuser"
      }

      env {
        name  = "DB_NAME"
        value = "securedb"
      }

      env {
        name  = "INSTANCE_CONNECTION_NAME"
        value = "devsecops-494123:us-central1:secure-api-db"
      }

      env {
        name = "DB_PASSWORD"

        value_source {
          secret_key_ref {
            secret = "DB_PASSWORD"
            version = "latest"
          }
        }
      }

      env {
        name = "JWT_SECRET"

        value_source {
          secret_key_ref {
            secret = "JWT_SECRET"
            version = "latest"
          }
        }
      }

      volume_mounts {
        name       = "cloudsql"
        mount_path = "/cloudsql"
      }
    }
  }
}