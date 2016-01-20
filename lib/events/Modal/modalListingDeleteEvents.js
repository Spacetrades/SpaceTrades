if (Meteor.isClient){

Template.ModalListingDelete.events({
	'click #profileDelete ': function() {
		var id = Session.get('listingSelected')._id;

		Listing.remove({
			_id: id
		});
	}
});

}