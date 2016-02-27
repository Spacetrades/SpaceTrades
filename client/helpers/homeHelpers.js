if (Meteor.isClient) {

	Template.home.helpers({
		listing: function() {
			return Listing.find({ status: "Pending"});
		},
		defaultCheck: function(){
			var results = Listing.find({ status: "Pending"});
			return Boolean(results.count());
		},
    test: function(){
      return Template.instance().selfId.get();
    }

	});

}
