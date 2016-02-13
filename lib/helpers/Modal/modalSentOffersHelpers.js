if (Meteor.isClient) {

	Template.ModalSentOffer.helpers({

		listingOffers: function() {
			return Session.get('offerSelected');
		},
		offerStatus: function(){
    if (this.status === "Pending"){
      return true
    }
    else {
      return false
    }
    return status
		},
		options: function() {
			return {
				height: 650,
				width: 200
			};
		},
		dateFormatted: function(){
			var date = moment(this.date);
			date = date.format("dddd, MMM DD");
			return date;
		},

		creator: function() {
			return Meteor.users.find({
				_id: this.creator_id
			}).fetch()[0].profile.name;
		}
	});

}
