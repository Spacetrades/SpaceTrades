if (Meteor.isClient){
	Template.card.events({
  // Fires when any element is clicked
  'click': function (event) { console.log("ALERT")}
});
}

if (Meteor.isCordova){
	console.log("true");
}

Meteor.startup(function(){
	var x = 'startup'
})

// Meteor.wrapAsync()