const winningLoc = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [1, 4, 7],
  [2, 5, 8],
  [3, 6, 9],
  [1, 5, 9],
  [3, 5, 7],
];

let switchPlayer = true;

let matrix = [
  {
    symbol: "",
    disable: false,
  },
  {
    symbol: "",
    disable: false,
  },
  {
    symbol: "",
    disable: false,
  },
  {
    symbol: "",
    disable: false,
  },
  {
    symbol: "",
    disable: false,
  },
  {
    symbol: "",
    disable: false,
  },
  {
    symbol: "",
    disable: false,
  },
  {
    symbol: "",
    disable: false,
  },
  {
    symbol: "",
    disable: false,
  },
];

const tile1 = document.getElementsByClassName("1")[0];
const tile2 = document.getElementsByClassName("2")[0];
const tile3 = document.getElementsByClassName("3")[0];
const tile4 = document.getElementsByClassName("4")[0];
const tile5 = document.getElementsByClassName("5")[0];
const tile6 = document.getElementsByClassName("6")[0];
const tile7 = document.getElementsByClassName("7")[0];
const tile8 = document.getElementsByClassName("8")[0];
const tile9 = document.getElementsByClassName("9")[0];
const newgame = document.getElementsByClassName("newgame")[0];
const judge = document.getElementsByTagName('p')[0];
tile1.addEventListener("click", () => {
  if (!matrix[0].disable) {
    tile1.textContent = switchPlayer ? "x" : "0";
    matrix[0].symbol = switchPlayer ? "x" : "0";
    switchPlayer = !switchPlayer;
    matrix[0].disable = true;
    winningCheck();
  }
});

tile2.addEventListener("click", () => {
  if (!matrix[1].disable) {
    tile2.textContent = switchPlayer ? "x" : "0";
    matrix[1].symbol = switchPlayer ? "x" : "0";
    switchPlayer = !switchPlayer;
    matrix[1].disable = true;
    winningCheck();
  }
});

tile3.addEventListener("click", () => {
  if (!matrix[2].disable) {
    tile3.textContent = switchPlayer ? "x" : "0";
    matrix[2].symbol = switchPlayer ? "x" : "0";
    switchPlayer = !switchPlayer;
    matrix[2].disable = true;
    winningCheck();
  }
});

tile4.addEventListener("click", () => {
  if (!matrix[3].disable) {
    tile4.textContent = switchPlayer ? "x" : "0";
    matrix[3].symbol = switchPlayer ? "x" : "0";
    switchPlayer = !switchPlayer;
    matrix[3].disable = true;
    winningCheck();
  }
});

tile5.addEventListener("click", () => {
  if (!matrix[4].disable) {
    tile5.textContent = switchPlayer ? "x" : "0";
    matrix[4].symbol = switchPlayer ? "x" : "0";
    switchPlayer = !switchPlayer;
    matrix[4].disable = true;
    winningCheck();
  }
});

tile6.addEventListener("click", () => {
  if (!matrix[5].disable) {
    tile6.textContent = switchPlayer ? "x" : "0";
    matrix[5].symbol = switchPlayer ? "x" : "0";
    switchPlayer = !switchPlayer;
    matrix[5].disable = true;
    winningCheck();
  }
});

tile7.addEventListener("click", () => {
  if (!matrix[6].disable) {
    tile7.textContent = switchPlayer ? "x" : "0";
    matrix[6].symbol = switchPlayer ? "x" : "0";
    switchPlayer = !switchPlayer;
    matrix[6].disable = true;
    winningCheck();
  }
});

tile8.addEventListener("click", () => {
  if (!matrix[7].disable) {
    tile8.textContent = switchPlayer ? "x" : "0";
    matrix[7].symbol = switchPlayer ? "x" : "0";
    switchPlayer = !switchPlayer;
    matrix[7].disable = true;
    winningCheck();
  }
});

tile9.addEventListener("click", () => {
  if (!matrix[8].disable) {
    tile9.textContent = switchPlayer ? "x" : "0";
    matrix[8].symbol = switchPlayer ? "x" : "0";
    switchPlayer = !switchPlayer;
    matrix[8].disable = true;
    winningCheck();
  }
});
function newGame() {
  matrix = [
    {
      symbol: "",
      disable: false,
    },
    {
      symbol: "",
      disable: false,
    },
    {
      symbol: "",
      disable: false,
    },
    {
      symbol: "",
      disable: false,
    },
    {
      symbol: "",
      disable: false,
    },
    {
      symbol: "",
      disable: false,
    },
    {
      symbol: "",
      disable: false,
    },
    {
      symbol: "",
      disable: false,
    },
    {
      symbol: "",
      disable: false,
    },
  ];
  tile1.textContent = "";
  tile2.textContent = "";
  tile3.textContent = "";
  tile4.textContent = "";
  tile5.textContent = "";
  tile6.textContent = "";
  tile7.textContent = "";
  tile8.textContent = "";
  tile9.textContent = "";
  switchPlayer = true;
}

newgame.addEventListener("click", newGame);

function winningCheck() {
  judge.textContent = switchPlayer ? "Player 1 move" : "Player 2 move";
  winningLoc.forEach((arr) => {
    const [a, b, c] = arr;
    if (
      matrix[a - 1].symbol !== "" &&
      matrix[b - 1].symbol !== "" &&
      matrix[c - 1].symbol !== "" &&
      matrix[a - 1].symbol === matrix[b - 1].symbol &&
      matrix[b - 1].symbol === matrix[c - 1].symbol
    ) {
      const ch = matrix[a - 1].symbol === "x" ? "Player 1" : "Player 2";
      judge.textContent = ch + " Wins!!!!!!!!"
    }
  });
}
