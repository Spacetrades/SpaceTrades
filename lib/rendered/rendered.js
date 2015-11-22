if (Meteor.isClient) {

    // Custom Functions

    var keyPress = {
        nav: function(elem) {
            // Works for headerpre, headerpost, headersearch, 
            $("." + elem).keypress(function(e) {
                var key = e.which;
                if (key == 13) {
                    var search = $("." + elem).val();
                    var options = {
                        search: search
                    }
                    ListingSearch.search(search);
                    Router.go("/search");
                }
            });
        },
        home: function(elem) {
            // Works for headerpre, headerpost, headersearch, 
            $("." + elem).keypress(function(e) {
                var key = e.which;
                if (key == 13) {
                    var search = $("." + elem).val();
                    console.log(search);
                    var options = {
                        search: search
                    }
                    ListingSearch.search(search);
                    $(".homesearchbtn").click();
                }
            });
        },

        // Only allow integers
        int: function(elem) {
            $("." + elem).keypress(function(key) {
                if (key.charCode < 48 || key.charCode > 57) return false;
            });
        },

        string: function() {
            $("." + elem).keypress(function(key) {
                if (!key.charCode < 48 || !key.charCode > 57) return false;
            });
        }

    }

    // Find all the users listings filtered by the current month and return array of numbers to pass to graph js
    // This should look like [0,0,1,0,...]

    // Template.LayoutHelp.onRendered(function() {

    //     // Move to the top of the page 
    //     $('html, body').animate({
    //         scrollTop: 0
    //     }, 'slow');

    // });

    Template.UserProfile.onRendered(function() {
        $('[data-toggle="tooltip"]').tooltip();

        // Get context with jQuery - using jQuery's .get() method.
        var ctx = $("#myChart").get(0).getContext("2d");
        // This will get the first returned node in the jQuery collection.


        // Global Chat options
        var options = {
            // Boolean - Whether to animate the chart
            animation: true,

            // Number - Number of animation steps
            animationSteps: 60,

            // String - Animation easing effect
            // Possible effects are:
            // [easeInOutQuart, linear, easeOutBounce, easeInBack, easeInOutQuad,
            //  easeOutQuart, easeOutQuad, easeInOutBounce, easeOutSine, easeInOutCubic,
            //  easeInExpo, easeInOutBack, easeInCirc, easeInOutElastic, easeOutBack,
            //  easeInQuad, easeInOutExpo, easeInQuart, easeOutQuint, easeInOutCirc,
            //  easeInSine, easeOutExpo, easeOutCirc, easeOutCubic, easeInQuint,
            //  easeInElastic, easeInOutSine, easeInOutQuint, easeInBounce,
            //  easeOutElastic, easeInCubic]
            animationEasing: "easeOutQuart",
            pointHitDetectionRadius: 2,

            //Boolean - Whether to show a stroke for datasets
            datasetStroke: true,

            //Number - Pixel width of dataset stroke
            datasetStrokeWidth: 2,

            // Boolean - If we should show the scale at all
            showScale: true,

            // Boolean - If we want to override with a hard coded scale
            scaleOverride: false,

            // ** Required if scaleOverride is true **
            // Number - The number of steps in a hard coded scale
            scaleSteps: null,
            // Number - The value jump in the hard coded scale
            scaleStepWidth: null,
            // Number - The scale starting value
            scaleStartValue: null,

            // String - Colour of the scale line
            scaleLineColor: "rgba(0,0,0,.1)",

            // Number - Pixel width of the scale line
            scaleLineWidth: 1,

            // Boolean - Whether to show labels on the scale
            scaleShowLabels: true,

            // Interpolated JS string - can access value
            scaleLabel: "<%=value%>",

            // Boolean - Whether the scale should stick to integers, not floats even if drawing space is there
            scaleIntegersOnly: true,

            // Boolean - Whether the scale should start at zero, or an order of magnitude down from the lowest value
            scaleBeginAtZero: false,

            // String - Scale label font declaration for the scale label
            scaleFontFamily: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",

            // Number - Scale label font size in pixels
            scaleFontSize: 12,

            // String - Scale label font weight style
            scaleFontStyle: "normal",

            // String - Scale label font colour
            scaleFontColor: "#666",

            // Boolean - whether or not the chart should be responsive and resize when the browser does.
            responsive: false,

            // Boolean - whether to maintain the starting aspect ratio or not when responsive, if set to false, will take up entire container
            maintainAspectRatio: true,

            // Boolean - Determines whether to draw tooltips on the canvas or not
            showTooltips: false,

            // Function - Determines whether to execute the customTooltips function instead of drawing the built in tooltips (See [Advanced - External Tooltips](#advanced-usage-custom-tooltips))
            customTooltips: false,

            // Array - Array of string names to attach tooltip events
            tooltipEvents: ["mousemove", "touchstart", "touchmove"],

            // String - Tooltip background colour
            tooltipFillColor: "rgba(0,0,0,0.8)",

            // String - Tooltip label font declaration for the scale label
            tooltipFontFamily: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",

            // Number - Tooltip label font size in pixels
            tooltipFontSize: 14,

            // String - Tooltip font weight style
            tooltipFontStyle: "normal",

            // String - Tooltip label font colour
            tooltipFontColor: "#fff",

            // String - Tooltip title font declaration for the scale label
            tooltipTitleFontFamily: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",

            // Number - Tooltip title font size in pixels
            tooltipTitleFontSize: 14,

            // String - Tooltip title font weight style
            tooltipTitleFontStyle: "bold",

            // String - Tooltip title font colour
            tooltipTitleFontColor: "#fff",

            // Number - pixel width of padding around tooltip text
            tooltipYPadding: 6,

            // Number - pixel width of padding around tooltip text
            tooltipXPadding: 6,

            // Number - Size of the caret on the tooltip
            tooltipCaretSize: 8,

            // Number - Pixel radius of the tooltip border
            tooltipCornerRadius: 6,

            // Number - Pixel offset from point x to tooltip edge
            tooltipXOffset: 10,

            // String - Template string for single tooltips
            tooltipTemplate: "<%if (label){%><%=label%>: <%}%><%= value %>",

            // String - Template string for multiple tooltips
            multiTooltipTemplate: "<%= value %>",

            scaleFontFamily: "'Abel'"

        }

        function daysInMonth(year, month) {
            return new Date(year, month, 0).getDate();
        };

        var monthNumber = new Date().getMonth();
        var monthNames = ["January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"
        ];
        var year = new Date().getFullYear();
        var month = monthNames[monthNumber];
        var days = daysInMonth(year, monthNumber);
        var dayEach = []

        for (i = 1; i < days; i++) {
            dayEach.push(i);
        }

        var data = {
            labels: dayEach,
            datasets: [{
                label: "Bought",
                fillColor: "white",
                strokeColor: "#f8504b",
                pointColor: "#00bfff",
                pointStrokeColor: "#fff",
                pointHighlightFill: "#fff",
                pointHighlightStroke: "rgba(151,187,205,1)",
                data: [1, 0, 1, 0, 0, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0]
            }]
        };

        var myLineChart = new Chart(ctx).Line(data, options);

    });


    Template.headersearchpre.onRendered(function() {
        keyPress.nav("navsearchf");
    });

    Template.homeheaderpre.onRendered(function() {
        keyPress.home("search");
    });


 

}