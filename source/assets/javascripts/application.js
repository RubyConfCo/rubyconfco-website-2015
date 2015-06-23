//= require_tree .

$(".js-nav-toggle").on( "click", function() {
  $(this).toggleClass( "active" );
  $("body").toggleClass( "opened" );
});

//  HEADER 

$(window).scroll(function() {

  // scrollTO
  var scroll = $(this).scrollTop();
  var hbanner = $('.main-banner').height();
  if(scroll >= hbanner){
    $('.header').addClass('onsight');
  }
  else{
    $('.header').removeClass('onsight');
  }


  // change color navigation slider
  var navSlider = $('.nav--slider-container');
  var navSliderTop = $('.nav--slider-container').offset().top;
  var section_red = [$('#top'), $('#top').offset(), $('#top').height()];
  var section_purple = [$('#venue'), $('#venue').offset(), $('#venue').height()];

  if ( $('#top').length > 0 ){
    if((navSliderTop+1) >= section_red[1].top && (navSliderTop+1) <= (parseInt(section_red[1].top)+parseInt(section_red[2])) ){
      navSlider.addClass('red');
      $(".js-nav-toggle").addClass('red');
    }
    else{
      navSlider.removeClass('red'); 
      $(".js-nav-toggle").removeClass('red');
    }
  }
  if ( $('#venue').length > 0 ){
    if((navSliderTop+1) >= section_purple[1].top && (navSliderTop+1) <= (parseInt(section_purple[1].top)+parseInt(section_purple[2])) ){
      navSlider.addClass('purple');
      $(".js-nav-toggle").addClass('purple');
    }
    else{
      navSlider.removeClass('purple'); 
      $(".js-nav-toggle").removeClass('purple');
    }
  }
    
  // change slider current on scroll
  if ( $('#top').length > 0 ){
    var sectionTop = [$('#top'), $('#top').offset(), $('#top').height()];
    if((navSliderTop+1) >= sectionTop[1].top && (navSliderTop+1) <= (parseInt(sectionTop[1].top)+parseInt(sectionTop[2])) ){
      $(".nav__item").removeClass('current');
      $(("[data-scrollto='#top']")).parent(".nav__item").addClass('current');
    }
  }

  if ( $('#mailing-list').length > 0 ){
    var sectionMailingList = [$('#mailing-list'), $('#mailing-list').offset(), $('#mailing-list').height()];
    if((navSliderTop+1) >= sectionMailingList[1].top && (navSliderTop+1) <= (parseInt(sectionMailingList[1].top)+parseInt(sectionMailingList[2])) ){
      $(".nav__item").removeClass('current');
      $(("[data-scrollto='#mailing-list']")).parent(".nav__item").addClass('current');
    }
  }

  if ( $('#venue').length > 0 ){  
    var sectionVenue= [$('#venue'), $('#venue').offset(), $('#venue').height()];
    if((navSliderTop+1) >= sectionVenue[1].top && (navSliderTop+1) <= (parseInt(sectionVenue[1].top)+parseInt(sectionVenue[2])) ){
      $(".nav__item").removeClass('current');
      $(("[data-scrollto='#venue']")).parent(".nav__item").addClass('current');
    }
  }

  if ( $('#speakers').length > 0 ){  
    var sectionSpeakers = [$('#speakers'), $('#speakers').offset(), $('#speakers').height()];
    if((navSliderTop+1) >= sectionSpeakers[1].top && (navSliderTop+1) <= (parseInt(sectionSpeakers[1].top)+parseInt(sectionSpeakers[2])) ){
      $(".nav__item").removeClass('current');
      $(("[data-scrollto='#speakers']")).parent(".nav__item").addClass('current');
    }
  }

  if ( $('#tickets').length > 0 ){ 
    var sectionTickets = [$('#tickets'), $('#tickets').offset(), $('#tickets').height()];
    if((navSliderTop+1) >= sectionTickets[1].top && (navSliderTop+1) <= (parseInt(sectionTickets[1].top)+parseInt(sectionTickets[2])) ){
      $(".nav__item").removeClass('current');
      $(("[data-scrollto='#tickets']")).parent(".nav__item").addClass('current');
    }
  }

  if ( $('#coc').length > 0 ){  
    var sectionCoC = [$('#coc'), $('#coc').offset(), $('#coc').height()];
    if((navSliderTop+1) >= sectionCoC[1].top && (navSliderTop+1) <= (parseInt(sectionCoC[1].top)+parseInt(sectionCoC[2])) ){
      $(".nav__item").removeClass('current');
      $(("[data-scrollto='#coc']")).parent(".nav__item").addClass('current');
    }
  }

  if ( $('#schedule').length > 0 ){ 
    var sectionSchedule = [$('#schedule'), $('#schedule').offset(), $('#schedule').height()];
    if((navSliderTop+1) >= sectionSchedule[1].top && (navSliderTop+1) <= (parseInt(sectionSchedule[1].top)+parseInt(sectionSchedule[2])) ){
      $(".nav__item").removeClass('current');
      $(("[data-scrollto='#schedule']")).parent(".nav__item").addClass('current');
    }
  }

  if ( $('#sponsors').length > 0 ){ 
    var sectionSponsors = [$('#sponsors'), $('#sponsors').offset(), $('#sponsors').height()];
    if((navSliderTop+1) >= sectionSponsors[1].top && (navSliderTop+1) <= (parseInt(sectionSponsors[1].top)+parseInt(sectionSponsors[2])) ){
      $(".nav__item").removeClass('current');
      $(("[data-scrollto='#sponsors']")).parent(".nav__item").addClass('current');
    }
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

// scrollTo

$(".js-scrollTo").on('click', function(e){
  e.preventDefault();
  var sectionName = $(this).attr('data-scrollto');
  var sectionPosition = $(sectionName).offset().top;
  $("html, body").animate({scrollTop : sectionPosition},1000);
  $(".js-nav-toggle").removeClass( "active" );
  $("body").removeClass( "opened" );
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
