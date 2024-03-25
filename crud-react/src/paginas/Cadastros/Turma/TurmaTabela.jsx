import { Button, Flex, Input, Modal, Table, Form } from "antd";
import { useEffect, useState } from "react";
import TurmaService from "../../../services/TurmaService";
import Title from "antd/es/typography/Title";

function TurmaTabela(){

    const [turmas, setTurmas] = useState([]);
    const [abrirModal, setAbrirModal] = useState(false);

    const buscarTurmas = async () => {
        try{
            const turmas = await TurmaService.listar();
            setTurmas(turmas);
        }catch(error){
            console.log("Erro ao buscar turmas", error);
        }
    }

    useEffect(() => {buscarTurmas()},[]);

    /*
        //Ele vai chamar a função sempre que for necessário 
        //renderizar o componente
        useEffect(function(){}) 

        //Ele vai chamar a função na primeira renderização do componente         
        useEffect(function(){},[]) 

        //Se houver mudança nas variáveis dependentes, ele chama a função
        useEffect(function(){},[turmas, segundaVariavel]) 
    
    */

    function editar(registro){
        console.log(registro);
    }

    function excluir(registro){
        console.log(registro);
    }

    const columns = [
        {title: "ID", dataIndex : "id", key : "id"},
        {title: "Nome", dataIndex : "nome", key : "nome"},
        {title: "Ações", 
         dataIndex : "acoes", 
         key: "acoes",
         render: (_, record) => (
            <div>
                <Button onClick={()=>{editar(record)}} >Editar</Button>
                <Button onClick={()=>{excluir(record)}}>Excluir</Button>
            </div>
            )         
        }
    ];

    const [form] = Form.useForm();

    const salvarTurma = () => {
        form.validateFields().then(
            async (values) => {
                await TurmaService.salvar(values);
                setAbrirModal(false);
                form.resetFields();
                buscarTurmas();
                //window.location.reload();
            }
        ).catch(erro => {
            console.log(erro);
        })
    }

    return (
        <>
            <Title level={3}>Turmas</Title>
            <Flex justify="end" style={{marginBottom : 10}}>
                <Button type="primary" onClick={()=>{setAbrirModal(true)}}>Novo</Button>
            </Flex>
            <Table dataSource={turmas} columns={columns}/>   

            <Modal
                title="Turma" 
                open={abrirModal}
                onOk={()=>{setAbrirModal(false)}}
                onCancel={()=>{setAbrirModal(false)}}
                footer={(
                    <>
                        <Button onClick={()=>{setAbrirModal(false)}}>Cancelar</Button>
                        <Button onClick={salvarTurma} type="primary">Cadastrar</Button>
                    </>
                )}>

                    <Form form={form} layout="vertical" name="turmaForm">
                        <Form.Item 
                            name="nome"
                            label="Nome da turma"
                            rules={[{required : true, 
                                     message : "Por favor, insira o nome da turma"}]}
                            >
                            <Input placeholder="Digite o nome da turma"/>    
                        </Form.Item>
                    </Form>
                

            </Modal>     
        </>
    );
}

export default TurmaTabela;