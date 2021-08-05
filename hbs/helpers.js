const hbs = require('hbs');
const fs = require('fs');

//Helpers
hbs.registerHelper('getAnio', ()=>{
    return new Date().getFullYear();
  });

hbs.registerHelper('inventario', ()=>{
    var jsonString = fs.readFileSync("./data/products.json");
    var data = JSON.parse(jsonString);
    var products = "";

    for (x of data) {
        products +=
            '<div class="image-port">'+
                '<img id="image-inventory" src="' + x.imagen +'">'+
                '<h2>' + x.nombre + '</h2>' +
                '<h3>' + x.precio + '</h3>' +
            '</div>'
        ;             
    }

    return new hbs.SafeString(products);
});