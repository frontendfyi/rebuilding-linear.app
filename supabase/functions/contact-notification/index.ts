import { SmtpClient } from "https://deno.land/x/denomailer@1.6.0/mod.ts";
import { serve } from "https://deno.land/std@0.177.0/http/server.ts";
import { NextApiRequest } from "next";

const smtp = new SmtpClient();

serve(async (req: NextApiRequest) => {
  await smtp.connect({
    hostname: Deno.env.get("SMTP_HOSTNAME")!,
    port: Number(Deno.env.get("SMTP_PORT")!),
    username: Deno.env.get("SMTP_USERNAME")!,
    password: Deno.env.get("SMTP_PASSWORD")!,
  });

  const body = await req.json();

  const functionSecret = Deno.env.get("FUNCTION_SECRET");
  const requestSecret = req.headers.get("x-function-secret");

  if (functionSecret !== requestSecret) {
    return new Response("Unauthorized", { status: 401 });
  }

  const { record } = body;

  const content = Object.entries(record).reduce(
    (acc, [key, value]) => acc + `${key}: ${value || "NOT_PROVIDED"}\n`,
    ""
  );

  try {
    await smtp.send({
      from: Deno.env.get("SMTP_FROM")!,
      to: Deno.env.get("SMTP_TO")!,
      subject: `New Contact Form Submission`,
      content,
    });
  } catch (error: any) {
    return new Response(error.message, { status: 500 });
  }

  await smtp.close();

  return new Response(
    JSON.stringify({
      done: true,
    }),
    {
      headers: { "Content-Type": "application/json" },
    }
  );
});
