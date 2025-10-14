// Efeitos de fade-in e botão "redirecionar"
document.addEventListener("DOMContentLoaded", () => {
  // Animações de entrada
  const fadeElements = document.querySelectorAll(".fade-in");
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) entry.target.classList.add("visible");
    });
  }, { threshold: 0.1 });
  fadeElements.forEach(el => observer.observe(el));

  // Função do botão principal
  const button = document.querySelector("#assinarBtn");
  if (!button) return;

  button.addEventListener("click", (e) => {
    e.preventDefault();

    // Animação do clique (ripple)
    const ripple = document.createElement("div");
    ripple.style.position = "absolute";
    ripple.style.borderRadius = "50%";
    ripple.style.background = "rgba(255, 255, 255, 0.6)";
    ripple.style.transform = "scale(0)";
    ripple.style.animation = "ripple 0.6s linear";
    ripple.style.left = "50%";
    ripple.style.top = "50%";
    ripple.style.width = "20px";
    ripple.style.height = "20px";
    ripple.style.marginLeft = "-10px";
    ripple.style.marginTop = "-10px";
    button.style.position = "relative";
    button.style.overflow = "hidden";
    button.appendChild(ripple);
    setTimeout(() => ripple.remove(), 600);

    // Texto de carregamento
    const originalText = button.textContent;
    button.textContent = "REDIRECIONANDO...";
    button.disabled = true;

    // Redireciona para o simulado
    const url = "https://resumointeligente.github.io/simulado/";
    window.location.href = url; // muda na mesma aba

    // (Se quiser abrir em nova aba, troque por: window.open(url, "_blank");)
  });
});

// CSS da animação ripple
const style = document.createElement("style");
style.textContent = `
  @keyframes ripple {
    to {
      transform: scale(4);
      opacity: 0;
    }
  }
`;
document.head.appendChild(style);
