"use strict";
class FormInformation {
    constructor() {
        this.percentage = 0;
        this.form = document.getElementById("form");
        this.inputBill = document.getElementById("bill");
        this.inputPeople = document.getElementById("npeople");
        this.tip = document.getElementById("tipAmount");
        this.total = document.getElementById("total");
        this.reset = document.querySelector(".reset");
        this.buttonsArray = [
            document.getElementById("percent1"),
            document.getElementById("percent2"),
            document.getElementById("percent3"),
            document.getElementById("percent4"),
            document.getElementById("percent5"),
            document.getElementById("percent6"),
        ];
        this.initializeListeners();
    }
    initializeListeners() {
        this.form.addEventListener("submit", this.submit);
        this.inputBill.addEventListener("change", this.onEnterInput);
        this.inputPeople.addEventListener("input", this.onChange);
        for (let i = 0; i < this.buttonsArray.length - 1; i++) {
            this.buttonsArray[i].addEventListener("click", this.onClick);
        }
    }
    onClick(e) {
        let button = e.target;
        this.percentage = Number(button.dataset.percent);
        console.log(this.percentage);
    }
    //ignore
    onEnterInput(e) {
        e.preventDefault();
        let men = e.target;
        console.log(Number(men.value));
    }
    onChange(e) {
        e.preventDefault();
        let q = e;
        let men = e.target;
        console.log(men.value);
    }
    submit(q) { }
}
const form = new FormInformation();
