// =========================
// BOT RESPONSE ENGINE
// =========================

function getBotResponse(userMessage) {
  const message = userMessage.toLowerCase();

  // =========================
  // FORMAL WEAR
  // =========================
  if (message.includes("formal")) {
    return "We offer premium formal wear including suits, blazers, and evening dresses. Would you like recommendations for men or women?";
  }

  // =========================
  // BRIDAL
  // =========================
  if (message.includes("bridal") || message.includes("wedding")) {
    return "Our bridal collection features luxurious handcrafted dresses with elegant embroidery. Do you prefer traditional or modern styles?";
  }

  // =========================
  // ALTERATIONS
  // =========================
  if (message.includes("alteration") || message.includes("resize")) {
    return "We provide expert alteration services to ensure the perfect fit. Please tell us what changes you need.";
  }

  // =========================
  // GREETINGS
  // =========================
  if (message.includes("hi") || message.includes("hello")) {
    return "Welcome to our luxury fashion assistant. How may I assist you today?";
  }

  // =========================
  // DEFAULT RESPONSE
  // =========================
  return "I'm here to assist with formal wear, bridal collections, and alterations. Could you please specify your requirement?";
}
