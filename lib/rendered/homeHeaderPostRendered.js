if (Meteor.isClient) {

	 Template.homeheaderpost.onRendered(function() {

          var keyPress = {
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
            }
        }
        keyPress.home("search");
        // Unveil lazy loading
        $("img").unveil();

        $.getScript("https://cdn.rawgit.com/ngzhian/multi-step-modal/master/multi-step-modal.js"),
        function() {
            sendEvent = function() {
                $('#offerRequestModal').trigger('next.m.2');
            }
        }
    });
	
}