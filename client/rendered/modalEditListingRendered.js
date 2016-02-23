if (Meteor.isClient){

  Template.EditListing.onRendered(function () {

   var brands = {
        'Apparel': ['Bape', 'Supreme'],
        'Electronics': ['Apple', 'Asus', 'Beats by Dr Dre', 'Blackberry', 'Bose', 'Cannon', 'Dell', 'Go Pro', 'Google', 'HP', 'Lenovo', 'Logitech', 'Microsoft', 'Nikon', 'Nintendo', 'Panasonic', 'Samsung', 'Sandisk', 'Sharp', 'Sony', 'Turtle Beach', 'Vizio'],
        'Shoes': ['Asics', 'Jordans', 'Converse', 'Ewing Athletics', 'Fila', 'Li Ning', 'New Balance', 'Nike', 'Puma', 'Radii', 'Reebok', 'Saucony', 'Sperry', 'Supra', 'Timberland', 'Toms', 'Vans', 'Under Armour'],
        'Other': ['Other']
      }
try {

var selected = Session.get("listingSelected").category || Session.get("scope").category;
console.log(selected);

      _.each(brands[selected], function(val){
        $("<option>" + val + "</option>").appendTo('.brandSelect');
      });

}

catch(e){
  console.log("oh no");

  var selected = Session.get("listingSelected").category || this.data;
console.log(selected);
}

  });
}
