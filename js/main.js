
var isMobile = {
        Android: function() {
            return navigator.userAgent.match(/Android/i);
        },
        BlackBerry: function() {
            return navigator.userAgent.match(/BlackBerry/i);
        },
        iOS: function() {
            return navigator.userAgent.match(/iPhone|iPad|iPod/i);
        },
        Opera: function() {
            return navigator.userAgent.match(/Opera Mini/i);
        },
        Windows: function() {
            return navigator.userAgent.match(/IEMobile/i);
        },
        any: function() {
            return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
        }
    };

if(isMobile.any()){
	document.querySelector('body').classList.add('touch');
}


if(isMobile.any()){
let menuParents = document.querySelectorAll('.menu-page__parent >a');
for(let index = 0; index<menuParents.length;index++){
   const menuParent = menuParents[index];
   menuParent.addEventListener("click",function(e){
     menuParent.parentElement.classList.toggle('active');
     e.preventDefault();
   });
 }
} else{
let menuParents = document.querySelectorAll('.menu-page__parent');

for(let index = 0; index < menuParents.length;index++){
	const menuParent = menuParents[index];
	menuParent.addEventListener("mouseenter", function (e){
    menuParent.classList.add('active');
	});
	menuParent.addEventListener("mouseleave", function (e){
    menuParent.classList.remove('active');
	});
}
}
let menuPageBurger = document.querySelector('.menu-page__burger');
let menuPageBody = document.querySelector('.menu-page__body');
menuPageBurger.addEventListener("click", function (e){
	menuPageBurger.classList.toggle('__active');
	if ( $( ".menu-page__body" ).first().is( ":hidden" ) ) {
    $( ".menu-page__body" ).slideDown( "slow" );
  } else {
    $( ".menu-page__body" ).slideUp();
  }
  });


let searchSelect  = document.querySelector('.search-page__title');
let categoriesSearch  = document.querySelector('.categories-search');

searchSelect.addEventListener("click",function(e){
	searchSelect.classList.toggle('_active');
  if ( $( ".categories-search" ).first().is( ":hidden" ) ) {
    $( ".categories-search" ).slideDown( "slow" );
  } else {
    $( ".categories-search" ).slideUp();
  }
});

let checkBox = document.querySelectorAll('.categories-search__checkbox');

for(let index = 0; index < checkBox.length;index++){
	const checkBoxes = checkBox[index];
    checkBoxes.addEventListener("change",function(e){
    	checkBoxes.classList.toggle('active');

    	let checkBoxesActive = document.querySelectorAll('.categories-search__checkbox.active')
 
         if(checkBoxesActive.length>0){
         	searchSelect.classList.add('categories');
         	let searchQuantity = searchSelect.querySelector('.search-page__quantity');
         	searchQuantity.innerHTML = searchQuantity.getAttribute('data-text') + ' ' + checkBoxesActive.length;

         }else{
         	searchSelect.classList.remove('categories');
         }
    });

}


// NOUISLIDER START


const priceSlider  = document.querySelector('.price-filter__slider');

noUiSlider.create(priceSlider, {
    start: [0, 200000],
    connect:true,
    tooltips:[wNumb({decimals: 0}), wNumb({decimals: 0})],
    range: {
        'min': [0],
        'max': [200000]
    }
});
const priceStart  = document.getElementById('price-start');
const priceEnd  = document.getElementById('price-end');
 priceStart.addEventListener('change',setPriceValues);
 	priceEnd.addEventListener('change',setPriceValues);

 	function setPriceValues(){
 		let priceStartValue;
 		let priceEndValue;
 		if(priceStart.value != ''){
 			priceStartValue = priceStart.value;
 		}
 		if(priceEnd.value != ''){
 			priceEndValue = priceEnd.value;
 		}
 		priceSlider.noUiSlider.set([priceStartValue,priceEndValue]);
 	}

 	if(isMobile.any()){
const filterTitle = document.querySelector('.filter__title');
let filterContent = document.querySelector('.filter__content');
 filterTitle.addEventListener("click",function(e){
 	filterTitle.classList.toggle('_active');
    if ( $( ".filter__content" ).first().is( ":hidden" ) ) {
    $( ".filter__content" ).slideDown( "slow" );
  } else {
    $( ".filter__content" ).slideUp();
  }
 });

}

   













