Router.route('/', function () {
  this.render('Home', {
    data: {title: 'Title'}
  });
});

Router.route('/help', function(){
	this.render('helpcenter');
});


