//               //
// Configuration //
//               //

Router.onRun(function() {
  analytics.page();
});

Router.configure({
  layoutTemplate: 'LayoutDefault',
  loadingTemplate: 'loadingTemplate',
  notFoundTemplate: 'not_found'
});

//          //
//   SEO    //
//          //

// Router.plugin('seo', {
//   only: ['someRoute'],
//   except: ['someOtherRoute'],

//   defaults: { /* Default SEO fields. */ }
// });


// Home
Router.map(function() {

  this.route('home', {
    path: '/',
    template: 'home',
    layoutTemplate: 'LayoutHome',
    loadingTemplate: 'loadingTemplate',
    onBeforeAction: function() {
      document.title = "SpaceTrades";
      Meteor.subscribe("listingShow", true);

      //         if (!Meteor.userId()){
      //            lat = Geolocation.latLng().lat;
      // lng = Geolocation.latLng().lng;
      //         }

      //  HTTP.get("http://ipinfo.io", function(error, result) {
      //   var place = JSON.parse(result.content);
      //   city = place.city;
      //   state = place.region;
      //   response = city + state;

      //   Session.set('locate', response);

      // });

      this.next();
    }
  });

});


// Chat
Router.map(function() {

  this.route('chat_home', {
    path: '/chat',
    template: 'Messages',
    layoutTemplate: 'LayoutMessages',
    onBeforeAction: function() {
      this.next();
      if (!Meteor.userId()) {
        this.render("unauthorized");
      }
    },
    waitOn: function() {
      return Meteor.subscribe("messageShow");
    }

  });

  this.route('/chat_id', {
    path: '/chat/:_id',
    template: 'Messages',
    layoutTemplate: 'LayoutMessages',
    onBeforeAction: function() {
      this.next();
      if (!Meteor.userId()) {
        this.render("unauthorized");
      }
    },
    data: function() {
      id = Session.get("recipientId");
      id_sell = this.params._id;
    }
  });

});


// Map Page

Router.route('/map', function() {
  this.layout('LayoutDefault');
  this.render('mapPage');
});


// Feedback Meetup

Router.route('/feedback', function() {
  this.layout('LayoutDefault');
  this.render('buyerfeedback');
});


//
// Help Center
//

Router.map(function() {


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
    layoutTemplate: 'LayoutHelp',
    onBeforeAction: function() {
      if (!Meteor.userId()) {
        this.render("contactPre");
      } else {
        this.render("contact");
      }
    }
  });

});



//      //
// Home //
//      //

Router.route('/register', function() {
  this.layout('LayoutDefault');
  this.render('register');
})


Router.map(function() {

  this.route('add', {
    path:'/add',
    template: 'ActionAddListing',
    layoutTemplate: 'LayoutDefault'
  })

});

Router.map(function() {

  this.route('listing', {
    path: '/listing/:_id',
    template: 'item',
    layoutTemplate: 'LayoutListing',
    loadingTemplate: 'loadingTemplate',
    waitOn: function() {
      return Meteor.subscribe('listingId', this.params.id);
    },
    data: function() {
      // From the url get the id
      id = this.params._id;
      offersGlobal = Offer.find({
        listingId: id
      }).count();
    }
  });

});

Router.map(function() {

  this.route('offer', {
    path:'/listing/:_id/offer',
    template: 'ActionOfferRequest',
    layoutTemplate: 'LayoutDefault',
    waitOn: function() {
      return Meteor.subscribe('listingId', this.params.id);
    },
    data: function() {
      // From the url get the id
      id = this.params._id;
      offersGlobal = Offer.find({
        listingId: id
      }).count();
    }
  });

});


Router.map(function() {
  this.route('edit', {
    path: '/listing/:_id/edit',
    template: 'EditListing',
    layoutTemplate: 'LayoutListing',
    loadingTemplate: 'loadingTemplate',
    waitOn: function() {
      return Meteor.subscribe('listingId', this.params.id);
    },
    data: function() {
      id = this.params._id;
      category = Listing.find({
        _id: id
      }).fetch()[0].category;

      return Listing.find({
        _id: id
      });
    }
  });
});


// Report: Listing and User

Router.map(function() {

  this.route('ReportUser', {
    path: 'profile/:_id/report-user',
    template: 'ReportUser',
    layoutTemplate: 'layoutDefault',
    data: function() {
      id = this.params._id;
    }

  });

});


// Listing Layout


//                //
// Meetup Request //
//                //

// Meetup Request Review


Router.map(function() {

  // Active Meetups
  this.route('profileActive', {
    path: '/profile/active',
    template: 'ProfileActive',
    layoutTemplate: 'LayoutProfile',
    waitOn: function() {
      Meteor.subscribe('listingShowExtended');
    },
    onBeforeAction: function() {

      $(".helpitem").removeClass("helpNavSelected");
      $(".helpitem").eq(0).addClass("helpNavSelected");
      this.next();

      if (!Meteor.userId()) {
        this.render("unauthorized");
      }
    }
  });


  // Manager
  this.route('profileManagerOffers', {
    path: '/profile/offers',
    template: 'profileManagerOffers',
    layoutTemplate: 'LayoutProfile',
    waitOn: function() {
      Meteor.subscribe('cancelOffer');
      return
    },
    onBeforeAction: function() {

      $(".helpitem").removeClass("helpNavSelected");
      $(".helpitem").eq(1).addClass("helpNavSelected");
      this.next();

      if (!Meteor.userId()) {
        this.render("unauthorized");
      }
    }
  });

  // Your Listings
  this.route('profileManagerListings', {
    path: '/profile/listings',
    template: 'profileManagerListings',
    layoutTemplate: 'LayoutProfile',
    waitOn: function() {
      Meteor.subscribe('acceptOffer');
      Meteor.subscribe('declineOffer');
      return
    },
    onBeforeAction: function() {

      $(".helpitem").removeClass("helpNavSelected");
      $(".helpitem").eq(2).addClass("helpNavSelected");
      this.next();

      if (!Meteor.userId()) {
        this.render("unauthorized");
      }
    }
  });

// Individual Offer
   this.route('profileListingsIndividual', {
    path: '/profile/listings/offer/:_id',
    template: 'ModalReceivedOffersFull',
    layoutTemplate: 'LayoutProfile',
    waitOn: function() {
      Meteor.subscribe('listingShowExtended');
    },
    onBeforeAction: function() {

      this.next();
      if (!Meteor.userId()) {
        this.render("unauthorized");
      }
    }
  });

  // History
  this.route('profileHistory', {
    path: '/profile/history',
    template: 'ProfileHistory',
    layoutTemplate: 'LayoutProfile',
    waitOn: function() {
      Meteor.subscribe('listingShowExtended');
    },
    onBeforeAction: function() {

      $(".helpitem").removeClass("helpNavSelected");
      $(".helpitem").eq(3).addClass("helpNavSelected");
      this.next();

      if (!Meteor.userId()) {
        this.render("unauthorized");
      }
    }
  });

   this.route('profileFeedback', {
    path: '/profile/history/:_id/feedback',
    template: 'ProfileHistoryFeedback',
    layoutTemplate: 'LayoutDefault',
     waitOn: function() {
      Meteor.subscribe('listingShowExtended');
    },
    data: function(){
      id = this.params._id;
    },
    onBeforeAction: function() {
      this.next();
      if (!Meteor.userId()) {
        this.render("unauthorized");
      }
      console.log("c00l");
    }
  });


  // Saved Items
  this.route('saveManager', {
    path: '/profile/saved',
    template: 'SavedItems',
    layoutTemplate: 'LayoutProfile',
    waitOn: function() {
      Meteor.subscribe('listingShowExtended');
      return Meteor.subscribe('saveShow');
    },
    onBeforeAction: function() {


      $(".helpitem").removeClass("helpNavSelected");
      $(".helpitem").eq(4).addClass("helpNavSelected");
      this.next();

      if (!Meteor.userId()) {
        this.render("unauthorized");
      }
    }
  });

  // Profile Settings
  this.route('profileSettings', {
    path: '/profile/settings',
    template: 'UserProfileSettings',
    layoutTemplate: 'LayoutProfile',
    data: function() {
      id = Meteor.userId();
      return id;
    },
    onBeforeAction: function() {

      $(".helpitem").removeClass("helpNavSelected");
      $(".helpitem").eq(5).addClass("helpNavSelected");
      this.next();

      if (!Meteor.userId()) {
        this.render("unauthorized");
      }
    }
  });

  // User Profiles
  this.route('profileUser', {
    path: '/profile/:_id',
    template: "UserProfile",
    loadingTemplate: 'loadingTemplate',
    waitOn: function() {
      return Meteor.subscribe('userIdprof', this.params._id);
    },
    onBeforeAction: function() {
      id_user = this.params._id;
      var profile = Meteor.users.find({
        _id: id_user
      }).fetch()[0].profile;

      if (typeof profile === "undefined") {
        this.render("not_found");
      }
      this.next();
    },
    data: function() {
      id_user = this.params._id;
      var profile = Meteor.users.find({
        _id: id_user
      }).profile;


      return Meteor.users.find({
        _id: id_user
      }).profile;
    }
  });
});


// Meetup Request

//         //
// Profile //
//         //

// Profile Account Privacy Settings

// Profile User

// Profile User Rating //

// TASK - IDEAL - Store query in url so that refresh yields same results

Router.route('/search/', function() {
  this.layout('LayoutSearch');
  this.render('searchpage');

  var query = this.params.query;
  Session.set('query', query);
});

// Solo All Notifications

Router.route('/notifications', function() {
  this.layout('LayoutDefault');
  this.render('allNotifications');
});

// Solo Advertise

Router.route('/advertise', function() {
  this.layout('LayoutDefault');
  this.render('advertise');
});
