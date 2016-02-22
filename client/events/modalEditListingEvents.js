if (Meteor.isClient){

  Template.EditListing.events({
    'click .submit': function () {

      var options = {
        // User Info
        listing_title: $(".listtitle").val(),
        // Category
        category: $(".listcategory option:selected").val(),
        type: $(".listtype option:selected").val(),
        brand: $(".listbrand").val(),
        quantity: $(".listquantity option:selected").val(),
        // Payment
        price: $(".listprice").val(),
        payment: $("input[name='addListingPayment']:checked").val(),
        trade: $("input[name='offerTime']:checked").val(),
        size: $(".listsize option:selected").val() || $(".listcapacity option:selected").val(),
        // Information
        condition: $(".condition option:selected").val(),
        description: $(".listdescription").val()

      }



    }
  });

}
