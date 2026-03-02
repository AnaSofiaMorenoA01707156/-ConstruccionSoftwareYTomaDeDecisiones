const express = require('express');
const router = express.Router();

const header= `
<!DOCTYPE html>
<html lang="es">
    <head>
       <meta charset="UTF-8">
       <title>Página Ana Sofía Moreno</title> 
       <meta name="viewport" content="width=device-width, initial-scale=1.0">
       <link rel="stylesheet" type= "text/css"/>
    </head>
    <body>
        <h1 class="titulo">Laboratorios: Ana Sofía Moreno</h1>
        <nav>
            <ul>
                <li><a href="https://github.com/AnaSofiaMorenoA01707156/-ConstruccionSoftwareYTomaDeDecisiones.git" target="_blank" class="menuItem">Repositorio GitHub</a></li>
                <li><a href="/laboratorios/lab3" class="menuItem">Preguntas Lab 3</a></li>
                <li><a href="/laboratorios/lab6" class="menuItem">Preguntas Lab 6</a></li>
                <li><a href="/laboratorios/lab11" class="menuItem">Preguntas Lab 11</a></li>
            </ul>
        </nav><br>
        <a href="/home">
            <button>Regresar a Home</button>
        </a>
        <br>
        <section>
            <hr>
            <h2 id="DatosContacto" class="subtitulo">Datos e Información de Contacto</h2>
            <table>
                <tr>
                    <td class="texto">Nombre:</td>
                    <td class="texto">Ana Sofía Moreno</td>
                </tr>
                <tr>
                    <td class="texto">Matrícula:</td>
                    <td class="texto">A01707156</td>
                </tr>
                <tr>
                    <td class="texto">Correo institucional:</td>
                    <td class="texto">A01707156@tec.mx</td>
                </tr>
                <tr>
                    <td class="texto">Correo personal:</td>
                    <td class="texto">mhanasofi@gmail.com</td>
                </tr>
            </table>
            <p class="marcado">Sobre mí...</p>
            <p class="texto">Tengo 20 años, nací en Querétaro y siempre he vivido aquí. De hecho estuve en prepaTec de este campus. <br>Me gusta mucho la música, viajar, salir con amigos o con familia, ir al cine y estar con mis mascotas. Tengo una hermana menor de 18 años con la que soy muy cercana.</p>
            <hr>
        </section>`;

const footer=`
        <footer>
            <h2 id="EditorHTML" class="subtitulo">Editor HTML utilizado</h2>
            <p class="texto">Para la creación de este documento html utilicé el editor Visual Studio Code.</p>
            <p class="texto">Enlace al sitio del editor:</p>
            <a href="https://code.visualstudio.com/" target="_blank" class="link">https://code.visualstudio.com/</a>
        </footer>
    </body>
</html>`;

const laboratorio3=`
        <section>
            <hr>
            <h2 id="Preguntas2" class="subtitulo">Preguntas del Laboratorio 3</h2>
            <p class="marcado">1. Como ingeniero de software ¿cuál es tu recomendación sobre el uso de !important en un CSS?</p>
            <p class="texto">Usar el keyword de !important, sobreescribiendo cualquier diseño previo del elemento en el que se usa, puede hacer que futuros cambios de diseño se vuelvan más complejos o confusos, y la única forma de sobreescribirlos para dar otro estilo es usando otro !important. Debido a la poca flexibilidad al usarla, es una herramienta muy drástica. Personalmente, yo no recomendaría su uso a menos que en algún contexto ya no quiera que el estilo de un elemento pueda cambiarse, o que ya no haya otra forma de sobreescribir el estilo del elemento.</p>
            <p class="marcado">2. Si se pone una color de fondo en una página HTML, ¿por qué debe escogerse con cuidado?</p>
            <p class="texto">Porque establecer una color de fondo puede llegar a volverse complejo en términos de asegurar que las dimensiones y la resolución de la color sean las correctas para el fondo de la página (que la color no se redimensione y pierda calidad, o se repita para cubrir todo el fondo), y en términos de la legibilidad del texto que quedará sobre la color (que los colores de la color de fondo permitan una fácil lectura del texto que irá por encima).</p>
            <p class="marcado">3. Como ingeniero de software, ¿cuál es tu recomendación al elegir las unidades de un propiedad de estilo entre %, px y pt?</p>
            <p class="texto">Debido a que es una medida relativa (indica un porcentaje de tamaño para un elemento con respecto al contenedor o un tamaño default), recomendaría el uso de porcentaje (%) para la creación de sitios web que necesitan ser flexibles, adaptativos o escalables (por ejemplo para mostrarse en pantallas de diferentes tamaños). Si de momento no se necesita priorizar la flexibilidad o adaptabilidad, puede ser bueno usar px, porque los pixeles son una medida muy universal que puede ayudar a mantener consistencia en la apariencia del sitio web en diferentes pantallas, además de ser mejor para establecer los tamaños de letra o márgenes. En general no se recomienda el uso de pt para sitios web, porque su propósito suele ser para la impresión de diseños y no su interpretación en dispositivos.</p>
            <p class="marcado">4. ¿Por qué el uso de una versión minimizada del CSS mejora el rendimiento del sitio?</p>
            <p class="texto">Porque al eliminar espacios en blanco, comentarios, indentado, etc., reduce el tamaño del archivo, lo cual permite un menor tiempo de carga del mismo y de la página o el sitio, mejorando su rendimiento.</p>
            <p class="marcado">Referencias</p>
            <p class="texto">W3C. (2025). CSS: em, px, pt, cm, in…. W3.org. https://www.w3.org/Style/Examples/007/units.en.html</p>
            <hr>        
        </section>`;

const laboratorio6=`
        <section>
            <hr>
            <h2 id="Preguntas5" class="subtitulo">Preguntas del Laboratorio 6</h2>
            <p class="texto">(Ejercicio de página interactiva del lab 6 elegido en otro documento HTML: "validacionPswds.html").<br><br></p>
            <p class="marcado">1. ¿Por qué es una buena práctica usar JavaScript para checar que sean válidos los inputs de las formas antes de enviar los datos al servidor?</p>
            <p class="texto">Es buena práctica porque validar los datos del lado del usuario (antes de enviarse al servidor) da un primer seguro acerca de la integridad y/o calidad de los datos que permite que así al llegar estos al servidor no sucedan errores comunes debido a inputs inválidos y que así pueda haber una respuesta más inmediata por parte del servidor. Además, también puede proveer un primer filtro de seguridad para amenazas.</p>
            <p class="marcado">2. ¿Cómo puedes saltarte la seguridad de validaciones hechas con JavaScript?</p>
            <p class="texto">Si el usuario desactiva o manipula Javascript (usando herramientas de desarrollo o inspect) en su navegador eso puede eliminar las validaciones de datos hechas con Javascript. El usuario también podría enviar la petición al servidor con otros programas externos (apps como Postman) o interceptar los datos después de haber sido enviados para modificarlos de forma posterior (herramientas como Fiddler), evitando la validación Javascript.</p>
            <p class="marcado">3. Si te puedes saltar la seguridad de las validaciones de JavaScript, entonces ¿por qué la primera pregunta dice que es una buena práctica?</p>
            <p class="texto">Porque aunque no es suficiente por sí sola para garantizar la seguridad, sí puede proveer un primer filtro de integridad o errores y de seguridad básica, además de que al prevenir estos y errores y permitir respuestas más rápidas del servidor, mejora la experiencia de usuario o usabilidad de los sitios con formas al permitir que el usuario reciba retroalimentación inmediata de sus inputs.</p>
            <p class="marcado">Referencias</p>
            <p class="texto">Information Security Stack Exchange. (2021). How do hackers trick frontend validation? Information Security Stack Exchange. https://security.stackexchange.com/questions/244030/how-do-hackers-trick-frontend-validation#:~:text=7%20Answers,it%20in%20browser%2C%20and%20submit.<br>MDN. (2025). Client-side form validation - Learn web development | MDN. Mozilla.org. https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Forms/Form_validation#:~:text=This%20is%20called%20form%20validation,See%20Website%20security.</p>
            <hr>
        </section>`;

const laboratorio11=`
        <section>
            <hr>
            <h2 id="Pregunta11" class="subtitulo">Pregunta del Laboratorio 11</h2>
            <p class="marcado">1. Describe el archivo package.json.</p>
            <p class="texto">El contenido del archivo package.json sirve permite almacenar, definir y gestionar metadatos, dependencias y scripts (que puede ejecutar) de un proyecto node.</p>
            <hr>
        </section>`;

const visitantes= [{nombre: "Ana Sofía", color: "morado"}];

router.use('/lab3', (request, response, next) => {
    response.send(header + laboratorio3 + footer); 
});

router.use('/lab6', (request, response, next) => {
    response.send(header + laboratorio6 + footer); 
});

router.use('/lab11', (request, response, next) => {
    response.send(header + laboratorio11 + footer); 
});

router.use((request, response, next) => {
    response.send(header + footer); 
});

module.exports = router;