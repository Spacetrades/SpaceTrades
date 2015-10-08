if (Meteor.isClient) {

	Template.LayoutDefault.helpers({
		allDocs: function() {
			return Session.get('allDocs');
		}
	});

}