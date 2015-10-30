if (Meteor.isClient) {

	   Template.home.onRendered(function() {

        var tags = ["Air Jordan", "Aeropostale", "Nike", "Air Force One", "nike"];
        $("#search").autocomplete({
            delay: 200,
            source: tags
        });

        GoogleMaps.load({
            v: '3',
            key: 'AIzaSyAi0bRmwNIWv24KjjeiG0DlcU-jFLPJ9FQ',
            libraries: 'geometry,places'
        });

    });
	
}