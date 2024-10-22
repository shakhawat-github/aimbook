// common script start
const round = document.querySelector(".round");
round.addEventListener("click", () => {
  const html = document.querySelector("html");
  html.classList.toggle("dark");
  html.classList.toggle("light");
  document.querySelector(".dark").setAttribute("data-theme", "theme");
});

// common script end
