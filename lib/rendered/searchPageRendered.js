if (Meteor.isClient) {

	Template.searchpage.onRendered(function() {

 keyPress = {
        nav: function(elem) {
            // Works for headerpre, headerpost, headersearch,
            $("." + elem).keypress(function(e) {
                var key = e.which;
                if (key == 13) {
                    var search = $("." + elem).val();
                    var options = {
                        search: search
                    }
                    ListingSearch.search(search);
                    Router.go("/search");
                }
            });
        },
        home: function(elem) {
            // Works for headerpre, headerpost, headersearch,
            $("." + elem).keypress(function(e) {
                var key = e.which;
                if (key == 13) {
                    var search = $("." + elem).val();
                    console.log(search);
                    var options = {
                        search: search
                    }
                    ListingSearch.search(search);
                    $(".homesearchbtn")[0].click();
                }
            });
        },

        // Only allow integers
        int: function(elem) {
            $("." + elem).keypress(function(key) {
                if (key.charCode < 48 || key.charCode > 57) return false;
            });
        },

        string: function() {
            $("." + elem).keypress(function(key) {
                if (!key.charCode < 48 || !key.charCode > 57) return false;
            });
        }

    }

		// Focus in on the search field
		$(".search").focus();
		keyPress.home("search");

		// Get tags from tag building from summation of listing info
		// Limit ten on dropdown
		// Build from all listings
		var tags = ["Air Jordan", "Aeropostale", "Nike", "Air Force One", "nike"];
		$("#search").autocomplete({
			delay: 200,
			source: tags
		});

		// $("#colorpicker").spectrum({
		// 	color: "#000",
		// 	showInput: true,
		// 	className: "full-spectrum",
		// 	showInitial: true,
		// 	showPalette: true,
		// 	showSelectionPalette: true,
		// 	maxSelectionSize: 10,
		// 	preferredFormat: "hex",
		// 	move: function(color) {

		// 	},
		// 	show: function() {

		// 	},
		// 	beforeShow: function() {

		// 	},
		// 	hide: function() {

		// 	},
		// 	change: function() {

		// 	},
		// 	palette: [
		// 		["rgb(0, 0, 0)", "rgb(67, 67, 67)", "rgb(102, 102, 102)",
		// 			"rgb(204, 204, 204)", "rgb(217, 217, 217)", "rgb(255, 255, 255)"
		// 		],
		// 		["rgb(152, 0, 0)", "rgb(255, 0, 0)", "rgb(255, 153, 0)", "rgb(255, 255, 0)", "rgb(0, 255, 0)",
		// 			"rgb(0, 255, 255)", "rgb(74, 134, 232)", "rgb(0, 0, 255)", "rgb(153, 0, 255)", "rgb(255, 0, 255)"
		// 		],
		// 		["rgb(69, 129, 142)", "rgb(60, 120, 216)", "rgb(61, 133, 198)", "rgb(103, 78, 167)", "rgb(166, 77, 121)",
		// 			"rgb(91, 15, 0)", "rgb(102, 0, 0)", "rgb(120, 63, 4)", "rgb(127, 96, 0)", "rgb(39, 78, 19)",
		// 			"rgb(12, 52, 61)", "rgb(28, 69, 135)", "rgb(7, 55, 99)", "rgb(32, 18, 77)", "rgb(76, 17, 48)"
		// 		]
		// 	]
		// });
	});

}
