if (Meteor.isClient) {

	Template.UserProfile.helpers({
		profile: function() {
			return Meteor.users.find({
				_id: id
			})
		},
		profimg: function() {
			return Meteor.users.find({
				_id: id
			}).fetch()[0].profile.picturelrg;
		},
		listing: function() {
			return Listing.find({
				creator_id: id
			});
		},
		userId: function() {
			return id;
		},
		facebook: function() {
			var fbid = Meteor.users.find({
				_id: id
			}).fetch()[0].services.facebook.id;
			var fblink = "https://www.facebook.com/" + fbid;
			return fblink
		},
		online: function() {
			var status = Meteor.users.find({
				_id: id
			}).fetch()[0].status.online;
			if (status == true) {
				var color = "#24ec3d";
				var innercolor = "#029402";
				var text = "Online";
			} else {
				var color = "#ff0000";
				var innercolor = "#5858FD";
				var text = "Offline";
			}

			return {
				color: color,
				innercolor: innercolor,
				text: text
			};
		},
		memberSince: function() {
			var monthNames = ["January", "February", "March", "April", "May", "June",
				"July", "August", "September", "October", "November", "December"
			];
			var baseDate = Meteor.users.find({
				_id: id
			}).fetch()[0].createdAt;
			var monthNumber = baseDate.getMonth();
			var month = monthNames[monthNumber];
			var year = baseDate.getFullYear();
			var day = baseDate.getDate();
			var dateCreated = month + " " + day + "," + year;
			return dateCreated;
		},
		month: function() {
			var monthNumber = new Date().getMonth();
			var monthNames = ["January", "February", "March", "April", "May", "June",
				"July", "August", "September", "October", "November", "December"
			];
			var month = monthNames[monthNumber];
			return month;
		}
	});

}