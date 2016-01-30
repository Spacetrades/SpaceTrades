if (Meteor.isClient) {

	  Template.item.onRendered(function() {
        GoogleMaps.load({
            v: '3',
            key: 'AIzaSyAi0bRmwNIWv24KjjeiG0DlcU-jFLPJ9FQ',
            libraries: 'geometry,places'
        });
        $('[data-toggle="tooltip"]').tooltip();

        //  $('.imgBreak').error( function(){
        //   $(this).attr('src', 'default-item-img.jpg');
        // });
    });


}
