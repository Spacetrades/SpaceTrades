if (Meteor.isClient) {

    Template.headerpost.onRendered(function() {

        var keyPress = {
            nav: function(elem) {
                // Works for headerpre, headerpost, headersearch, 
                $("." + elem).keypress(function(e) {
                    var key = e.which;
                    if (key == 13) {
                        var search = $("." + elem).val();
                        var options = {
                            search: search
                        }
                        ListingSearch.search(search);
                        Router.go("/search");
                    }
                });
            },
            home: function(elem) {
                // Works for headerpre, headerpost, headersearch, 
                $("." + elem).keypress(function(e) {
                    var key = e.which;
                    if (key == 13) {
                        var search = $("." + elem).val();
                        console.log(search);
                        var options = {
                            search: search
                        }
                        ListingSearch.search(search);
                        $(".homesearchbtn").click();
                    }
                });
            },

            // Only allow integers
            int: function(elem) {
                $("." + elem).keypress(function(key) {
                    if (key.charCode < 48 || key.charCode > 57) return false;
                });
            },

            string: function() {
                $("." + elem).keypress(function(key) {
                    if (!key.charCode < 48 || !key.charCode > 57) return false;
                });
            }

        }

        keyPress.nav("headerNavSearch");

        $.getScript("https://cdn.rawgit.com/ngzhian/multi-step-modal/master/multi-step-modal.js"),
        function() {
            sendEvent = function() {
                $('#offerRequestModal').trigger('next.m.2');
            }
        }
    });

}