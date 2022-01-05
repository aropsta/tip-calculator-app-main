class FormInformation {
  private form: HTMLFormElement;
  private inputBill: HTMLInputElement;
  private inputPeople: HTMLInputElement;

  tip: HTMLOutputElement;
  total: HTMLOutputElement;
  reset: HTMLButtonElement;

  buttonsArray: (HTMLInputElement | HTMLButtonElement)[];

  constructor() {
    this.form = document.getElementById("form") as HTMLFormElement;
    this.inputBill = document.getElementById("bill") as HTMLInputElement;
    this.inputPeople = document.getElementById("npeople") as HTMLInputElement;

    this.tip = document.getElementById("tipAmount") as HTMLOutputElement;
    this.total = document.getElementById("total") as HTMLOutputElement;
    this.reset = document.querySelector(".reset") as HTMLButtonElement;

    this.buttonsArray = [
      document.getElementById("percent1") as HTMLButtonElement,
      document.getElementById("percent2") as HTMLButtonElement,
      document.getElementById("percent3") as HTMLButtonElement,
      document.getElementById("percent4") as HTMLButtonElement,
      document.getElementById("percent5") as HTMLButtonElement,
      document.getElementById("percent6") as HTMLInputElement,
    ];

    this.initializeListeners();
  }

  private initializeListeners() {
    this.form.addEventListener("submit", this.clickFunc);
  }

  clickFunc(e: Event) {
    e.preventDefault();

    //undefined
    console.log(form);
  }
}

const form = new FormInformation();
