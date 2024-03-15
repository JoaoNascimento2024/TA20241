import { Table } from "antd";
import { useState } from "react";

function Turma(){

    const [turmas, setTurmas] = useState([]);    

    const columns = [
        {title: "ID", dataIndex : "id", key : "id"},
        {title: "Nome", dataIndex : "nome", key : "nome"}
    ];

    return (
        <>
            <Table dataSource={turmas} columns={columns}/>        
        </>
    );
}

export default Turma;