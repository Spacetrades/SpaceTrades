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

//                //
// Meteor Startup //
//                //


Meteor.startup(function () {
  Meteor.call('allDocs', function (count) {
    Session.set('allDocs', count);
  });
  GoogleMaps.load();
});

//            //
// Amazon S3  //
//            //

Slingshot.fileRestrictions("listingImages", {
  allowedFileTypes: ["image/png", "image/jpeg", "image/gif"],
  maxSize: 10 * 1024 * 1024 // 10 MB
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
    'change .listcategory' : function (event) {
        var categories = {
          'Apparel': ['Shirt', 'Hoodie', 'Pants', 'Socks', 'Hat', 'Backpack'],
          'Electronics': ['Phone', 'Tablet', 'Laptop', 'Game', 'Game Console'],
          'Shoes': ['Basketball', 'Boots', 'Running', 'Casual', 'Sandals', 'Training'],
          'Other':['Rock and Roll']
        };

       var choice = event.target.value;
       var catchoice = categories[choice];
       console.log(categories);
          switch(choice) {
            case "Apparel":
              $(".listtype").empty();
              for (i = 0; i < catchoice.length; i++) {
                $("<option>"+catchoice[i]+"</option>").appendTo(".listtype");
              }
            break

            case "Electronics":
              $(".listtype").empty();
                for (i = 0; i < catchoice.length; i++) {
                  $("<option>"+catchoice[i]+"</option>").appendTo(".listtype");
                }
            break

            case "Shoes":
              $(".listtype").empty();
              for (i = 0; i < catchoice.length; i++) {
                $("<option>"+catchoice[i]+"</option>").appendTo(".listtype");
              }
            break

            case "Other":
              $(".listtype").empty();
              for (i = 0; i < catchoice.length; i++) {
                $("<option>"+catchoice[i]+"</option>").appendTo(".listtype");
              }
            break
          }

    },
    'change .imageupload' : function (event, template) {
      // $( '.add' ).click( function () {

        function readURL() {
          console.log("ASDASD");
          if(event.currentTarget.files && event.currentTarget.files[0]) {
            var reader = new FileReader();

            reader.onload = function (e) {
              $(".img1").attr("src", e.target.result);
            }
            reader.readAsDataURL(event.currentTarget.files[0]);
            console.log(reader.readAsDataURL(event.currentTarget.files[0]))
          }

          else {
              console.log("FAIL");
            }
        }
        readURL(this);


        var uploader = new Slingshot.Upload("listingImages");
        console.log(event.currentTarget.files[0]);
        uploader.send( event.currentTarget.files[0], function (error, downloadUrl) {
          if (error) {
            console.error("Error Uploading", uploader.xhr.response);
            alert(error);
          }
          else {
            Meteor.users.update( Meteor.userId(), {$push: { "profile.files": downloadUrl}});
          }
        // });        
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
      return {
        center: new google.maps.LatLng(lat, lng),
        zoom: 13
      };
    }
  }
});

Template.item.onRendered( function () {
  $("#carousel").flexslider({
    animation: "slide",
    controlNav: false,
    animationLoop: false,
    slideshow: false,
    itemWidth: 210,
    itemMargin: 5,
    asNavFor: "#slider"
});
  $("#slider").flexslider({
    animation: "slide",
    controlNav: false,
    animationLoop: false,
    slideshow: false,
    sync: "#carousel"
    });
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