if (Meteor.isClient) {

  Template.home.onRendered(function() {

    $('homeCardImg').error(function() {
      this.attr('src', 'default-item-img.jpg');
    });

    keyPress.home("search");

    var keys = Listing.find({}, {
      fields: {
        listing_title: 1
      }
    }).fetch()

    var tags = [];
    _.map(keys, function(x) {
      tags.push(x.listing_title);
    })

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
