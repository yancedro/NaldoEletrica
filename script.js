/**
 * Configura os links do WhatsApp com saudação baseada no horário
 * e identificação de origem do site.
 */
function configurarLinksWhatsapp() {
  const agora = new Date();
  const hora = agora.getHours();
  let saudacao = "Bom dia";

  if (hora >= 12 && hora < 18) {
    saudacao = "Boa tarde";
  } else if (hora >= 18 || hora < 5) {
    saudacao = "Boa noite";
  }

  // Mensagem personalizada para o Naldo
  const textoBase = `${saudacao}! Naldo, Vi o seu site e gostaria de solicitar um orçamento para um serviço.`;
  const mensagemCodificada = encodeURIComponent(textoBase);
  const linkFinal = `https://wa.me/5521991438293?text=${mensagemCodificada}`;

  // Captura todos os links que apontam para o wa.me
  const botoesWpp = document.querySelectorAll('a[href*="wa.me"]');

  botoesWpp.forEach((botao) => {
    botao.setAttribute("href", linkFinal);
  });
}

// Garante que o script rode apenas após o carregamento total do DOM
document.addEventListener("DOMContentLoaded", configurarLinksWhatsapp);
