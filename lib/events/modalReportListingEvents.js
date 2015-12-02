if (Meteor.isClient) {
	Template.ModalReportListing.events({
		'click .modalSubmitBtn': function(options) {
			var options = {
				prohibited_box: $(".prohibitChoice:checked").val(),
				offensive_box: (".offenseChoice:checked").val(),
				irrelevant_box: (".irrelevantChoice:checked").val(),
				false_box: (".falseChoice:checked").val(),
				compliance_box: (".complianceChoice:checked").val()
			}
		}
	});
}