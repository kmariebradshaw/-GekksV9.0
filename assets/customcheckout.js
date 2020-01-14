$(document).ready(function() {
  // var surveyShown = readCookie('postpurchase');
    var surveyShown = false;

  if ($(".thank-you__additional-content").length && !surveyShown) {
    $('.postpurchase').show().insertAfter('.thank-you__additional-content'); 
    createCookie('postpurchase', 'true'); 
  }
  $('#gift').change(function() {
    if ($(this).prop("checked") == true) {
      jQuery.post('/cart/update.js', {note: "gift"});
    }
  })
})


  