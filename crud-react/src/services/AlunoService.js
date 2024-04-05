
const BASE_URL_ALUNOS = "http://localhost:3000/alunos";

const AlunoService = {    
    listar : async () => {
        try{
            const resposta = await fetch(BASE_URL_ALUNOS);
            if (!resposta.ok){
                throw new Error("Erro ao buscar alunos");
            }
            return await resposta.json(); 
        }catch(error){
            throw error;
        }
    },
    salvar : async (aluno) => {
        try {
            const resposta = await fetch(BASE_URL_ALUNOS, {
                method : "POST",
                headers : {"Content-type" : "application/json"},
                body : JSON.stringify(aluno)
            });
            if (!resposta.ok){
                throw new Error("Erro na criação de aluno");
            }
            //return await resposta.json(); //Caso o endpoint retorne o objeto criado
        }catch(error){
            throw error;
        }
    },
    excluir : async (id) => {
        try {
            const resposta = await fetch(`${BASE_URL_ALUNOS}/${id}`,
                { method : "DELETE" }
            );
            if (!resposta.ok){
                throw new Error("Erro ao exluir aluno");
            }
        }catch(erro){
            throw erro;
        }
    },
    atualizar : async (id, aluno) => {
        try {
            const resposta = await fetch(`${BASE_URL_ALUNOS}/${id}`,
                { 
                method : "PUT",
                headers : {"Content-type" : "application/json"},
                body : JSON.stringify(aluno) 
            });
            if (!resposta.ok){
                throw new Error("Erro ao atualizar aluno");
            }
        }catch(erro){
            throw erro;
        }
    }
}

export default AlunoService;