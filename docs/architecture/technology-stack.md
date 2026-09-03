# Technology Stack

This document records the selected technologies for the web and mobile
applications, backend services, integrations, observability, and delivery
pipeline. It describes the intended stack; individual features remain subject
to their implementation issues and architecture decisions.

## Applications

| Technology | Responsibility                             |
| ---------- | ------------------------------------------ |
| Next.js    | Web application                            |
| Expo       | Mobile application development and runtime |

## Backend and Data

| Technology              | Responsibility                    |
| ----------------------- | --------------------------------- |
| Supabase Auth           | User authentication and identity  |
| Supabase Postgres       | Relational application data       |
| Supabase Storage        | File and object storage           |
| Supabase Edge Functions | Server-side functions at the edge |

## Client Data and Validation

| Technology     | Responsibility                                            |
| -------------- | --------------------------------------------------------- |
| TanStack Query | Asynchronous client state and server-data synchronization |
| Zod            | Runtime schema validation and type-safe data parsing      |

## Product Services

| Technology | Responsibility               |
| ---------- | ---------------------------- |
| Stripe     | Payments and billing         |
| Resend     | Transactional email delivery |

## Observability and Analytics

| Technology | Responsibility                               |
| ---------- | -------------------------------------------- |
| Sentry     | Error monitoring and application diagnostics |
| PostHog    | Product analytics                            |

## Delivery

| Technology     | Responsibility                         |
| -------------- | -------------------------------------- |
| GitHub Actions | Continuous integration and automation  |
| Vercel         | Web application deployment and hosting |
| EAS            | Mobile application builds and delivery |

Record significant changes to these selections in an architecture decision
record when the decision requires lasting rationale, alternatives, or migration
context.
