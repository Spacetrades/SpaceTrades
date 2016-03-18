if (Meteor.isClient) {

  Template.ModalReportListing.onRendered(function() {

     $(".message").editable({
            inlineMode: false
        });

  })

}
