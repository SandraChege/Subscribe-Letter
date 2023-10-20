class EmailValidator {
  private form: HTMLFormElement;
  private card1: HTMLElement;
  private card2: HTMLElement;
  private emailInput: HTMLInputElement;
  private dismissButton: HTMLButtonElement;
  private errorMessage: HTMLDivElement;

  constructor() {
    this.form = document.querySelector("form") as HTMLFormElement;
    this.card1 = document.querySelector(".card") as HTMLElement;
    this.card2 = document.querySelector(".card2") as HTMLElement;
    this.emailInput = document.getElementById("email") as HTMLInputElement;
    this.dismissButton = this.card2.querySelector(
      "button"
    ) as HTMLButtonElement;
    this.errorMessage = document.createElement("div");

    this.init();
  }

  private isEmailValid(email: string): boolean {
    const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
    return emailRegex.test(email);
  }

  private validateEmail() {
    const userEmail = this.emailInput.value.trim();

    if (userEmail === "") {
      this.errorMessage.textContent = "Please provide your email address";
    } else if (!this.isEmailValid(userEmail)) {
      this.errorMessage.textContent = "Please provide a valid email";
    } else {
      this.errorMessage.textContent = "";

      const userEmailSpan = document.querySelector(
        "#useremailaddress"
      ) as HTMLSpanElement;
      userEmailSpan.textContent = userEmail;
      this.card1.classList.add("hide");
      this.card2.classList.remove("hide");
    }
  }

  private init() {
    this.form.addEventListener("submit", (e) => {
      e.preventDefault();
      this.validateEmail();
    });

    this.dismissButton.addEventListener("click", () => {
      this.card2.classList.add("hide");
      this.card1.classList.remove("hide");
    });

    this.form.appendChild(this.errorMessage);
  }
}

// Instantiate the class to run the code
new EmailValidator();
