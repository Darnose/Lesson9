$(function () {
    $('body').addClass('loaded_hiding');
    window.setTimeout(function () {
      $('body').addClass('loaded');
      $('body').removeClass('loaded_hiding');
    }, 500);
    
    $(".tel").on('input', function(e){
        this.value = this.value.replace(/[^0-9\.]/g, '');
    });
    
    $("a.go").click(function (e) {
        e.preventDefault();
        elementClick = $(this).attr("href");
        destination = $(elementClick).offset().top;
        $("body,html").animate({scrollTop: destination }, 1000);
        return false;
    });
    
    $('.burger__btn').click (function () {
        $('.menu-collapse').toggleClass('d-none').css('order', '1' );
        $('.menu').toggleClass('menu-opened');
    });
   
    $('.parallax-btn').click(function (e) {
        e.preventDefault();
        $('#exampleModal').arcticmodal();
    });

    $('.slider').slick({
        dots: true,
        infinite: false,
        autoplay: true,
        prevArrow: '<button type="button" class="slick-prev"><i class="fa-solid fa-chevron-left"></i></button>',
        nextArrow: '<button type="button" class="slick-next"><i class="fa-solid fa-chevron-right"></i></button>',
    });
});
