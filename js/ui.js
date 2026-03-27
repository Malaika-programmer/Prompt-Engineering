// =========================
// ADD MESSAGE TO CHAT
// =========================

function addMessage(sender, text) {
  const chatBody = document.getElementById("chatBody");

  const messageDiv = document.createElement("div");
  messageDiv.classList.add("message");

  if (sender === "user") {
    messageDiv.classList.add("user-message");
  } else {
    messageDiv.classList.add("bot-message");
  }

  messageDiv.innerHTML = `<p>${text}</p>`;

  chatBody.appendChild(messageDiv);

  scrollToBottom();
}

// =========================
// TYPING INDICATOR
// =========================

function showTyping() {
  const chatBody = document.getElementById("chatBody");

  const typingDiv = document.createElement("div");
  typingDiv.classList.add("typing-indicator");
  typingDiv.setAttribute("id", "typingIndicator");

  typingDiv.innerHTML = `
        <div class="typing-dot"></div>
        <div class="typing-dot"></div>
        <div class="typing-dot"></div>
    `;

  chatBody.appendChild(typingDiv);

  scrollToBottom();
}

function removeTyping() {
  const typing = document.getElementById("typingIndicator");
  if (typing) typing.remove();
}

// =========================
// AUTO SCROLL
// =========================

function scrollToBottom() {
  const chatBody = document.getElementById("chatBody");
  chatBody.scrollTop = chatBody.scrollHeight;
}
