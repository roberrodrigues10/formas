function suma(){
    let numeroUno = parseInt(document.getElementById('txtNumeroUno').value);
    let numeroDos = parseInt(document.getElementById('txtNumeroDos').value);
    let sumar;
    sumar = numeroUno + numeroDos;
    document.getElementById('suma').innerHTML = '<strong>' +sumar+ '</strong>';
    return false;
}