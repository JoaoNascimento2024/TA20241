import { useState } from "react";
import "./App.css";


function App() {

  const [nome, setNome] = useState("Valor vazio");

  function clicar(){
    setNome("Novo valor");
  }

  return (
    <>
      <h1 className="titulo">Buscar cep</h1>
      <input type="text" placeholder="Digite o CEP"/>
      <input type="button" value="OK" onClick={clicar}/>
      <h2>{nome}</h2>
    </>
  );
}

export default App;
