if (Meteor.isClient) {

	fbLogin = function() {
		Meteor.loginWithFacebook({
			requestPermissions: ['public_profile', 'email', 'user_location']
		}, function(err) {
			if (err)
			// redirect to register if popup comes and user isn't on register
				Session.set('errorMessage', err.reason || 'Unknown Eror');
			console.log(Session.get('errorMessage'));
		});
	}


	locate = function(){

        function ipLocate(whenDone) {
          var api = "http://ipinfo.io?callback=?";
          $.getJSON(api, {
              format: "jsonp"
            })
            .done(function(response) {
              var result = ""

              // show all the props returned
              for (var prop in response) {
                result += prop + ": " + response[prop] + "<br>";
              }

              var selectedResponse = {
                city: response.city,
                region: response.region,
                country: response.country,
                ip: response.ip,
                latLng: response.loc
              }
              console.log(selectedResponse);
              whenDone(selectedResponse);

              return selectedResponse
            });
        }

        // HACK: Async
        function ipDone(selectedResponse) {
          response = selectedResponse;
        }

        // Set response
        ipLocate(ipDone);
	}

	Template.ModalJoin.events({
		'click .modJoinFB-Btn ': function() {
		locate();
		fbLogin();
		}
	});

}