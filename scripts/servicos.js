document.addEventListener("DOMContentLoaded", () => {

  const servicos = [
    { nome: "Volume Brasileiro", preco: "R$70", manutencao: "R$60", desc: "Natural e elegante", destaque: true },
    { nome: "Volume Egípcio", preco: "R$75", manutencao: "R$65", desc: "Volume equilibrado" },
    { nome: "Mega Volume 5D", preco: "R$78", manutencao: "R$68", desc: "Olhar marcante" },
    { nome: "Cílios Tufos", preco: "R$40", manutencao: "Sem manutenção", desc: "Aplicação rápida" },
    { nome: "Efeito Fox", preco: "R$75", manutencao: "R$65", desc: "Alongamento sofisticado" }
  ];

  const container = document.getElementById("lista-servicos");

  if (!container) return;

  container.innerHTML = servicos.map(s => `
    <article class="col-md-4 mb-4">
      <div class="card-servico-pro">

        <h3>${s.nome}</h3>

        <p class="desc-servico">${s.desc}</p>

        <p class="preco">${s.preco}</p>

        <small>Manutenção: ${s.manutencao}</small>

        <button class="btn-servico" data-servico="${s.nome}">
          Agendar
        </button>

      </div>
    </article>
  `).join("");

  // EVENTO WHATSAPP
  container.addEventListener("click", (e) => {
    if (e.target.classList.contains("btn-servico")) {

      const nome = e.target.getAttribute("data-servico");

      const mensagem = `Olá, quero o serviço ${nome}`;
      const numero = "5585991171274";

      const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`;

      window.open(url, "_blank");
    }
  });

});