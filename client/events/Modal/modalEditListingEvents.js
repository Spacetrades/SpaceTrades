if (Meteor.isClient) {

  Template.EditListing.events({
    'click .add': function() {

      var options = {
        // User Info
        id: id,
        listing_title: $(".edittitle").val(),
        // Category
        brand: $(".editbrand option:selected").val(),
        quantity: $(".editquantity option:selected").val(),
        // Payment
        price: $(".editprice").val(),
        payment: $("input[name='addListingPayment']:checked").val(),
        trade: $("input[name='offerTime']:checked").val(),
        size: $(".editsize option:selected").val() || $(".listcapacity option:selected").val(),
        // Information
        condition: $(".condition option:selected").val(),
        description: $(".editdescription").val()
      }

      // if (validate()) {

      // }

      Meteor.call('updateListing', options);

      Router.go("/");
      sAlert.success("Listing updated");

    }
  });

}
