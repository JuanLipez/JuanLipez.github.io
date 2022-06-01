const d = document;
//Temas
function tema_1() {
    d.getElementById("temas").style.display = "grid";
    d.getElementById("cont_subtemas").style.display = "none";
    d.getElementById("titulo").innerHTML = "Programas ";
    d.getElementById("inicio").style.display = "none";
    d.getElementById("contenido").style.display = "flex";

    d.getElementById("contenedores").style.display = "grid";
    d.getElementById("contenedores").innerHTML = get_txt("Contenedores/3.txt");
    d.getElementById("contenedores").style.gridTemplateColumns = "1fr 1fr 1fr";
    d.getElementById("contenedores").style.marginRight = "0px";
    d.getElementById("cont_3").style.display = "block";
    d.getElementById("cont_titulo_1").innerHTML = "Utilitarios";
    d.getElementById("cont_titulo_2").innerHTML = "Navegadores";
    d.getElementById("cont_titulo_3").innerHTML = "Antivirus";
}
function tema_2() {
    d.getElementById("temas").style.display = "grid";
    d.getElementById("cont_subtemas").style.display = "none";
    d.getElementById("titulo").innerHTML = "Sistemas Operativos ";
    d.getElementById("inicio").style.display = "none";
    d.getElementById("contenido").style.display = "flex";

    d.getElementById("contenedores").style.display = "grid";
    d.getElementById("contenedores").innerHTML = get_txt("Contenedores/3.txt");
    d.getElementById("contenedores").style.gridTemplateColumns = "1fr 1fr 1fr";
    d.getElementById("contenedores").style.marginRight = "0px";
    d.getElementById("cont_3").style.display = "block";
    d.getElementById("cont_titulo_1").innerHTML = "DOS";
    d.getElementById("cont_titulo_2").innerHTML = "Licencias";
    d.getElementById("cont_titulo_3").innerHTML = "Errores";
}
function tema_3() {
    d.getElementById("temas").style.display = "grid";
    d.getElementById("cont_subtemas").style.display = "none";
    d.getElementById("titulo").innerHTML = "Maquinas virtuales ";
    d.getElementById("inicio").style.display = "none";
    d.getElementById("contenido").style.display = "flex";

    d.getElementById("contenedores").style.display = "grid";
    d.getElementById("contenedores").innerHTML = get_txt("Contenedores/2.txt");
    d.getElementById("contenedores").style.gridTemplateColumns = "1fr 1fr";
    d.getElementById("cont_titulo_1").innerHTML = "Configuracion de Maquinas Virtuales";
    d.getElementById("cont_titulo_2").innerHTML = "Manuales de Instalacion de SO";
}
function tema_4() {
    d.getElementById("temas").style.display = "grid";
    d.getElementById("cont_subtemas").style.display = "none";
    d.getElementById("titulo").innerHTML = "Mantenimiento ";
    d.getElementById("inicio").style.display = "none";
    d.getElementById("contenido").style.display = "flex";
    
    d.getElementById("contenedores").style.display = "grid";
    d.getElementById("contenedores").innerHTML = get_txt("Contenedores/3.txt");
    d.getElementById("contenedores").style.gridTemplateColumns = "1fr 1fr 1fr";
    d.getElementById("contenedores").style.marginRight = "0px";
    d.getElementById("cont_3").style.display = "block";
    d.getElementById("cont_titulo_1").innerHTML = "Rendimiento";
    d.getElementById("cont_titulo_2").innerHTML = "Diagnostico";
    d.getElementById("cont_titulo_3").innerHTML = "Formateo";
}
//Subtemas
function subtema(a, b, c) {
    switch (c) {
        case 1:
            tema_1();
            break;
        case 2:
            tema_2();
            break;
        case 3:
            tema_3();
            break;
        case 4: 
            tema_4();
        default:
            break;
    }
    d.getElementById("cont_subtemas").style.display = "block";
    d.getElementById("contenedores").style.display = "none";
    d.getElementById("cont_subtemas").innerHTML = get_txt(a);
    d.getElementById("titulo").innerHTML += b;
}

//Contenedores
function cont_1() {
    if (d.getElementById("cont_titulo_1").innerHTML == "Utilitarios") {
        subtema('Contenido/Programas Utilitarios.txt', '/ Utilitarios', 1);
    } 
    if (d.getElementById("cont_titulo_1").innerHTML == "DOS") {
        subtema('Contenido/Sistemas Operativos DOS.txt', '/ DOS', 2);
    } 
    if (d.getElementById("cont_titulo_1").innerHTML == 'Configuracion de Maquinas Virtuales') {
        subtema('Contenido/Maquinas Configuracion.txt', '/ Configuracion de Maquinas Virtuales', 3);
    } 
    if (d.getElementById("cont_titulo_1").innerHTML == "Rendimiento") {
        subtema('Contenido/Mantenimiento Rendimiento.txt', '/ Rendimiento', 4);
    }
    console.log(   );
}
function cont_2(){
    if (d.getElementById("cont_titulo_2").innerHTML == "Navegadores") {
        subtema('Contenido/Programas Navegadores.txt', '/ Navegadores', 1);
    } 
    if (d.getElementById("cont_titulo_2").innerHTML == "Licencias") {
        subtema('Contenido/Sistemas Operativos Licencias.txt', '/ Licencias', 2);
    } 
    if (d.getElementById("cont_titulo_2").innerHTML == 'Manuales de Instalacion de SO') {
        subtema('Contenido/Maquinas Manuales.txt', '/ Manuales de Instalacion', 3);
    } 
    if (d.getElementById("cont_titulo_2").innerHTML == "Diagnostico") {
        subtema('Contenido/Mantenimiento Diagnostico.txt', '/ Diagnostico', 4);
    }
}
function cont_3() {
    if (d.getElementById("cont_titulo_3").innerHTML == "Antivirus") {
        subtema('Contenido/Programas Antivirus.txt', '/ Antivirus', 1);
    } 
    if (d.getElementById("cont_titulo_3").innerHTML == "Errores") {
        subtema('Contenido/Sistemas Operativos Errores.txt', '/ Errores', 2);
    } 
    if (d.getElementById("cont_titulo_3").innerHTML == "Formateo") {
        subtema('Contenido/Mantenimiento Formateo.txt', '/ Formateo', 4);
    }
}

//Obtener txt
function get_txt(fileRuta) {
    var arrayData=new Array();
    var archivoTxt=new XMLHttpRequest();
    var dataSum = "";

    archivoTxt.open("GET",fileRuta,false);
    archivoTxt.send(null);

    var txt = archivoTxt.responseText;

    return txt;
}

//menu
function menu_1() {
    d.getElementById("temas").style.display = "none";
    d.getElementById("contenido").style.display = "none";
    d.getElementById("inicio").style.display = "grid"; 
}