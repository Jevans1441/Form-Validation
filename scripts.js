//simple check email regex
function validateEmail(email) {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

//checks for a valid name, requires a first and last name, allows multiple uppercase in names
//also requires first and last name to be between 0-19 characters each
function validateName(name) {
  const reg = /\b[A-Z][-'a-zA-Z]+,?\s[A-Z][-'a-zA-Z]{0,19}\b/;
  return reg.test(name);
}

const form = document.querySelector("form");
const thankYou = document.querySelector(".thankYou");
const nameInput = document.querySelector("#name");
const usernameInput = document.querySelector("#username");
const passwordInput = document.querySelector("#password");
const emailInput = document.querySelector("#email");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  validForm = true; //check to see if form is valid after first submit
  validateInputs(); // checks entire form is valid
  if (isLabelValid) {
    form.remove(); // removes form to show completed
    thankYou.classList.remove("hidden"); //show thank you div
  }
});

let validForm = false; //check to see if form is valid after first submit
let isLabelValid = false; // checks to see if label is valid

//checks to see if labels are valid
const validateLabel = (elem) => {
  elem.classList.remove("invalid"); //removes invalid tag if true
  elem.nextElementSibling.classList.add("hidden"); //hides the error text
};

const invalidateLabel = (elem) => {
  elem.classList.add("invalid"); //adds invalid tag if false
  elem.nextElementSibling.classList.remove("hidden"); //shows the error text
};

const validateInputs = () => {
  if (!validForm) return; //if validForm is not true

  isLabelValid = true;
  validateLabel(nameInput);
  validateLabel(usernameInput);
  validateLabel(passwordInput);
  validateLabel(emailInput);

  if (!validateName(nameInput.value)) {
    isLabelValid = false;
    invalidateLabel(nameInput);
  }

  if (!usernameInput.value) {
    isLabelValid = false;
    invalidateLabel(usernameInput);
  }

  if (!passwordInput.value) {
    isLabelValid = false;
    invalidateLabel(passwordInput);
  }

  if (!validateEmail(emailInput.value)) {
    isLabelValid = false;
    invalidateLabel(emailInput);
  }
};

//Event listeners for every label

nameInput.addEventListener("input", () => {
  validateInputs();
});

usernameInput.addEventListener("input", () => {
  validateInputs();
});

passwordInput.addEventListener("input", () => {
  validateInputs();
});

emailInput.addEventListener("input", () => {
  validateInputs();
});
