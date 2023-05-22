"use strict";

let nav = document.querySelector(".nav");
let hamburger = document.querySelector(".hamburger");
let navigation = document.querySelector(".header__navigation");
let header = document.querySelector(".header");
let questionBtn = document.querySelector(".question__btn");
let questionModal = document.querySelector(".question__modal");
let questionInvalid = document.querySelector(".question__invalid-msg");
let questionInput = document.querySelector(".question__input");
let modalClose = document.querySelector(".modal__close");
let modalSend = document.querySelector(".modal__send");
let modalEmail = document.querySelector(".modal__input");
let modalInvalid = document.querySelector(".modal__invalid-msg");

hamburger.addEventListener("click", hamburgerToggle);
window.addEventListener("scroll", navFixedToggle);
document.addEventListener("load", function () {
  navFixedToggle();
});

questionBtn.addEventListener("click", function (event) {
  event.preventDefault();
  let message = questionInput.value;

  if (message.length > 10) {
    questionInvalid.style.display = "none";
    questionModal.showModal();
  } else {
    questionInvalid.style.display = "block";
  }
});

modalClose.addEventListener("click", function (event) {
  event.preventDefault();
  closeModal();
});

modalSend.addEventListener("click", function (event) {
  event.preventDefault();
  let value = modalEmail.value;
  let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  reg.test(value);
  if (reg.test(value)) {
    closeModal();
  } else {
    modalInvalid.style.display = "block";
  }
});

function closeModal() {
  modalEmail.value = "";
  modalInvalid.style.display = "none";
  questionModal.close();
}

function hamburgerToggle() {
  hamburger.classList.toggle("active");
  nav.classList.toggle("active");
}

function navFixedToggle() {
  if (this.window.scrollY > navigation.offsetHeight) {
    navigation.classList.add("skrool");
    header.style.paddingTop = `${navigation.offsetHeight}px`;
  } else {
    navigation.classList.remove("skrool");
    header.style.paddingTop = "";
  }
}
