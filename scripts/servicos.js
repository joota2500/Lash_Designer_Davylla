const servicos = [
  { nome: "Volume Brasileiro", preco: "R$70", manutencao: "R$60" },
  { nome: "Volume Egípcio", preco: "R$75", manutencao: "R$65" },
  { nome: "Mega Volume 5D", preco: "R$78", manutencao: "R$68" },
  { nome: "Cílios Tufos", preco: "R$40", manutencao: "Sem manutenção" },
  { nome: "Efeito Fox", preco: "R$75", manutencao: "R$65" }
];

const container = document.getElementById("lista-servicos");

servicos.forEach(s => {
  container.innerHTML += `
    <div class="col-md-4 mb-4">
      <div class="card-servico">
        <h3>${s.nome}</h3>
        <p class="preco">${s.preco}</p>
        <small>Manutenção: ${s.manutencao}</small>
      </div>
    </div>
  `;
});