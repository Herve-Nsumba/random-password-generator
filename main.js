const characters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "~",
  "`",
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "_",
  "-",
  "+",
  "=",
  "{",
  "[",
  "}",
  "]",
  ",",
  "|",
  ":",
  ";",
  "<",
  ">",
  ".",
  "?",
  "/",
];
let upperCase = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

let lowerCase = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

let numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

let symbols = [
  "~",
  "`",
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "_",
  "-",
  "+",
  "=",
  "{",
  "[",
  "}",
  "]",
  ",",
  "|",
  ":",
  ";",
  "<",
  ">",
  ".",
  "?",
  "/",
];
let passwordOne = document.getElementById("passOne");
let passwordTwo = document.getElementById("passTwo");
let passwordLength = document.getElementById("password-length");
let lengthValue = document.getElementById("length-value");
let upperChar = document.getElementById("upperCase");
let lowerChar = document.getElementById("lowerCase");
let symbolsChar = document.getElementById("symbols");
let numbersChar = document.getElementById("numbers");

passwordLength.addEventListener("input", () => {
  let passwordValue = passwordLength.value;
  lengthValue.textContent = passwordValue;
});

function getRandomPasswords() {
  passwordOne.textContent = "";
  passwordTwo.textContent = "";

  let pool = [];

  if (upperChar.checked) pool = pool.concat(upperCase);
  if (lowerChar.checked) pool = pool.concat(lowerCase);
  if (symbolsChar.checked) pool = pool.concat(symbols);
  if (numbersChar.checked) pool = pool.concat(numbers);
  //If nothing is checked thendefault to all characters
  if (pool.length === 0) {
    pool = characters;
  }
  for (let i = 0; i < passwordLength.value; i++) {
    let randomCharacter = Math.floor(Math.random() * pool.length);
    passwordOne.textContent += pool[randomCharacter];

    randomCharacter = Math.floor(Math.random() * pool.length);
    passwordTwo.textContent += pool[randomCharacter];
  }
}

passwordOne.addEventListener("click", () =>
  copyToClipboard(passwordOne.textContent)
);
passwordTwo.addEventListener("click", () =>
  copyToClipboard(passwordTwo.textContent)
);

function copyToClipboard(text) {
  if (!text) return; // nothing to copy
  navigator.clipboard
    .writeText(text)
    .then(() => {
      alert("Copied: " + text);
    })
    .catch((err) => {
      console.error("Failed to copy: ", err);
    });
}
