//= require_tree .

$(window).scroll(function() {
  var scroll = $(this).scrollTop();
  var hbanner = $('.main-banner').height();
  if(scroll >= hbanner){
    $('.header').addClass('onsight');
  }
  else{
    $('.header').removeClass('onsight');
  }
});