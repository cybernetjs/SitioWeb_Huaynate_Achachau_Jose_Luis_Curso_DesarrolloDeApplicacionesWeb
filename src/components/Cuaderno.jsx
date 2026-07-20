import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useState } from 'react'

const Cuaderno = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [activeIndex, setActiveIndex] = useState(0)

  const resumenLaboratorios = [
    'LAB 01A -> VSC: interfaz, extensiones y atajos.',
    'LAB 02A -> Diseno flexbox, fluido y responsivo.',
    'PC 03 -> Sitio web con CSS (Bootstrap o Tailwind).',
    'LAB 04 -> Animacion con JavaScript y Canvas.',
    'LAB 05A -> Props y children entre componentes React.',
    'LAB 06A -> Eventos, renderizado condicional e iterativo con API.',
    'LAB 07 -> Uso de hooks (useState, useEffect, personalizado).'
  ]

  const resumenLaboratoriosUnidadII = [
    'LAB 09 -> Despliegue de aplicaciones web backend con PHP y JSP.',
    'LAB 10 -> Aplicacion con Python (POO, excepciones y modulos).',
    'LAB 11 -> Desarrollo de vistas, plantillas y modelos con Django.',
    'LAB 12 -> Desarrollo de un sistema web backend (formularios, admin, sesiones).',
    'LAB 13 -> Desarrollo de un sistema web backend (API RESTful con Django).',
    'PROYECTO -> Microservicio con Django, Docker y Kubernetes.'
  ]

  const bibliografiaLibros = [
    'Media Active (2014). Aprende a Programar Apps con HTML5, CSS y JavaScript. Editorial Alfaomega. Primera Edicion. (L-CA-3811).',
    'Frank Zickert (2020). React Architect: Full Stack React App Development and Serverless Deployment. Editorial React-Architect.',
    'Roldan Martinez, David (2018). Microservicios: un enfoque integrado. Editorial RA-MA. Madrid, Espana.',
    'Schild, Herbert (2018). Java 9: una guia para principiantes. Anaya Multimedia. 7ma edicion.',
    'Pressman, R. S. y Maxim, B. (2015). Software Engineering: A Practitioner\'s Approach. McGraw-Hill. 8th edition.',
    'Sommerville, I. (2017). Software Engineering. Pearson. 10th edition.',
    'Pressman, R. S. y Maxim, B. (2010). Ingenieria del Software: Un enfoque practico. McGraw-Hill. 7ma edicion.',
    'Sommerville, I. (2011). Ingenieria del Software. Pearson. 9na edicion.',
    'Gerard O\'Regan (2017). Concise Guide to Software Engineering: From Fundamentals to Application Methods. Editorial Springer International. Primera Edicion. Cham, Suiza.',
    'Torres Remon, M. (2013). Desarrollo de aplicaciones con Java. Empresa Editora Macro EIRL. Primera edicion.',
    'Brahma Dathan y Sarnath Ramnath (2015). Object-Oriented Analysis, Design and Implementation - An Integrated Approach. Editorial Springer International. Segunda Edicion. Cham, Suiza.',
    'Bennett, Simon; Mcrobb, Steve; Farmer, Ray (2006). Analisis y diseno orientado a objetos de sistemas usando UML. Editorial Mc-Graw Hill. Tercera Edicion. (L-CA-3213).',
    'Piattini, Mario G.; Calvo Manzano, Jose A.; Cervera, Joaquin; Fernandez, Luis (2004). Analisis y Diseno de Aplicaciones Informaticas de Gestion - Una Perspectiva de Ingenieria de Software. Editorial Alfaomega. (L-CA-3111).',
    'Carranza, Zalatiel (2004). Analisis de Sistemas de Software. Editorial Universidad de Lima. Primera Edicion. (L-CA-3109).'
  ]

  const bibliografiaUrls = [
    {
      label: 'SciELO - Ingenieria de Software',
      url: 'https://scielo.conicyt.cl/pdf/ingeniare/v26n3/0718-3305-ingeniare-26-03-00473.pdf'
    },
    {
      label: 'ProQuest - Recurso academico',
      url: 'https://media.proquest.com/media/hms/PFT/1/vPfNH?_s=I7xsvZlm%2B%2BmltC1nWiM0iXSw4ME%3D'
    },
    {
      label: 'PMO Informatica - Documento de Requerimientos de Software',
      url: 'http://www.pmoinformatica.com/2018/04/documento-de-requerimientos-de-software_37.html'
    },
    {
      label: 'LinkedIn - Ingenieria de Requerimientos enfoque agil',
      url: 'https://www.linkedin.com/pulse/ingenier%C3%ADa-de-requerimientos-bajo-un-enfoque-%C3%A1gil-mejias-cruz?articleId=6631527343217270785'
    },
    {
      label: 'SEDICI UNLP - Documento completo',
      url: 'http://sedici.unlp.edu.ar/bitstream/handle/10915/62882/Documento_completo.pdf-PDFA.pdf?sequence=1&isAllowed=y'
    }
  ]

  const tabs = [
    {
      id: 'semana-01',
      title: 'Semana 01 - Fundamentos de tecnologias web',
      blocks: [
        {
          type: 'definition',
          title: '1.1 Soluciones web',
          items: [
            {
              term: 'Sistema web',
              desc: 'Conjunto de componentes (bases de datos, servidores, interfaces) que trabajan juntos para automatizar procesos dentro de una organizacion. Ejemplo: sistema de gestion de ventas accesible desde el navegador.'
            },
            {
              term: 'Aplicacion web',
              desc: 'Software interactivo que se ejecuta dentro de un navegador y permite al usuario realizar acciones (crear, leer, actualizar, eliminar datos). Tiene logica de negocio tanto en el cliente como en el servidor. Ejemplo: Gmail, Trello.'
            },
            {
              term: 'Sitio web',
              desc: 'Conjunto de paginas enlazadas bajo un mismo dominio, mayormente informativo, con bajo nivel de interactividad. Ejemplo: el portal institucional de una universidad.'
            },
            {
              term: 'Pagina web',
              desc: 'Documento individual escrito en HTML que puede contener texto, imagenes, videos y enlaces. Es la unidad basica de la web.'
            }
          ]
        },
        {
          type: 'list',
          title: '1.2 Tecnologias web basicas',
          items: [
            'Lenguajes del lado cliente: HTML, CSS, JavaScript.',
            'Lenguajes del lado servidor: PHP, Python, Java, Node.js.',
            'Tecnologias graficas: SVG (vectores escalables), Canvas (graficos de mapa de bits por JavaScript), WebGL (3D).'
          ]
        },
        {
          type: 'definition',
          title: '1.3 Funcionamiento de la web',
          items: [
            {
              term: 'DNS (Domain Name System)',
              desc: 'Traduce nombres de dominio legibles por humanos (ej. www.uncp.edu.pe) a direcciones IP numericas que los servidores entienden. Funciona como una guia telefonica de Internet.'
            },
            {
              term: 'Protocolo TCP/IP',
              desc: 'TCP garantiza la entrega confiable de paquetes dividiendo la informacion en segmentos y reensamblandolos en destino. IP se encarga del direccionamiento y enrutamiento.'
            },
            {
              term: 'Protocolo HTTP/HTTPS',
              desc: 'HTTP define como se comunican navegador y servidor. El cliente envia una peticion con metodo (GET, POST, PUT, DELETE) y el servidor responde con un codigo de estado y el contenido solicitado. HTTPS anade cifrado TLS/SSL.'
            }
          ]
        },
        {
          type: 'definition',
          title: '1.4 Roles en el desarrollo web',
          items: [
            {
              term: 'Desarrollador frontend',
              desc: 'Construye la interfaz de usuario (UI) que el cliente ve y con la que interactua en el navegador. Usa HTML, CSS y JavaScript (y frameworks como React, Vue, Angular).'
            },
            {
              term: 'Desarrollador backend',
              desc: 'Gestiona la logica del negocio, bases de datos y servicios del lado del servidor. Usa lenguajes como Python, Java, PHP, Node.js y frameworks como Django, Spring, Laravel.'
            },
            {
              term: 'Desarrollador fullstack',
              desc: 'Domina tanto el frontend como el backend. Puede construir una solucion web completa de forma independiente.'
            }
          ]
        },
        {
          type: 'list',
          title: '1.5 Herramienta: Visual Studio Code (VSC)',
          items: [
            'Editor de codigo fuente gratuito desarrollado por Microsoft.',
            'Resaltado de sintaxis para decenas de lenguajes.',
            'IntelliSense: autocompletado inteligente de codigo.',
            'Terminal integrada y depurador incorporado.',
            'Extensiones: Prettier, ESLint, Live Server, GitLens, etc.',
            'Atajos: Ctrl+P (abrir archivo), Ctrl+` (terminal), Alt+Up/Down (mover linea), Ctrl+D (seleccion multiple).'
          ]
        },
        {
          type: 'paragraph',
          title: 'Laboratorio 01A',
          texts: [
            'VSC - elementos de interfaz de usuario, extensiones y atajos de teclado.',
            'Objetivo: configurar el entorno de trabajo instalando extensiones esenciales (Live Server, Prettier, ESLint) y practicar los atajos mas utilizados.'
          ]
        },
        {
          type: 'paragraph',
          title: 'Reflexion',
          texts: [
            'Que aprendi: a diferenciar tipos de soluciones web y comprender el flujo completo cliente-servidor.',
            'Como aprendi: revisando ejemplos reales y aplicando la teoria en la configuracion del entorno.'
          ]
        },
        {
          type: 'button',
          title: 'Laboratorio Semana 01',
          url: 'https://github.com/cybernetjs/XSS_SitioWeb.git'
        }
      ]
    },
    {
      id: 'semana-02',
      title: 'Semana 02 - HTML, XML y CSS',
      blocks: [
        {
          type: 'paragraph',
          title: '2.1 Estandar Open Web Platform',
          texts: [
            'Conjunto de tecnologias estandarizadas por W3C y WHATWG que definen como debe funcionar la web de manera abierta e interoperable: HTML5, CSS3, JavaScript (ECMAScript), SVG, Web APIs (Fetch, Storage, Workers, etc.).'
          ]
        },
        {
          type: 'definition',
          title: '2.2 HTML5 y XML',
          items: [
            {
              term: 'HTML (HyperText Markup Language)',
              desc: 'Lenguaje de marcado que estructura el contenido de una pagina web mediante etiquetas. HTML5 introduce etiquetas semanticas como <header>, <nav>, <main>, <section>, <article>, <footer>, <aside>.'
            },
            {
              term: 'XML (eXtensible Markup Language)',
              desc: 'Lenguaje de marcado para almacenar y transportar datos. A diferencia de HTML, XML define sus propias etiquetas. Es la base de formatos como SVG, RSS y SOAP.'
            }
          ]
        },
        {
          type: 'list',
          title: 'Etiquetas principales de HTML5',
          items: [
            '<html> -> raiz del documento',
            '<head> -> metadatos (title, charset, links)',
            '<body> -> contenido visible',
            '<h1>-<h6> -> encabezados',
            '<p> -> parrafo',
            '<a> -> hipervinculo',
            '<img> -> imagen',
            '<ul><li> -> lista no ordenada',
            '<form> -> formulario',
            '<input> -> campo de entrada',
            '<div> -> contenedor en bloque',
            '<span> -> contenedor en linea'
          ]
        },
        {
          type: 'definition',
          title: '2.3 Arbol DOM (Document Object Model)',
          items: [
            {
              term: 'Arbol de nodos',
              desc: 'Cada etiqueta HTML es un nodo. Existen nodos de tipo Element, Text, Attribute y Document.'
            },
            {
              term: 'Renderizado del arbol',
              desc: 'El navegador construye el DOM tree y el CSSOM tree, los combina en el Render Tree, calcula el layout y finalmente pinta los pixeles en pantalla.'
            },
            {
              term: 'Ciclo de vida de una pagina web',
              desc: 'URL -> DNS -> HTTP GET -> respuesta HTML -> construccion del DOM -> aplicacion de CSS -> ejecucion de JavaScript -> renderizado final.'
            }
          ]
        },
        {
          type: 'code',
          title: 'Ejemplo de arbol DOM',
          lines: [
            'Document',
            '  html',
            '    head',
            '      title -> "Mi pagina"',
            '    body',
            '      h1 -> "Hola"',
            '      p  -> "Mundo"'
          ]
        },
        {
          type: 'list',
          title: '2.4 SEO (Search Engine Optimization)',
          items: [
            'Uso correcto de etiquetas semanticas (<h1>, <article>).',
            'Atributo alt en imagenes.',
            'Meta etiquetas: <meta name="description">, viewport.',
            'Velocidad de carga de la pagina.',
            'URLs amigables y estructura clara.',
            'Contenido relevante y actualizado.'
          ]
        },
        {
          type: 'list',
          title: '2.5 CSS3 - hojas de estilo en cascada',
          items: [
            'Tipos de display: block, inline, inline-block.',
            'Unidades de medida: absolutas (px, cm, mm, pt) y relativas (%, em, rem, vw, vh).',
            'Flexbox: layout unidimensional con flex-direction, justify-content, align-items, flex-grow.',
            'Grid layout: layout bidimensional con grid-template-columns y gap.',
            'Position: static, relative, absolute, fixed, sticky.',
            'Diseno fluido con unidades relativas.',
            'Diseno responsivo con media queries: @media (max-width: 768px).'
          ]
        },
        {
          type: 'paragraph',
          title: 'Laboratorio 02A',
          texts: [
            'Diseno flexbox, diseno fluido y diseno responsivo.',
            'Objetivo: construir una pagina con layout flexbox que se adapte correctamente en dispositivos moviles, tablets y escritorio usando media queries y unidades relativas.'
          ]
        },
        {
          type: 'paragraph',
          title: 'Reflexion',
          texts: [
            'Que aprendi: a estructurar contenido semantico y a controlar el layout con CSS.',
            'Como aprendi: maquetando ejemplos y observando el comportamiento del DOM y el renderizado.'
          ]
        },
        {
          type: 'button',
          title: 'Laboratorio Semana 02',
          url: 'https://github.com/cybernetjs/XSS_SitioWeb.git'
        }
      ]
    },
    {
      id: 'semana-03',
      title: 'Semana 03 - Bootstrap y Tailwind CSS',
      blocks: [
        {
          type: 'paragraph',
          title: '3.1 Bootstrap',
          texts: [
            'Framework CSS front-end de codigo abierto desarrollado por Twitter. Proporciona componentes y un sistema de grid preestilizados para crear interfaces responsivas rapidamente.'
          ]
        },
        {
          type: 'list',
          title: 'Sistema de grid (12 columnas)',
          items: [
            'container > row > col-md-6 como base para distribuir columnas.'
          ]
        },
        {
          type: 'list',
          title: 'Componentes principales',
          items: [
            'Navbar, Cards, Modals, Alerts, Badges, Buttons, Dropdowns, Forms, Tables, Carousels, Breadcrumbs.'
          ]
        },
        {
          type: 'list',
          title: 'Breakpoints',
          items: [
            'xs (<576px), sm (>=576), md (>=768), lg (>=992), xl (>=1200), xxl (>=1400).'
          ]
        },
        {
          type: 'paragraph',
          title: '3.2 Tailwind CSS',
          texts: [
            'Framework CSS utility-first: ofrece clases de utilidad atomicas que se combinan directamente en el HTML para un diseno altamente personalizable.'
          ]
        },
        {
          type: 'list',
          title: 'Tailwind - tipografia y estilos',
          items: [
            'Font: font-sans, font-serif, font-mono.',
            'Tamano: text-sm, text-base, text-lg, text-xl, text-2xl.',
            'Peso: font-light, font-normal, font-medium, font-bold.',
            'Color: text-gray-700, text-blue-500, text-white.',
            'Background: bg-white, bg-gray-100, bg-blue-600.',
            'Borders: border, border-2, border-gray-300, rounded, rounded-lg.',
            'Effects: shadow, shadow-lg, opacity-50.'
          ]
        },
        {
          type: 'list',
          title: 'Tailwind - layout y flexbox',
          items: [
            'Container: container mx-auto px-4.',
            'Display: block, inline-block, flex, grid, hidden.',
            'Position: static, relative, absolute, fixed, sticky.',
            'Flexbox: flex, flex-row, flex-col, flex-wrap, justify-center, items-center.'
          ]
        },
        {
          type: 'list',
          title: 'Tailwind - Application UI',
          items: [
            'Elements: Avatars, Badges, Dropdowns, Buttons, Button Groups.',
            'Shells y layouts: sidebar layout, header + content + footer, stacked layout, multi-column.'
          ]
        },
        {
          type: 'paragraph',
          title: 'Practica calificada 03',
          texts: [
            'Desarrollo de un sitio web completo con CSS (usando Bootstrap o Tailwind).',
            'Se evalua: estructura semantica, responsividad, uso correcto de componentes y diseno visual.'
          ]
        },
        {
          type: 'paragraph',
          title: 'Reflexion',
          texts: [
            'Que aprendi: a elegir frameworks segun el contexto y a acelerar el diseno con utilidades.',
            'Como aprendi: prototipando interfaces y comparando consistencia visual.'
          ]
        },
        {
          type: 'button',
          title: 'Laboratorio Semana 03',
          url: 'https://github.com/cybernetjs/PracticaSemana4.git'
        }
      ]
    },
    {
      id: 'semana-04',
      title: 'Semana 04 - JavaScript, TypeScript y DOM',
      blocks: [
        {
          type: 'list',
          title: '4.1 JavaScript: fundamentos',
          items: [
            'Variables: var (ambito funcion), let (ambito bloque), const (constante).',
            'Operadores: +, -, *, /, %, **; logicos: &&, ||, !; comparacion: ==, ===.',
            'Tipos de datos: numeros, strings, booleanos, null, undefined, objetos, arrays.',
            'Estructuras de control: if/else, switch, for, while, do-while, for...of, for...in.'
          ]
        },
        {
          type: 'code',
          title: '4.2 Funciones en JavaScript (ejemplos)',
          lines: [
            'function saludar(nombre) {',
            '  return "Hola " + nombre;',
            '}',
            '',
            'const saludarAnon = function(nombre) {',
            '  return "Hola " + nombre;',
            '};',
            '',
            'const saludarFlecha = (nombre) => "Hola " + nombre;',
            '',
            '(function() { console.log("Se ejecuta sola"); })();'
          ]
        },
        {
          type: 'code',
          title: 'Closures (ejemplo)',
          lines: [
            'function contador() {',
            '  let count = 0;',
            '  return () => ++count;',
            '}',
            'const inc = contador();',
            'inc(); // 1',
            'inc(); // 2'
          ]
        },
        {
          type: 'code',
          title: '4.3 TypeScript (ejemplo)',
          lines: [
            'let nombre: string = "Ana";',
            'let edad: number = 22;',
            'let activo: boolean = true;',
            '',
            'interface Usuario { nombre: string; edad: number; }',
            'const u: Usuario = { nombre: "Ana", edad: 22 };'
          ]
        },
        {
          type: 'list',
          title: '4.4 Manejo del DOM con JavaScript',
          items: [
            'Seleccion: document.getElementById("id"), document.querySelector(".clase"), document.querySelectorAll("div").',
            'Modificacion: element.textContent, element.innerHTML, element.style, element.classList.add, element.setAttribute.',
            'Eventos: element.addEventListener("click", (e) => { ... }).',
            'Creacion y eliminacion: document.createElement, appendChild, remove.'
          ]
        },
        {
          type: 'code',
          title: '4.5 Canvas y animaciones (ejemplo)',
          lines: [
            'const canvas = document.querySelector("canvas");',
            'const ctx = canvas.getContext("2d");',
            '',
            'ctx.fillStyle = "blue";',
            'ctx.fillRect(10, 10, 150, 100);',
            '',
            'function animar() {',
            '  ctx.clearRect(0, 0, canvas.width, canvas.height);',
            '  requestAnimationFrame(animar);',
            '}',
            'requestAnimationFrame(animar);'
          ]
        },
        {
          type: 'paragraph',
          title: 'Laboratorio 04',
          texts: [
            'Desarrollo de una animacion con JavaScript.',
            'Objetivo: crear una animacion interactiva usando el elemento Canvas, requestAnimationFrame y manejo de eventos del teclado o mouse para mover objetos en pantalla.'
          ]
        },
        {
          type: 'paragraph',
          title: 'Reflexion',
          texts: [
            'Que aprendi: a programar interactividad real y a estructurar logica con funciones y eventos.',
            'Como aprendi: practicando con ejemplos y ajustando el DOM en tiempo real.'
          ]
        },
        {
          type: 'button',
          title: 'Laboratorio Semana 04',
          url: 'https://github.com/cybernetjs/PracticaSemana4_Canvas.git'
        }
      ]
    },
    {
      id: 'semana-05',
      title: 'Semana 05 - Framework JS (Frontend)',
      blocks: [
        {
          type: 'paragraph',
          title: '5.1 Que es un framework JS',
          texts: [
            'Framework de JavaScript del lado del cliente (CSR) que facilita el desarrollo de aplicaciones web complejas y mantenibles. React, Vue.js y Angular son los mas populares.'
          ]
        },
        {
          type: 'paragraph',
          title: '5.2 Client Side Rendering (CSR)',
          texts: [
            'El servidor envia un HTML minimo y el navegador descarga el JavaScript que construye la UI. Ventajas: navegacion fluida y menor carga al servidor. Desventajas: mayor carga inicial y peor SEO si no se aplican tecnicas SSR/SSG.'
          ]
        },
        {
          type: 'list',
          title: '5.3 Gestion de dependencias',
          items: [
            'npm (Node Package Manager): npm install react, dependencias en node_modules, package.json como lista de dependencias.',
            'Herramientas de creacion: Create React App y Vite (npm create vite@latest).'
          ]
        },
        {
          type: 'definition',
          title: '5.4 Desarrollo basado en componentes',
          items: [
            {
              term: 'JSX',
              desc: 'Extension de sintaxis que permite escribir HTML dentro de JavaScript y se transforma a React.createElement().' 
            },
            {
              term: 'Props',
              desc: 'Mecanismo para pasar datos de un componente padre a un componente hijo; son de solo lectura.'
            },
            {
              term: 'Children',
              desc: 'Contenido que se pasa entre las etiquetas de apertura y cierre de un componente.'
            }
          ]
        },
        {
          type: 'code',
          title: 'Ejemplo con props y children',
          lines: [
            'function Tarjeta({ nombre, edad }) {',
            '  return <p>{nombre} tiene {edad} anos</p>;',
            '}',
            '',
            'function Caja({ children }) {',
            '  return <div className="caja">{children}</div>;',
            '}'
          ]
        },
        {
          type: 'list',
          title: '5.5 Estilos en framework JS',
          items: [
            'Inline styles con objetos en JSX.',
            'Style sheets globales (.css).',
            'CSS Modules (.module.css).',
            'Styled Components como libreria.',
            'Framework CSS integrado como Tailwind.'
          ]
        },
        {
          type: 'paragraph',
          title: 'Laboratorio 05A',
          texts: [
            'Pasar datos con props y children y mostrar en un componente hijo.',
            'Objetivo: crear un componente padre que pase datos mediante props y children a un componente hijo, y que este los renderice correctamente.'
          ]
        },
        {
          type: 'paragraph',
          title: 'Reflexion',
          texts: [
            'Que aprendi: a construir UI con componentes reutilizables y flujo de datos claro.',
            'Como aprendi: creando componentes simples y escalando la composicion.'
          ]
        },
        {
          type: 'button',
          title: 'Laboratorio Semana 05',
          url: 'https://github.com/cybernetjs/PracticaSemana5.git'
        }
      ]
    },
    {
      id: 'semana-06',
      title: 'Semana 06 - Eventos, condicionales, APIs',
      blocks: [
        {
          type: 'list',
          title: '6.1 Eventos en React',
          items: [
            'Eventos en camelCase con funcion manejadora directa.',
            'Pasar parametros con funciones flecha.',
            'Eventos comunes: onClick, onChange, onSubmit, onKeyDown, onMouseEnter, onFocus, onBlur.',
            'Acceso al evento con e.target.value.'
          ]
        },
        {
          type: 'list',
          title: '6.2 Renderizado condicional',
          items: [
            'Operador ternario: {isLoggedIn ? <Dashboard /> : <Login />}.',
            'Operador && (short-circuit): {loading && <Spinner />}.',
            'Funciones con if/else segun roles.'
          ]
        },
        {
          type: 'paragraph',
          title: '6.3 Renderizado iterativo',
          texts: [
            'Para listas se usa .map() y keys unicas y estables para identificar elementos.'
          ]
        },
        {
          type: 'list',
          title: '6.4 Formularios y routing',
          items: [
            'Formularios controlados con estado local (useState).',
            'Routing con React Router para navegar sin recargar la pagina.'
          ]
        },
        {
          type: 'list',
          title: '6.5 Consumo de APIs',
          items: [
            'Fetch API con then/res.json.',
            'Promesas con estados pending, fulfilled, rejected.',
            'Async/await para sintaxis mas legible.',
            'Axios como alternativa para manejo de JSON.'
          ]
        },
        {
          type: 'paragraph',
          title: 'Laboratorio 06A',
          texts: [
            'Eventos y renderizado condicional e iterativo con datos de una API.',
            'Objetivo: consumir una API publica (JSONPlaceholder, OpenWeather), obtener datos con Axios o fetch y renderizarlos dinamicamente con .map(), aplicando estados de carga y error.'
          ]
        },
        {
          type: 'paragraph',
          title: 'Reflexion',
          texts: [
            'Que aprendi: a conectar la UI con datos reales y manejar estados asincronos.',
            'Como aprendi: probando endpoints y depurando errores de red y renderizado.'
          ]
        },
        {
          type: 'button',
          title: 'Laboratorio Semana 06',
          url: 'https://github.com/cybernetjs/Practica_Semana6.git'
        }
      ]
    },
    {
      id: 'semana-07',
      title: 'Semana 07 - Hooks en React',
      blocks: [
        {
          type: 'paragraph',
          title: '7.1 Que son los hooks',
          texts: [
            'Funciones especiales de React que permiten usar estado y otras caracteristicas en componentes funcionales. Regla: solo se llaman en el nivel superior del componente o en hooks personalizados.'
          ]
        },
        {
          type: 'definition',
          title: '7.2 Hooks fundamentales',
          items: [
            {
              term: 'useState',
              desc: 'Agrega estado local a un componente funcional.'
            },
            {
              term: 'useEffect',
              desc: 'Ejecuta efectos secundarios despues del renderizado y soporta limpieza.'
            },
            {
              term: 'useContext',
              desc: 'Consume un contexto sin usar Context.Consumer.'
            },
            {
              term: 'useRef',
              desc: 'Referencia mutable que persiste entre renders sin causar re-renderizado.'
            }
          ]
        },
        {
          type: 'definition',
          title: '7.3 Hooks avanzados',
          items: [
            {
              term: 'useReducer',
              desc: 'Alternativa a useState para logica compleja.'
            },
            {
              term: 'useCallback',
              desc: 'Memoriza funciones para evitar recrearlas en cada render.'
            },
            {
              term: 'useMemo',
              desc: 'Memoriza resultados de calculos costosos.'
            }
          ]
        },
        {
          type: 'paragraph',
          title: '7.4 Hooks personalizados',
          texts: [
            'Funciones que comienzan con "use" y pueden llamar otros hooks. Permiten extraer y reutilizar logica con estado.'
          ]
        },
        {
          type: 'paragraph',
          title: 'Evaluacion de logro 01',
          texts: [
            'Se evalua la construccion de una SPA con React que implemente: componentes, props, eventos, consumo de API y uso de hooks.'
          ]
        },
        {
          type: 'paragraph',
          title: 'Laboratorio 07',
          texts: [
            'Uso de hooks.',
            'Objetivo: implementar useState, useEffect para consumo de API y al menos un hook personalizado en una aplicacion funcional.'
          ]
        },
        {
          type: 'paragraph',
          title: 'Reflexion',
          texts: [
            'Que aprendi: a estructurar logica reutilizable y controlar efectos en React.',
            'Como aprendi: probando dependencias y refactorizando componentes funcionales.'
          ]
        },
        {
          type: 'button',
          title: 'Laboratorio Semana 07',
          url: 'https://github.com/'
        }
      ]
    },
    {
      id: 'semana-08',
      title: 'Semana 08 - Revision y primer consolidado',
      blocks: [
        {
          type: 'list',
          title: 'Revision y consolidado',
          items: [
            'Revision y retroalimentacion de la Evaluacion de Logro 01.',
            'Primer consolidado de evaluacion continua.',
            'Reforzamiento de temas de las semanas 01 al 07.',
            'Fecha del consolidado: 25 al 29 de mayo de 2026.'
          ]
        },
        {
          type: 'list',
          title: 'Formula de calificacion (Unidad I)',
          items: [
            'PP1 = EL*0.50 + PLP*0.25 + TI*0.25.',
            'EL = Evaluacion de Logro (examen) 50%.',
            'PLP = Promedio de Laboratorios y Practicas 25%.',
            'TI = Trabajo de Investigacion + Portafolio 25%.'
          ]
        },
        {
          type: 'paragraph',
          title: 'Reflexion',
          texts: [
            'Que aprendi: a consolidar conocimientos y medir avances con una formula de evaluacion clara.',
            'Como aprendi: revisando practicas anteriores y aplicando retroalimentacion.'
          ]
        },
        {
          type: 'button',
          title: 'Laboratorio Semana 08',
          url: 'https://github.com/'
        }
      ]
    },
    {
      id: 'semana-09',
      title: 'Semana 09 - Tecnologia Web Backend',
      blocks: [
        {
          type: 'paragraph',
          title: '9.1 Arquitectura de aplicaciones web',
          texts: [
            'Modelo cliente-servidor: el cliente (navegador) envia peticiones HTTP y el servidor procesa la logica de negocio, accede a la base de datos y devuelve una respuesta (HTML, JSON, XML).',
            'Servidores web comunes: Apache HTTP Server, Nginx, IIS, servidor de desarrollo integrado en frameworks (runserver de Django, php -S).'
          ]
        },
        {
          type: 'definition',
          title: '9.2 Funcionamiento del server side',
          items: [
            {
              term: 'Server-Side Rendering (SSR)',
              desc: 'El servidor genera el HTML completo antes de enviarlo al navegador, mejorando el SEO y el tiempo de primera carga.'
            },
            {
              term: 'Lenguaje backend',
              desc: 'Lenguaje que se ejecuta en el servidor para procesar peticiones: PHP, Java (JSP), Python, Node.js.'
            },
            {
              term: 'Framework backend',
              desc: 'Conjunto de herramientas que estandariza el desarrollo del lado servidor: Laravel (PHP), Spring (Java), Django/Flask (Python), Express (Node.js).'
            }
          ]
        },
        {
          type: 'paragraph',
          title: '9.3 Aplicaciones Web con PHP',
          texts: [
            'PHP es un lenguaje de scripting embebido en HTML que se ejecuta en el servidor. Es interpretado, de tipado dinamico y ampliamente usado (WordPress, Laravel).'
          ]
        },
        {
          type: 'code',
          title: 'Ejemplo basico en PHP',
          lines: [
            '<?php',
            '  $nombre = "Jose Luis";',
            '  echo "Hola " . $nombre;',
            '',
            '  if (isset($_GET["id"])) {',
            '    echo "ID recibido: " . $_GET["id"];',
            '  }',
            '?>'
          ]
        },
        {
          type: 'paragraph',
          title: '9.4 Aplicaciones Web con JSP',
          texts: [
            'JSP (JavaServer Pages) permite incrustar codigo Java dentro de paginas HTML. Se ejecuta sobre un servidor de aplicaciones (Apache Tomcat) y se compila a un servlet.'
          ]
        },
        {
          type: 'code',
          title: 'Ejemplo basico en JSP',
          lines: [
            '<%@ page language="java" %>',
            '<html>',
            '  <body>',
            '    <% String nombre = "Jose Luis"; %>',
            '    <p>Hola <%= nombre %></p>',
            '  </body>',
            '</html>'
          ]
        },
        {
          type: 'paragraph',
          title: 'Laboratorio 09',
          texts: [
            'Despliegue de aplicaciones web backend con PHP y JSP.',
            'Objetivo: configurar un entorno de servidor local (XAMPP/Apache Tomcat) y desplegar una pagina dinamica simple en PHP y otra en JSP que reciban y muestren datos del lado servidor.'
          ]
        },
        {
          type: 'paragraph',
          title: 'Reflexion',
          texts: [
            'Que aprendi: a diferenciar el procesamiento del lado servidor frente al del cliente.',
            'Como aprendi: desplegando ejemplos en PHP y JSP y comparando su ciclo de ejecucion.'
          ]
        },
        {
          type: 'button',
          title: 'Laboratorio Semana 09',
          url: 'https://github.com/'
        }
      ]
    },
    {
      id: 'semana-10',
      title: 'Semana 10 - Lenguaje Python',
      blocks: [
        {
          type: 'list',
          title: '10.1 Sintaxis basica',
          items: [
            'Python usa indentacion (espacios) para delimitar bloques de codigo en lugar de llaves.',
            'Comentarios de una linea con #, comentarios multilinea con triple comilla \'\'\' o """.',
            'Variables: tipado dinamico, no requieren declaracion explicita de tipo (x = 10).'
          ]
        },
        {
          type: 'list',
          title: '10.2 Tipos de datos',
          items: [
            'Numeros: int, float, complex.',
            'Cadenas (str): inmutables, con metodos como .upper(), .split(), .format().',
            'Listas: [1, 2, 3], mutables y ordenadas.',
            'Tuplas: (1, 2, 3), inmutables y ordenadas.',
            'Diccionarios: {"clave": "valor"}, pares clave-valor.',
            'Booleanos: True / False.'
          ]
        },
        {
          type: 'code',
          title: 'Estructuras de control y funciones',
          lines: [
            'edad = 20',
            'if edad >= 18:',
            '    print("Mayor de edad")',
            'else:',
            '    print("Menor de edad")',
            '',
            'for i in range(5):',
            '    print(i)',
            '',
            'def sumar(a, b):',
            '    return a + b',
            '',
            'resultado = sumar(3, 4)'
          ]
        },
        {
          type: 'definition',
          title: '10.3 Programacion orientada a objetos',
          items: [
            {
              term: 'Encapsulamiento',
              desc: 'Ocultar el estado interno de un objeto; en Python se usa convencion con guion bajo (_atributo, __atributo).'
            },
            {
              term: 'Herencia multiple',
              desc: 'Python permite que una clase herede de varias clases padre: class Hijo(PadreA, PadreB).'
            },
            {
              term: 'Polimorfismo',
              desc: 'Distintas clases pueden implementar el mismo metodo con comportamientos diferentes.'
            },
            {
              term: 'Clases, atributos e instancias',
              desc: 'Una clase es una plantilla; un atributo describe el estado; una instancia es un objeto creado a partir de la clase.'
            },
            {
              term: 'Constructores y destructores',
              desc: '__init__ inicializa una instancia al crearla; __del__ se ejecuta cuando el objeto es eliminado.'
            },
            {
              term: 'Excepciones y modulos',
              desc: 'try/except/finally para manejo de errores; import para reutilizar codigo desde otros archivos o paquetes.'
            }
          ]
        },
        {
          type: 'code',
          title: 'Ejemplo de clase en Python',
          lines: [
            'class Persona:',
            '    def __init__(self, nombre):',
            '        self.nombre = nombre',
            '',
            '    def saludar(self):',
            '        return f"Hola, soy {self.nombre}"',
            '',
            'try:',
            '    p = Persona("Jose Luis")',
            '    print(p.saludar())',
            'except Exception as e:',
            '    print("Error:", e)'
          ]
        },
        {
          type: 'paragraph',
          title: 'Laboratorio 10',
          texts: [
            'Aplicacion con Python.',
            'Objetivo: implementar un programa en Python que use clases, herencia, manejo de excepciones y al menos un modulo propio importado.'
          ]
        },
        {
          type: 'paragraph',
          title: 'Reflexion',
          texts: [
            'Que aprendi: a aplicar POO en Python y a estructurar codigo en modulos.',
            'Como aprendi: practicando ejercicios de clases y manejo de errores.'
          ]
        },
        {
          type: 'button',
          title: 'Laboratorio Semana 10',
          url: 'https://github.com/'
        }
      ]
    },
    {
      id: 'semana-11',
      title: 'Semana 11 - Introduccion a Django',
      blocks: [
        {
          type: 'definition',
          title: '11.1 Patrones de arquitectura',
          items: [
            {
              term: 'MVC (Model-View-Controller)',
              desc: 'Separa datos (Model), presentacion (View) y logica de control (Controller).'
            },
            {
              term: 'MTV (Model-Template-View)',
              desc: 'Variante de Django: Model gestiona datos, Template la presentacion y View la logica (equivalente al Controller de MVC).'
            }
          ]
        },
        {
          type: 'code',
          title: '11.2 Instalacion y gestion de proyectos',
          lines: [
            'pip install django',
            'django-admin startproject miproyecto',
            'cd miproyecto',
            'python manage.py startapp miapp',
            'python manage.py runserver',
            '# Integracion con Apache: modulo mod_wsgi'
          ]
        },
        {
          type: 'list',
          title: '11.3 Vistas y URLs',
          items: [
            'Vistas basadas en funcion (FBV): def index(request): return render(...).',
            'Vistas basadas en clase (CBV): class Index(View) o class ListaAlumnos(ListView).',
            'Configuracion de urls.py con path("ruta/", vista, name="nombre").'
          ]
        },
        {
          type: 'code',
          title: 'Ejemplo de vista y URL',
          lines: [
            '# views.py',
            'from django.shortcuts import render',
            'def index(request):',
            '    return render(request, "index.html")',
            '',
            '# urls.py',
            'from django.urls import path',
            'from . import views',
            'urlpatterns = [',
            '    path("", views.index, name="index"),',
            ']'
          ]
        },
        {
          type: 'list',
          title: '11.4 Plantillas',
          items: [
            'Herencia de plantillas: {% extends "base.html" %}.',
            'Bloques: {% block contenido %} ... {% endblock %}.',
            'Etiquetas: {% for %}, {% if %}, {% url %}.',
            'Filtros: {{ variable|upper }}, {{ fecha|date:"d/m/Y" }}.'
          ]
        },
        {
          type: 'definition',
          title: '11.5 Modelo de datos',
          items: [
            {
              term: 'Modelos',
              desc: 'Clases Python que heredan de models.Model y representan tablas de la base de datos.'
            },
            {
              term: 'API para base de datos (ORM)',
              desc: 'Permite crear, leer, actualizar y eliminar registros usando codigo Python en vez de SQL directo.'
            },
            {
              term: 'Tipos de campos',
              desc: 'CharField, TextField, IntegerField, DateField, ForeignKey, ManyToManyField, entre otros.'
            },
            {
              term: 'Consultas (QuerySet)',
              desc: 'Modelo.objects.all(), .filter(), .get(), .exclude() para construir consultas encadenables.'
            }
          ]
        },
        {
          type: 'code',
          title: 'Ejemplo de modelo',
          lines: [
            'from django.db import models',
            '',
            'class Alumno(models.Model):',
            '    nombre = models.CharField(max_length=100)',
            '    correo = models.EmailField()',
            '    fecha_registro = models.DateField(auto_now_add=True)',
            '',
            '# Consulta',
            'Alumno.objects.filter(nombre__icontains="Jose")'
          ]
        },
        {
          type: 'paragraph',
          title: 'Laboratorio 11',
          texts: [
            'Desarrollo de vistas, plantillas y modelos.',
            'Objetivo: crear una app Django con al menos un modelo, sus migraciones, una vista basada en clase y una plantilla con herencia que liste los datos del modelo.'
          ]
        },
        {
          type: 'paragraph',
          title: 'Reflexion',
          texts: [
            'Que aprendi: a organizar un proyecto backend siguiendo el patron MTV.',
            'Como aprendi: creando modelos, migrando la base de datos y conectando vistas con plantillas.'
          ]
        },
        {
          type: 'button',
          title: 'Laboratorio Semana 11',
          url: 'https://github.com/'
        }
      ]
    },
    {
      id: 'semana-12',
      title: 'Semana 12 - Formularios, Admin y Middleware',
      blocks: [
        {
          type: 'list',
          title: '12.1 Gestion de formularios',
          items: [
            'forms.Form para formularios independientes del modelo.',
            'forms.ModelForm para generar formularios automaticamente a partir de un modelo.',
            'Validacion integrada por tipo de campo y validadores personalizados (clean_<campo>).',
            'Sanitizacion de datos antes de guardarlos en la base de datos.'
          ]
        },
        {
          type: 'code',
          title: 'Ejemplo de ModelForm',
          lines: [
            'from django import forms',
            'from .models import Alumno',
            '',
            'class AlumnoForm(forms.ModelForm):',
            '    class Meta:',
            '        model = Alumno',
            '        fields = ["nombre", "correo"]',
            '',
            '    def clean_nombre(self):',
            '        nombre = self.cleaned_data["nombre"]',
            '        if len(nombre) < 3:',
            '            raise forms.ValidationError("Nombre muy corto")',
            '        return nombre'
          ]
        },
        {
          type: 'list',
          title: '12.2 Django Admin',
          items: [
            'Activacion en admin.py con admin.site.register(Modelo).',
            'Personalizacion con clases ModelAdmin: list_display, search_fields, list_filter.',
            'Creacion de campos calculados con metodos decorados con @admin.display.',
            'Formularios personalizados dentro del panel de administracion.'
          ]
        },
        {
          type: 'definition',
          title: '12.3 Middleware y sesiones',
          items: [
            {
              term: 'Middleware',
              desc: 'Componente que procesa cada peticion/respuesta antes de llegar a la vista o antes de devolverse al cliente (ej. seguridad, sesiones, autenticacion).'
            },
            {
              term: 'Sesiones',
              desc: 'Django almacena datos por usuario entre peticiones usando request.session, respaldado por cookies o base de datos.'
            },
            {
              term: 'Autenticacion',
              desc: 'Verifica la identidad del usuario (login/logout) con django.contrib.auth.'
            },
            {
              term: 'Autorizacion',
              desc: 'Controla el acceso a recursos segun permisos o grupos: @login_required, @permission_required.'
            }
          ]
        },
        {
          type: 'paragraph',
          title: 'Laboratorio 12',
          texts: [
            'Desarrollo de un sistema web backend.',
            'Objetivo: implementar un CRUD con formularios validados, registrar los modelos en Django Admin y proteger las vistas con autenticacion y manejo de sesiones.'
          ]
        },
        {
          type: 'paragraph',
          title: 'Reflexion',
          texts: [
            'Que aprendi: a validar datos de forma segura y a proteger vistas con autenticacion.',
            'Como aprendi: construyendo formularios, probando el panel admin y depurando sesiones.'
          ]
        },
        {
          type: 'button',
          title: 'Laboratorio Semana 12',
          url: 'https://github.com/'
        }
      ]
    },
    {
      id: 'semana-13',
      title: 'Semana 13 - Diseno de APIs RESTful',
      blocks: [
        {
          type: 'definition',
          title: '13.1 Introduccion a REST',
          items: [
            {
              term: 'REST',
              desc: 'Estilo arquitectonico para servicios web basado en recursos identificados por URLs y operados con metodos HTTP (GET, POST, PUT, DELETE).'
            },
            {
              term: 'Recurso',
              desc: 'Entidad expuesta por la API (ej. /api/alumnos/) representada usualmente en JSON.'
            },
            {
              term: 'Hipermedios y HATEOAS',
              desc: 'Hypermedia As The Engine Of Application State: las respuestas incluyen enlaces a otros recursos relacionados, permitiendo navegar la API dinamicamente.'
            }
          ]
        },
        {
          type: 'list',
          title: '13.2 Serializacion y filtrado',
          items: [
            'Serializacion de modelos con serializers.ModelSerializer (Django REST Framework).',
            'Serializacion desde otras fuentes de datos (querysets personalizados, agregaciones).',
            'Filtrado de resultados por parametros de consulta (?estado=activo).',
            'Paginacion de resultados grandes (PageNumberPagination, LimitOffsetPagination).',
            'Limites temporales de uso (throttling) para prevenir abuso de la API.'
          ]
        },
        {
          type: 'code',
          title: 'Ejemplo de serializer y vista',
          lines: [
            'from rest_framework import serializers, viewsets',
            'from .models import Alumno',
            '',
            'class AlumnoSerializer(serializers.ModelSerializer):',
            '    class Meta:',
            '        model = Alumno',
            '        fields = "__all__"',
            '',
            'class AlumnoViewSet(viewsets.ModelViewSet):',
            '    queryset = Alumno.objects.all()',
            '    serializer_class = AlumnoSerializer'
          ]
        },
        {
          type: 'list',
          title: '13.3 Ruteadores y seguridad',
          items: [
            'Routers de DRF generan automaticamente las URLs de un ViewSet (router.register).',
            'AJAX permite consumir la API desde JavaScript sin recargar la pagina.',
            'CSRF (Cross-Site Request Forgery): proteccion contra envio de formularios falsificados.',
            'CORS (Cross-Origin Resource Sharing): habilita el consumo de la API desde otros dominios (frontend en React).'
          ]
        },
        {
          type: 'code',
          title: 'Ejemplo de router',
          lines: [
            'from rest_framework.routers import DefaultRouter',
            'from .views import AlumnoViewSet',
            '',
            'router = DefaultRouter()',
            'router.register("alumnos", AlumnoViewSet)',
            '',
            'urlpatterns = router.urls'
          ]
        },
        {
          type: 'paragraph',
          title: 'Laboratorio 13',
          texts: [
            'Desarrollo de un sistema web backend.',
            'Objetivo: construir una API RESTful con Django REST Framework que exponga un recurso con operaciones CRUD, paginacion, filtrado y proteccion CORS/CSRF, lista para ser consumida desde React.'
          ]
        },
        {
          type: 'paragraph',
          title: 'Reflexion',
          texts: [
            'Que aprendi: a diseñar APIs siguiendo el estandar REST y a protegerlas correctamente.',
            'Como aprendi: probando endpoints con Postman/Insomnia y consumiendolos desde el frontend.'
          ]
        },
        {
          type: 'button',
          title: 'Laboratorio Semana 13',
          url: 'https://github.com/'
        }
      ]
    },
    {
      id: 'semana-14',
      title: 'Semana 14 - Microservicios en Django',
      blocks: [
        {
          type: 'definition',
          title: '14.1 Introduccion a microservicios',
          items: [
            {
              term: 'Microservicio',
              desc: 'Servicio pequeno, independiente y desplegable por separado, enfocado en una unica capacidad de negocio.'
            },
            {
              term: 'Arquitectura de microservicios',
              desc: 'Divide una aplicacion monolitica en varios servicios que se comunican entre si, cada uno con su propio ciclo de despliegue.'
            },
            {
              term: 'Comunicacion entre microservicios',
              desc: 'Se realiza mediante llamadas REST/HTTP, mensajeria asincrona (RabbitMQ, Kafka) o gRPC.'
            },
            {
              term: 'Gestion de bases de datos en microservicios',
              desc: 'Patron "database per service": cada microservicio administra su propia base de datos para mantener bajo acoplamiento.'
            }
          ]
        },
        {
          type: 'paragraph',
          title: '14.2 Construccion del primer microservicio',
          texts: [
            'Se configura un proyecto Django reducido y enfocado (ej. microservicio-alumnos) que expone su propia API RESTful, independiente de otros servicios del sistema.'
          ]
        },
        {
          type: 'code',
          title: '14.3 Docker y Kubernetes',
          lines: [
            '# Dockerfile',
            'FROM python:3.11-slim',
            'WORKDIR /app',
            'COPY requirements.txt .',
            'RUN pip install -r requirements.txt',
            'COPY . .',
            'CMD ["python", "manage.py", "runserver", "0.0.0.0:8000"]',
            '',
            '# docker-compose.yml (fragmento)',
            'services:',
            '  alumnos-service:',
            '    build: ./alumnos',
            '    ports:',
            '      - "8001:8000"'
          ]
        },
        {
          type: 'list',
          title: 'Proteccion, monitoreo y escalado',
          items: [
            'Proteccion: autenticacion con tokens JWT y un API Gateway como punto unico de entrada.',
            'Monitoreo: herramientas como Prometheus y Grafana para observar salud y metricas de cada servicio.',
            'Escalado: Kubernetes permite escalar horizontalmente cada microservicio de forma independiente segun la demanda (Deployments, Services, HorizontalPodAutoscaler).'
          ]
        },
        {
          type: 'paragraph',
          title: 'Consumo del microservicio',
          texts: [
            'El frontend en React consume los endpoints del microservicio mediante Axios/fetch, integrando la solucion fullstack construida durante el curso.'
          ]
        },
        {
          type: 'paragraph',
          title: 'Reflexion',
          texts: [
            'Que aprendi: a descomponer un backend monolitico en servicios independientes y desplegarlos con contenedores.',
            'Como aprendi: creando un microservicio simple, dockerizandolo y probando su comunicacion con el frontend.'
          ]
        },
        {
          type: 'button',
          title: 'Proyecto Microservicios',
          url: 'https://github.com/'
        }
      ]
    },
    {
      id: 'semana-15',
      title: 'Semana 15 - Proyecto de investigacion y RSU',
      blocks: [
        {
          type: 'list',
          title: '15.1 Exposicion del proyecto de investigacion',
          items: [
            'Presentacion del estado del arte investigado durante el curso.',
            'Exposicion del trabajo aplicativo desarrollado (aplicacion web fullstack).',
            'Sustentacion de las decisiones tecnicas: arquitectura, framework backend y frontend elegidos.'
          ]
        },
        {
          type: 'list',
          title: '15.2 Responsabilidad Social Universitaria (RSU)',
          items: [
            'Vinculacion del proyecto con los Objetivos de Desarrollo Sostenible (ODS).',
            'Enfoque en beneficiar a la comunidad Huancaina con la solucion desarrollada.',
            'Tutoria orientada a promover proyectos con impacto social real.'
          ]
        },
        {
          type: 'paragraph',
          title: 'Evaluacion de Logro 02',
          texts: [
            'Se evalua el desarrollo completo de una solucion web fullstack: frontend (React) consumiendo una API backend (Django) basada en microservicios, cumpliendo estandares internacionales de desarrollo.'
          ]
        },
        {
          type: 'paragraph',
          title: 'Reflexion',
          texts: [
            'Que aprendi: a comunicar tecnicamente un proyecto y a vincular la solucion con un impacto social.',
            'Como aprendi: preparando la exposicion, documentando el proyecto y recibiendo retroalimentacion.'
          ]
        }
      ]
    },
    {
      id: 'semana-16',
      title: 'Semana 16 - Revision y segundo consolidado',
      blocks: [
        {
          type: 'list',
          title: 'Revision y consolidado final',
          items: [
            'Revision y retroalimentacion de la Evaluacion de Logro 02.',
            'Segundo consolidado de evaluacion continua.',
            'Reforzamiento de temas de las semanas 09 al 15.',
            'Fecha del consolidado: 20 al 24 de julio de 2026.'
          ]
        },
        {
          type: 'list',
          title: 'Formula de calificacion (Unidad II)',
          items: [
            'PP2 = EL*0.50 + PLP*0.25 + TI*0.25.',
            'EL = Evaluacion de Logro (examen) 50%.',
            'PLP = Promedio de Laboratorios y Practicas 25%.',
            'TI = Trabajo de Investigacion + Portafolio 25%.',
            'Promedio Final = (PP1 + PP2) / 2.'
          ]
        },
        {
          type: 'paragraph',
          title: 'Cierre del curso',
          texts: [
            'Con este segundo consolidado finaliza la asignatura Desarrollo de Aplicaciones Web (IS093A), habiendo cubierto el desarrollo frontend con SPA en React y el desarrollo backend con PHP, JSP, Python, Django y microservicios.'
          ]
        }
      ]
    },
    {
      id: 'resumen-labs',
      title: 'Resumen de laboratorios',
      blocks: [
        {
          type: 'list',
          title: 'Resumen de laboratorios - Unidad I',
          items: resumenLaboratorios
        },
        {
          type: 'list',
          title: 'Resumen de laboratorios - Unidad II',
          items: resumenLaboratoriosUnidadII
        }
      ]
    },
    {
      id: 'bibliografia',
      title: 'Bibliografia recomendada',
      blocks: [
        {
          type: 'list',
          title: 'Libros',
          items: bibliografiaLibros
        },
        {
          type: 'links',
          title: 'Recursos en linea',
          items: bibliografiaUrls
        }
      ]
    },
    {
      id: 'reflexion-final',
      title: 'Reflexion final del curso',
      blocks: [
        {
          type: 'paragraph',
          title: 'Reflexion final del curso',
          texts: [
            'Aprendi a construir experiencias web de forma progresiva: primero comprendiendo la base de la web y el HTML, luego el diseno con CSS,',
            'despues la programacion con JavaScript y finalmente el trabajo con React y hooks. Aprendi combinando teoria con practica constante,',
            'comparando herramientas y corrigiendo errores en el camino. Me llevo una ruta clara para seguir mejorando en frontend y una metodologia',
            'de estudio basada en experimentar, documentar y revisar mis resultados.'
          ]
        }
      ]
    }
  ]

  const renderBlock = (block, blockIndex) => {
    const titleStyle = {
      color: '#ccd6f6',
      fontSize: '15px',
      fontWeight: 600,
      marginBottom: '8px'
    }

    if (block.type === 'paragraph') {
      return (
        <div key={blockIndex}>
          <p style={titleStyle}>{block.title}</p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
            {block.texts.map((text, textIndex) => (
              <p key={textIndex} style={{ color: '#8892b0', fontSize: '14px', lineHeight: 1.7 }}>
                {text}
              </p>
            ))}
          </div>
        </div>
      )
    }

    if (block.type === 'list') {
      return (
        <div key={blockIndex}>
          <p style={titleStyle}>{block.title}</p>
          <ul style={{ paddingLeft: '18px', display: 'flex', flexDirection: 'column', gap: '6px' }}>
            {block.items.map((item, itemIndex) => (
              <li key={itemIndex} style={{ color: '#8892b0', fontSize: '14px', lineHeight: 1.7 }}>
                {item}
              </li>
            ))}
          </ul>
        </div>
      )
    }

    if (block.type === 'definition') {
      return (
        <div key={blockIndex}>
          <p style={titleStyle}>{block.title}</p>
          <ul style={{ paddingLeft: '18px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
            {block.items.map((item, itemIndex) => (
              <li key={itemIndex} style={{ color: '#8892b0', fontSize: '14px', lineHeight: 1.7 }}>
                <span style={{ color: '#ccd6f6', fontWeight: 600 }}>{item.term}:</span> {item.desc}
              </li>
            ))}
          </ul>
        </div>
      )
    }

    if (block.type === 'code') {
      return (
        <div key={blockIndex}>
          <p style={titleStyle}>{block.title}</p>
          <pre
            style={{
              backgroundColor: '#0a192f',
              borderRadius: '8px',
              padding: '16px',
              color: '#00a8ff',
              fontSize: '13px',
              lineHeight: 1.6,
              overflowX: 'auto',
              fontFamily: "'Fira Code', monospace"
            }}
          >
            {block.lines.join('\n')}
          </pre>
        </div>
      )
    }

    if (block.type === 'links') {
      return (
        <div key={blockIndex}>
          <p style={titleStyle}>{block.title}</p>
          <ol style={{ paddingLeft: '18px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {block.items.map((recurso) => (
              <li key={recurso.url} style={{ color: '#8892b0', fontSize: '14px', lineHeight: 1.7 }}>
                <span style={{ color: '#ccd6f6', fontWeight: 600 }}>{recurso.label}:</span>{' '}
                <a href={recurso.url} style={{ color: '#00a8ff' }}>
                  {recurso.url}
                </a>
              </li>
            ))}
          </ol>
        </div>
      )
    }

    if (block.type === 'button') {
      return (
        <div key={blockIndex}>
          <a
            href={block.url}
            className="btn btn-secondary"
            style={{ alignSelf: 'flex-start' }}
          >
            {block.title}
          </a>
        </div>
      )
    }

    return null
  }

  const activeTab = tabs[activeIndex]

  return (
    <section id="cuaderno" className="section" style={{ backgroundColor: 'transparent' }}>
      <div className="container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">
            <span className="hash">#</span> Cuaderno
          </h2>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
            <div className="cuaderno-unidades" style={{ display: 'grid', gap: '24px', gridTemplateColumns: '1fr 1fr' }}>
              <div className="card" style={{ padding: '32px 34px' }}>
                <h3 style={{ color: '#00a8ff', fontSize: '22px', fontWeight: 700, marginBottom: '10px' }}>
                  Unidad I: Desarrollo Web Frontend
                </h3>
                <p style={{ color: '#ccd6f6', fontSize: '15px', lineHeight: 1.8, marginBottom: '6px' }}>
                  Asignatura: Desarrollo de Aplicaciones Web (IS093A)
                </p>
                <p style={{ color: '#8892b0', fontSize: '14px', lineHeight: 1.8, marginBottom: '6px' }}>
                  Desarrollar aplicaciones web frontend de paginas simples SPA de acuerdo a la especificacion de documentos.
                </p>
                <p style={{ color: '#8892b0', fontSize: '14px', lineHeight: 1.8 }}>
                  Universidad Nacional del Centro del Peru
                </p>
              </div>

              <div className="card" style={{ padding: '32px 34px' }}>
                <h3 style={{ color: '#00a8ff', fontSize: '22px', fontWeight: 700, marginBottom: '10px' }}>
                  Unidad II: Desarrollo Web Fullstack
                </h3>
                <p style={{ color: '#ccd6f6', fontSize: '15px', lineHeight: 1.8, marginBottom: '6px' }}>
                  Asignatura: Desarrollo de Aplicaciones Web (IS093A)
                </p>
                <p style={{ color: '#8892b0', fontSize: '14px', lineHeight: 1.8, marginBottom: '6px' }}>
                  Desarrollar aplicaciones web frontend y backend con consumo de APIs del lado servidor y basado en estandares internacionales.
                </p>
                <p style={{ color: '#8892b0', fontSize: '14px', lineHeight: 1.8 }}>
                  Universidad Nacional del Centro del Peru
                </p>
              </div>
            </div>

            <div className="cuaderno-grid" style={{ display: 'grid', gap: '24px', gridTemplateColumns: 'minmax(220px, 280px) 1fr' }}>
              <div className="card" style={{ padding: '20px' }}>
                <p style={{ color: '#ccd6f6', fontSize: '15px', fontWeight: 600, marginBottom: '14px' }}>
                  Semanas y apartados
                </p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  {tabs.map((tab, index) => (
                    <button
                      key={tab.id}
                      type="button"
                      onClick={() => setActiveIndex(index)}
                      style={{
                        textAlign: 'left',
                        padding: '10px 12px',
                        borderRadius: '8px',
                        border: index === activeIndex ? '1px solid #00a8ff' : '1px solid rgba(0, 168, 255, 0.15)',
                        backgroundColor: index === activeIndex ? 'rgba(0, 168, 255, 0.12)' : 'transparent',
                        color: index === activeIndex ? '#00a8ff' : '#8892b0',
                        fontSize: '14px',
                        fontWeight: index === activeIndex ? 600 : 500,
                        transition: 'all 0.2s ease'
                      }}
                    >
                      {tab.title}
                    </button>
                  ))}
                </div>
              </div>

              <motion.div
                key={activeTab.id}
                initial={{ opacity: 0, y: 12 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4 }}
                className="card"
                style={{ padding: '34px' }}
              >
                <h3 style={{ color: '#00a8ff', fontSize: '22px', fontWeight: 700, marginBottom: '16px' }}>
                  {activeTab.title}
                </h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  {activeTab.blocks.map((block, blockIndex) => renderBlock(block, blockIndex))}
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .cuaderno-grid {
            grid-template-columns: 1fr !important;
          }
          .cuaderno-unidades {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  )
}

export default Cuaderno