function porcentajeDos(){
    let numeroUno = parseInt(document.getElementById('txtNumeroUno').value);
    let numeroDos = parseInt(document.getElementById('txtNumeroDos').value);
    let numeroTres = parseInt(document.getElementById('txtNumeroTres').value);
    let porcentaje;
    porcentaje = (numeroUno+numeroDos+numeroTres)/3;
    document.getElementById('porcentajes').innerHTML = '<strong>' +porcentaje+ '</strong>';
    return false;
}