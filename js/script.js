const btnSub = document.querySelector(".btn-sub");
const btnAdd = document.querySelector(".btn-add");
const btnReset = document.querySelector(".btn-reset");
const btnCopy = document.querySelector(".btn-copy");
const btnGenerate = document.querySelector(".btn-generate");
const backgroundBtn = document.querySelector(".btn-generate-background");
const displayValue = document.querySelector(".container--value");
const displaValue1 = document.querySelector(".container--value1");
const displaValue2 = document.querySelector(".container--value2");
document.querySelector(".container--buttons").addEventListener("click", (e) => {
  if (e.target.classList.contains("btn-sub")) {
    displayValue.innerHTML--;
    setColor();
  } else if (e.target.classList.contains("btn-add")) {
    displayValue.innerHTML++;
    setColor();
  } else if (e.target.classList.contains("btn-reset")) {
    displayValue.innerHTML = 0;
    setColor();
  }
});
const setColor = () => {
  if (displayValue.innerHTML > 0) {
    displayValue.style.color = "green";
  } else if (displayValue.innerHTML < 0) {
    displayValue.style.color = "red";
  } else if (displayValue.innerHTML == 0) {
    displayValue.style.color = "#FFF";
  }
};

btnGenerate.addEventListener("click", () => {
  displaValue1.textContent = Math.trunc(Math.random() * 10) + 1;
});
const setBackgroundColor = () => {
  const hexNumber = Math.random().toString(16).slice(2, 8);
  //   document.body.style.backgroundColor = `#${hexNumber}`;
  document.body.style.backgroundColor = "#" + hexNumber;
  displaValue2.innerHTML = "#" + hexNumber;
};
backgroundBtn.addEventListener("click", setBackgroundColor);
setBackgroundColor();

btnCopy.addEventListener("click", (e) => {
  e.preventDefault();
  document.querySelector(".form-input").select();
  document.querySelector(".form-input").setSelectionRange(0, 99999);
  document.execCommand("copy");
  btnCopy.textContent = "Copied!!";
  setTimeout(() =>{
    btnCopy.textContent = "Copy";
  },3000)
});
