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

    // Lógica para el badge
    let badgeHTML = "";
    if (producto.badge) {
      const badgeClass = producto.badge.toLowerCase() === "bestseller" ? "product-card__badge product-card__badge--hot" : "product-card__badge";
      badgeHTML = `<span class="${badgeClass}">${producto.badge}</span>`;
    }

    // Identificar si ya es favorito para pintar el corazón
    const esFav = favoritos.some(fav => fav.id === producto.id);
    const corazon = esFav ? "❤️" : "🤍";

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
            <button class="product-card__btn-fav" data-id="${producto.id}" aria-label="Añadir a favoritos" style="border:none; background:none; cursor:pointer; font-size:1.2rem;">${corazon}</button>
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

/* ---------------------------------------------------------------
   FASE 3: SISTEMA DE FAVORITOS
   Cumple: addEventListener, manipulación de arreglos y DOM
--------------------------------------------------------------- */

// 1. Event Delegation en el catálogo principal
contenedorProductos.addEventListener("click", (e) => {
  const btnFav = e.target.closest(".product-card__btn-fav");
  if (btnFav) {
    const idProducto = parseInt(btnFav.getAttribute("data-id"));
    toggleFavorito(idProducto);
  }
});

// 2. Función para agregar/quitar (Uso de if/else y métodos de array ✅)
const toggleFavorito = (id) => {
  const existe = favoritos.find(prod => prod.id === id);
  
  if (existe) {
    // Si ya es favorito, lo filtramos fuera
    favoritos = favoritos.filter(prod => prod.id !== id);
  } else {
    // Si no, lo buscamos en el array base y lo empujamos
    const productoBase = productos.find(prod => prod.id === id);
    if (productoBase) favoritos.push(productoBase);
  }
  
  // Refrescar vistas
  renderizarFavoritos();
  // Volvemos a renderizar el catálogo para que los corazones cambien de 🤍 a ❤️
  // (Usamos la variable global de búsqueda o el array completo por ahora)
  renderizarCatalogo(productos);
};

// 3. Renderizar la sección de favoritos dinámicamente
const renderizarFavoritos = () => {
  contenedorFavoritos.innerHTML = "";
  
  // Mostrar/ocultar sección según si hay elementos
  if (favoritos.length === 0) {
    seccionFavoritos.style.display = "none";
    return;
  }
  
  seccionFavoritos.style.display = "block";
  
  favoritos.forEach(producto => {
    const tarjeta = document.createElement("article");
    tarjeta.classList.add("product-card");
    tarjeta.style.transform = "scale(0.95)"; // Un poco más pequeña para distinguir
    tarjeta.style.border = "1px solid #ff4747"; // Borde rojo tenue para destacar que es fav
    
    tarjeta.innerHTML = `
      <div class="product-card__image-wrapper">
        <img class="product-card__image" src="${producto.imagen}" alt="${producto.nombre}" loading="lazy" width="400" height="500">
      </div>
      <div class="product-card__info" style="padding: 1rem;">
        <h3 class="product-card__name" style="font-size: 1.1rem;">${producto.nombre}</h3>
        <div style="display: flex; justify-content: space-between; align-items: center; margin-top: 1rem;">
          <span class="product-card__price">${CONFIG.simbolo}${producto.precio} <small>${CONFIG.moneda}</small></span>
          <button class="product-card__btn-fav" data-id="${producto.id}" aria-label="Quitar de favoritos" style="border:none; background:none; cursor:pointer; font-size:1.2rem; color: #ff4747;">❤️</button>
        </div>
      </div>
    `;
    
    contenedorFavoritos.appendChild(tarjeta);
  });
};

// 4. Event Delegation para quitar desde la propia sección de favoritos
contenedorFavoritos.addEventListener("click", (e) => {
  const btnFav = e.target.closest(".product-card__btn-fav");
  if (btnFav) {
    const idProducto = parseInt(btnFav.getAttribute("data-id"));
    toggleFavorito(idProducto);
  }
});

/* ---------------------------------------------------------------
   FASE 4: BÚSQUEDA Y FILTRO DINÁMICO
   Cumple: addEventListener, condicionales, manipulación de arreglos
--------------------------------------------------------------- */

buscador.addEventListener("input", (e) => {
  // Guardamos el término en minúsculas y sin espacios en blanco extras
  terminoBusqueda = e.target.value.toLowerCase().trim();
  
  // Filtramos el arreglo base de productos
  const productosFiltrados = productos.filter((producto) => {
    // Buscamos coincidencias en nombre o categoría
    const coincideNombre = producto.nombre.toLowerCase().includes(terminoBusqueda);
    const coincideCategoria = producto.categoria.toLowerCase().includes(terminoBusqueda);
    
    return coincideNombre || coincideCategoria;
  });
  
  // Volvemos a pintar el DOM solo con los productos que pasaron el filtro
  renderizarCatalogo(productosFiltrados);
});

/* ---------------------------------------------------------------
   FASE 5: CARRITO DE COMPRAS (INTEGRACIÓN FINAL)
   Cumple: Interacción compleja, manipulación de arreglos, DOM
--------------------------------------------------------------- */

// 1. Event Delegation para agregar al carrito (catálogo)
contenedorProductos.addEventListener("click", (e) => {
  if (e.target.classList.contains("product-card__btn")) {
    const idProducto = parseInt(e.target.getAttribute("data-id"));
    agregarAlCarrito(idProducto);
    
    // Opcional: Feedback visual o abrir el sidebar automáticamente
    window.location.hash = "#cart-sidebar";
  }
});

// 2. Lógica para agregar al carrito
const agregarAlCarrito = (id) => {
  const productoBase = productos.find(prod => prod.id === id);
  if (!productoBase) return;

  const existeEnCarrito = carrito.find(item => item.id === id);
  
  if (existeEnCarrito) {
    existeEnCarrito.cantidad++;
  } else {
    // Agregamos una propiedad extra 'cantidad' al objeto clonado
    carrito.push({ ...productoBase, cantidad: 1 });
  }
  
  renderizarCarrito();
};

// 3. Lógica para eliminar del carrito
const eliminarDelCarrito = (id) => {
  carrito = carrito.filter(item => item.id !== id);
  renderizarCarrito();
};

// 4. Renderizado completo del carrito
const renderizarCarrito = () => {
  // Limpiar DOM de los items del carrito
  cartSidebarItems.innerHTML = "";
  
  let subtotal = 0;
  let cantidadTotal = 0;

  // Renderizar cada item guardado
  carrito.forEach(item => {
    subtotal += item.precio * item.cantidad;
    cantidadTotal += item.cantidad;

    const article = document.createElement("article");
    article.classList.add("cart-item");
    
    article.innerHTML = `
      <img src="${item.imagen}" alt="${item.nombre}" class="cart-item__img">
      <div class="cart-item__info">
        <h3 class="cart-item__name">${item.nombre}</h3>
        <span class="cart-item__qty">Cant: ${item.cantidad}</span>
        <span class="cart-item__price">${CONFIG.simbolo}${item.precio} ${CONFIG.moneda}</span>
      </div>
      <button class="cart-item__remove" aria-label="Eliminar producto" type="button" data-id="${item.id}">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="pointer-events:none;">
          <path d="M3 6h18"></path>
          <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
        </svg>
      </button>
    `;
    
    cartSidebarItems.appendChild(article);
  });

  // Calcular impuestos y total
  const impuestos = subtotal * CONFIG.impuesto;
  const total = subtotal + impuestos;

  // Actualizar resumen de precios dinámico
  cartSubtotal.innerHTML = `
    <div class="cart-sidebar__summary-row">
      <span>Subtotal</span>
      <span>${CONFIG.simbolo}${subtotal.toFixed(2)} ${CONFIG.moneda}</span>
    </div>
    <div class="cart-sidebar__summary-row">
      <span>Impuestos (Est.)</span>
      <span>${CONFIG.simbolo}${impuestos.toFixed(2)} ${CONFIG.moneda}</span>
    </div>
    <div class="cart-sidebar__summary-row cart-sidebar__summary-total">
      <span>Total</span>
      <span>${CONFIG.simbolo}${total.toFixed(2)} ${CONFIG.moneda}</span>
    </div>
  `;

  // Actualizar el numerito rojo de la bolsa de compras del Navbar
  cartCount.textContent = cantidadTotal;
};

// 5. Event Delegation para botones de eliminar en el sidebar
cartSidebarItems.addEventListener("click", (e) => {
  const btnRemove = e.target.closest(".cart-item__remove");
  if (btnRemove) {
    const idProducto = parseInt(btnRemove.getAttribute("data-id"));
    eliminarDelCarrito(idProducto);
  }
});

// 6. Limpieza inicial para que empiece vacío
renderizarCarrito();
