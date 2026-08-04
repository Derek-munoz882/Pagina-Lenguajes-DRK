const lenguajes = [
  {
    nombre: "C",
    anio: 1972,
    creador: "Dennis Ritchie",
    paradigma: "imperativo",
    etiqueta: "Imperativo · Bajo nivel",
    tipado: "Estático, fuerte",
    descripcion: "Base de la programación de sistemas. Acceso directo a memoria mediante punteros y gestión manual de recursos."
  },
  {
    nombre: "C++",
    anio: 1985,
    creador: "Bjarne Stroustrup",
    paradigma: "poo",
    etiqueta: "Multiparadigma · POO",
    tipado: "Estático, fuerte",
    descripcion: "Extiende C con clases, herencia y plantillas. Usado en sistemas de alto rendimiento y videojuegos."
  },
  {
    nombre: "Java",
    anio: 1995,
    creador: "James Gosling",
    paradigma: "poo",
    etiqueta: "Orientado a objetos",
    tipado: "Estático, fuerte",
    descripcion: "Ejecutado sobre la JVM ('write once, run anywhere'). Fuerte tipado y gestión automática de memoria."
  },
  {
    nombre: "Python",
    anio: 1991,
    creador: "Guido van Rossum",
    paradigma: "funcional",
    etiqueta: "Multiparadigma",
    tipado: "Dinámico, fuerte",
    descripcion: "Sintaxis legible, soporta estilo imperativo, orientado a objetos y funcional. Muy usado en ciencia de datos."
  },
  {
    nombre: "JavaScript",
    anio: 1995,
    creador: "Brendan Eich",
    paradigma: "scripting",
    etiqueta: "Scripting · Multiparadigma",
    tipado: "Dinámico, débil",
    descripcion: "Lenguaje de la web: manipula el DOM en el navegador y corre en servidores con Node.js."
  },
  {
    nombre: "Prolog",
    anio: 1972,
    creador: "Alain Colmerauer",
    paradigma: "logico",
    etiqueta: "Lógico",
    tipado: "Dinámico",
    descripcion: "Basado en hechos, reglas y resolución lógica. Muy usado en inteligencia artificial simbólica."
  },
  {
    nombre: "Ruby",
    anio: 1995,
    creador: "Yukihiro Matsumoto",
    paradigma: "poo",
    etiqueta: "Orientado a objetos · Scripting",
    tipado: "Dinámico, fuerte",
    descripcion: "Todo es un objeto. Prioriza la productividad y la legibilidad del desarrollador."
  },
  {
    nombre: "Lua",
    anio: 1993,
    creador: "Roberto Ierusalimschy et al.",
    paradigma: "scripting",
    etiqueta: "Scripting · Embebido",
    tipado: "Dinámico",
    descripcion: "Ligero y embebible en otras aplicaciones. Muy usado para scripting en videojuegos."
  }
];

const grid = document.getElementById("grid");
const filters = document.getElementById("filters");

function renderCards(lista) {
  grid.innerHTML = lista.map(l => `
    <article class="card" data-paradigma="${l.paradigma}">
      <div class="card-top">
        <h2>${l.nombre}</h2>
        <span class="year">${l.anio}</span>
      </div>
      <span class="badge">${l.etiqueta}</span>
      <p>${l.descripcion}</p>
      <p class="creator"><strong>Tipado:</strong> ${l.tipado}</p>
      <p class="creator"><strong>Creador:</strong> ${l.creador}</p>
    </article>
  `).join("");
}

filters.addEventListener("click", (e) => {
  const btn = e.target.closest(".filter-btn");
  if (!btn) return;

  filters.querySelectorAll(".filter-btn").forEach(b => b.classList.remove("active"));
  btn.classList.add("active");

  const filtro = btn.dataset.filter;
  const filtrados = filtro === "todos"
    ? lenguajes
    : lenguajes.filter(l => l.paradigma === filtro);

  renderCards(filtrados);
});

renderCards(lenguajes);
