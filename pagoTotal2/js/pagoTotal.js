function pagos(){
    let diastra = parseInt(document.getElementById('txtNumeroUno').value);
    let valordia = parseInt(document.getElementById('txtNumeroDos').value);
    sueldo = diastra * valordia;
    salud = sueldo * 0.12;
    pension = sueldo * 0.16;
    arl = sueldo * 0.052;
    descontar = salud + pension + arl;
    if (sueldo < 2300000) {
        subtrans = 160000
    }
    else {
        subtrans = 0
    }
    pagoto = sueldo + subtrans - descontar;
    document.getElementById('sueldos').innerHTML = '<strong> Sueldo: ' +sueldo+ '</strong>';
    document.getElementById('salud').innerHTML = '<strong> Salud: ' +salud+ '</strong>';
    document.getElementById('pension').innerHTML = '<strong> Pension: ' +pension+ '</strong>';
    document.getElementById('arl').innerHTML = '<strong> Arl: ' +arl+ '</strong>';
    document.getElementById('sub').innerHTML = '<strong> Subtransporte: ' +subtrans+ '</strong>';
    document.getElementById('descontar').innerHTML = '<strong> Descuento: ' +descontar+ '</strong>';
    document.getElementById('pagoto').innerHTML = '<strong> Pago Total: ' +pagoto+ '</strong>';
    return false;
}