if (Meteor.isClient){

	Template.ModalLocationRadius.events({
		'click .offerRequestBtn': function () {

			var place = Session.get('locationFull');
			var options = {
				lat: Session.get('userlat'),
				lng: Session.get('userlng'),
				neighborhood: place[0],
				city: place[1],
				state: place[2],
				country: place[3],
				locationString: place.toString()
			}

			sweetAlert.success("")

			Meteor.call('setLocation', options);
			sAlert.success("Location set");
		}
	});

}