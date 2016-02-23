if (Meteor.isClient) {

	Template.headerpost.events({
		'click .logout': function(e) {
			Meteor.logout();
		},
    'click .modLocationRadiusTrigger': function(){
      GoogleMaps.ready();
      console.log("click");
    },
    'click .notificationBody': function(){

    },
		'click .headerNavSearchButton': function(e) {
			navSearch();
		},
		'click .navGlobal': function(options) {
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
		'click .navNotifications': function(options) {
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
