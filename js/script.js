
$(".slider").owlCarousel({
    singleItem: true,
    loop: true,
    autoplay:true,
    autoplayTimeout: 5000,
    items:1,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:false
        },
        600:{
            items:3,
            nav:false
        },
        1000:{
            items:3,
            nav:true,
        }
    }
});


$(".product-grid").owlCarousel({
    loop: true,
    items:1,

});

