if (Meteor.isClient) {


  // L0
  Template.registerHelper('mapRadius', function() {
    if (Meteor.userId()) {
      return Meteor.user().profile.mapRadius;
    } else {
      return 5
    }
  });

  Template.registerHelper('profile', function(a, b) {
    if (Meteor.userId()) {
      return Meteor.userId();
    } else {
      return 12312312
    }
  });

  Template.registerHelper('cur', function() {
    var current = Router.current().route.path();
    return current;
  });

  Template.registerHelper('equals', function(a, b) {
    return a == b;
  });

  Template.registerHelper('locationFull', function() {
    var locationRet;
    Meteor.userId() ? locationRet = Meteor.user().profile.locationString : locationRet = Session.get('locate');
    return locationRet;
  });

  Template.registerHelper('current', function() {
    return Router.current().path;
  });

  Template.registerHelper('timestamp', function() {
    var time = this.createdAt;
    var now = moment();

    var diff = now.diff(time);

    var hour = Math.floor(diff / 60);
    var minute = Math.floor(diff % 60);

    var min = minute - 4 + " minutes ago"
    var hr = hour + "hours and "

    var time = hr.concat(min);

    return time
  });

  // Template.registerHelper("imgix", function(url, def){
  //   url = encodeURIComponent(url) (new imgix.URL("https://#{imgix.source.name}.imgix.net/#{url}", {w:200}, imgix.source.token)).getUrl()


  Template.registerHelper('nameLookup', function(idParam) {
    var param = idParam.hash.idParam;
    return Meteor.users.find({
      _id: param
    }).fetch()[0].profile.name;
  });

  Template.registerHelper('asNotifications', function() {
    return Boolean(Notification.find().fetch()[0]);
  });

  Template.registerHelper('listing', function() {
    return Listing.findOne({
      _id: id
    });
  });

  Template.registerHelper('pictureLookup', function(idParam) {
    var param = idParam.hash.idParam;
    return Meteor.users.find({
      id: param
    }).fetch()[0].profile.picturesm;
  });

  // L1
  //
  Template.registerHelper('usernameCurrent', function() {
    return Meteor.user().profile.name.split(" ")[0];
  });

  Template.registerHelper('picture', function() {
    return Meteor.user().profile.picturelrg;
  });

  Template.registerHelper('picturesmall', function() {
    return Meteor.user().profile.picturesm;
  });

  Template.registerHelper('Notification', function() {
    return Notification.find({}, {
      sort: {
        createdAt: -1
      }
    });
  });

  Template.registerHelper('chatCountUnread', function() {
    // From each user, if messages oustanding are unread, +1 for every DIFFERENT user
    return Message.find({
      receiver: Meteor.userId()
    }).count();
  });

  if (Session.get('offerSelected')) {

    Template.registerHelper('nameOfferer', function() {
      return Meteor.users.findOne({
        _id: Session.get('offerSelected').creator_id
      }).profile.name;
    });

  }

}
