// Router.configure({
// 	layoutTemplate: 'Layout'
// })

// // Home
// Router.route('/', function () {
// 	this.render('home');
// });

// // Help
// Router.route('/help', function () {
// 	this.render('helpcenter');
// });



// Item
// Router.route('/items/:_id', function () {
//   var item = Items.findOne({_id: this.params._id});
//   this.render('ShowItem', {data: item});
// });

// Profile
// Router.route('/profile', function () {
// 	this.render('profile');
// });

// // Messages
// Router.route('/404', function () {
// 	this.render('404');
// });


Router.configure({
  // the default layout
  layoutTemplate: 'LayoutDefault'
});

Router.route('/', function () {
  // set the layout programmatically
  this.layout('LayoutDefault');

  // render the template
  this.render('home');
});

Router.route('/help', function () {
  // set the layout programmatically
  this.layout('LayoutHelp');

  // render the template
  this.render('Help');
});

Router.route('/help/faq', function () {
  // set the layout programmatically
  this.layout('LayoutHelp');

  // render the template
  this.render('faq');
});


Router.route('/electronics', function () {
  // set the layout programmatically
  this.layout('LayoutOne');

  // render the template
  this.render('faq');
});

Router.route('/shoes', function () {
  // set the layout programmatically
  this.layout('LayoutOne');

  // render the template
  this.render('faq');
});

Router.route('/other', function () {
  // set the layout programmatically
  this.layout('LayoutOne');

  // render the template
  this.render('faq');
});

