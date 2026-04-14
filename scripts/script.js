function mostrarFerramenta(aba) {
  document.getElementById("quadrinho").classList.add("hidden");
  document.getElementById("personagem").classList.add("hidden");
  document.getElementById("baloes").classList.add("hidden");
  document.getElementById(aba).classList.remove("hidden");
}

function adicionarBalao() {
  const canvas = document.getElementById("quadro");
  const ctx = canvas.getContext("2d");

  ctx.beginPath();
  ctx.ellipse(450, 250, 150, 80, 0, 0, 2 * Math.PI);
  ctx.strokeStyle = "#000";
  ctx.lineWidth = 3;
  ctx.stroke();

  ctx.font = "24px Comic Sans MS";
  ctx.fillText("Olá!", 410, 255);
}

function adicionarBalaoExplosivo() {
  const canvas = document.getElementById("quadro");
  const ctx = canvas.getContext("2d");

  ctx.beginPath();
  ctx.moveTo(450, 200);
  for (let i = 0; i < 36; i++) {
    const angle = (i * 10) * Math.PI / 180;
    const radius = i % 2 === 0 ? 80 : 40;
    const x = 450 + radius * Math.cos(angle);
    const y = 250 + radius * Math.sin(angle);
    ctx.lineTo(x, y);
  }
  ctx.closePath();
  ctx.strokeStyle = "#000";
  ctx.lineWidth = 3;
  ctx.stroke();

  ctx.font = "20px Comic Sans MS";
  ctx.fillText("Boom!", 430, 255);
}

function adicionarBalaoNuvem() {
  const canvas = document.getElementById("quadro");
  const ctx = canvas.getContext("2d");

  // Balão em nuvem (pensamento)
  ctx.beginPath();
  ctx.arc(400, 250, 60, 0, 2 * Math.PI);
  ctx.arc(460, 250, 60, 0, 2 * Math.PI);
  ctx.arc(430, 200, 60, 0, 2 * Math.PI);
  ctx.strokeStyle = "#000";
  ctx.lineWidth = 3;
  ctx.stroke();

  ctx.font = "20px Comic Sans MS";
  ctx.fillText("Hmm...", 410, 250);
}

function limparCanvas() {
  const canvas = document.getElementById("quadro");
  const ctx = canvas.getContext("2d");
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function gerarModelSheet() {
  const nome = document.getElementById("nomePersonagem").value;
  const idade = document.getElementById("idadePersonagem").value;
  const cabelo = document.getElementById("cabeloPersonagem").value;
  const roupa = document.getElementById("roupaPersonagem").value;

  const preview = document.getElementById("previewPersonagem");
  preview.innerHTML = `
    <h3>${nome}</h3>
    <p>Idade: ${idade}</p>
    <p>Cabelo: ${cabelo}</p>
    <p>Roupa: ${roupa}</p>
    <p><em>Model sheet gerado com base nas opções.</em></p>
  `;
}
