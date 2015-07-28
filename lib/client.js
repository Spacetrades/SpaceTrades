if (Meteor.isClient) {

analytics.load("FDE0SPIWcKWyHPgVye3LmS97lSe95ztD");


// 	var info = HTTP.get("http://ipinfo.io", function (error, result) {
//   console.log(result.content);
// });


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
  maxSize: 4 * 1024 * 1024 // 4 MB
});

}