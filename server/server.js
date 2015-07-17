if (Meteor.isServer) {

  // console.log(meteor_runtime_settings);


// Get the region
// var info = HTTP.get("http://ipinfo.io", function (error, result) {
//   console.log(result.content);
// });


// console.log("1" + Meteor.users.find({ _id: 'A8K9spjn6dmEKGePs' }).fetch()[0].profile.name);
// console.log("2" + Meteor.users.find({ _id: 'K5JsyhN7dP8ZaCwXv' }).fetch()[0].profile.name);


// New users receive a verification email
Accounts.config({'sendVerificationEmail': true});

SearchSource.defineSource('listing', function (searchText, options) {
  var options = { sort: {isoScore:  -1}, limit: 20}; 


// TASK - Get the selector to use || instead of AND 
// When searching Nike returns listing where either brand is nike or all listing_title is Nike

  if (searchText) {
    var regExp = buildRegExp(searchText);
    // var selector = {
    //   listing_title: regExp,
    //   brand: regExp
    //   // username: regExp,
    //   // category: regExp, 
    //   // type: regExp, 
    //   // city: regExp
    // };

    var selector1 = {
      listing_title:  regExp
    }
    var selector2 = {
      brand:  regExp
    }
    console.log(selector1);
    console.log(selector2);
    var query = Listing.find({ $or:[ selector1, selector2 ] }).fetch();
    console.log(query);
    return query;
    // Listing.find({ $or:[ {listing_title: 'Running Shoes'}, {brand: 'Running Shoes'} ] }).fetch()
    // Listing.find({ $or:[ { listing_title: /(?=.*Runn).+/i},{ brand: /(?=.*Runn).+/i } ] }).fetch();
  }

  // else {
  //   console.log("2:" + Listing.find({}, options).fetch());
  //   return Listing.find({}, options).fetch();
  // }

// TASK - Learn the right way to make a RegExp

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
      options.profile.picturelrg = "http://graph.facebook.com/" + user.services.facebook.id + "/picture/?type=large";
      user.profile = options.profile;
      options.profile.picturesm = "http://graph.facebook.com/" + user.services.facebook.id + "/picture/?type=small";
      options.profile.messenger = "https://www.messenger.com/t/" + user.services.facebook.id;
    // options.profile.city = 
  }
  return user;
});

  // Removes the config b/c dupliation error and re-defines it 

    ServiceConfiguration.configurations.remove({
      service: "facebook"
    });

    ServiceConfiguration.configurations.insert({
      service: 'facebook',
      appId: '403772073107923',
      secret: '4663665d518fef59dbf6643280281a85'
    });
    // if (!ServiceConfiguration.configurations.find()) { 
    //     ServiceConfiguration.configurations.insert({
    //     service: 'facebook',
    //     appId: '403772073107923',
    //     secret: '4663665d518fef59dbf6643280281a85'
    // });

    // }


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

  if (options.trade == "1") {
    options.trade = "Trades Allowed";
  }
  else {
    options.trade = "Trades Denied";
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
    location: options.location,
    listingId: options.listingId
  });
},

userStatus: function () {
  return Meteor.user().status;
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

  // DB Shows

  Meteor.publish('listingShow', function () {
    return Listing.find({}, { limit: 100 });
  });

  Meteor.publish('offerShow', function () {
    return Offer.find({}, { limit: 100 });
  });

  // Meteor.publish('offerNum', function (id) {
  //   return Offer.find({ listingId: id }).count();
  // });

  Meteor.publish('userShow', function () {
    return Meteor.users.find({}, { limit: 100 });
  });

  Meteor.publish('listingUser', function () {
    return Listing.find({ username: "Nathan Chackerian" }, { limit: 100 });
  });

  Meteor.publish('listingId', function (id) { 
    return Listing.find({ _id: id });
  });

  Meteor.publish('userIdprof', function (id) {
    return Meteor.users.find( { _id: id } );
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
 Meteor.publish('addOffer');
 Meteor.publish('userStatus');

}