// kai-juliusbrussee-caveman-pm3o — A lightweight, secure JSON API for monitoring and mitigating server-side vulnerabilities.
// Zero-dependency Cloudflare Worker JSON API. Deploys as-is to *.workers.dev.

/** Seed data for GET /alerts. Replace with real content when building. */
const alerts: unknown[] = [{"id":1,"description":"Potential unauthorized access detected."},{"id":2,"description":"Server-side request forgery attempt blocked."}];

const json = (data: unknown, status = 200): Response =>
  new Response(JSON.stringify(data, null, 2), {
    status,
    headers: { "content-type": "application/json; charset=utf-8" },
  });

export default {
  async fetch(request: Request): Promise<Response> {
    const { pathname } = new URL(request.url);

    if (pathname === "/" || pathname === "/health") {
      return json({ ok: true, service: "kai-juliusbrussee-caveman-pm3o", now: Date.now() });
    }

    if (pathname === "/alerts") {
      return json({ alerts });
    }

    if (pathname === "/echo") {
      const body = request.method === "GET" ? null : await request.text();
      return json({ method: request.method, body });
    }

    return json({ error: "not found", path: pathname }, 404);
  },
};
