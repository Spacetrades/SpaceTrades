if (Meteor.isClient) {
  Template.item.onRendered(function() {
    GoogleMaps.load({
      v: '3',
      key: 'AIzaSyAi0bRmwNIWv24KjjeiG0DlcU-jFLPJ9FQ',
      libraries: 'geometry,places'
    });
    $('[data-toggle="tooltip"]').tooltip();

    //  $('.imgBreak').error( function(){
    //   $(this).attr('src', 'default-item-img.jpg');
    // });

    $.fn.extend({
      animateCss: function(animationName) {
        var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
        $(this).addClass('animated ' + animationName).one(animationEnd, function() {
          $(this).removeClass('animated ' + animationName);
        });
      }
    });


    // Tracker.autorun(function(a) {

    //     console.log(a);



    //  Meteor.setTimeout(function() {
    //    $(".offersReceivedCount").animateCss("bounce");
    //  }, 500);



    //    });

    Tracker.autorun(function() {

      var count = Offer.find().count()
      if (count)
          $(".offersReceivedCount").animateCss("pulse");

    });
    $(function() {
      $('.click-nav > ul').toggleClass('no-js js');
      $('.click-nav .js ul').hide();
      $(document).click(function() {
        if ($('.click-nav .js ul').is(':visible')) {
          $('.click-nav .js ul', this).slideUp();
          $('.clicker').removeClass('active');
        }
      });
    });

  });


}
