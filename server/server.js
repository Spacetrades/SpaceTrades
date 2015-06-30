if (Meteor.isServer) {

Listing.initEasySearch(['listing_title'], {
  'limit' : 20,
  'use' : 'mongo-db'
});

// New users receive a verification email
Accounts.config({'sendVerificationEmail': true});

// Accounts.onLogin( function () {
//   //Show new vital information
// })

Accounts.onCreateUser( function (options, user) {
  if (options.profile) {
    options.profile.picture = "http://graph.facebook.com/" + user.services.facebook.id + "/picture/?type=large";
    user.profile = options.profile;
  }
return user;
})

Slingshot.fileRestrictions("listingImages", {
  allowedFileTypes: ["image/png", "image/jpeg", "image/gif"],
  maxSize: 10 * 1024 * 1024 // 10 MB
});

Slingshot.createDirective("listingImages", Slingshot.S3Storage, {
  bucket: "listing-images-spacetrades",
  region: "us-west-2",
  acl: "public-read",

  authorize : function () {
    if (!this.userId) {
      var message = "Please login in order to upload files";
      throw new Meteor.Error("Login is required", message);
    }

    return true;
  },

  key: function (file) {
    // Store file in directory of user name 
    var user = Meteor.userId();
    return user + '/' + file.name;
  }
});

Meteor.methods({
  sendEmail : function (to, from, subject, text) {
    check([to, from, subject, text], [String]);

    // Let other method calls from the same client start running,
    // without waiting for the email sending to complete.
    this.unblock();

    Email.send({
      to: to,
      from: from,
      subject: subject,
      text: text
    });
  },
  /**
 * @summary Add listing with params
 * @locus Anywhere
 * @instancename collection
 * @class
 */
 addListing : function (options) {
  if (! Meteor.userId()) {
    throw new Meteor.Error("Not Authorized")
  }

  Listing.insert({
    createdAt: new Date(),
    listing_title: options.listing_title,
    category: options.category,
    username: Meteor.user().profile.name,
    price: options.price,
    city: options.city,
    state: options.state,
    trade: options.trade,
    size: options.size,
    condition: options.condition,
    color: options.color,
    description: options.description,
    lat: options.lat,
    lng: options.lng
  });
},


/**
 * @summary Returns listing count
 * @locus Anywhere
 * @instancename collection
 * @class
 */
 allDocs : function () {
  return Listing.find().count();
}
});

  Meteor.publish('listingShow', function () {
    return Listing.find({}, { limit: 100 });
  });

  Meteor.publish('listingId', function (id) { 
    return Listing.find({ _id: id });
  });

  // Meteor.publish('listingLatLng', function () {
  //   return {
  //     Listing.find( {_})
  //   }
  // })

 Meteor.publish('imagesShow', function () {
  return Images.find({}, { limit: 100 });
});

 Meteor.publish('addListing');
 Meteor.publish('sendEmail');

}