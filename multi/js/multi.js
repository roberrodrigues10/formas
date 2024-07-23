function multi(){
    let multiplicar = parseInt(document.getElementById('txtNumeroUno').value);
    let multiplicador = parseInt(document.getElementById('txtNumeroDos').value);    
    let resultado = ''; 
    
    while (multiplicar <= multiplicador) {
        resultado += '<strong>' + multiplicar + '</strong> '; 
        multiplicar++;
        producto = multiplicar * multiplicador 
    }
    document.getElementById('multi').innerHTML = '<strong>'+multiplicar +' x ' +multiplicador +' = ' + producto +'</strong> ';

    
    return false; 
}
