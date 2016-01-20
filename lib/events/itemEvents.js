if (Meteor.isClient) {

	Template.item.events({
		'click .click-nav .js': function(e) {
			$('.click-nav .js ul').slideToggle(10);
			$('.clicker').toggleClass('active');
			e.stopPropagation();
		},
		'click .itemSave': function(){
			var id = this._id;
			var options = Listing.find({_id: id}).fetch();

			Meteor.call('actionSave', options)
		}
	});

}