const section = document.querySelector(".hero");
const inputEmail = document.getElementById("subscribe");
const btnSub = document.querySelector(".hero-form-button");
const backdrop = document.querySelector(".backdrop");
const error = document.querySelector("#error-message");
const dismissBtn = document.querySelector(".modal-button");
const info = document.querySelector(".attribution");
error.style.display = "none";
backdrop.classList.add("visually-hidden");

btnSub.addEventListener("click", (e) => {
  e.preventDefault();
  validEmail();
});

function validEmail() {
  const email = inputEmail.value.trim();
  const emailCheck = /^[^\s@]+@[^\s@]+.[^\s@]+$/;

  if (!emailCheck.test(email) || inputEmail === "") {
    error.style.display = "";
    inputEmail.classList.add("error");
    setTimeout(() => {
      error.style.display = "none";
      inputEmail.classList.remove("error");
    }, 2500);
  } else {
    inputEmail.classList.remove("error");
    section.classList.add("visually-hidden");
    info.classList.add("visually-hidden");
    backdrop.classList.remove("visually-hidden");
  }
}

dismissBtn.addEventListener("click", (e) => {
  e.preventDefault();
  section.classList.remove("visually-hidden");
  info.classList.remove("visually-hidden");
  backdrop.classList.add("visually-hidden");
});
