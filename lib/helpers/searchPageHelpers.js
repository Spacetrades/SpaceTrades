if ( Meteor.isClient) {
	Template.searchpage.helpers({
		getListings: function() {
			return ListingSearch.getData({
				sort: {
					isoScore: -1
				}
			});
		},
		// getFilteredListings: function () {
		// 	return ListingSearch.getData({
		// 		sort: { : -1 }
		// 	});
		// },
		search: function() {
			return ListingSearch.getCurrentQuery();
		}
	});
}