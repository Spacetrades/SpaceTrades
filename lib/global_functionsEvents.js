if (Meteor.isClient) {

  function catChoice(elem) {
    var search = $("." + elem).text();
    console.log(search);
    ListingSearch.search(search);
  }

  function getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
    }
  }

  function showPosition(position) {
    var lat = position.coords.latitude;
    var lng = position.coords.longitude;
  }

  // var geocoder;

  //   if (navigator.geolocation) {
  //     navigator.geolocation.getCurrentPosition(successFunction, errorFunction);
  // } 
  // //Get the latitude and the longitude;
  // function successFunction(position) {
  //     var lat = position.coords.latitude;
  //     var lng = position.coords.longitude;
  //     // codeLatLng(lat, lng)
  // }

  // function errorFunction(){
  //     alert("Geocoder failed");
  // }

  //   function initialize() {
  //     geocoder = new google.maps.Geocoder();



  //   }

  // function codeLatLng(lat, lng) {

  //   var latlng = new google.maps.LatLng(lat, lng);
  //   geocoder.geocode({'latLng': latlng}, function(results, status) {
  //     if (status == google.maps.GeocoderStatus.OK) {
  //     console.log(results)
  //       if (results[1]) {
  //        //formatted address
  //        alert(results[0].formatted_address)
  //       //find country name
  //            for (var i=0; i<results[0].address_components.length; i++) {
  //           for (var b=0;b<results[0].address_components[i].types.length;b++) {

  //           //there are different types that might hold a city admin_area_lvl_1 usually does in come cases looking for sublocality type will be more appropriate
  //               if (results[0].address_components[i].types[b] == "administrative_area_level_1") {
  //                   //this is the object you are looking for
  //                   city= results[0].address_components[i];
  //                   break;
  //               }
  //           }
  //       }
  //       //city data
  //       alert(city.short_name + " " + city.long_name)


  //       } else {
  //         alert("No results found");
  //       }
  //     } else {
  //       alert("Geocoder failed due to: " + status);
  //     }
  //   });
  // }

  function ipLocate() {

    HTTP.get("http://ipinfo.io", function(error, result) {
      var place = JSON.parse(result.content);
      // console.log(place);
      var city = place.city;
      var state = place.region;
      console.log(city, state);
    });

  }

  // Custom Functions
  // Add 'user_birthday' after facebook has reviewed app
  function fbLogin() {
    Meteor.loginWithFacebook({
      requestPermissions: ['public_profile', 'email', 'user_location']
    }, function(err) {
      if (err)
      // redirect to register if popup comes and user isn't on register
        Session.set('errorMessage', err.reason || 'Unknown Eror');
      console.log(Session.get('errorMessage'));
    });
  }

  function instLogin() {
    Meteor.loginWithInstagram(function(err, res) {
      if (err !== undefined) {
        console.log('success ' + res)
      } else {
        console.log('login failed ' + err)
      }
    });
  }

  function btnSearch() {
    search = $("#search").val();
    var options = {
      search: search
    }
    ListingSearch.search(search);
  }

  function navSearch() {
    search = $("#headerNavSearch").val();
    var options = {
      search: search
    }
    ListingSearch.search(search);
  }

}