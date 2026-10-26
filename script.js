const motos = [
  {
    rank: 1,
    marca: "Ducati",
    modelo: "Panigale V4",
    categoria: "Deportiva",
    descripcion: "Referencia en motos superdeportivas, con motor V4 de alto rendimiento y electrónica de última generación.",
    specs: { Motor: "V4 de 1103 cc", Potencia: "Aprox. 215 CV", Peso: "Aprox. 195 kg" }
  },
  {
    rank: 2,
    marca: "BMW",
    modelo: "R 1300 GS",
    categoria: "Aventura",
    descripcion: "Una moto de aventura muy completa, cómoda en carretera y capaz en terreno variado.",
    specs: { Motor: "Bóxer de 1300 cc", Potencia: "Aprox. 145 CV", Peso: "Aprox. 250 kg" }
  },
  {
    rank: 3,
    marca: "Kawasaki",
    modelo: "Ninja ZX-10R",
    categoria: "Deportiva",
    descripcion: "Superbike con gran potencia y estabilidad, muy apreciada en circuito y en carretera.",
    specs: { Motor: "Inline-4 de 998 cc", Potencia: "Aprox. 200 CV", Peso: "Aprox. 206 kg" }
  },
  {
    rank: 4,
    marca: "Triumph",
    modelo: "Speed Triple 1200 RS",
    categoria: "Naked",
    descripcion: "Naked agresiva y muy equilibrada, con un tres cilindros con mucho carácter.",
    specs: { Motor: "Triple de 1160 cc", Potencia: "Aprox. 180 CV", Peso: "Aprox. 199 kg" }
  },
  {
    rank: 5,
    marca: "Honda",
    modelo: "Africa Twin",
    categoria: "Aventura",
    descripcion: "Trail de gran fiabilidad, con buena protección aerodinámica y excelente capacidad de viaje.",
    specs: { Motor: "Bicilíndrico paralelo de 1084 cc", Potencia: "Aprox. 102 CV", Peso: "Aprox. 240 kg" }
  },
  {
    rank: 6,
    marca: "Yamaha",
    modelo: "MT-07",
    categoria: "Naked",
    descripcion: "Naked ligera y accesible, ideal para principiantes y muy divertida en ciudad y curvas.",
    specs: { Motor: "Bicilíndrico en paralelo de 689 cc", Potencia: "Aprox. 73 CV", Peso: "Aprox. 182 kg" }
  },
  {
    rank: 7,
    marca: "KTM",
    modelo: "890 Adventure R",
    categoria: "Aventura",
    descripcion: "Trail orientada al off-road, con gran rendimiento y chasis preparado para terreno exigente.",
    specs: { Motor: "Bicilíndrico en paralelo de 889 cc", Potencia: "Aprox. 105 CV", Peso: "Aprox. 189 kg" }
  },
  {
    rank: 8,
    marca: "Royal Enfield",
    modelo: "Classic 350",
    categoria: "Clásica",
    descripcion: "Diseño retro con buena relación calidad-precio y un carácter muy propio.",
    specs: { Motor: "Monocilíndrico de 349 cc", Potencia: "Aprox. 20 CV", Peso: "Aprox. 195 kg" }
  },
  {
    rank: 9,
    marca: "Harley-Davidson",
    modelo: "Sportster S",
    categoria: "Clásica",
    descripcion: "Cruiser moderna con estética clásica, buena potencia y un sonido inconfundible.",
    specs: { Motor: "Revolution Max de 1250 cc", Potencia: "Aprox. 150 CV", Peso: "Aprox. 256 kg" }
  },
  {
    rank: 10,
    marca: "Honda",
    modelo: "CB650R",
    categoria: "Naked",
    descripcion: "Naked versátil y bien terminada, con cuatro cilindros suave y una posición de conducción cómoda.",
    specs: { Motor: "Inline-4 de 648 cc", Potencia: "Aprox. 95 CV", Peso: "Aprox. 202 kg" }
  }
];

const grid = document.getElementById("grid");
const filters = document.getElementById("filters");

function crearCard(moto) {
  const specsHTML = Object.entries(moto.specs)
    .map(([clave, valor]) => `<li><strong>${clave}:</strong> ${valor}</li>`)
    .join("");

  return `
    <article class="card">
      <div class="card-header">
        <span class="rank">#${moto.rank}</span>
        <h2>${moto.modelo}</h2>
        <span class="brand">${moto.marca}</span>
      </div>
      <div class="card-body">
        <span class="category">${moto.categoria}</span>
        <p>${moto.descripcion}</p>
        <ul class="specs">${specsHTML}</ul>
      </div>
    </article>
  `;
}

function mostrarMotos(filtro) {
  const lista = filtro === "todas"
    ? motos
    : motos.filter(m => m.categoria === filtro);

  if (lista.length === 0) {
    grid.innerHTML = `<p class="empty">No hay motos en esta categoría.</p>`;
    return;
  }

  grid.innerHTML = lista.map(crearCard).join("");
}

filters.addEventListener("click", (e) => {
  const boton = e.target.closest(".filter-btn");
  if (!boton) return;

  document.querySelectorAll(".filter-btn").forEach(b => b.classList.remove("active"));
  boton.classList.add("active");
  mostrarMotos(boton.dataset.filter);
});

mostrarMotos("todas");
