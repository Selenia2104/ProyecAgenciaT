function fecha() {
    var momento = new Date();
    dia = momento.getDate();
    mes = momento.getMonth();
    switch (mes) {
        case 0:
            mes = "Enero";
            break;
        case 1:
            mes = "Febrero";
            break;
        case 2:
            mes = "Marzo";
            break;
        case 3:
            mes = "Abril";
            break;
        case 4:
            mes = "Mayo";
            break;
        case 5:
            mes = "Junio";
            break;
        case 6:
            mes = "Julio";
            break;
        case 7:
            mes = "Agosto";
            break;
        case 8:
            mes = "Septiembre";
            break;
        case 9:
            mes = "Octubre";
            break;
        case 10:
            mes = "Noviembre";
            break;
        case 11:
            mes = "Diciembre";
            break;
    }
    year = momento.getFullYear();
    mostrar = dia + "/" + mes + "/" + year;
    document.getElementById('fecha').innerHTML = mostrar;

}
function slide(encabezado) {
    var n = 0;
    var vimg = [];
    vimg[0] = '<img src="img/1i.PNG"width: 50%;>'
    vimg[1] = '<img src="img/1b.jpg"width: 50%;>'
    vimg[2] = '<img src="img/1h.jpg"width: 50%;>'
    vimg[3] = '<img src="img/1d.jpg"width: 50%;>'
    vimg[4] = '<img src="img/salar1.jpg"width: 50%;>'
    vimg[5] = '<img src="img/1f.jpeg"width: 50%;>'
    vimg[6] = '<img src="img/carro-4.jpg"width: 50%;>'
    vimg[7] = '<img src="img/1g.jpg"width: 50%;>'
    var m = document.getElementById('slide')
    window.onload = window.setInterval(function() {
        if (n < vimg.length) {
            m.innerHTML = vimg[n];
            n++;
        } else {
            n = 0;
        }
    }, 1000)
}
/*Hotel */
function slidehotel1() {
    var n = 0;
    var vimg = [];
    vimg[0] = '<img src="img/35.PNG">'
    vimg[1] = '<img src="img/30.PNG">'
    vimg[2] = '<img src="img/31.PNG">'
    vimg[3] = '<img src="img/32.PNG">'
    vimg[4] = '<img src="img/33.PNG">'
    var m = document.getElementById('slidehotel1')
    window.onload = window.setInterval(function() {
        if (n < vimg.length) {
            m.innerHTML = vimg[n];
            n++;
        } else {
            n = 0;
        }
    }, 4000)
}

function slidehotel2() {
    var n = 0;
    var vimg = [];
    vimg[0] = '<img src="img/17.PNG">'
    vimg[1] = '<img src="img/18.PNG">'
    vimg[2] = '<img src="img/19.PNG">'
    vimg[3] = '<img src="img/20.PNG">'
    vimg[4] = '<img src="img/21.PNG">'
    var m = document.getElementById('slidehotel2')
    window.onload = window.setInterval(function() {
        if (n < vimg.length) {
            m.innerHTML = vimg[n];
            n++;
        } else {
            n = 0;
        }
    }, 4000)
}

function slidehotel3() {
    var n = 0;
    var vimg = [];
    vimg[0] = '<img src="img/42.PNG">'
    vimg[1] = '<img src="img/43.PNG">'
    vimg[2] = '<img src="img/40.PNG">'
    vimg[3] = '<img src="img/41.PNG">'
    vimg[4] = '<img src="img/49.PNG">'
    var m = document.getElementById('slidehotel3')
    window.onload = window.setInterval(function() {
        if (n < vimg.length) {
            m.innerHTML = vimg[n];
            n++;
        } else {
            n = 0;
        }
    }, 4000)
}
/*Menu */

function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}
/*Formulario */
function validar() {

    if (document.getElementById('txtNombre').value == '') {
        document.getElementById('pnombre').style.color = "#FF0000";
    }
    if (document.getElementById('txtApellido').value == '') {
        document.getElementById('papellido').style.color = "#FF0000";
    }
    if (document.getElementById('txtTipo').value == 0) {
        document.getElementById('ptu').style.color = "#FF0000";
    }
    if (document.getElementById('txtCorreo').value == '' || document.getElementById('txtCorreo2').value == 0) {
        document.getElementById('pcorreo').style.color = "#FF0000";
    }


}