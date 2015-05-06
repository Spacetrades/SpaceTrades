if (Meteor.isServer) {

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
//   'use' : 'minimongo'
// });

EasySearch.createSearchIndex('listing', {
  'collection': Listing,
  'field': [
  'createdAt',
  'listing_title',
  'category',
  'username',
  'price', 
  'city',
  'state', 
  'size'
  ], // array of fields to be searchable
  'limit' : 20,
  'use' : 'mongo-db',
  'props': {
    'sortBy': 'price'
  },
  'sort': function () {
    if (this.props.sortBy === 'listing_title') {
      return { 'listing_title': 1 };
    }  
  },
  'query': function (searchString) {
    var query = EasySearch.getSearcher(this.use).defaultQuery(this, searchString);
    return query;
  }

});

  console.log(Listing.find().count());
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
      // condition: options.condition,
      // color: options.color,
      description: options.description
      // trade: options.trade 
    });
  },
  allDocs : function () {
    return Listing.find().count();
  }
});

  Meteor.publish('allDocs', function () {
    return Listing.find({}, { limit: 10 });
  });

  Meteor.publish('addListing');
}