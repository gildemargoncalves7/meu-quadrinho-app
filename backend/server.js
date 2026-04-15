import express from "express";
import fetch from "node-fetch";
import path from "path";

const app = express();
app.use(express.json());

// Substitua pelos seus dados da Cloudflare
const ACCOUNT_ID = "SEU_ACCOUNT_ID";
const API_KEY = "SUA_API_KEY";
const MODEL_ID = "@cf/black-forest-labs/flux-2-dev";

// Servir frontend, scripts e styles
app.use(express.static(path.join(process.cwd())));

app.post("/api/gerar-imagem", async (req, res) => {
  const { prompt } = req.body;

  try {
    const response = await fetch(
      `https://api.cloudflare.com/client/v4/accounts/${ACCOUNT_ID}/ai/run/${MODEL_ID}`,
      {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${API_KEY}`,
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ prompt, num_images: 5 })
      }
    );

    const result = await response.json();
    res.json({ imagens: result.result });
  } catch (error) {
    console.error(error);
    res.status(500).json({ erro: "Falha ao gerar imagens" });
  }
});

app.listen(3000, () => console.log("Servidor rodando na porta 3000"));
