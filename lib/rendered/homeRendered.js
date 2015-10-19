if (Meteor.isClient) {

	   Template.home.onRendered(function() {

        var tags = ["Air Jordan", "Aeropostale", "Nike", "Air Force One", "nike"];
        $("#search").autocomplete({
            delay: 200,
            source: tags
        });

    });
	
}