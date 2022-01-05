class FormInformation {
  private form: HTMLFormElement;
  private inputBill: HTMLInputElement;
  private inputPeople: HTMLInputElement;

  private tip: HTMLOutputElement;
  private total: HTMLOutputElement;
  private reset: HTMLButtonElement;

  private buttonsArray: (HTMLInputElement | HTMLButtonElement)[];

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
  //asd
  private initializeListeners() {
    this.form.addEventListener("submit", this.submit);
    this.inputBill.addEventListener("change", this.onChange);
    this.inputPeople.addEventListener("input", this.onChange);
    this.buttonsArray[5].addEventListener("input", this.onChange);
  }

  onChange(e: Event) {
    console.log("Jello" + e);
  }

  submit(q: Event) {
    let e = q as SubmitEvent;
    let b = q as InputEvent;
    e.preventDefault();
    let percentage: number | string;

    switch (e.submitter?.id) {
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
        let custom = e.submitter as HTMLInputElement;
        percentage = custom.value;
        break;
      }
    }
    console.log(percentage);
  }
}

const form = new FormInformation();
