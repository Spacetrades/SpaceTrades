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
// Meteor.subscribe('allDocs');
// Meteor.subscribe("sendEmail");
// Session.set('chapp-username','chackerian'); 
// Session.set('chapp-docid','4444');
Meteor.subscribe('addListing');
Meteor.subscribe('listingShow');

Meteor.startup(function () {
  Meteor.call('allDocs', function (count) {
    Session.set('allDocs', count);
  });
});

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


Template.home.helpers({
  listing: function () {
    return Listing.find();
  },
  allDocs: function () {
    return Session.get('allDocs');
  },
  images: function () {
    return Images.find(); // Where Images is an FS.Collection instance
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

    // listing_title, category, username, price, city, state, size, description
    var options = {
      username: Meteor.user().username,
      category: $( ".listcategory option:selected" ).val(),
    // Brand
    // Color
    listing_title: $( ".listtitle" ).val(),
    price: $( ".listprice" ).val(),
    city: $( ".listcity" ).val(),
    state: $( ".liststate" ).val(),
    description: $( ".listdescription" ).val(),
    trade: $( ".listtrade" ).val(),
    size: $( ".listsize option:selected" ).val()
    // Condition
    // Color
  }
  console.log(options);
  Meteor.call('addListing', options);
  $( ".addlistdiv" ).hide();
  $( ".review" ).append("<h1> Successfully Listed</h1>");

},
'change .imageupload' : function (event, template) {
    FS.Utility.eachFile(event, function(file) {
      Images.insert(file, function (err, fileObj) {
      });
    });
  }
});


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