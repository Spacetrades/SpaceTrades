if (Meteor.isClient) {

// CHAPP  
// Meteor.subscribe('allDocs');
// Meteor.subscribe("sendEmail");
// Session.set('chapp-username','chackerian'); 
// Session.set('chapp-docid','4444');


//               //
// Subscriptions //
//               //

Meteor.subscribe('addListing');
Meteor.subscribe('listingShow');
Meteor.subscribe('listingUser');
Meteor.subscribe('listingId');
Meteor.subscribe('imagesShow');

//               //
// Search Source // 
//               //


var options = {
  keepHistory: 1000 * 60 * 5,
  localSearch: true
};

var fields = ['listing_title', 'username', 'category', 'type', 'city'];
ListingSearch = new SearchSource('listings', fields, options);


//                //
// Meteor Startup //
//                //


//            //
// Amazon S3  //
//            //

Slingshot.fileRestrictions("listingImages", {
  allowedFileTypes: ["image/png", "image/jpeg", "image/gif"],
  maxSize: 10 * 1024 * 1024 // 10 MB
});

//          //
// Rendered //
//          //

Template.addlisting.onRendered(function () {
  $("#colorpicker").spectrum({
    color: "#000",
    showInput: true,
    className: "full-spectrum",
    showInitial: true,
    showPalette: true,
    showSelectionPalette: true,
    maxSelectionSize: 10,
    preferredFormat: "hex",
    move: function (color) {

    },
    show: function () {

    },
    beforeShow: function () {

    },
    hide: function () {

    },
    change: function() {

    },
    palette: [
    ["rgb(0, 0, 0)", "rgb(67, 67, 67)", "rgb(102, 102, 102)",
    "rgb(204, 204, 204)", "rgb(217, 217, 217)","rgb(255, 255, 255)"],
    ["rgb(152, 0, 0)", "rgb(255, 0, 0)", "rgb(255, 153, 0)", "rgb(255, 255, 0)", "rgb(0, 255, 0)",
    "rgb(0, 255, 255)", "rgb(74, 134, 232)", "rgb(0, 0, 255)", "rgb(153, 0, 255)", "rgb(255, 0, 255)"],
    ["rgb(230, 184, 175)", "rgb(244, 204, 204)", "rgb(252, 229, 205)", "rgb(255, 242, 204)", "rgb(217, 234, 211)",
    "rgb(208, 224, 227)", "rgb(201, 218, 248)", "rgb(207, 226, 243)", "rgb(217, 210, 233)", "rgb(234, 209, 220)",
    "rgb(221, 126, 107)", "rgb(234, 153, 153)", "rgb(249, 203, 156)", "rgb(255, 229, 153)", "rgb(182, 215, 168)",
    "rgb(162, 196, 201)", "rgb(164, 194, 244)", "rgb(159, 197, 232)", "rgb(180, 167, 214)", "rgb(213, 166, 189)",
    "rgb(204, 65, 37)", "rgb(224, 102, 102)", "rgb(246, 178, 107)", "rgb(255, 217, 102)", "rgb(147, 196, 125)",
    "rgb(118, 165, 175)", "rgb(109, 158, 235)", "rgb(111, 168, 220)", "rgb(142, 124, 195)", "rgb(194, 123, 160)",
    "rgb(166, 28, 0)", "rgb(204, 0, 0)", "rgb(230, 145, 56)", "rgb(241, 194, 50)", "rgb(106, 168, 79)",
    "rgb(69, 129, 142)", "rgb(60, 120, 216)", "rgb(61, 133, 198)", "rgb(103, 78, 167)", "rgb(166, 77, 121)",
    "rgb(91, 15, 0)", "rgb(102, 0, 0)", "rgb(120, 63, 4)", "rgb(127, 96, 0)", "rgb(39, 78, 19)",
    "rgb(12, 52, 61)", "rgb(28, 69, 135)", "rgb(7, 55, 99)", "rgb(32, 18, 77)", "rgb(76, 17, 48)"]
    ]
  });

})


//        //
// Events //
//        //

Template.contact.events({
  'click .send' : function () {
    var subject = $( "#contactname" ).val();
    var text = $( ".message" ).val();
    sAlert.success('Message sent successfully');
    $( ".contactform" ).hide();
    $( ".sent" ).css("display", "block");

    Meteor.call('sendEmail',
      'nchackerian@gmail.com',
      'contact@spacetrades.com',
      subject,
      text);
  }
});

Template.searchpage.helpers({
  getListings : function () {
    return ListingSearch.getData({
      transform: function (matchText, regExp) {
        return matchText.replace(regExp, "<b>$&</b>")
      },
      sort: { isoScore: -1 }
    });
  }
});


Template.homeheaderpre.events({
  'click .login' : function (e) {
    Meteor.loginWithFacebook({
      requestPermissions: ['public_profile','email']
    }, function (err) {
      if (err)
        Session.set('errorMessage', err.reason || 'Unknown Eror');
    })
    Session.set('loggedin', true);
  } 
});

Template.headersearchpost.events({
  'click .homesearchbtn' : function (search) {
   search = $("#search").val();
   var options = {
    search: search
  }
  // Meteor.call('addHistory', options);
  console.log(search);
  ListingSearch.search(search);
}
});

Template.headersearchpre.events({
  'click .homesearchbtn' : function (options) {
    var search = $("#search").val();
    var options = {
      search: search
    }
    Meteor.call('addHistory', options);
    console.log(search);
    ListingSearch.search(search);
  }
});

// Logout 
Template.headerpost.events({ 
  'click .logout' : function (e) {
    Meteor.logout();
  }
})

Template.homeheaderpost.events({ 
  'click .logout' : function (e) {
    Meteor.logout();
  },
  'click .homesearchbtn' : function (e) {
    var search = $("#search").val();
    var options = {
      search: search
    }
    Meteor.call('addHistory', options);
    console.log(search);
    ListingSearch.search(search);
  }
});





Template.addlisting.events({
  'click .add' : function (options) {
    var options = {
      listing_title: $( ".listtitle" ).val(),
      category: $( ".listcategory option:selected" ).val(),
      type: $( ".listcategory option:selected" ).val(),
      brand: $( ".listbrand" ).val(),
      username: Meteor.user().profile.name,
      quantity: $( ".listquantity option:selected" ).val(),
      price: $( ".listprice" ).val(),
      city: $( ".listcity option:selected" ).val(),
      state: $( ".liststate option:selected" ).val(),
      trade: $( ".listtrade" ).val(),
      size: $( ".listsize option:selected" ).val(),
      condition: $( ".condition option:selected" ).val(),
      color: $( "#colorpicker" ).val(),
      description: $( ".listdescription" ).val(),
      lat: $( ".lat" ).text(),
      lng: $( ".lng" ).text()
    }

      // We need to verify that the information is accurate
      // All fields must be filled out. If not message with empty field
      // *LATER* City and State will be corresponding dropdowns
      // Description should be clean from any profanities - ACTUALLY NO
      // If user has not allowed geolocation prompt saying "Geolocation has been disabled, if you wish to display your listing location, please enable this."" 

      function addListingValidate() {

        console.log(options);
        sAlert.success("LIST");
        var keys = Object.keys(options);

        for (i=0; i < keys.length; i++) {
          if (!options[keys[i]] || options[keys[i]] == "") {
            sAlert.error('It appears that: ' + keys[i] + " is not properly set");
            console.log('It appears that: ' + keys[i] + " is not properly set");
          }
        }
      }
      addListingValidate();
      Meteor.call('addListing', options);
      $( ".addlistdiv" ).hide();
      $( ".review" ).append("<h1> Successfully Listed</h1>");
    },
    'change .liststate' : function (event) {
      var places = {
        'Alabama': ['Birmingham', 'Montgomery', 'Mobile', 'Huntsville', 'Tuscaloosa', 'Hoover', 'Dothan', 'Decantur', 'Auburn', 'Madison'],
        'Alaska': ['Anchorage', 'Fairbanks', 'Juneau', 'Knik-Fairview', 'College'],
        'Arizona': ['Pheonix', 'Tucson', 'Mesa', 'Chandler', 'Gilbert', 'Glendale', 'Scottsdale', 'Tempe', 'Peoria', 'Suprise'], 
        'Arkansas': ['Little Rock', 'Fort Smith', 'Fayetville', 'Springdale', 'Jonesboro', 'North Little Rock', 'Conway', 'Rogers', 'Pine Bluff', 'Bentonville'], 
        'California': ['Los Angeles', 'San Diego', 'San Jose', 'San Francisco', 'Fresno', 'Sacremento', 'Long Beach', 'Oakland', 'Bakersville', 'Anaheim'], 
        'Colorado': ['Denver', 'Colorado Springs', 'Aurora', 'Fort Collins', 'Lakewood', 'Thornton', 'Puebla', 'Arvada', 'Westminster', 'Centennial'], 
        'Connecticut': ['Bridgeport', 'New Haven', 'Hartford', 'Stamford', 'North Stamford', 'Waterbury', 'Norwalk', 'East Norwalk', 'Danbury', 'New Britain'], 
        'Delaware': ['Wilmington', 'Dover', 'Newark', 'Bear', 'Middleton', 'Brookside', 'Glasgow', 'Hockessin', 'Pike Creek Valley'], 
        'Florida': ['Jacksonville', 'Miami', 'Tampa', 'Saint Petersburg', 'Orlando', 'Hialeah', 'Talahassee', 'Fort Lauderdale', 'Port Saint Lucie', 'Pembroke Pines'], 
        'Georgia': ['Atlanta', 'Columbus', 'Savannah', 'Athens', 'Sandy Springs', 'Macon', 'Roswell', 'Albany', 'Johns Creek', 'Warner Robins'], 
        'Hawaii': ['Honolulu', 'Pearl City', 'Hilo', 'Kailua', 'Waipahu', 'Kāne‘ohe', 'Mililani Town', 'Kahului','`Ewa Gentry', 'Kihei'], 
        'Idaho': ['Boise', 'Nampa', 'Meridian', 'Idaho Falls', 'Pocatello', 'Caldwell', "Coeur d'Alene",'Twin Falls', 'Lewiston', 'Lewiston Orchards'], 
        'Illinois': ['Chicago', 'Aurora', 'Rockford', 'Joliet', 'Naperville', 'Springfield', 'Peoria', 'North Peoria', 'Elgin', 'Waukegan'], 
        'Indiana': ['Indianapolis', 'Fort Wayne', 'Evansville', 'South Bend', 'Hammond', 'Bloomington', 'Gary', 'Carmel', 'Fishers', 'Muncie'], 
        'Iowa': ['Des Moines', 'Cedar Rapids', 'Davenport', 'Sioux City', 'Waterloo', 'Iowa City', 'Council Bluffs', 'Ames', 'Dubuque', 'West Des Moines'], 
        'Kansas': ['Wichita', 'Overland Park', 'Kansas City', 'Topeka', 'Olathe', 'Lawrence', 'Shawnee', 'Manhattan', 'Lenexa','Salina'], 
        'Kentucky': ['Lexington-Fayetville', 'Meads', 'Ironville', 'Louisville', 'Lexington', 'Bowling Green', 'Owensboro', 'Covington', 'Hopkinsville', 'Richmond'], 
        'Louisiana': ['New Orleans', 'Baton Rouge', 'Shrevport', 'Metairie Terrace', 'Metairie', 'Lafayette','Lake Charles','Kenner','Bossier City','Monroe'], 
        'Maine': ['Portland','Lewiston', 'Bangor', 'West Scarborough', 'South Portland', 'South Portland Gardens', 'Auburn', 'Biddeford', 'Augusta', 'Saco'], 
        'Maryland': ['Baltimore', 'Columbia', 'Germantown', 'Silver Spring', 'Waldorf', 'Glen Burnie', 'Ellicott City', 'Frederick', 'Dundalk', 'Rockville'], 
        'Massachusetts': ['Boston', 'South Boston', 'Worcester','Springfield','Lowell','Cambridge','New Bedford','Brockton','Quincy','Lynn'], 
        'Michigan': ['Detroit', 'Grand Rapids', 'Warren', 'Sterling Heights', 'Lansing', 'Ann Arbor', 'Flint', 'Charter Township of Clinton', 'Dearborn', 'Livonia'], 
        'Minnesota': ['Minneapolis', 'Saint Paul', 'Rochester', 'Duluth', 'Bloomington', 'Brooklyn Park', 'Plymouth', 'Saint Cloud', 'Eagan', 'West Coon Rapids'], 
        'Mississippi': ['Jackson', 'West Gulfport', 'Gulfport', 'Southahven', 'Hattiesburg', 'Biloxi', 'Meridian', 'Tupelo', 'Greenville', 'Olive Branch'], 
        'Missouri': ['Kansas City', 'St Louis', 'Springfield', 'Independence', 'East Independence', 'Columbia', "Lee's Summit", "O'Fallon", 'St. Joseph', 'St Charles'], 
        'Montana': ['Billings', 'Missoula', 'Great Falls', 'Bozeman', 'Butte', 'Butte-Silver Bow', 'Helena', 'Kalispell', 'Anaconda', 'Havre'], 
        'Nebraska': ['Omaha', 'Lincoln', 'Bellevue', 'Grand Island', 'Kearney', 'Fremont', 'Hastings', 'North Platte', 'Norfolk', 'Columbus'], 
        'Nevada': ['Las Vegas', 'Henderson', 'Reno', 'Paradise', 'North Las Vegas', 'Sunrise Manor', 'Spring Valley', 'Enterprise', 'Sparks', 'Carson City'], 
        'New Hampshire': ['Manchester', 'Nashua', 'Concord', 'East Concord', 'Derry Village', 'Dover', 'Rochester', 'Salem', 'Merrimack', 'Keene'], 
        'New Jersey': ['Newark', 'Jersey City', 'Paterson', 'Elizabeth', 'Edison', 'Toms River', 'Trenton', 'Clifton', 'Camden', 'Cherry Hill'], 
        'New Mexico': ['Albuquerque', 'Las Cruces', 'Rio Rancho', 'Enchanted Hills', 'Sante Fe', 'Roswell', 'Farmington', 'South Valley', 'Clovis', 'Hobbs'], 
        'New York': ['New York', 'Brooklyn', 'Queens', 'Manhattan', 'Bronx', 'Staten Island', 'Buffalo', 'Jamaica', 'Rochester', 'Yonkers'], 
        'North Carolina': ['Charlotte', 'Raleigh', 'West Raleigh', 'Greensboro', 'Winston-Salem', 'Durham', 'Fayetville', 'Cary', 'Wilmington', 'High Point'], 
        'North Dakota': ['Fargo', 'Bismarck', 'Grand Forks', 'Minot', 'West Fargo', 'Mandan', 'Dickinson', 'Jamestown', 'Williston', 'Wahpeton'], 
        'Ohio': ['Columbus', 'Cleveland', 'Cincinatti', 'Toledo', 'Akron', 'Dayton', 'Parma', 'Canton', 'Youngstown', 'Lorain'], 
        'Oklahoma': ['Oklahoma City', 'Tulsa', 'Norman', 'Broken Arrow', 'Lawton', 'Edmund', 'Moore', 'Midwest City', 'Enid', 'Stillwater'], 
        'Oregon': ['Portland', 'Eugene', 'Salem', 'Gresham', 'Hillsboro', 'Beaverton', 'Bend', 'Medford', 'Springfield', 'Corvallis'], 
        'Pennsylvania': ['Philadelphia', 'Pittsburgh', 'Allentown', 'Erie', 'Reading', 'Scranton', 'Bethlehem', 'Lancaster', 'Levittown', 'Harrisburg'], 
        'Rhode Island': ['Providence', 'Warwick', 'Cranston', 'Pawtucket', 'East Providence', 'Woonsocket', 'Coventry', 'Cumberland', 'North Providence', 'West Warwick'], 
        'South Carolina': ['Columbia', 'Charleston', 'North Charleston', 'Mt. Pleasant', 'Rock Hill', 'Greenville', 'Summerville', 'Sumter', 'Hilton Head', 'Florence'], 
        'South Dakota': ['Sioux Falls', 'Rapid City', 'Aberdeen', 'Brookings', 'Watertown', 'Mitchell', 'Yankton', 'Pierre', 'Huron', 'Vermillion'], 
        'Tennessee': ['Memphis', 'New South Memphis', 'Nashville', 'Knoxville', 'Chattanooga', 'East Chatanooga', 'Clarksville', 'Murfreesboro', 'Jackson', 'Johnson City'], 
        'Texas': ['Huston', 'San Antonio', 'Dallas', 'Austin', 'Fort Worth', 'El Paso', 'Arlington', 'Corpus Christi', 'Piano', 'Laredo'], 
        'Utah': ['Salt Lake City', 'West Valley City', 'Provo', 'West Jordan', 'Sandy Hills', 'Orem', 'Sandy', 'Ogden', 'Saint George', 'Layton'], 
        'Vermont': ['Burlington', 'South Burlington', 'Colchester', 'Rutland', 'Essex Junction', 'Bennington', 'Barre', 'Williston', 'Montpellier', 'St Johnsbury'], 
        'Virginia': ['Virginia Beach', 'Norfolk', 'Chesapeake', 'Arlington', 'Richmond', 'Newport News', 'East Hampton', 'Alexandria', 'Hampton', 'Portsmouth Heights'], 
        'Washington': ['Seattle', 'Spokane', 'Tacoma', 'Vancouver', 'Bellevue', 'Everett', 'Kent', 'Yakima', 'Renton', 'Spokane Valley'], 
        'West Virginia': ['Charleston', 'Huntington', 'Parkersburg', 'Morgantown', 'Wheeling', 'Weirton', 'Weirton Heights', 'Fairmont', 'Beckley', 'Martinsburg'], 
        'Wisconsin': ['Milwaukee', 'Madison', 'Green Bay', 'Kenosha', 'Racine', 'Appleton', 'Waukesha', 'Oshkosh', 'Eau Claire', 'Janesville'], 
        'Wyoming': ['Cheyenne', 'Casper', 'Laramie', 'Gillette', 'Rock Springs', 'Sheridan', 'Green River', 'Evanston', 'Riverton', 'Jackson']
      }

      var choice = event.target.value;
      var catchoice = places[choice];
      console.log(choice);
      console.log(catchoice);

      if (choice) {
        $(".listcity").empty();
        $("<option>Select</option>").appendTo(".listcity");
        for (i = 0; i < catchoice.length; i++) {
          $("<option>"+catchoice[i]+"</option>").appendTo(".listcity");
        }
      }


    },
    'change .listcategory' : function (event) {
      var categories = {
        'Apparel': ['Shirt', 'Hoodie', 'Pants', 'Socks', 'Hat', 'Backpack'],
        'Electronics': ['Phone', 'Tablet', 'Laptop', 'Game', 'Game Console'],
        'Shoes': ['Basketball', 'Boots', 'Running', 'Casual', 'Sandals', 'Training'],
        'Other':['Rock and Roll']
      };

        // Need Object with State City Correspondence

        var choice = event.target.value;
        var catchoice = categories[choice];
        switch(choice) {
          case "Apparel":
          $(".listtype").empty();
          $("<option>Select</option>").appendTo(".listtype");
          for (i = 0; i < catchoice.length; i++) {
            $("<option>"+catchoice[i]+"</option>").appendTo(".listtype");
          }
          break

          case "Electronics":
          $(".listtype").empty();
          $("<option>Select</option>").appendTo(".listtype");
          for (i = 0; i < catchoice.length; i++) {
            $("<option>"+catchoice[i]+"</option>").appendTo(".listtype");
          }
          break

          case "Shoes":
          $(".listtype").empty();
          $("<option>Select</option>").appendTo(".listtype");
          for (i = 0; i < catchoice.length; i++) {
            $("<option>"+catchoice[i]+"</option>").appendTo(".listtype");
          }
          break

          case "Other":
          $(".listtype").empty();
          $("<option>Select</option>").appendTo(".listtype");
          for (i = 0; i < catchoice.length; i++) {
            $("<option>"+catchoice[i]+"</option>").appendTo(".listtype");
          }
          break
        }

        function sizeChange() { 
          if (catchoice == "Electronics") {
            $(".sizeshoe").hide();
            $(".sizelectron").show();
          }
          else {
            $(".sizelectron").hide();
            $(".sizeshoe").show();
          }
        }

      },
      'change .imageupload' : function (event, template) {
      // $( '.add' ).click( function () {

        function readURL() {
          if(event.currentTarget.files && event.currentTarget.files[0]) {
            var reader = new FileReader();

            reader.onload = function (e) {

              $("#img1").attr("src", e.target.result);
            }
            reader.readAsDataURL(event.currentTarget.files[0]);
          }

          else {
            console.log("FAIL");
          }
        }
        readURL(this);


        var uploader = new Slingshot.Upload("listingImages");
        console.log(event.currentTarget.files[0]);
        uploader.send( event.currentTarget.files[0], function (error, downloadUrl) {
          if (error) {
            console.error("Error Uploading", uploader.xhr.response);
            alert(error);
          }
          else {
            Meteor.users.update( Meteor.userId(), {$push: { "profile.files": downloadUrl}});
          }
        // });        
      })
      }
    });


//         //
// HELPERS //
//         //       


Template.addlisting.helpers({
  lat: function () {
    return Geolocation.latLng().lat;
  },
  lng: function () {
    return Geolocation.latLng().lng;
  }
});

Template.item.helpers({
  exampleMapOptions: function () {
    // Make sure the maps API has loaded
    if (GoogleMaps.loaded()) {
      // Need to get the right latitude and longitude from id 
      var lat = Listing.find({ _id: id }).fetch()[0].lat;
      var lng = Listing.find({ _id: id }).fetch()[0].lng;
      return {
        center: new google.maps.LatLng(lat, lng),
        zoom: 13
      };
    }
  },

  messenger: function () {
    return Meteor.user().profile.messenger
  }

// If User has possession of listing he should have the ability to edit the information after posting and Delete at will

  // editListing : function () {
  //   // Check to see if the user viewing owns the listing

  // },

  // removeListing : function () {

  // }


});

Template.item.onRendered( function () {
  GoogleMaps.load();
  $("#carousel").flexslider({
    animation: "slide",
    controlNav: false,
    animationLoop: false,
    slideshow: false,
    itemWidth: 210,
    itemMargin: 5,
    asNavFor: "#slider"
  });
  $("#slider").flexslider({
    animation: "slide",
    controlNav: false,
    animationLoop: false,
    slideshow: false,
    sync: "#carousel"
  });
});

Template.item.onCreated( function () {
  GoogleMaps.ready('listingImage', function (map) {
    var areaCircle = new google.maps.Circle({
      map: map.instance,
      center: map.options.center,
      zoom: 10,
      radius:1000,
      strokeColor:"#f8504b",
      strokeOpacity:0.8,
      strokeWeight:2,
      fillColor:"#f8504b",
      fillOpacity:0.4
    });
  });
});

Template.card.helpers({
  imagesShow: function () {
    return Images.find();
  }
});

Template.home.helpers({
  listing: function () {
    return Listing.find();
  }});

Template.list_item.helpers({ 
  listing: function () {
    // id = this.params._id
    return Listing.find({ _id: id });
  }});

Template.LayoutDefault.helpers({
  allDocs: function () {
    return Session.get('allDocs');
  }
});

Template.meetuprequest.onRendered( function () {
  var picker = new Pikaday({ field: $('#datepicker')[0] });
});

Template.registerHelper('username', function () {
  return Meteor.user().profile.name;
});

Template.registerHelper('picture', function () {
  return Meteor.user().profile.picture;
});

}