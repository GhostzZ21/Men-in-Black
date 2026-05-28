Promt Utilizado:

Actúa como un Desarrollador Frontend Senior experto en arquitectura CSS y UI/UX. Quiero que crees el código para el frontend de una página web estática (E-commerce) para una startup de moda disruptiva de alta gama.

El concepto de la marca es "Moda de Prisión Rediseñada", un giro de perspectiva de alta costura a la estética carcelaria tradicional (overoles, conjuntos estructurados, naranja neón, grises, caqui), rompiendo estigmas a través del diseño urbano.

Requisitos de Arquitectura y Escalabilidad (Crucial):
1. Tecnologías: Genera el proyecto usando únicamente HTML5 semántico y CSS3 puro (sin frameworks por ahora). El código debe ser modular y limpio, pensado para que en el futuro se pueda integrar JavaScript fácilmente para la lógica del carrito o animaciones avanzadas.
2. Sistema de Layout: Usa exclusivamente Flexbox para la maquetación y alineación de todos los componentes (Navbar, Hero, Grid de Productos y Footer). Evita posiciones absolutas innecesarias para garantizar que el diseño sea fluido y responsivo.
3. Organización del CSS: Estructura el CSS usando Variables CSS (Custom Properties) en la raíz (:root) para los colores, fuentes y espaciados. Esto nos permitirá cambiar la temática de la web en el futuro con una sola línea de código.

Estructura de la Landing Page:
- Navegación (Navbar): Logo a la izquierda, enlaces de categorías al centro y un icono de carrito (estático) a la derecha. Todo alineado perfectamente con Flexbox (justify-content: space-between).
- Hero Section: Título de impacto, eslogan vanguardista y un botón CTA ("Ver Colección"). El contenido debe estar centrado vertical y horizontalmente usando Flexbox.
- Manifiesto: Un bloque elegante de texto que explique la filosofía de la marca (diseño sin discriminación).
- Galería de Productos: Un contenedor flexible (flex-wrap: wrap) que muestre 3 tarjetas de producto. Cada tarjeta debe incluir: imagen (puedes usar un placeholder), nombre de la prenda (ej. "Overol Aviador Naranja"), precio y botón "Añadir". Agrega un efecto hover suave con CSS transition para las tarjetas y botones.
- Footer: Enlaces legales y redes sociales distribuidos en columnas con Flexbox.

Paleta de Colores y Estilo:
- Fondo: Negro profundo y gris cemento oscuro.
- Texto: Blanco y gris claro para alta legibilidad.
- Acentuación: Naranja neón llamativo (#FF5733 o similar) para botones, enlaces activos y detalles clave.
- Estilo: Minimalista, "edgy", premium y muy limpio.

Por favor, entrega el código en dos bloques separados y bien comentados: uno para el archivo 'index.html' y otro para 'style.css'.
