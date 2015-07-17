if (Meteor.isClient) {

  function catChoice(elem) {
    console.log(elem);
    var search = $("." + elem).text();
    var options = {
     search: search
   }
   ListingSearch.search(search);
 }

// Custom Functions

function fbLogin() {
  Meteor.loginWithFacebook({
    requestPermissions: ['public_profile','email','user_location']
  }, function (err) {
    if (err)
      Session.set('errorMessage', err.reason || 'Unknown Eror');
    console.log(Session.get('errorMessage'));
  });
}

// Create a function for the nav that sends search input from dropdown value for search page
// function dropDownSesarch

function btnSearch () {
 search = $("#search").val();
 var options = {
  search: search
}
ListingSearch.search(search);
}

// Contact - Email
Template.contact.events({
  'click .add' : function () {
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

// Register - FB login
Template.register.events({
  'click .facebook': function (e) {
    fbLogin();
    Session.set('loggedin', true);
  }
});

// Home Header Pre - FB login
Template.homeheaderpre.events({
  'click .login' : function (e) {
    fbLogin();
    Session.set('loggedin', true);
  },

// Apparel

"click .catShirts": function () {
  catChoice("catShirts");
},

"click .catHoodies": function () {
  catChoice("catHoodies");
},

"click .catPants": function () {
  catChoice("catPants");
},

"click .catJacket": function () {
  catChoice("catJacket");
},

"click .catJeans": function () {
  catChoice("catJeans");
},

"click .catShorts": function () {
  catChoice("catShorts");
},

//Electronics

"click .catPhones": function () {
  catChoice("catPhones");
},

"click .catTablets": function () {
  catChoice("catTablets");
},

"click .catComputers": function () {
  catChoice("catComputers");
},

"click .catTvs": function () {
  catChoice("catTvs");
},

"click .catHeadphones": function () {
  catChoice("catHeadphones");
},

// Shoes

"click .catShoes": function () {
  catChoice("catShoes");
},

"click .catAsics": function () {
  catChoice("catAsics");
},

"click .catAddidas": function () {
  catChoice("catAddidas");
},

"click .catConverse": function () {
  catChoice("catConverse");
},

"click .catNike": function () {
  catChoice("catNike");
},

"click .catJordan": function () {
  catChoice("catJordan");
}

});

// Header Search Post - FB Login
Template.headersearchpre.events({
  'click .login' : function (e) {
    fbLogin();
    Session.set('loggedin', true);
  } 
});

// Header Pre - FB Login
Template.headerpre.events({
  'click .login' : function (e) {
    fbLogin();
    Session.set('loggedin', true);
  } 
});

// Header Search Post - Search
Template.headersearchpost.events({
  'click .headerNavSearchButton' : function (search) {
    btnSearch();
  }
});

// Header Search Pre - Search 
Template.headersearchpre.events({
  'click .headerNavSearchButton' : function (options) {
    btnSearch();
  }
});

// Search Page - Search
Template.searchpage.events({
  'click .homesearchbtn' : function (options) {
    btnSearch();
  }
});

// Logout 
Template.headerpost.events({ 
  'click .logout' : function (e) {
    Meteor.logout();
  }
})

// Home Header Post - Search
Template.homeheaderpost.events({ 
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

 	  // We need to verify that the information is accurate
    // All fields must be filled out. If not message with empty field
    // Users will specify a Proposed location, no more google location autolocation
    // Input needs to be there and be the right type ex: price needs to be only a number and if not complain
    // If user has not allowed geolocation prompt saying "Geolocation has been disabled, if you wish to display your listing location, please enable this.""
    Template.addlisting.events({
      'click .add' : function (options) {
        var options = {
          creator_id: Meteor.userId(),
          listing_title: $( ".listtitle" ).val(),
          category: $( ".listcategory option:selected" ).val(),
          type: $( ".listcategory option:selected" ).val(),
          brand: $( ".listbrand" ).val(),
          username: Meteor.user().profile.name,
          quantity: $( ".listquantity option:selected" ).val(),
          price: $( ".listprice" ).val(),
          city: $( ".listcity option:selected" ).val(),
          state: $( ".liststate option:selected" ).val(),
          trade: $( "input[type='radio']:checked" ).val(),
          size: $( ".listsize option:selected" ).val(),
          condition: $( ".condition option:selected" ).val(),
          color: $( "#colorpicker" ).val(),
          description: $( ".listdescription" ).val(),
          lat: $( ".lat" ).text(),
          lng: $( ".lng" ).text(),
          img1: Session.get("img1url"),
          img2: Session.get("img2url"),
          img3: Session.get("img3url")
        }

        function addListingValidate () {
          var status = true;
          var keys = Object.keys(options);

          for (i=0; i < keys.length; i++) {
            if (!options[keys[i]] || options[keys[i]] == "") {
              sAlert.error("It appears that the: " + keys[i] + " field is not properly set");
              status = false;
            }
          }
          return status;
        }

          // function termsMessage () {
          //   var success = $('.agree').is(":checked");
          //   return success
          // }


          function successMessage () {
            $( ".addlistdiv" ).hide();
            $( ".success" ).append("<h1 style='text-align: center;'> Successfully Listed</h1>");
            $( ".success" ).append("<div class='errorh ph-button'><a href='/'>Home</a></div>");
          };

          if (addListingValidate()) {
           // if (termsMessage()) {
            successMessage();
            Meteor.call('addListing', options);
          }
          else {
            sAlert.error("It appears that the Terms and Conditions field is not properly set");
          };



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
            $(".listcity").empty();
            $("<option>Select</option>").appendTo(".listcity");
            for (i = 0; i < catchoice.length; i++) {
              $("<option>"+catchoice[i]+"</option>").appendTo(".listcity");
            }
          }


        },
        'change .listcategory' : function (event) {
          var categories = {
            'Apparel': ['Shirt', 'Hoodie', 'Pants', 'Jacket', 'Socks', 'Hat', 'Backpack'],
            'Electronics': ['Phone', 'Tablet', 'Laptop', 'Game', 'Game Console'],
            'Shoes': ['Basketball', 'Boots', 'Running', 'Casual', 'Sandals', 'Training', 'Skateboarding'],
            'Other':['Other']
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

            var images = event.currentTarget.files;
            var img1;
            var img2;
            var img3;

          // Add images on add listing button
          // $( '.add' ).click( function () {

            function readURL () {
              // console.log(img1,img2,img3);
              var images = event.currentTarget.files
              var img1 = images[0].name;
              var img2 = images[1].name;
              var img3 = images[2].name;
              Session.set("img1", img1);
              Session.set("img2", img2);
              Session.set("img3", img3);
              // console.log(img1,img2,img3);

              if (event.currentTarget.files[0]) {
                console.log(template);
                console.log(event.currentTarget.files[0]);
                var reader = new FileReader();
                reader.onload = function (e) {

                  var img = document.createElement("img");
                  console.log(img);
                  img.src = window.URL.createObjectURL(event.currentTarget.files[0]);
                  console.log(img.src);
                  $("#img1").attr("src", event.target.result);
                }
                // img.onload = function () {
                //   var canvas = template.find("#resizeCanvas");
                //   canvas.width = 10000;
                //   canvas.height = 10000;
                //   var ctx = canvas.getContext("2d");

                //   var targetSize = 200;
                //   var width = img.width;
                //   var height = img.height;

                //   if (width > height) {
                //     height = targetSize;
                //     width = Math.round(width / (img.height / targetSize));
                //   } else {
                //     height = Math.round(height / (img.width / targetSize) );
                //     width = targetSize;
                //   }
                //   canvas.width = width;
                //   canvas.height = height;
                // }

                reader.readAsDataURL(event.currentTarget.files[0]);
              }

              if (event.currentTarget.files[1]) {
                console.log(event.currentTarget.files);
                var reader = new FileReader();
                reader.onload = function (e) {

                  $("#img2").attr("src", e.target.result);

                }
                reader.readAsDataURL(event.currentTarget.files[1]);
              }

              if (event.currentTarget.files[2]) {
                // Task - Get the filenames of the list of images uploaded and convert to URL with buildURLs(), then place in images [] array.
                var reader = new FileReader();
                reader.onload = function (e) {

                  $("#img3").attr("src", e.target.result);

                }
                reader.readAsDataURL(event.currentTarget.files[2]);
              }
            }

            function buildURLs () {

              // Ideally I would be taking the value of downloadUrl from the _.map code block but how would I set this to an img # ???
              var img1url = "https://listing-images-spacetrades.s3-us-west-2.amazonaws.com/" + Meteor.userId() + "/" + Session.get("img1");
              var img2url = "https://listing-images-spacetrades.s3-us-west-2.amazonaws.com/" + Meteor.userId() + "/" + Session.get("img2");
              var img3url = "https://listing-images-spacetrades.s3-us-west-2.amazonaws.com/" + Meteor.userId() + "/" + Session.get("img3");
              Session.set("img1url", img1url);
              Session.set("img2url", img2url);
              Session.set("img3url", img3url);
            }

            readURL(this);
            buildURLs();

            // Layout of images on S3 = UserNameIDFolder/ListingFolder/ Images Go Here 

            var uploads = _.map(event.currentTarget.files, function (file) {
              var uploader = new Slingshot.Upload("listingImages");

              uploader.send( file, function (error, downloadUrl) {

                var url = downloadUrl;
                if (error) {
                  console.error("Error Uploading", uploader.xhr.response);
                  alert(error);
                }
                else {
                  Meteor.users.update( Meteor.userId(), {$push: { "profile.files": downloadUrl}});

                  // Use downloadURL in the future
                }      
              });
            // });
          })
          }
        });

  Template.meetuprequest.events({
    'click .add': function (options) {
      var options = {
        offerprice: $(".listprice").val(),
        date: $("#datepicker").val(),
        location: $("#pac-input").val(),
        listingId: $(".hidden").text()
      }

      console.log(options);

      function Validate() {
        var status = true;
        var keys = Object.keys(options);

        for (i=0; i < keys.length; i++) {
          if (!options[keys[i]] || options[keys[i]] == "") {
            sAlert.error('It appears that the: ' + keys[i] + " field is not properly set");
            status = false;
          }
        }
        return status;
      }

      if (Validate()) {-
        Meteor.call('addOffer', options);
      };
    }}); 

}