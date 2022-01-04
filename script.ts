const form = document.getElementById("form");

let validate = (e: Object) => {
  console.log(e);
};

const buttonClick = (e: Object) => {
  console.log("Button Clicked!");
};
const inputBill: HTMLInputElement = <HTMLInputElement>(
  document.getElementById("bill")
);
const inputPeople = document.getElementById("npeople");

const tip = document.getElementById("tipAmount");
const total = document.getElementById("total");

const reset = document.querySelector(".reset");

form?.addEventListener("submit", validate);

const doStuff = (): void => {};

const addEvent = (obj: (HTMLInputElement | HTMLButtonElement)[]) => {
  let button: HTMLButtonElement | HTMLInputElement;

  for (button of obj) {
    button.addEventListener("onclick", buttonClick);
  }
};

interface buttonObj {
  fivePercent: HTMLButtonElement;
  tenPercent: HTMLButtonElement;
  fifteenPercent: HTMLButtonElement;
  twentyFivePercent: HTMLButtonElement;
  fiftyPercent: HTMLButtonElement;
  custom: HTMLInputElement;
}

const buttonPercentages = [
  <HTMLButtonElement>document.getElementById("percent1"),
  <HTMLButtonElement>document.getElementById("percent2"),
  <HTMLButtonElement>document.getElementById("percent3"),
  <HTMLButtonElement>document.getElementById("percent4"),
  <HTMLButtonElement>document.getElementById("percent5"),
  <HTMLInputElement>document.getElementById("percent6"),
];

addEvent(buttonPercentages);
buttonClick;
