if (Meteor.isClient) {

var options = {
  keepHistory: 1000 * 60 * 5,
  // Allow local offline search from the cache
  localSearch: true
};

var fields = ['listing_title','brand'];

ListingSearch = new SearchSource('listing', fields, options);

//            //
// Amazon S3  //
//            //

Slingshot.fileRestrictions("listingImages", {
  allowedFileTypes: ["image/png", "image/jpeg", "image/gif"],
  maxSize: 10 * 1024 * 1024 // 10 MB
});

}