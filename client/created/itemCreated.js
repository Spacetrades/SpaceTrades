if (Meteor.isClient) {

	Template.item.onCreated(function() {
		GoogleMaps.ready('listingImage', function(map) {
			var areaCircle = new google.maps.Circle({
				map: map.instance,
				center: map.options.center,
				zoom: 5,
				radius: 8093.4,
				strokeColor: "#f8504b",
				strokeOpacity: 0.8,
				strokeWeight: 2,
				fillColor: "#f8504b",
				fillOpacity: 0.4
			});
		});

    // Tracker.autorun(function() {
    //  console.log(offersGlobal);
    // })

    this['offerReact'] = new ReactiveVar(offersGlobal, function(oldValue, newValue) {

      if (oldValue !== newValue){
         // Animate CSS
  $.fn.extend({
    animateCss: function(animationName) {
      var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
      $(this).addClass('animated ' + animationName).one(animationEnd, function() {
        $(this).removeClass('animated ' + animationName);
      });
    }
  });

  Meteor.setTimeout(function() {
    $(".offersReceivedCount").animateCss("bounce");
  }, 500);

      }
      else {
        return true
      }
});

    console.log(this['offerReact'].get() );

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
