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
        this.form.addEventListener("submit", this.submit);
        this.inputBill.addEventListener("change", this.onChange);
        this.inputPeople.addEventListener("input", this.onChange);
        this.buttonsArray[5].addEventListener("input", this.onChange);
    }
    //ignore
    onChange(e) {
        console.log("Jello" + e);
    }
    submit(q) {
        var _a;
        let e = q;
        let b = q;
        e.preventDefault();
        let percentage;
        switch ((_a = e.submitter) === null || _a === void 0 ? void 0 : _a.id) {
            case "percent1": {
                percentage = 0.05;
                break;
            }
            case "percent2": {
                percentage = 0.1;
                break;
            }
            case "percent3": {
                percentage = 0.15;
                break;
            }
            case "percent4": {
                percentage = 0.25;
                break;
            }
            case "percent5": {
                percentage = 0.5;
                break;
            }
            default: {
                let custom = e.submitter;
                percentage = custom.value;
                break;
            }
        }
        console.log(percentage);
    }
}
const form = new FormInformation();
