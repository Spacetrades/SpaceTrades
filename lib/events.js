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

Template.Messages.events({
  'click .chatSendButton' : function () {


    var options = {
      message: $( ".chatText" ).val(),
      username: Meteor.user().profile.name,
      conversation: "Other persons id"
    };

    Meteor.call('sendMessage', options)
    $( ".chatText" ).val('');
  }
});

Template.home.events({
  'click .homeLoadMore': function () {
    // Meteor.call("homeShowMore");
    Meteor.subscribe('homeShowMore');
  }
})

// Contact - Email
Template.contact.events({
  'click .add' : function () {
    var subject = $( "#contactname" ).val();
    var text = $( ".message" ).val();
    sAlert.success( 'Message sent successfully' );
    $( ".contactform" ).hide();
    $( ".sent" ).css( "display", "block" );

    Meteor.call('sendEmail',
      'nchackerian@gmail.com',
      'contact@spacetrades.com',
      subject,
      text
      );
  }
});

Template.UserProfile.events({
  'load .profileUserImg': function (event) {
    $( ".spin" ).hide();
  }
});

// Help Center Help item Highlighting
Template.HelpCenterNav.events({
  'click .helpitem': function (event) {
    $( ".helpitem" ).removeClass( "helpNavSelected" );
    $( event.currentTarget ).addClass( "helpNavSelected" );
  },
  'click .helplogo': function (){
    $( ".helpitem" ).removeClass( "helpNavSelected" );
  }
});

// Profile Center Help item Highlighting
Template.ProfileCenterNav.events({
  'click .helpitem': function (event) {
    $( ".helpitem" ).removeClass( "helpNavSelected" );
    $( event.currentTarget ).addClass( "helpNavSelected" );
  }
});


// Register - FB Account Creation
Template.register.events({
  'click .facebook': function (e) {
    fbLogin();
    getLocation();
    ipLocate();
    Session.set( 'loggedin', true );
  },
  'click .login': function (e) {
    fbLogin();
    Session.set( 'loggedin', true );
  },
  'click .instagram': function (e) {
    instLogin();
    Session.set( 'loggedin', true );
  }
});

// Home Header Pre - FB login
Template.homeheaderpre.events({
  'click .login' : function (e) {
    fbLogin();
    Session.set( 'loggedin', true );
  },

// Apparel
'click .catShirts': function () {
  catChoice( "catShirts" );
},
'click .catHoodies': function () {
  catChoice( "catHoodies" );
},
'click .catPants': function () {
  catChoice( "catPants" );
},
'click .catJacket': function () {
  catChoice( "catJacket" );
},
'click .catJeans': function () {
  catChoice( "catJeans" );
},
'click .catShorts': function () {
  catChoice( "catShorts" );
},

//Electronics
'click .catPhones': function () {
  catChoice( "catPhones" );
},
'click .catTablets': function () {
  catChoice( "catTablets" );
},
'click .catComputers': function () {
  catChoice( "catComputers" );
},
'click .catTvs': function () {
  catChoice( "catTvs" );
},
'click .catHeadphones': function () {
  catChoice( "catHeadphones" );
},

// Shoes
'click .catShoes': function () {
  catChoice( "catShoes" );
},
'click .catAsics': function () {
  catChoice( "catAsics" );
},
'click .catAddidas': function () {
  catChoice( "catAddidas" );
},
'click .catConverse': function () {
  catChoice( "catConverse" );
},
'click .catNike': function () {
  catChoice( "catNike" );
},
'click .catJordan': function () {
  catChoice( "catJordan" );
}

});

// Header Search Post - FB Login
Template.headersearchpre.events({
  'click .login' : function (e) {
    fbLogin();
    Session.set( ' loggedin', true );
  } 
});

// Header Pre - FB Login
Template.headerpre.events({
  'click .login' : function (e) {
    fbLogin();
    Session.set( 'loggedin', true );
  } 
});

// Header Search Post - Search
// Fix Broken dropdowns
Template.headersearchpost.events({
  'click .headerNavSearchButton' : function (search) {
    btnSearch();
  },
  'click .navGlobal' : function (options) {
    var state = $( ".navGlobal > .headerDropDownNav" ).is( ":visible" );

    if ( state === false) {
     $( ".fa" ).removeClass( "black" );
     $( ".fa-bars" ).addClass( "black" );
     $( ".navGeneral > .headerDropDownNav" ).css({ "display":"none" });
     $( ".navGlobal > .headerDropDownNav" ).css({ "display":"block" });
   }
    if ( state === true ) {
    $( ".fa-bars" ).removeClass( "black" );  
    $( ".navGlobal > .headerDropDownNav" ).css({ "display":"none" });
   }
  },
  'click .navGeneral' : function (options) {
    var state = $( ".navGeneral > .headerDropDownNav" ).is( ":visible" );

    if ( state === false) {
     $( ".fa" ).removeClass( "black" );
     $( ".fa-caret-square-o-down" ).addClass( "black" ); 
     $( ".navGlobal > .headerDropDownNav" ).css({ "display":"none" });
     $( ".navGeneral > .headerDropDownNav" ).css({ "display":"block" });
   }
    if ( state === true ) {
    $( ".fa-caret-square-o-down" ).removeClass( "black" );   
    $( ".navGeneral > .headerDropDownNav" ).css({ "display":"none" });
   }
  }
});
// Header Search Pre - Search 

// TASK - Remove some of the dropdown items that aren't in the post templates
Template.headersearchpre.events({
'hover .hoverDropDown, ': function () {

},  
'click .headerNavSearchButton' : function (options) {
    btnSearch();
},
'click .catShirts': function () {
  catChoice( "catShirts" );
},
'click .catHoodies': function () {
  catChoice( "catHoodies" );
},
'click .catPants': function () {
  catChoice( "catPants" );
},
'click .catJacket': function () {
  catChoice( "catJacket" );
},
'click .catJeans': function () {
  catChoice( "catJeans" );
},
'click .catShorts': function () {
  catChoice( "catShorts" );
},

//Electronics
'click .catPhones': function () {
  catChoice( "catPhones" );
},
'click .catTablets': function () {
  catChoice( "catTablets" );
},
'click .catComputers': function () {
  catChoice( "catComputers" );
},
'click .catTvs': function () {
  catChoice( "catTvs" );
},
'click .catHeadphones': function () {
  catChoice( "catHeadphones" );
},

// Shoes
// 
'click .catShoes': function () {
  catChoice( "catShoes" );
},
'click .catAsics': function () {
  catChoice( "catAsics" );
},
'click .catAddidas': function () {
  catChoice( "catAddidas" );
},
'click .catConverse': function () {
  catChoice( "catConverse" );
},
'click .catNike': function () {
  catChoice( "catNike" );
},
'click .catJordan': function () {
  catChoice( "catJordan" );
}
});

// Search Page - Search
Template.searchpage.events({
  'click .homesearchbtn' : function (options) {
    // Get the selected elements of category, turn into array with names of selected items
    var Categories = [];
    var Conditions = [];
    var Styles = [];
    var Locations = [];

    var options = {};
    $(".searchRefineCategories li input").each( function () {
      var selectedCat = $(this).is(":checked");
      var nameCat = this.val
      Categories.push(selectedCat)
      // Object.defineProperty(
      //   options, 'nameCat', {
      //     value: 'selectedCat'
      //   });
    });

    $(".searchRefineCondition li input").each( function () {
      var selectedCat = $(this).is(":checked");
      var nameCat = this.val
      Conditions.push(selectedCat)
    });

    $(".searchRefineLocation li input").each( function () {
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
    SizeStart: $( ".listsize1 option:selected" ).val(),
    SizeEnd: $( ".listsize2 option:selected" ).val(),
    Color: $( "#colorpicker" ).val(),
    PriceStart: $( ".listprice" ).val(),
    PriceEnd: $( ".listprice:eq(1)" ).val(),
    Trades: $( "input[type='radio']:checked" ).val(),
    SellerRating: 'red'
  }
  // Meteor.call("searchFilter", options);

  console.log(options);

    btnSearch();
  }

});

// Logout 
Template.headerpost.events({ 
  'click .logout' : function (e) {
    Meteor.logout();
  },
  'click .headerNavSearchButton': function (e) {
    navSearch();
  },
  'click .navGlobal' : function (options) {
    var state = $(".navGlobal > .headerDropDownNav").is( ":visible" );

    if ( state === false) {
     $( ".fa" ).removeClass( "black" );
     $( ".fa-bars" ).addClass( "black" );
     $( ".navGeneral > .headerDropDownNav" ).css({ "display":"none" });
     $( ".navGlobal > .headerDropDownNav" ).css({ "display":"block" });
   }

    if ( state === true ) {
    $( ".fa-bars" ).removeClass( "black" );  
    $(".navGlobal > .headerDropDownNav").css({ "display":"none" });
  }
},
  'click .navGeneral' : function (options) {
    var state = $(".navGeneral > .headerDropDownNav").is( ":visible" );

    if ( state === false) {
     $( ".fa" ).removeClass( "black" );
     $( ".fa-caret-square-o-down" ).addClass( "black" ); 
     $(".navGlobal > .headerDropDownNav").css({ "display":"none" });
     $(".navGeneral > .headerDropDownNav").css({ "display":"block" });
   }

    if ( state === true ) {
    $( ".fa-caret-square-o-down" ).removeClass( "black" );   
    $(".navGeneral > .headerDropDownNav").css({ "display":"none" });
   }
 },
   'click .logout' : function (e) {
    Meteor.logout();
  },
  'click .homesearchbtn' : function (e) {
    btnSearch();
  },
  'click .catApparel' : function (e) {
    catChoice("catApparel");
  },
  'click .catElectronics' : function (e) {
    catChoice("catElectronics");
  },
  'click .catShoes' : function (e) {
    catChoice("catShoes");
  },
  'click .catOther' : function (e) {
    catChoice("catOther");
  }
});


// Home Header Post - Search
Template.homeheaderpost.events({
 'click .navGlobal' : function (options) {
    var state = $(".navGlobal > .headerDropDownNav").is( ":visible" );

    if ( state === false) {
     $( ".fa" ).removeClass( "black" );
     $( ".fa-bars" ).addClass( "black" );
     $( ".navGeneral > .headerDropDownNav" ).css({ "display":"none" });
     $( ".navGlobal > .headerDropDownNav" ).css({ "display":"block" });
   }

   // $( ".navGeneral, .headerDropDownNav" ).mouseleave( function () {
   //    $( ".navGeneral, .headerDropDownNav" ).click( function () {
   //      console.log( "Out" );
   //    });
   //  });

    if ( state === true ) {
    $( ".fa-bars" ).removeClass( "black" );  
    $(".navGlobal > .headerDropDownNav").css({ "display":"none" });
  }
},
  'click .navGeneral' : function (options) {
    var state = $(".navGeneral > .headerDropDownNav").is( ":visible" );

    if ( state === false) {
     $( ".fa" ).removeClass( "black" );
     $( ".fa-caret-square-o-down" ).addClass( "black" ); 
     $(".navGlobal > .headerDropDownNav").css({ "display":"none" });
     $(".navGeneral > .headerDropDownNav").css({ "display":"block" });
   }

    if ( state === true ) {
    $( ".fa-caret-square-o-down" ).removeClass( "black" );   
    $(".navGeneral > .headerDropDownNav").css({ "display":"none" });
   }

  }, 
  'click .logout' : function (e) {
    Meteor.logout();
  },
  'click .homesearchbtn' : function (e) {
    btnSearch();
  },
  'click .catApparel' : function (e) {
    catChoice("catApparel");
  },
  'click .catElectronics' : function (e) {
    catChoice("catElectronics");
  },
  'click .catShoes' : function (e) {
    catChoice("catShoes");
  },
  'click .catOther' : function (e) {
    catChoice("catOther");
  }
});

    Template.addlisting.events({
      'click .add' : function (options) {
        var options = {
          creator_id: Meteor.userId(),
          facebook_id: Meteor.user().profile.messenger,
          listing_title: $( ".listtitle" ).val(),
          category: $( ".listcategory option:selected" ).val(),
          type: $ ( ".listtype option:selected" ).val(),
          brand: $( ".listbrand" ).val(),
          username: Meteor.user().profile.name,
          quantity: $( ".listquantity option:selected" ).val(),
          price: $( ".listprice" ).val(),
          city: $( ".listcity option:selected" ).val(),
          state: $( ".liststate option:selected" ).val(),
          trade: $( "input[type='radio']:checked" ).val(),
          size: $( ".listsize option:selected" ).val() || $( ".listcapacity option:selected" ).val(),
          condition: $( ".condition option:selected" ).val(),
          color: $( "#colorpicker" ).val(),
          description: $( ".listdescription" ).val(),
          lat: Session.get("offerlatlist"),
          lng: Session.get("offerlnglist"),
          img1: Session.get("img1url"),
          img2: Session.get("img2url"),
          img3: Session.get("img3url")
        }

        function addListingValidate() {
          var status = true;
          var keys = Object.keys( options );
          keys = _.without(keys,'img2', 'img3');

          for ( i=0; i < keys.length; i++ ) {
            if ( !options[keys[i]] || options[keys[i]] == "" ) {
              sAlert.error(  keys[i] + " is not properly set" );
              status = false;
            }
          }

          var color = options.color;

          Meteor.call( 'colorName', color, function(err, result) {
            if (!err) {
              options.color = result
            }
          });

          return status;
        }

        function successMessage() {
         Router.go("/");
         sweetAlert({   
          title: "Listing Created",
          text: "<span style='font-weight: bold;'>Listing:</span> " + "<span style='color: #f8504b'>" +  options.listing_title + "</span>" + "<span> Created </span>",
          html: "true",
          type: "success",
          timer: 3000,
          showConfirmButton: false
        });
       }

        if (addListingValidate()) {
          successMessage();
          Meteor.call( 'addListing', options );
        }

      },
      'change .liststate' : function (event) {
        var places = {
            // 'Alabama': ['Birmingham', 'Montgomery', 'Mobile', 'Huntsville', 'Tuscaloosa', 'Hoover', 'Dothan', 'Decantur', 'Auburn', 'Madison'],
            // 'Alaska': ['Anchorage', 'Fairbanks', 'Juneau', 'Knik-Fairview', 'College'],
            // 'Arizona': ['Pheonix', 'Tucson', 'Mesa', 'Chandler', 'Gilbert', 'Glendale', 'Scottsdale', 'Tempe', 'Peoria', 'Suprise'], 
            // 'Arkansas': ['Little Rock', 'Fort Smith', 'Fayetville', 'Springdale', 'Jonesboro', 'North Little Rock', 'Conway', 'Rogers', 'Pine Bluff', 'Bentonville'], 
            // 'California': ['Los Angeles', 'San Diego', 'San Jose', 'San Francisco', 'Fresno', 'Sacremento', 'Long Beach', 'Oakland', 'Bakersville', 'Anaheim'], 
            // 'Colorado': ['Denver', 'Colorado Springs', 'Aurora', 'Fort Collins', 'Lakewood', 'Thornton', 'Puebla', 'Arvada', 'Westminster', 'Centennial'], 
            // 'Connecticut': ['Bridgeport', 'New Haven', 'Hartford', 'Stamford', 'North Stamford', 'Waterbury', 'Norwalk', 'East Norwalk', 'Danbury', 'New Britain'], 
            // 'Delaware': ['Wilmington', 'Dover', 'Newark', 'Bear', 'Middleton', 'Brookside', 'Glasgow', 'Hockessin', 'Pike Creek Valley'], 
            // 'Florida': ['Jacksonville', 'Miami', 'Tampa', 'Saint Petersburg', 'Orlando', 'Hialeah', 'Talahassee', 'Fort Lauderdale', 'Port Saint Lucie', 'Pembroke Pines'], 
            // 'Georgia': ['Atlanta', 'Columbus', 'Savannah', 'Athens', 'Sandy Springs', 'Macon', 'Roswell', 'Albany', 'Johns Creek', 'Warner Robins'], 
            // 'Hawaii': ['Honolulu', 'Pearl City', 'Hilo', 'Kailua', 'Waipahu', 'Kāne‘ohe', 'Mililani Town', 'Kahului','`Ewa Gentry', 'Kihei'], 
            // 'Idaho': ['Boise', 'Nampa', 'Meridian', 'Idaho Falls', 'Pocatello', 'Caldwell', "Coeur d'Alene",'Twin Falls', 'Lewiston', 'Lewiston Orchards'], 
            // 'Illinois': ['Chicago', 'Aurora', 'Rockford', 'Joliet', 'Naperville', 'Springfield', 'Peoria', 'North Peoria', 'Elgin', 'Waukegan'], 
            // 'Indiana': ['Indianapolis', 'Fort Wayne', 'Evansville', 'South Bend', 'Hammond', 'Bloomington', 'Gary', 'Carmel', 'Fishers', 'Muncie'], 
            // 'Iowa': ['Des Moines', 'Cedar Rapids', 'Davenport', 'Sioux City', 'Waterloo', 'Iowa City', 'Council Bluffs', 'Ames', 'Dubuque', 'West Des Moines'], 
            // 'Kansas': ['Wichita', 'Overland Park', 'Kansas City', 'Topeka', 'Olathe', 'Lawrence', 'Shawnee', 'Manhattan', 'Lenexa','Salina'], 
            // 'Kentucky': ['Lexington-Fayetville', 'Meads', 'Ironville', 'Louisville', 'Lexington', 'Bowling Green', 'Owensboro', 'Covington', 'Hopkinsville', 'Richmond'], 
            // 'Louisiana': ['New Orleans', 'Baton Rouge', 'Shrevport', 'Metairie Terrace', 'Metairie', 'Lafayette','Lake Charles','Kenner','Bossier City','Monroe'], 
            // 'Maine': ['Portland','Lewiston', 'Bangor', 'West Scarborough', 'South Portland', 'South Portland Gardens', 'Auburn', 'Biddeford', 'Augusta', 'Saco'], 
            // 'Maryland': ['Baltimore', 'Columbia', 'Germantown', 'Silver Spring', 'Waldorf', 'Glen Burnie', 'Ellicott City', 'Frederick', 'Dundalk', 'Rockville'], 
            // 'Massachusetts': ['Boston', 'South Boston', 'Worcester','Springfield','Lowell','Cambridge','New Bedford','Brockton','Quincy','Lynn'], 
            // 'Michigan': ['Detroit', 'Grand Rapids', 'Warren', 'Sterling Heights', 'Lansing', 'Ann Arbor', 'Flint', 'Charter Township of Clinton', 'Dearborn', 'Livonia'], 
            // 'Minnesota': ['Minneapolis', 'Saint Paul', 'Rochester', 'Duluth', 'Bloomington', 'Brooklyn Park', 'Plymouth', 'Saint Cloud', 'Eagan', 'West Coon Rapids'], 
            // 'Mississippi': ['Jackson', 'West Gulfport', 'Gulfport', 'Southahven', 'Hattiesburg', 'Biloxi', 'Meridian', 'Tupelo', 'Greenville', 'Olive Branch'], 
            // 'Missouri': ['Kansas City', 'St Louis', 'Springfield', 'Independence', 'East Independence', 'Columbia', "Lee's Summit", "O'Fallon", 'St. Joseph', 'St Charles'], 
            // 'Montana': ['Billings', 'Missoula', 'Great Falls', 'Bozeman', 'Butte', 'Butte-Silver Bow', 'Helena', 'Kalispell', 'Anaconda', 'Havre'], 
            // 'Nebraska': ['Omaha', 'Lincoln', 'Bellevue', 'Grand Island', 'Kearney', 'Fremont', 'Hastings', 'North Platte', 'Norfolk', 'Columbus'], 
            // 'Nevada': ['Las Vegas', 'Henderson', 'Reno', 'Paradise', 'North Las Vegas', 'Sunrise Manor', 'Spring Valley', 'Enterprise', 'Sparks', 'Carson City'], 
            // 'New Hampshire': ['Manchester', 'Nashua', 'Concord', 'East Concord', 'Derry Village', 'Dover', 'Rochester', 'Salem', 'Merrimack', 'Keene'], 
            // 'New Jersey': ['Newark', 'Jersey City', 'Paterson', 'Elizabeth', 'Edison', 'Toms River', 'Trenton', 'Clifton', 'Camden', 'Cherry Hill'], 
            // 'New Mexico': ['Albuquerque', 'Las Cruces', 'Rio Rancho', 'Enchanted Hills', 'Sante Fe', 'Roswell', 'Farmington', 'South Valley', 'Clovis', 'Hobbs'], 
            'New York': ['New York', 'Brooklyn', 'Queens', 'Manhattan', 'Bronx', 'Staten Island', 'Buffalo', 'Jamaica', 'Rochester', 'Yonkers']
            // 'North Carolina': ['Charlotte', 'Raleigh', 'West Raleigh', 'Greensboro', 'Winston-Salem', 'Durham', 'Fayetville', 'Cary', 'Wilmington', 'High Point'], 
            // 'North Dakota': ['Fargo', 'Bismarck', 'Grand Forks', 'Minot', 'West Fargo', 'Mandan', 'Dickinson', 'Jamestown', 'Williston', 'Wahpeton'], 
            // 'Ohio': ['Columbus', 'Cleveland', 'Cincinatti', 'Toledo', 'Akron', 'Dayton', 'Parma', 'Canton', 'Youngstown', 'Lorain'], 
            // 'Oklahoma': ['Oklahoma City', 'Tulsa', 'Norman', 'Broken Arrow', 'Lawton', 'Edmund', 'Moore', 'Midwest City', 'Enid', 'Stillwater'], 
            // 'Oregon': ['Portland', 'Eugene', 'Salem', 'Gresham', 'Hillsboro', 'Beaverton', 'Bend', 'Medford', 'Springfield', 'Corvallis'], 
            // 'Pennsylvania': ['Philadelphia', 'Pittsburgh', 'Allentown', 'Erie', 'Reading', 'Scranton', 'Bethlehem', 'Lancaster', 'Levittown', 'Harrisburg'], 
            // 'Rhode Island': ['Providence', 'Warwick', 'Cranston', 'Pawtucket', 'East Providence', 'Woonsocket', 'Coventry', 'Cumberland', 'North Providence', 'West Warwick'], 
            // 'South Carolina': ['Columbia', 'Charleston', 'North Charleston', 'Mt. Pleasant', 'Rock Hill', 'Greenville', 'Summerville', 'Sumter', 'Hilton Head', 'Florence'], 
            // 'South Dakota': ['Sioux Falls', 'Rapid City', 'Aberdeen', 'Brookings', 'Watertown', 'Mitchell', 'Yankton', 'Pierre', 'Huron', 'Vermillion'], 
            // 'Tennessee': ['Memphis', 'New South Memphis', 'Nashville', 'Knoxville', 'Chattanooga', 'East Chatanooga', 'Clarksville', 'Murfreesboro', 'Jackson', 'Johnson City'], 
            // 'Texas': ['Huston', 'San Antonio', 'Dallas', 'Austin', 'Fort Worth', 'El Paso', 'Arlington', 'Corpus Christi', 'Piano', 'Laredo'], 
            // 'Utah': ['Salt Lake City', 'West Valley City', 'Provo', 'West Jordan', 'Sandy Hills', 'Orem', 'Sandy', 'Ogden', 'Saint George', 'Layton'], 
            // 'Vermont': ['Burlington', 'South Burlington', 'Colchester', 'Rutland', 'Essex Junction', 'Bennington', 'Barre', 'Williston', 'Montpellier', 'St Johnsbury'], 
            // 'Virginia': ['Virginia Beach', 'Norfolk', 'Chesapeake', 'Arlington', 'Richmond', 'Newport News', 'East Hampton', 'Alexandria', 'Hampton', 'Portsmouth Heights'], 
            // 'Washington': ['Seattle', 'Spokane', 'Tacoma', 'Vancouver', 'Bellevue', 'Everett', 'Kent', 'Yakima', 'Renton', 'Spokane Valley'], 
            // 'West Virginia': ['Charleston', 'Huntington', 'Parkersburg', 'Morgantown', 'Wheeling', 'Weirton', 'Weirton Heights', 'Fairmont', 'Beckley', 'Martinsburg'], 
            // 'Wisconsin': ['Milwaukee', 'Madison', 'Green Bay', 'Kenosha', 'Racine', 'Appleton', 'Waukesha', 'Oshkosh', 'Eau Claire', 'Janesville'], 
            // 'Wyoming': ['Cheyenne', 'Casper', 'Laramie', 'Gillette', 'Rock Springs', 'Sheridan', 'Green River', 'Evanston', 'Riverton', 'Jackson']
          }
          var choice = event.target.value;
          var catchoice = places[choice];

          if (choice) {
            $( ".listcity" ).empty();
            $( "<option value='' disabled selected>Select City</option>" ).appendTo( ".listcity" );
            for ( i = 0; i < catchoice.length; i++ ) {
              $( "<option>" + catchoice[i] + "</option>" ).appendTo( ".listcity" );
            }
          }

        },
        'change .listcategory' : function (event) {
          var categories = {
            'Apparel': ['Shirt', 'Hoodie', 'Sweater', 'Pants', 'Jacket', 'Socks', 'Hat', 'Backpack'],
            'Electronics': ['Phone', 'Tablet', 'Laptop', 'Game', 'Game Console'],
            'Shoes': ['Basketball', 'Boots', 'Running', 'Casual', 'Sandals', 'Training', 'Skateboarding'],
            'Other':['Other']
          };

            // Need Object with State City Correspondence
            var choice = event.target.value;
            var catchoice = categories[choice];

            switch (choice) {
              case "Apparel":
              $( ".listsizeli" ).show();
              $( ".listtype" ).empty();
              $( "listcapacity" ).hide();
              $( "<option value='' disabled selected>Select Type</option>" ).appendTo( " .listtype" );
              for (i = 0; i < catchoice.length; i++) {
                $( "<option>" + catchoice[i] + "</option>" ).appendTo( ".listtype" );
              }
              break

              case "Electronics":
              $( ".listtype" ).empty();
              $( ".listsizeli" ).hide();
              $( ".listcapacity" ).show()
              $( "<option value='' disabled selected>Select Type</option>" ).appendTo( ".listtype" );
              for ( i = 0; i < catchoice.length; i++ ) {
                $( "<option>" + catchoice[i] + "</option>" ).appendTo( ".listtype" );
              }

              break

              case "Shoes":
              $( ".listsizeli" ).show();
              $( ".listtype" ).empty();
              $( "listcapacity" ).hide();
              $( "<option value='' disabled selected>Select Type</option>" ).appendTo( ".listtype" );
              for ( i = 0; i < catchoice.length; i++ ) {
                $( "<option>" + catchoice[i] + "</option>" ).appendTo( ".listtype" );
              }
              break

              case "Other":
              $( ".listsizeli" ).show();
              $( ".listtype" ).empty();
              $( "listcapacity" ).hide();
              $( "<option value='' disabled selected>Select Type</option>" ).appendTo( ".listtype" );
              for (i = 0; i < catchoice.length; i++) {
                $( "<option>" + catchoice[i] + "</option>" ).appendTo( ".listtype" );
              }
              break
            }

            function sizeChange() { 
              if ( catchoice == "Electronics" ) {
                $( ".sizeshoe" ).hide();
                $( ".sizelectron" ).show();
              }
              else {
                $( ".sizelectron" ).hide();
                $( ".sizeshoe" ).show();
              }
            }

          },
          'change .listtype': function (event) {
          //C//
          // Shirt
          // Hoodie
          // Pants
          // Jacket
          // Socks
          // Hat
          // Backpack
          
          // Phone 
          // Tablet
          // Laptop
          // Game - No Capacity
          // Game Console

          // Basketball
          // Boots
          // Running
          // Casual
          // Sandals
          // Training
          // Skateboarding

          // Extra Small
          // Small
          // Medium
          // Large
          // Extra Large
          //-C//
          var categories = {
            'sizesReg': ['X Small', 'Small', 'Medium', 'Large', 'X Large']
          }

          var choice = event.target.value;
          var catchoice = categories['sizesReg']

          // Fall through method
          switch (choice) {
            case "Shirt":
            case "Hoodie":
            case "Sweater": 
            case "Jacket":
            case "Socks": 
            $( ".listsize" ).empty();
            $( "<option value='' disabled selected>Select Type</option>" ).appendTo( ".listsize" );
            for ( i = 0; i < catchoice.length; i++ ) {
              $( "<option>" + catchoice[i] + "</option>" ).appendTo( ".listsize" );
            }
            break

            case "Game":
            $( ".listcapacity" ).hide();
            break

            case "Phone":
            case "Tablet":
            case "Laptop":
            case "Game Console":
            $( ".listcapacity" ).show();
            break
          }
        },
        'change .imageupload' : function (event, template, pics) {
          var images = event.currentTarget.files;
          var pics = [];
          var img1;
          var img2;
          var img3;

            function readURL () {
              // This value needs to be the new optimized photos
              var images = event.currentTarget.files;
              // var cha = pics[0];

              //C//
              // console.log( pics[0] );
              // console.log( Session.get("pics") );
              // console.log( images );
              //C//

              var img1 = images[0].name;
              // console.log(img1);

              if ( images[1] ) {
              var img2 = images[1].name;
              };

              if ( images[2] ) {
                var img3 = images[2].name;
              };

              Session.set( "img1", img1 );
              // Session.set( "img2", img2 );
              // Session.set( "img3", img3 );

              // console.log( event.currentTarget.files[0] );

              if ( event.currentTarget.files[0] ) {

              // Height and only height must be mandated to a certain amount otherwise images get screwy

               // console.log( template );
               // console.log( event.currentTarget.files[0] );

               var img = document.createElement( "IMG" );
               // console.log( img );
               // console.log(event.currentTarget.files[0]);
               img.src = window.URL.createObjectURL( event.currentTarget.files[0] );

               img.onload = function (e) {
                var canvas = $( "#resizeCanvas" )[0];
                canvas.width = 10000;
                canvas.height = 10000;
                var ctx = canvas.getContext( "2d" );

                var targetSize = 200;
                var width = img.width;
                var height = img.height;

                if ( width > height ) {
                  // console.log( height);
                  height = targetSize;
                  width = Math.round( width / (img.height / targetSize) );
                } else {
                  // console.log( height );
                  // height = Math.round(height / (img.width / targetSize) );
                  width = targetSize;
                }

                if ( height > width * 2 ) {
                  height = 200;
                }
                canvas.width = width;
                canvas.height = height;
                var ctx = canvas.getContext( "2d" );
                ctx.drawImage( img, 0, 0, width, height );
                console.log( img.width, img.height, width, height );
                console.time( "export" );
                canvas.toBlob( function (blob) {
                  file = new File([blob], event.currentTarget.files[0].name, {
                    type: "image/jpeg"
                // type: "image/png"
                });
                  console.timeEnd( "total" );
                  console.timeEnd( "export" );
                  // console.log( file );
                   pics.push( file );
                   // TASK - Take this file and make it accesable somewhere else
                   Session.set( "pics", pics );
                   // console.log( pics );

                }, "image/jpeg", 0.9);
                // 0.9 is 0.90% the quality of original image
                return;
              };

               var reader = new FileReader();
                reader.onload = function (e) {
                  console.log( e.target.result );
                  $( "#img1" ).attr( "src", e.target.result );
                }
                reader.readAsDataURL( event.currentTarget.files[0] );
            } 

            if ( event.currentTarget.files[1] ) {
              // console.log( event.currentTarget.files );
              var reader = new FileReader();
              error = reader.error;
              console.log( error );
              reader.onload = function (e) {
                $( "#img2" ).attr( "src", e.target.result );
              }
              reader.readAsDataURL( event.currentTarget.files[1] );
            }

            if ( event.currentTarget.files[2] ) {
                // Task - Get the filenames of the list of images uploaded and convert to URL with buildURLs(), then place in images [] array.
                var reader = new FileReader();
                reader.onload = function (e) {
                  $( "#img3" ).attr( "src", e.target.result );
                }
                reader.readAsDataURL( event.currentTarget.files[2] );
              }
            }

            function buildURLs () {

              // Ideally I would be taking the value of downloadUrl from the _.map code block but how would I set this to an img # ???
              var imagePrefix = "https://listing-images-spacetrades.s3-us-west-2.amazonaws.com/";
              var img1url = imagePrefix + Meteor.userId() + "/" + Session.get("img1");
              var img2url = imagePrefix + Meteor.userId() + "/" + Session.get("img2");
              var img3url = imagePrefix + Meteor.userId() + "/" + Session.get("img3");

              Session.set("img1url", img1url);
              Session.set("img2url", img2url);
              Session.set("img3url", img3url);
            }

            readURL(this);
            buildURLs();

            // Layout of images on S3 = UserNameIDFolder/ListingFolder/ Images Go Here 
            // Use downloadURL in the future
            var uploads = _.map(event.currentTarget.files, function (file) {
              var uploader = new Slingshot.Upload( "listingImages" );

              uploader.send( file, function (error, downloadUrl) {

                var url = downloadUrl;
                if (error) {
                  console.error( "Error Uploading", uploader.xhr.response );
                  alert(error);
                }
                else {
                  // Meteor.users.update( Meteor.userId(), {$push: { "profile.files": downloadUrl } } );
                }      
              });
          })
          }
        });

  Template.meetuprequest.events({
    'click .offerRequestBtn': function (options) {
      var options = {
        listing_title: $( ".offerRequestListingName" ).text(),
        img: $( ".offerRequestImg" ).attr( "src" ),
        price: $( ".offerRequestPriceOriginal" ).text(),
        offerprice: $( ".listprice" ).val(),
        date: $( "#datepicker" ).val(),
        location: $( "#pac-input" ).val(),
        listingId: $( ".hidden" ).text(),
        lat: Session.get("offerlat"),
        lng: Session.get("offerlng"),
        creator_id: Meteor.userId(),
        status: "Pending"
      }

      function OfferValidate() {
        var status = true;
        var keys = Object.keys( options );
        // console.log(options);

        for ( i=0; i < keys.length; i++ ) {
          if ( !options[keys[i]] || options[keys[i]] == "" ) {
            sAlert.error( keys[i] + " field is not properly set");
            status = false;
          }
        }
        return status;
      }

      if ( OfferValidate() ) {
        Meteor.call('addOffer', options);
        Router.go("/");

        // setTimeout(function(){
           sweetAlert({   
            title: "Offer Created",
            text: "<span style='font-weight: bold;'>Offer:</span> " + "<span style='color: #f8504b'>" +  options.listing_title + "</span>" + "<span> Created </span>",
            html: "true",
            type: "success",
            timer: 3000,
            showConfirmButton: false
        });
        // }, 1000);

      };
    }}); 

}