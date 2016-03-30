Meteor.methods({
  /*
   * @summary Send Email
   * @locus Server
   *
   */
  sendEmail: function(to, from, subject, text) {
    this.unblock();

    Email.send({
      to: to,
      from: from,
      subject: subject,
      text: text
    });
  },
  convertImage: function(image) {
    var file = gm(image).setFormat("jpg");
    file = gm(image).quality(20);
    console.log(file);
    return file;
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
      urlKey: options.urlKey,
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
  sendFeedbackToSeller: function(options) {
    Feedback.insert({
      listing_id: options.listingId,
      date: options.date,
      rater: options.rater,
      rater_id: options.rater_Id,
      rated_id: options.rated_Id,
      rated: options.rated,
      friendly_rate: options.friendly_rate,
      efficiency_rate: options.efficiency_rate,
      negotiatiate_rate: options.negotiatiate_rate,
      comment_title: options.comment_title,
      comment: options.comment,
      // Diff
      payment_rate: options.payment_rate
    })
    // mark feedback seller flag
    Listing.update({
      _id: options.listingId
    }, {
      $set: {
        'profile.feedback_filed_seller': "Completed"
      }
    });

    Meteor.users.update({
      _id: options.rated_id
    }, {
      $inc: {
        'profile.reviewscount': 1,
        'profile.amountbought': 1
      },
      $set: {
        'profile.feedback_filed_seller': "Completed"
      },
      $push: {
        'profile.sell_friendlyratingArray': options.friendly_rate,
        'profile.sell_efficiencyratingArray': options.efficiency_rate,
        'profile.sell_negotiationratingArray': options.negotiatiate_rate,
        'profile.sell_describedratingArray': options.payment_rate,
      }
    });

    // Ratings
    var userObject = Meteor.users.findOne({
      _id: options.rated_id
    });

    var friendlyTotal = userObject.profile.sell_friendlyratingArray;
    var efficiencyTotal = userObject.profile.sell_efficiencyratingArray;
    var negotiationTotal = userObject.profile.sell_negotiationratingArray;
    var describedTotal = userObject.profile.sell_describedratingArray;

    // Each Rating Sum
    var sumFriendly = _.sum(friendlyTotal) / friendlyTotal.length;
    sumFriendly = sumFriendly.starRound(0.5);

    var sumEfficiency = _.sum(efficiencyTotal) / efficiencyTotal.length;
    sumEfficiency = sumEfficiency.starRound(0.5);

    var sumNegotiate = _.sum(negotiationTotal) / negotiationTotal.length;
    sumNegotiate = sumNegotiate.starRound(0.5);

    var sumDescribed = _.sum(describedTotal) / describedTotal.length;
    sumDescribed = sumDescribed.starRound(0.5);

    var sumSeller = (sumFriendly + sumEfficiency + sumNegotiate + sumDescribed) / 4;
    sumSeller = sumSeller.starRound(0.5);

    Meteor.users.update({
      _id: options.rated_id
    }, {
      $set: {
        'profile.sell_friendlyrating': sumFriendly,
        'profile.sell_efficiencyrating': sumEfficiency,
        'profile.sell_negotiationrating': sumNegotiate,
        'profile.sell_describedrating': sumDescribed,
        // Totals
        'profile.sell_totalrating': sumSeller,
        'profile.totalrating': sumSeller
      }
    })

  },
  sendFeedbackToBuyer: function(options) {
    Feedback.insert({
      listing_id: options.listingId,
      date: options.date,
      rater: options.rater,
      rater_id: options.rater_Id,
      rated_id: options.rated_Id,
      rated: options.rated,
      friendly_rate: options.friendly_rate,
      efficiency_rate: options.efficiency_rate,
      negotiatiate_rate: options.negotiatiate_rate,
      comment_title: options.comment_title,
      comment: options.comment,
      // Diff
      described_rate: options.described_rate
    })
    // mark feedback buyer flag
    Listing.update({
      _id: options.listingId
    }, {
      $set: {
        feedback_filed_buyer: "Completed"
      }
    })

    Meteor.users.update({
      _id: options.rated_id
    }, {
      $inc: {
        'profile.reviewscount': 1,
        'profile.amountsold': 1
      },
      $push: {
        'profile.buy_friendlyratingArray': options.friendly_rate,
        'profile.buy_efficiencyratingArray': options.efficiency_rate,
        'profile.buy_negotiationratingArray': options.negotiatiate_rate,
        'profile.buy_describedratingArray': options.described_rate,
      }
    })

    // Ratings

    var userObject = Meteor.users.findOne({
      _id: options.rated_id
    });

    var friendlyTotal = userObject.profile.buy_friendlyratingArray;
    var efficiencyTotal = userObject.profile.buy_efficiencyratingArray;
    var negotiationTotal = userObject.profile.buy_negotiationratingArray;
    var describedTotal = userObject.profile.buy_describedratingArray;

    // Each Rating Sum
    var sumFriendly = _.sum(friendlyTotal) / friendlyTotal.length;
    sumFriendly = sumFriendly.starRound(0.5);

    var sumEfficiency = _.sum(efficiencyTotal) / efficiencyTotal.length;
    sumEfficiency = sumEfficiency.starRound(0.5);

    var sumNegotiate = _.sum(negotiationTotal) / negotiationTotal.length;
    sumNegotiate = sumNegotiate.starRound(0.5);

    var sumRated = _.sum(describedTotal) / describedTotal.length;
    sumDescribed = sumDescribed.starRound(0.5);

    var sumSeller = (sumFriendly + sumEfficiency + sumNegotiate + sumDescribed) / 4;
    sumSeller = sumSeller.starRound(0.5);


    Meteor.users.update({
      _id: options.rated_id
    }, {
      $set: {
        'profile.buy_friendlyrating': sumFriendly,
        'profile.buy_efficiencyrating': sumEfficiency,
        'profile.buy_negotiationrating': sumNegotiate,
        'profile.buy_describedrating': sumDescribed,
        // Totals
        'profile.buy_totalrating': sumSeller,
      }
    })

  },
  /*
   * @summary Transfer Listing to history
   * @locus Server
   */
  transferListing: function(options) {

    Listing.update({
      _id: options.listingId
    }, {
      $set: {
        status: "Completed",
        feedback_filed_seller: "Pending",
        feedback_filed_buyer: "Pending"
      }
    });

  },
  expireOffer: function(options) {

    function expireOffer() {

      Offer.remove({
        _id: options._id
      });

    }

    Meteor.setTimeout(expireOffer, options.delayTime);

  },
  /*
   * @summary Remove a listing
   * @locus Server
   */
  removeListing: function(options) {
    if (Meteor.userId() == options.creator_id) {
      Listing.remove({
        _id: options.id
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
  saveLocation: function(options) {

    var locations = options.response.latLng.split(",", 2);
    var lat = locations[0];
    var lng = locations[1];
    Meteor.users.update(options.userId, {
      $set: {
        'profile.city': options.response.city,
        'profile.state': options.response.region,
        'profile.country': options.response.country,
        'profile.ip': options.response.ip,
        'profile.lat': lat,
        'profile.lng': lng,
        'profile.mapRadius': 5,
        'profile.locationString': options.locator
      }
    })
  },

  /*
   * @summary Search Filter
   * @locus Server
   */
  searchFilter: function(options) {

    var selectorCity = {
      city: 'Queens'
    };

    var selectorCategory = {
      category: 'Apparel'
    };

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
      meetupTime: options.meetupTime,
      img: options.img,
      price: options.price,
      offerprice: options.offerprice,
      date: options.date,
      location: options.location,
      listingId: options.listingId,
      lat: options.lat,
      lng: options.lng,
      creator_id: options.creator_id,
      creator_name: options.creator_name,
      seller_name: options.seller_name,
      creator_image: options.creator_image,
      listing_creator_id: options.listing_creator_id,
      payment: options.payment,
      status: options.status
    });

    Meteor.call('pulseNotify', options);
  },
  /*
   * @summary Edit listing
   * @locus Server
   */
  updateListing: function(options) {
    Listing.update({
      _id: options.id
    }, {
      $set: {
        listing_title: options.listing_title,
        brand: options.brand,
        quantity: options.quantity,
        price: options.price,
        payment: options.payment,
        trade: options.trade,
        size: options.size,
        condition: options.condition,
        description: options.description
      }
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
      createdAt: new Date(),
      action: options.action,
      notifyType: options.notifyType,
      listing_title: options.listing_title,
      offer_price: options.offerprice,
      creator_id: options.creator_id,
      creator_name: options.creator_name,
      listingId: options.listingId,
      destination: options.destination,
      link: options.link,
      listing_creator_id: options.listing_creator_id
    });
  },
  /*
   * @summary Send reminder notification
   * @locus Server
   */
  reminderNotify: function(reminderOptions) {

    Meteor.setTimeout(function() {

      Notification.insert({
        createdAt: new Date(),
        action: reminderOptions.action,
        listing_title: reminderOptions.listing_title,
        offer_price: reminderOptions.offerprice,
        creator_id: reminderOptions.creator_id,
        creator_name: reminderOptions.creator_name,
        listingId: reminderOptions.listingId,
        destination: reminderOptions.destination,
        notifyType: "reminder",
        listing_creator_id: reminderOptions.listing_creator_id
      });

    }, reminderOptions.delay);
  },
  /*
   * @summary Send feedback notification and Transfer
   * @locus Server
   */
  feedbackNotify: function(feedbackOptions) {

    Meteor.setTimeout(function() {
      Notification.insert({
        createdAt: new Date(),
        action: feedbackOptions.action,
        listing_title: feedbackOptions.listing_title,
        offer_price: feedbackOptions.offerprice,
        creator_id: feedbackOptions.creator_id,
        creator_name: feedbackOptions.creator_name,
        listingId: feedbackOptions.listingId,
        destination: feedbackOptions.destination,
        notifyType: "feedback",
        listing_creator_id: feedbackOptions.listing_creator_id
      });

      Listing.update({
        _id: feedbackOptions.listingId
      }, {
        $set: {
          status: "Completed"
        }
      });

    }, feedbackOptions.delay);
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
        offer_creator: options.offer_creator,
        offer_creator_name: options.offer_creator_name,
        offerprice: options.offerprice,
        date: options.date,
        location: options.location,
        offerlat: options.lat,
        offerlat: options.lng,
        meetup_time: options.time
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
        'profile.picturesm': options.photo,
        'profile.picturelrg': options.photo,
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
      timestamp: options.timestamp,
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
      city = place.city;
      state = place.region;
    });
    return [city, state];
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
