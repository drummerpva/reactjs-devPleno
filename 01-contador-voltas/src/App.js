import React, {useState, useEffect} from 'react';
import "./styles.css";
import MostraVoltas from './components/MostraVoltas';
import MostraTempo from './components/MostraTempo';
import Button from './components/Button';

function App() {
  const [numVoltas, setNumVoltas] = useState(0);
  const [running, setRunning] = useState(false);
  const [tempo, setTempo] = useState(0);

  useEffect(() => {
    let timer = null;
    if(running){
      timer = setInterval(() => {
        setTempo(old => old + 1 );
      },1000);
    }
    return () => {
      if(timer){
        clearInterval(timer);
      }
    };
  },[running]);

  const reset = () => {
    setNumVoltas(0);
    setTempo(0);
  };

  const toggleRunning = () =>{
    setRunning(!running);
  };

  const increment = () =>{
    setNumVoltas(numVoltas + 1);
  };
  const decrement = () =>{
    if(numVoltas > 0){
      setNumVoltas(numVoltas - 1);
    }
  };


  return (
    <div className="App">
      <MostraVoltas voltas={numVoltas} />
      <Button text="+" onClick={increment}  className="bigger" />
      <Button text="-" onClick={decrement} className="bigger" />
      {
        numVoltas > 0 &&
        <MostraTempo tempo={Math.round(tempo/numVoltas)} />
      }
      <Button text={running ? "Pausar": "Iniciar"} onClick={toggleRunning} />
      <Button text="Reiniciar" onClick={reset} />
    </div>
  );
}

export default App;
