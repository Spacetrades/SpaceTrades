    if (Meteor.isClient) {

      Template.ModalReceivedOffersFull.helpers({

          timeSinceCreation: function() {

            // function updateTime(){

            // TODO: hours ago, when > 24 hours, days ago

            Meteor.setInterval(function() {
            var time = moment(this.createdAt);
            var now = moment();
            var diff = now.diff(time);

            var min = diff / 1000 / 60;

            console.log(min);
            }, 60000);
            // }

              // Meteor.setInterval(function() {
                //updateTime();
                 return min;
              // }, 60000);

            },
            dateFormatted: function() {
              var date = moment(this.date);
              date = date.format("dddd, MMM DD");
              return date;
            }

          });

      }
