$(function(){



$('.feedback__slider').slick({

    fade: true,
    dots: false,
    infinite: true,
    speed: 500,
    swipe: false,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: false,
    pauseOnFocus: false,
    cssEase: 'linear',
    prevArrow: '<button class="slick-btn slick-prev"><img src="img/arrow-left.svg" alt=""></button>',
    nextArrow: '<button class="slick-btn slick-next"><img src="img/arrow-right.svg" alt=""></button>'

});


$("#menu-scroll").on("click","a", function (event) {
    event.preventDefault();
    var id = $(this).attr('href'),
    top = $(id).offset().top;
    $('body,html').animate({scrollTop: top}, 1000);
});


});