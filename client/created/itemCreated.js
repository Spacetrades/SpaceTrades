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

     paymentSwitch = {
      cash : Boolean(this.data.payment == "Cash"),
      amazon : Boolean(this.data.payment == "Amazon"),
      paypal : Boolean(this.data.payment == "Paypal"),
      both : Boolean(this.data.payment == "Both")
    }



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