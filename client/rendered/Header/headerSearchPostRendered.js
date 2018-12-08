if (Meteor.isClient) {

	Template.headersearchpost.onRendered(function() {
		// 13 is the enter press
		$(".search").keypress(function(e) {
			var key = e.which;
			if (key == 13) {
				// TASK - Check to see if filter has been applied
				var search = $(".search2").val();
				var options = {
					search: search
				}
				ListingSearch.search(search);
			}
		});

     keyPress.nav("headerNavSearch");


		$.getScript("https://cdn.jsdelivr.net/gh/ngzhian/multi-step-modal/multi-step-modal.js"),
		function() {
			sendEvent = function() {
				$('#offerRequestModal').trigger('next.m.2');
			}
		}

	});
}
