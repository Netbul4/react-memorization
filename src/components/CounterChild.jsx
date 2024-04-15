import { memo } from "react";

const CounterChild = ({ counte, add, sub }) => {
  return (
    <div style={{ border: "thin solid #000", margin: "1rem", padding: "1rem" }}>
      <h3>Counter's child.</h3>
      <nav>
        <button onClick={add}>+</button>
        <button onClick={sub}>-</button>
      </nav>
      <h3>{counter}</h3>
    </div>
  );
};

export default memo(CounterChild);
