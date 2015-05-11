//Mongo Collections Here
Listing = new Mongo.Collection('listing');
Message = new Mongo.Collection('message');
Images = new FS.Collection("images", {
  stores: [new FS.Store.FileSystem("images", {path: "~/uploads"})]
});

// cfs.images.filerecord