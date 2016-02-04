if (Meteor.isClient) {

  Template.receivedOfferFullCard.events({
    'click #profileReceivedAccept': function() {
      sweetAlert({
        title: "Offer Accepted",
        html: "true",
        type: "success",
        timer: 2000,
        showConfirmButton: false
      });
      var id = Session.get('offerSelected')._id;
      var listing = Session.get('offerSelected').listingId;
      var time = Session.get('offerSelected').timePeriod;

      var options = {
        id: id,
        listingId: listing,
        time: time,
        destination: [Session.get('offerSelected').creator_id, Meteor.userId()]

      }

      Meteor.call('acceptOffer', options);

      // Time Value Scheduling
      // IF Morning 2pm, Afternoon: 7pm, Night 12am
      // Calculate the delay between the day and send on the day

      function sendFeedback() {

         var userA = Listing.find({
        _id: this.listingId
      }).fetch()[0].creator_id;

        options = {
          recipients: [userA, Session.get('offerSelected').creator_id]
        }

        Meteor.call('pulseNotify', options);
      }

      // FUNC: send feedback to all included parties of the meetup

      SyncedCron.add({
        name: 'Update Notifications at Scheduled Time',
        schedule: function(parser) {
          return parser.text('At Scheduled Time')
        },
        job: function() {
          options = {
            recipients: [userA, Session.get('offerSelected').creator_id]
          }

          sendFeedback()
        }
      })

    },
    'click #profileReceivedDecline': function() {
      sweetAlert({
        title: "Offer Declined",
        html: "true",
        type: "error",
        timer: 2000,
        showConfirmButton: false
      });

      var id = Session.get('offerSelected')._id;
      var listing = Session.get('offerSelected').listingId;
      var options = {
        id: id,
        listingId: listing
      }

      Meteor.call('declineOffer', options);
      Meteor.call('pulseNotify', options);
    }
  });

}
