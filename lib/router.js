// Home
// Router.route('/', function(){
// 	this.render
// });

// Help
Router.route('/help', function () {
	this.render('helpcenter');
});

// Item
// Router.route('/items/:_id', function () {
//   var item = Items.findOne({_id: this.params._id});
//   this.render('ShowItem', {data: item});
// });

// Profile
Router.route('/profile', function () {
	this.render('profile');
});

// Messages
Router.route('/404', function () {
	this.render('404');
});


