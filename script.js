let menuVisible = false;
//Función que oculta o muestra el menu
function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList ="";
        menuVisible = false;
    }else{
        document.getElementById("nav").classList ="responsive";
        menuVisible = true;
    }
}

function seleccionar(){
    //oculto el menu una vez que selecciono una opcion
    document.getElementById("nav").classList = "";
    menuVisible = false;
}
//Funcion que aplica las animaciones de las habilidades
function efectoHabilidades(){
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if(distancia_skills >= 300){
        let habilidades = document.getElementsByClassName("progreso");
        habilidades[0].classList.add("javascript");
        habilidades[1].classList.add("htmlcss");
        habilidades[2].classList.add("python");
        habilidades[3].classList.add("MongoDB");
        habilidades[4].classList.add("db");
        habilidades[5].classList.add("react");
        habilidades[6].classList.add("angular");
        habilidades[7].classList.add("back");
        habilidades[8].classList.add("ia");
        habilidades[9].classList.add("docker");
        habilidades[10].classList.add("gitlab");
        habilidades[11].classList.add("c");
        habilidades[12].classList.add("vb");
        habilidades[13].classList.add("java");
        habilidades[14].classList.add("ts");
        habilidades[15].classList.add("movil");
        habilidades[16].classList.add("comunicacion");
        habilidades[17].classList.add("equipo");
        habilidades[18].classList.add("problemas");
        habilidades[19].classList.add("creatividad");
        habilidades[20].classList.add("dedicacion");
        habilidades[21].classList.add("adaptabilidad");
        habilidades[22].classList.add("empatia");
        habilidades[23].classList.add("proyecto");
        

    }
}


//detecto el scrolling para aplicar la animacion de la barra de habilidades
window.onscroll = function(){
    efectoHabilidades();
} 