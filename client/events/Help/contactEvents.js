if (Meteor.isClient) {

    Template.contact.events({
        'click .contactButton': function(e) {
            e.preventDefault();

            var subject = $("#contactname").val();
            var text = $(".message").val();
            var name = Meteor.user().profile.name;
            sAlert.success('Message sent');


            Meteor.call('sendEmail',
                'nchackerian@gmail.com',
                'contact@spacetrades.com',
                subject,
                text
            );
        }
    });

}
