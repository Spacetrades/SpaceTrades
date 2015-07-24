//               //
// Configuration //
//               //


Router.onRun(function() {
  analytics.page();
});

Router.configure({
  layoutTemplate: 'LayoutDefault'
});

Router.route('/', function () {
  this.layout('LayoutHome');
  this.render('home');
});

Router.route('/chat', function(){
  this.layout('LayoutDefault');
  this.render('chat');
});

// Help Center //

//          //
// Feedback //
//          //

// Feedback Initial

Router.route('/feedbackinitial', function () {
  this.layout('LayoutDefault');
  this.render('feedbackinitial');
});

// Feedback Meetup

Router.route('/feedback', function () {
  this.layout('LayoutDefault');
  this.render('buyerfeedback');
});

// Feedback SpaceTrades

Router.route('/feedback/st', function () {
  this.layout('LayoutDefault');
  this.render('FeedbackSpacetrades');
});

//             //
// Help Center //
//             //

Router.map ( function () {


  // Help Home
  this.route('help', {
  path: '/help',
  template: 'Help',
  layoutTemplate: 'LayoutHelp'
  });

  this.route('helpAbout', {
  path: '/help/about',
  template: 'about',
  layoutTemplate: 'LayoutHelp'
  });

  this.route('helpFaq', {
  path: '/help/faq',
  template: 'faq',
  layoutTemplate: 'LayoutHelp'
  });

  this.route('helpSafety', {
  path: '/help/safety',
  template: 'safety',
  layoutTemplate: 'LayoutHelp'
  });

  this.route('helpProhibited', {
  path: '/help/prohibited',
  template: 'Prohibited',
  layoutTemplate: 'LayoutHelp'
  });

  this.route('helpTerms', {
  path: '/help/terms',
  template: 'privacy',
  layoutTemplate: 'LayoutHelp'
  });

  this.route('helpReport', {
  path: '/help/report',
  template: 'reporting',
  layoutTemplate: 'LayoutHelp'
  });

  this.route('helpContact', {
  path: '/help/contact',
  template: 'contact',
  layoutTemplate: 'LayoutHelp'
  });

});

// Router.route('/help', function () {
//   this.layout('LayoutHelp');
//   this.render('Help');
// });

// Help About
// Router.route('/help/about', function () {
//   this.layout('LayoutHelp');
//   this.render('about');
// });

// Help FAQ
// Router.route('/help/faq', function () {
//   this.layout('LayoutHelp');
//   this.render('faq');
// });

// Help Safety 
// Router.route('/help/safety', function () {
//   this.layout('LayoutHelp');
//   this.render('safety');
// });

// Help Privacy and Terms
// Router.route('/help/privacy', function () {
//   this.layout('LayoutHelp');
//   this.render('privacy');
// });

// Help Contact
// Router.route('/help/contact', function () {
//   this.layout('LayoutHelp');
//   this.render('contact');
// });

// Other
// Router.route('/other', function () {
//   this.layout('LayoutOne');
//   this.render('faq');
// });


//      //
// Home //
//      //


Router.route('/register', function () {
  this.layout('LayoutDefault');
  this.render('register');
})

//          //
// Listings //
//          //

// Listing Add

Router.route('/add', function () {
  this.layout('LayoutDefault');
  this.render('addlisting');
});


// Pr

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
      return Meteor.subscribe('listingId', this.params.id );
    },
    data: function () {
      // From the url get the id
      id = this.params._id;
      // return Listing.find({ _id: id }).fetch()[0]._id;
    }
  });
});

// Task - Create /request URL that appends to the listing so an example url would be /listing/asdjAdUd8e/request

Router.map ( function () {
  this.route('request', {
    path: '/listing/:_id/request',
    template: 'list_offer',
    waitOn: function () {
      return Meteor.subscribe('listingId', this.params.id );
    },
    data: function () {
      id = this.params._id;
      return Listing.find({ _id: id });
    }
  });
});

// Router.map ( function () {
//   this.route('reportlisting', {
//     path: '/listing/_id/report',
//     template: 'ReportListing'
//   });

//   this.route('reportuser', {
//     path: '/profile/_id/report',
//     template: 'ReportUser'
//   });
// });

Router.route('report/listing', function () {
  this.layout('LayoutDefault');
  this.render('ReportListing');
});

Router.route('report/profile', function () {
  this.layout('LayoutDefault');
  this.render('ReportUser');
});



// Listing Layout


//                //
// Meetup Request //
//                //

// Meetup Request Review

Router.route('/meetuprequest/review', function () {
  this.layout('LayoutHome');
  this.render('meetuprequestreview');
});

// Profile User Settings

// Router.route('/profile/settings', function () {
//   this.layout('LayoutProfile');
//   this.render('UserProfileSettings');
// });

Router.map( function () {

  // Profile Settings
  this.route('profileSettings', {
    path: '/profile/settings',
    template: 'UserProfileSettings',
    layoutTemplate: 'LayoutProfile'
  });

   // Saved Items
   this.route('saveManager', {
    path:'/profile/saved', 
    template: 'SavedItems',
    layoutTemplate: 'LayoutProfile'
   })

   // Manager
   this.route('profileManager', {
    path: '/profile/manager',
    template: 'Manager',
    layoutTemplate: 'LayoutProfile',
    waitOn: function () {
      return Meteor.subscribe('userIdprof', this.params.id );
      },
      data: function () {
      id = this.params._id;
      return Meteor.users.find({ _id: id }).profile;
    }
  });

  this.route('profile', {
    path: '/profile/:_id',
    template: "UserProfile",
      waitOn: function () {
      return Meteor.subscribe('userIdprof', this.params.id );
      },
      data: function () {
      id = this.params._id;
      return Meteor.users.find({ _id: id }).profile;
    }
  });
});


// Meetup Request

//         //
// Profile //
//         //

// Profile Account Privacy Settings


// Router should be the id of the user and should be accessible to all logged in or not

// Router.route( '/profile/', function () {
//   this.layout('LayoutProfile');
//   this.render('UserProfile');
// });


// Profile User

//        //
// Report //
//        //

// Report Listing

// Router.route( '/report/_id', function () {
//   this.layout('LayoutDefault');
//   this.render('ReportListing');
// });

// Router.route( '/report/user', function () {
//   this.layout('LayoutDefault');
//   this.render('ReportUser');
// });

//         //
// Message //
//         //


// Message Center

// Message User



//      //
// Solo //
//      //


//        //
// Search //
//        //

Router.route('/search', function () {
  this.layout('LayoutSearch');
  this.render('searchpage');
})

// Solo Advertise

Router.route( '/advertise', function () {
  this.layout('LayoutDefault');
  this.render('advertise');
});

// Solo 404 Error

Router.configure({
  notFoundTemplate: 'not_found'
});
