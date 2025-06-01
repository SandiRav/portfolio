import Mailjet from "node-mailjet";

const mailjetAPIKey = process.env.MAILJET_API_KEY;
const mailjetSecretKey = process.env.MAILJET_SECRET_KEY;

export async function POST(req: any) {
  try {
    const body = await req.json();
    console.log("Request body:", body);

    const { name, email, message, subject } = body;

    if (!name || !email || !message || !subject) {
      return new Response(
        JSON.stringify({ error: "Missing required fields" }),
        {
          status: 400,
          headers: {
            "Content-Type": "application/json",
          },
        },
      );
    }

    if (!mailjetAPIKey || !mailjetSecretKey) {
      console.error("Mailjet API keys are missing");
      return new Response(
        JSON.stringify({ error: "Email service configuration error" }),
        {
          status: 500,
          headers: {
            "Content-Type": "application/json",
          },
        },
      );
    }

    const mailjet = Mailjet.apiConnect(mailjetAPIKey, mailjetSecretKey);

    const response = await mailjet.post("send", { version: "v3.1" }).request({
      Messages: [
        {
          From: {
            Email: process.env.FROM_EMAIL || email,
            Name: "Portfolio Contact Form",
          },
          To: [
            {
              Email: process.env.TO_EMAIL,
              Name: "Portfolio Owner",
            },
          ],
          Subject: `Portfolio Contact: ${subject}`,
          TextPart: `
              Name: ${name}
              Email: ${email}
              
              Message:
              ${message}
            `,
          HTMLPart: `
              <h3>New message from your portfolio contact form</h3>
              <p><strong>Name:</strong> ${name}</p>
              <p><strong>Email:</strong> ${email}</p>
              <p><strong>Subject:</strong> ${subject}</p>
              <p><strong>Message:</strong></p>
              <p>${message.replace(/\n/g, "<br>")}</p>
            `,
          ReplyTo: {
            Email: email,
            Name: name,
          },
        },
      ],
    });

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error: any) {
    console.error("Error sending email:", error);
    return new Response(
      JSON.stringify({ error: error.message || "Failed to send email" }),
      {
        status: 500,
        headers: {
          "Content-Type": "application/json",
        },
      },
    );
  }
}
