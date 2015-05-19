if (Meteor.isServer) {

// jsdoc = Npm.require('meteor-jsdoc');
Listing.initEasySearch(['listing_title'], {
    'limit' : 20,
    'use' : 'mongo-db'
});

// EasySearch.createSearchIndex('listing', {
//   'collection': Listing,
//   'field': [ // array of fields to be searchable
//   'createdAt',
//   'listing_title',
//   'category',
//   'username',
//   'price', 
//   'city',
//   'state', 
//   'size'
//   ], {
//   'limit' : 10,
//   'use' : 'mongo-db'
//     },
//   'query': function (searchString) {
//     var query = EasySearch.getSearcher(this.use).defaultQuery(this, searchString);
//     console.log(query);
//     return query;
//   }
// });

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
      size: options.size,
      condition: options.condition,
      color: options.color,
      description: options.description
      // trade: options.trade
      // image name and path 
      // Challenge is for images collection and listing collection to have associated documents so that correct images are grouped with correct listing
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

   Meteor.publish('imagesShow', function () {
    return Images.find({}, { limit: 100 });
  });

  Meteor.publish('addListing');
  Meteor.publish('sendEmail');
}