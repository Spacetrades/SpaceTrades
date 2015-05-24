// Listing.initEasySearch([
// 'createdAt',
// 'listing_title',
// 'category',
// 'username',
// 'price', 
// 'city',
// 'state', 
// 'size'
// ], {
//   'limit' : 20,
//   'use' : 'mongo-db'
// });


if (Meteor.isClient) {

// CHAPP  
// Meteor.subscribe('allDocs');
// Meteor.subscribe("sendEmail");
// Session.set('chapp-username','chackerian'); 
// Session.set('chapp-docid','4444');

Meteor.subscribe('addListing');
Meteor.subscribe('listingShow');
Meteor.subscribe('listingId');
Meteor.subscribe('imagesShow');

Meteor.startup(function () {
  Meteor.call('allDocs', function (count) {
    Session.set('allDocs', count);
  });
  GoogleMaps.load();
});

//        //
// Events //
//        //

Template.contact.events({
  'click .send' : function () {
    var subject = $( "#contactname" ).val();
    var text = $( ".message" ).val();
    sAlert.success('Message sent successfully');
    $( ".contactform" ).hide();
    $( ".sent" ).css("display", "block");

    Meteor.call('sendEmail',
      'nchackerian@gmail.com',
      'contact@spacetrades.com',
      subject,
      text);
  }

});


Template.homeheaderpre.events({
  'click .login' : function (e) {
    Meteor.loginWithFacebook({
      requestPermissions: ['public_profile','email']
    }, function (err) {
      if (err)
        Session.set('errorMessage', err.reason || 'Unknown Eror');
    })
    Session.set('loggedin', true);
  } 
});


Template.addlisting.events({
  'click .add' : function (options) {
      // listing_title category username price city state trade size condition color description
      var options = {
        listing_title: $( ".listtitle" ).val(),
        category: $( ".listcategory option:selected" ).val(),
        type: $( ".listcategory option:selected" ).val(),
        username: Meteor.user().profile.name,
        quantity: $( ".listquantity option:selected" ).val(),
        price: $( ".listprice" ).val(),
        city: $( ".listcity" ).val(),
        state: $( ".liststate" ).val(),
        trade: $( ".listtrade" ).val(),
        size: $( ".listsize option:selected" ).val(),
        condition: $( ".condition option:selected" ).val(),
        color: $( ".color" ).val(),
        description: $( ".listdescription" ).val(),
        lat: $( ".lat" ).text(),
        lng: $( ".lng" ).text()
      }

      console.log(options);
      Meteor.call('addListing', options);
      $( ".addlistdiv" ).hide();
      $( ".review" ).append("<h1> Successfully Listed</h1>");
  },
  'change .imageupload' : function (event, template) {
    $( '.add' ).click( function () {
      FS.Utility.eachFile(event, function(file) {
        Images.insert(file, function (err, fileObj) {
        });
      });
    })
  }
});


//         //
// HELPERS //
//         //       


Template.addlisting.helpers({
  lat: function () {
    return Geolocation.latLng().lat;
  },
  lng: function () {
    return Geolocation.latLng().lng;
  }
});

Template.item.helpers({
  exampleMapOptions: function () {
    // Make sure the maps API has loaded
    if (GoogleMaps.loaded()) {
      // Need to get the right latitude and longitude from id 
      var lat = Listing.find({ _id: id }).fetch()[0].lat;
      var lng = Listing.find({ _id: id }).fetch()[0].lng;
      console.log(lat, lng);
      return {
        center: new google.maps.LatLng(lat, lng),
        zoom: 13
      };
    }
  }
});

Template.item.onCreated( function () {
  GoogleMaps.ready('listingImage', function (map) {
    var areaCircle = new google.maps.Circle({
      map: map.instance,
      center: map.options.center,
      zoom: 10,
      radius:1000,
      strokeColor:"#f8504b",
      strokeOpacity:0.8,
      strokeWeight:2,
      fillColor:"#f8504b",
      fillOpacity:0.4
    });
  });
});

Template.card.helpers({
  imagesShow: function () {
    return Images.find();
  }
});

Template.home.helpers({
  listing: function () {
    return Listing.find();
  }});

Template.list_item.helpers({ 
  listing: function () {
    // id = this.params._id
    return Listing.find({ _id: id });
    // return Listing.find();
  }});

Template.LayoutDefault.helpers({
  allDocs: function () {
    return Session.get('allDocs');
  }
});

Template.homeheaderpost.helpers({
  username: function () {
    return Meteor.user().profile.name;
  }});

Template.headerpost.helpers({
  username: function () {
    return Meteor.user().profile.name;
  }});
}