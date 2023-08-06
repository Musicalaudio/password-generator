let rangeInput = document.querySelector("#char-length");
let charLength = document.querySelector(".char-length__number");
let form = document.querySelector("form");
let pwStrength = 0;

window.onload = function () {
  charLength.innerText = rangeInput.value;
};

rangeInput.addEventListener("input", (e) => {
  charLength.innerText = e.target.value;
});

form.addEventListener("click", (e) => {
  let target = e.target;
  if (target.name === "pw__criteria") {
    target.checked === true ? pwStrength++ : pwStrength--;
  }
  console.log(pwStrength);
});
