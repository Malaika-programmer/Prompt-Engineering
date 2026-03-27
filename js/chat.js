// =========================
// SEND MESSAGE FLOW
// =========================

function processUserMessage(message) {
  if (!message || message.trim() === "") return;

  const cleanMessage = message.trim();

  // 1. Show user message
  addMessage("user", cleanMessage);

  // 2. Save user message
  saveMessage("user", cleanMessage);

  // 3. Show typing indicator
  showTyping();

  // 4. Generate bot response after delay
  setTimeout(() => {
    removeTyping();

    const botReply = getBotResponse(cleanMessage);

    // 5. Show bot message
    addMessage("bot", botReply);

    // 6. Save bot message
    saveMessage("bot", botReply);
  }, 1000);
}

// =========================
// QUICK ACTION FLOW
// =========================

function processQuickAction(action) {
  let message = "";

  switch (action) {
    case "formal":
      message = "Show me formal wear";
      break;

    case "bridal":
      message = "I am looking for bridal dresses";
      break;

    case "alterations":
      message = "I need alterations service";
      break;

    default:
      return;
  }

  processUserMessage(message);
}

// =========================
// LOAD CHAT HISTORY
// =========================

function loadChatHistory() {
  const messages = getStoredMessages();

  if (!messages.length) {
    addMessage("bot", "Welcome! How can I assist you today?");
    return;
  }

  messages.forEach((msg) => {
    addMessage(msg.sender, msg.message);
  });
}

// =========================
// CLEAR CHAT UI + STORAGE
// =========================

function resetChat() {
  const chatBody = document.getElementById("chatBody");

  // Clear UI
  chatBody.innerHTML = "";

  // Clear storage
  clearChat();

  // Add welcome message again
  addMessage("bot", "Chat cleared. How can I assist you now?");
}
