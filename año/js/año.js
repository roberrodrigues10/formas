function año(){
    let anionacUno = parseInt(document.getElementById('txtNumeroUno').value);
    let anionacDos = parseInt(document.getElementById('txtNumeroTres').value);
    let anionacTres = parseInt(document.getElementById('txtNumeroCuatro').value);
    let anioactual = parseInt(document.getElementById('txtNumeroDos').value);
    edadUno = anioactual - anionacUno;
    edadDos = anioactual - anionacDos;
    edadTres = anioactual - anionacTres;
    promedio = (edadUno + edadDos + edadTres)/3;
    if (promedio >= 18) {
        document.getElementById('año').innerHTML = '<strong> El promedio se identifica con la mayoria de edad ' + '</strong>';
    }
    else{
        document.getElementById('año').innerHTML = '<strong> No se identifica con la mayoria de edad '+'</strong>';
    }
    document.getElementById('promedio').innerHTML = '<strong> '+promedio+'</strong>';

    return false;
}