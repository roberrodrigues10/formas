function porcentajeUno(){
    let numeroUno = parseInt(document.getElementById('txtNumeroUno').value);
    let porcentaje;
    porcentaje = numeroUno/100 ;
    document.getElementById('porcentajes').innerHTML = '<strong>' +porcentaje+ '</strong>';
    return false;
}