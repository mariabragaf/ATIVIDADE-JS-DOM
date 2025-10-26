const botaoTema = document.getElementById("btn-tema");
const body = document.body;
const anoSpam = document.getElementById("ano");

anoSpam.textContent = new Date().getFullYear();

botaoTema.addEventListener("click", () => {
  body.classList.toggle("dark-mode");

if (body.classList.contains("dark-mode")) {
    botaoTema.textContent = "☀️ Modo Claro";
} else {
    botaoTema.textContent = "🌙 Modo Escuro";
}
botaoTema.style.transform = "scale(0.95)";
  setTimeout(() => {
    botaoTema.style.transform = "scale(1)";
  }, 150);
});