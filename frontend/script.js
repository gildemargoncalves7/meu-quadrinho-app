async function gerarModelSheet() {
  const prompt = document.getElementById("promptPersonagem").value;

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
      // Dependendo do retorno, pode ser base64 ou URL
      const imageElement = document.createElement("img");
      imageElement.src = img; 
      preview.appendChild(imageElement);
    });
  } else {
    preview.innerHTML = "<p>Erro ao gerar imagens.</p>";
  }
}
