"use strict";
class FormInformation {
    constructor() {
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
        this.form.addEventListener("submit", this.clickFunc);
    }
    clickFunc(e) {
        e.preventDefault();
        //undefined
        console.log(this.buttonsArray[5].value);
    }
}
const form = new FormInformation();
