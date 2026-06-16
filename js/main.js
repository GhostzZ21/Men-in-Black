/* ================================================================
   YARD — Men-in-Black Tactical Store
   Evaluación Sumativa 2: Desarrollo Interactivo con JavaScript
   Autor: [Tu Nombre]
   ================================================================ */

/* ---------------------------------------------------------------
   FASE 1: CONFIGURACIÓN BASE Y FUENTE DE DATOS
   Cumple: const/let, mínimo 1 objeto, mínimo 1 arreglo
--------------------------------------------------------------- */

// OBJETO de configuración global de la tienda (mínimo 1 objeto ✅)
const CONFIG = {
  nombreTienda: "YARD — Men-in-Black Tactical Store",
  moneda: "USD",
  simbolo: "$",
  impuesto: 0.05
};

// ARREGLO de productos (mínimo 1 arreglo ✅, array de objetos)
const productos = [
  {
    id: 1,
    nombre: "Overol Aviador Naranja",
    precio: 289,
    categoria: "Overoles",
    descripcion: "Corte slim · Algodón orgánico · Cierre industrial",
    imagen: "assets/img/product-overol-naranja.png",
    badge: "Nuevo",
    stock: 10
  },
  {
    id: 2,
    nombre: "Chaqueta Táctica Cemento",
    precio: 349,
    categoria: "Chaquetas",
    descripcion: "Estilo cargo · Bolsillos utilitarios · Gris estructurado",
    imagen: "assets/img/product-chaqueta-gris.png",
    badge: "Bestseller",
    stock: 15
  },
  {
    id: 3,
    nombre: "Conjunto Caqui Estructurado",
    precio: 419,
    categoria: "Conjuntos",
    descripcion: "Two-piece set · Detalles utilitarios · Silueta premium",
    imagen: "assets/img/product-conjunto-caqui.png",
    badge: null,
    stock: 8
  },
  {
    id: 4,
    nombre: "Pantalón Táctico Operativo",
    precio: 189,
    categoria: "Pantalones",
    descripcion: "Corte cargo · Refuerzos en rodillas · Bolsillos laterales",
    imagen: "assets/img/product-conjunto-caqui.png",
    badge: "Oferta",
    stock: 20
  },
  {
    id: 5,
    nombre: "Polera Agente Undercover",
    precio: 99,
    categoria: "Poleras",
    descripcion: "Algodón 100% · Cuello redondo · Fit entallado",
    imagen: "assets/img/product-overol-naranja.png",
    badge: null,
    stock: 25
  },
  {
    id: 6,
    nombre: "Lentes de Operación Black",
    precio: 149,
    categoria: "Accesorios",
    descripcion: "Lentes polarizados · Marco reforzado · Estilo policial",
    imagen: "assets/img/product-chaqueta-gris.png",
    badge: "Exclusivo",
    stock: 6
  }
];

// Variables de estado mutables (let ✅)
let favoritos = [];
let carrito = [];
let terminoBusqueda = "";

/* ---------------------------------------------------------------
   SELECTORES DEL DOM
   Cumple: uso de querySelector ✅
--------------------------------------------------------------- */
const contenedorProductos = document.querySelector("#contenedor-productos");
const contenedorFavoritos = document.querySelector("#contenedor-favoritos");
const seccionFavoritos   = document.querySelector("#favoritos-seccion");
const buscador           = document.querySelector("#buscador-productos");
const cartCount          = document.querySelector("#cart-count");
const cartSidebarItems   = document.querySelector(".cart-sidebar__items");
const cartSubtotal       = document.querySelector(".cart-sidebar__summary");

/* ---------------------------------------------------------------
   FASE 1 — VERIFICACIÓN DE INICIALIZACIÓN
   (Las fases 2-5 se construirán sobre esta base)
--------------------------------------------------------------- */
console.log(`✅ ${CONFIG.nombreTienda} — JS cargado correctamente.`);
console.log(`📦 Productos disponibles: ${productos.length}`);

/* ---------------------------------------------------------------
   FASE 2: RENDERIZADO DEL CATÁLOGO
   Cumple: Manipulación del DOM, Ciclo forEach, Arrow Functions
--------------------------------------------------------------- */

// Función principal para dibujar los productos (Usa Arrow Function ✅)
const renderizarCatalogo = (listaProductos) => {
  // 1. Limpiar el contenedor para evitar duplicados
  contenedorProductos.innerHTML = "";

  // Si la lista está vacía (por ejemplo, al filtrar sin resultados)
  if (listaProductos.length === 0) {
    contenedorProductos.innerHTML = `<p class="products__empty">No se encontraron piezas en la bóveda.</p>`;
    return;
  }

  // 2. Ciclo obligatorio (forEach ✅)
  listaProductos.forEach((producto) => {
    // 3. Crear el elemento contenedor (createElement ✅)
    const tarjeta = document.createElement("article");
    tarjeta.classList.add("product-card");
    tarjeta.id = `product-${producto.id}`;

    // Lógica para el badge (si tiene uno, se renderiza; si no, cadena vacía)
    let badgeHTML = "";
    if (producto.badge) {
      const badgeClass = producto.badge.toLowerCase() === "bestseller" ? "product-card__badge product-card__badge--hot" : "product-card__badge";
      badgeHTML = `<span class="${badgeClass}">${producto.badge}</span>`;
    }

    // 4. Modificación dinámica de HTML (innerHTML ✅)
    tarjeta.innerHTML = `
      <div class="product-card__image-wrapper">
        <img class="product-card__image" src="${producto.imagen}" alt="${producto.nombre}" loading="lazy" width="400" height="500">
        ${badgeHTML}
      </div>
      <div class="product-card__info">
        <h3 class="product-card__name">${producto.nombre}</h3>
        <p class="product-card__desc">${producto.descripcion}</p>
        <div class="product-card__footer">
          <span class="product-card__price">${CONFIG.simbolo}${producto.precio} <small class="product-card__currency">${CONFIG.moneda}</small></span>
          <div class="product-card__actions">
            <!-- Botones temporales, la funcionalidad se añadirá en Fases 3 y 5 -->
            <button class="product-card__btn-fav" data-id="${producto.id}" aria-label="Añadir a favoritos" style="border:none; background:none; cursor:pointer; font-size:1.2rem;">🤍</button>
            <button class="product-card__btn" data-id="${producto.id}" type="button">Añadir</button>
          </div>
        </div>
      </div>
    `;

    // 5. Insertar en el DOM (appendChild ✅)
    contenedorProductos.appendChild(tarjeta);
  });
};

// 6. Ejecutar al cargar la página
renderizarCatalogo(productos);
