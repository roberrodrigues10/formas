function edad(){
    let anionac = parseInt(document.getElementById('txtNumeroUno').value);
    let anioactual = parseInt(document.getElementById('txtNumeroDos').value);
    let edad;
    edad = anioactual - anionac;
    if (edad > 17) {
        document.getElementById('edad').innerHTML = '<strong> Tienes ' +edad+  ' años, eres mayor de edad</strong>';
    }
    else{
        document.getElementById('edad').innerHTML = '<strong> Tienes ' +edad+ ' años, eres menor de edad</strong>';
    }
    return false;
}