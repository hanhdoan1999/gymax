

(function ($) {
  "use strict";

  $("#menu-icon").click(function(){
    console.log("sssssssssssssssss");
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

