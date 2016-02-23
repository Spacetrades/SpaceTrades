if (Meteor.isClient){
	Template.ModalListingManager.events({
		'click .editListing': function () {
      var url = "/listing/" + Session.get("listingSelected")._id + "/edit";
			Router.go(url);
      Meteor.setTimeout(function(){
         $(".modal-backdrop").remove();
       },1000)
      $(".modal-backdrop").remove();
		}
	});
}
