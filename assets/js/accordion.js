document.addEventListener('DOMContentLoaded', function() {
  // Find all accordion containers
  var accordionContainers = document.querySelectorAll('.accordion-container');

  accordionContainers.forEach(function(container) {
    var button = container.querySelector('.accordion-btn:not(.file-link)');
    var content = container.nextElementSibling;

    if (button && content) {
      button.addEventListener('click', function() {
        // Toggle active class on the clicked button
        this.classList.toggle('active');

        // Toggle the corresponding content
        if (content.style.display === 'block') {
          content.style.display = 'none';
        } else {
          content.style.display = 'block';
        }
      });
    }
  });
});
