import './App.css';
import HellWord from './components/HelloWorld';

function App() {
  const name = "alisson"

  function soma(a, b) {
    return a + b
  }

  const url = 'https://cdn.pixabay.com/photo/2024/05/04/01/25/white-tailed-eagle-8738135_640.jpg'

  //retorno da função
  return (

    <div className="App"> 
      <h1>Olá react</h1>
      <p>bem vindo, {name}</p>
      <p>a soma é {soma(1, 2)}</p>
      <img src={url} alt="minha imagem"/>

      <HellWord/>

    </div>
  );
}

// exportando o código
export default App;
