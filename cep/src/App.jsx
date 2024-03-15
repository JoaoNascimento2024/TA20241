import { useState } from 'react'
import './App.css'

function App() {

  const [endereco, setEndereco] = useState({});

  /*
  function buscarEndereco(cep){
    fetch(`https://viacep.com.br/ws/${cep}/json/`).
    then(resposta => resposta.json()).
    then(dados => {
      const {cep, logradouro, bairro} = dados;
      setEndereco({cep,logradouro,bairro});
    });
  }
  */

  async function buscarEndereco(cepRecebido){
    const resposta = await fetch(`https://viacep.com.br/ws/${cepRecebido}/json/`);
    const dados = await resposta.json();
    const {cep, logradouro, bairro} = dados;
    setEndereco({cep,logradouro,bairro});
  }

  const digitarValidarCep = (evento) => {
    let cep = evento.target.value;
    setEndereco({cep});
    if (cep !== "" && cep.length == 8){
      buscarEndereco(cep);
    }
  }

  return (
    <>
      <h1>Consulta CEP</h1>
      <input type="text" placeholder='Digite o CEP' 
             onChange={digitarValidarCep}/>
      
      <h3>{endereco.cep}</h3>
      <h3>{endereco.logradouro}</h3>
      <h3>{endereco.bairro}</h3>
    </>

  );  
}

export default App
