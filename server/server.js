if (Meteor.isServer) {

  // Sum mixin
  _.mixin({
    sum: function(Object) {
      if (!$.isArray(Object) ||
        Object.length == 0) {
        return (0)
      }
      return (
        _.reduce(
          Object, function(Sum, Number) {
            return (Sum += Number)
          }))
    }
  })

  Number.prototype.starRound = function(x) {
    return (Math.round(this * (1 / x)) / (1 / x));
  };

  process.env.MAIL_URL = "smtp://postmaster@sandboxde84ff01a1c04de28f27e03ecec45a00.mailgun.org:49c4081bc210fdb4d41e2f37a69efcaa@smtp.mailgun.org:587";

  // New users receive a verification email
  // Accounts.config({'sendVerificationEmail': true});

  // Kadira
  Kadira.connect('vJ7Dq44oj6HuY8q2c', 'fd9872bc-e750-4a40-93e7-b326ccd1249b');
  // prerenderio.set('prerenderToken', '4jWuCKjUUuJRuJYWDnWB');

  SearchSource.defineSource('listing', function(searchText, options) {
    var options = {
      sort: {
        isoScore: -1
      },
      limit: 40
    };

    if (searchText) {
      var regExp = buildRegExp(searchText);

      var selectorTitle = {
        listing_title: regExp
      }

      var selectorBrand = {
        brand: regExp
      }

      var selectorPrice = {
        price: regExp
      }

      var selectorCategory = {
        category: regExp
      }

      var selectorUserName = {
        username: regExp
      }

      var selectorCity = {
        city: regExp
      }

      var selectorState = {
        state: regExp
      }

      console.log(options);

      var query = Listing.find({
        $or: [selectorTitle, selectorBrand, selectorPrice, selectorCategory, selectorUserName, selectorCity, selectorState]
      }).fetch();
      console.log(query);
      return query;
    }

    // TASK - Incorporate Autocomplete

    function buildRegExp(searchText) {
      var words = searchText.trim().split(/[ \-\:]+/);
      var exps = _.map(words, function(word) {
        return "(?=.*" + word + ")";
      });
      var fullExp = exps.join('') + '.+';
      return new RegExp(fullExp, "i");
    }

  });

  Accounts.onCreateUser(function(options, user, err) {

    // console.log(options, user, err);

    if (options.profile) {

      user.profile = options.profile;

      // Images
      var picturelrg = "http://graph.facebook.com/" + user.services.facebook.id + "/picture/?type=large";
      var picturesm = "http://graph.facebook.com/" + user.services.facebook.id + "/picture/?type=small";

      options.profile.picturelrg = picturelrg;
      options.profile.picturesm = picturesm;

      // Votes
      options.profile.upvotes = 0;
      options.profile.neutralvotes = 0;
      options.profile.downvotes = 0;

      options.profile.votes_score = 0;

      // Bought and Sold count
      options.profile.amountsold = 0;
      options.profile.amountbought = 0;

      // Rating Total
      options.profile.totalrating = 0;

      // Seller Rating
      options.profile.sell_totalrating = 0;

      options.profile.sell_friendlyrating = 0;
      options.profile.sell_friendlyratingArray = [];

      options.profile.sell_efficiencyrating = 0;
      options.profile.sell_efficiencyratingArray = [];

      options.profile.sell_negotiationrating = 0;
      options.profile.sell_negotiationratingArray = [];

      options.profile.sell_describedrating = 0;
      options.profile.sell_describedratingArray = [];


      // Buyer Rating
      options.profile.buy_totalrating = 0;

      options.profile.buy_friendlyrating = 0;
      options.profile.buy_friendlyratingArray = [];


      options.profile.buy_efficiencyrating = 0;
      options.profile.buy_efficiencyratingArray = [];


      options.profile.buy_negotiationrating = 0;
      options.profile.buy_negotiationratingArray = [];


      options.profile.buy_paymentrating = 0;
      options.profile.buy_paymentratingArray = [];

      // Number of Reviews (AKA Meetups)
      options.profile.reviewscount = 0;

      return user;
    }
  });

  //           //
  // Amazon S3 //
  //           //

  Slingshot.fileRestrictions("listingImages", {
    allowedFileTypes: ["image/png", "image/jpeg", "image/gif", "image/jpg"],
    maxSize: 10 * 1024 * 1024 // 10 MB
  });

  Slingshot.createDirective("listingImages", Slingshot.S3Storage, {
    bucket: "listing-images-spacetrades",
    region: "us-west-2",
    acl: "public-read",

    authorize: function() {
      if (!this.userId) {
        var message = "Please login in order to upload files";
        throw new Meteor.Error("Login is required", message);
      }

      return true;
    },

    key: function(file) {
      // Store file in directory of user name
      var user = Meteor.userId();
      return user + '/' + file.name;
    }
  });

}
