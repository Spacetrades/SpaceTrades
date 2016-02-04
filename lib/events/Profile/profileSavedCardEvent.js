Template.profileSavedCard.events({
  'click .ph-button': function () {
    Meteor.call('actionUnsave', options);
  }
});
