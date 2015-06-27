//               //
// Configuration //
//               //

Router.configure({
  layoutTemplate: 'LayoutDefault',
  notFoundTemplate: 'not_found'
});

Router.route('/', function () {
  this.layout('LayoutHome');
  this.render('home');
});

Router.route('/add', function () {
  this.layout('LayoutDefault');
  this.render('addlisting');
});

Router.route('/request', function () {
  this.layout('LayoutDefault');
  this.render('meetuprequest');
})

Router.route('/feedback', function () {
  this.layout('LayoutDefault');
  this.render('feedbackinitial');
})

Router.map( function () {

  this.route('listing_home', {
    path: '/listing',
    template: 'not_found'
  });

  this.route('listing', {
    path: '/listing/:_id',
    template: 'list_item',
    waitOn: function () {
      return Meteor.subscribe('listingId', this.params.id )
    },
    data: function () {
      id = this.params._id;
      return Listing.find({ _id: id }).fetch()[0]._id;
    }});
});
// NOTE: We will want to switch over to dynamically assigning route with /help/[NAME OF HTML PAGE] 

// Help Center //

//          //
// Feedback //
//          //

// Feedback Initial

Router.route('/feedbackinitial', function () {
  this.layout('LayoutHome');
  this.render('feedbackinitial');
});

// Feedback Meetup

// Feedback SpaceTrades

//        //
// Header //
//        //

// Header Home Pre

// Header Home Post

// Header Pre

// Header Post

// Header Search Pre

// Header Search Post

//             //
// Help Center //
//             //
Router.route('/help', function () {
  this.layout('LayoutHelp');
  this.render('Help');
});

// Help About

// Help Center

// Help Contact

// Help Faq

// Help Nav

// Help Privacy & Terms

// Help Safety

//      //
// Home //
//      //

// Home Card

// Home Main

// Home Register //

//          //
// Listings //
//          //

// Listing Add

// Listing Item

// Listing Layout

//                //
// Meetup Request //
//                //

// Meetup Request Review

// Meetup Request

//         //
// Profile //
//         //

// Profile Account Privacy Settings

// Profile Manager Nav

// Profile Listing Manager

// Profile Listing Status

// Profile MR History

// Profile MR Manager

// Profile MR Status

// Profile Starred Status

// Profile Starred Manager

// Profile User Settings

// Profile User

//        //
// Report //
//        //

// Report Listing

// Report Main

// Report User

// Messaging

// Message page

//      //
// Solo //
//      //

// Solo Advertise

// Solo 404 Error

// Solo Footer

// Solo Head

// Solo Layouts

// Solo Search


// Root

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

// Other
Router.route('/other', function () {
  this.layout('LayoutOne');
  this.render('faq');
});