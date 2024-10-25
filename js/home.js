// home search start
const homesearch = document.querySelector(".homesearch");
const homesearchbtn = document.querySelector(".homesearchbtn");

homesearchbtn.addEventListener("click", () => {
  homesearch.classList.toggle("homesearch-extend");
  homesearch.classList.toggle("homesearch-cut");
});

// home search end

// navcollapse start
const homenavigation = document.querySelector(".homenavigation");
const brandbtn = document.querySelector(".brandbtn");
const navcloser = document.querySelector(".navcloser");
brandbtn.addEventListener("click", () => {
  homenavigation.classList.remove("navbarhide");
  homenavigation.classList.add("navbarshow");
});
navcloser.addEventListener("click", () => {
  homenavigation.classList.add("navbarhide");
  homenavigation.classList.remove("navbarshow");
});
// navcollapse end
