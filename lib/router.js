//               //
// Configuration //
//               //

Router.onRun(function() {
  analytics.page();
});

Router.configure({
  layoutTemplate: 'LayoutDefault',
  loadingTemplate: 'loadingTemplate'
});

// Router.plugin('seo', {
//   only: ['someRoute'],
//   except: ['someOtherRoute'],

//   defaults: { /* Default SEO fields. */ }
// });


Router.map( function () {

this.route('home', {
  path: '/',
  template: 'home',
  layoutTemplate: 'LayoutHome',
  loadingTemplate: 'loadingTemplate',
  waitOn: function () {
   return Meteor.subscribe("listingShow", true);
  }
});

});

Router.map ( function () {

  this.route('chat_home', {
    path: '/chat',
    template: 'Messages',  
    layoutTemplate: 'LayoutMessages'
  });

  this.route('/chat_id', {
    path: '/chat/_:id',
    template: 'Messages',
    layoutTemplate: 'LayoutMessages',
    waitOn: function () {
      // Find messages with conversation id
      return Messages.find( { conversation: id });
    }

  });
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

Router.map( function () {
  this.route('add', {
    path: '/add',
    template: 'addlisting',
    waitOn: function () {
      Meteor.subscribe('addListing');
      Meteor.subscribe('colorName');
    }
  });
})

// Router.route('/add', function () {
//   this.layout('LayoutDefault');
//   this.render('addlisting');
// });


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
    loadingTemplate: 'loadingTemplate',
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
    loadingTemplate: 'loadingTemplate',
    waitOn: function () {
      return Meteor.subscribe('listingId', this.params.id );
    },
    data: function () {
      id = this.params._id;
      return Listing.find({ _id: id });
    }
  });
});

// TASK - Route differently depending on whether buyer or seller
// TASK - Run offerId with the users information as param. Do not query the entire database
Router.map ( function () {
  this.route('requestBuyer', {
    path: '/buyoffer/:_id',
    template: 'profileViewSentOffer',
    loadingTemplate: 'loadingTemplate',
    waitOn: function () {
      return Meteor.subscribe('offerId', this.params.id );
    },
    data: function () {
      id = this.params._id;
      return Offer.find({ _id: id });
    }
  });
});

Router.map ( function () {
  this.route('requestSeller', {
    path: '/selloffer/:_id',
    template: 'profileViewReceivedOffer',
    loadingTemplate: 'loadingTemplate',
    waitOn: function () {
      return Meteor.subscribe('offerId', this.params.id );
    },
    data: function () {
      id = this.params._id;
      return Offer.find({ _id: id });
    }
  });
});

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
   });

   // Manager
  this.route('profileManagerOffers', {
    path: '/profile/offers',
    template: 'profileManagerOffers',
    layoutTemplate: 'LayoutProfile'
  });

  this.route('profileManagerListings', {
    path: '/profile/listings',
    template: 'profileManagerListings',
    layoutTemplate: 'LayoutProfile'
  });

  this.route('profileHistory', {
    path: '/profile/history',
    template: 'ProfileHistory',
    layoutTemplate: 'LayoutProfile'
  });

  this.route('profileUser', {
    path: '/profile/:_id',
    template: "UserProfile",
    loadingTemplate: 'loadingTemplate',
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

// Profile User Rating //

Router.route( '/userrating', function () {
  this.layout('LayoutDefault');
  this.render('ProfileUserRating');
});

//        //
// Report //
//        //

// Report Listing


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

// TASK - IDEAL - Store query in url so that refresh yields same results

Router.route('/search', function () {
  this.layout('LayoutSearch');
  this.render('searchpage');
})

// Solo All Notifications

Router.route( '/notifications', function () {
  this.layout('LayoutDefault');
  this.render('allNotifications');
});

// Solo Advertise

Router.route( '/advertise', function () {
  this.layout('LayoutDefault');
  this.render('advertise');
});

// Solo 404 Error

Router.configure({
  notFoundTemplate: 'not_found'
});
