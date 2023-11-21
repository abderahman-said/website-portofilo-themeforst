
AOS.init({
  duration: 1000
});

function progressBarScroll() {
  let winScroll = document.body.scrollTop || document.documentElement.scrollTop,
      height = document.documentElement.scrollHeight - document.documentElement.clientHeight,
      scrolled = (winScroll / height) * 100;
  document.getElementById("progressBar").style.width = scrolled + "%";
}

var section = document.querySelector('.relative_wats');
var scrollThreshold = 500;

window.addEventListener('scroll', function() {
  if (window.pageYOffset > scrollThreshold) {
    section.style.display = 'block';
  } else {
    section.style.display = 'none';
  }
});
window.onscroll = function () {
  progressBarScroll();
};


  $('.owl-carousel').owlCarousel({
    loop:false,
    margin:30,
      navText : ['<i class="fa-solid fa-arrow-right" aria-hidden="true"></i>','<i class="fa-solid fa-arrow-left" aria-hidden="true"></i>'],
    responsiveClass:true,
    nav:true,
    center:true,
    responsive:{
      0:{
          items:1
      },
      600:{
          items:1
      },
      800:{
        items:2
    },
      1000:{
          items:2
      }
    }
})

$(document).ready(preloderFunction());
    
function preloderFunction() {
  
    setTimeout(function() {
        document.getElementById("page-top").scrollIntoView();
        
        $('#ctn-preloader').addClass('loaded');  
        $('body').removeClass('no-scroll-y');

        if ($('#ctn-preloader').hasClass('loaded')) {
          $(this).delay(2000).fadeOut();
        }
    }, 1000);
}



function afterLoad() {
}
 
   
window.onscroll = function() {
  if (window.scrollY > 300) {
    document.querySelector('.nav-bar').classList.add('nav-fixed');
  } else {
    document.querySelector('.nav-bar').classList.remove('nav-fixed');
  }
};

 