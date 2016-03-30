 if (Meteor.isClient) {

   Template.home.onCreated(function() {

     $.getJSON('http://ipinfo.io', function(data) {
       var city = data.city;
       var region = data.region;
       var string = city + ", " + region;
       Session.set('locate', string);
     });

   });

 }
