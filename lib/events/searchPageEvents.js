if (Meteor.isClient) {

    Template.searchpage.events({
        'click .homesearchbtn': function(options) {
            var Categories = [];
            var Conditions = [];
            var Styles = [];
            var Locations = [];

            var options = {};
            $(".searchRefineCategories li input").each(function() {
                var selectedCat = $(this).is(":checked");
                var nameCat = this.val
                Categories.push(selectedCat)
            });

            $(".searchRefineCondition li input").each(function() {
                var selectedCat = $(this).is(":checked");
                var nameCat = this.val
                Conditions.push(selectedCat)
            });

            $(".searchRefineLocation li input").each(function() {
                var selectedCat = $(this).is(":checked");
                var nameCat = this.val
                Locations.push(selectedCat)
            });

            options = {
                Apparel: Categories[0],
                Electronics: Categories[1],
                Shoes: Categories[2],
                Other: Categories[3],
                New: Conditions[0],
                'Like New': Conditions[1],
                Used: Conditions[2],
                'Needs Repair': Conditions[3],
                SizeStart: $(".listsize1 option:selected").val(),
                SizeEnd: $(".listsize2 option:selected").val(),
                Color: $("#colorpicker").val(),
                PriceStart: $(".listprice").val(),
                PriceEnd: $(".listprice:eq(1)").val(),
                Trades: $("input[type='radio']:checked").val(),
                SellerRating: 'red'
            }
            console.log(options);
            btnSearch();
        }
    });

}