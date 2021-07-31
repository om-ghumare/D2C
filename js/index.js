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

document.addEventListener('DOMContentLoaded', setTimeout(hidePreloader, 4500))


// const news = ["Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
// "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
// "Contrary to popular belief, Lorem Ipsum is not simply random text.",
// "The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested.",
// "All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary."]

//logo
// const logo = "<img src='https://www.onlineupsidc.com/images/new_red.gif' width='25px' style='margin:0 8px'/>";
// let tickerText = "";
//looping through the news array
// for(let i=0; i<news.length; i++){
//   tickerText+=news[i];
  //adds the logo in between news items
//   if(i!=news.length-1){
//     tickerText+=logo;
//   }
// }

// document.querySelector("#scroll a").innerHTML = tickerText;
