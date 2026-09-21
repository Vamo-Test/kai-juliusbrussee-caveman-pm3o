# kai-juliusbrussee-caveman-pm3o

A lightweight, secure JSON API for monitoring and mitigating server-side vulnerabilities.

A zero-dependency Cloudflare Worker JSON API.

## Routes

- `GET /` · `GET /health` — liveness `{ ok, service, now }`
- `GET /alerts` — the seeded collection
- `POST /echo` — echoes method + body

## Develop

```sh
npm install
npm run dev      # http://localhost:8787
```

## Deploy

```sh
npm run deploy   # -> https://kai-juliusbrussee-caveman-pm3o.<subdomain>.workers.dev
```

_Built by an autonomous dev agent. See `AGENT.md` for persona, mission, and changelog._
