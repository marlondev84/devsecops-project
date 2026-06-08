## 📊 Monitoring, Observability & Security Detection

Production-style **observability, security monitoring, threat detection, and secure CI/CD controls** were implemented using **Google Cloud Monitoring, Cloud Logging, log-based metrics, alerting policies, GitHub Actions, and automated vulnerability scanning**.

### Observability Features

Implemented monitoring capabilities include:

* Structured JSON logging
* Centralized Cloud Logging
* API uptime monitoring
* Health check endpoint monitoring
* Availability validation
* Automated incident alerting
* Login failure tracking
* Security event monitoring
* Dependency vulnerability scanning (Trivy)
* Secret scanning in CI/CD
* Environment-specific deployment monitoring
* Multi-environment deployment observability (`dev` / `prod`)

---

### Structured Logging

Authentication events are logged using **structured JSON logging**, improving observability, troubleshooting, and security event analysis.

Example security event:

```json
{
  "event": "login_failed",
  "username": "admin",
  "reason": "wrong_password",
  "timestamp": "2026-05-29T13:36:39.857Z"
}
```

This approach improves:

* Incident investigation
* Authentication troubleshooting
* Security event correlation
* Cloud-native log analysis

---

### 🔐 Security Monitoring

The project implements **log-based security metrics** capable of tracking suspicious authentication activity.

A custom metric was created in **Google Cloud Monitoring**:

```text
failed_login_count
```

This metric tracks:

* Failed login attempts
* Authentication anomalies
* Suspicious access patterns
* Potential brute-force activity

---

### 🛡️ Threat Detection & Alerting

A **production-style brute-force detection workflow** was implemented using:

* Cloud Logging
* Log-based Metrics
* Google Cloud Monitoring
* Alert Policies

If failed authentication attempts exceed a configured threshold within a time window, an alert is triggered automatically.

This simulates real-world **DevSecOps, SRE, and security incident detection workflows**.

---

### 🔎 Automated Vulnerability Scanning (DevSecOps)

Security is integrated directly into the **CI/CD pipeline**.

Every deployment automatically triggers:

```text
Code Push
↓
Jest Automated Tests
↓
Trivy Vulnerability Scan
↓
Deployment Security Gate
↓
OIDC Authentication to Google Cloud
↓
Cloud Run Deployment
```

**Trivy** scans project dependencies for:

* Known vulnerabilities (CVEs)
* HIGH / CRITICAL severity issues
* Dependency security risks
* Exposed secrets

Deployment is automatically **blocked if HIGH or CRITICAL vulnerabilities are detected**, simulating production-grade **security gating**.

This follows **shift-left security principles**, helping identify vulnerabilities before production deployment.

---

### 🔄 Multi-Environment Deployment Strategy

The project follows a **branch-based deployment model** to improve release safety and environment isolation.

Deployment flow:

```text
develop branch
↓
GitHub Actions
↓
Tests + Trivy Security Scan
↓
Deploy → secure-api-dev
```

```text
main branch
↓
GitHub Actions
↓
Tests + Trivy Security Scan
↓
Deploy → secure-api
```

This simulates a **production-style SDLC workflow**, reducing deployment risk by separating development and production environments.

Implemented environments:

| Environment | Branch    | Cloud Run Service |
| ----------- | --------- | ----------------- |
| Development | `develop` | `secure-api-dev`  |
| Production  | `main`    | `secure-api`      |

---

### 📈 Uptime Monitoring

Google Cloud continuously validates API availability through:

```http
GET /health
```

The system monitors:

* Endpoint availability
* Service uptime
* Response failures
* Reliability issues

Alerting policies automatically notify failures, following **production reliability engineering practices**.

---

## 📈 Future Improvements

Planned enhancements include:

### 🔐 Security Enhancements

* Role-Based Access Control (RBAC)
* API Rate Limiting
* Refresh Token Rotation
* Audit Logging Expansion
* Dependency Policy Enforcement
* Security Testing Automation

### ☁️ Cloud Infrastructure

* Full Terraform Infrastructure Coverage
* Multi-Environment Expansion (`staging`)
* Kubernetes / GKE Migration
* Cloud Cost Optimization

### 📊 Observability & Reliability

* Latency Monitoring
* Error Budget Tracking
* SLO/SLI Implementation
* Centralized Observability Dashboards
* Distributed Tracing

### 🧪 Testing

* Increased Automated Test Coverage
* Security Testing
* Load Testing
* Integration Testing
