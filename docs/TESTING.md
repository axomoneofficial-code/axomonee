# AXOM ONE — Automated Testing Suite

## 1. Test Architecture

The AXOM ONE test suite is built on **Vitest** for fast execution, TypeScript type safety, and zero external mock dependencies.

```bash
# Execute test suite
npm run test
```

---

## 2. Test Coverage Matrix

| Test Suite | File | Verified Behaviors |
| :--- | :--- | :--- |
| **District Integrity** | `src/__tests__/platform.test.ts` | Validates all 35 districts of Assam exist, includes Bajali and Tamulpur, validates English + Assamese Unicode names. |
| **Category Completeness** | `src/__tests__/platform.test.ts` | Validates presence of core civic categories (Businesses, Services, Tourism, Opportunities, Community, Crafts). |
| **Directory Filtering** | `src/__tests__/platform.test.ts` | Validates that only `moderation_status = 'published'` listings are exposed to the public API. |
| **District Isolation** | `src/__tests__/platform.test.ts` | Verifies district filtering matches exact slug. |
| **Keyword Search** | `src/__tests__/platform.test.ts` | Verifies search matches across title and description. |
| **Pending Moderation Queue** | `src/__tests__/platform.test.ts` | Verifies user submissions receive `pending` status and are NOT returned in public search. |
| **Approval Workflow** | `src/__tests__/platform.test.ts` | Verifies administrator can approve pending submissions into published state. |
| **Rejection Workflow** | `src/__tests__/platform.test.ts` | Verifies rejection attaches reviewer notes and removes entry from active queue. |
| **Content Reporting** | `src/__tests__/platform.test.ts` | Verifies user flags create open tickets in the moderation queue. |
| **Audit Trail** | `src/__tests__/platform.test.ts` | Verifies administrative actions persist immutable audit log records. |
| **Admin Authentication** | `src/__tests__/platform.test.ts` | Validates rejection of incorrect credentials, generation of session token, and logout revocation. |
