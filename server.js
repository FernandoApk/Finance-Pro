import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

app.post("/ia", async (req, res) => {
    const { mensagem, nome, dados } = req.body;

    let resposta = "";

    if (mensagem.toLowerCase().includes("economizar")) {
        resposta = `${nome}, tente reduzir gastos fixos e criar metas mensais.`;
    } else if (mensagem.toLowerCase().includes("investir")) {
        resposta = `${nome}, comece com renda fixa (CDB, Tesouro Direto) e depois diversifique.`;
    } else {
        resposta = `${nome}, analisei seus dados. Posso te ajudar com economia ou investimentos.`;
    }

    res.json({ resposta });
});

app.listen(3000, () => console.log("Servidor rodando"));
