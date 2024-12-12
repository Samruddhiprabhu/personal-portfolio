

$(document).ready(function() {
    
    $("nav a").on("click", function(event) {
      event.preventDefault();
  
      var targetId = $(this).attr("href");
      var targetOffset = $(targetId).offset().top;
  
      $("html, body").animate({
        scrollTop: targetOffset
      }, 800);
    });
  });
  