$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
	autoplay: 5000,
	slidespeed: 2000,
	mouseDrag: false,
	touchDrag: false,
	singleItem: true,
    responsive:{
        0:{
			items:1
        },
		480:{
			items:1
		},
		768:{
			items:1
		}
    }
	
});