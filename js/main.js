//agregamos boton a las imagenes
jQuery(()=>{
    
    $("#btnIphone").append(`<button id="btnIphone"> Conocer! </button>`);
    $("#btnIphone").on("click",function(){
    //al tocar el boton dirigir a la pagina que corresponde 
        window.location.href="iphone.html";
    });

    $("#btnSamsung").append(`<button id="btnSamsung"> Conocer! </button>`);
    $("#btnSamsung").on("click",function(){
        window.location.href="samsung.html";
    });
});
