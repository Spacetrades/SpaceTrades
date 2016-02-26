    if (Meteor.isClient) {

      Template.profileHistoryCard.helpers({

        nameOther: function() {
          var idSelf = Meteor.userId();
          var other = idSelf == this.creator_id ? this.offer_creator_name : this.username;
          return other
        },
        idOther: function() {
          var idSelf = Meteor.userId();
          var other = idSelf == this.creator_id ? this.offer_creator_name : this.creator_id;
          return other
        }

      });

    }
