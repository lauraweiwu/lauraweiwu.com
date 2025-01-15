document.addEventListener('DOMContentLoaded', function() {
  var acc = document.getElementsByClassName("accordion-btn");
  var contents = document.getElementsByClassName("accordion-content");

  for (var i = 0; i < acc.length; i++) {
    if (!acc[i].classList.contains('file-link')) {
      acc[i].addEventListener("click", function() {
        var index = Array.from(acc).indexOf(this);
        
        // Toggle active class
        this.classList.toggle("active");
        
        // Hide all contents
        for (var j = 0; j < contents.length; j++) {
          if (j !== index) {
            contents[j].style.display = "none";
            if (acc[j] && !acc[j].classList.contains('file-link')) {
              acc[j].classList.remove("active");
            }
          }
        }
        
        // Toggle clicked content
        if (contents[index] && contents[index].style.display === "block") {
          contents[index].style.display = "none";
        } else if (contents[index]) {
          contents[index].style.display = "block";
        }
      });
    }
  }
});
