if (Meteor.isServer) {

  // console.log(meteor_runtime_settings);


// Get the region

// Roles.addUsersToRoles('KrNfLAaXw7Tm3NXzg', ['admin']);

// New users receive a verification email
// Accounts.config({'sendVerificationEmail': true});

// Houston.add_collection('houston_admins');

SearchSource.defineSource('listing', function (searchText, options) {
  var options = { sort: {isoScore:  -1}, limit: 20}; 

// TASK - Get the selector to use || instead of AND 
// When searching Nike returns listing where either brand is nike or all listing_title is Nike

if (searchText) {
  var regExp = buildRegExp(searchText);

  var selectorTitle = {
    listing_title:  regExp
  }

  var selectorBrand = {
    brand:  regExp
  }

  var selectorPrice = {
    price: regExp
  }

  var selectorCategory = {
    category: regExp
  }

  var selectorUserName = {
    username: regExp
  }

  var selectorCity = {
    city: regExp
  }

  var selectorState = {
    state: regExp
  }

  var query = Listing.find({ $or:[ selectorTitle, selectorBrand, selectorPrice, selectorCategory, selectorUserName, selectorCity, selectorState ] }).fetch();
  console.log(query);
  return query;
}

// TASK - Learn the right way to make a RegExp
// TASK - Incorporate Autocomplete

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


  // Accounts.createUser(options, function(err) {
  //   if (!err) {
  //     HTTP.get("http://ipinfo.io", function(err, result) {
  //       var place = JSON.parse(result.content);
  //       var state = place.state;
  //       var city = place.city;
  //       Meteor.call('userLocate', city, state);
  //     });
  //   }
  // });


  Accounts.onCreateUser( function (options, user, err) {

    if (options.profile) {
      options.profile.picturelrg = "http://graph.facebook.com/" + user.services.facebook.id + "/picture/?type=large";
      user.profile = options.profile;
      options.profile.picturesm = "http://graph.facebook.com/" + user.services.facebook.id + "/picture/?type=small";
      options.profile.messenger = "https://www.messenger.com/t/" + user.services.facebook.id;
    }

    HTTP.get("http://ipinfo.io", function (error, result) {
      var place = JSON.parse(result.content);
      var city = place.city;
      var state = place.region;
      console.log(city, state);
      Meteor.call('userLocate', city, state);
    });

    return user;
  });

  // Removes the config b/c dupliation error and re-defines it
  // Facebook API config

  // ServiceConfiguration.configurations.remove({
  //   service: "instagram"
  // });

  // ServiceConfiguration.configurations.insert({
  //   service: "instagram",
  //   clientId: "644acc16830a4783957a6ad207ab6c00",
  //   scope:'basic',
  //   secret: "011a28fce8994008ae2eb1cfa131e3d4"
  // }); 

  // Since Facebook Test app has been created, wrap this in conditional that only executes if on Amazon server and not localhost


  // Production
  // ServiceConfiguration.configurations.remove({
  //   service: "facebook"
  // });

  // ServiceConfiguration.configurations.insert({
  //   service: 'facebook',
  //   appId: Meteor.settings.FacebookId,
  //   secret: Meteor.settings.FacebookSecret
  // });


  // Dev
   ServiceConfiguration.configurations.remove({
    service: "facebook"
  });

  ServiceConfiguration.configurations.insert({
    service: 'facebook',
    appId: '520229551462174',
    secret: 'b9affb9d81291fbe9bebc123d577100a'
  });




// console.log(process.env.MONGO_URL);

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
    facebook_id: options.facebook_id,
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
searchFilter: function (option) {
    // console.log(options.Categories); 

    //   var selectorCat = {
    //   category: options.Categories
    // }

    var selectorCity = {
      city: 'Queens'
    };

    var selectorCategory = {
      category: 'Apparel'
    };

    console.log(selectorCategory);

      var query = Listing.find({ $and:[ selectorCategory, selectorCity ] }).fetch();
      console.log(query);
      return query;
},
addOffer: function (options) {
  Offer.insert({
    listing_title: options.listing_title,
    img: options.img,
    offerprice: options.offerprice,
    date: options.date,
    location: options.location,
    listingId: options.listingId,
    lat: options.lat,
    lng: options.lng,
    creator_id: options.creator_id,
    status: options.status
  });
},
// TASK - Assign a conversation id that is unique to A-B B-A correspondence
sendMessage: function (options) {
  Message.insert({
    message: options.message,
    username: options.username,
    conversation: options.conversation,
    timestamp: Date.now()
  });
},
userStatus: function () {
  return Meteor.user().status;
},
userLocate: function (city, state) {
  Meteor.users.update(this.userId, { $set: {'profile.city': city, 'profile.state': state }}); 
},
ipLocate: function() {

  HTTP.get("http://ipinfo.io", function (error, result) {
    var place = JSON.parse(result.content);
    console.log(place);
    var city = place.city;
    var state = place.region;
    console.log(city, state);
  });
},
colorName: function (color) {
  var Namer = Meteor.npmRequire('color-namer');
  console.log(color);
  var name = Namer(color);
  var color = name.basic[0].name;
  console.log(color);
  return color;
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


}