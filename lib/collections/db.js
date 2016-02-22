// Mongo Collections

// FORMAT: DB's have singular name

// MANDATE: Each collection requires a brief explanation of what is stored in it

// Strictly listing information
Listing = new Mongo.Collection( 'listing' );

// Listing.allow({
//   remove: function (userId, doc) {
//     return
//   }}
// });

// Notifications from chat and events
Notification = new Mongo.Collection( 'notification' );

// Messages with conversation id linking indiv messages
Message = new Mongo.Collection( 'message' );

// Offers associated with listings
Offer = new Mongo.Collection( 'offer' );

// Feedback messages
Feedback = new Mongo.Collection( 'feedback' );

// Report: Users and Listings
Report = new Mongo.Collection( 'report' );

// IP: User to Ip Mappings
ipNumbers = new Mongo.Collection( 'ipNumbers' );

// Saves
Saves = new Mongo.Collection( 'save' );

// History
searchHistory = new Mongo.Collection( 'history' );


// Listing._ensureIndex( {"listing_title": 1});
