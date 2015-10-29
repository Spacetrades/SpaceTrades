if (Meteor.isClient) {

  Template.UserProfile.onCreated( function () {

  $('.click-nav > ul').toggleClass('no-js js');
          $('.click-nav .js ul').hide();
          $(document).click(function() {
            if ($('.click-nav .js ul').is(':visible')) {
              $('.click-nav .js ul', this).slideUp();
              $('.clicker').removeClass('active');
            }
          });

  });
}