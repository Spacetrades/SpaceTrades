if (Meteor.isClient) {

  Template.UserProfileSettings.events({
    'change .profileSettingsSelectImg': function(event) {
      var pics = [];
      var img1;

      function readURL() {
        // This value needs to be the new optimized photos
        var images = event.currentTarget.files;
        var img1 = images[0].name;
        Session.set("img1", img1);

        if (event.currentTarget.files[0]) {

          var reader = new FileReader();
          reader.onload = function(e) {
            console.log(e.target.result);
            $("#profileImage").attr("src", e.target.result);
          }
          reader.readAsDataURL(event.currentTarget.files[0]);
        }
      }

      function buildURLs() {

        // Ideally I would be taking the value of downloadUrl from the _.map code block but how would I set this to an img # ???
        var imagePrefix = "https://listing-images-spacetrades.s3-us-west-2.amazonaws.com/";
        var img1url = imagePrefix + Meteor.userId() + "/" + Session.get("img1");

        Session.set("img1url", img1url);
      }

      readURL(this);
      buildURLs();

      // Layout of images on S3 = UserNameIDFolder/ListingFolder/ Images Go Here
      // Use downloadURL in the future
      var uploads = _.map(event.currentTarget.files, function(file) {
        var uploader = new Slingshot.Upload("listingImages");

        uploader.send(file, function(error, downloadUrl) {

          var url = downloadUrl;
          Session.set("url", url);
          if (error) {
            console.error("Error Uploading", uploader.xhr.response);
            alert(error);
          } else {}
        });
      });

    },
    'click .profileSettingsSubmit': function() {

      $.fn.extend({
        animateCss: function(animationName) {
          var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
          $(this).addClass('animated ' + animationName).one(animationEnd, function() {
            $(this).removeClass('animated ' + animationName);
          });
        }
      });

      var options = {
        photo: Session.get("img1url"),
        about: $(".profileSettingsAboutInput").val(),
        email: $(".profileSettingsEmailInput").val(),
        link: "PL"
      }

      Meteor.call("addProfileInfo", options);
      Router.go("/profile/" + Meteor.userId());

      animateCss("flash")
      sAlert.success("Saved");
    }
  });

}
