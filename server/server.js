if (Meteor.isServer) {

// New users receive a verification email
Accounts.config({'sendVerificationEmail': true});

SearchSource.defineSource('listings', function (searchText, options) {
  var options = { sort: {isoScore:  -1}, limit: 20} 

  if (searchText) {
    var regExp = buildRegExp(searchText);
    console.log(regExp);
    var selector = {
      listing_title: regExp,
      username: regExp,
      category: regExp, 
      type: regExp, 
      city: regExp
    };
    console.log("1:" + Listing.find(selector, options).fetch());
    return Listing.find(selector, options).fetch();
  }

  else {
    console.log("2:" + Listing.find({}, options).fetch());
    return Listing.find({}, options).fetch();
  }

  function buildRegExp (searchText) {
    var words = searchText.trim().split(/[ \-\:]+/);
    var exps = _.map(words, function (word) {
      return "(?=.*" + word +  ")";
    });
    var fullExp = exps.join('') + '.+';
    return new RegExp(fullExp, "i");
  }

});

// Accounts.onLogin( function () {
//   //Show new vital information
// })

  Accounts.onCreateUser( function (options, user) {
    if (options.profile) {
      options.profile.picture = "http://graph.facebook.com/" + user.services.facebook.id + "/picture/?type=large";
      user.profile = options.profile;
      options.profile.messenger = "https://www.messenger.com/t/" + user.services.facebook.id;
    // options.profile.city = 
  }
  return user;
});

  if (!ServiceConfiguration.configurations.find()) { 
    ServiceConfiguration.configurations.insert({
      service: 'facebook',
      appId: '403772073107923',
      secret: '4663665d518fef59dbf6643280281a85'
    });

  }

//           //
// Amazon S3 //
//           //

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
    creator_id: options.creator_id,
    listing_title: options.listing_title,
    category: options.category,
    type: options.type,
    brand: options.brand,
    username: Meteor.user().profile.name,
    quantity: options.quantity,
    price: options.price,
    city: options.city,
    state: options.state,
    trade: options.trade,
    size: options.size,
    condition: options.condition,
    color: options.color,
    description: options.description,
    lat: options.lat,
    lng: options.lng,
    img1: options.img1,
    img2: options.img2,
    img3: options.img3
  });
},

addOffer: function (options) {
  Offer.insert({
    offerprice: options.offerprice,
    date: options.date,
    location: options.location
    // listingId: options.listingId
  });
},

// addHistory : function (options) {
//   console.log(Meteor.user());
//   Meteor.user().history.insert({
//     search: options.search
//   });
// },


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

  Meteor.publish('listingUser', function () {
    return Listing.find({ username: "Nathan Chackerian" }, { limit: 100 });
  })
  // Meteor.user().profile.name

  Meteor.publish('listingId', function (id) { 
    return Listing.find({ _id: id });
  });

  Meteor.publish('userId', function (id) {
    // return users.find( { _id: id })
  });



  // Meteor.publish('listingLatLng', function () {
  //   return {
  //     Listing.find( {_})
  //   }
  // })

//  Meteor.publish('imagesShow', function () {
//   return Images.find({}, { limit: 100 });
// });

 Meteor.publish('addListing');
 Meteor.publish('sendEmail');

}