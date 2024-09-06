import './App.css';

import SayMyName from './components/SayMyName';
import Pessoa from './components/Pessoa';
import Frase from './components/Frase';

function App() {
 
  const nome = "Labirinto"

  

  



  //retorno da função
  return (

    <div className="App"> 
      <Frase/>
      <h1>Testando CSS</h1>
      <SayMyName nome="matheus"/>
      <SayMyName nome="alisson"/>
      <SayMyName nome={nome} />
      <Pessoa nome="Alisson" idade="21" profissao="Estagiário" foto="https://cdn.pixabay.com/photo/2018/03/26/20/49/tiger-3264048_640.jpg"/>

    </div>
  );
}

// exportando o código
export default App;
