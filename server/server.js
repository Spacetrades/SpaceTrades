if (Meteor.isServer) {

  process.env.MAIL_URL = "smtp://postmaster@sandboxde84ff01a1c04de28f27e03ecec45a00.mailgun.org:49c4081bc210fdb4d41e2f37a69efcaa@smtp.mailgun.org:587";

  // Get the region

  // Roles.addUsersToRoles('KrNfLAaXw7Tm3NXzg', ['admin']);

  // New users receive a verification email
  // Accounts.config({'sendVerificationEmail': true});

  // Kadira
  Kadira.connect('e7vxrDFKiZPbqkg6h', '81154d3d-0f90-47ce-9142-984584c37c20');

  SearchSource.defineSource('listing', function(searchText, options) {
    var options = {
      sort: {
        isoScore: -1
      },
      limit: 40
    };

    // TASK - Get the selector to use || instead of AND
    // When searching Nike returns listing where either brand is nike or all listing_title is Nike

    if (searchText) {
      var regExp = buildRegExp(searchText);

      var selectorTitle = {
        listing_title: regExp
      }

      var selectorBrand = {
        brand: regExp
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

      console.log(options);

      var query = Listing.find({
        $or: [selectorTitle, selectorBrand, selectorPrice, selectorCategory, selectorUserName, selectorCity, selectorState]
      }).fetch();
      console.log(query);
      return query;
    }

    // TASK - Incorporate Autocomplete

    function buildRegExp(searchText) {
      var words = searchText.trim().split(/[ \-\:]+/);
      var exps = _.map(words, function(word) {
        return "(?=.*" + word + ")";
      });
      var fullExp = exps.join('') + '.+';
      return new RegExp(fullExp, "i");
    }

  });

  Accounts.onCreateUser(function(options, user, err) {

    // console.log(options, user, err);

    if (options.profile) {

      user.profile = options.profile;

      // Images
      var picturelrg = "http://graph.facebook.com/" + user.services.facebook.id + "/picture/?type=large";
      var picturesm = "http://graph.facebook.com/" + user.services.facebook.id + "/picture/?type=small";

      options.profile.picturelrg = picturelrg;
      options.profile.picturesm = picturesm;

      // Votes
      options.profile.upvotes = 0;
      options.profile.neutralvotes = 0;
      options.profile.downvotes = 0;

      // Sold
      options.profile.amountsold = 0;
      options.profile.amountbought = 0;

      // Ratings
      options.profile.sumrating = 0;
      options.profile.satisfactionrating = 0;
      options.profile.describedrating = 0;
      options.profile.efficiencyrating = 0;
      options.profile.friendlyrating = 0;
      options.profile.pointscore = 0;
      options.profile.reviewscount = 0;

      // IP
      // ip = response.ip

      return user;
    }
  });

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

    authorize: function() {
      if (!this.userId) {
        var message = "Please login in order to upload files";
        throw new Meteor.Error("Login is required", message);
      }

      return true;
    },

    key: function(file) {
      // Store file in directory of user name
      var user = Meteor.userId();
      return user + '/' + file.name;
    }
  });
  Meteor.methods({
    /*
     * @summary Send Email
     * @locus Server
     *
     */
    sendEmail: function(to, from, subject, text) {
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
     * @summary Add listing
     * @locus Server
     * @instancename collection
     * @class
     */
    addListing: function(options) {
      if (!Meteor.userId()) {
        throw new Meteor.Error("Not Authorized");
      }

      if (options.trade == "1") {
        options.trade = "Allowed";
      } else {
        options.trade = "Denied";
      }

      Listing.insert({
        createdAt: new Date(),
        // Status
        status: "Pending",
        offerAccepted: "",
        // Id
        creator_id: options.creator_id,
        creator_image: options.creator_image,
        facebook_id: options.facebook_id,
        // Title
        listing_title: options.listing_title,
        // Category
        category: options.category,
        type: options.type,
        brand: options.brand,
        // Information
        username: Meteor.user().profile.name,
        quantity: options.quantity,
        price: options.price,
        trade: options.trade,
        size: options.size,
        condition: options.condition,
        color: options.color,
        payment: options.payment,
        description: options.description,
        // Location
        lat: options.lat,
        lng: options.lng,
        city: options.city,
        state: options.state,
        locationString: options.locationString,
        // Images
        img1: options.img1,
        img2: options.img2,
        img3: options.img3
      });
    },
    /*
     * @summary Remove a listing
     * @locus Server
     */
    removeListing: function(options) {
      if (Meteor.userId() == options.creator_id) {
        Listing.remove({
          _id: options._id
        });
      } else {
        throw new Meteor.Error("Not Authorized");
      }

    },
    /*
     * @summary Save A Listing
     * @locus Server
     */
    actionSave: function(optionsA) {
      Saves.insert({
        user: this.userId,
        listing_title: optionsA.listing_title,
        item_id: optionsA._id,
        price: optionsA.price,
        status: optionsA.status,
        city: optionsA.city,
        state: optionsA.state,
        img1: optionsA.img1,
        username: optionsA.username
      })
    },
    /*
     * @summary Unsave A Listing
     * @locus Server
     */
    actionUnsave: function(optionsA) {
      Saves.remove({
        _id: optionsA._id
      })
    },
    saveLocation: function(response, userId, locator) {

      var locations = response.latLng.split(",", 2);
      var lat = locations[0];
      var lng = locations[1];
      Meteor.users.update(userId, {
        $set: {
          'profile.city': response.city,
          'profile.state': response.region,
          'profile.country': response.country,
          'profile.ip': response.ip,
          'profile.lat': lat,
          'profile.lng': lng,
          'profile.mapRadius': 5,
          'profile.locationString': locator
        }
      })
    },

    /*
     * @summary Search Filter
     * @locus Server
     */
    searchFilter: function(options) {

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

      var query = Listing.find({
        $and: [selectorCategory, selectorCity]
      }).fetch();
      console.log(query);
      return query;
    },
    /*
     * @summary Add offer
     * @locus Server
     */
    addOffer: function(options) {
      Offer.insert({
        createdAt: new Date(),
        listing_title: options.listing_title,
        img: options.img,
        price: options.price,
        offerprice: options.offerprice,
        date: options.date,
        location: options.location,
        delayTime: options.delayTime,
        listingId: options.listingId,
        lat: options.lat,
        lng: options.lng,
        creator_id: options.creator_id,
        creator_name: options.creator_name,
        creator_image: options.creator_image,
        listing_creator_id: options.listing_creator_id,
        payment: options.payment,
        status: options.status
      });
    },
    // For: Report, Add offer, Accept Offer, Badge, new Follower, TB system
    // Destination is set in options previously
    /*
     * @summary Send Notification
     * @locus Server
     */
    pulseNotify: function(options) {
      Notification.insert({
        action: options.action,
        listing_title: options.listing_title,
        offer_price: options.offerprice,
        creator_id: options.creator_id,
        listingId: options.listingId,
        destination: options.destination,
        seller_id: options.seller_id,
        buyer_id: options.buyer_id
      });
    },
    /*
     * @summary Set Location
     * @locus Server
     */
    setLocation: function(options) {
      Meteor.users.update(this.userId, {
        $set: {
          'profile.lat': options.lat,
          'profile.lng': options.lng,
          'profile.neighborhood': options.neighborhood,
          'profile.city': options.city,
          'profile.state': options.state,
          'profile.country': options.country,
          'profile.locationString': options.locationString,
          'profile.mapRadius': options.mapRadius
        }
      });
    },
    /*
     * @summary Accept Offer
     * @locus Server
     */
    acceptOffer: function(options) {
      Offer.update({
        _id: options.offer_id
      }, {
        $set: {
          status: "Accepted"
        }
      });
      Listing.update({
        _id: options.listingId
      }, {
        $set: {
          status: "Accepted",
          offerAccepted: options.offer_id,
          timePeriod: options.time
        }
      });
    },
    /*
     * @summary Decline Offer
     * @locus Server
     */
    declineOffer: function(options) {
      Offer.update({
        _id: options.id
      }, {
        $set: {
          status: "Declined"
        }
      });
    },
    deleteAccount: function(option) {
      Meteor.users.remove({
        _id: option
      });
    },
    /*
     * @summary Cancel Offer
     * @locus Server
     */
    cancelOffer: function(options) {
      Offer.remove({
        _id: options.id
      });
    },
    /*
     * @summary Add Profile Information
     * @locus Server
     */
    addProfileInfo: function(options) {
      Meteor.users.update(this.userId, {
        $set: {
          'profile.picturelrg': options.photo,
          'profile.picturesm': options.photo,
          'profile.about': options.about,
          'profile.email': options.email,
          'profile.link': options.link
        }
      });
    },
    // IDEAL: instead of manually typing in keys, use iteration
    /*
     * @summary Add a report (Listing and User)
     * @locus Server
     */
    addReport: function(options) {
      Report.insert({
        targetUser: options.targetUser,
        riskLevel: options.riskLevel,
        reasonBox: {
          prohibited_box: options.reasonBox.prohibited_box,
          offensive_box: options.reasonBox.offensive_box,
          irrelevant_box: options.reasonBox.irrelevant_box,
          false_box: options.reasonBox.false_box,
          compliance_box: options.reasonBox.compliance_box
        },
        description: options.description
      });
    },
    // TASK - Assign a conversation id that is unique to A-B B-A correspondence
    /*
     * @summary Send a User
     * @locus Server
     */
    sendMessage: function(options) {
      Message.insert({
        message: options.message,
        sender: options.sender,
        receiver: options.receiver,
        conversation: options.conversation,
        createdAt: options.createdAt
      });
    },
    /*
     * @summary Get User Status
     * @locus Server
     */
    userStatus: function() {
      return Meteor.user().status;
    },
    /*
     * @summary Set user city and state
     * @locus Server
     */
    userLocate: function(city, state) {
      Meteor.users.update(this.userId, {
        $set: {
          'profile.city': city,
          'profile.state': state
        }
      });
    },
    /*
     * @summary Locate With IP
     * @locus Server
     */
    ipLocate: function() {
      HTTP.get("http://ipinfo.io", function(error, result) {
        var place = JSON.parse(result.content);
        var city = place.city;
        var state = place.region;
      });
    },
    /*
     * @summary Get color
     * @locus Server
     */
    colorName: function(color) {
      var Namer = Meteor.npmRequire('color-namer');
      var name = Namer(color);
      var color = name.basic[0].name;
      return color;
    },

    /**
     * @summary Returns listing count
     * @locus Anywhere
     * @instancename collection
     * @class
     */
    allDocs: function() {
      return Listing.find().count();
    }
  });

}
