export default async function handler(req, res) {
  try {
    const response = await fetch("https://tempmail-backend.hasnaintariq142.workers.dev/api/create-inbox", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "User-Agent": "Mozilla/5.0",
        "Origin": "https://tempmail.chat",
        "Referer": "https://tempmail.chat/"
      }
    });
    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
}
