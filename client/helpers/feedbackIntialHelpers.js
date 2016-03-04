if (Meteor.isClient) {

  Template.ModalFeedbackInitial.helpers({

    isBuyer: function() {
      var seller = this.username;
      var state = seller == Meteor.user().profile.name ? state = false : state = true
      return state;
    }

  });

}
