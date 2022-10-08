let mainsliderImages = document.querySelectorAll('.mainslider__image');
let mainsliderDotts = document.querySelectorAll('.mainslider__body .slick-dots button');

for(let index = 0; index< mainsliderImages.length;index++){
	const mainsliderImage = mainsliderImages[index].querySelector('img').getAttribute('src');
	mainsliderDotts[index].style.backgroundImage = "url('" + mainsliderImage + "')";
}