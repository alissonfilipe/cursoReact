import './App.css';
import OutraLista from './components/OutraLista';




function App() {

  const meusItens = ['react', 'vue', 'angular']

  //retorno da função
  return (

    <div className="App">
      <h1>renderização de listas</h1>
      <OutraLista itens={meusItens} />
      <OutraLista itens={[]} />



    </div>
  );
}

// exportando o código
export default App;
