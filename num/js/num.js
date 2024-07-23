function num(){
    let numeroUno = parseInt(document.getElementById('txtNumeroUno').value);
    let numeroDos = parseInt(document.getElementById('txtNumeroDos').value);
    if (numeroUno == numeroDos) {
        document.getElementById('num').innerHTML = '<strong>' +numeroUno+ ' y ' +numeroDos+ ' Son iguales</strong>';
    }
    else{
        if (numeroUno > numeroDos) {
            document.getElementById('num').innerHTML = '<strong>' +numeroUno+ ' es mayor que ' +numeroDos+ '</strong>';
        }
        else{
            document.getElementById('num').innerHTML = '<strong>' +numeroDos+ ' es mayor que ' +numeroUno+ '</strong>';
        }
        
    }    
    return false;
}