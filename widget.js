const toggle = document.getElementById("chat-toggle");
const panel = document.getElementById("chat-panel");
const closeBtn = document.getElementById("close-btn");
const sendBtn = document.getElementById("send-btn");
const input = document.getElementById("chat-input");
const body = document.getElementById("chat-body");

toggle.onclick = () => {
  panel.style.display = "flex";
  panel.style.flexDirection = "column";
};

closeBtn.onclick = () => {
  panel.style.display = "none";
};

sendBtn.onclick = sendMessage;

input.addEventListener("keypress", (e) => {
  if (e.key === "Enter") sendMessage();
});

function sendMessage() {
  const text = input.value.trim();
  if (!text) return;

  addMessage(text, "user");
  input.value = "";

  setTimeout(() => {
    addMessage("Hola!! 🤖 Botty ha recibido este mensaje: " + text, "bot");
    body.scrollTop = body.scrollHeight;
  }, 600);
}

function addMessage(text, type) {
  const div = document.createElement("div");
  div.classList.add("msg", type);
  div.innerText = text;
  body.appendChild(div);
}
