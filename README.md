🎮 Mega Man Retro SPA

Proyecto web Single Page Application (SPA) inspirado en la estética NES / Mega Man clásico, desarrollado con HTML, CSS y JavaScript puro, sin frameworks.
Incluye navegación dinámica, efectos CRT, música de fondo y animaciones con sprite sheets estilo 8-bits.

🕹️ Características principales

🎨 Estética retro NES

Tipografía Press Start 2P

Colores y bordes estilo consola clásica

📺 Modo CRT

Scanlines

Efecto perspectiva y brillo

🎵 Música de fondo

Control Play / Pause

⚡ SPA sin recarga

Navegación dinámica entre secciones

🤖 Robot Masters animados

Sprite sheets estilo NES

Animación por steps()

🧩 Arquitectura escalable

Código reutilizable

Fácil de extender con nuevos personajes

🗂️ Estructura del proyecto
.
├── index.html
├── css/
│   └── estilos.css
├── js/
│   └── app.js
├── assets/
│   ├── audio/
│   │   └── Mega_Man_3.mp3
│   └── img/
│       ├── characters/
│       │   ├── megaman.png
│       │   ├── light.png
│       │   └── wily.png
│       └── robotmasters/
│           ├── IceMan-idle.png
│           ├── FireMan-idle.png
│           └── ElecMan-idle.png

🧠 Arquitectura SPA

El proyecto funciona como una SPA (Single Page Application):

Un solo contenedor principal (#app)

Cada sección se renderiza dinámicamente con JavaScript

No hay recarga de página

El contenido se reemplaza según la sección seleccionada

Rutas disponibles
const routes = {
  home,
  personajes,
  robotmasters,
  creditos
};

🤖 Sistema de Robot Masters

Los Robot Masters se cargan dinámicamente desde una estructura de datos:

const robotMasters = {
  "Mega Man 1": ["Cut Man", "Guts Man", "Ice Man"],
  ...
};

🎞️ Sistema de Sprites Animados (Sprite Sheets)

El proyecto implementa animaciones NES reales usando sprite sheets.

Robots con animación
const spriteRobots = {
  "Ice Man": {
    idle: "assets/img/robotmasters/IceMan-idle.png"
  }
};

Funcionamiento

Si un robot existe en spriteRobots → se renderiza como sprite animado

Si no → se muestra una imagen estática

El sistema es extensible sin duplicar código

CSS de animación
.sprite {
  width: 32px;
  height: 32px;
  animation: spriteIdle 0.6s steps(4) infinite;
}

📺 Modo CRT

El botón CRT: ON / OFF activa:

Scanlines

Oscurecimiento

Efecto de curvatura

Escala ligera de pantalla

Implementado solo con CSS + JS (sin librerías).

🎵 Música de fondo

Audio retro en loop

Control manual Play / Pause

Estado sincronizado con el botón

🧱 Tecnologías utilizadas

HTML5

CSS3 (Grid, Animaciones, Pixel Rendering)

JavaScript ES6

Sin frameworks

Sin dependencias externas

🚀 Posibles mejoras futuras

Cambiar animación por hover (idle → shoot)

Preload de sprites

Selector de Robot Masters

Sonidos por animación

Transiciones tipo pantalla NES

Modo pantalla completa

📜 Créditos

Proyecto no oficial, creado con fines educativos y de práctica.

Diseño & Código:
👤 Alonso Soto

Inspirado en la saga Mega Man © Capcom
