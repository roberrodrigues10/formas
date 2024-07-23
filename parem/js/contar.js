function pares(){
    let numeroUno = parseInt(document.getElementById('txtNumeroUno').value);
    let numeroDos = parseInt(document.getElementById('txtNumeroDos').value);    
    let resultado = ''; 
    
    for (numeroUno = 1; numeroUno <= numeroDos; numeroUno++) {
        resultado += '<strong>' + numeroUno + '</strong> ';
        if (numeroUno % 2 === 0) {
            document.getElementById('contar').innerHTML = resultado += '<strong> Es par</strong> ';
        }
        else{
            document.getElementById('contar').innerHTML = resultado += '<strong> Es impar</strong> ';
        }
        contar++;  
    }
    
    document.getElementById('contar').innerHTML = resultado;
    return false; 
}
