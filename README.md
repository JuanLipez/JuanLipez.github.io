<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Radio+Canada:wght@300&family=Roboto+Mono&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0" />    <link rel="stylesheet" href="style.css">
    <link rel="stylesheet" href="scroll.css">
    <link rel="stylesheet" href="colors.css">
    <link rel="stylesheet" href="contenidos.css">
    <title>Guia 3</title>
</head>
<body>
    
    <header>
        
        <div id="titulo_principal"><h1>Guia 3, Juan David Lipez Guevara</h1></div>

    </header>

    <main>
        <div id="cont_izquierda" class="cont">
            <ul id="ul_main">
                <li>
                    <h4><span onclick="tema_1()">Programas</span></h4>
                    <ul id="subtemas_1" class="tema_1">
                        <li><span onclick="subtema('Contenido/Programas Utilitarios.txt', '/ Utilitarios', 1)">Utilitarios</span></li>
                        <li><span onclick="subtema('Contenido/Programas Navegadores.txt', '/ Navegadores', 1)">Navegadores</span></li>
                        <li><span onclick="subtema('Contenido/Programas Antivirus.txt', '/ Antivirus', 1)">Antivirus</span></li>
                    </ul>
                </li>
                <li>
                    <h4><span onclick="tema_2()" class="tema_2" id="tema_2">Sistemas Operativos</span></h4>
                    <ul id="subtemas_2" class="tema_2">
                        <li><span onclick="subtema('Contenido/Sistemas Operativos DOS.txt', '/ DOS', 2)">Dos</span></li>
                        <li><span onclick="subtema('Contenido/Sistemas Operativos Licencias.txt', '/ Licencias', 2)">Licencias</span></li>
                        <li><span onclick="subtema('Contenido/Sistemas Operativos Errores.txt', '/ Errores', 2)">Errores</span></li>
                    </ul>
                </li>
                <li>
                    <h4><span onclick="tema_3()" class="tema_3" id="tema_3">Maquinas Virtuales</span></h4>
                    <ul id="subtemas_3"  class="tema_3">
                        <li><span onclick="subtema('Contenido/Maquinas Configuracion.txt', '/ Configuracion de Maquinas Virtuales', 3)">Configuracion de Maquinas Virtuales</span></li>
                        <li><span onclick="subtema('Contenido/Maquinas Manuales.txt', '/ Manuales de Instalacion', 3)">Manuales de Instalacion</span></li>
                    </ul>
                </li>
                <li>
                    <h4><span onclick="tema_4()" class="tema_4" id="tema_4">Matenimiento</span></h4>
                    <ul id="subtemas_4"  class="tema_4">
                        <li><span onclick="subtema('Contenido/Mantenimiento Rendimiento.txt', '/ Rendimiento', 4)">Rendimiento</span></li>
                        <li><span onclick="subtema('Contenido/Mantenimiento Diagnostico.txt', '/ Diagnostico', 4)">Diagnostico</span></li>
                        <li><span onclick="subtema('Contenido/Mantenimiento Formateo.txt', '/ Formateo', 4)">Formateo</span></li>
                    </ul>
                </li>
            </ul>
        </div>
        <div id="cont_derecha" >
            <div id="inicio">
                <div class="cont_inicio">
                    <div class="cont_titulo_inicio" onclick="tema_1()">
                        <h3>Programas</h3>
                    </div>
                </div>
                <div class="cont_inicio">
                    <div class="cont_titulo_inicio" onclick="tema_2()">
                        <h3>Sistemas Operativos</h3>
                    </div>
                </div>
                <div class="cont_inicio">
                    <div class="cont_titulo_inicio" onclick="tema_3()">
                        <h3>Maquinas Virtuales</h3>
                    </div>
                    
                </div>
                <div class="cont_inicio" >
                    <div class="cont_titulo_inicio" onclick="tema_4()">
                        <h3>Mantenimiento</h3>
                    </div>
                </div>
                
            </div>
            <div id="temas">
                <span id="titulo"></span>
                <div id="boton_menu" onclick="menu_1()"><span class="material-symbols-outlined">home</span></div>
            </div>
            <div id="contenido">
                <div id="contenedores">
                    
                </div>
                <div id="cont_subtemas" type="text/plain" data="Contenido/Programas.txt">
                    
                </div>
            </div> 
        </div>
    </main>
    <script src="main.js"></script>
</body>
</html>
