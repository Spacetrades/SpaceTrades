if (Meteor.isClient) {

    Template.HelpCenterNav.events({
        'click .helpitem': function(event) {
            $(".helpitem").removeClass("helpNavSelected");
            $(event.currentTarget).addClass("helpNavSelected");
        },
        'click .helplogo': function() {
            $(".helpitem").removeClass("helpNavSelected");
        }
    });

}