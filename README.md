# 🚀 DevSecOps Secure API

A production-style **secure API** built with Node.js and deployed on **Google Cloud Run**, following modern **DevSecOps practices**.

---

## 🔐 Key Features

- JWT Authentication (login + protected routes)
- Secure HTTP headers with Helmet
- Vulnerability scanning with Trivy
- Non-root Docker container (security best practice)
- Healthcheck endpoint for cloud environments

---

## ⚙️ Tech Stack

- Node.js (Express)
- Docker
- GitHub Actions (CI/CD)
- Google Cloud Run (serverless)
- Artifact Registry
- Trivy (security scanning)

---

## ☁️ Architecture

Local Dev → Docker Build → CI/CD Pipeline → Cloud Run Deployment

- Code pushed to GitHub
- Pipeline builds Docker image
- Security scan runs (Trivy)
- Image deployed automatically to Cloud Run

---

## 🔁 CI/CD Pipeline

- GitHub Actions workflow
- OIDC authentication (no static credentials)
- Automated build, scan, and deploy

---

## 🔐 Authentication Flow

1. POST `/login` → returns JWT  
2. Client sends token via header  
3. Backend validates token  
4. Access granted to `/protected`

Example:

```bash
curl -X POST https://your-api-url/login \
  -H "Content-Type: application/json" \
  -d '{"username":"admin","password":"123456"}'

# 🚀 DevSecOps Secure API

A production-style **secure API** built with Node.js and deployed on **Google Cloud Run**, following modern **DevSecOps practices**.

---

## 🔐 Key Features

- JWT Authentication (login + protected routes)
- Secure HTTP headers with Helmet
- Vulnerability scanning with Trivy
- Non-root Docker container (security best practice)
- Healthcheck endpoint for cloud environments

---

## ⚙️ Tech Stack

- Node.js (Express)
- Docker
- GitHub Actions (CI/CD)
- Google Cloud Run (serverless)
- Artifact Registry
- Trivy (security scanning)

---

## ☁️ Architecture

Local Dev → Docker Build → CI/CD Pipeline → Cloud Run Deployment

- Code pushed to GitHub
- Pipeline builds Docker image
- Security scan runs (Trivy)
- Image deployed automatically to Cloud Run

---

## 🔁 CI/CD Pipeline

- GitHub Actions workflow
- OIDC authentication (no static credentials)
- Automated build, scan, and deploy

---

## 🔐 Authentication Flow

1. POST `/login` → returns JWT  
2. Client sends token via header  
3. Backend validates token  
4. Access granted to `/protected`

Example:

```bash
curl -X POST https://your-api-url/login \
  -H "Content-Type: application/json" \
  -d '{"username":"admin","password":"123456"}'