if (Meteor.isClient) {

	Template.ModalReportListing.events({
		'click .modalSubmitBtn': function(options) {
			var options = {
				prohibited_box: $(".prohibitChoice:checked").val(),
				offensive_box: $(".offenseChoice:checked").val(),
				irrelevant_box: $(".irrelevantChoice:checked").val(),
				false_box: $(".falseChoice:checked").val(),
				compliance_box: $(".complianceChoice:checked").val(),
				description: $(".message").val()
			}

			function formValidate() {
				var keys = Object.keys(options);
				for (i = 0; i < keys.length; i++) {
					if (options[keys[i]] === undefined) {
						return false
					} else {
						return true
					}
				}
				if (formValidate()) {
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
		}
	});
}