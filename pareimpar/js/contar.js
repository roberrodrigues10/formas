function pares() {
    let contar = parseInt(document.getElementById('txtNumeroUno').value);
    let limite = parseInt(document.getElementById('txtNumeroDos').value);
    let resultado = ''; 

    while (contar <= limite) {
        resultado += '<strong>' + contar + '</strong> '; 
        if (contar % 2 === 0) {
            document.getElementById('contar').innerHTML = resultado += '<strong> Es par</strong> ';
        }
        else{
            document.getElementById('contar').innerHTML = resultado += '<strong> Es impar</strong> ';
        }
        contar++; 
    }


    return false; 
}
