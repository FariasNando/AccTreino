import React from 'react';
import './App.css';
import ListaTexto from './components/Textos'

const inicialTxt = "Hello World!"
function App() {
  return (
    <div className="App">    
      <ListaTexto name={inicialTxt} />
    </div>
  );
}

export default App;

