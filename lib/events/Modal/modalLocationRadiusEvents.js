if (Meteor.isClient){

	Template.ModalLocationRadius.events({
		'click .offerRequestBtn': function () {

			var place = Session.get('locationFull');
			var options = {
				lat: Session.get('userlat'),
				lng: Session.get('userlng'),
				city: place[0],
				state: place[1],
				location: place.toString()
			}

			sweetAlert.success("")

			Meteor.call('setLocation', options);
			sAlert.success("Location set");
		}
	});

}