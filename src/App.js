import React, {useState} from  'react';
import './App.css';


function App() {
  const [count, setCount] = useState(4)
  const [name, setName] = useState('Ghanwa')

  function decrement(){
    setCount( prevCount => count - 1)
  }

  function increment(){
    setCount( prevCount => count + 1)
    setName('Khan')
  }

  return (
    <>
     <button className="btn" onClick={decrement}>-</button> 
     <span> {count} </span>
     <span> {name} </span>
     <button className="btn " onClick={increment}>+</button>
    </>
  );
}

export default App;
