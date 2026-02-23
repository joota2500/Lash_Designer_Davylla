document.addEventListener("DOMContentLoaded", () => {

  const carousel = document.getElementById("carouselHeader");
  const header = document.getElementById("topoFixo");
  const btnWhatsapp = document.getElementById("btnWhatsapp");

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
     WHATSAPP
  =============================== */

  if (btnWhatsapp) {

    btnWhatsapp.addEventListener("click", () => {

      const numero = "5585991171274"; // Seu número correto
      const mensagem = "Olá, vim pelo site e gostaria de agendar um horário.";

      const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`;

      window.open(url, "_blank");

    });

  }

});