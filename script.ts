class FormInformation {
  private form: HTMLFormElement;
  private inputBill: HTMLInputElement;
  private inputPeople: HTMLInputElement;

  private tip: HTMLOutputElement;
  private total: HTMLOutputElement;
  private reset: HTMLButtonElement;

  private percentage: number | string = 0;

  public buttonsArray: (HTMLInputElement | HTMLButtonElement)[];

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
    this.form.addEventListener("submit", this.submit);
    this.inputBill.addEventListener("change", this.onEnterInput);
    this.inputPeople.addEventListener("input", this.onChange);

    for (let i = 0; i < this.buttonsArray.length - 1; i++) {
      this.buttonsArray[i].addEventListener("click", this.onClick);
    }
  }

  public onClick(e: Event) {
    let button = e.target as HTMLButtonElement;

    button.classList.toggle("complete");
    this.percentage = Number(button.dataset.percent);

    for (let i = 0; i < this.buttonsArray.length; i++) {
      console.log("BUTTON: " + i + " " + this.buttonsArray[i].disabled);
      this.buttonsArray[i].disabled = true;
    }
  }

  //ignore

  onEnterInput(e: Event) {
    e.preventDefault();
    let men = e.target as HTMLInputElement;

    console.log(Number(men.value));
  }
  onChange(e: Event) {
    e.preventDefault();
    let q = e as InputEvent;
    let men = e.target as HTMLInputElement;
    console.log(men.value);
  }

  submit(q: Event) {}
}

const form = new FormInformation();
