// Create a jQuery collection of elements with a class attribute value = accordion
// Add an event listener waits for a user to click a button, triggering an anonymous function
$('.accordion').on('click', '.accordion-control', function(e) {
  e.preventDefault();
  $(this)
    .next('.accordion-panel')
    .not(':animated')
    .slideToggle();
});
