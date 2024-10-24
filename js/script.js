// common script start

// theme
const round = document.querySelector(".round");
round.addEventListener("click", () => {
  const html = document.querySelector("html");
  const themecheck = document.querySelector("#themecheck");
  html.classList.toggle("dark");
  html.classList.toggle("light");
  themecheck.classList.toggle("themecheckcolor");
  document.querySelector(".dark").setAttribute("data-theme", "theme");
});

// common script end

// password show/hide start
const passfinder = document.querySelector(".passfinder");
const password = document.querySelector(".password");
passfinder.addEventListener("click", () => {
  if ((password.type = "password" && password.type != "text")) {
    password.type = "text";
    passfinder.classList = "fa-regular fa-eye";
  } else if ((password.type = "text" && password.type != "password")) {
    password.type = "password";
    passfinder.classList = "fa-regular fa-eye-slash";
  }
});
// password show/hide end

