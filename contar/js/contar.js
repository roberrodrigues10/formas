function contar(){
    let numeroUno = parseInt(document.getElementById('txtNumeroUno').value);
    let numeroDos = parseInt(document.getElementById('txtNumeroDos').value);    
    let resultado = ''; 
    
    while (numeroUno <= numeroDos) {
        resultado +='<strong>' + numeroUno + '</strong> '; 
        numeroUno++; 
    }
    
    document.getElementById('contar').innerHTML = resultado;
    return false; 
}
