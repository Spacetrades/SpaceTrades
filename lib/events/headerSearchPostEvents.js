if (Meteor.isClient) {

	Template.headersearchpost.events({
		'click .headerNavSearchButton': function(search) {
			btnSearch();
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
		}
	});

}