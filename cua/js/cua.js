function cua(){
    let ladoUno = parseInt(document.getElementById('txtNumeroUno').value);
    let ladoDos = parseInt(document.getElementById('txtNumeroDos').value);
    let ladoTres = parseInt(document.getElementById('txtNumeroTres').value);
    cuadradoUno = ladoUno * ladoUno;
    cuadradoDos = ladoDos * ladoDos;
    cuadradoTres = ladoTres * ladoTres;
    if (cuadradoUno == cuadradoDos & cuadradoDos == cuadradoTres & cuadradoTres == cuadradoUno){
        document.getElementById('cua').innerHTML = '<strong> Las areas '+' son iguales</strong>';
    } else if (cuadradoUno > cuadradoDos & cuadradoUno > cuadradoTres) {
            document.getElementById('cua').innerHTML = '<strong> El cuadrado 1 es mayor'+ '</strong>';
    } else if(cuadradoDos < cuadradoTres){
            document.getElementById('cua').innerHTML = '<strong> El cuadrado 3 es mayor'+ '</strong>';
    }
    else{
        document.getElementById('cua').innerHTML = '<strong> El cuadrado 2 es mayor'+ '</strong>';
    }
    document.getElementById('cuad').innerHTML = '<strong> Cuadrado Uno: '+cuadradoUno+'</strong>';
    document.getElementById('cuadr').innerHTML = '<strong> Cuadrado Dos: '+cuadradoDos+'</strong>';
    document.getElementById('cuadra').innerHTML = '<strong> Cuadrado Tres: '+cuadradoTres+'</strong>';
    return false;
}