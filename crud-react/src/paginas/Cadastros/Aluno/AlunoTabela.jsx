import { useEffect, useState } from "react";
import AlunoService from "../../../services/AlunoService";
import { Table } from "antd";

const AlunoTabela = () => {
    const [alunos, setAlunos] = useState([]);

    useEffect(()=>{
        buscarAlunos();
    }, []);

    const buscarAlunos = async () => {
        try{
        const dados = await AlunoService.listar();
        setAlunos(dados);
        }catch(error){
            console.error("Erro na busca de alunos: ", error);
        }
    }

    const colunas = [
        {
            title : "id",
            dataIndex : "id"
        },
        {
            title : "Nome",
            dataIndex : "nome"
        },
        {
            title : "E-mail",
            dataIndex : "email"
        },
        {
            title : "Data nascimento",
            dataIndex : "dataNascimento"
        },
        {
            title: "Ações",
            key: "acao",
            render: (_, record) => {
            <div>
                <Button onClick={()=>{}} >Editar</Button>
                <Button onClick={()=>{}}>Excluir</Button>
            </div>            
            }
        }

    ]

    return (
        <>
            <Table columns={colunas} dataSource={alunos} />
        </>
    );
}

export default AlunoTabela;