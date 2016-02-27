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

		// var tags = ["Air Jordan", "Aeropostale", "Nike", "Air Force One", "nike"];
		// $("#search").autocomplete({
		// 	delay: 200,
		// 	source: tags
		// });

	});

}
