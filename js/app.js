// =========================
// APP INITIALIZATION
// =========================

document.addEventListener("DOMContentLoaded", () => {
  initApp();
});

function initApp() {
  setupEventListeners();
  loadInitialMessage();
}

// =========================
// EVENT LISTENERS
// =========================

function setupEventListeners() {
  const sendBtn = document.getElementById("sendBtn");
  const userInput = document.getElementById("userInput");
  const quickButtons = document.querySelectorAll(".quick-btn");

  // Send button click
  sendBtn.addEventListener("click", handleUserMessage);

  // Enter key press
  userInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      handleUserMessage();
    }
  });

  // Quick action buttons
  quickButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const action = button.dataset.action;
      handleQuickAction(action);
    });
  });
}

// =========================
// HANDLE USER INPUT
// =========================

function handleUserMessage() {
  const userInput = document.getElementById("userInput");
  const message = userInput.value.trim();

  if (message === "") return;

  // Add user message to UI
  addMessage("user", message);

  // Clear input
  userInput.value = "";

  // Show typing indicator
  showTyping();

  // Simulate bot response delay
  setTimeout(() => {
    removeTyping();

    const botReply = getBotResponse(message);
    addMessage("bot", botReply);

    saveMessage("user", message);
    saveMessage("bot", botReply);
  }, 1000);
}

// =========================
// QUICK ACTION HANDLER
// =========================

function handleQuickAction(action) {
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
  }

  if (message) {
    addMessage("user", message);
    showTyping();

    setTimeout(() => {
      removeTyping();

      const botReply = getBotResponse(message);
      addMessage("bot", botReply);

      saveMessage("user", message);
      saveMessage("bot", botReply);
    }, 1000);
  }
}

// =========================
// INITIAL MESSAGE
// =========================

function loadInitialMessage() {
  const messages = getStoredMessages();

  if (messages.length === 0) {
    addMessage("bot", "Welcome! How can I assist you today?");
  } else {
    messages.forEach((msg) => {
      addMessage(msg.sender, msg.message);
    });
  }
}
