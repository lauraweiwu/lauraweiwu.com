document.addEventListener('DOMContentLoaded', function() {
  // Find all accordion button elements
  var buttons = document.querySelectorAll('.accordion-btn');
  
  // Find all accordion content elements
  var contents = document.querySelectorAll('.accordion-content');
  
  console.log("Found buttons:", buttons.length);
  console.log("Found contents:", contents.length);
  
  // Add click event to each button
  buttons.forEach(function(button, index) {
    button.addEventListener('click', function() {
      console.log("Button clicked:", index);
      
      // Toggle active class
      this.classList.toggle('active');
      
      // Toggle content visibility
      if (contents[index]) {
        if (contents[index].style.display === 'block' || 
            window.getComputedStyle(contents[index]).display !== 'none') {
          contents[index].style.display = 'none';
        } else {
        // Hide all contents
        contents.forEach(function(content) { 
          content.style.display = 'none'; 
        });
        
        // Show this content
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
  
  // Set first content to be visible initially (optional)
  if (buttons.length > 0 && contents.length > 0) {
    buttons[0].classList.add('active');
    contents[0].style.display = 'block';
  }
});
