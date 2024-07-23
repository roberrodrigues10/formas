function edad(){
    let edad = parseInt(document.getElementById('txtNumeroUno').value);
    if (edad >= 18) {
        document.getElementById('edad').innerHTML = '<strong> Es mayor de edad' + '</strong>';
    }
    else{
        document.getElementById('edad').innerHTML = '<strong> Es menor de edad'+ '</strong>';
    }
    return false;
}