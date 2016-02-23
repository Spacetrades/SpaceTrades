if (Meteor.isClient) {

  Template.item.events({
    'click .click-nav .js': function(e) {
      $('.click-nav .js ul').slideToggle(10);
      $('.clicker').toggleClass('active');
      e.stopPropagation();
    },
    'click .modViewOffers': function() {

      className = "." + id;
      Router.go("/profile/listings");

      Meteor.setTimeout(function() {
        $(className).click();
      }, 500)

    },
    'click .modOfferRequestTrigger': function(){
      Session.set('scope', this);
    },
    'click .profileBtn': function() {
      Session.set('recipientId', this.creator_id);
    },
    'click .modDeleteListingTrigger': function(){
     Session.set("listingSelected", this);
      $("#listingDeleteModal").modal();
    },
    'click .itemUnsave': function() {
      var optionsA = Saves.find({
        item_id: id
      }).fetch()[0];

      Meteor.call('actionUnsave', optionsA);
    },
    'click .modEditListingTrigger': function(){
      Session.set('listingSelected', this);
    },
    'click .deleteButton': function() {
    },
    'click .itemSave': function() {
      var optionsA = Listing.find({
        _id: id
      }).fetch()[0];

      Meteor.call('actionSave', optionsA);
    }
  });

}
