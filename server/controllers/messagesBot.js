export const botReply = async (req, res) => {
  try {
    const { senderMsg } = req.body;
    const response = await fetch("http://127.0.0.1:8000/chat", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ message: senderMsg }),
    });
    const data = await response.json();
    if (data.error) throw new Error(data.error);
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};