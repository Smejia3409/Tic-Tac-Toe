import React from "react";
import Message from "./Message";
import "./style/board.css";
// import { changeValue, reset, state } from "./logic";
import Toggle from "./Toggle";

let letter = "X";
let x = ["n", "n", "n", "n", "n", "n", "n", "n", "n"];
let turns = 9;
let state = "n";
// let status = document.getElementById("status");

const Board = () => {
  return (
    <>
      <h1 className="title">Tic tac Toe</h1>
      {/* <Toggle /> */}
      <br /> <br />
      <p id="status"></p>
      {/* <button className="reset" onClick={reset}>
        Reset
      </button> */}
      <br />
      <br />
      <div className="container">
        <div className="grid">
          <div className="grid-item">
            <button className="spot" id="0" onClick={ChangeValue}></button>
          </div>
          <div className="grid-item">
            <button className="spot" id="1" onClick={ChangeValue}></button>
          </div>
          <div className="grid-item">
            <button className="spot" id="2" onClick={ChangeValue}></button>
          </div>
          <div className="grid-item">
            <button className="spot" id="3" onClick={ChangeValue}></button>
          </div>
          <div className="grid-item">
            <button className="spot" id="4" onClick={ChangeValue}></button>
          </div>
          <div className="grid-item">
            <button className="spot" id="5" onClick={ChangeValue}></button>
          </div>
          <div className="grid-item">
            <button className="spot" id="6" onClick={ChangeValue}></button>
          </div>
          <div className="grid-item">
            <button className="spot" id="7" onClick={ChangeValue}></button>
          </div>
          <div className="grid-item">
            <button className="spot" id="8" onClick={ChangeValue}></button>
          </div>
        </div>
      </div>
    </>
  );
};

export const ChangeValue = (e) => {
  let id = e.target.id;
  const currentValue = e.target.textContent;
  if (checkForUsed(currentValue, id) === "winner") {
    <Message displayType="block" ftn={reset} />;
  }
  if (checkForTie(turns) === "No winner") {
    alert("no winner");
  }
};

const checkForUsed = (place, id) => {
  if (place === "X" || place === "O") {
    document.getElementById("status").innerHTML = "Please choose another spot";
  } else {
    document.getElementById("status").innerHTML = "";
    if (letter === "X") {
      document.getElementById(id).innerHTML = letter;
      x[id] = letter;
      checkForWinner();

      letter = "O";
      console.log(x);
    } else {
      document.getElementById(id).innerHTML = letter;
      x[id] = letter;
      checkForWinner();
      letter = "X";
      console.log(x);
    }
  }
};

const checkForWinner = () => {
  for (let index = 0; index < winCombos.length; index++) {
    const winPlace = (num) => {
      return winCombos[index].w[num];
    };
    let p1 = x[winPlace(0)];
    let p2 = x[winPlace(1)];
    let p3 = x[winPlace(2)];
    if (p1 === p2 && p2 === p3 && p1 !== "n") {
      console.log(p1, p2, p3);
      console.log(x);
      console.log("winner: ", winCombos[index].w);
      state = "win";
      alert(`winner is ${letter}`);
      console.log("win");
      reset();
      return "winner";
    }
  }
};

const checkForTie = (turns) => {
  let t = turns;
  x.map((e) => {
    if (e === "X" || e === "O") {
      t--;
    }
    if (t === 0) {
      state = "tie";
      t = 9;
      console.log("No winner");
    }
    state = false;
    return "tie";
  });
  console.log(t);
};

export const reset = () => {
  for (let i = 0; i < 9; i++) {
    document.getElementById(i).innerHTML = "";
  }
  x = ["n", "n", "n", "n", "n", "n", "n", "n", "n"];
  letter = "X";

  turns = 9;
};

const winCombos = [
  { w: [0, 1, 2] },
  { w: [3, 4, 5] },
  { w: [6, 7, 8] },
  { w: [0, 3, 6] },
  { w: [1, 4, 7] },
  { w: [2, 5, 8] },
  { w: [0, 4, 8] },
  { w: [2, 4, 6] },
];

export default Board;
