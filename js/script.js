// common script start
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
