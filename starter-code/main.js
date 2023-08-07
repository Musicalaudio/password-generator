let copy = document.querySelector(".copy-btn");
let rangeInput = document.querySelector("#char-length");
let charLength = document.querySelector(".char-length__number");
let form = document.querySelector("form");
let meter = document.querySelector(".pw__strength-meter");
let pwStrengthScore = 0;

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

copy.addEventListener("click", (e) => {
  let copyText = document.querySelector(".generated-pw").innerText;
  let inputElement = document.createElement("input");
  inputElement.setAttribute("value", copyText);
  document.body.appendChild(inputElement);
  inputElement.select();
  document.execCommand("copy");
  inputElement.parentNode.removeChild(inputElement);
  document.querySelector(".pw__is-copied").innerText = "COPIED";
});

function passwordStrength(score) {
  let result = "";
  let meterClr = "";
  switch (score) {
    case 1:
      result = "TOO WEAK!";
      meterClr = "too-weak";
      break;
    case 2:
      result = "WEAK!";
      meterClr = "weak";
      break;
    case 3:
      result = "MEDIUM";
      meterClr = "medium";
      break;
    case 4:
      result = "STRONG";
      meterClr = "strong";
      break;
  }
  document.querySelector(".pw__strength-lvl").innerText = result;
  meter.classList.remove("too-weak", "weak", "medium", "strong");
  if (meterClr !== "") meter.classList.add(meterClr);
}
