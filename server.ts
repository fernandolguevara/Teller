import { serve } from "https://deno.land/std@0.155.0/http/server.ts";


serve((req: Request) => {
    const url = new URL(req.url)

    if (req.method === 'GET' && url.pathname === "index.html") {
        return new Response("<h1>asd</h1>")
    }


    return new Response(JSON.stringify({ url: url.href, method: req.method }));
});
