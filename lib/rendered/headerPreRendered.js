if (Meteor.isClient) {

	Template.headerpre.onRendered(function() {
			var keyPress = {
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
				}
			}

				keyPress.nav("headerNavSearch");
			});

	}