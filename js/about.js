// mega investment slider
const prevIcon =
  '<img src="images/back_button.svg" alt:"&larr;">';
const nextIcon =
  '<img src="images/front_button.svg" alt:"&rarr;">';
$(".owl-carousel").owlCarousel({
  loop: true,
  margin: 100,
  nav: true,
  center: true,
  dots: false,
  autoplay: true,
  navText: [prevIcon, nextIcon],

  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 3,
    },

    1000: {
      items: 5,
    },
  },
});



// achievments counter

const counters = document.querySelectorAll('.cont_counter')
const speed = 500;

counters.forEach(counter => {
  const updateCount = () => {
    const target = +counter.getAttribute('data-target')
    const count = +counter.innerText

    const inc = target / speed

    if (count < target) {
      counter.innerText = count + Math.ceil(inc)
      setTimeout(updateCount, 1)
    } else {
      counter.innerText = target
    }
  }

  $(window).scroll(function () {
    var hT = $('.cont_counter').offset().top,
      hH = $('.cont_counter').outerHeight(),
      wH = $(window).height(),
      wS = $(this).scrollTop();
    if (wS > (hT + hH - wH)) {
      setTimeout(updateCount(), 2000)

    }
  });
})

