import { useState } from "react";
import Board from "./Board";
import { Context } from "./Context";

function App() {
  let obj = {
    letter: "X",
    placeValues: ["n", "n", "n", "n", "n", "n", "n", "n", "n"],
    turns: 9,
  };
  const [detail, setDetails] = useState(obj);
  return (
    <div className="App">
      <Context.Provider value={(detail, setDetails)}>
        <Board />
      </Context.Provider>
    </div>
  );
}

export default App;
