import React, { useState, useEffect } from 'react';
import './styles.css';
import MostraVoltas from './MostraVoltas';
import MostraTempo from './MostraTempo';
import Button from './Button';

function App() {
  const [numVoltas, setNumVoltas] = useState(0);
  const [running, setRunning] = useState(false);
  const [tempo, setTempo] = useState(0);

  const toggleRunning = () => {
    setRunning(!running);
  };

  useEffect(() => {
    let timer = null;
    if (running) {
      timer = setInterval(() => {
        //dentro de dois contextos diferentes(useEffect e setInterval)
        //o valor de tempo não será preciso, "old" pega o valor.
        setTempo(old => old + 1);
      }, 1000);
    }
    return () => {
      if (timer) {
        clearInterval(timer);
      }
    };
  }, [running]);

  const increment = () => {
    setNumVoltas(numVoltas + 1);
  };

  const decrement = () => {
    if (numVoltas > 0) {
      setNumVoltas(numVoltas - 1);
    }
  };

  const reset = () => {
    setNumVoltas(0);
    setRunning(false);
    setTempo(0);
  };

  return (
    <div>
      <MostraVoltas voltas={numVoltas} />
      <Button text='+' className='bigger' onClick={increment} />
      <Button text='-' className='bigger' onClick={decrement} />
      {numVoltas > 0 && <MostraTempo tempo={Math.round(tempo / numVoltas)} />}
      <Button text={running ? 'Pausar' : 'Iniciar'} onClick={toggleRunning} />
      <Button text='Reiniciar' onClick={reset} />
    </div>
  );
}

export default App;
