document.addEventListener("DOMContentLoaded", () => {

  const carousel = document.getElementById("carouselHeader");
  const header = document.getElementById("topoFixo");
  const btnWhatsapp = document.getElementById("btnWhatsapp");
  const secoes = document.querySelectorAll(".secao");

  let ultimoScroll = 0;

  /* ===============================
     EFEITO SCROLL (CARROSSEL + MENU)
  =============================== */
  window.addEventListener("scroll", () => {

    const scrollAtual = window.scrollY;

    // Oculta carrossel suavemente
    if (carousel) {
      if (scrollAtual > 50) {
        carousel.classList.add("ocultar");
      } else {
        carousel.classList.remove("ocultar");
      }
    }

    // Esconde menu ao rolar para baixo
    if (header) {
      if (scrollAtual > ultimoScroll && scrollAtual > 150) {
        header.classList.add("esconder");
      } else {
        header.classList.remove("esconder");
      }
    }

    ultimoScroll = scrollAtual;

  });


  // ================= TOGGLE SERVIÇOS =================
const btnServicos = document.getElementById("btnServicos");
const listaServicos = document.getElementById("lista-servicos");

if (btnServicos && listaServicos) {
  btnServicos.addEventListener("click", () => {

    if (listaServicos.classList.contains("esconder-servicos")) {
      listaServicos.classList.remove("esconder-servicos");
      btnServicos.textContent = "Ocultar valores";
    } else {
      listaServicos.classList.add("esconder-servicos");
      btnServicos.textContent = "Ver valores";
    }

  });
}

  /* ===============================
     SCROLL SUAVE
  =============================== */
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", function (e) {
      e.preventDefault();

      const target = document.querySelector(this.getAttribute("href"));

      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });
      }
    });
  });

  /* ===============================
     WHATSAPP INTELIGENTE (UPGRADE)
  =============================== */
  if (btnWhatsapp) {

    const hora = new Date().getHours();

    if (hora >= 8 && hora <= 20) {
      btnWhatsapp.textContent = "Agendar agora no WhatsApp";
    } else {
      btnWhatsapp.textContent = "Enviar mensagem no WhatsApp";
    }

    btnWhatsapp.addEventListener("click", () => {

      const numero = "5585991171274";
      const mensagem = "Olá, vim pelo site e gostaria de agendar um horário.";

      const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`;

      window.open(url, "_blank");

    });

  }

  /* ===============================
     SCROLL REVEAL (NOVO)
  =============================== */
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("aparecer");
      }
    });
  }, {
    threshold: 0.15
  });

  secoes.forEach(secao => {
    observer.observe(secao);
  });

});