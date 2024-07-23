function porcentajeTres(){
    let numeroUno = parseInt(document.getElementById('txtNumeroUno').value);
    let numeroDos = parseInt(document.getElementById('txtNumeroDos').value);
    let numeroTres = parseInt(document.getElementById('txtNumeroTres').value);
    numeroUno = numeroUno*30;
    numeroDos = numeroDos*30;
    numeroTres = numeroTres*40;
    let porcentaje;
    porcentaje = numeroUno+numeroDos+numeroTres;
    document.getElementById('porcentajes').innerHTML = '<strong>' +porcentaje+ '</strong>';
    return false;
}