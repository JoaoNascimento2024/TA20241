const express = require("express");
const cors = require("cors");

const turmaController = require("./controllers/TurmaController");
const alunoController = require("./controllers/AlunoController");

const app = express();

app.use(express.json());

app.use(cors());

app.use("/turmas",turmaController);
app.use("/alunos",alunoController);

app.listen(3000, () => {
    console.log("Servidor conectado");
});