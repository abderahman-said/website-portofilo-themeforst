new WOW({
  // duration: '10s'  
}).init();

$(window).scroll(function() {
    $('#animatedElement').each(function(){
     var imagePos = $(this).offset().top;
     var topOfWindow = $(window).scrollTop();
     if (imagePos < topOfWindow+450) {
     $(this).addClass("barrelRoll");
     }
    });
  });
     $('#animatedElement').click(function() { $(this).addClass("barrelRoll"); });

function progressBarScroll() {
  let winScroll = document.body.scrollTop || document.documentElement.scrollTop,
    height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight,
    scrolled = (winScroll / height) * 100;
  document.getElementById("progressBar").style.width = scrolled + "%";
}

window.onscroll = function () {
  progressBarScroll();
};

$(document).ready(preloderFunction());

function preloderFunction() {
  setTimeout(function () {
    document.getElementById("page-top").scrollIntoView();

    $("#ctn-preloader").addClass("loaded");
    $("body").removeClass("no-scroll-y");

    if ($("#ctn-preloader").hasClass("loaded")) {
      $(this).delay(2000).fadeOut();
    }
  }, 1000);
}

function afterLoad() {}




$(".search-navbar").click(function () {
  $(".overlay").fadeIn();
});

$(".close-popup").click(function () {
  $(".overlay").fadeOut();
});

$(".searchButton-nav").click(function (e) {
  e.preventDefault(); // منع إرسال النموذج الافتراضي
  $(".overlay").fadeOut();
});

$(document).mouseup(function (e) {
  var popup = $("#searchBox-nav");
  if (e.target != popup[0] && popup.has(e.target).length === 0) {
    $(".overlay").fadeOut();
  }
});

$(document).ready(function () {
  handleCursor()
  var searchButton = $(".searchButton-nav");
  var searchInput = $(".searchInput-nav");
  var searchForm = $("#searchBox-nav");
  var searchResults = $("#searchResults");

  searchButton.click(function (e) {
    e.preventDefault();
    var searchTerm = searchInput.val();
    if (searchTerm) {
      // Perform AJAX validation here
      $.ajax({
        url: "your_validation_script.php",
        method: "POST",
        data: { search: searchTerm },
        success: function (response) {
          // Display the validation results or update the searchResults div
          searchResults.html(response);
        },
      });
    } else {
      alert("Please enter a search term");
    }
  });

  searchInput.on("input", function () {
    if (searchInput.val().trim() === "") {
      searchButton.prop("disabled", true);
    } else {
      searchButton.prop("disabled", false);
    }
  });
});

 





 













































  




































 











































































 





$('#partners').owlCarousel({
  loop:true,
  margin:30,
  responsiveClass:true,
  nav:false,
  responsive:{
      0:{
          items:2,
          nav:true
      },
      400:{
          items:3,
          nav:false
      },
      800:{
        items:4,
        nav:false
    },
    
      1000:{
          items:5,
          nav:true,
          loop:false
      }
  }
})



function filterProjects(button) {
   var buttons = document.querySelectorAll('.taps-projects-filter');
  buttons.forEach(function(btn) {
      btn.classList.remove('active-taps-projects');
  });

   button.classList.add('active-taps-projects');
}












$(document).ready(function () {
  handleCursor()

})
function handleCursor() {
  const cursorInner = document.querySelector(".cursor-inner"),
    cursorOuter = document.querySelector(".cursor-outer");
  let n,
    i = 0,
    o = !1;
  window.onmousemove = function (s) {
    o ||
      (cursorOuter.style.transform =
        "translate(" + s.clientX + "px, " + s.clientY + "px)"),
      (cursorInner.style.transform =
        "translate(" + s.clientX + "px, " + s.clientY + "px)"),
      (n = s.clientY),
      (i = s.clientX);
  };
  if (document.querySelector(".cursor-pointer")) {
    document
      .querySelector(".cursor-pointer")
      .addEventListener("mouseenter", function () {
        cursorInner.classList.add("cursor-hover"),
          cursorOuter.classList.add("cursor-hover");
      });
    document
      .querySelector(".cursor-pointer")
      .addEventListener("mouseleave", function () {
        cursorInner.classList.remove("cursor-hover"),
          cursorOuter.classList.remove("cursor-hover");
      }),
      (cursorInner.style.visibility = "visible"),
      (cursorOuter.style.visibility = "visible");
  }
  document.querySelectorAll("a").forEach(function (item) {
    item.addEventListener("mouseenter", function () {
      cursorInner.classList.add("cursor-hover"),
        cursorOuter.classList.add("cursor-hover");
    });
  });
  document.querySelectorAll("a").forEach(function (item) {
    item.addEventListener("mouseleave", function () {
      cursorInner.classList.remove("cursor-hover"),
        cursorOuter.classList.remove("cursor-hover");
    });
  }),
    (cursorInner.style.visibility = "visible"),
    (cursorOuter.style.visibility = "visible");
}








 





















 








 





// if(document.querySelector('.nav-bar')){ 
  
window.onscroll = function() {
  if (window.scrollY > 300) {
    document.querySelector('.nav-bar').classList.add('nav-fixed');
  } else {
    document.querySelector('.nav-bar').classList.remove('nav-fixed');
  }
};

 