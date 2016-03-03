if (Meteor.isClient){

    Template.ModalHistoryDetails.events({
        'click a': function () {
    $("#historyDetailsModal").modal('hide')
        }
    });

}
