document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('bCol1').addEventListener('click', function() {
        var rootStyles = getComputedStyle(document.documentElement);
        var currentColor = rootStyles.getPropertyValue('--firstcolor').trim();

        if (currentColor !== '#002358') {
            document.documentElement.style.setProperty('--firstcolor', '#002358');
            document.documentElement.style.setProperty('--secondcolor', '#202da7');
            document.documentElement.style.setProperty('--thirdcolor', '#2e46c9');
            document.documentElement.style.setProperty('--fourthcolor', '#8aa9ff');
        } else {
            document.documentElement.style.setProperty('--firstcolor', '#3f3f3f');
            document.documentElement.style.setProperty('--secondcolor', '#4e4e4e');
            document.documentElement.style.setProperty('--thirdcolor', '#868686');
            document.documentElement.style.setProperty('--fourthcolor', '#c7c7c7');
        }
    });

    document.getElementById('bCol2').addEventListener('click', function() {
        var rootStyles = getComputedStyle(document.documentElement);
        var currentColor = rootStyles.getPropertyValue('--firstcolor').trim();

        if (currentColor !== '#6eb656') {
            document.documentElement.style.setProperty('--firstcolor', '#6eb656');
            document.documentElement.style.setProperty('--secondcolor', '#85cb6b');
            document.documentElement.style.setProperty('--thirdcolor', '#a2e897');
            document.documentElement.style.setProperty('--fourthcolor', '#e4fcdc');
        } else {
            document.documentElement.style.setProperty('--firstcolor', '#3f3f3f');
            document.documentElement.style.setProperty('--secondcolor', '#4e4e4e');
            document.documentElement.style.setProperty('--thirdcolor', '#868686');
            document.documentElement.style.setProperty('--fourthcolor', '#c7c7c7');
        }
    });

    document.getElementById('bCol3').addEventListener('click', function() {
        var rootStyles = getComputedStyle(document.documentElement);
        var currentColor = rootStyles.getPropertyValue('--firstcolor').trim();

        if (currentColor !== '#b46a00') {
            document.documentElement.style.setProperty('--firstcolor', '#b46a00');
            document.documentElement.style.setProperty('--secondcolor', '#e3964a');
            document.documentElement.style.setProperty('--thirdcolor', '#ffb968');
            document.documentElement.style.setProperty('--fourthcolor', '#ffedd6');
        } else {
            document.documentElement.style.setProperty('--firstcolor', '#3f3f3f');
            document.documentElement.style.setProperty('--secondcolor', '#4e4e4e');
            document.documentElement.style.setProperty('--thirdcolor', '#868686');
            document.documentElement.style.setProperty('--fourthcolor', '#c7c7c7');
        }
    });

    document.getElementById('bBotonDCol').addEventListener('click', function() {
        var container = document.getElementById('dBColores');
    
        if (container.classList.contains('hidden')) {
            container.classList.remove('hidden');
        } else {
            container.classList.add('hidden');
        }
    });

    document.getElementById('bBotonDLan').addEventListener('click', function() {
        var container = document.getElementById('dBIdiomas');
    
        if (container.classList.contains('hidden')) {
            container.classList.remove('hidden');
        } else {
            container.classList.add('hidden');
        }
    });

    document.getElementById('bId1').addEventListener('click', function() {
        var miTitulo = document.getElementById('tSubtitulo');
        miTitulo.innerHTML = 'Programador';
        var miTitulo = document.getElementById('tTextoAp1');
        miTitulo.innerHTML = 'Experiencia<br>en codigo';
        var miTitulo = document.getElementById('tTextoAp2');
        miTitulo.innerHTML = 'Conocimiento<br>de aplicaciones';
        var miTitulo = document.getElementById('tFortalezas');
        miTitulo.innerHTML = 'Social<br>Autodidacta<br>Dedicado<br>Resolutivo';
        var miTitulo = document.getElementById('tTextoAp3');
        miTitulo.innerHTML = 'Fortalezas';
        var miTitulo = document.getElementById('tAptitudes');
        miTitulo.innerHTML = 'Idiomas: <br>-  Ingles (B2) <br>-  Aleman (Basico)<br>-  Portugues (Basico)<br>Carnet B de Conducir <br>(Desde Feb 2022)';
        var miTitulo = document.getElementById('tTituloCV');
        miTitulo.innerHTML = 'Bienvenido a mi Curriculum Vitae';
        var miTitulo = document.getElementById('tTituloEL');
        miTitulo.innerHTML = 'Experiencia Laboral';
        var miTitulo = document.getElementById('tTituloPP');
        miTitulo.innerHTML = 'Proyectos Personales';
        miTitulo.innerHTML = 'Ayuntamiento de <br>Villanueva del Fresno';
        var miTitulo = document.getElementById('tExpTexto1');
        miTitulo.innerHTML = 'Durante el período de marzo a junio de 2021, en el Ayuntamiento de Villanueva del Fresno, desempeñé funciones de soporte informático. Mis responsabilidades incluyeron el mantenimiento de equipos informáticos y la solución de problemas tanto en los equipos como en las aplicaciones, asegurando el correcto funcionamiento y la eficiencia de los sistemas tecnológicos municipales.';
        var miTitulo = document.getElementById('tExpTexto2');
        miTitulo.innerHTML = 'Entre marzo y junio de 2023, trabajé en el Grupo Industrial Cristian Lay en el desarrollo y debug de aplicaciones. Mis tareas principales incluyeron el desarrollo de soluciones de código, la búsqueda y corrección de errores, así como la realización de pruebas de implementaciones, contribuyendo a la mejora y optimización de las aplicaciones utilizadas por la empresa.';
    });

    document.getElementById('bId2').addEventListener('click', function() {
        var miTitulo = document.getElementById('tSubtitulo');
        miTitulo.innerHTML = 'Programmer';
        var miTitulo = document.getElementById('tTextoAp1');
        miTitulo.innerHTML = 'Experience<br>in code';
        var miTitulo = document.getElementById('tTextoAp2');
        miTitulo.innerHTML = 'Knowledge<br>in apps';
        var miTitulo = document.getElementById('tFortalezas');
        miTitulo.innerHTML = 'Social<br>Self-taught<br>Dedicated<br>Resolutive';
        var miTitulo = document.getElementById('tTextoAp3');
        miTitulo.innerHTML = 'Strengths';
        var miTitulo = document.getElementById('tAptitudes');
        miTitulo.innerHTML = 'Languages: <br>-  English (B2)  <br>-  German  (Basic) <br>-  Portuguese (Basic) <br>Driving License B (3 Years)';
        var miTitulo = document.getElementById('tTituloCV');
        miTitulo.innerHTML = 'Welcome to my Curriculum Vitae';
        var miTitulo = document.getElementById('tTituloEL');
        miTitulo.innerHTML = 'Work Experience';
        var miTitulo = document.getElementById('tTituloPP');
        miTitulo.innerHTML = 'Personal Projects';
        var miTitulo = document.getElementById('tExpTitulo1');
        miTitulo.innerHTML = 'Tawn hall of<br>Villanueva del Fresno';
        var miTitulo = document.getElementById('tExpTexto1');
        miTitulo.innerHTML = 'During the period from March to June 2021, at the Town Hall of Villanueva del Fresno, I worked as an IT support technician. My responsibilities included maintaining computer equipment and troubleshooting issues with both hardware and software applications, ensuring the proper functioning and efficiency of municipal technological systems.';
        var miTitulo = document.getElementById('tExpTexto2');
        miTitulo.innerHTML = 'Between March and June 2023, I worked at Grupo Industrial Cristian Lay in application development and debugging. My main tasks included coding solutions, identifying and fixing errors, and conducting implementation tests, contributing to the enhancement and optimization of the company\'s applications.';
    });
});