document.addEventListener("DOMContentLoaded", function() {
    var menuLinks = document.querySelectorAll("#menu a, .instagram");
  
    menuLinks.forEach(function(link) {
      link.addEventListener("mouseover", function() {
        this.style.opacity = "0.1";
      });
  
      link.addEventListener("mouseout", function() {
        this.style.opacity = "1";
      });
    });
  });
  