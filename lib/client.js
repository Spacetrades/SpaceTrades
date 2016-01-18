if (Meteor.isClient) {
	analytics.load("FDE0SPIWcKWyHPgVye3LmS97lSe95ztD");

	 Accounts.onLogin( function () {
      sAlert.success("Welcome Back");
    })

	var options = {
		keepHistory: 1000 * 60 * 5,
		// Allow local offline search from the cache
		localSearch: true
	};

	var fields = ['listing_title', 'brand'];

	ListingSearch = new SearchSource('listing', fields, options);

	//        //
	// Kadira //
	//        //

	// Kadira.connect('KQCYhmjGnmND3Qy9n', '4877312f-4aee-4cfc-84ab-a022ddb3c2ef')

	//            //
	// Amazon S3  //
	//            //

	Slingshot.fileRestrictions("listingImages", {
		allowedFileTypes: ["image/png", "image/jpeg", "image/gif"],
		maxSize: 4 * 1024 * 1024 // 4 MB
	});

}