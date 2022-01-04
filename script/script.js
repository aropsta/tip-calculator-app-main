"use strict";
const form = document.getElementById("form");
let validate = (e) => {
    console.log(e);
};
const buttonClick = (e) => {
    console.log("Button Clicked!");
};
const inputBill = (document.getElementById("bill"));
const inputPeople = document.getElementById("npeople");
const tip = document.getElementById("tipAmount");
const total = document.getElementById("total");
const reset = document.querySelector(".reset");
form === null || form === void 0 ? void 0 : form.addEventListener("submit", validate);
const doStuff = () => { };
const addEvent = (obj) => {
    let button;
    for (button of obj) {
        button.addEventListener("onclick", buttonClick);
    }
};
const buttonPercentages = [
    document.getElementById("percent1"),
    document.getElementById("percent2"),
    document.getElementById("percent3"),
    document.getElementById("percent4"),
    document.getElementById("percent5"),
    document.getElementById("percent6"),
];
addEvent(buttonPercentages);
buttonClick;
