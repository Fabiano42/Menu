window.onload = function(){
    var formulario = document.getElementById("login");
    formulario.addEventListener("submit", validaformulario);
}



 function validaformulario(event){
    var formulario= document.getElementById("login");
    n = formulario.elements.length;

    for( i=0; i < n; i++) {
        var input = formulario.elements[i];

        if (input.value == "") {
            input.focus();
            input.style.border = "0px solid #f00";
            event.preventDefault();
            break;
        }
    }
} 

