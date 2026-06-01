# 🔐 Secure API – Cloud-Native DevSecOps Backend

## 📊 Monitoring, Observability & Security Detection

Production-style observability and security monitoring were implemented using **Google Cloud Monitoring, Cloud Logging, log-based metrics, and alerting policies**.

### Observability Features

* Structured **JSON logging**
* Centralized **Cloud Logging**
* **API uptime monitoring**
* Health check endpoint monitoring
* Availability validation
* Automated incident alerting
* Login failure tracking
* Security event monitoring

### Structured Logging

Authentication events are logged in structured JSON format for improved troubleshooting and observability.

Example security event:

```json
{
  "event": "login_failed",
  "username": "admin",
  "reason": "wrong_password",
  "timestamp": "2026-05-29T13:36:39.857Z"
}
```

### Security Monitoring

The project implements **log-based security metrics** capable of tracking failed authentication attempts.

A custom metric was created in **Google Cloud Monitoring**:

```text
failed_login_count
```

This metric tracks:

* Failed login attempts
* Authentication anomalies
* Suspicious access patterns
* Potential brute-force activity

### Threat Detection & Alerting

A **production-style brute-force detection workflow** was implemented using:

* Cloud Logging
* Log-based metrics
* Google Cloud Monitoring
* Alert Policies

If failed authentication attempts exceed a configured threshold within a time window, an alert is triggered automatically.

This simulates **real-world DevSecOps/SRE incident detection workflows**.

### Uptime Monitoring

Google Cloud continuously validates API availability through:

```text
GET /health
```

The system monitors:

* Endpoint availability
* Service uptime
* Response failures
* Reliability issues

Alerting policies notify failures automatically, following **production reliability engineering practices**.

## 📈 Future Improvements

Planned enhancements include:

### Security Enhancements

* Role-Based Access Control (RBAC)
* API rate limiting
* Refresh token rotation
* Audit logging expansion
* Vulnerability scanning automation
* Dependency vulnerability scanning (SCA)

### Cloud Infrastructure

* Full Terraform infrastructure coverage
* Multi-environment deployments (`dev`, `staging`, `prod`)
* Kubernetes / GKE migration
* Cloud cost optimization

### Observability & Reliability

* Latency monitoring
* Error budget tracking
* SLO/SLI implementation
* Centralized observability dashboards
* Distributed tracing

### Testing

* Increased automated test coverage
* Security testing
* Load testing
* Integration testing
