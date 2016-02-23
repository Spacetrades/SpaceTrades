if (Meteor.isClient) {

	Template.UserProfile.events({
		'load .profileUserImg': function(event) {
			$(".spin").hide();
		},
    'click .modReportTrigger': function(){
      $(".modReport").attr("style", "display: block");
    },
    'click .profileChatBtn': function(){
      Session.set('recipientId', id_user);
    },
		'click .click-nav .js': function(e) {
			$('.click-nav .js ul').slideToggle(200);
			$('.clicker').toggleClass('active');
			e.stopPropagation();
		}
	});

}
