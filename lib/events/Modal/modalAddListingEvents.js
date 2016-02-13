if (Meteor.isClient) {

	Template.ModalAddListing.events({
		'click .add': function(options) {
			var options = {
				// User Info
				creator_id: Meteor.userId(),
				creator_image: Meteor.user().profile.picturesm,
				username: Meteor.user().profile.name,
				listing_title: $(".listtitle").val(),
				// Category
				category: $(".listcategory option:selected").val(),
				type: $(".listtype option:selected").val(),
				brand: $(".listbrand").val(),
				quantity: $(".listquantity option:selected").val(),
				// Payment
				price: $(".listprice").val(),
				payment: $("input[name='addListingPayment']:checked").val(),
				trade: $("input[type='radio']:checked").val(),
				size: $(".listsize option:selected").val() || $(".listcapacity option:selected").val(),
				// Information
				condition: $(".condition option:selected").val(),
				color: $("#colorpicker").val(),
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

				// keys.pop("lat", "lng");
				// console.log(keys);

				keys = _.without(keys, 'img1', 'img2', 'img3');

        // TEMP HACK
        		keys = _.without(keys, 'lat', 'lng', 'city', 'state', 'locationString');

				for (i = 0; i < keys.length; i++) {
					if (!options[keys[i]] || options[keys[i]] == "") {
						sAlert.error(keys[i] + " is not properly set");
						status = false;
					}
				}

				var color = options.color;

				Meteor.call('colorName', color, function(err, result) {
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
					text: "<span style='font-weight: bold;'>Listing:</span> " + "<span style='color: #f8504b'>" + options.listing_title + "</span>" + "<span> Created </span>",
					html: "true",
					type: "success",
					timer: 3000,
					showConfirmButton: false
				});
			}

			if (addListingValidate()) {
				successMessage();
				Meteor.call('addListing', options);
			}

		},
		'change .liststate': function(event) {
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
			var choiceType = places[choice];

			if (choice) {
				$(".listcity").empty();
				$("<option value='' disabled selected>Select City</option>").appendTo(".listcity");
				for (i = 0; i < choiceType.length; i++) {
					$("<option>" + choiceType[i] + "</option>").appendTo(".listcity");
				}
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
					$("<option value='' disabled selected>Select Type</option>").appendTo(" .listtype");

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
				// var cha = pics[0];

				var img1 = images[0].name;
				// console.log(img1);

				if (images[1]) {
					var img2 = images[1].name;
				};

				if (images[2]) {
					var img3 = images[2].name;
				};

				Session.set("img1", img1);
				// Session.set( "img2", img2 );
				// Session.set( "img3", img3 );

				// console.log( event.currentTarget.files[0] );

				if (event.currentTarget.files[0]) {

					var reader = new FileReader();
					reader.onload = function(e) {
						console.log(e.target.result);
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
					} else {
						// Meteor.users.update( Meteor.userId(), {$push: { "profile.files": downloadUrl } } );
					}
				});
			})
		}
	});

}
