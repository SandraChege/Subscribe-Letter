const form = document.querySelector("form") as HTMLFormElement;
const card1 = document.querySelector(".card") as HTMLElement;
const card2 = document.querySelector(".card2") as HTMLElement;
const emailInput = document.getElementById("email") as HTMLInputElement;
const dismissButton = card2.querySelector("button") as HTMLButtonElement;
const errorMessage = document.createElement("div");

//validate emails
function ValidateEmail() {
  //trim removes whitespaces
    const userEmail = emailInput.value.trim();
    /**
     * 1. the first statement checks if the email is empty and returms an error message
     * 2. the else if checks checks if the email format is valid if email is not empty.
     *    If the email is invalid it displays an error message
     * 3. If email is valid, errormessage is cleared, and the classname to card1 and 
     *    remove classname in card2
     */
    if (userEmail === "") {
        errorMessage.textContent = "Please provide your email address";
    } else if (!isEmailValid(userEmail)) {
        errorMessage.textContent = "Please provide a valid email";
    } else {
        errorMessage.textContent = "";
        
        const userEmailSpan = document.querySelector("#useremailaddress") as HTMLSpanElement;
        userEmailSpan.textContent = userEmail;
        card1.classList.add("hide");
        card2.classList.remove("hide");
    }
}
/**
 * @param email has a valid format.
 * @returns true if the email pattern matches the regular expression:emailRegex and false if it doesn't
 */
function isEmailValid(email: string): boolean {
    const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
    return emailRegex.test(email);
}

/**
 * prevents default form submission behaviour
 * calls validateEmail(); function
 */
form.addEventListener("submit", (e) => {
    e.preventDefault();
    ValidateEmail();
})
/**
 * listens to a click ebvent on dismiss btn and removes 
 * the className in card1 and add it to card2
 */
dismissButton.addEventListener("click", () => {
  card2.classList.add("hide");
  card1.classList.remove("hide");
});
/**
 * appends the error div to the form
 */
form.appendChild(errorMessage);