import { useState } from "react";

export default function Contador(){
  const[contador, setContador] = useState(0);

  const incrementar = () => {
    setContador(contador + 1);
  }
  const decrementar = () => {
    setContador(contador - 1);
  }

  return(
    <div>
      <h2>Contador</h2>
      <p>Numero atual: <span>{contador}</span></p>
      <div className="botao">
        <button onClick={incrementar}>Incrementar</button>
        <button onClick={decrementar}>Decrementar</button>
      </div>
    </div>
  )
}