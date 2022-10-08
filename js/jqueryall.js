$('.icon-menu').click(function(event){
$(this).toggleClass('__active');
$('.menu__body').toggleClass('__active');
$('body').toggleClass('lock');
});



if(document.querySelector('.mainslider')){
$('.mainslider__body').slick({
        arrows:false,
        dots:true,
        accessibility:false,
        slidesToShow:1,
        slidesToScroll:1,
        autoplay:true,
        autoplaySpeed:4000,
        adaptiveHeight:true,
    });
}

function ibg(){

$.each($('.ibg'), function(index, val) {
if($(this).find('img').length>0){
$(this).css('background-image','url("'+$(this).find('img').attr('src')+'")');
}
});
}

ibg();


if(document.querySelector('.brands-slider')){
$('.brands-slider__body').slick({
        arrows:true,
        dots:false,
        accessibility:false,
        slidesToShow:5,
        slidesToScroll:1,
        autoplay:false,
        autoplaySpeed:4000,
        adaptiveHeight:false,
        nextArrow:'.brands-slider__arrow_prev',
        prevArrow:'.brands-slider__arrow_next',
        responsive:[
   {
        breakpoint:992,
        settings:{
          slidesToShow:4
    }
}, {
        breakpoint:768,
        settings:{
          slidesToShow:3
        }
    },
     {
        breakpoint:480,
        settings:{
          slidesToShow:2
        }
    }

    ],
    });
}


if(document.querySelector('.images-product')){
$('.images-product__mainslider').slick({
        arrows:false,
        dots:false,
        accessibility:false,
        slidesToShow:1,
        slidesToScroll:1,
        autoplay:false,
        autoplaySpeed:4000,
        adaptiveHeight:true,
        asNavFor:".images-product__subslider",
    });
}

if(document.querySelector('.images-product__subslider')){
$('.images-product__subslider').slick({
        arrows:false,
        dots:false,
        accessibility:false,
        slidesToShow:4,
        slidesToScroll:1,
        autoplay:false,
        autoplaySpeed:4000,
        adaptiveHeight:true,
        asNavFor:".images-product__mainslider",
    });
}
 
 

