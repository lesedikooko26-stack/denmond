// ---------------------------------------------------------
// DENMOND — centralized WhatsApp number + message helpers
// ---------------------------------------------------------
// Replace this with your real number in international
// format, digits only (no +, spaces, brackets, hyphens).
// Example: "27821234567"
// ---------------------------------------------------------
export const WHATSAPP_NUMBER = "27000000000"; // TODO: replace with your real WhatsApp number

function openWhatsApp(message) {
  const encodedMessage = encodeURIComponent(message);
  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;
  window.open(url, "_blank", "noopener,noreferrer");
}

export function orderProductViaWhatsApp(product, quantity = 1) {
  const message =
    `Hello DENMOND 👋\n\n` +
    `I would like to order:\n\n` +
    `Product: ${product.name}\n` +
    `Quantity: ${quantity}\n` +
    `Price: R${product.price}\n\n` +
    `Please let me know how I can proceed.\n\n` +
    `Thank you.`;
  openWhatsApp(message);
}

export function orderCartViaWhatsApp(items, total) {
  const lines = items
    .map(
      (item) =>
        `• ${item.name}\n  Quantity: ${item.quantity}\n  Price: R${item.price}`
    )
    .join("\n\n");

  const message =
    `Hello DENMOND 👋\n\n` +
    `I would like to place an order:\n\n` +
    `${lines}\n\n` +
    `Total: R${total}\n\n` +
    `Please let me know how I can proceed with the order.\n\n` +
    `Thank you.`;
  openWhatsApp(message);
}

export function sendEnquiryViaWhatsApp() {
  const message =
    `Hello DENMOND 👋\n\n` + `I would like to enquire about your collection.`;
  openWhatsApp(message);
}
