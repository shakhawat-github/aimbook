// common script start

// lottie animation start
function loadLottieAnimation(
  containerId,
  animationPath,
  loop = true,
  autoplay = true
) {
  return lottie.loadAnimation({
    container: document.getElementById(containerId),
    path: animationPath,
    renderer: "svg",
    loop: loop,
    autoplay: autoplay,
  });
}

const animation1 = loadLottieAnimation(
  "lottie-animation-1",
  "./json/userprofile.json"
);
const animation2 = loadLottieAnimation(
  "lottie-animation-2",
  "./json/lock.json"
);
const animation3 = loadLottieAnimation(
  "lottie-animation-3",
  "./json/login.json"
);
const animation4 = loadLottieAnimation(
  "lottie-animation-4",
  "./json/plus.json"
);
const animation5 = loadLottieAnimation(
  "lottie-animation-5",
  "./json/profile.json"
);
const animation6 = loadLottieAnimation(
  "lottie-animation-6",
  "./json/mail.json"
);
const animation7 = loadLottieAnimation(
  "lottie-animation-7",
  "./json/calendar.json"
);
const animation8 = loadLottieAnimation(
  "lottie-animation-8",
  "./json/home.json"
);
const animation9 = loadLottieAnimation(
  "lottie-animation-9",
  "./json/lock.json"
);
const animation10 = loadLottieAnimation(
  "lottie-animation-10",
  "./json/register.json"
);
const animation11 = loadLottieAnimation(
  "lottie-animation-11",
  "./json/team.json"
);
const animation12 = loadLottieAnimation(
  "lottie-animation-12",
  "./json/menu.json"
);
const animation13 = loadLottieAnimation(
  "lottie-animation-13",
  "./json/cross.json"
);
const animation14 = loadLottieAnimation(
  "lottie-animation-14",
  "./json/search.json"
);
const animation15 = loadLottieAnimation(
  "lottie-animation-15",
  "./json/filter.json"
);
const animation16 = loadLottieAnimation(
  "lottie-animation-16",
  "./json/contact.json"
);
const animation17 = loadLottieAnimation(
  "lottie-animation-17",
  "./json/home.json"
);
const animation18 = loadLottieAnimation(
  "lottie-animation-18",
  "./json/userprofile.json"
);
const animation19 = loadLottieAnimation(
  "lottie-animation-19",
  "./json/messenger.json"
);
const animation20 = loadLottieAnimation(
  "lottie-animation-20",
  "./json/notification.json"
);
const animation21 = loadLottieAnimation(
  "lottie-animation-21",
  "./json/team.json"
);
const animation22 = loadLottieAnimation(
  "lottie-animation-22",
  "./json/community.json"
);
const animation23 = loadLottieAnimation(
  "lottie-animation-23",
  "./json/note.json"
);
const animation24 = loadLottieAnimation(
  "lottie-animation-24",
  "./json/play.json"
);
// lottie animation end

// theme start
let themeslider = document.querySelector(".themeslider");

// Function to apply the theme and slider position
function changeTheme(theme, position) {
  document.querySelector("html").setAttribute("data-theme", theme);
  themeslider.style.left = position;
  // Save the theme in localStorage
  localStorage.setItem("theme", theme);
  localStorage.setItem("sliderPosition", position);
}

// Function to load theme from localStorage
function loadTheme() {
  const theme = localStorage.getItem("theme") || "white"; // Default theme is white
  const position = localStorage.getItem("sliderPosition") || "2%"; // Default position for white theme
  changeTheme(theme, position);
}

// Set up event listeners for the buttons
document.querySelector("#itemone").addEventListener("click", () => changeTheme("white", "2%"));
document.querySelector("#itemtwo").addEventListener("click", () => changeTheme("dark", "34%"));
document.querySelector("#itemthree").addEventListener("click", () => changeTheme("black", "66%"));

loadTheme();
// theme end

// password show/hide start

const passfinder = document.querySelectorAll(".passfinder");
passfinder.forEach((passfinder) => {
  passfinder.addEventListener("click", () => {
    const passwordFieldId = passfinder.getAttribute("data-password");
    const passwordField = document.getElementById(passwordFieldId);

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


let headerBrand = document.querySelector(".header-brand");
let navigation = document.querySelector("#navigation");
let navcloser = document.querySelector('.navcloser');
headerBrand.addEventListener("click", () => {
  navigation.classList.add("show-nav");
  navigation.classList.remove("hide-nav");
});
navcloser.addEventListener('click' , ()=>{
  navigation.classList.remove("show-nav");
  navigation.classList.add("hide-nav");
})









// search start
let search = document.querySelector('#search');
let main = document.querySelector('main')
search.addEventListener('click' , ()=>{
  search.classList.add('search-extend');
})
main.addEventListener('click' , ()=>{
  search.classList.remove('search-extend');
  
})

// search end








// common script end