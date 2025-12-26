(() => {

const app = document.getElementById("app");
const menuToggle = document.getElementById("menuToggle");
const menuList = document.getElementById("menuList");
const menuItems = menuList.querySelectorAll("li");

const btnCRT = document.getElementById("btnCRT");
const crtWrapper = document.getElementById("crtWrapper");
const btnMusic = document.getElementById("btnMusic");
const music = document.getElementById("bgMusic");

let crtOn = false;
let playing = false;

/* =========================
   DATOS
========================= */

const personajes = [
  { nombre: "Mega Man", img: "assets/img/characters/megaman.png", desc: "Robot de combate creado por Dr. Light." },
  { nombre: "Dr. Light", img: "assets/img/characters/light.png", desc: "Científico creador de Mega Man." },
  { nombre: "Dr. Wily", img: "assets/img/characters/wily.png", desc: "Genio maligno y eterno rival." }
];

const robotMasters = {
  "Mega Man 1": ["Cut Man","Guts Man","Elec Man","Fire Man","Ice Man","Bomb Man"],
  "Mega Man 2": ["Metal Man","Air Man","Bubble Man","Crash Man","Flash Man","Heat Man","Quick Man","Wood Man"],
  "Mega Man 3": ["Top Man","Shadow Man","Spark Man","Snake Man","Hard Man","Magnet Man","Needle Man","Gemini Man"],
  "Mega Man 4": ["Bright Man","Pharaoh Man","Ring Man","Dust Man","Dive Man","Drill Man","Skull Man","Toad Man"],
  "Mega Man 5": ["Gravity Man","Wave Man","Stone Man","Gyro Man","Star Man","Charge Man","Napalm Man","Crystal Man"],
  "Mega Man 6": ["Flame Man","Blizzard Man","Plant Man","Tomahawk Man","Wind Man","Yamato Man","Knight Man","Centaur Man"],
  "Mega Man 7": ["Burst Man","Cloud Man","Freeze Man","Junk Man","Shade Man","Spring Man","Slash Man","Turbo Man"],
  "Mega Man 8": ["Tengu Man","Astro Man","Sword Man","Search Man","Clown Man","Grenade Man","Frost Man","Aqua Man"],
  "Mega Man 9": ["Concrete Man","Tornado Man","Splash Woman","Plug Man","Jewel Man","Hornet Man","Magma Man","Galaxy Man"],
  "Mega Man 10": ["Blade Man","Strike Man","Sheep Man","Pump Man","Solar Man","Chill Man","Nitro Man","Commando Man"]
};

const spriteRobots = {
  "Ice Man": {
    idle: "assets/img/robotmasters/IceMan-idle.png"
  },
  "Fire Man": {
    idle: "assets/img/robotmasters/FireMan-idle.png"
  },
  "Elec Man": {
    idle: "assets/img/robotmasters/ElecMan-idle.png"
  },
  "Guts Man": {
    idle: "assets/img/robotmasters/GutsMan-idle.png"
  },
  "Bomb Man": {
    idle: "assets/img/robotmasters/BombMan-idle.png"
  },
  "Cut Man": {
    idle: "assets/img/robotmasters/CutMan-idle.png"
  },
};


/* =========================
   RENDER
========================= */

function renderHome() {
  app.innerHTML = `
    <section class="section">
      <p>Es el año 20XX...</p>
      <p>Un pequeño robot llamado Rock lucha por la justicia.</p>
      <p class="press-start">PRESS START</p>
    </section>
  `;
}

function renderPersonajes() {
  app.innerHTML = `
    <section class="section">
      <h2>Personajes</h2>
      <div class="card-grid">
        ${personajes.map(p => `
          <div class="card">
            <img src="${p.img}">
            <h3>${p.nombre}</h3>
            <p>${p.desc}</p>
          </div>`).join("")}
      </div>
    </section>
  `;
}

function renderRobotMasters() {
  app.innerHTML = `
    <section class="section">
      <h2>Robot Masters</h2>
      ${Object.entries(robotMasters).map(([game, list]) => `
        <h3>${game}</h3>
        <div class="card-grid">
          ${list.map(rm => {
            const sprite = spriteRobots[rm];
            if (sprite) {
              // Si hay sprite definido, usamos la lógica especial
              return `
                <div class="card">
                  <div class="sprite big" style="background-image:url('${sprite.idle}')"></div>
                  <p>${rm}</p>
                </div>`;
            }
            // Para los demás, seguimos usando la imagen normal
            return `
              <div class="card">
                <img src="assets/img/robotmasters/${rm.toLowerCase().replace(" ","-")}.png">
                <p>${rm}</p>
              </div>`;
          }).join("")}
        </div>
      `).join("")}
    </section>
  `;
}

function renderCreditos() {
  app.innerHTML = `
    <section class="section">
      <p>Tributo no oficial a Mega Man</p>
      <p>Diseño & Código: Alonso Soto</p>
    </section>
  `;
}

/* =========================
   SPA NAV
========================= */

const routes = {
  home: renderHome,
  personajes: renderPersonajes,
  robotmasters: renderRobotMasters,
  creditos: renderCreditos
};

menuToggle.onclick = () => {
  menuList.style.display = menuList.style.display === "block" ? "none" : "block";
};

menuItems.forEach(item => {
  item.onclick = () => {
    routes[item.dataset.section]();
    menuList.style.display = "none";
  };
});

/* =========================
   CONTROLES
========================= */

btnCRT.onclick = () => {
  crtOn = !crtOn;
  crtWrapper.classList.toggle("nes-crt", crtOn);
  document.body.classList.toggle("crt-mode", crtOn);
  btnCRT.textContent = crtOn ? "CRT: ON" : "CRT: OFF";
};

btnMusic.onclick = () => {
  playing ? music.pause() : music.play();
  playing = !playing;
  btnMusic.textContent = playing ? "Música: Pause" : "Música: Play";
};

function changeSection(renderFn) {
  app.classList.remove("nes-blink");

  setTimeout(() => {
    app.innerHTML = "";
    renderFn();
    app.classList.add("nes-blink");
  }, 80);
}


/* INIT */
renderHome();

})();
