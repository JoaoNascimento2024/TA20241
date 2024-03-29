const express = require("express");
const conexao = require("../util/db");

const router = express.Router();

function executarComandosSQL(sql, params, res, erroMsg){
    conexao.query(sql, params, (err, result) => {
        if (err){
            res.status(500).json({erro : erroMsg, 
                                 detalhes : err});
        }else{
            res.status(200).json(result);
        }
    })
}

router.get("/",(req, res) => {
    let sql = "select * from turma";
    executarComandosSQL(sql, [], res, 
        "Erro na consulta de turmas");
});

router.get("/:id",(req, res) => {
    let id = req.params.id;
    let sql = "select * from turma where id = ?";
    executarComandosSQL(sql, [id], res, 
        "Erro na consulta de uma turma");
});

router.post("/", (req, res) => {
    const {nome} = req.body;
    let sql = "insert into turma(nome) values (?)";
    executarComandosSQL(sql,[nome],res,"Erro na inserção de turma");
});

router.put("/", (req, res) => {
    const {nome, id} = req.body;
    let sql = "update turma set nome = ? where id = ?";
    executarComandosSQL(sql,[nome, id],res,"Erro na update de turma");
});

router.delete("/:id", (req, res) => {
    let id = req.params.id;
    let sql = "delete from turma where id = ?";
    executarComandosSQL(sql,[id],res,"Erro na exclusão de turma");
});

module.exports = router;
