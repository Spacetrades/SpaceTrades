if (Meteor.isClient) {

// Custom Functions

var keyPress = {
	nav: function (elem) {
	// Works for headerpre, headerpost, headersearch, 
	$("." + elem).keypress( function (e) {
		var key = e.which;
		if (key == 13) {
			var search = $("." + elem).val();
			var options = {
				search: search
			}
			ListingSearch.search(search);
			$(".headerNavSearchButton").click();
		}
	});
},
	home: function (elem) {
	// Works for headerpre, headerpost, headersearch, 
	$("." + elem).keypress( function (e) {
		var key = e.which;
		if (key == 13) {
			var search = $("." + elem).val();
			var options = {
				search: search
			}
			ListingSearch.search(search);
			$(".homesearchbtn").click();
		}
	});
	},

	// Only allow integers
	int: function (elem) {
		$("." + elem).keypress(function(key) {
        	if(key.charCode < 48 || key.charCode > 57) return false;
    	});
	},

	string: function () {
		$("." + elem).keypress(function(key) {
        	if( !key.charCode < 48 || !key.charCode > 57) return false;
    	});
	}


}

Template.LayoutHelp.onRendered( function () {

	// Move to the top of the page 
	$('html, body').animate({ scrollTop: 0 }, 'slow');

})

Template.addlisting.onRendered(function () {


	// Bootstrap Tooltips
	$('[data-toggle="tooltip"]').tooltip();

	keyPress.int("listprice");

	$("#colorpicker").spectrum({
		color: "#000",
		showInput: true,
		className: "full-spectrum",
		showInitial: true,
		showPalette: true,
		showSelectionPalette: true,
		maxSelectionSize: 10,
		preferredFormat: "hex",
		move: function (color) {

		},
		show: function () {

		},
		beforeShow: function () {

		},
		hide: function () {

		},
		change: function() {

		},
		palette: [
		["rgb(0, 0, 0)", "rgb(67, 67, 67)", "rgb(102, 102, 102)",
		"rgb(204, 204, 204)", "rgb(217, 217, 217)","rgb(255, 255, 255)"],
		["rgb(152, 0, 0)", "rgb(255, 0, 0)", "rgb(255, 153, 0)", "rgb(255, 255, 0)", "rgb(0, 255, 0)",
		"rgb(0, 255, 255)", "rgb(74, 134, 232)", "rgb(0, 0, 255)", "rgb(153, 0, 255)", "rgb(255, 0, 255)"],
		["rgb(69, 129, 142)", "rgb(60, 120, 216)", "rgb(61, 133, 198)", "rgb(103, 78, 167)", "rgb(166, 77, 121)",
		"rgb(91, 15, 0)", "rgb(102, 0, 0)", "rgb(120, 63, 4)", "rgb(127, 96, 0)", "rgb(39, 78, 19)",
		"rgb(12, 52, 61)", "rgb(28, 69, 135)", "rgb(7, 55, 99)", "rgb(32, 18, 77)", "rgb(76, 17, 48)"]
		]
	});
})

// Render the image carousel
Template.item.onRendered( function () {
	// GoogleMaps.load();
	GoogleMaps.load({v: '3', key: 'AIzaSyAi0bRmwNIWv24KjjeiG0DlcU-jFLPJ9FQ', libraries: 'geometry,places'});

	$("#carousel").flexslider({
		animation: "slide",
		controlNav: false,
		animationLoop: false,
		slideshow: false,
		itemWidth: 210,
		itemMargin: 5,
		asNavFor: "#slider"
	});
	$("#slider").flexslider({
		animation: "slide",
		controlNav: false,
		animationLoop: false,
		slideshow: false,
		sync: "#carousel"
	});
	var input = $("#pac-input")[0];
	var searchBox = new google.maps.places.SearchBox((input));
	var autocomplete = google.maps.places.Autocomplete(input);

	google.maps.event.addListener(autocomplete, 'place_changed', function () {
		var places = searchBox.getPlaces();
		if (places.length == 0) {
			return;
		} 
		for ( var i = 0, marker; marker = markers[i]; i++ ) {
			marker.setMap(null);
		}
		// markers = [];
		// var bounds = new google.maps.LatLngBounds();
		// for (var i = 0, place; place = places[i]; i++) {
		// 	var image = {
		// 		url: place.icon,
		// 		size: new google.maps.Size(71, 71),
		// 		origin: new google.maps.Point(0, 0),
		// 		anchor: new google.maps.Point(17, 34),
		// 		scaledSize: new google.maps.Size(25, 25)
		// 	};

      // Create a marker for each place.
      // var marker = new google.maps.Marker({
      // 	map: map,
      // 	icon: image,
      // 	title: place.name,
      // 	position: place.geometry.location
      // });

      // markers.push(marker);

      // bounds.extend(place.geometry.location);

  });
});

// Works
Template.searchpage.onRendered( function () {
	// Focus in on the search field
	$(".search").focus();
	keyPress.home("search");
});

Template.headerpre.onRendered( function () {
	keyPress.nav("headerNavSearch");
});

Template.headerpost.onRendered( function () {
	keyPress.nav("headerNavSearch");
});

Template.homeheaderpost.onRendered( function () {
	keyPress.home("search");
});

Template.headersearchpre.onRendered( function () {
	keyPress.nav("navsearchf");
});

Template.homeheaderpre.onRendered( function () {
	keyPress.home("search");
});


Template.headersearchpost.onRendered( function () {
	$(".search").keypress( function (e) {
		var key = e.which;
		if (key == 13) {
			var search = $(".search2").val();
			var options = {
				search: search
			}
			ListingSearch.search(search);
		}
	});
});

Template.meetuprequest.onRendered( function () {
	var picker = new Pikaday({ field: $('#datepicker')[0] });

	keyPress.int("listprice");

});

Template.Manager.onRendered( function () {
    $(".nav-tabs a").click(function(){
        $(this).tab('show');
    });
});

}