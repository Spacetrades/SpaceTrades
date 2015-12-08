if (Meteor.isClient) {

	Template.home.events({
			'click .homeLoadMore': function() {
				Meteor.subscribe('homeShowMore');
			},
			'click .homesearchbtn': function() {
				var search = $(".search");
				ListingSearch.search(search);
			}
	});

}