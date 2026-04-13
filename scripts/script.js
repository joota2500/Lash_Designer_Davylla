document.addEventListener("DOMContentLoaded", () => {

  const carousel = document.getElementById("carouselHeader");
  const header = document.getElementById("topoFixo");
  const btnWhatsapp = document.getElementById("btnWhatsapp");
  const btnAgendar = document.querySelector(".btn-agendar");
  const secoes = document.querySelectorAll(".secao");

  const menuToggle = document.getElementById("menuToggle");
  const menuLista = document.getElementById("menuLista");
  const overlayMenu = document.getElementById("overlayMenu");

  let ultimoScroll = 0;

  /* ===============================
     WHATSAPP BASE
  =============================== */
  function enviarWhatsApp(mensagem) {
    const numero = "5585991171274";
    const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`;
    window.open(url, "_blank");
  }

  /* ===============================
     MENU TOGGLE (🔥 NOVO)
  =============================== */
  if (menuToggle && menuLista && overlayMenu) {

    menuToggle.addEventListener("click", () => {
      menuLista.classList.toggle("ativo");
      overlayMenu.classList.toggle("ativo");
    });

    overlayMenu.addEventListener("click", () => {
      menuLista.classList.remove("ativo");
      overlayMenu.classList.remove("ativo");
    });

    // FECHA AO CLICAR
    menuLista.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", () => {
        menuLista.classList.remove("ativo");
        overlayMenu.classList.remove("ativo");
      });
    });
  }

  /* ===============================
     SCROLL HEADER
  =============================== */
  window.addEventListener("scroll", () => {

    const scrollAtual = window.scrollY;

    if (carousel) {
      carousel.classList.toggle("ocultar", scrollAtual > 50);
    }

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
     MENU ATIVO
  =============================== */
  const links = document.querySelectorAll(".menu-lista a");

  window.addEventListener("scroll", () => {
    let current = "";

    document.querySelectorAll("section").forEach(section => {
      const sectionTop = section.offsetTop - 120;

      if (scrollY >= sectionTop) {
        current = section.getAttribute("id");
      }
    });

    links.forEach(a => {
      a.classList.remove("ativo");

      if (a.getAttribute("href") === "#" + current) {
        a.classList.add("ativo");
      }
    });
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
          behavior: "smooth"
        });
      }
    });
  });

  /* ===============================
     BOTÃO WHATSAPP
  =============================== */
  if (btnWhatsapp) {
    btnWhatsapp.addEventListener("click", () => {
      btnWhatsapp.textContent = "Abrindo...";
      enviarWhatsApp("Olá, vi seu site e quero mais informações.");
    });
  }

  if (btnAgendar) {
    btnAgendar.addEventListener("click", (e) => {
      e.preventDefault();
      enviarWhatsApp("Olá, quero agendar um horário.");
    });
  }

  /* ===============================
     WHATSAPP FIXO
  =============================== */
  const btnFixo = document.getElementById("whatsappFixo");

  if (btnFixo) {
    btnFixo.addEventListener("click", (e) => {
      e.preventDefault();
      enviarWhatsApp("Olá! Vim pelo site e quero agendar.");
    });
  }

  /* ===============================
     FAQ
  =============================== */
  document.querySelectorAll(".faq-pergunta").forEach(btn => {
    btn.addEventListener("click", () => {
      btn.parentElement.classList.toggle("ativo");
    });
  });

  const btnFaq = document.getElementById("btnFaq");
  const faqExtra = document.querySelector(".faq-extra");

  if (btnFaq && faqExtra) {
    btnFaq.addEventListener("click", () => {
      const hidden = faqExtra.classList.toggle("esconder-faq");
      btnFaq.textContent = hidden ? "Ver mais perguntas" : "Ocultar perguntas";
    });
  }

  /* ===============================
     ANIMAÇÃO SCROLL
  =============================== */
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("aparecer");
      }
    });
  }, { threshold: 0.15 });

  secoes.forEach(secao => observer.observe(secao));

});