if (Meteor.isClient) {

	Template.item.events({
		'click .click-nav .js': function(e) {
			$('.click-nav .js ul').slideToggle(10);
			$('.clicker').toggleClass('active');
			e.stopPropagation();
		},
		'click .itemSave': function(){
			Meteor.call('actionSave')
		}
	});

}