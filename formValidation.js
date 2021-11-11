function validateEmail(email) {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

const form = document.querySelector("form");
const thankYou = document.querySelector(".thankYou");
const nameInput = document.querySelector("#name");
const usernameInput = document.querySelector("#username");
const passwordInput = document.querySelector("#password");
const emailInput = document.querySelector("#email");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  validateInputs();
  if (isFormValid) {
    form.remove();
    thankYou.classList.remove("hidden");
  }
});

let isFormValid = false;

const validateLabel = (elem) => {
  elem.classList.remove("invalid");
  elem.nextElementSibling.classList.add("hidden");
};

const invalidateLabel = (elem) => {
  elem.nextElementSibling.classList.remove("hidden");
  elem.classList.add("invalid");
};

const validateInputs = () => {
  validateLabel(nameInput);
  validateLabel(usernameInput);
  validateLabel(passwordInput);
  validateLabel(emailInput);
  isFormValid = true;

  if (!nameInput.value) {
    invalidateLabel(nameInput);
    isFormValid = false;
  }
  if (!usernameInput.value) {
    invalidateLabel(usernameInput);
    isFormValid = false;
  }
  if (!passwordInput.value) {
    invalidateLabel(passwordInput);
    isFormValid = false;
  }
  if (!validateEmail(!emailInput.value)) {
    invalidateLabel(emailInput);
    isFormValid = false;
  }
};

nameInput.addEventListener("input", () => {
  validateInputs();
});
