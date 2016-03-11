    if (Meteor.isClient) {

      Template.ModalReceivedOffersFull.helpers({

        timeSinceCreation: function() {

          Meteor.setInterval(function() {
            var time = moment(this.createdAt);
            var now = moment();
            var diff = now.diff(time);

            var min = diff / 1000 / 60;

          }, 60000);
          return min;
        },
        dateFormatted: function() {
          var date = moment(this.date);
          date = date.format("dddd, MMM DD");
          return date;
        },
        offerSelected: function() {
          return Session.get('offerSelected');
        },
        door: function() {
          if (Session.get('offerSelected')) {
            return Offer.find({
              _id: Session.get('offerSelected')._id
            }).fetch();
          }
        }

      });

    }
