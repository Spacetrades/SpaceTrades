// Mongo Collections
// These collections make up

// FORMAT: DB's have singular name

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

// History: Search 
searchHistory = new Mongo.Collection( 'history' );

// Report: Users and Listings
Report = new Mongo.Collection( 'report' );