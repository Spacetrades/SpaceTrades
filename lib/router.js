
// Individual Listing Routing
// Item
// Router.route('/items/:_id', function () {
//   var item = Items.findOne({_id: this.params._id});
//   this.render('ShowItem', {data: item});
// });

// Listing categories
var categories = ["Shoes", "Electronics", "Apparel", "Other"];

Listing = new Mongo.Collection('listing');


// Root Route

// if (!Session.get('login') == 'Y') {

//   Router.route('/', function () {
//     this.layout(layoutTemplate);
//     this.render('home');
//   });
// }
// else {
//   Router.route('/', function () {
//     this.layout('LayoutDefaultPost');
//     this.render('home');
//   }
// }


// Router.onBeforeAction( function () {
//   if (Meteor.userId()) {
//   } 

//   else{
//   this.next();
// }
// });

Router.configure({
  layoutTemplate: 'LayoutDefaultPre'
});

Router.route('/', function () {
  this.render('home');
});

Router.route('/add', function () {
  this.layout('LayoutDefaultPre')
  this.render('addlisting');
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

Meteor.subscribe('listing');

  Template.contact.events({
    'click .send' : function (e) {
      var name = $( "#contactname" ).val();
      var message = $( ".message" ).val();
      Meteor.call('sendEmail',
        'contact@spacetrades.com',
        'nchackerian@gmail.com',
        name,
        message);
    }});  

  Template.homeheaderpre.events({
    'click .login' : function (e) {
      Meteor.loginWithFacebook({
        requestPermissions: ['public_profile','email']
      }, function (err) {
        if (err)
          Session.set('errorMessage', err.reason || 'Unknown Eror');
      })
      Session.set('loggedin', true);
    } 
  })

  Template.add_listing.events({
    'click .add' : function () {
      Meteor.call('addListing', username, category, listingTitle, price, city, state, description, trade);

      var category = $( ".category" ).val()
      var listingTitle = $( ".listtitlebox" ).val()
      var price = $( ".listpricebox" ).val()
      var city = $( "." ).val()
      var state = $().val()
      var description = $().val()
      var trade = $().val()
    }
  });

  Template.LayoutDefaultPre.helpers({
    cards: [
    {listing_title: 'Air Jordan', price: '76', size: '9', location: '232, 312', image: '/help', description: 'some cool stuff', swap: 'y' },
    {listing_title: 'Air Jordan', price: '76', size: '9', location: '232, 312', image: '/help', description: 'some cool stuff', swap: 'y' },
    {listing_title: 'Air Jordan', price: '76', size: '9', location: '232, 312', image: '/help', description: 'some cool stuff', swap: 'y' },
    {listing_title: 'Air Jordan', price: '76', size: '9', location: '232, 312', image: '/help', description: 'some cool stuff', swap: 'y' },
    {listing_title: 'Air Jordan', price: '76', size: '9', location: '232, 312', image: '/help', description: 'some cool stuff', swap: 'y' }
    ]
  });
}



