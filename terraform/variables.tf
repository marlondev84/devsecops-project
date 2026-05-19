variable "project_id" {}
variable "region" {}

variable "db_instance_name" {
  default = "secure-api-db"
}

variable "cloud_run_service_name" {
  default = "secure-api"
}