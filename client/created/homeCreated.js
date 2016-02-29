 if (Meteor.isClient) {

   Template.home.onCreated(function() {


     $.getJSON('http://ipinfo.io', function(data) {
       var city = data.city;
       var region = data.region;
       var string = city + ", " + region;
       Session.set('locate', string);
     })

     var self = this

     Tracker.autorun(function () {
      self.me = new ReactiveVar(1242);
console.log(Template.instance().me.get())
     });

console.log(Template.currentData())


// Tracker.autorun(function(){

  // Session.set('selfId', Meteor.userId());
  // Session.set('selfPic', Meteor.user().profile.picturesm);

// })

     // var self = this;
     //    self.myAsyncValue = new ReactiveVar("Waiting for response from server...");
     //    Meteor.call('ipLocate', function (err, asyncValue) {
     //        if (err)
     //            console.log(err);
     //        else
     //            self.myAsyncValue.set(asyncValue);
     //    });

   });

 }
