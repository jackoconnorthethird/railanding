(function ($) {
    "use strict"; // Start of use strict
  
    // Smooth scrolling using jQuery easing
    $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function () {
      if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
          $('html, body').animate({
            scrollTop: (target.offset().top - 54)
          }, 1000, "easeInOutExpo");
          return false;
        }
      }
    });
  
    // Closes responsive menu when a scroll trigger link is clicked
    $('.js-scroll-trigger').click(function () {
      $('.navbar-collapse').collapse('hide');
    });
  
    // Activate scrollspy to add active class to navbar items on scroll
    $('body').scrollspy({
      target: '#mainNav',
      offset: 56
    });
  
    // Collapse Navbar
    var navbarCollapse = function () {
      if ($("#mainNav").offset().top > 100) {
        alert('scrolled!');
        $("#mainNav").addClass("navbar-shrink");
      } else {
        $("#mainNav").removeClass("navbar-shrink");
      }
    };
    // Collapse now if page is not at top
    navbarCollapse();
    // Collapse the navbar when page is scrolled
    $(window).scroll(navbarCollapse);
  
    // Hide navbar when modals trigger
    $('.portfolio-modal').on('show.bs.modal', function (e) {
      $('.navbar').addClass('d-none');
    })
    $('.portfolio-modal').on('hidden.bs.modal', function (e) {
      $('.navbar').removeClass('d-none');
    })
  
  }); // End of use strict
  
  // Popup Video Player
  
  $(document).ready(function () {
    // On click start video
    $('#videoBtn').click(function () {
      $("#video").get(0).play();
    });
    // On click close modal and pause video
    $('.videoPitchX').click(function () {
      $('#video').get(0).pause();
      var vid = document.getElementById('video');
      vid.currentTime = 0;
    });
  });
  
  // scroll button bounce
  
  $(function () {
    $('.scrollBtn').click(function () {
      $('html, body').animate({ scrollTop: $('#raiMedia').offset().top }, 'slow');
      return false;
    });
  });
  
  // Popup Video Player RAI
  
  $(document).ready(function () {
    // On click start video
    $('#raivideoBtn').click(function () {
      $("#raivideo").get(0).play();
    });
    // On click close modal and pause video
    $('.raivideoPitchX').click(function () {
      $('#raivideo').get(0).pause();
      var vid = document.getElementById('raivideo');
      vid.currentTime = 0;
    });
  });
  
  $(window).scroll(function () {
    if ($(this).scrollTop() === 0) {
      $('.socialBtn-container').hide();
    } else {
      $('.socialBtn-container').show();
    }
  })
  /*%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%% NEW JS and JQUERY */
  
  $.fn.jQuerySimpleCounter = function (options) {
    var settings = $.extend({
      start: 0,
      end: 100,
      easing: 'swing',
      duration: 400,
      complete: ''
    }, options);
  
    var thisElement = $(this);
  
    $({ count: settings.start }).animate({ count: settings.end }, {
      duration: settings.duration,
      easing: settings.easing,
      step: function () {
        var mathCount = Math.ceil(this.count);
        thisElement.text(mathCount);
      },
      complete: settings.complete
    });
  };
  
  $(window).scroll(function () {
    if ($(this).scrollTop() === 400 || 550) {
      $('#number1').jQuerySimpleCounter({ end: 80, duration: 2000 });
      $('#number2').jQuerySimpleCounter({ end: 1200, duration: 2200 });
      $('#number3').jQuerySimpleCounter({ end: 800, duration: 1500 });
      $('#number4').jQuerySimpleCounter({ end: 100000, duration: 2500 });
    } else {
      event.preventDefault();
    }
  });
  
  
  
  
  
  