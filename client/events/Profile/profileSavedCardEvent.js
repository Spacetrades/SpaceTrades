if (Meteor.isClient) {

Template.profileSavedCard.events({
  'click .ph-button': function (event) {

    var optionsA = this;
    Meteor.call('actionUnsave', optionsA);
  }
});

}
