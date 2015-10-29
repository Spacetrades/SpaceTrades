if (Meteor.isClient) {

	 Template.ModalOfferRequest.onRendered(function() {
        // GoogleMaps.load({v: '3', key: 'AIzaSyAi0bRmwNIWv24KjjeiG0DlcU-jFLPJ9FQ', libraries: 'geometry,places'});
        var picker = new Pikaday({
            field: $('#datepicker')[0]
        });

        keyPress.int("listprice");

    });

}