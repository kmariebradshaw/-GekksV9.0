$(document).ready(function() {
  $('#gift').change(function() {
    if ($(this).prop("checked") == true) {
      jQuery.post('/cart/update.js', {note: "gift"});
    }
  })
})


  