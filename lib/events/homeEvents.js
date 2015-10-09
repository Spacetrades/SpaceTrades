if (Meteor.isClient) {

    Template.home.events({
        'click .homeLoadMore': function() {
            Meteor.subscribe('homeShowMore');
        }
    });

}