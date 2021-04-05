var i = 0;
var imagenes = []; //un array
var tiempo = 2000 // tiempo en milisegundos

//imagenes
imagenes[0] = "url(Rolli Rolls\goiko-grill-barcelona-19.jpg)";
imagenes[1] = "url(Rolli Rolls\goiko2.jpg)";
imagenes[2] = "url(Rolli Rolls\goiko3.jpg)";

//funcion
function cambioimagen(){
    var el = document.getElementById('body');
    el.style.backgroundImage = imagenes[i];
    if (i<imagenes.length-1){
        i++;
    } else {
        i=0;
    }
    setTimeout ('cambioimagen(), time');
}

window.onload = changeimage;