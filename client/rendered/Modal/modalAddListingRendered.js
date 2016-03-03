if (Meteor.isClient) {

  Template.ModalAddListing.onRendered(function() {

    for (i = 2; i < 7; i++) {
      $(".step-" + i).hide()
    }

    GoogleMaps.load({
      v: '3',
      key: 'AIzaSyAi0bRmwNIWv24KjjeiG0DlcU-jFLPJ9FQ',
      libraries: 'geometry,places'
    });

    // Bootstrap Tooltips
    $('[data-toggle="tooltip"]').tooltip();

    keyPress.int("listprice");

    $(".listdescription").editable({
      inlineMode: false
    });

    $("#colorpicker").spectrum({
      color: "#000",
      showInput: true,
      className: "full-spectrum",
      showInitial: true,
      showPalette: true,
      showSelectionPalette: true,
      maxSelectionSize: 10,
      preferredFormat: "hex",
      move: function(color) {

      },
      show: function() {

      },
      beforeShow: function() {

      },
      hide: function() {

      },
      change: function() {

      },
      // TASK - Get from footlocker
      palette: [
        ["rgb(0, 0, 0)", "rgb(67, 67, 67)", "rgb(102, 102, 102)",
          "rgb(204, 204, 204)", "rgb(217, 217, 217)", "rgb(255, 255, 255)"
        ],
        ["rgb(152, 0, 0)", "rgb(255, 0, 0)", "rgb(255, 153, 0)", "rgb(255, 255, 0)", "rgb(0, 255, 0)",
          "rgb(0, 255, 255)", "rgb(74, 134, 232)", "rgb(0, 0, 255)", "rgb(153, 0, 255)", "rgb(255, 0, 255)"
        ],
        ["rgb(69, 129, 142)", "rgb(60, 120, 216)", "rgb(61, 133, 198)", "rgb(103, 78, 167)", "rgb(166, 77, 121)",
          "rgb(91, 15, 0)", "rgb(102, 0, 0)", "rgb(120, 63, 4)", "rgb(127, 96, 0)", "rgb(39, 78, 19)",
          "rgb(12, 52, 61)", "rgb(28, 69, 135)", "rgb(7, 55, 99)", "rgb(32, 18, 77)", "rgb(76, 17, 48)"
        ]
      ]
    });
  });

}
