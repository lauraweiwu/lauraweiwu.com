document.addEventListener('DOMContentLoaded', function() {
  // Find all accordion containers
  var accordionContainers = document.querySelectorAll('.accordion-container');

  accordionContainers.forEach(function(container) {
    // Check if this is a multi-button accordion (contains multiple non-file-link buttons)
    var buttons = container.querySelectorAll('.accordion-btn:not(.file-link)');
    
    if (buttons.length > 1) {
      // This is a multi-button accordion
      // Get the parent wrapper
      var wrapper = container.closest('.accordion-wrapper');
      // Get all accordion-content elements that are direct children of the wrapper
      var contents = Array.from(wrapper.children).filter(function(child) {
        return child.classList.contains('accordion-content');
      });
      
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
    } else {
      // This is a single-button accordion (your existing code)
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
    }
  });
});
