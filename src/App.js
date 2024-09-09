import { useState } from 'react'

import './App.css';

import SeuNome from './components/SeuNome';
import Saudacao from './components/Saudacao';


function App() {
  const [nome, setNome] = useState()

  //retorno da função
  return (

    <div className="App">
      <h1>State lift</h1>
      <SeuNome setNome={setNome} />
      <Saudacao nome={nome} />
    </div>
  );
}

// exportando o código
export default App;
