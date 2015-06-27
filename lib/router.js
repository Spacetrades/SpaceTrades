//               //
// Configuration //
//               //

Router.configure({
  layoutTemplate: 'LayoutDefault'
});

Router.route('/', function () {
  this.layout('LayoutHome');
  this.render('home');
});


Router.route('/request', function () {
  this.layout('LayoutDefault');
  this.render('meetuprequest');
});

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

Router.route('/feedback', function () {
  this.layout('LayoutHome');
  this.render('buyerfeedback');
});

// Feedback SpaceTrades

Router.route('/feedback/st', function () {
  this.layout('LayoutHome');
  this.render('FeedbackSpacetrades');
});

//             //
// Help Center //
//             //

Router.route('/help', function () {
  this.layout('LayoutHelp');
  this.render('Help');
});


// Help About
Router.route('/help/about', function () {
  this.layout('LayoutHelp');
  this.render('about');
});

// Help FAQ
Router.route('/help/faq', function () {
  this.layout('LayoutHelp');
  this.render('faq');
});

// Help Safety 
Router.route('/help/safety', function () {
  this.layout('LayoutHelp');
  this.render('safety');
});

// Help Privacy and Terms
Router.route('/help/privacy', function () {
  this.layout('LayoutHelp');
  this.render('privacy');
});

// Help Contact
Router.route('/help/contact', function () {
  this.layout('LayoutHelp');
  this.render('contact');
});


// Other
Router.route('/other', function () {
  this.layout('LayoutOne');
  this.render('faq');
});


//      //
// Home //
//      //

// Home Register

//          //
// Listings //
//          //

// Listing Add

Router.route('/add', function () {
  this.layout('LayoutDefault');
  this.render('addlisting');
});

// Listing Item

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

// Listing Layout


//                //
// Meetup Request //
//                //

// Meetup Request Review

Router.route('/meetuprequest/review', function () {
  this.layout('LayoutHome');
  this.render('meetuprequestreview');
});


// Meetup Request

//         //
// Profile //
//         //

// Profile Account Privacy Settings

Router.route('/profile/privacy', function () {
  this.layout('LayoutHome');
  this.render('lPrivacySettings');
});

// Profile Manager Nav

Router.route('/profile/manager', function () {
  this.layout('LayoutHome');
  this.render('ProfileSubNav');
});

// Profile Listing Manager

Router.route('/profile/listing', function () {
  this.layout('LayoutHome');
  this.render('ListingActive');
});

// Profile Listing Status

Router.route('/profile/listingstatus', function () {
  this.layout('LayoutHome');
  this.render('ListingStatus');
});

// Profile MR History

Router.route('/profile/mr/history', function () {
  this.layout('LayoutHome');
  this.render('MeetupRequestHistory');
});

// Profile MR Manager

  //// If Buyer ////
Router.route('/profile/mr/buy', function () {
  this.layout('LayoutHome');
  this.render('MeetupRequestBuyer');
});

  //// If Seller ////
Router.route('/profile/mr/sell', function () {
  this.layout('LayoutHome');
  this.render('MeetupRequestSeller');
});


// Profile MR Status

Router.route('/profile/mr/status', function () {
  this.layout('LayoutHome');
  this.render('MRStatus');
});

// Profile Starred Status

Router.route('/profile/star/status', function () {
  this.layout('LayoutHome');
  this.render('StarredStatus');
});

// Profile Starred Manager

Router.route('/profile/star', function () {
  this.layout('LayoutHome');
  this.render('StarredItems');
});

// Profile User Settings

Router.route('/profile/user/statu', function () {
  this.layout('LayoutHome');
  this.render('UserProfileSettings');
});

// Profile User

Router.route( '/profile', function () {
  this.layout('LayoutHome');
  this.render('UserProfile');
});

//        //
// Report //
//        //

// Report Listing

Router.route( '/report/listing', function () {
  this.layout('LayoutHome');
  this.render('ReportListing');
});

// Report Main

Router.route( '/report', function () {
  this.layout('LayoutHome');
  this.render('reporting');
});

// Report User

Router.route( '/report/user', function () {
  this.layout('LayoutHome');
  this.render('ReportUser');
});

//         //
// Message //
//         //


// Message Center

Router.route( '/message', function () {
  this.layout('LayoutHome');
  this.render('message');
});

// Message User

Router.route( '/message/nathan', function () {
  this.layout('LayoutHome');
  this.render('MessageUser');
});

//      //
// Solo //
//      //

// Solo Advertise

Router.route( '/advertise', function () {
  this.layout('LayoutHome');
  this.render('advertise');
});

// Solo 404 Error

Router.configure({
  notFoundTemplate: 'not_found'
});
