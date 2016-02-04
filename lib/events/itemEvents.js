if (Meteor.isClient) {

	Template.item.events({
		'click .click-nav .js': function(e) {
			$('.click-nav .js ul').slideToggle(10);
			$('.clicker').toggleClass('active');
			e.stopPropagation();
		},
    'click .itemUnsave': function(){
        var id = this._id;
      var optionsA = Listing.find({_id: id}).fetch();

      // HACK for weird behavior
      optionsA = optionsA[0];

      Meteor.call('actionUnsave', optionsA);
    },
		'click .itemSave': function(){
			var id = this._id;
			var optionsA = Listing.find({_id: id}).fetch();

      // HACK for weird behavior
      optionsA = optionsA[0];

			Meteor.call('actionSave', optionsA)
		}
	});

}
