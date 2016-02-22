if (Meteor.isClient){
	Template.ModalReportListing.helpers({
		listing: function(){
			return Listing.find({ _id: id });
		}
	});
}