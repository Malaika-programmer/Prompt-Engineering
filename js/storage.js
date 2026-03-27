// =========================
// STORAGE KEY
// =========================

const STORAGE_KEY = "chat_messages";

// =========================
// SAVE MESSAGE
// =========================

function saveMessage(sender, message) {
  const messages = getStoredMessages();

  messages.push({
    sender: sender,
    message: message,
  });

  localStorage.setItem(STORAGE_KEY, JSON.stringify(messages));
}

// =========================
// GET STORED MESSAGES
// =========================

function getStoredMessages() {
  const data = localStorage.getItem(STORAGE_KEY);

  if (!data) return [];

  try {
    return JSON.parse(data);
  } catch (error) {
    console.error("Error parsing stored messages:", error);
    return [];
  }
}

// =========================
// CLEAR CHAT (Optional Utility)
// =========================

function clearChat() {
  localStorage.removeItem(STORAGE_KEY);
}
