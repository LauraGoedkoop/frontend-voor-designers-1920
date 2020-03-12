/*/jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/
/*eslint-env browser*/
/*eslint 'no-console':0*/


new Glider(document.querySelector('.glider'), {
  // Mobile-first defaults
  slidesToShow: 1,
  slidesToScroll: 1,
  scrollLock: true,
  dots: '.dots',
  arrows: {
    prev: '.glider-prev',
    next: '.glider-next'
  },
  responsive: [
    {
      // screens greater than >= 775px
      breakpoint: 775,
      settings: {
        // Set to `auto` and provide item width to adjust to viewport
        slidesToShow: 'auto',
        slidesToScroll: 'auto',
        itemWidth: 150,
        duration: 0.25
      }
    }, {
      // screens greater than >= 1024px
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        itemWidth: 150,
        duration: 0.25
      }
    }
  ]
});

document.addEventListener('keydown', function (event) {
  if (event.keyCode == 39) {
    var buttonRight = document.querySelector('.glider-next');
    console.log(buttonRight);
    buttonRight.click();
    buttonRight.style.opacity="100%";
    
  }

});

document.addEventListener('keydown', function (event) {
//  console.log("test", event.keyCode);
  if (event.keyCode == 37) {
    var buttonLeft = document.querySelector('.glider-prev');
    console.log(buttonLeft);
    buttonLeft.click();
  }

});
