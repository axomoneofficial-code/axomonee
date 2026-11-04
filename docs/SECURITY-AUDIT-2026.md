# AXOM ONE — Application Security Audit Report
**Date**: October 31, 2026  
**Auditor**: Senior Application Security & Secure Full-Stack Engineer  
**Target Platform**: AXOM ONE (অসম এক মঞ্চ) — District-First Digital Platform for Assam  
**Scope**: Frontend (React 18 + Vite), Edge API Worker (`worker/index.ts`), Cloudflare D1 Database (`worker/migrations/`), Directory Engine (`src/features/directory/`), Tourism Portal, and Public Submissions.

---

## 1. Executive Summary

AXOM ONE was audited across 10 security domains:
1. Authentication & Credential Storage
2. Session Management & Session Fixation
3. Authorization, Privilege Escalation & IDOR
4. Database Security & Query Parameterization
5. Input Validation & API Payload Constraints
6. Cross-Site Scripting (XSS), CSRF & CORS
7. Image & File Upload / Remote Asset Security
8. Explore Assam Directory & Source URL Integrity
9. Secrets, Environment Variables & Client Bundles
10. Audit Logging, Error Handling & DPDP Compliance

Overall, the core architecture is fundamentally solid: it utilizes parameterized SQL queries (`db.prepare().bind()`), native Web Crypto APIs (`SubtleCrypto`), and React's automatic contextual escaping. However, 12 specific vulnerabilities spanning Critical, High, and Medium severity were identified that require systematic hardening before public production deployment.

---

## 2. Risk Classification Matrix

| Risk ID | Vulnerability Description | Category | Severity | Status |
| :--- | :--- | :--- | :--- | :--- |
| **SEC-01** | Static Default Salt in PBKDF2 Password Hashing | Authentication | **CRITICAL** | Remediated |
| **SEC-02** | Plaintext Fallback Backdoor in `verifyPassword` | Authentication | **CRITICAL** | Remediated |
| **SEC-03** | Hardcoded Demo Credentials & Hints in Frontend Bundle | Secrets / Client Code | **CRITICAL** | Remediated |
| **SEC-04** | Wildcard CORS Combined with `Access-Control-Allow-Credentials` | CORS / Browser Security | **CRITICAL** | Remediated |
| **SEC-05** | Missing Anti-CSRF Token Enforcement on State Mutations | CSRF | **HIGH** | Remediated |
| **SEC-06** | Timing-Vulnerable Password & Token Comparison | Cryptography | **HIGH** | Remediated |
| **SEC-07** | Unvalidated Link Schemes (`javascript:` / `data:` XSS vectors) | XSS / URL Sanitization | **HIGH** | Remediated |
| **SEC-08** | Unhandled `new URL()` Exception in DirectoryCard Component | Availability / Crash | **HIGH** | Remediated |
| **SEC-09** | CSP Missing Explicit Media Whitelist (Wikimedia Commons) | CSP / Browser Defense | **MEDIUM** | Remediated |
| **SEC-10** | Missing Session Rotation & Invalidation on Authentication | Session Security | **MEDIUM** | Remediated |
| **SEC-11** | Unbounded Payload Lengths on Public Submission Endpoints | Input Validation / DoS | **MEDIUM** | Remediated |
| **SEC-12** | Generic Error Masking & Stack Trace Leakage Prevention | Error Handling | **LOW** | Remediated |
