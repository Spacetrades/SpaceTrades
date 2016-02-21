if (Meteor.isClient){

  Template.ModalEditListing.onRendered(function () {

   var brands = {
        'Apparel': ['Bape', 'Supreme'],
        'Electronics': ['Apple', 'Asus', 'Beats by Dr Dre', 'Blackberry', 'Bose', 'Cannon', 'Dell', 'Go Pro', 'Google', 'HP', 'Lenovo', 'Logitech', 'Microsoft', 'Nikon', 'Nintendo', 'Panasonic', 'Samsung', 'Sandisk', 'Sharp', 'Sony', 'Turtle Beach', 'Vizio'],
        'Shoes': ['Asics', 'Jordans', 'Converse', 'Ewing Athletics', 'Fila', 'Li Ning', 'New Balance', 'Nike', 'Puma', 'Radii', 'Reebok', 'Saucony', 'Sperry', 'Supra', 'Timberland', 'Toms', 'Vans', 'Under Armour'],
        'Other': ['Other']
      }
try {

console.log(brands[this.data.category]);


      _.each(brands[this.data.category], function(val){
        $("<option>" + val + "</option>").appendTo('.brandSelect');
      });

}

catch(e){
  console.log("oh no");
}

  });
}
