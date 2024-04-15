import { useCallback, useState } from "react";
import CounterChild from "./CounterChild";

const Counter = () => {
  const [Counter, setCounter] = useState(0);
  const [input, setInput] = useState("");

  //const add = () => setCounter(counter + 1);
  //const sub = () => setCounter(counter - 1);

  const add = useCallback(() =>  setCounter(counter + 1), [counter]);
  const sub = useCallback(() =>  setCounter(counter - 1), [counter]);
  const handleInput = (e) => setInput(e.target.value);

  return (
    <div style={{ textAlign: "center" }}>
      <h2>Counter</h2>
      <nav>
        <button onClick={add}>+</button>
        <button onClick={sub}>-</button>
      </nav>
      <h3>{counter}</h3>
      <input type="text" onChange={handleInput} value={input}></input>
      <CounterChild counter={counter} add={add} sub={sub}/>
    </div>
  );
};

export default Counter;
