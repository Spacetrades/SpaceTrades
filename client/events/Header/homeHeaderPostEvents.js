if (Meteor.isClient) {

  function btnSearch() {
    search = $("#search").val();
    var options = {
      search: search
    }
    ListingSearch.search(search);
  }

  Template.homeheaderpost.events({
    'click .navGlobal': function(options) {

      $(".otherDropdown").css({
        "display": "none"
      });

      $(".notifyDropdown").css({
        "display": "none"
      });


      var state = $(".navGlobal > .headerDropDownNav").is(":visible");

      if (state === false) {
        $(".fa").removeClass("black");
        $(".fa-bars").addClass("black");
        $(".navGeneral > .headerDropDownNav").css({
          "display": "none"
        });
        $(".navGlobal > .headerDropDownNav").css({
          "display": "block"
        });
      }

      if (state === true) {
        $(".fa-bars").removeClass("black");
        $(".navGlobal > .headerDropDownNav").css({
          "display": "none"
        });
      }
    },
    'click .modLocationRadiusTrigger': function() {
      GoogleMaps.ready();
      // getLocation();
      GoogleMaps.load({
        v: '3',
        key: 'AIzaSyAi0bRmwNIWv24KjjeiG0DlcU-jFLPJ9FQ',
        libraries: 'geometry,places'
      });
    },
     'click .navMessages': function() {
      $(".material-icons").removeClass('notificationHighlight');
    },
    'click .navNotifications': function(options) {

      $(".fa-globe").removeClass('notificationHighlight');

      $(".otherDropdown").css({
        "display": "none"
      });

      $(".managerDropdown").css({
        "display": "none"
      });


      var state = $(".navNotifications > .headerDropDownNav").is(":visible");

      if (state === false) {
        $(".fa").removeClass("black");
        $(".fa-globe").addClass("black");
        $(".navNotifications > .headerDropDownNav").css({
          "display": "none"
        });
        $(".navNotifications > .headerDropDownNav").css({
          "display": "block"
        });
      }

      if (state === true) {
        $(".fa-globe").removeClass("black");
        $(".navNotifications > .headerDropDownNav").css({
          "display": "none"
        });
      }
    },
    'click .navGeneral': function(options) {

      $(".managerDropdown").css({
        "display": "none"
      });

      $(".notifyDropdown").css({
        "display": "none"
      });

      var state = $(".navGeneral > .headerDropDownNav").is(":visible");

      if (state === false) {
        $(".fa").removeClass("black");
        $(".fa-caret-square-o-down").addClass("black");
        $(".navGlobal > .headerDropDownNav").css({
          "display": "none"
        });
        $(".navGeneral > .headerDropDownNav").css({
          "display": "block"
        });
      }

      if (state === true) {
        $(".fa-caret-square-o-down").removeClass("black");
        $(".navGeneral > .headerDropDownNav").css({
          "display": "none"
        });
      }
    },
    'click .logout': function(e) {
      Meteor.logout();
    },
    'click .homesearchbtn': function(e) {
      btnSearch();
    },
    'click .catApparel': function(e) {
      catChoice("catApparel");
    },
    'click .catElectronics': function(e) {
      catChoice("catElectronics");
    },
    'click .catShoes': function(e) {
      catChoice("catShoes");
    },
    'click .catOther': function(e) {
      catChoice("catOther");
    }
  });

}
