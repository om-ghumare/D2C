$('.owl-carousel').owlCarousel({
    autoplay: true,
    autoplayHoverPause: true,
    loop:true,
    margin:10,
    navContainer:false,
    dots: false,
    items: 1,
    slideTransition: 'linear',
    autoplayTimeout: 1000,
    autoplaySpeed: 2000,
    responsive:{
        0:{
            items:1
        },
        780:{
            items:2
        },
        1400:{
            items:3
        }
    }
})


let hidePreloader = () => {
	let preloader = document.querySelector('.loader')
	preloader.style.zIndex = -200
}

let webpage = document.querySelector('html')

document.addEventListener('DOMContentLoaded', hidePreloader)