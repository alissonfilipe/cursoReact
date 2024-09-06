import './App.css';

function App() {
  const name = "alisson"

  function soma(a, b) {
    return a + b
  }
  return (

    <div className="App"> <h1>Olá react</h1>
      <p>bem vindo, {name}</p>
      <p>a soma é {soma(1, 2)}</p>
    </div>
  );
}

// exportando o código
export default App;
