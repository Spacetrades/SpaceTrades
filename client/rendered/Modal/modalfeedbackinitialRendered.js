if (Meteor.isClient) {

  Template.ProfileHistoryFeedback.onRendered(function() {

for (i = 2; i < 10; i++) {
      $(".step-" + i).hide()
    }

    $('.rateit').rateit();


  })

}
