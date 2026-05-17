# 🔐 Secure API – Production-Style DevSecOps Backend

A production-style secure backend API built with **Node.js, PostgreSQL, Google Cloud Run, Cloud SQL, JWT authentication, CI/CD, and Secret Manager**, following modern **cloud-native DevSecOps practices**.

This project demonstrates real-world backend deployment, secure authentication, cloud infrastructure integration, automated deployment pipelines, and secrets management using Google Cloud Platform.

---

## 🚀 Live Demo

### API Endpoint
https://secure-api-1097545195926.us-central1.run.app

### Swagger Documentation
https://secure-api-1097545195926.us-central1.run.app/docs

### GitHub Repository
https://github.com/marlondev84/devsecops-project

---

## 📌 Project Overview

This project was designed to simulate a **real production backend service**, implementing:

- Secure JWT authentication
- Password hashing using bcrypt
- PostgreSQL database integration
- Cloud-native deployment to Google Cloud Run
- Cloud SQL managed PostgreSQL database
- Secure credential storage with Secret Manager
- Automated CI/CD pipeline using GitHub Actions
- OIDC Workload Identity Federation (no static credentials)
- Interactive Swagger/OpenAPI documentation

The goal was to create a project aligned with **real DevOps, Cloud, and Backend engineering practices** used in modern production environments.

---

## 🏗️ Architecture

```text
Developer Push
       ↓
GitHub Repository
       ↓
GitHub Actions CI/CD
       ↓
OIDC Workload Identity Federation
       ↓
Google Cloud Run
       ↓
Node.js + Express API
       ↓
JWT Authentication + bcrypt
       ↓
Cloud SQL PostgreSQL
       ↓
Google Secret Manager

⚙️ Tech Stack
Backend
Node.js
Express.js
Security
JWT Authentication
bcrypt Password Hashing
Helmet.js
Google Secret Manager
Database
PostgreSQL
Google Cloud SQL
Cloud & DevOps
Google Cloud Run
GitHub Actions CI/CD
Workload Identity Federation (OIDC)
IAM Permissions
Docker
Documentation
Swagger / OpenAPI
🔐 Security Features
JWT Authentication

Protected routes require a valid JWT token.

Password Hashing

Passwords are securely hashed using bcrypt before storage.

Secrets Management

Sensitive credentials such as:

Database password
JWT secret

are securely stored in Google Secret Manager, avoiding hardcoded credentials or exposed secrets in source code.

Secure Cloud Authentication

CI/CD authentication is implemented using OIDC Workload Identity Federation, eliminating the need for long-lived service account keys.

🧪 API Endpoints
Health Check
GET /health

Response:
{
  "status": "ok"
}
Login
POST /login

Request body:
{
  "username": "admin",
  "password": "123456"
}

Response:
{
  "token": "JWT_TOKEN"
}
Protected Route
GET /protected

Authorization:

Bearer YOUR_JWT_TOKEN

Response:

{
  "message": "Protected route accessed"
}
🔄 CI/CD Pipeline

Every push to the main branch automatically triggers:

GitHub Actions workflow
Secure authentication to GCP using OIDC
Cloud Run deployment
Application update in production

This simulates a real production deployment workflow.

☁️ Cloud Infrastructure
Google Cloud Run

Serverless deployment for scalable containerized applications.

Cloud SQL (PostgreSQL)

Managed relational database used for real authentication persistence.

Secret Manager

Secure storage for production secrets and credentials.

IAM & OIDC Federation

Fine-grained access control and secure CI/CD authentication without exposed keys.

💡 Key Skills Demonstrated
Backend Development
API Security
JWT Authentication
Password Hashing (bcrypt)
PostgreSQL Database Design
Cloud SQL Integration
Cloud Run Deployment
Dockerized Applications
CI/CD Automation
GitHub Actions
Secret Management
IAM Permissions
OIDC Federation
Swagger/OpenAPI Documentation
DevSecOps Best Practices
📈 Future Improvements
Unit & Integration Tests with Jest
Terraform Infrastructure as Code
Monitoring & Logging
Rate Limiting
Role-Based Access Control (RBAC)
Multi-environment deployments (dev/staging/prod)
👨‍💻 Author

Marlon Hoeser

DevOps / Cloud / Backend Engineering Portfolio Project

GitHub: https://github.com/marlondev84

LinkedIn: ☁️ Cloud Infrastructure
Google Cloud Run

Serverless deployment for scalable containerized applications.

Cloud SQL (PostgreSQL)

Managed relational database used for real authentication persistence.

Secret Manager

Secure storage for production secrets and credentials.

IAM & OIDC Federation

Fine-grained access control and secure CI/CD authentication without exposed keys.

💡 Key Skills Demonstrated
Backend Development

API Security
JWT Authentication
Password Hashing (bcrypt)
PostgreSQL Database Design
Cloud SQL Integration
Cloud Run Deployment
Dockerized Applications
CI/CD Automation
GitHub Actions
Secret Management
IAM Permissions
OIDC Federation
Swagger/OpenAPI Documentation
DevSecOps Best Practices

📈 Future Improvements
Unit & Integration Tests with Jest
Terraform Infrastructure as Code
Monitoring & Logging
Rate Limiting
Role-Based Access Control (RBAC)
Multi-environment deployments (dev/staging/prod)

👨‍💻 Author

Marlon Hoeser

DevOps / Cloud / Backend Engineering Portfolio Project

GitHub: https://github.com/marlondev84

LinkedIn: www.linkedin.com/in/marlon-hoeser-772986176

