//All for navbar
document.addEventListener("DOMContentLoaded", function() {
  const navbar = document.querySelector(".nav") 

  function updateNavbar() {
    if (window.scrollY > 50) {
      navbar.style.background = "rgba(0, 0 , 0 , 0.9)";
      navbar.style.height = "80px";
    }else {
      navbar.style.background = "rgba(0, 0, 0, 0.8)";
      navbar.style.height = "80px";
    }
  }

  window.addEventListener("scroll", updateNavbar);
  updateNavbar();
});

//All for Image Changes
const images = document.querySelectorAll(".carousel-container img");  //Selects all the images inside the carousel container div

let currentIndex = 0;  //It tracks which image is currently displayed

//Function for Image changing
function changeImage() {
  images[currentIndex].classList.remove("active"); //Hide the current image
  currentIndex = (currentIndex + 1) % images.length  //Move to the next image
  images[currentIndex].classList.add("active");  //show the new image
}

setInterval(changeImage, 3000);  //Change or repeat the image after every 3 seconds

//All for About section animation after loading
document.addEventListener("DOMContentLoaded", function() {   //DOMContentLoaded means the script runs only after the entire HTML page has been loaded.

  const aboutSection = document.querySelector(".about-section");

  //Function to check the about section is visible or not
  function checkVisibility() {
    const sectionPosition = aboutSection.getBoundingClientRect().top;   //.getBoundingClientRect().top gets the distance from the top of the .about-section to the top of the viewport.

    //It define when the section should appear
    const screenPosition = window.innerHeight / 1.2;   //window.innerHeight gives the height of the visible screen (viewport).Dividing by 1.2 means the animation starts when the section is about 80% down the screen.

    if(sectionPosition < screenPosition) {
      aboutSection.classList.add("visible");
    }
  }

  window.addEventListener("scroll", checkVisibility);

  checkVisibility();
});

// ========== Category Image Click Functionality ==========
const items = document.querySelectorAll(".category-images li");

items.forEach((item) => {
  const image = item.querySelector(".image-content img");
  const details = item.querySelector(".category-info");

  image.addEventListener("click", function (event) {
    event.stopPropagation(); // Prevent event bubbling

    // Hide all other descriptions first
    items.forEach((otherItem) => {
      if (otherItem !== item) {
        otherItem.classList.remove("active");
        otherItem.querySelector(".category-info").style.opacity = "0";
        otherItem.querySelector(".category-info").style.visibility = "hidden";
      }
    });

    // Toggle the clicked item's description
    if (item.classList.contains("active")) {
      item.classList.remove("active");
      details.style.opacity = "0";
      details.style.visibility = "hidden";
    } else {
      item.classList.add("active");
      details.style.opacity = "1";
      details.style.visibility = "visible";
    }
  });
});

// Click anywhere outside to close all descriptions
document.addEventListener("click", function (event) {
  if (!event.target.closest(".category-images li")) {
    items.forEach((item) => {
      item.classList.remove("active");
      item.querySelector(".category-info").style.opacity = "0";
      item.querySelector(".category-info").style.visibility = "hidden";
    });
  }
});

//When user update all the information and clicked to submit button
document.addEventListener("DOMContentLoaded", function() {
  const form = document.querySelector("form");
  form.addEventListener("submit", function(event) {
      event.preventDefault();
      alert("Your message has been submitted!");
  });
});


//
document.addEventListener("DOMContentLoaded", function () {
  const contactForm = document.querySelector(".contact-form");
  const mapContainer = document.querySelector(".map-container");

  function handleScroll() {
      const triggerHeight = window.innerHeight * 0.8; // Adjust for better timing
      if (contactForm.getBoundingClientRect().top < triggerHeight) {
          contactForm.classList.add("visible");
      }
      if (mapContainer.getBoundingClientRect().top < triggerHeight) {
          mapContainer.classList.add("visible");
      }
  }

  window.addEventListener("scroll", handleScroll);
  handleScroll(); // Run once on page load
});


document.addEventListener("DOMContentLoaded", function () {
  const links = document.querySelectorAll(".nav-section a");

  links.forEach(link => {
    link.addEventListener("click", function (event) {
      if (this.getAttribute("href").startsWith("#")) {
        event.preventDefault();
        const targetId = this.getAttribute("href").substring(1);
        const targetSection = document.getElementById(targetId);
        
        if (targetSection) {
          window.scrollTo({
            top: targetSection.offsetTop - 60,
            behavior: "smooth"
          });
        }
      }
    });
  });
});


// ========== Component Click Functionality ==========
document.addEventListener("DOMContentLoaded", function() {
  const filterButtons = document.querySelectorAll(".filter-btn");
  const items = document.querySelectorAll(".category-images li");

  filterButtons.forEach(button => {
    button.addEventListener("click", function() {
      const category = this.getAttribute("data-category");

      items.forEach(item => {
        if(category === "All" || item.getAttribute("data-category") == category) {
          item.style.display = "block";
        } else {
          item.style.display = "none";
        }
      });

      //Remove active class from all buttons and add to clicked one
      filterButtons.forEach(btn => btn.classList.remove(active));
      this.classList.add("active");
    });
  });
});

// ========== Responsive Nav Sective ==========
function toggleMenu() {
  const navSection = document.querySelector(".nav-section");
  const menuIcon = document.querySelector(".menu-icon i")

  if (navSection) {
  navSection.classList.toggle("active");

  //Toggle icon between hamburger and close
  if (navSection.classList.contains("active")) {
    menuIcon.classList.remove("fa-bars");
    menuIcon.classList.add("fa-times");
  }else {
    menuIcon.classList.remove("fa-times");
    menuIcon.classList.add("fa-bars");
  }
}
}



