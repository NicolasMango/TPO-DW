$(document).ready(function () {

    'use strict';

    for (let i = 0; i < productos.length; i++) {

        $('#productos').append(
            '<div class="col-6 col-md-4 my-3">' +
                '<div class="sc-product-item">' +
                    '<img class="img-fluid" data-name="product_image" src="imagenes/servicios/'+ productos[i]['Imagen'] +'" alt="'+ productos[i]['Nombre'] +'">' +
                    '<h4 data-name="product_name">'+ productos[i]['Nombre'] +'</h4>' +
                    '<p data-name="product_desc">'+ productos[i]['Descripcion'] +'</p>' +
                    '<input name="product_price" value="'+ productos[i]['Precio'] +'" type="hidden" >' +
                    '<input name="product_id" value="'+ productos[i] +'" type="hidden" >' +
                    '<div>$ '+ productos[i]['Precio'] +'</div>' +
                    '<button class="sc-add-to-cart btn btn-success my-3">Agregar</button>' +
                '</div>' +
            '</div>'
        );
    }


    $('#smartcart').smartCart({

        cartItemTemplate: '<div class="d-flex">'+
            //'<img class="img-fluid" src="{product_image}" />' +
            '<h3 class="h5 list-group-item-heading">{product_name}</h3>' +
        '</div>',

        lang: {
            cartTitle: 'Mis servicios',
            checkout: 'Checkout',
            clear: 'Borrar',
            subtotal: 'Subtotal:',
            cartRemove:'×',
            cartEmpty: '¡No escogió ningún servicio!<br />Comenzá a elegir'
        }
    });
});