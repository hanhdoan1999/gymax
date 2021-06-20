

(function ($) {
  "use strict";


  $(window).on("load",function(){
    $(".loader-wrapper").fadeOut("slow");
  });


  //Resize handler to reset the menu visibility 
var resizeTimer;
$(window).on('resize', function (e) {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(function () {
        if ($(window).width() >= 768) {
            $('.toggle').show();
        } else {
            $('.toggle').hide();
        }
    }, 100);
});

  $("#menu-icon").click(function(){
    $(".toggle").slideToggle("slow");
    // $(".navbar").css("height", "100vh");
  });

  var $btns = $('.btn').click(function() {
      if (this.id == 'all') {
        $('#list-product > div').fadeIn(450);
      } else {
        var $el = $('.' + this.id).fadeIn(450);
        $('#list-product > div').not($el).hide();
      }
      $btns.removeClass('active');
      $(this).addClass('active');
    })

  // Client carousel
  $(".client-carousel").owlCarousel({
      center: true,
      autoplay: true,
      dots: true,
      loop: true,
      responsive: {
          0:{
              items:1
          }
      }
  });
  
  

})(jQuery);

