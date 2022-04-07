
// Set current year
const yearY1 = document.querySelector(".year");
const currentYear = new Date().getFullYear();
console.log('currentYear',currentYear); 
yearY1.textContent = currentYear;

// Mobile nav

const btnNavEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header");

btnNavEl.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");
});

//Smooth Scrolling

//selecting all the links on page
const allLinks = document.querySelectorAll("a:link");

allLinks.forEach(function (link){
    link.addEventListener("click", function (e){
        e.preventDefault();
        const href = link.getAttribute("href"); 

        //scroll to the top
        if (href === "#")
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });

       // Scroll to other links
    if (href !== "#" && href.startsWith("#")) {
        const sectionEl = document.querySelector(href);
        console.log(sectionEl);
        sectionEl.scrollIntoView({ behavior: "smooth" });
      }

      // Close mobile naviagtion once it is used
    if (link.classList.contains("main-nav-link"))
    headerEl.classList.toggle("nav-open");
    })
})


// Sticky navigation

//select the hero sec to use for sticking the nav

const sectionHeroEl = document.querySelector(".section-hero");

const obs = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];
    console.log(ent);

    if (ent.isIntersecting === false) {
      document.body.classList.add("sticky");
    }

    if (ent.isIntersecting === true) {
      document.body.classList.remove("sticky");
    }
  },
  {
    // In the viewport
    root: null,
    threshold: 0,
    rootMargin: "-80px",
  }
);
obs.observe(sectionHeroEl);