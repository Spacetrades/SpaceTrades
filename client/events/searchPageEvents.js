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

      refineOptions = {
        Apparel: Categories[0],
        Electronics: Categories[1],
        Shoes: Categories[2],
        Other: Categories[3],
        New: Conditions[0],
        'Like New': Conditions[1],
        Used: Conditions[2],
        'Needs Repair': Conditions[3],
        // SizeStart: $(".listsize1 option:selected").val(),
        // SizeEnd: $(".listsize2 option:selected").val(),
        // Color: $("#colorpicker").val(),
        // PriceStart: $(".listprice").val(),
        // PriceEnd: $(".listprice:eq(1)").val(),
        // Trades: $("input[type='radio']:checked").val()
        // SellerRating: 'red'
      }
      console.log(refineOptions);
      btnSearch(refineOptions);
    },
    'mouseup .searchRefineCategories li input': function(event) {
      var categories = {
        'Apparel': ['Shirt', 'Hoodie', 'Sweater', 'Pants', 'Jacket', 'Socks', 'Hat', 'Backpack'],
        'Electronics': ['Phone', 'Tablet', 'Laptop', 'Game', 'Game Console'],
        'Shoes': ['Basketball', 'Boots', 'Running', 'Casual', 'Sandals', 'Training', 'Skateboarding'],
        'Other': ['Other']
      }

      console.log(event);
      var clickedValue = event.target.value;
      var checkedStatus = event.target.checked;
      var typesList = categories[clickedValue];

      console.log(checkedStatus);

      _.each(typesList, function(type) {

        if ( checkedStatus ){
          $("." + type).remove();
        }

        else {
        var domString = "<li class=" + type + "><input type='checkbox' class='" + type + "' value='" + type + "'>" + type + "</li>"
        $(".typeChoose").after(domString);
        }

      });


    }
  });

}
