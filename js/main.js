let cart = JSON.parse(localStorage.getItem('el_cisne_cart')) || [];

function updateCartCount() {
    const countElement = document.getElementById('cart-count');
    if (countElement) {
        countElement.innerText = cart.length;
    }
}

function addItemToCart(name, price) {
    cart.push({ name, price });
    localStorage.setItem('el_cisne_cart', JSON.stringify(cart));
    updateCartCount();
    showToast(`¡"${name}" agregado al pedido!`);
}

function showToast(message) {
    let toast = document.createElement('div');
    toast.className = 'fixed bottom-5 right-5 bg-[#6B2D0C] text-white px-4 py-2 rounded-lg shadow-lg z-50 transition-all duration-300 transform translate-y-0';
    toast.innerText = message;
    document.body.appendChild(toast);
    setTimeout(() => {
        toast.style.opacity = '0';
        setTimeout(() => toast.remove(), 300);
    }, 2000);
}

document.addEventListener('DOMContentLoaded', () => {
    updateCartCount();
});