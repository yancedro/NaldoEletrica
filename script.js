/**
 * Configura os links do WhatsApp e Gerencia o Menu Ativo
 */
function inicializarSite() {
  // --- PARTE 1: WHATSAPP ---
  const agora = new Date();
  const hora = agora.getHours();
  let saudacao = "Bom dia";

  if (hora >= 12 && hora < 18) saudacao = "Boa tarde";
  else if (hora >= 18 || hora < 5) saudacao = "Boa noite";

  const textoBase = `${saudacao}! Naldo, Vi o seu site e gostaria de solicitar um orçamento para um serviço.`;
  const mensagemCodificada = encodeURIComponent(textoBase);
  const linkFinal = `https://wa.me/5521991438293?text=${mensagemCodificada}`;

  const botoesWpp = document.querySelectorAll('a[href*="wa.me"]');
  botoesWpp.forEach((botao) => {
    botao.setAttribute("href", linkFinal);
  });

  // --- PARTE 2: MENU ATIVO (CLICK) ---
  const navLinks = document.querySelectorAll("nav a");

  navLinks.forEach((link) => {
    link.addEventListener("click", function () {
      // 1. Remove a classe de TODOS os links
      navLinks.forEach((l) => l.classList.remove("active-link"));

      // 2. Adiciona apenas no link clicado
      this.classList.add("active-link");
    });
  });
}

// Executa quando o DOM estiver pronto
document.addEventListener("DOMContentLoaded", inicializarSite);
