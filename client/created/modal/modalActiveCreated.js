   if (Meteor.isClient) {

     Template.ModalProfileActive.onCreated(function() {

// Run Immediately
      var original = moment.unix(Session.get('activeSelected').meetup_time);
           var delayTime = original.diff(moment());
           var delayTimeMinutes = delayTime / 1000 / 60;
           var hours = Math.floor(delayTimeMinutes / 60);
           var minutes = Math.floor(delayTimeMinutes % 60);
           var timeString = hours + " hours and " + minutes + " minutes";
           Session.set('timeString', timeString);
// Run on


           var original = moment.unix(Session.get('activeSelected').meetup_time);
           var delayTime = original.diff(moment());
           var delayTimeMinutes = delayTime / 1000 / 60;

           var hours = Math.floor(delayTimeMinutes / 60);
           var minutes = Math.floor(delayTimeMinutes % 60);

           var timeString = hours + " hours and " + minutes + " minutes";

           Session.set('timeString', timeString);


       })

     }


