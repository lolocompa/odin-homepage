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
const totalPageHeight = document.body.scrollHeight - window.innerHeight;

let homeOffset = 670;
let aboutOffset = 1500;
let skillsOffset = 2200;
let projectsOffset = totalPageHeight - 100;
let contactOffset = 4000;

window.addEventListener("scroll", () => {
  // Get the current scroll position
  const scrollPosition = window.scrollY;
  const screen_width = window.innerWidth;



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
    let position;
    if (targetSectionClass === "total") {
      position = totalPageHeight;
      console.log(position);
    } else {
      position = parseInt(targetSectionClass);
      console.log(position);
    }

    window.scrollTo({
      top: position,
      behavior: "smooth", // You can use "auto" or "smooth" for smooth scrolling
    });
  });
});
