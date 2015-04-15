//= require_tree .

//  HEADER 

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

//  ACCORDION 

var accordion = $(".js-accordion");
var accordionTrigger = $(".js-accordion").find('.accordion__header');

accordion.find('.accordion__body').hide();

$(accordionTrigger).on('click', function() {
  $(this).toggleClass('open');
  $(this).next('.accordion__body').slideToggle();
}); 

$(".js-scrollTo").on('click', function(e){
  e.preventDefault();
  var sectionName = $(this).attr('data-scrollto');
  var sectionPosition = $(sectionName).offset().top;
  $("html, body").animate({scrollTop : sectionPosition},1000);
})

// MAP

$('.js-map').on('click', function(event) {
  event.preventDefault();
  $('.map-overlay').addClass('open');
});

$('.js-map-close').on('click', function(event) {
  event.preventDefault();
  $('.map-overlay').removeClass('open');
});

function initialize() {
  var mapCanvas = document.getElementById('map-canvas');
  var mapOptions = {
    center: new google.maps.LatLng(44.5403, -78.5463),
    zoom: 8,
    disableDefaultUI: true,
    mapTypeId: 'roadmap'
  }
  var map = new google.maps.Map(mapCanvas, mapOptions)
}
google.maps.event.addDomListener(window, 'load', initialize);