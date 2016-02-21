if (Meteor.isClient) {

  Template.ModalListingDelete.events({
    'click #profileDelete ': function() {
      var id = Session.get('listingSelected')._id;
      var creator_id = Session.get('listingSelected').creator_id;

      var options = {
        id: id,
        creator_id: creator_id
      }

      Meteor.call('removeListing', options);

      sweetAlert({
        title: "Listing Removed",
        type: "success",
        timer: 3000,
        showConfirmButton: false
      });


    }
  });

}
