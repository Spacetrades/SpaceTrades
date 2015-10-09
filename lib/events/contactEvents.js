if (Meteor.isClient) {

    Template.contact.events({
        'click .contactButton': function() {
            var subject = $("#contactname").val();
            var text = $(".message").val();
            sAlert.success('Message sent successfully');
            $(".contactform").hide();
            $(".sent").css("display", "block");

            Meteor.call('sendEmail',
                'nchackerian@gmail.com',
                'contact@spacetrades.com',
                subject,
                text
            );
        }
    });

}