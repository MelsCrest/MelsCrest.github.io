function filtrar(genero){

    let limpieza = document.querySelectorAll('main img');//solo a la img que están en el main

    for(imagen of limpieza){
        imagen.style.display= "none";
    }

    //let elegidos = document.querySelectorAll('img[class~=comedia]');
    let elegidos = document.getElementsByClassName(genero);

    for(pelicula of elegidos){
        pelicula.style.display = "inline";
    }
}

function resetear(){

    let restaurar = document.querySelectorAll('main img');

    for(imagen of restaurar){
        imagen.style.display= "inline";
    }

}
