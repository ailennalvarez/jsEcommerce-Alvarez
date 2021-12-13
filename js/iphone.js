
class Iphone{
    constructor(descripcion,precio,stock){
        this.descripcion = descripcion;
        this.precio = precio;
        this.stock = stock;
        this.imagen = imagen;
    }
    sumaIva(){
        this.precio = this.precio * 1.21;
    }
}

//eventos con jQuery
jQuery(()=>{

const agregarFunda=[
    {descripcion:"Silicon Rosa",precio:"$500",stock:10,Image:"js/imagenes/siliconcase.png"},
    {descripcion:"Silicon Verde",precio:"$500",stock:10,Image:"js/imagenes/siliconVerde.PNG"},
    {descripcion:"Silicon Roja",precio:"$500",stock:10,Image:"js/imagenes/siliconRoja.PNG"},
    {descripcion:"Rigida Glitter 1",precio:"$1000",stock:10,Image:"js/imagenes/reforzadaGlitterA.PNG"},
    {descripcion:"Rigida Glitter 2",precio:"$1000",stock:10,Image:"js/imagenes/reforzadaGlitterB.PNG"},
    {descripcion:"Rigida Glitter 3",precio:"$1000",stock:10,Image:"js/imagenes/reforzadaGlitterC.PNG"},
];

for (const productos of agregarFunda) {
    $("#contenedor-prod").append(
        `<div class="col-sm-4">
          <div class="card">
            <div class="card-body" id="caja-stock">
              <img src=${productos.Image} class="card-img-top imgI" alt="funda de silicona para iphone">
              <h5 class="card-title"  id="nombreProd"> ${productos.descripcion}</h5>
              <p class="card-text" id="precio">Precio : ${productos.precio}</p>
              <p class="card-text">Cantidad disponible: ${productos.stock}</p>
              <button class="btn btn-primary agregarCarrito" id="miBoton"> Lo quiero!</button>
            </div>
          </div>`
          
    );
}
    /*
        $("#miBoton").on('click',function(){
            $("#compras").append(
                `<div>
                    <br>
                    <h1>Tu funda fue agregada al carrito!</h1>
                    <button class="btn btn-primary" id="btnCarrito"> Ir al carrito !</button>                          
                </div>`
                
            );
            $("#btnCarrito").on('click',function(){
                window.location.href = "carrito.html";
            });
        });*/
     const agregar = $("#miBoton");
        agregar.on('click',function(){
            let descripcion = $(this).parent().find("#nombreProd").text();
            let precio = $(this).parent().find("#precio").text();
            $("#compras").append(
                `<div>
                    <br>
                    <h1>Tu funda fue agregada al carrito!</h1>
                    <p> ${descripcion}</p>
                    <p> ${precio}</p>
                    <button class="btn btn-primary" id="btnCarrito"> Ir al carrito !</button>
                </div>`
            );
                $("#btnCarrito").on('click',function(){
                    window.location.href = "carrito.html";
                });
        });
        //carrito
            $(".comprasFinal").append(
            `<div aria-live="polite" aria-atomic="true" class="d-flex justify-content-center align-items-center w-300">
            <div class="toast show carrito" role="alert" aria-live="assertive" aria-atomic="true" >
                <div class="toast-header">
                    <strong class="me-auto">Su carrito</strong>
                    <small>En proceso</small>
                    <button type="button" class="btn-close ms-2 mb-1" data-bs-dismiss="toast" aria-label="Close">
                    <span aria-hidden="true"></span>
                    </button>
                </div>
                <div class="toast-body">
                    <h1> Verifique su email para terminar el proceso </h1>
                    <h6> Muchas gracias por su compra </h6>
                </div>
                </div>`
        );
});

