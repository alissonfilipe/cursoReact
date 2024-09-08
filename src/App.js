import './App.css';

import Evento from './components/Evento';
import Form from './components/Form';

function App() {









  //retorno da função
  return (

    <div className="App">
      <h1>Testando Eventos</h1>
      <Evento numero='1' />
      <Evento numero='2' />
      <Form />
    </div>
  );
}

// exportando o código
export default App;
