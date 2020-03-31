$(function(){
    var windowHeight = $(window).height();
    upperHeight = $('.upper-bar').innerHeight(),
    navHeight = $('.navbar').innerHeight();

    $('.slider, .carousel-item, .slide-header').height(windowHeight-(upperHeight+navHeight));

    
    $(".over-lay").hover(function(){

        $(this).css("opacity", "1");
    }, function(){
    $(this).css("opacity", "0");
    });

});


$(".feature-area li").on('click', this, function() {


    $('.feature-area li.active').removeClass('active');
    $(this).addClass('active');
    $($(this).data("class")).fadeIn();
        $(".portfolio-items").find(".item").not(($(this).data("class"))).fadeOut();
});