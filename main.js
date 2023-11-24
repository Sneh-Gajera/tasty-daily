

$(document).ready(function () {
    $(".humberger i").click(function () {
      $(this).toggleClass("fa-times");
      $(".link_side").toggleClass("active");
    });
  });
  


  $('.brand_slider').owlCarousel({
    loop:true,
    margin:15,
    nav:false,
    dots:false,
    autoplay: true,
    // autoplaySpeed: 1000,
    smartSpeed: 500,
    responsive:{
        0:{
            items:2
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})


// top rated


$('.top_slider').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    dots:false,
    autoplay: true,
    // autoplaySpeed: 1000,
    smartSpeed: 500,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:4
        }
    }
})

// review

$('.review_slider').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    dots:false,
    autoplay: true,
    smartSpeed: 500,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:3
        }
    }
})


$('.related_slider').owlCarousel({
    loop:true,
    margin:15,
    nav:true,
    dots:false,
    autoplay: true,
    smartSpeed: 500,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        992:{
            items:4
        }
    }
})