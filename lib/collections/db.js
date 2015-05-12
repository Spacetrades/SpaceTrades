//Mongo Collections Here
Listing = new Mongo.Collection('listing');
Message = new Mongo.Collection('message');
Images = new FS.Collection("images", {
  stores: [new FS.Store.FileSystem("images", {path: "/Users/rex/Desktop/Trade/public/images"})]
});

// cfs.images.filerecord