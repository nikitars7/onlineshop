if(document.querySelector('.products-slider')){
$('.products-slider__items').slick({
        arrows:true,
        dots:false,
        accessibility:false,
        slidesToShow: 3,
        rows:2,
        autoplay:false,
        autoplaySpeed:4000,
         adaptiveHeight:true,
        nextArrow:'.products-slider__arrow_next',
        prevArrow:'.products-slider__arrow_prev',
        responsive:[
    {
        breakpoint:1140,
        settings:{
          slidesToShow:2
        }
    },{
        breakpoint:992,
        settings:{
          slidesToShow:3
    }
}, {
        breakpoint:840,
        settings:{
          slidesToShow:2
        }
    },
     {
        breakpoint:600,
        settings:{
          slidesToShow:1
        }
    }

    ],
    });
  
        $(".products-slider__items").on('afterChange', function(event, slick, currentSlide){
     $("#cp").text(currentSlide + 1);
  });
}


