 if (Meteor.isClient) {

   Template.ModalListingManager.helpers({
       listingSelected: function() {
         try {
           return Listing.find({
             _id: Session.get('listingSelected')._id
           });

         } catch (e) {

         }
       },
       dateFormatted: function() {
         var date = moment(this.date);
         date = date.format("dddd, MMM DD");
         return date;
       },
       isCreatorEdit: function() {

         var noOffers = Offer.find({
           listingId: id
         }).count() == 0;
         if (this.creator_id == Meteor.userId() && noOffers) {
           return true;
         } else {
           return false;
         }
       },
       // isCreator: function(){
       //     if (this.creator_id == Meteor.userId()){
       //     return true;
       //   }
       //   else {
       //     return false;
       //   }
       // },
       offers: function() {
         return Offer.find({
           listingId: Session.get('listingSelected')._id
         }).count();
       }

   });

 }
