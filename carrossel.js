var indice = 0;
carrossel();

function carrossel() {

    var screenshots = document.getElementsByClassName("phone__screenshot");

    for (var i = 0; i < screenshots.length; i++) {
        screenshots[i].style.opacity = 0;
    }

    screenshots[indice].style.opacity = 1;
    indice++;
    if (indice >= screenshots.length) {
        indice = 0;
    }  
  
    setTimeout(carrossel, 5000);
}