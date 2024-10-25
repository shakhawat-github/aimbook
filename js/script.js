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

const passfinders = document.querySelectorAll(".passfinder");
passfinders.forEach((passfinder) => {
  passfinder.addEventListener("click", () => {
    // Get the password input field associated with the current button
    const passwordField = document.getElementById(passfinder.dataset.password);
    
    if (passwordField.type === "password") {
      passwordField.type = "text";
      passfinder.classList = "fa-regular fa-eye";
    } else {
      passwordField.type = "password";
      passfinder.classList = "fa-regular fa-eye-slash";
    }
  });
});
// password show/hide end

// hide join section start
const hidejoin = document.querySelector('.hidejoin');
const join = document.querySelector('#join')
hidejoin.addEventListener('click' , ()=>{
  join.style.display = 'none'
})
// hide join section end

