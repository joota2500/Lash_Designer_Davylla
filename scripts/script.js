const CONFIG = {
  whatsappNumber: "5585989947614",
  whatsappMessage: "Olá, Davylla! Vim pelo site e gostaria de agendar um horário."
};

const services = [
  {
    title: "Cílios Tufos",
    description: "Aplicação rápida para destacar o olhar de forma prática e acessível.",
    highlight: "R$ 30,00 • Sem manutenção"
  },
  {
    title: "Efeito Fox",
    description: "Alongamento com efeito puxado nos cantos externos, proporcionando um olhar mais marcante e elegante.",
    highlight: "R$ 80,00 • Manutenção: R$ 70,00 (15 a 20 dias)"
  },
  {
    title: "Volume Brasileiro",
    description: "Técnica que proporciona volume equilibrado, mantendo leveza e naturalidade.",
    highlight: "R$ 70,00 • Manutenção: R$ 60,00 (15 a 20 dias)"
  },
  {
    title: "Volume Egípcio",
    description: "Alongamento com maior definição e volume, ideal para quem busca um olhar mais intenso.",
    highlight: "R$ 75,00 • Manutenção: R$ 65,00 (15 a 20 dias)"
  },
  {
    title: "Mega Volume 5D (Glamour)",
    description: "Extensão de cílios com efeito volumoso e sofisticado para máxima intensidade no olhar.",
    highlight: "R$ 85,00 • Manutenção: R$ 70,00 (15 a 20 dias)"
  },
  {
    title: "Design de Sobrancelhas",
    description: "Modelagem personalizada respeitando o formato natural do rosto e valorizando a expressão facial.",
    highlight: "R$ 10,00"
  },
  {
    title: "Epilação de Buço",
    description: "Remoção dos pelos da região do buço com acabamento limpo e delicado.",
    highlight: "R$ 5,00"
  },
  {
    title: "Remoção de Cílios",
    description: "Procedimento seguro para retirada das extensões sem comprometer os fios naturais.",
    highlight: "R$ 10,00 (trabalho próprio) • R$ 15,00 (outra profissional)"
  }
];

const faqs = [
  {
    question: "Quanto tempo dura a extensão?",
    answer: "Dura em média de 15 a 25 dias, dependendo dos cuidados e do ciclo natural dos fios."
  },
  {
    question: "Precisa de manutenção?",
    answer: "Sim. A manutenção é indicada a cada 15 a 20 dias para manter volume, alinhamento e formato."
  },
  {
    question: "Os cílios danificam os naturais?",
    answer: "Não, quando aplicados corretamente por uma profissional e com os cuidados recomendados."
  },
  {
    question: "Posso molhar os cílios?",
    answer: "Sim, após as primeiras 24 horas. O ideal é evitar produtos oleosos na região."
  },
  {
    question: "Posso usar maquiagem?",
    answer: "Sim, mas evite rímel e demaquilantes oleosos para preservar a durabilidade."
  },
  {
    question: "Quanto tempo dura o procedimento?",
    answer: "Geralmente entre 1h30 e 2h, dependendo da técnica e do volume escolhido."
  },
  {
    question: "Quem não pode fazer?",
    answer: "Pessoas com alergia ativa, irritação ou problemas oculares devem evitar e buscar orientação antes."
  }
];

const menuToggle = document.querySelector(".menu-toggle");
const menu = document.querySelector(".menu");
const slides = document.querySelectorAll(".slide");
const serviceList = document.querySelector("#lista-servicos");
const faqList = document.querySelector("#faqLista");
const whatsappLinks = document.querySelectorAll(".whatsapp-link");
const modal = document.querySelector("#modalImagem");
const modalImage = document.querySelector("#imgExpandida");
const modalClose = document.querySelector(".modal-close");

let currentSlide = 0;

function buildWhatsappUrl() {
  const message = encodeURIComponent(CONFIG.whatsappMessage);
  return `https://wa.me/${CONFIG.whatsappNumber}?text=${message}`;
}

function setupWhatsappLinks() {
  whatsappLinks.forEach((link) => {
    link.href = buildWhatsappUrl();
    link.target = "_blank";
    link.rel = "noopener";
  });
}

function setupMenu() {
  menuToggle.addEventListener("click", () => {
    const isOpen = menu.classList.toggle("open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
  });

  menu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      menu.classList.remove("open");
      menuToggle.setAttribute("aria-expanded", "false");
    });
  });
}

function setupSlider() {
  if (slides.length < 2) return;

  setInterval(() => {
    slides[currentSlide].classList.remove("active");
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].classList.add("active");
  }, 4500);
}

function renderServices() {

  serviceList.innerHTML = services.slice(0, 3).map((service) => `
    <article class="service-card">
      <h3>${service.title}</h3>
      <p>${service.description}</p>
      <strong>${service.highlight}</strong>
    </article>
  `).join("");

}

function setupServicesModal() {

const openButton = document.querySelector("#btnTodosServicos");
const modal = document.querySelector("#servicesModal");
const closeButton = document.querySelector("#closeServicesModal");
const modalList = document.querySelector("#servicesModalList");

if (!openButton || !modal || !closeButton || !modalList) return;

modalList.innerHTML = services.map((service) => `
  <div class="service-info">
    <strong>${service.title}</strong>
    <small>${service.description}</small>
  </div>
  <span class="service-value">
    ${service.highlight}
  </span>
</div>

`).join();

function closeModal() {
modal.classList.remove("active");
document.body.style.overflow = "";
}

openButton.addEventListener("click", () => {
modal.classList.add("active");
document.body.style.overflow = "hidden";
});

closeButton.addEventListener("click", closeModal);

modal.addEventListener("click", (event) => {
if (event.target === modal) {
closeModal();
}
});

document.addEventListener("keydown", (event) => {
if (
event.key === "Escape" &&
modal.classList.contains("active")
) {
closeModal();
}
});

}

function renderFaqs() {
  faqList.innerHTML = faqs.map((item, index) => `
    <article class="faq-item ${index === 0 ? "open" : ""}">
      <button class="faq-question" type="button" aria-expanded="${index === 0 ? "true" : "false"}">
        ${item.question}
      </button>
      <div class="faq-answer">
        ${item.answer}
      </div>
    </article>
  `).join("");

  faqList.querySelectorAll(".faq-question").forEach((button) => {
    button.addEventListener("click", () => {
      const item = button.closest(".faq-item");
      const isOpen = item.classList.toggle("open");
      button.setAttribute("aria-expanded", String(isOpen));
    });
  });
}

function setupImageModal() {
  document.querySelectorAll(".result-card img").forEach((image) => {
    image.parentElement.addEventListener("click", () => {
      modalImage.src = image.src;
      modalImage.alt = image.alt;
      modal.showModal();
    });
  });

  modalClose.addEventListener("click", () => modal.close());
  modal.addEventListener("click", (event) => {
    if (event.target === modal) modal.close();
  });
}

const servicesModal = document.querySelector("#servicesModal");
const servicesModalList = document.querySelector("#servicesModalList");
const closeServicesModal = document.querySelector("#closeServicesModal");
const btnTodosServicos = document.querySelector("#btnTodosServicos");

if (
  servicesModal &&
  servicesModalList &&
  closeServicesModal &&
  btnTodosServicos
) {

  servicesModalList.innerHTML = services.map((service) => `
    <div class="service-row">
      <div class="service-info">
        <strong>${service.title}</strong>
        <small>${service.description}</small>
      </div>

      <span class="service-value">
        ${service.highlight}
      </span>
    </div>
  `).join("");

  btnTodosServicos.addEventListener("click", () => {
    servicesModal.classList.add("active");
  });

  closeServicesModal.addEventListener("click", () => {
    servicesModal.classList.remove("active");
  });

  servicesModal.addEventListener("click", (e) => {
    if (e.target === servicesModal) {
      servicesModal.classList.remove("active");
    }
  });

}

setupWhatsappLinks();
setupMenu();
setupSlider();
renderServices();
renderFaqs();
setupImageModal();
setupServicesModal();