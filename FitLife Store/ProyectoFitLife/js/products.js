// BASE DE DATOS DE PRODUCTOS
window.productos = [
  // PROTEINAS
  { id: 1, nombre: "Whey Protein Isolate 5lb", precio: 105.50, categoria: "proteinas", marca: "ISO Tech Labs", img: "images/productos/proteinas/imagen7.jpg", rating: 4, reviews: 391 },
  { id: 2, nombre: "Casein Protein Night Blend 4lb", precio: 85.00, categoria: "proteinas", marca: "MyoFusion", img: "images/productos/proteinas/imagen1.jpg", rating: 5, reviews: 154 },
  { id: 3, nombre: "Vegan Protein Powder Vainilla", precio: 72.99, categoria: "proteinas", marca: "PlantPower", img: "images/productos/proteinas/imagen2.jpg", rating: 4, reviews: 528 },
  { id: 4, nombre: "Mass Gainer XXXL 12lb", precio: 115.00, categoria: "proteinas", marca: "Goliath Supps", img: "images/productos/proteinas/imagen3.jpg", rating: 3, reviews: 88 },
  { id: 5, nombre: "Hydrolyzed Whey 2lb", precio: 65.99, categoria: "proteinas", marca: "PureForm Labs", img: "images/productos/proteinas/imagen4.jpg", rating: 5, reviews: 923 },
  { id: 6, nombre: "Whey Blend Chocolate 5lb", precio: 95.00, categoria: "proteinas", marca: "Optimum Nutrition", img: "images/productos/proteinas/imagen5.jpg", rating: 4, reviews: 234 },
  { id: 7, nombre: "Whey Protein Cookies & Cream 2lb", precio: 45.99, categoria: "proteinas", marca: "NutriMax", img: "images/productos/proteinas/imagen6.jpg", rating: 4, reviews: 412 },
  // CREATINAS
  { id: 8, nombre: "Creatina Monohidrato 300g", precio: 34.99, categoria: "creatinas", marca: "Universal Supps", img: "images/productos/creatinas/creatina1.jpg", rating: 5, reviews: 1200 },
  { id: 9, nombre: "Creatina HCL Capsules", precio: 45.00, categoria: "creatinas", marca: "Kaged Muscle", img: "images/productos/creatinas/creatina2.jpg", rating: 4, reviews: 651 },
  { id: 10, nombre: "Creatina Micronizada 500g", precio: 49.99, categoria: "creatinas", marca: "MuscleTech", img: "images/productos/creatinas/creatina3.jpg", rating: 5, reviews: 987 },
  { id: 11, nombre: "Creatine Ethyl Ester Powder", precio: 39.50, categoria: "creatinas", marca: "BulkGenetics", img: "images/productos/creatinas/creatina4.jpg", rating: 3, reviews: 211 },
  { id: 12, nombre: "Creatina con Magnesio 250g", precio: 32.00, categoria: "creatinas", marca: "PharmaGrade", img: "images/productos/creatinas/creatina5.jpg", rating: 4, reviews: 405 },
  { id: 13, nombre: "Creatina Pura Sin Sabor 1kg", precio: 78.99, categoria: "creatinas", marca: "PureForm Labs", img: "images/productos/creatinas/creatina6.jpg", rating: 5, reviews: 750 },
  // PRE-ENTRENOS
  { id: 14, nombre: "Pre-Workout C4 Fruit Punch", precio: 39.99, categoria: "pre-entrenos", marca: "Cellucor", img: "images/productos/pre-entrenos/pre1.jpg", rating: 4, reviews: 1560 },
  { id: 15, nombre: "Pre-Workout Nitric Oxide Blend", precio: 48.50, categoria: "pre-entrenos", marca: "MusclePharm", img: "images/productos/pre-entrenos/pre2.jpg", rating: 5, reviews: 890 },
  { id: 16, nombre: "Stim-Free Pre-Workout", precio: 35.00, categoria: "pre-entrenos", marca: "BodyFuel", img: "images/productos/pre-entrenos/pre3.jpg", rating: 4, reviews: 342 },
  { id: 17, nombre: "Extreme Focus Energy Drink Mix", precio: 42.99, categoria: "pre-entrenos", marca: "G Fuel", img: "images/productos/pre-entrenos/pre4.jpg", rating: 4, reviews: 670 },
  { id: 18, nombre: "Nocturnal Pre-Entreno", precio: 51.00, categoria: "pre-entrenos", marca: "Dark Labs", img: "images/productos/pre-entrenos/pre5.jpg", rating: 5, reviews: 120 },
  { id: 19, nombre: "Pre-Entreno con BCAA", precio: 41.50, categoria: "pre-entrenos", marca: "NutriMax", img: "images/productos/pre-entrenos/pre6.jpg", rating: 3, reviews: 550 },
  // ACCESORIOS
  { id: 20, nombre: "Correas de tobillo (par) para patadas traseras", precio: 9.99, categoria: "accesorios", marca: "BlenderBottle", img: "images/productos/accesorios/acce1.jpg", rating: 5, reviews: 4500 },
  { id: 21, nombre: "Pulldown Accessories Load 880 LB", precio: 25.00, categoria: "accesorios", marca: "GripMaster", img: "images/productos/accesorios/acce2.jpg", rating: 4, reviews: 812 },
  { id: 22, nombre: "HPYGN Mango de ejercicio, equipo de fitness", precio: 49.99, categoria: "accesorios", marca: "Rogue Fitness", img: "images/productos/accesorios/acce3.jpg", rating: 5, reviews: 300 },
  { id: 23, nombre: "Muñequeras de Soporte Ajustables", precio: 15.50, categoria: "accesorios", marca: "IronWrist", img: "images/productos/accesorios/acce4.jpg", rating: 4, reviews: 1200 },
  { id: 24, nombre: "VEICK Bandas de resistencia para entrenamiento", precio: 35.00, categoria: "accesorios", marca: "PhysioGear", img: "images/productos/accesorios/acce5.jpg", rating: 5, reviews: 550 },
  { id: 25, nombre: "Kid Femenino Completo", precio: 12.99, categoria: "accesorios", marca: "GymEssentials", img: "images/productos/accesorios/acce6.jpg", rating: 4, reviews: 780 },
  { id: 26, nombre: "Respuesto de cable para maquinas/poleas", precio: 5.99, categoria: "accesorios", marca: "NutriStore", img: "images/productos/accesorios/acce7.jpg", rating: 3, reviews: 400 },
  // ROPA
  { id: 27, nombre: "Tank Top Stringer Negro", precio: 22.99, categoria: "ropa", marca: "GymShark", img: "images/productos/ropa/rop1.jpg", rating: 4, reviews: 950 },
  { id: 28, nombre: "Top Deportivos High Waist", precio: 45.00, categoria: "ropa", marca: "Lululemon", img: "images/productos/ropa/rop2.jpg", rating: 5, reviews: 1120 },
  { id: 29, nombre: "Camiseta Dry-Fit de Entrenamiento ", precio: 29.99, categoria: "ropa", marca: "Nike", img: "images/productos/ropa/rop3.jpg", rating: 4, reviews: 710 },
  { id: 30, nombre: "Shorts de Running Ultra Light", precio: 18.50, categoria: "ropa", marca: "Under Armour", img: "images/productos/ropa/rop4.jpg", rating: 3, reviews: 300 },
  { id: 31, nombre: "Sudadera con Capucha Gris", precio: 55.00, categoria: "ropa", marca: "Adidas", img: "images/productos/ropa/rop5.jpg", rating: 4, reviews: 600 },
  { id: 32, nombre: "udadera con Manga larga (3 pares)", precio: 14.99, categoria: "ropa", marca: "Balega", img: "images/productos/ropa/rop6.jpg", rating: 5, reviews: 450 },
  { id: 33, nombre: "Top deportivo de algodon", precio: 39.99, categoria: "ropa", marca: "Puma", img: "images/productos/ropa/rop7.jpg", rating: 4, reviews: 280 },

  // SHAKERS
  { id: 33, nombre: "Shaker Pro Fitness 800ml", precio: 14.99, categoria: "shakers", marca: "FitLife Pro", img: "images/productos/shakers/sha1.jpg", rating: 5, reviews: 234 },
  { id: 34, nombre: "Shaker Térmico Acero Inoxidable", precio: 24.99, categoria: "shakers", marca: "HydroFlask", img: "images/productos/shakers/sha2.jpg", rating: 5, reviews: 156 },
  { id: 35, nombre: "Shaker Doble Compartimento", precio: 18.99, categoria: "shakers", marca: "MusclePharm", img: "images/productos/shakers/sha3.jpg", rating: 4, reviews: 189 },
  { id: 36, nombre: "Shaker Transparente 700ml", precio: 12.99, categoria: "shakers", marca: "Transparente", img: "images/productos/shakers/sha4.jpg", rating: 4, reviews: 278 },
  { id: 37, nombre: "Shaker con Medidor Interno", precio: 16.99, categoria: "shakers", marca: "Precision", img: "images/productos/shakers/sha5.jpg", rating: 5, reviews: 312 },
  { id: 38, nombre: "Shaker Mixer Pro 900ml", precio: 21.99, categoria: "shakers", marca: "Mixer", img: "images/productos/shakers/sha6.jpg", rating: 5, reviews: 198 },
  { id: 39, nombre: "Shaker Colores Pastel Set x3", precio: 29.99, categoria: "shakers", marca: "ColorFit", img: "images/productos/shakers/sha7.jpg", rating: 5, reviews: 167 },

];

window.currentCategory = 'todos';

// RENDERIZAR PRODUCTOS
window.renderProducts = function(filter = 'todos', searchTerm = '') {
  const container = document.getElementById('productos-container');
  if (!container) return;
  
  let filtered = window.productos;

  if (filter !== 'todos') {
    filtered = window.productos.filter(p => p.categoria === filter);
  }

  if (searchTerm) {
    filtered = filtered.filter(p => 
      p.nombre.toLowerCase().includes(searchTerm.toLowerCase()) ||
      p.marca.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }

  container.innerHTML = filtered.map(p => `
    <div class="col-md-4 fade-in">
      <div class="card shadow">
        <span class="badge-category position-absolute m-3">${p.categoria}</span>
        <img src="${p.img}" class="card-img-top" alt="${p.nombre}">
        <div class="card-body">
          <small class="text-muted">${p.marca}</small>
          <h5 class="card-title mt-2">${p.nombre}</h5>
          <div class="mb-2">
            ${'★'.repeat(p.rating)}${'☆'.repeat(5-p.rating)} 
            <small class="text-muted">(${p.reviews})</small>
          </div>
          <h4 class="text-primary">$${p.precio}</h4>
          <button class="btn btn-primary w-100" onclick="addToCart(${p.id})">
            <i class="fas fa-cart-plus"></i> Agregar al Carrito
          </button>
        </div>
      </div>
    </div>
  `).join('');
}

// INICIALIZAR FILTROS
window.initializeFilters = function() {
  // Filtros por categoría
  const filterBtns = document.querySelectorAll('.filter-btn');
  if (filterBtns.length > 0) {
    filterBtns.forEach(btn => {
      btn.addEventListener('click', function() {
        document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
        this.classList.add('active');
        window.currentCategory = this.dataset.category;
        window.renderProducts(window.currentCategory, document.getElementById('searchInput')?.value || '');
      });
    });
  }

  // Búsqueda
  const searchInput = document.getElementById('searchInput');
  if (searchInput) {
    searchInput.addEventListener('input', function(e) {
      window.renderProducts(window.currentCategory, e.target.value);
    });
  }
}