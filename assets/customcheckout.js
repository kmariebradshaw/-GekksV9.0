$(document).ready(function() {
  var surveyShown = readCookie('postpurchase');
  // if ($(".thank-you__additional-content").length && !surveyShown) {
      if ($(".thank-you__additional-content").length ) {

    $('.postpurchase').show().insertAfter('.thank-you__additional-content'); 
    createCookie('postpurchase', 'true'); 
  }
  $('#gift').change(function() {
    if ($(this).prop("checked") == true) {
      jQuery.post('/cart/update.js', {note: "gift"});
    }
  })
})


  