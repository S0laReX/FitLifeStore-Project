class Router {
  constructor() {
    this.routes = {};
    this.currentPath = this.getCurrentPath();
    
    // Manejar navegación del navegador
    window.addEventListener('popstate', () => {
      this.navigate(this.getCurrentPath(), false);
    });
    
    // Delegación de eventos para enlaces
    document.addEventListener('click', (e) => {
      if (e.target.matches('[data-link]')) {
        e.preventDefault();
        const href = e.target.getAttribute('href');
        this.navigate(href);
      }
    });
  }
  
  // Obtener ruta actual de manera segura
  getCurrentPath() {
    // Para rutas file:// en Windows
    let path = window.location.hash.substring(1) || '/';
    
    // Si no hay hash, usar pathname pero limpiarlo
    if (path === '/' && window.location.pathname) {
      // Extraer solo el nombre del archivo o ruta limpia
      const fullPath = window.location.pathname;
      const segments = fullPath.split('/');
      const lastSegment = segments[segments.length - 1];
      
      // Si es index.html o similar, usar raíz
      if (lastSegment === 'index.html' || lastSegment === '') {
        path = '/';
      } else {
        path = '/' + lastSegment.replace('.html', '');
      }
    }
    
    return path;
  }
  
  addRoute(path, template) {
    this.routes[path] = template;
  }
  
  async navigate(path, pushState = true) {
    // Limpiar la ruta
    if (path === '/') {
      this.currentPath = '/';
    } else if (path.startsWith('/')) {
      this.currentPath = path;
    } else {
      this.currentPath = '/' + path;
    }
    
    // Quitar .html si existe
    this.currentPath = this.currentPath.replace('.html', '');
    
    if (pushState) {
      // Usar hash para evitar problemas con file://
      window.location.hash = this.currentPath === '/' ? '' : this.currentPath;
    }
    
    await this.loadPage();
  }
  
  async loadPage() {
    let template;
    const app = document.getElementById('app');
    
    if (!app) {
      console.error('No se encontró el elemento #app');
      return;
    }
    
    // Verificar si existe la ruta específica
    if (this.routes[this.currentPath]) {
      template = this.routes[this.currentPath];
    } else {
      // Redirigir a inicio si no existe
      console.warn(`Ruta ${this.currentPath} no encontrada, redirigiendo a inicio`);
      this.currentPath = '/';
      if (this.routes['/']) {
        template = this.routes['/'];
      } else {
        app.innerHTML = '<h1>Página no encontrada</h1>';
        return;
      }
    }
    
    try {
      if (typeof template === 'function') {
        app.innerHTML = await template();
      } else {
        app.innerHTML = template;
      }
      
      // Inicializar componentes específicos de la página
      this.initializePageComponents();
      
      // Scroll al inicio
      window.scrollTo(0, 0);
    } catch (error) {
      console.error('Error cargando la página:', error);
      app.innerHTML = '<h1>Error cargando la página</h1>';
    }
  }
  
  initializePageComponents() {
    // Inicializar componentes según la página actual
    if (this.currentPath === '/') {
      this.initializeHomePage();
    } else if (this.currentPath === '/products' || this.currentPath === '/productos') {
      this.initializeProductsPage();
    } else if (this.currentPath === '/contact' || this.currentPath === '/contacto') {
      this.initializeContactPage();
    }
  }
  
  initializeHomePage() {
    // Inicializar componentes específicos de la página de inicio
    console.log('Página de inicio cargada');
  }
  
  initializeProductsPage() {
    // Inicializar productos y filtros
    console.log('Página de productos cargada');
    
    // Esperar a que el DOM se actualice
    setTimeout(() => {
      if (window.renderProducts && window.initializeFilters) {
        window.renderProducts();
        window.initializeFilters();
      }
    }, 50);
  }
  
  initializeContactPage() {
    // Inicializar formulario de contacto
    console.log('Página de contacto cargada');
    
    // Esperar a que el DOM se actualice
    setTimeout(() => {
      const contactForm = document.getElementById('contactForm');
      if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
          e.preventDefault();
          const formMessage = document.getElementById('formMessage');
          
          if (formMessage) {
            formMessage.className = 'alert alert-success mt-3';
            formMessage.textContent = '¡Mensaje enviado exitosamente! Nos pondremos en contacto contigo pronto.';
            formMessage.style.display = 'block';
            
            this.reset();
            
            setTimeout(() => {
              formMessage.style.display = 'none';
            }, 5000);
          }
        });
      }
    }, 50);
  }
  
  start() {
    // Verificar si estamos en una ruta hash
    if (window.location.hash) {
      const hash = window.location.hash.substring(1);
      this.navigate(hash || '/', false);
    } else {
      this.loadPage();
    }
  }
}

// Hacer disponible globalmente
window.Router = Router;