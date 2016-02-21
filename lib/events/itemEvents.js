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

      Meteor.setTimeout(function() {
        $(".modReceivedOffersTrigger").click();
      }, 1000);

    },
    'click .profileBtn': function() {
      Session.set('recipientId', this.creator_id);
    },
    'click .itemUnsave': function() {
      var optionsA = Saves.find({
        item_id: id
      }).fetch()[0];

      Meteor.call('actionUnsave', optionsA);
    },
    'click .modReportTrigger': function() {
      $(".modReport").attr("style", "display: block");
    },
    'click .deleteButton': function() {
      var query = Listing.find({
        _id: id
      }).fetch()[0];
      var options = query;
      Meteor.call('removeListing', options);
      sweetAlert({
        title: "Listing Removed",
        type: "success",
        timer: 3000,
        showConfirmButton: false
      });
      Router.go("/");
    },
    'click .itemSave': function() {
      var optionsA = Listing.find({
        _id: id
      }).fetch()[0];

      Meteor.call('actionSave', optionsA);
    }
  });

}
