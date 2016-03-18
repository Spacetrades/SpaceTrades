if (Meteor.isClient) {
	analytics.load("FDE0SPIWcKWyHPgVye3LmS97lSe95ztD");

    TimeSync.loggingEnabled = false;

    Template.registerHelper('locationFuell', function() {
    return 3
  });

     document.title = "SpaceTrades";

	var options = {
		keepHistory: 1000 * 60 * 5,
		// Allow local offline search from the cache
		localSearch: true
	};

	var fields = ['listing_title', 'brand'];

	ListingSearch = new SearchSource('listing', fields, options);

	Slingshot.fileRestrictions("listingImages", {
		allowedFileTypes: ["image/png", "image/jpeg", "image/gif"],
		maxSize: 2 * 1024 * 1024 // 4 MB
	});

}
