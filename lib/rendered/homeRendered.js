if (Meteor.isClient) {

    Template.home.onRendered(function() {

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
                        $(".homesearchbtn")[0].click();
                    }
                });
            }
        }

        $('homeCardImg').error( function(){
          console.log("broken");
          this.attr('src', 'default-item-img.jpg');
        });

        keyPress.home("search");

        var tags = ["Air Jordan", "Aeropostale", "Nike", "Air Force One", "nike"];
        $("#search").autocomplete({
            delay: 200,
            source: tags
        });



        GoogleMaps.load({
            v: '3',
            key: 'AIzaSyAi0bRmwNIWv24KjjeiG0DlcU-jFLPJ9FQ',
            libraries: 'geometry,places'
        });

    });

}
