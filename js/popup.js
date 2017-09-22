/**
 * Created by aleksandradobrynina on 20.09.17.
 */
var link = document.querySelector(".message-link");
var popup = document.querySelector(".modal");
var close = popup.querySelector(".cross");
var form = popup.querySelector("form");
var n = popup.querySelector("[type=text]");
var email = popup.querySelector("[name=email]");
var storage = localStorage.getItem("n");
link.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.add("modal-show");
  if (storage) {
    n.value = storage;
    email.focus();
  } else {
    n.focus();
  }
});
close.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.remove("modal-show");
});
form.addEventListener("submit", function (evt) {
  if (!n.value || !email.value) {
    evt.preventDefault();
    console.log("Нужно ввести имя и электронную почту");
  } else {
    localStorage.setItem("login", n.value);
  }
});
window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (popup.classList.contains("modal-show")) {
      popup.classList.add("modal-show");
    }
  }
});
