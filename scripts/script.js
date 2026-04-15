function mostrarFerramenta(id) {
  document.querySelectorAll(".workspace").forEach(ws => ws.classList.add("hidden"));
  document.getElementById(id).classList.remove("hidden");
}

async function gerarModelSheet() {
  const nome = document.getElementById("nomePersonagem").value;
  const idade = document.getElementById("idadePersonagem").value;
  const cabelo = document.getElementById("cabeloPersonagem").value;
  const roupa = document.getElementById("roupaPersonagem").value;

  const prompt = `Personagem chamado ${nome}, idade ${idade}, cabelo ${cabelo}, roupa ${roupa}, estilo anime para model sheet.`;

  try {
    const response = await fetch("/api/gerar-imagem", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ prompt })
    });

    const data = await response.json();
    const preview = document.getElementById("previewPersonagem");
    preview.innerHTML = "";

    if (data.imagens) {
      data.imagens.forEach(img => {
        const imageElement = document.createElement("img");
        if (img.startsWith("data:image")) {
          imageElement.src = img;
        } else {
          imageElement.src = `data:image/png;base64,${img}`;
        }
        imageElement.classList.add("model-img");
        preview.appendChild(imageElement);
      });
    } else {
      preview.innerHTML = "<p>Erro ao gerar imagens.</p>";
    }
  } catch (error) {
    console.error(error);
    document.getElementById("previewPersonagem").innerHTML =
      "<p>Falha na conexão com o servidor.</p>";
  }
}
