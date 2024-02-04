let finalResult = document.querySelector(".generated-pw");
let copy = document.querySelector(".copy-btn");
let rangeInput = document.querySelector("#char-length");
let charLength = document.querySelector(".char-length__number");
let form = document.querySelector("form");
let meter = document.querySelector(".pw__strength-meter");
let meterIndicators = Array.from(meter.children);
let pwStrengthScore = 0;
let generatedPW = "";
let characters = "";
let allCharacters = {
  pw__uppercase: "abcdefghijklmnopqrstuvwxyz",
  pw__lowercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  pw__numbers: "0123456789",
  pw__symbols: "!#$%&'()*+,-./\":;<=>?[]^_`{|}~",
};

let pwCriteria = [];

window.onload = function () {
  charLength.innerText = rangeInput.value;
};

rangeInput.addEventListener("input", (e) => {
  charLength.innerText = e.target.value;
});

form.addEventListener("click", (e) => {
  let target = e.target;
  if (target.name === "pw__criteria") {
    target.checked === true ? pwStrengthScore++ : pwStrengthScore--;
  }
  passwordStrength(pwStrengthScore);
});

form.addEventListener("click", (e) => {
  let target = e.target;
  if (target.name === "pw__criteria") {
    if (target.checked === true) {
      // makePassword(length, target.id);
      pwCriteria.push(target.id);
    } else {
      pwCriteria.pop(target.id);
    }
  }
  console.log(pwCriteria);
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  pwCriteria.forEach((char) => (characters += allCharacters[char]));
  let password = "";
  let possibleCharactersLength = characters.length;
  console.log(possibleCharactersLength);
  for (let i = 0; i < rangeInput.value; i++) {
    password += characters.charAt(
      Math.floor(Math.random() * possibleCharactersLength)
    );
  }

  finalResult.innerText = password;
  document.querySelector(".pw__is-copied").classList.remove("display-block");
  console.log(rangeInput.value);
});

copy.addEventListener("click", (e) => {
  let copyText = document.querySelector(".generated-pw").innerText;
  let inputElement = document.createElement("input");
  inputElement.setAttribute("value", copyText);
  document.body.appendChild(inputElement);
  inputElement.select();
  document.execCommand("copy");
  inputElement.parentNode.removeChild(inputElement);
  document.querySelector(".pw__is-copied").classList.add("display-block");
});

function passwordStrength(score) {
  let result = "";
  let meterClr = "";
  switch (score) {
    case 1:
      result = "TOO WEAK!";
      meterClr = "str-1";
      break;
    case 2:
      result = "WEAK!";
      meterClr = "str-2";
      break;
    case 3:
      result = "MEDIUM";
      meterClr = "str-3";
      break;
    case 4:
      result = "STRONG";
      meterClr = "str-4";
      break;
  }
  document.querySelector(".pw__strength-lvl").innerText = result;
  meterIndicators.forEach((element) => {
    element.classList.remove("str-1", "str-2", "str-3", "str-4");
  });
  if (score > 0) {
    for (let i = 0; i < score; i++) {
      meterIndicators[i].classList.add(`str-${score}`);
    }
  }
}
