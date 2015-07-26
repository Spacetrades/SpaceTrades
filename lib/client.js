if (Meteor.isClient) {

analytics.load("FDE0SPIWcKWyHPgVye3LmS97lSe95ztD");

Session.set('chapp-username','chackerian'); //you could set the user name on user login
Session.set('chapp-docid','1232qda'); //The room identifier. Iron router's before action can be a great spot to set this.
Session.set('chapp-historysince',new Date()); //Limit messages based on the date they were posted

// sAlert.config({ 
// 	html: true,
// 	timeout: 5000
// });


var options = {
  keepHistory: 1000 * 60 * 5,
  // Allow local offline search from the cache
  localSearch: true
};

var fields = ['listing_title','brand'];

 // ShareIt.configure({
 //        sites: {
 //            'facebook': {
 //                'appId': '403772073107923'
 //            }
 //        }
 //    });

ListingSearch = new SearchSource('listing', fields, options);

//            //
// Amazon S3  //
//            //

Slingshot.fileRestrictions("listingImages", {
  allowedFileTypes: ["image/png", "image/jpeg", "image/gif"],
  maxSize: 10 * 1024 * 1024 // 10 MB
});

}