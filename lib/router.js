
// Individual Listing Routing
// Item
// Router.route('/items/:_id', function () {
//   var item = Items.findOne({_id: this.params._id});
//   this.render('ShowItem', {data: item});
// });



//Category
// Item
// Listing Title 
// Price
//   In USD. Money Green. 
// Size  
// City, State
// Location, google maps
// Images (At least 3)
// Description
// Swap (checked or unchecked)

// Listing categories
var categories = ["Shoes", "Electronics", "Apparel", "Other"];



// if (Meteor.isClient) {
//  Meteor.subscribe('listings');

//  Meteor.startup(function () {
//   Meteor.call('listings', function (err, count) {
//     Session.set('listings', count);
//   });
//  });

// Template.listings.helpers({
//   selected_name: function() {
//     var currentPlayer = Session.get("selected_listing"),
//      listing = EasySearch.getIndex('listing').findOne();

//      if (listing) {
//       return listing &&listing.name;
//      }
//   }
// })

// }
// name is the field of the documents to search over
// Listings.initEasySearch('name');
// Session.set('chapp-username','Desired username'); //you could set the user name on user login
// Session.set('chapp-docid','uniqueIdentifier'); //The room identifier. Iron router's before action can be a great spot to set this.

// Profile //
// Router.route('/profile', function () {
// 	this.render('profile');
// });

// Messages
// Router.route('/404', function () {
// 	this.render('404');
// });

Router.configure({
  layoutTemplate: 'LayoutDefault'
});

// Root Route
Router.route('/', function () {
  this.layout('LayoutDefault');
  this.render('home');
});

// NOTE: We will want to switch over to dynamically assigning route with /help/[NAME OF HTML PAGE] 

// Help Center //

// Root
Router.route('/help', function () {
  this.layout('LayoutHelp');
  this.render('Help');
});

// About
Router.route('/help/about', function () {
  this.layout('LayoutHelp');
  this.render('about');
});

// FAQ
Router.route('/help/faq', function () {
  this.layout('LayoutHelp');
  this.render('faq');
});

// Safety 
Router.route('/help/safety', function () {
  this.layout('LayoutHelp');
  this.render('safety');
});

// Privacy and Terms
Router.route('/help/privacy', function () {
  this.layout('LayoutHelp');
  this.render('privacy');
});

// Contact
Router.route('/help/contact', function () {
  this.layout('LayoutHelp');
  this.render('contact');
});

// Listings //

// Electronics
Router.route('/electronics', function () {
  this.layout('LayoutOne');
  this.render('faq');
});

// Shoes
Router.route('/shoes', function () {
  this.layout('LayoutOne');
  this.render('faq');
});

// Apparel
Router.route('/apparel', function () {
  this.layout('LayoutOne');
  this.render('faq');
});

// Other
Router.route('/other', function () {
  this.layout('LayoutOne');
  this.render('faq');
});


if (Meteor.isClient) {


Cards = new Mongo.Collection('cards');
Template.LayoutDefault.helpers({
  cards: function () {
    return Cards.find({}); 
  },
  cards: [
  {listing_title: 'Air Jordan', price: '76', size: '9', location: '232, 312', image: '/help', description: 'some cool stuff', swap: 'y' },
  {listing_title: 'Air Jordan', price: '76', size: '9', location: '232, 312', image: '/help', description: 'some cool stuff', swap: 'y' },
  {listing_title: 'Air Jordan', price: '76', size: '9', location: '232, 312', image: '/help', description: 'some cool stuff', swap: 'y' },
  {listing_title: 'Air Jordan', price: '76', size: '9', location: '232, 312', image: '/help', description: 'some cool stuff', swap: 'y' },
  {listing_title: 'Air Jordan', price: '76', size: '9', location: '232, 312', image: '/help', description: 'some cool stuff', swap: 'y' }
  ]
});
}



