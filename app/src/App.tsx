import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, incrementByAmount } from "./redux/counterSlice";
import { RootState } from "./redux/store.ts";
import { useState } from "react";

function App() {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();

  const [incrementAmount, setIncrementAmount] = useState("2");
  return (
    <div className="App">
      <h1>count: {count}</h1>
      <input onChange={(e) => setIncrementAmount(e.target.value)} />
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
      <button
        onClick={() => dispatch(incrementByAmount(Number(incrementAmount)))}
      >
        追加
      </button>
    </div>
  );
}

export default App;
