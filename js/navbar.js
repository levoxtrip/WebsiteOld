function myFunction() {
  var nav = document.getElementById("myTopnav");
  var intro = document.querySelector(".intro");
  
  if (nav.className === "topnav") {
      nav.className += " responsive";
      
      // Add fade-out and slide-left animation
      intro.style.transition = "opacity 0.5s ease, transform 0.5s ease";
      intro.style.opacity = "0";
      intro.style.transform = "translateX(-100%)"; // Slide out to the left
      
      // After the transition, set display to none
      setTimeout(function() {
          intro.style.display = "none";
      }, 500); // matches the 0.5s transition duration
  } else {
      nav.className = "topnav";

      // Bring intro back with fade-in and slide-in
      intro.style.display = "block"; 
      setTimeout(function() {
          intro.style.opacity = "1";
          intro.style.transform = "translateX(0)"; // Slide back to original position
      }, 10); // small delay for smooth transition
  }
}
