const CONFIG = {
  whatsappNumber: "5585999999999",
  whatsappMessage: "Olá, Davylla! Vim pelo site e gostaria de agendar um horário."
};

const services = [
  {
    title: "Extensão de cílios",
    description: "Aplicação personalizada para realçar o olhar com leveza, conforto e durabilidade.",
    highlight: "Natural, volume ou efeito mais marcante"
  },
  {
    title: "Manutenção de cílios",
    description: "Reposição dos fios para manter o formato, volume e acabamento por mais tempo.",
    highlight: "Indicada entre 15 e 20 dias"
  },
  {
    title: "Design de sobrancelhas",
    description: "Modelagem precisa respeitando simetria facial, formato natural e beleza individual.",
    highlight: "Acabamento elegante e harmônico"
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
  serviceList.innerHTML = services.map((service) => `
    <article class="service-card">
      <h3>${service.title}</h3>
      <p>${service.description}</p>
      <strong>${service.highlight}</strong>
    </article>
  `).join("");
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

setupWhatsappLinks();
setupMenu();
setupSlider();
renderServices();
renderFaqs();
setupImageModal();
