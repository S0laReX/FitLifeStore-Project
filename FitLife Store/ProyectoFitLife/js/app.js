// Crear instancia del router
const router = new Router();

// Definir las rutas y sus templates
router.addRoute('/', () => `
  <!-- HERO SECTION -->
  <section class="hero" id="inicio">
    <div class="container">
      <h1>¡Transforma Tu Cuerpo, Transforma Tu Vida!</h1>
      <p>Los mejores suplementos y productos fitness al mejor precio</p>
      <a href="/products" class="btn btn-light btn-lg" data-link>
        <i class="fas fa-shopping-bag"></i> Explorar Productos
      </a>
    </div>
  </section>

  <!-- FEATURES -->
  <section class="features">
    <div class="container">
      <div class="row">
        <div class="col-md-3 fade-in">
          <div class="feature-card">
            <i class="fas fa-shipping-fast feature-icon"></i>
            <h4>Envío Rápido</h4>
            <p>Entrega en 24-48 horas</p>
          </div>
        </div>
        <div class="col-md-3 fade-in" style="animation-delay: 0.1s">
          <div class="feature-card">
            <i class="fas fa-certificate feature-icon"></i>
            <h4>100% Original</h4>
            <p>Productos certificados</p>
          </div>
        </div>
        <div class="col-md-3 fade-in" style="animation-delay: 0.2s">
          <div class="feature-card">
            <i class="fas fa-headset feature-icon"></i>
            <h4>Soporte 24/7</h4>
            <p>Siempre listos para ayudarte</p>
          </div>
        </div>
        <div class="col-md-3 fade-in" style="animation-delay: 0.3s">
          <div class="feature-card">
            <i class="fas fa-tag feature-icon"></i>
            <h4>Mejores Precios</h4>
            <p>Ofertas increíbles</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- STORE INFO -->
  <section class="store-info">
    <div class="container">
      <h2 class="text-center mb-5">¿Por Qué Elegir FitLife Store?</h2>
      <div class="row">
        <div class="col-md-4">
          <div class="info-card">
            <h4><i class="fas fa-star"></i> Experiencia y Confianza</h4>
            <p>Más de 5 años en el mercado respaldando a atletas y entusiastas del fitness. Miles de clientes satisfechos avalan nuestra calidad.</p>
          </div>
        </div>
        <div class="col-md-4">
          <div class="info-card">
            <h4><i class="fas fa-handshake"></i> Asesoramiento Profesional</h4>
            <p>Nuestro equipo de expertos en nutrición deportiva está listo para ayudarte a elegir los productos perfectos para tus objetivos.</p>
          </div>
        </div>
        <div class="col-md-4">
          <div class="info-card">
            <h4><i class="fas fa-shield-alt"></i> Garantía Total</h4>
            <p>Todos nuestros productos cuentan con garantía de satisfacción. Si no estás feliz, nosotros tampoco.</p>
          </div>
        </div>
      </div>

      <div class="row mt-5">
        <div class="col-md-6">
          <div class="info-card">
            <h4><i class="fas fa-map-marker-alt"></i> Nuestra Ubicación</h4>
            <p><strong>Dirección:</strong> Av. Heroínas #1234, Cochabamba, Bolivia</p>
            <p><strong>Horarios:</strong> Lun-Vie: 9:00 - 20:00 | Sáb: 10:00 - 18:00 | Dom: 10:00 - 14:00</p>
            <a href="https://maps.google.com" target="_blank" class="btn btn-light mt-2">
              <i class="fas fa-map"></i> Ver en Google Maps
            </a>
          </div>
        </div>
        <div class="col-md-6">
          <div class="info-card">
            <h4><i class="fas fa-phone"></i> Contáctanos</h4>
            <p><strong>WhatsApp:</strong> <a href="https://wa.me/59175915675" class="text-white">+591 75915675</a></p>
            <p><strong>Email:</strong> info@fitlifestore.com</p>
            <div class="social-links mt-3">
              <a href="https://facebook.com" target="_blank"><i class="fab fa-facebook-f"></i></a>
              <a href="https://instagram.com" target="_blank"><i class="fab fa-instagram"></i></a>
              <a href="https://tiktok.com" target="_blank"><i class="fab fa-tiktok"></i></a>
              <a href="https://wa.me/59176543210" target="_blank"><i class="fab fa-whatsapp"></i></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
`);

router.addRoute('/products', () => `
  <!-- PRODUCTOS SECTION -->
  <section id="productos" class="py-5">
    <div class="container">
      <h2 class="text-center mb-4 fw-bold">Nuestros Productos</h2>
      
      <!-- BUSCADOR -->
      <div class="search-bar">
        <div class="input-group mb-4">
          <span class="input-group-text"><i class="fas fa-search"></i></span>
          <input type="text" class="form-control" id="searchInput" placeholder="Buscar productos...">
        </div>
      </div>

      <!-- FILTROS -->
      <div class="filters">
        <div class="d-flex flex-wrap justify-content-center">
          <button class="btn btn-outline-primary filter-btn active" data-category="todos">Todos</button>
          <button class="btn btn-outline-primary filter-btn" data-category="proteinas">Proteínas</button>
          <button class="btn btn-outline-primary filter-btn" data-category="creatinas">Creatinas</button>
          <button class="btn btn-outline-primary filter-btn" data-category="pre-entrenos">Pre-Entrenos</button>
          <button class="btn btn-outline-primary filter-btn" data-category="accesorios">Accesorios</button>
          <button class="btn btn-outline-primary filter-btn" data-category="shakers">Shakers</button>
          <button class="btn btn-outline-primary filter-btn" data-category="ropa">Ropa</button>
        </div>
      </div>

      <!-- GRID DE PRODUCTOS -->
      <div class="row g-4" id="productos-container"></div>
    </div>
  </section>
`);

router.addRoute('/contact', () => `
  <!-- CONTACTO -->
  <section id="contacto" class="py-5">
    <div class="container">
      <h2 class="text-center mb-4 fw-bold">Envíanos un Mensaje</h2>
      <div class="row justify-content-center">
        <div class="col-md-8">
          <div class="card shadow-lg border-0 p-4">
            <form id="contactForm">
              <div class="mb-3">
                <label class="form-label fw-bold">Nombre Completo</label>
                <input type="text" class="form-control" id="nombre" required>
              </div>
              <div class="mb-3">
                <label class="form-label fw-bold">Correo Electrónico</label>
                <input type="email" class="form-control" id="email" required>
              </div>
              <div class="mb-3">
                <label class="form-label fw-bold">Teléfono</label>
                <input type="tel" class="form-control" id="telefono">
              </div>
              <div class="mb-3">
                <label class="form-label fw-bold">Mensaje</label>
                <textarea class="form-control" id="mensaje" rows="5" required></textarea>
              </div>
              <button type="submit" class="btn btn-primary w-100 btn-lg">
                <i class="fas fa-paper-plane"></i> Enviar Mensaje
              </button>
            </form>
            <div id="formMessage" class="alert mt-3" style="display:none"></div>
          </div>
        </div>
      </div>
    </div>
  </section>
`);

// Ruta de error 404
router.addRoute('/404', () => `
  <section class="py-5">
    <div class="container text-center">
      <h1 class="display-1">404</h1>
      <h2>Página no encontrada</h2>
      <p>La página que buscas no existe.</p>
      <a href="/" class="btn btn-primary" data-link>Volver al Inicio</a>
    </div>
  </section>
`);

// Iniciar la aplicación cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', function() {
  router.start();
});

// Hacer el router disponible globalmente
window.router = router;