Router.configure({
  layoutTemplate: 'LayoutDefault',
  notFoundTemplate: 'not_found'
});

// 404 Error page

// Router.plugin('dataNotFound', {notFoundTemplate: 'not_found'});

Router.route('/', function () {
  this.render('home');
});

Router.route('/add', function () {
  this.layout('LayoutDefault')
  this.render('addlisting');
});

Router.route('/request', function () {
  this.layout('LayoutDefault');
  this.render('meetuprequest');
})

Router.route('/feedback', function () {
  this.layout('LayoutDefault');
  this.render('feedbackinitial');
})


// NOTE: We will want to switch over to dynamically assigning route with /help/[NAME OF HTML PAGE] 

// Help Center //

// Root
Router.route('/help', function () {
  this.layout('LayoutHelp');
  this.render('Help');
});

// About
Router.route('/help/about', function () {
  this.layout('LayoutHelp');
  this.render('about');
});

// FAQ
Router.route('/help/faq', function () {
  this.layout('LayoutHelp');
  this.render('faq');
});

// Safety 
Router.route('/help/safety', function () {
  this.layout('LayoutHelp');
  this.render('safety');
});

// Privacy and Terms
Router.route('/help/privacy', function () {
  this.layout('LayoutHelp');
  this.render('privacy');
});

// Contact
Router.route('/help/contact', function () {
  this.layout('LayoutHelp');
  this.render('contact');
});

// Listings //

// Electronics
Router.route('/electronics', function () {
  this.layout('LayoutOne');
  this.render('faq');
});

// Shoes
Router.route('/shoes', function () {
  this.layout('LayoutOne');
  this.render('faq');
});

// Apparel
Router.route('/apparel', function () {
  this.layout('LayoutOne');
  this.render('faq');
});

// Other
Router.route('/other', function () {
  this.layout('LayoutOne');
  this.render('faq');
});