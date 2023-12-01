// preloader

$(document).ready(function () {
  setTimeout(() => {
    $("#pre_loader").addClass("loaded");
  }, 1500);
  setTimeout(() => {
    $("#pre_loader").remove("loaded");
  }, 2000);
});

//   responsive menu
$(document).ready(function () {
  $(".humberger i").click(function () {
    $(this).toggleClass("fa-times");
    $(".link_side").toggleClass("active");
  });
});

$(function(){
  var current_page_URL = location.href;
  $( ".link_side a" ).each(function() 
  {
     if ($(this).attr("href") !== "#") 
     {
       var target_URL = $(this).prop("href");
       if (target_URL == current_page_URL) 
       {
          $(".link_side a").parent("li").removeClass("active");
          $(this).parent("li").addClass("active");
          return false;
       }
     }
  });
});   



// sticky nav

window.addEventListener("scroll", function () {
  let nav = document.querySelector(".navigate_bar");
  nav.classList.toggle("sticky", window.scrollY > 50);
});

$(document).ready(function () {
  $(".serch i").click(function () {
    $(this).toggleClass("fa-times");
    $(".user_info1").slideToggle(500);
  });
});



$(".brand_slider").owlCarousel({
  loop: true,
  margin: 15,
  nav: false,
  dots: false,
  autoplay: true,
  // autoplaySpeed: 1000,
  smartSpeed: 500,
  responsive: {
    0: {
      items: 2,
    },
    600: {
      items: 3,
    },
    1000: {
      items: 5,
    },
  },
});

// top rated

$(".top_slider").owlCarousel({
  loop: true,
  margin: 10,
  nav: true,
  dots: true,
  autoplay: true,
  // autoplaySpeed: 1000,
  smartSpeed: 500,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 2,
    },
    1000: {
      items: 4,
    },
  },
});

// review

$(".review_slider").owlCarousel({
  loop: true,
  margin: 10,
  nav: true,
  dots: true,
  autoplay: true,
  smartSpeed: 500,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 1,
    },
    1000: {
      items: 3,
    },
  },
});

$(".related_slider").owlCarousel({
  loop: true,
  margin: 15,
  nav: true,
  dots: true,
  autoplay: true,
  smartSpeed: 500,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 2,
    },
    992: {
      items: 4,
    },
  },
});


new PureCounter({
    selector: ".purecounter",
    duration: 2,
    delay: 100,
    repeat: false,
    decimals: 0,
    legacy: true,
    filesizing: false,
    currency: false,
    separator: true,
  });
