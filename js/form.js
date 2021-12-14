//variables 
const usuario = document.querySelector("#nombreU");
const mail = document.querySelector("#emailU");
const interes = document.querySelector("#interes");
const prodIphone= document.querySelector("#productosIphone");
const prodSamsung= document.querySelector("#productosSamsung");
const fundIp = document.querySelector("#formIphone");
const fundSam = document.querySelector("#formSamsung");
const otrosAcc= document.querySelector("#otrosAcc");
const otrosAcc2= document.querySelector("#formOtros");
const enviar = document.querySelector("#btn");
const formulario = document.querySelector("#formulario");
const final = document.querySelector("#mostrarFinal");


//funcion error 
const mosError = (input, mensaje) => {
    const formField = input.parentElement;

    formField.classList.remove('valido');
    formField.classList.add("error");

    const error = formField.querySelector("small");
    error.textContent = mensaje;
}
// funcion validar 
const mosValido = (input) => {
    const formField = input.parentElement;

    formField.classList.remove('error');
    formField.classList.add("valido");
    
    const error = formField.querySelector("small");
    error.textContent = '';
}

const validacionUsuario = ()=> {
    let valido = false;
    const min = 5;
    const max = 15;
    const username = usuario.value.trim();

    if (username == '') {
        mosError(usuario,"El usuario no puede estar vacio");
    } else if (username.length < min || username.length > max) {
        mosError(usuario, `El usuario debe tener entre ${min} y ${max} caracteres`);
    } else {
        mosValido(usuario);
        valido = true;
    }
    return valido;
}

usuario.onchange = () => {
    validacionUsuario();
}


$("#btn").on('click',function(){
    $("#mostrarFinal").prepend(
                    `<div>
                        <p> Nuestro catalogo con los productos que le interesan le seran enviados a su correo electronico</p>
                        <h4>Gracias por su consulta</h4>
                    </div>`
    );
});

/*
    let misDatos ={
        usuario,
        mail,

    };
    //AJAX ENVIO FORMULARIO CON EXITO
    const URL ="http://localhost:3000/api/formulario";
    $("#datosPost").on("click", function(){
        $.post(URL,misDatos,function(){
            alert("Datos enviados correctamente");
        })
    });
*/