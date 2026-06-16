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
