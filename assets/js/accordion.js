document.addEventListener('DOMContentLoaded', function() {
  // Find all accordion containers
  var accordionContainers = document.querySelectorAll('.accordion-container');

  accordionContainers.forEach(function(container) {
    var buttons = container.querySelectorAll('.accordion-btn:not(.file-link)');
    var contents = container.nextElementSibling.querySelectorAll('.accordion-content');

    buttons.forEach(function(button, index) {
      button.addEventListener('click', function() {
        // Toggle active class on the clicked button
        this.classList.toggle('active');

        // Toggle the corresponding content
        if (contents[index]) {
          if (contents[index].style.display === 'block') {
            contents[index].style.display = 'none';
          } else {
            // Hide all contents
            contents.forEach(function(content) {
              content.style.display = 'none';
            });
            // Show the clicked content
            contents[index].style.display = 'block';
          }
        }

        // Remove active class from other buttons
        buttons.forEach(function(btn) {
          if (btn !== button) {
            btn.classList.remove('active');
          }
        });
      });
    });
  });
});
