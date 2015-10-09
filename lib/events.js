if (Meteor.isClient) {

  function catChoice(elem) {
    var search = $("." + elem).text();
    console.log(search);
   //  var options = {
   //   search: search
   // }
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
  // console.log(lat, lng);
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


// Template.item.events({
//   'click .click-nav .js': function (e) {
//     $('.click-nav .js ul').slideToggle(10);
//     $('.clicker').toggleClass('active');
//     e.stopPropagation();
//     }
// });


function ipLocate() {

  HTTP.get("http://ipinfo.io", function (error, result) {
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
    requestPermissions: ['public_profile','email','user_location']
  }, function (err) {
    if (err)
  // redirect to register if popup comes and user isn't on register
      Session.set( 'errorMessage', err.reason || 'Unknown Eror' );
    console.log(Session.get( 'errorMessage' ));
  });
}

function instLogin() {
  Meteor.loginWithInstagram(function (err, res) {
    if (err !== undefined) {
      console.log( 'success ' + res )
    }
    else {
          console.log( 'login failed ' + err )
        }
  });
}

function btnSearch () {
 search = $( "#search" ).val();
 var options = {
  search: search
}
ListingSearch.search( search );
}

function navSearch () {
 search = $( "#headerNavSearch" ).val();
 var options = {
  search: search
}
ListingSearch.search( search );
}

// Template.chatRight.events({
//   'click .chatSendButton' : function () {

//     var options = {
//       message: $( ".chatText" ).val(),
//       sender: Meteor.userId(),
//       receiver: "tqKrESbdw5Qe6SapN",
//       // Conversation key will be generated dynamically and used for all conversation messages
//       conversation: "rename"
//     };

//     Meteor.call('sendMessage', options)

//     // Clears message input
//     $( ".chatText" ).val('');
//   }
// });

// Template.home.events({
//   'click .homeLoadMore': function () {
//     // Meteor.call("homeShowMore");
//     Meteor.subscribe('homeShowMore');
//   }
// })

// Contact - Email
// Template.contact.events({
//   'click .contactButton' : function () {
//     var subject = $( "#contactname" ).val();
//     var text = $( ".message" ).val();
//     sAlert.success( 'Message sent successfully' );
//     $( ".contactform" ).hide();
//     $( ".sent" ).css( "display", "block" );

//     Meteor.call('sendEmail',
//       'nchackerian@gmail.com',
//       'contact@spacetrades.com',
//       subject,
//       text
//       );
//   }
// });

// Template.UserProfile.events({
//   'load .profileUserImg': function (event) {
//     $( ".spin" ).hide();
//   },
//   'click .click-nav .js': function (e) {
//     $('.click-nav .js ul').slideToggle(200);
//     $('.clicker').toggleClass('active');
//     e.stopPropagation();
//   }
// });

// Template.UserProfileSettings.events({
//   'click .profileSettingsSubmit': function () {

//     // TASK -Slingshot upload to the server, get url and pass as new profile pic
//     var options = {
//       photo: "PL",
//       about: $( ".profileSettingsAboutInput").val(),
//       email: $( ".profileSettingsEmailInput").val(),
//       location: $( ".profileSettingsLocationInput" ).val(),
//       link: "PL"
//     }

//     Meteor.call("addProfileInfo", options);
//     sAlert.success("Saved new Profile Settings");
//   }
// });

// Help Center Help item Highlighting
// Template.HelpCenterNav.events({
//   'click .helpitem': function (event) {
//     $( ".helpitem" ).removeClass( "helpNavSelected" );
//     $( event.currentTarget ).addClass( "helpNavSelected" );
//   },
//   'click .helplogo': function (){
//     $( ".helpitem" ).removeClass( "helpNavSelected" );
//   }
// });

// Profile Center Help item Highlighting
// Template.ProfileCenterNav.events({
//   'click .helpitem': function (event) {
//     $( ".helpitem" ).removeClass( "helpNavSelected" );
//     $( event.currentTarget ).addClass( "helpNavSelected" );
//   }
// });


// Register - FB Account Creation
// Template.register.events({
//   'click .facebook': function (e) {
//     fbLogin();
//     getLocation();
//     ipLocate();
//     Session.set( 'loggedin', true );
//   },
//   'click .login': function (e) {
//     // TASK - If account exists login else redirect to register and do not open register prompt
//     fbLogin();
//     Session.set( 'loggedin', true );
//   },
//   'click .instagram': function (e) {
//     instLogin();
//     Session.set( 'loggedin', true );
//   }
// });

// Home Header Pre - FB login
// Template.homeheaderpre.events({
//   'click .login' : function (e) {
//     fbLogin();
//     Session.set( 'loggedin', true );
//   },

// // Apparel
// 'click .catShirts': function () {
//   catChoice( "catShirts" );
// },
// 'click .catHoodies': function () {
//   catChoice( "catHoodies" );
// },
// 'click .catPants': function () {
//   catChoice( "catPants" );
// },
// 'click .catJacket': function () {
//   catChoice( "catJacket" );
// },
// 'click .catJeans': function () {
//   catChoice( "catJeans" );
// },
// 'click .catShorts': function () {
//   catChoice( "catShorts" );
// },

// //Electronics
// 'click .catPhones': function () {
//   catChoice( "catPhones" );
// },
// 'click .catTablets': function () {
//   catChoice( "catTablets" );
// },
// 'click .catComputers': function () {
//   catChoice( "catComputers" );
// },
// 'click .catTvs': function () {
//   catChoice( "catTvs" );
// },
// 'click .catHeadphones': function () {
//   catChoice( "catHeadphones" );
// },

// // Shoes
// 'click .catShoes': function () {
//   catChoice( "catShoes" );
// },
// 'click .catAsics': function () {
//   catChoice( "catAsics" );
// },
// 'click .catAddidas': function () {
//   catChoice( "catAddidas" );
// },
// 'click .catConverse': function () {
//   catChoice( "catConverse" );
// },
// 'click .catNike': function () {
//   catChoice( "catNike" );
// },
// 'click .catJordan': function () {
//   catChoice( "catJordan" );
// }

// });

// Header Search Post - FB Login
// Template.headersearchpre.events({
//   'click .login' : function (e) {
//     fbLogin();
//     Session.set( 'loggedin', true );
//   } 
// });

// Header Pre - FB Login
// Template.headerpre.events({
//   'click .login' : function (e) {
//     fbLogin();
//     Session.set( 'loggedin', true );
//   } 
// });

// Header Search Post - Search
// Fix Broken dropdowns
// Template.headersearchpost.events({
//   'click .headerNavSearchButton' : function (search) {
//     btnSearch();
//   },
//   'click .navGlobal' : function (options) {
//     var state = $( ".navGlobal > .headerDropDownNav" ).is( ":visible" );

//     if ( state === false) {
//      $( ".fa" ).removeClass( "black" );
//      $( ".fa-bars" ).addClass( "black" );
//      $( ".navGeneral > .headerDropDownNav" ).css({ "display":"none" });
//      $( ".navGlobal > .headerDropDownNav" ).css({ "display":"block" });
//    }
//     if ( state === true ) {
//     $( ".fa-bars" ).removeClass( "black" );  
//     $( ".navGlobal > .headerDropDownNav" ).css({ "display":"none" });
//    }
//   },
//   'click .navGeneral' : function (options) {
//     var state = $( ".navGeneral > .headerDropDownNav" ).is( ":visible" );

//     if ( state === false) {
//      $( ".fa" ).removeClass( "black" );
//      $( ".fa-caret-square-o-down" ).addClass( "black" ); 
//      $( ".navGlobal > .headerDropDownNav" ).css({ "display":"none" });
//      $( ".navGeneral > .headerDropDownNav" ).css({ "display":"block" });
//    }
//     if ( state === true ) {
//     $( ".fa-caret-square-o-down" ).removeClass( "black" );   
//     $( ".navGeneral > .headerDropDownNav" ).css({ "display":"none" });
//    }
//   }
// });
// Header Search Pre - Search 

// TASK - Remove some of the dropdown items that aren't in the post templates
// Template.headersearchpre.events({
// 'hover .hoverDropDown, ': function () {

// },  
// 'click .headerNavSearchButton' : function (options) {
//     btnSearch();
// },
// 'click .catShirts': function () {
//   catChoice( "catShirts" );
// },
// 'click .catHoodies': function () {
//   catChoice( "catHoodies" );
// },
// 'click .catPants': function () {
//   catChoice( "catPants" );
// },
// 'click .catJacket': function () {
//   catChoice( "catJacket" );
// },
// 'click .catJeans': function () {
//   catChoice( "catJeans" );
// },
// 'click .catShorts': function () {
//   catChoice( "catShorts" );
// },

// //Electronics
// 'click .catPhones': function () {
//   catChoice( "catPhones" );
// },
// 'click .catTablets': function () {
//   catChoice( "catTablets" );
// },
// 'click .catComputers': function () {
//   catChoice( "catComputers" );
// },
// 'click .catTvs': function () {
//   catChoice( "catTvs" );
// },
// 'click .catHeadphones': function () {
//   catChoice( "catHeadphones" );
// },

// // Shoes
// // 
// 'click .catShoes': function () {
//   catChoice( "catShoes" );
// },
// 'click .catAsics': function () {
//   catChoice( "catAsics" );
// },
// 'click .catAddidas': function () {
//   catChoice( "catAddidas" );
// },
// 'click .catConverse': function () {
//   catChoice( "catConverse" );
// },
// 'click .catNike': function () {
//   catChoice( "catNike" );
// },
// 'click .catJordan': function () {
//   catChoice( "catJordan" );
// }
// });

// Search Page - Search
// Template.searchpage.events({
//   'click .homesearchbtn' : function (options) {
//     // Get the selected elements of category, turn into array with names of selected items
//     var Categories = [];
//     var Conditions = [];
//     var Styles = [];
//     var Locations = [];

//     var options = {};
//     $(".searchRefineCategories li input").each( function () {
//       var selectedCat = $(this).is(":checked");
//       var nameCat = this.val
//       Categories.push(selectedCat)
//       // Object.defineProperty(
//       //   options, 'nameCat', {
//       //     value: 'selectedCat'
//       //   });
//     });

//     $(".searchRefineCondition li input").each( function () {
//       var selectedCat = $(this).is(":checked");
//       var nameCat = this.val
//       Conditions.push(selectedCat)
//     });

//     $(".searchRefineLocation li input").each( function () {
//       var selectedCat = $(this).is(":checked");
//       var nameCat = this.val
//       Locations.push(selectedCat)
//     });

//   options = {
//     Apparel: Categories[0],
//     Electronics: Categories[1],
//     Shoes: Categories[2],
//     Other: Categories[3],
//     New: Conditions[0],
//     'Like New': Conditions[1],
//     Used: Conditions[2],
//     'Needs Repair': Conditions[3],
//     SizeStart: $( ".listsize1 option:selected" ).val(),
//     SizeEnd: $( ".listsize2 option:selected" ).val(),
//     Color: $( "#colorpicker" ).val(),
//     PriceStart: $( ".listprice" ).val(),
//     PriceEnd: $( ".listprice:eq(1)" ).val(),
//     Trades: $( "input[type='radio']:checked" ).val(),
//     SellerRating: 'red'
//   }
//   // Meteor.call("searchFilter", options);

//   console.log(options);

//     btnSearch();
//   }

// });

// Template.headerpost.events({ 
//   'click .logout' : function (e) {
//     Meteor.logout();
//   },
//   'click .headerNavSearchButton': function (e) {
//     navSearch();
//   },
//   'click .navGlobal' : function (options) {
//     var state = $(".navGlobal > .headerDropDownNav").is( ":visible" );

//     if ( state === false) {
//      $( ".fa" ).removeClass( "black" );
//      $( ".fa-bars" ).addClass( "black" );
//      $( ".navGeneral > .headerDropDownNav" ).css({ "display":"none" });
//      $( ".navGlobal > .headerDropDownNav" ).css({ "display":"block" });
//    }

//     if ( state === true ) {
//     $( ".fa-bars" ).removeClass( "black" );  
//     $(".navGlobal > .headerDropDownNav").css({ "display":"none" });
//   }
// },
//   'click .navNotifications' : function (options) {
//     var state = $(".navNotifications > .headerDropDownNav").is( ":visible" );

//     if ( state === false) {
//      $( ".fa" ).removeClass( "black" );
//      $( ".fa-globe" ).addClass( "black" ); 
//      $(".navNotifications > .headerDropDownNav").css({ "display":"none" });
//      $(".navNotifications > .headerDropDownNav").css({ "display":"block" });
//    }

//     if ( state === true ) {
//     $( ".fa-globe" ).removeClass( "black" );   
//     $(".navNotifications > .headerDropDownNav").css({ "display":"none" });
//    }
//  },
//   'click .navGeneral' : function (options) {
//     var state = $(".navGeneral > .headerDropDownNav").is( ":visible" );

//     if ( state === false) {
//      $( ".fa" ).removeClass( "black" );
//      $( ".fa-caret-square-o-down" ).addClass( "black" ); 
//      $(".navGlobal > .headerDropDownNav").css({ "display":"none" });
//      $(".navGeneral > .headerDropDownNav").css({ "display":"block" });
//    }

//     if ( state === true ) {
//     $( ".fa-caret-square-o-down" ).removeClass( "black" );   
//     $(".navGeneral > .headerDropDownNav").css({ "display":"none" });
//    }
//  },
//    'click .logout' : function (e) {
//     Meteor.logout();
//   },
//   'click .homesearchbtn' : function (e) {
//     btnSearch();
//   },
//   'click .catApparel' : function (e) {
//     catChoice("catApparel");
//   },
//   'click .catElectronics' : function (e) {
//     catChoice("catElectronics");
//   },
//   'click .catShoes' : function (e) {
//     catChoice("catShoes");
//   },
//   'click .catOther' : function (e) {
//     catChoice("catOther");
//   }
// });


// Home Header Post - Search
// Template.homeheaderpost.events({
//  'click .navGlobal' : function (options) {
//     var state = $(".navGlobal > .headerDropDownNav").is( ":visible" );

//     if ( state === false) {
//      $( ".fa" ).removeClass( "black" );
//      $( ".fa-bars" ).addClass( "black" );
//      $( ".navGeneral > .headerDropDownNav" ).css({ "display":"none" });
//      $( ".navGlobal > .headerDropDownNav" ).css({ "display":"block" });
//    }

//     if ( state === true ) {
//     $( ".fa-bars" ).removeClass( "black" );  
//     $(".navGlobal > .headerDropDownNav").css({ "display":"none" });
//   }
// },
//   'click .navNotifications' : function (options) {
//     var state = $(".navNotifications > .headerDropDownNav").is( ":visible" );

//     if ( state === false) {
//      $( ".fa" ).removeClass( "black" );
//      $( ".fa-globe" ).addClass( "black" ); 
//      $(".navNotifications > .headerDropDownNav").css({ "display":"none" });
//      $(".navNotifications > .headerDropDownNav").css({ "display":"block" });
//    }

//     if ( state === true ) {
//     $( ".fa-globe" ).removeClass( "black" );   
//     $(".navNotifications > .headerDropDownNav").css({ "display":"none" });
//    }
//  },
//   'click .navGeneral' : function (options) {
//     var state = $(".navGeneral > .headerDropDownNav").is( ":visible" );

//     if ( state === false) {
//      $( ".fa" ).removeClass( "black" );
//      $( ".fa-caret-square-o-down" ).addClass( "black" ); 
//      $(".navGlobal > .headerDropDownNav").css({ "display":"none" });
//      $(".navGeneral > .headerDropDownNav").css({ "display":"block" });
//    }

//     if ( state === true ) {
//     $( ".fa-caret-square-o-down" ).removeClass( "black" );   
//     $(".navGeneral > .headerDropDownNav").css({ "display":"none" });
//    }

//   }, 
//   'click .logout' : function (e) {
//     Meteor.logout();
//   },
//   'click .homesearchbtn' : function (e) {
//     btnSearch();
//   },
//   'click .catApparel' : function (e) {
//     catChoice("catApparel");
//   },
//   'click .catElectronics' : function (e) {
//     catChoice("catElectronics");
//   },
//   'click .catShoes' : function (e) {
//     catChoice("catShoes");
//   },
//   'click .catOther' : function (e) {
//     catChoice("catOther");
//   }
// });


  // Template.ModalOfferRequest.events({
  //   'click .offerRequestBtn': function (options) {
  //     var options = {
  //       listing_title: $( ".offerRequestListingName" ).text(),
  //       img: $( ".offerRequestImg" ).attr( "src" ),
  //       price: $( ".offerRequestPriceOriginal" ).text(),
  //       offerprice: $( ".listprice" ).val(),
  //       date: $( "#datepicker" ).val(),
  //       location: $( "#pac-input" ).val(),
  //       listingId: $( ".hidden" ).text(),
  //       lat: Session.get("offerlat"),
  //       lng: Session.get("offerlng"),
  //       creator_id: Meteor.userId(),
  //       status: "Pending"
  //     }

  //     function OfferValidate() {
  //       var status = true;
  //       var keys = Object.keys( options );
  //       // console.log(options);

  //       for ( i=0; i < keys.length; i++ ) {
  //         if ( !options[keys[i]] || options[keys[i]] == "" ) {
  //           sAlert.error( keys[i] + " field is not properly set");
  //           status = false;
  //         }
  //       }
  //       return status;
  //     }

  //     if ( OfferValidate() ) {
  //       Meteor.call('addOffer', options);
  //       Router.go("/");

  //       // setTimeout(function(){
  //          sweetAlert({   
  //           title: "Offer Created",
  //           text: "<span style='font-weight: bold;'>Offer:</span> " + "<span style='color: #f8504b'>" +  options.listing_title + "</span>" + "<span> Created </span>",
  //           html: "true",
  //           type: "success",
  //           timer: 3000,
  //           showConfirmButton: false
  //       });
  //       // }, 1000);

  //     };
  //   }}); 

}