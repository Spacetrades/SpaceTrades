if (Meteor.isClient) {

	Template.item.events({
		'click .click-nav .js': function(e) {
			$('.click-nav .js ul').slideToggle(10);
			$('.clicker').toggleClass('active');
			e.stopPropagation();
		},
    'click .profileBtn': function() {
    Session.set('recipientId', this.creator_id);
    },
    'click .itemUnsave': function() {
        var id = this._id;
      var optionsA = Listing.find({_id: id}).fetch();

      // HACK for weird behavior
      optionsA = optionsA[0];

      Meteor.call('actionUnsave', optionsA);
    },
    'click .deleteButton': function(){
      var query = Listing.find({_id: id}).fetch()[0];
      var options = query;
      Meteor.call('removeListing', options);
      sweetAlert({
                    title: "Listing Removed",
                    type: "success",
                    timer: 3000,
                    showConfirmButton: false
                });
    },
		'click .itemSave': function() {
			var id = this._id;
			var optionsA = Listing.find({_id: id}).fetch();

      // HACK for weird behavior
      optionsA = optionsA[0];

			Meteor.call('actionSave', optionsA)
		}
	});

}
