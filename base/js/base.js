function base(){
    let numeroUno = parseInt(document.getElementById('txtNumeroUno').value);
    let numeroDos = parseInt(document.getElementById('txtNumeroDos').value);
    let numeroTres = parseInt(document.getElementById('txtNumeroTres').value);
    let numeroCuatro = parseInt(document.getElementById('txtNumeroCuatro').value);
    let numeroCinco = parseInt(document.getElementById('txtNumeroCinco').value);
    let numeroSeis = parseInt(document.getElementById('txtNumeroSeis').value);
    let areacua;
    let arearecta;
    let areatrian;
    areacua = numeroUno * numeroDos;
    arearecta = numeroTres * numeroCinco;
    areatrian = (numeroCuatro * numeroSeis)/2;
    document.getElementById('areacua').innerHTML = '<strong> Area Cuadrado:' +areacua+ '</strong>';
    document.getElementById('arearecta').innerHTML = '<strong>Area Rectangular:' +arearecta+ '</strong>';
    document.getElementById('areatrian').innerHTML = '<strong>Area Triangular' +areatrian+ '</strong>';
    return false;
}