if (Meteor.isClient) {

	 Template.list_offer.onRendered(function() {

        GoogleMaps.load({
            v: '3',
            key: 'AIzaSyAi0bRmwNIWv24KjjeiG0DlcU-jFLPJ9FQ',
            libraries: 'geometry,places'
        });
    });
	
}