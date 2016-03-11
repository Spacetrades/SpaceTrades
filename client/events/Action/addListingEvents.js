if (Meteor.isClient) {

  Template.ActionAddListing.events({
    'click .step-1 .modalNext': function() {
      $(".step-2").show()
      $(".step-1").hide()
    },
    'click .step-2 .modalNext': function() {
      $(".step-3").show()
      $(".step-2").hide()
    },
    'click .step-3 .modalNext': function() {
      $(".step-4").show()
      $(".step-3").hide()
    },
    'click .step-4 .modalNext': function() {
      $(".step-5").show()
      $(".step-4").hide()
    },
    'click .step-5 .modalNext': function() {
      $(".step-6").show()
      $(".step-5").hide()
    },
    'click .step-2 .modalBack': function() {
      $(".step-1").show()
      $(".step-2").hide()
    },
    'click .step-3 .modalBack': function() {
      $(".step-2").show()
      $(".step-3").hide()
    },
    'click .step-4 .modalBack': function() {
      $(".step-3").show()
      $(".step-4").hide()
    },
    'click .step-5 .modalBack': function() {
      $(".step-4").show()
      $(".step-5").hide()
    },
    'click .step-6 .modalBack': function() {
      $(".step-5").show()
      $(".step-6").hide()
    },
    'click .add': function(options) {

      // var color = $("#colorpicker").val();

      // Meteor.call('colorName', color, function(err, result) {
      //   if (!err) {
      //     Session.set('colorName', result);
      //   }

      //   return result
      // });

      var options = {
        // User Info
        creator_id: Meteor.userId(),
        urlKey: Random.id(10),
        creator_image: Meteor.user().profile.picturesm,
        username: Meteor.user().profile.name,
        listing_title: $(".listtitle").val(),
        // Category
        category: $(".listcategory option:selected").val(),
        type: $(".listtype option:selected").val(),
        brand: $(".listbrand").val(),
        // quantity: $(".listquantity option:selected").val(),
        // Payment
        price: $(".listprice").val(),
        payment: $("input[name='addListingPayment']:checked").val(),
        trade: $("input[type='radio']:checked").val(),
        size: $(".listsize option:selected").val() || $(".listcapacity option:selected").val(),
        // Information
        condition: $(".condition option:selected").val(),
        // color: Session.get('colorName'),
        description: $(".listdescription").val(),
        // Location
        lat: Meteor.user().profile.lat,
        lng: Meteor.user().profile.lng,
        city: Meteor.user().profile.city,
        state: Meteor.user().profile.state,
        locationString: Meteor.user().profile.locationString,
        // Images
        img1: Session.get("img1url"),
        img2: Session.get("img2url"),
        img3: Session.get("img3url")
      }

      function addListingValidate() {
        var status = true;
        var keys = Object.keys(options);

        keys = _.without(keys, 'img1', 'img2', 'img3');

        // TEMP HACK
        keys = _.without(keys, 'lat', 'lng', 'city', 'state', 'locationString');

        var errorFields = [];

        for (i = 0; i < keys.length; i++) {
          if (!options[keys[i]] || options[keys[i]] == "") {
            status = false;
            errorFields.push(keys[i]);
          }
        }

        if (!status){
          sAlert.error("Review form");

        _.each(errorFields, function(f){
          $("." + f).css("text-decoration", "underline");
        });

        }

        return status;
      }

      function successMessage() {

        sweetAlert({
          title: "Listing Created",
          text: "<span style='font-weight: bold;'>Listing:</span> " + "<span style='color: #f8504b'>" + options.listing_title + "</span>" + "<span> Created </span>",
          html: "true",
          type: "success",
          timer: 3000,
          showConfirmButton: false
        });

      }

      if (addListingValidate()) {


        Meteor.call('addListing', options);

        // var newUrl = Listing.find({urlKey: options.urlKey}).fetch();
        // console.log(newUrl);
        Router.go('/');

        successMessage();
      }

    },
    'change .listcategory': function(event) {

      var categories = {
        'Apparel': ['Shirt', 'Hoodie', 'Sweater', 'Pants', 'Jacket', 'Socks', 'Hat', 'Backpack'],
        'Electronics': ['Phone', 'Tablet', 'Laptop', 'Game', 'Game Console'],
        'Shoes': ['Basketball', 'Boots', 'Running', 'Casual', 'Sandals', 'Training', 'Skateboarding'],
        'Other': ['Other']
      };

      var brands = {
        'Apparel': ['Bape', 'Supreme'],
        'Electronics': ['Apple', 'Asus', 'Beats by Dr Dre', 'Blackberry', 'Bose', 'Cannon', 'Dell', 'Go Pro', 'Google', 'HP', 'Lenovo', 'Logitech', 'Microsoft', 'Nikon', 'Nintendo', 'Panasonic', 'Samsung', 'Sandisk', 'Sharp', 'Sony', 'Turtle Beach', 'Vizio'],
        'Shoes': ['Asics', 'Jordans', 'Converse', 'Ewing Athletics', 'Fila', 'Li Ning', 'New Balance', 'Nike', 'Puma', 'Radii', 'Reebok', 'Saucony', 'Sperry', 'Supra', 'Timberland', 'Toms', 'Vans', 'Under Armour'],
        'Other': ['Other']
      }

      // Need Object with State City Correspondence
      var choice = event.target.value;
      var choiceType = categories[choice];
      var choiceBrand = brands[choice];

      switch (choice) {
        case "Apparel":
          $(".listsizeli").show();

          // Remove appended options
          $(".listtype").empty();
          $(".listbrand").empty();

          $("listcapacity").hide();
          $("<option value='' disabled selected>Select Type</option>").appendTo(".listtype");

          // Iteration append loop for types
          for (i = 0; i < choiceType.length; i++) {
            $("<option>" + choiceType[i] + "</option>").appendTo(".listtype");
          }

          // Iteration append loop for brands
          for (i = 0; i < choiceBrand.length; i++) {
            $("<option>" + choiceBrand[i] + "</option>").appendTo(".listbrand");
          }

          break

        case "Electronics":

          // Remove appended options
          $(".listtype").empty();
          $(".listbrand").empty();

          $(".listsizeli").hide();
          $(".listcapacity").show()
          $("<option value='' disabled selected>Select Type</option>").appendTo(".listtype");

          // Iteration append loop for types
          for (i = 0; i < choiceType.length; i++) {
            $("<option>" + choiceType[i] + "</option>").appendTo(".listtype");
          }

          // Iteration append loop for brands
          for (i = 0; i < choiceBrand.length; i++) {
            $("<option>" + choiceBrand[i] + "</option>").appendTo(".listbrand");
          }

          break

        case "Shoes":
          $(".listsizeli").show();


          // Remove appended options
          $(".listtype").empty();
          $(".listbrand").empty();

          $("listcapacity").hide();
          $("<option value='' disabled selected>Select Type</option>").appendTo(".listtype");

          // Iteration append loop for types
          for (i = 0; i < choiceType.length; i++) {
            $("<option>" + choiceType[i] + "</option>").appendTo(".listtype");
          }

          // Iteration append loop for brands
          for (i = 0; i < choiceBrand.length; i++) {
            $("<option>" + choiceBrand[i] + "</option>").appendTo(".listbrand");
          }

          break

        case "Other":
          $(".listsizeli").show();

          // Remove appended options
          $(".listtype").empty();
          $(".listbrand").empty();

          $("listcapacity").hide();
          $("<option value='' disabled selected>Select Type</option>").appendTo(".listtype");

          // Iteration append loop for types
          for (i = 0; i < choiceType.length; i++) {
            $("<option>" + choiceType[i] + "</option>").appendTo(".listtype");
          }

          // Iteration append loop for brands
          for (i = 0; i < choiceBrand.length; i++) {
            $("<option>" + choiceBrand[i] + "</option>").appendTo(".listbrand");
          }


          break
      }

      function sizeChange() {
        if (choiceType == "Electronics") {
          $(".sizeshoe").hide();
          $(".sizelectron").show();
        } else {
          $(".sizelectron").hide();
          $(".sizeshoe").show();
        }
      }

    },
    'change .listtype': function(event) {

      var categories = {
        'Apparel': ['Bape', 'Supreme', 'Medium', 'Large', 'X Large'],
        'Electronics': ['Apple', 'Asus', 'Beats by Dr. Dre', 'Blackberry', 'Bose', 'Cannon', 'Dell', 'Go Pro', 'Google', 'HP', 'Lenovo', 'Logitech', 'Microsoft', 'Nikon', 'Nintendo', 'Panasonic', 'Samsung', 'Sandisk', 'Sharp', 'Sony', 'Turtle Beach', 'Vizio'],
        'Shoes': ['Asics', 'Jordan', 'Converse', 'Ewing Athletics', 'Fila', 'Li Ning', 'New Balance', 'Nike', 'Puma', 'Radii', 'Reebok', 'Saucony', 'Sperry', 'Supra', 'Timberland', 'Toms', 'Vans', 'Under Armor'],
        'Other': ['X Small', 'Small', 'Medium', 'Large', 'X Large']
      }

      var choice = event.target.value;
      var choiceType = categories['sizesReg']

      // Fall through method
      switch (choice) {
        // Select all these cases for one action
        case "Shirt":
        case "Hoodie":
        case "Sweater":
        case "Jacket":
        case "Socks":
          $(".listsize").empty();
          $("<option value='' disabled selected>Select Size</option>").appendTo(".listsize");

          // Iteration loop
          for (i = 0; i < choiceType.length; i++) {
            $("<option>" + choiceType[i] + "</option>").appendTo(".listsize");
          }

          break

        case "Game":
          $(".listcapacity").hide();
          break

        case "Phone":
        case "Tablet":
        case "Laptop":
        case "Game Console":
          $(".listcapacity").show();
          break
      }
    },
    'change .imageupload': function(event, template, pics) {
      var images = event.currentTarget.files;
      var pics = [];
      var img1;
      var img2;
      var img3;

      function readURL() {
        // This value needs to be the new optimized photos
        var images = event.currentTarget.files;

        var img1 = images[0].name;


        if (images[1]) {
          var img2 = images[1].name;
        };

        if (images[2]) {
          var img3 = images[2].name;
        };

        Session.set("img1", img1);

        // console.log( event.currentTarget.files[0] );

        if (event.currentTarget.files[0]) {

          var reader = new FileReader();
          reader.onload = function(e) {
            // console.log(e.target.result);
            $("#img1").attr("src", e.target.result);
          }
          reader.readAsDataURL(event.currentTarget.files[0]);
        }

        if (event.currentTarget.files[1]) {
          // console.log( event.currentTarget.files );
          var reader = new FileReader();
          error = reader.error;
          console.log(error);
          reader.onload = function(e) {
            $("#img2").attr("src", e.target.result);
          }
          reader.readAsDataURL(event.currentTarget.files[1]);
        }

        if (event.currentTarget.files[2]) {
          // Task - Get the filenames of the list of images uploaded and convert to URL with buildURLs(), then place in images [] array.
          var reader = new FileReader();
          reader.onload = function(e) {
            $("#img3").attr("src", e.target.result);
          }
          reader.readAsDataURL(event.currentTarget.files[2]);
        }

        // console.log(images);
      }

      function buildURLs() {

        // Ideally I would be taking the value of downloadUrl from the _.map code block but how would I set this to an img # ???
        var imagePrefix = "https://listing-images-spacetrades.s3-us-west-2.amazonaws.com/";
        var img1url = imagePrefix + Meteor.userId() + "/" + Session.get("img1");
        var img2url = imagePrefix + Meteor.userId() + "/" + Session.get("img2");
        var img3url = imagePrefix + Meteor.userId() + "/" + Session.get("img3");

        Session.set("img1url", img1url);
        Session.set("img2url", img2url);
        Session.set("img3url", img3url);
      }

      function resizeImages() {}

      function optimizeImages() {}

      readURL(this);
      buildURLs();

      // Layout of images on S3 = UserNameIDFolder/ListingFolder/ Images Go Here
      // Use downloadURL in the future
      var uploads = _.map(event.currentTarget.files, function(file) {
        var uploader = new Slingshot.Upload("listingImages");

        uploader.send(file, function(error, downloadUrl) {

          var url = downloadUrl;
          if (error) {
            console.error("Error Uploading", uploader.xhr.response);
            alert(error);
          } else {}
        });
      })
    }
  });

}
