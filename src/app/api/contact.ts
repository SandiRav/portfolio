import Mailjet from "node-mailjet";

const mailjetAPIKey = process.env.MAILJET_API_KEY;
const mailjetSecretKey = process.env.MAILJET_SECRET_KEY;

export default async function handler(req: any, res: any) {
  // Only allow POST requests
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    // Get form data from request body
    console.log("req.body", req.body);
    const { name, email, message, subject } = req.body;

    // Validate form data
    if (!name || !email || !message || !subject) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    // Configure Mailjet with your API keys
    const mailjet = Mailjet.apiConnect(
      mailjetAPIKey as string,
      mailjetSecretKey as string,
    );

    // Send email using Mailjet
    const response = await mailjet.post("send", { version: "v3.1" }).request({
      Messages: [
        {
          From: {
            Email: process.env.FROM_EMAIL, // Your verified sender email in Mailjet
            Name: "Portfolio Contact Form",
          },
          To: [
            {
              Email: process.env.TO_EMAIL, // Your email where you want to receive messages
              Name: "Portfolio Owner",
            },
          ],
          Subject: `Portfolio Contact: Message from ${name}`,
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

    // Return success response
    return res.status(200).json({ success: true });
  } catch (error) {
    console.error("Error sending email:", error);
    return res.status(500).json({ error: "Failed to send email" });
  }
}
