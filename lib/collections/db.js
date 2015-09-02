// Mongo Collections Here
// searchHistory = new Mongo.Collection('searchhistory');
// DB's have singular name

// MANDATE: Each collection requires a brief explanation of what is stored in it

// Strictly listing information
Listing = new Mongo.Collection( 'listing' );

// Notifications from chat and events
Notification = new Mongo.Collection( 'notification' );

// Messages with conversation id linking indiv messages
Message = new Mongo.Collection( 'message' );

// Offers associated with listings
Offer = new Mongo.Collection( 'offer' );

// Feedback messages
Feedback = new Mongo.Collection( 'feedback' );