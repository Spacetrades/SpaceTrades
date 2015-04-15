// On Client and Server
Players = new Meteor.Collection('players');
// name is the field of the documents to search over
Players.initEasySearch('name');
// Session.set('chapp-username','Desired username'); //you could set the user name on user login
// Session.set('chapp-docid','uniqueIdentifier'); //The room identifier. Iron router's before action can be a great spot to set this.