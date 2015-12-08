if (Meteor.isClient) {
	// Implement some system for validation
	// Choices: Is, Angular forms, validate js ... 
	// Determine how things will be investigated

	Template.ModalReportListing.events({
		'click .modalSubmitBtn': function(options) {
			var options = {
				targetUser: $(".listingItemUserName").text(),
				riskLevel: 1,
				reasonBox: {
					prohibited_box: $(".prohibitChoice:checked").val(),
					offensive_box: $(".offenseChoice:checked").val(),
					irrelevant_box: $(".irrelevantChoice:checked").val(),
					false_box: $(".falseChoice:checked").val(),
					compliance_box: $(".complianceChoice:checked").val()
				},
				description: $(".message").val()
			}

			function formValidate() {
				// Name exists, is only string
				// >= 1 reasons checked
				// Description exists
				var keys = ['targetUser', 'description']
				for (i = 0; i < keys.length; i++) {
					if (options[keys[i]] === undefined) {
						return false
					} else {
						return true
					}
				}
				if (formValidate()) {
					Meteor.call('addReport', options);
					sweetAlert({
						title: "Report has been Filed",
						text: "",
						html: "true",
						type: "success",
						timer: 3000,
						showConfirmButton: false
					});
				}
			};

			formValidate();
		}
	});
}