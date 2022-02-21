   $(function() {
    var mini = parseInt($('#hidden_minimum_price').val());
    var maxi = parseInt($('#hidden_maximum_price').val());
  $( ".slider-range" ).slider({
    range: true,
    min: mini, 
    max: maxi,
    values: [mini, maxi],
    slide: function( event, ui ) {
    $( ".amount" ).val( "Rs " + ui.values[ 0 ] + " - Rs " + ui.values[ 1 ] );
    $('#hidden_minimum_price').val(ui.values[ 0 ]);
    $('#hidden_maximum_price').val(ui.values[ 1 ]);
    }
    });
    $( ".amount" ).val( "Rs " + $( ".slider-range" ).slider( "values", 0 ) +
      " - Rs " + $( ".slider-range" ).slider( "values", 1 ) );
    });
   
 
$(document).ready(function() {
   var offset = 200;
    var duration = 500;
    $(window).scroll(function() {
      if ($(this).scrollTop() > offset) {
        $('.back-to-top').fadeIn(700);
      } else {
        $('.back-to-top').fadeOut(700);
      }
    });
 
    $('.back-to-top').on('click',function(event) {
      event.preventDefault();
      $('html, body').animate({
        scrollTop: 0
      }, 600);
     })

});
 
  

$(document).ready(function() {
   new WOW().init();
}); 


 
  $(document).ready(function () {
  if ((navigator.userAgent.indexOf("Opera") || navigator.userAgent.indexOf('OPR')) != -1) {
      $('body').addClass('opera');
  } else if (navigator.userAgent.indexOf("Chrome") != -1) {
      $('body').addClass('chrome');
  } else if (navigator.userAgent.indexOf("Safari") != -1) {
      $('body').addClass('safari');
  } else if (navigator.userAgent.indexOf("Firefox") != -1) {
      $('body').addClass('firefox');
  } else if ((navigator.userAgent.indexOf("MSIE") != -1) || (!!document.documentMode == true)) //IF IE > 10
  {
      $('body').addClass('IE');
  } else {
      $('body').addClass('unknown');
  }
});

  
