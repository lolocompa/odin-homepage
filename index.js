const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    } else {
      entry.target.classList.remove("show");
    }
  });
});

const hidden_elements = document.querySelectorAll(".hidden");

hidden_elements.forEach((el) => observer.observe(el));

// Select all navigation buttons
const navButtons = document.querySelectorAll(".nav button");

let homeOffset = 600;
let aboutOffset = 1700;
let skillsOffset = 2600;
let projectsOffset = 4070;
let contactOffset = 4077;

window.addEventListener("scroll", () => {
  // Get the current scroll position
  const scrollPosition = window.scrollY;

  const screen_width = window.innerWidth;

  if (screen_width <= 800) {
    projectsOffset = 6710;
    contactOffset = 6719;
  }

  // Example logic to determine the current section based on scroll position
  let currentSection;
  if (scrollPosition <= homeOffset) {
    currentSection = "home";
  } else if (scrollPosition <= aboutOffset && scrollPosition > homeOffset) {
    currentSection = "about";
  } else if (scrollPosition <= skillsOffset && scrollPosition > aboutOffset) {
    currentSection = "skills";
  } else if (
    scrollPosition <= projectsOffset &&
    scrollPosition > skillsOffset
  ) {
    currentSection = "projects";
  } else {
    currentSection = "contact";
  }

  // Access the corresponding nav button based on the current section
  const currentButton = document.querySelector(`.${currentSection}_btn`);

  // Now you can use the 'currentButton' variable as needed
  navButtons.forEach((btn) => {
    btn.parentElement.classList.remove("current");
    btn.classList.remove("btn_current");
  });
  currentButton.parentElement.classList.add("current");
  currentButton.classList.add("btn_current");
});

const nav_divs = document.querySelectorAll(".nav_container");
nav_divs.forEach((btn) => {
  btn.addEventListener("click", () => {
    const targetSectionClass = btn.dataset.scroll;
    const position = parseInt(targetSectionClass);

    window.scrollTo({
      top: position,
      behavior: "smooth", // You can use "auto" or "smooth" for smooth scrolling
    });
  });
});
