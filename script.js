const formEl = document.querySelector(".form");

const signUpSuc = document.querySelector(".sign-up-success");
const overlay = document.querySelector(".overlay");
const btnBack = document.querySelector(".btn-back");

const firstNameEl = document.querySelector(".first-name-input");
const lastNameEl = document.querySelector(".last-name-input");
const emailEl = document.querySelector(".email-input");
const passwordEl = document.querySelector(".password-input");

const error1 = document.querySelector(".error-first-name");
const errorText1 = document.querySelector(".error-text-first-name");

const error2 = document.querySelector(".error-last-name");
const errorText2 = document.querySelector(".error-text-last-name");

const error3 = document.querySelector(".error-email");
const errorText3 = document.querySelector(".error-text-email");

const error4 = document.querySelector(".error-password");
const errorText4 = document.querySelector(".error-text-password");

let valid = true;

formEl.addEventListener("submit", function (e) {
  e.preventDefault();

  //FIRST NAME
  if (firstNameEl.validity.valueMissing) {
    error1.classList.remove("hidden");
    errorText1.classList.remove("hidden");
    valid = false;
  } else {
    error1.classList.add("hidden");
    errorText1.classList.add("hidden");
  }

  //LAST NAME
  if (lastNameEl.validity.valueMissing) {
    error2.classList.remove("hidden");
    errorText2.classList.remove("hidden");
    valid = false;
  } else {
    error2.classList.add("hidden");
    errorText2.classList.add("hidden");
  }

  //EMAIL - ERROR 1
  if (emailEl.validity.valueMissing) {
    error3.classList.remove("hidden");

    errorText3.textContent = "Email cannot be empty";
    errorText3.classList.remove("hidden");
    valid = false;
  } else if (emailEl.validity.typeMismatch) {
    error3.classList.remove("hidden");

    errorText3.textContent = " Looks like this is not an email";
    errorText3.classList.remove("hidden");
    valid = false;
  } else {
    error3.classList.add("hidden");
    errorText3.classList.add("hidden");
  }

  //PASSWORD
  if (passwordEl.validity.valueMissing) {
    error4.classList.remove("hidden");
    errorText4.classList.remove("hidden");
    valid = false;
  } else if (passwordEl.value.length < 8) {
    error4.classList.remove("hidden");

    errorText4.textContent = "Password must be at least 8 characters long";
    errorText4.classList.remove("hidden");
    valid = false;
  } else {
    error4.classList.add("hidden");
    errorText4.classList.add("hidden");
  }

  if (valid) {
    console.log("success");

    firstNameEl.value = "";
    lastNameEl.value = "";
    emailEl.value = "";
    passwordEl.value = "";

    signUpSuc.classList.remove("hidden");
    overlay.classList.remove("hidden");
  }

  return valid;
});

btnBack.addEventListener("click", function (e) {
  signUpSuc.classList.add("hidden");
  overlay.classList.add("hidden");
});

overlay.addEventListener("click", function (e) {
  signUpSuc.classList.add("hidden");
  overlay.classList.add("hidden");
});
