Meteor.publish('offerId', function (id) {
    return Offer.find({ _id: id});
});