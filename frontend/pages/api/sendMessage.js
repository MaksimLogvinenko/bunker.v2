import fetch from "node-fetch";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const data = req.body;

    const botToken = process.env.BOT_TOKEN;
    const chatId = process.env.CHAT_ID;

    const apiUrl = `https://api.telegram.org/bot${botToken}/sendMessage`;
    const response = await fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        chat_id: chatId,
        text: `Name: ${data.name}\nEmail: ${data.email}\nMessage: ${data.message}`,
      }),
    });

    if (response.ok) {
      return res.status(200).json({ success: true });
    } else {
      const data = await response.json();
      return res.status(500).json({ success: false, error: data.description });
    }
  } else {
    return res.status(405).end();
  }
}
