if (Meteor.isClient) {
	  Template.item.onRendered(function() {
        GoogleMaps.load({
            v: '3',
            key: 'AIzaSyAi0bRmwNIWv24KjjeiG0DlcU-jFLPJ9FQ',
            libraries: 'geometry,places'
        });
        $('[data-toggle="tooltip"]').tooltip();

  paymentSwitch = {
      cash : Boolean(this.data.payment == "Cash"),
      amazon : Boolean(this.data.payment == "Amazon"),
      paypal : Boolean(this.data.payment == "Paypal"),
      both : Boolean(this.data.payment == "Both")
    }

        //  $('.imgBreak').error( function(){
        //   $(this).attr('src', 'default-item-img.jpg');
        // });

        $(function () {
      $('.click-nav > ul').toggleClass('no-js js');
      $('.click-nav .js ul').hide();
      $(document).click(function() {
        if ($('.click-nav .js ul').is(':visible')) {
          $('.click-nav .js ul', this).slideUp();
          $('.clicker').removeClass('active');
      }
  });
  });

    });


}
