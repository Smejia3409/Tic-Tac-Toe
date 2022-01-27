let letter = "X";
let x = ["n", "n", "n", "n", "n", "n", "n", "n", "n"];
let turns = 9;
export let state = "n";
export let status = document.getElementById("status");

export const changeValue = (e) => {
  let id = e.target.id;
  const currentValue = e.target.textContent;
  checkForUsed(currentValue, id);
  checkForTie(turns);
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
      reset();
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
      alert("No Winner");
      state = "tie";
      t = 9;
      console.log("No winner");
      reset();
    }
    state = false;
  });
  console.log(t);
};

export const reset = () => {
  for (let i = 0; i < 9; i++) {
    document.getElementById(i).innerHTML = "";
  }
  x = ["n", "n", "n", "n", "n", "n", "n", "n", "n"];
  turns = 9;
  letter = "X";
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
