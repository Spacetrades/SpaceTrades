 if (Meteor.isClient) {

 	Template.ModalListingManager.helpers({
 		listingSelected: function() {
 			return Listing.find({_id: Session.get('listingSelected')._id });
 		},
    dateFormatted: function() {
      var date = moment(this.date);
      date = date.format("dddd, MMM DD");
      return date;
    },
 		offers: function(){
 			return Offer.find({ listingId: Session.get('listingSelected')._id}).count();
 		}
 	});

 }
