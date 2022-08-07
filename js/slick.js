
$(document).ready(function(){
    $('.tesmonials_slider').slick({
      infinite: true,
      autoplay: true,
      autoplaySpeed: 2000,
      prevArrow:"<button type='button' class='slick-prev pull-left'><ion-icon name='chevron-back-outline'></ion-icon></button>",
      nextArrow:"<button type='button' class='slick-next pull-right'><ion-icon name='chevron-forward-outline'></ion-icon></button>",
      dots: true
    });
  });