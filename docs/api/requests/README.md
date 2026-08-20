# HTTP Requests

Store runnable manual API requests in `.http` files, grouped by resource or capability:

```text
health.http
authentication.http
users.http
```

Each request file should:

- Use environment variables for base URLs, credentials, and tokens.
- Avoid committed secrets or personal data.
- Include a short description of the behavior being exercised.
- Include representative success and failure cases when useful.
- Remain aligned with the API contract and current implementation.

These files support exploration and manual verification. They do not replace automated API tests.
