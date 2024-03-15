import './App.css';

const Cabecalho = () => {
  return <header>João</header>;
}

function App({nome, cor}) {
  return (
    <>
      <Cabecalho/>
      <h1>Alô, {nome}</h1>
      <h1 style={{color : cor}}>Alô, mundo!!!</h1>
    </>
  );
}

export default App;
