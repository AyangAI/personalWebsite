(function ($) {
  "use strict";

  // to top Jquery
  $(window).scroll(function () {
    if ($(this).scrollTop() > 40) {
      $("#to-top").fadeIn();
    } else {
      $("#to-top").fadeOut();
    }
  });

  // sticky
  var wind = $(window);
  var sticky = $("#sticky-header");
  wind.on("scroll", function () {
    var scroll = wind.scrollTop();
    if (scroll < 100) {
      sticky.removeClass("sticky");
    } else {
      sticky.addClass("sticky");
    }
  });
  

    //preloader
	$(window).on( 'load', function() {
		$("#pre-load").delay(600).fadeOut(500);
		$(".pre-loader").delay(600).fadeOut(500);

	  	if($(window).width() < 992) {
	    $('.rs-menu').css('height', '0');
	    $('.rs-menu').css('opacity', '0');
	    $('.rs-menu').css('z-index', '-1');
	    $('.rs-menu-toggle').on( 'click', function(){
	       $('.rs-menu').css('opacity', '1');
	       $('.rs-menu').css('z-index', '1');
	   });
	  }
	})
	
	// wow init
    new WOW().init();

  // Mobile Menu
  $(".mobile-menu nav").meanmenu({
    meanScreenWidth: "991",
    meanMenuContainer: ".mobile-menu",
    onePage: false,
  });

  // Progressbar
  $(".wordpress").rProgressbar({
    percentage: 85,
    fillBackgroundColor: "#ff5959",
  });
  $(".webdesign").rProgressbar({
    percentage: 80,
    fillBackgroundColor: "#ff5959",
  });
  $(".development").rProgressbar({
    percentage: 90,
    fillBackgroundColor: "#ff5959",
  });
  $(".uiux").rProgressbar({
    percentage: 77,
    fillBackgroundColor: "#ff5959",
  });

  // CounterUp
  $(".counter").counterUp();

  // Isotop Porfolio
  $(".portfolio-items").isotope({
    itemSelector: ".items",
  });

  $(".portfolio-menu ul li").click(function () {
    $(".portfolio-menu ul li").removeClass("active");
    $(this).addClass("active");

    var selector = $(this).attr("data-filter");
    $(".portfolio-items").isotope({
      filter: selector,
    });
  });





  // Landing Page

  $("a.smooth-menu").on("click", function (event) {
    var $anchor = $(this);
    var headerH = "85";
    $("html, body")
      .stop()
      .animate(
        {
          scrollTop: $($anchor.attr("href")).offset().top - headerH + "px",
        },
        1500,
        "easeInOutExpo"
      );
    event.preventDefault();
  });

  // Cache selectors
  var lastId,
    topMenu = $("#top-menu"),
    topMenuHeight = topMenu.outerHeight() + 15,
    // All list items
    menuItems = topMenu.find("a"),
    // Anchors corresponding to menu items
    scrollItems = menuItems.map(function () {
      var item = $($(this).attr("href"));
      if (item.length) {
        return item;
      }
    });

  // Cache selectors
  var lastId,
    topMenu = $("#top-menu"),
    topMenuHeight = topMenu.outerHeight() + 15,
    // All list items
    menuItems = topMenu.find("a"),
    // Anchors corresponding to menu items
    scrollItems = menuItems.map(function () {
      var item = $($(this).attr("href"));
      if (item.length) {
        return item;
      }
    });

  // Bind click handler to menu items
  // so we can get a fancy scroll animation
  menuItems.click(function (e) {
    var href = $(this).attr("href"),
      offsetTop = href === "#" ? 0 : $(href).offset().top - topMenuHeight + 1;
    $("html, body").stop().animate(
      {
        scrollTop: offsetTop,
      },
      300
    );
    e.preventDefault();
  });

  // Bind to scroll
  $(window).scroll(function () {
    // Get container scroll position
    var fromTop = $(this).scrollTop() + topMenuHeight;

    // Get id of current scroll item
    var cur = scrollItems.map(function () {
      if ($(this).offset().top < fromTop) return this;
    });
    // Get the id of the current element
    cur = cur[cur.length - 1];
    var id = cur && cur.length ? cur[0].id : "";

    if (lastId !== id) {
      lastId = id;
      // Set/remove active class
      menuItems
        .parent()
        .removeClass("active")
        .end()
        .filter("[href='#" + id + "']")
        .parent()
        .addClass("active");
    }
  });

  // Venobox
  $(document).ready(function () {
    $(".venobox").venobox();
  });
  
})(jQuery);
