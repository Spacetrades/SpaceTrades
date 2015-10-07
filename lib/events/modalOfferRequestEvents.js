if (Meteor.isClient) {

    Template.ModalOfferRequest.events({
        'click .offerRequestBtn': function(options) {
            var options = {
                listing_title: $(".offerRequestListingName").text(),
                img: $(".offerRequestImg").attr("src"),
                price: $(".offerRequestPriceOriginal").text(),
                offerprice: $(".listprice").val(),
                date: $("#datepicker").val(),
                location: $("#pac-input").val(),
                listingId: $(".hidden").text(),
                lat: Session.get("offerlat"),
                lng: Session.get("offerlng"),
                creator_id: Meteor.userId(),
                status: "Pending"
            }

            function OfferValidate() {
                var status = true;
                var keys = Object.keys(options);

                for (i = 0; i < keys.length; i++) {
                    if (!options[keys[i]] || options[keys[i]] == "") {
                        sAlert.error(keys[i] + " field is not properly set");
                        status = false;
                    }
                }
                return status;
            }

            if (OfferValidate()) {
                Meteor.call('addOffer', options);
                Router.go("/");


                sweetAlert({
                    title: "Offer Created",
                    text: "<span style='font-weight: bold;'>Offer:</span> " + "<span style='color: #f8504b'>" + options.listing_title + "</span>" + "<span> Created </span>",
                    html: "true",
                    type: "success",
                    timer: 3000,
                    showConfirmButton: false
                });

            };
        }
    });

}