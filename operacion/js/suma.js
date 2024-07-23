function resta(){
    let numeroUno = parseInt(document.getElementById('txtNumeroUno').value);
    let numeroDos = parseInt(document.getElementById('txtNumeroDos').value);
    let restar;
    restar = numeroUno - numeroDos;
    document.getElementById('resta').innerHTML = '<strong>' +restar+ '</strong>';
    return false;
}
function multiplicacion(){
    let numeroUno = parseInt(document.getElementById('txtNumeroUno').value);
    let numeroDos = parseInt(document.getElementById('txtNumeroDos').value);
    let multiplicar;
    multiplicar = numeroUno * numeroDos;
    document.getElementById('multiplicacion').innerHTML = '<strong>' +multiplicar+ '</strong>';
    return false;
}
function division(){
    let numeroUno = parseInt(document.getElementById('txtNumeroUno').value);
    let numeroDos = parseInt(document.getElementById('txtNumeroDos').value);
    let dividir;
    dividir = numeroUno / numeroDos;
    document.getElementById('division').innerHTML = '<strong>' +dividir+ '</strong>';
    return false;
}