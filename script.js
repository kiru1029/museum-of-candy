const nav = document.getElementById("mainNavbar");

let isClicked = false;

document.addEventListener("scroll", function() {
  if (window.scrollY > nav.offsetHeight) {
    nav.classList.add("scrolled");
  } else {
    nav.classList.remove("scrolled");
  }
});


nav.addEventListener("click", function() {
    isClicked = !isClicked; 
  
    if (isClicked) {
      nav.classList.add("clicked");
    } else {
      nav.classList.remove("clicked");
    }
  });