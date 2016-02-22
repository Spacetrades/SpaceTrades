if (Meteor.isClient) {

  Template.ModalLocationRadius.onRendered(function() {

    GoogleMaps.ready();

        GoogleMaps.load({
            v: '3',
            key: 'AIzaSyAi0bRmwNIWv24KjjeiG0DlcU-jFLPJ9FQ',
            libraries: 'geometry,places'
        });
        $('[data-toggle="tooltip"]').tooltip();

    });

}
