//valor constante para el valor de ticket
const valorTicket = 200;
console.log("se ve bien");
//porcentaje de descuento segun categoria

let descuentoEstudiante = 80;
let descuentoTrainee = 50;
let descuentoJunior = 15;

//elementos en variables
let nombre = document.getElementById('nombre');
let apellido= document.getElementById('apellido');
let email = document.getElementById('email');
let cantidadTickets = document.getElementById('cantidadTickets');
let categoria = document.getElementById('categoriaSelect');

//funsion para quitar el estilo de error a los elementos del formulario

function quitarClaseError(){
    let arrayElementos = document.querySelectorAll(".form-control, .form-select");
    for (let i = 0; i < arrayElementos.length; i++){
      arrayElementos[i].classList.remove('is-invalid');
    }
}
//calculo total a pagar
function total_a_pagar(){
    //ejectuto funcion para que quite todos loss estilos de error en los campos que lo tuvieran
    quitarClaseError();
    if(nombre.value === ""){
        alert("por favor, escibì tu nombre");
        nombre.classList.add("is-invalid");
        nombre.autofocus();
        return;
    }
    if(apellido.value === ""){
        alert("por favor, escibì tu apellido");
        apellido.classList.add("is-invalid");
        apellido.focus();
        return;
     }
    if(email.value === ""){
        alert("por favor, escibì tu email");
        email.classList.add("is-invalid");
        email.focus();
        return;
     }
     //funcion que determina si el email es valido

     const emailValido = email => {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
     }
     if(!emailValido(email.value)){
        alert("Por favor, ingresar un email valido");
        email.classList.add("is-invalid");
        email.focus();
        return;
     }

     //verifica si está ingresando al menos 1 ticket, sino, aplica un estilo de error, hace foco en el campo
     if ((cantidadTickets.value ==0)||(isNaN(cantidadTickets.value))){
        alert("Por favor, ingresá correctamente la cantidad de tickets");
        cantidadTickets.classList.add("is-invalid");
        cantidadTickets.focus();
        return;
     }
     //verifico que haya seleccionado una categoria, sino que aplique un estilo de error
     if (categoria.value == ""){
        alert("Por favor,seleccioná una categoria");
        categoria.classList.add("is-invalid");
        categoria.focus();
        return;
     }

     //Multiplico la cantidad de tickets por el valor
     let totalValorTickets = (cantidadTickets.value) * valorTicket;

     //aplico descuento segun la categoria
     if (categoria.value == 0){
        totalValorTickets = totalValorTickets;
     }
     if (categoria.value == 1){
        totalValorTickets = totalValorTickets -(descuentoEstudiante/100*totalValorTickets);
     }
     if (categoria.value == 2){
        totalValorTickets = totalValorTickets -(descuentoTrainee /100*totalValorTickets);
     }
     if (categoria.value == 3){
        totalValorTickets = totalValorTickets -(descuentoJunior /100*totalValorTickets);
     }
     //insertar el valor final en el html
     totalPago.innerHTML = totalValorTickets;
}
let btnResumen = document.getElementById("btnResumen");
//el boton resumen recibe el escuchador y la funcion del calculo
btnResumen.addEventListener("click", total_a_pagar);

function reset_total_a_pagar(){
    quitarClaseError();
    totalPago.innerHTML ="";
}
btnBorrar.addEventListener('click',reset_total_a_pagar);
