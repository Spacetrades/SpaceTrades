   if (Meteor.isClient) {

  Template.item.onCreated(function() {

    Tracker.autorun(function(){

    var original = moment.unix(this.meetup_time);
      var delayTime = original.diff(moment());
      var delayTimeMinutes = delayTime / 1000 / 60;

      var hours = Math.floor(delayTimeMinutes / 60);
      var minutes = Math.floor(delayTimeMinutes % 60);

      var timeString = hours + " hours and" + minutes + " minutes";


    })

    });

}
