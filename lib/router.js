Listing = new Mongo.Collection('listing');

Router.configure({
  layoutTemplate: 'LayoutDefault'
});

Router.route('/', function () {
  this.render('home');
});

Router.route('/add', function () {
  this.layout('LayoutDefault')
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
  // Meteor.subscribe('listing');
  Meteor.subscribe('listingShow');

  Meteor.startup(function () {
    Meteor.call('listingShow', function (count) {
      Session.set('listingShow', count);
      console.log(Session.get('listingShow'));
    })
  });

  Template.contact.events({
    'click .send' : function (e) {
      var subject = $( "#contactname" ).val();
      var text = $( ".message" ).val();
      Meteor.call('sendEmail',
        'nchackerian@gmail.com',
        'contact@spacetrades.com',
        subject,
        text);
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
  });


Template.addlisting.events({
  'click .add' : function (options) {

    // listing_title, category, username, price, city, state, size, description
    var options = {
    username: Meteor.user().username,
    category: $( ".listcategory option:selected" ).val(),
    listing_title: $( ".listtitle" ).val(),
    price: $( ".listprice" ).val(),
    city: $( ".listcity" ).val(),
    state: $( ".liststate" ).val(),
    description: $( ".listdescription" ).val(),
    trade: $( ".listtrade" ).val(),
    size: $( ".listsize option:selected" ).val()
  }
    console.log(options);
    Meteor.call('addListing', options);
  }
});

// addListing = function (options) {
//   Meteor.call('addListing', options);
// }

Template.LayoutDefault.helpers({
  cards: [
  {listing_title: 'Air Jordan', price: '76', size: '9', location: '232, 312', image: '/help', description: 'some cool stuff', swap: 'y' },
  {listing_title: 'Air Jordan', price: '76', size: '9', location: '232, 312', image: '/help', description: 'some cool stuff', swap: 'y' },
  {listing_title: 'Air Jordan', price: '76', size: '9', location: '232, 312', image: '/help', description: 'some cool stuff', swap: 'y' },
  {listing_title: 'Air Jordan', price: '76', size: '9', location: '232, 312', image: '/help', description: 'some cool stuff', swap: 'y' },
  {listing_title: 'Air Jordan', price: '76', size: '9', location: '232, 312', image: '/help', description: 'some cool stuff', swap: 'y' }
  ],
  listingShow: function () {
      return Session.get('amount');
      // console.log(Session.get('listingShow'))
    },
});
// Template.registerHelper('listingShow', listingShow())
}



