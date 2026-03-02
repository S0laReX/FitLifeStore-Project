let cart = [];

// Guardar en localStorage
function saveCart() {
  localStorage.setItem('fitlife-cart', JSON.stringify(cart));
}

// Cargar del localStorage
function loadCart() {
  const saved = localStorage.getItem('fitlife-cart');
  if (saved) {
    cart = JSON.parse(saved);
  }
}

// AGREGAR AL CARRITO
window.addToCart = function(id) {
  loadCart();
  const producto = window.productos.find(p => p.id === id);
  const existente = cart.find(item => item.id === id);
  
  if (existente) {
    existente.cantidad++;
  } else {
    cart.push({...producto, cantidad: 1});
  }
  
  saveCart();
  updateCart();
  
  // Animación
  const btn = event.target.closest('button');
  if (btn) {
    btn.innerHTML = '<i class="fas fa-check"></i> Agregado!';
    btn.classList.add('btn-success');
    setTimeout(() => {
      btn.innerHTML = '<i class="fas fa-cart-plus"></i> Agregar al Carrito';
      btn.classList.remove('btn-success');
    }, 1000);
  }
}

// ACTUALIZAR CARRITO
function updateCart() {
  loadCart();
  
  const cartCount = document.getElementById('cart-count');
  const cartTotal = document.getElementById('cart-total');
  const cartItems = document.getElementById('cart-items');
  
  if (cartCount) {
    cartCount.textContent = cart.reduce((sum, item) => sum + item.cantidad, 0);
  }
  
  const total = cart.reduce((sum, item) => sum + (item.precio * item.cantidad), 0);
  if (cartTotal) {
    cartTotal.textContent = total.toFixed(2);
  }
  
  if (cartItems) {
    cartItems.innerHTML = cart.map(item => `
      <div class="card mb-3">
        <div class="card-body">
          <div class="d-flex justify-content-between align-items-center">
            <div>
              <h6 class="mb-1">${item.nombre}</h6>
              <small class="text-muted">$${item.precio.toFixed(2)}</small>
            </div>
            <button class="btn btn-sm btn-danger" onclick="removeFromCart(${item.id})">
              <i class="fas fa-trash"></i>
            </button>
          </div>
          <div class="d-flex align-items-center mt-2">
            <button class="btn btn-sm btn-outline-secondary" onclick="updateQuantity(${item.id}, -1)">-</button>
            <span class="mx-3">${item.cantidad}</span>
            <button class="btn btn-sm btn-outline-secondary" onclick="updateQuantity(${item.id}, 1)">+</button>
            <span class="ms-auto fw-bold">$${(item.precio * item.cantidad).toFixed(2)}</span>
          </div>
        </div>
      </div>
    `).join('');
  }
}

window.removeFromCart = function(id) {
  cart = cart.filter(item => item.id !== id);
  saveCart();
  updateCart();
}

window.updateQuantity = function(id, change) {
  loadCart();
  const item = cart.find(item => item.id === id);
  if (item) {
    item.cantidad += change;
    if (item.cantidad <= 0) {
      window.removeFromCart(id);
    } else {
      saveCart();
      updateCart();
    }
  }
}

window.toggleCart = function() {
  const sidebar = document.getElementById('cartSidebar');
  const overlay = document.getElementById('cartOverlay');
  if (sidebar && overlay) {
    sidebar.classList.toggle('open');
    overlay.classList.toggle('active');
  }
}

window.clearCart = function() {
  if (confirm('¿Estás seguro de vaciar el carrito?')) {
    cart = [];
    saveCart();
    updateCart();
  }
}

window.checkout = function() {
  if (cart.length === 0) {
    alert('El carrito está vacío');
    return;
  }
  const total = cart.reduce((sum, item) => sum + (item.precio * item.cantidad), 0);
  const mensaje = `Hola! Quiero realizar un pedido:%0A%0A${cart.map(item => 
    `- ${item.nombre} x${item.cantidad} = $${(item.precio * item.cantidad).toFixed(2)}`
  ).join('%0A')}%0A%0ATotal: $${total.toFixed(2)}`;
  
  window.open(`https://wa.me/59176543210?text=${mensaje}`, '_blank');
}

// Inicializar carrito cuando se carga la página
document.addEventListener('DOMContentLoaded', function() {
  loadCart();
  updateCart();
});