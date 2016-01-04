if (Meteor.isClient){

	Template.ModalLocationRadius.events({
		'click .offerRequestBtn': function () {
			var options = {
				lat: Session.get('userlat'),
				lng: Session.get('userlng'),
				city: 'yeah',
				state: 'yeah'
			}

			Meteor.call('setLocation', options);
		}
	});

}