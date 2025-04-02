// Product data
const products = [
    {
        id: 1,
        name: "Classic Leather Tote",
        price: 299.99,
        image: "https://th.bing.com/th/id/OIP.k-roWmGhy8B0hXqeMCggzgHaHo?w=204&h=210&c=7&r=0&o=5&dpr=1.3&pid=1.7",
        description: "Elegant leather tote bag perfect for everyday use"
    },
    {
        id: 2,
        name: "Designer Crossbody",
        price: 199.99,
        image: "https://th.bing.com/th/id/OIP.aHfoXuJgSxVS-GdiVIVF_AHaE8?w=285&h=190&c=7&r=0&o=5&dpr=1.3&pid=1.7",
        description: "Stylish crossbody bag with adjustable strap"
    },
    {
        id: 3,
        name: "Luxury Shoulder Bag",
        price: 349.99,
        image: "https://th.bing.com/th/id/OIP.G4ecX8iaJadd_HuopZBAeAHaHa?w=180&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
        description: "Premium shoulder bag with gold hardware"
    },
    {
        id: 4,
        name: "Evening Clutch",
        price: 149.99,
        image: "https://th.bing.com/th/id/OIP.nKvAfEW2WPskBRobedSG8gHaIo?pid=ImgDet&w=185&h=215&c=7&dpr=1.3",
        description: "Elegant clutch perfect for special occasions"
    },
    {
        id: 5,
        name: "Weekend Travel Bag",
        price: 399.99,
        image: "https://th.bing.com/th/id/OIP.QUYYuwtfisc4HdGgjZq9xQHaE7?pid=ImgDet&w=185&h=123&c=7&dpr=1.3",
        description: "Spacious travel bag with multiple compartments"
    },
    {
        id: 6,
        name: "Mini Backpack",
        price: 179.99,
        image: "https://th.bing.com/th/id/OIP.PDkSo5RaO__USgTdbnlcHwAAAA?w=196&h=196&c=7&r=0&o=5&dpr=500&pid=80",
        description: "Trendy mini backpack with modern design"
    },
    {
        id: 7,
        name: "Structured Satchel",
        price: 279.99,
        image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
        description: "Professional satchel with clean lines"
    },
    {
        id: 8,
        name: "Bohemian Hobo Bag",
        price: 229.99,
        image: "https://media.istockphoto.com/photos/female-leather-bag-picture-id952079442?k=20&m=952079442&s=612x612&w=0&h=yzXiZFn2RBa7DzVTbgaU6YFMchEKlCI4TODRwCCIS7Y=",
        description: "Casual hobo bag with unique pattern"
    },
    {
        id: 9,
        name: "Designer Wallet",
        price: 129.99,
        image: "data:image/jpeg;base64,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",
        description: "Compact wallet with card slots"
    }
];

// Cart state
let cart = [];

// Initialize the page
document.addEventListener('DOMContentLoaded', () => {
    displayProducts();
    updateCartCount();
    setupCartModal();
});

// Display products in the grid
function displayProducts() {
    const container = document.getElementById('products-container');
    container.innerHTML = products.map(product => `
        <div class="col-md-4 col-lg-3">
            <div class="product-card">
                <img src="${product.image}" alt="${product.name}" class="product-image w-100">
                <div class="product-info">
                    <h5 class="product-title">${product.name}</h5>
                    <p class="text-muted mb-2">${product.description}</p>
                    <div class="d-flex justify-content-between align-items-center">
                        <span class="product-price">$${product.price.toFixed(2)}</span>
                        <button class="btn btn-primary" onclick="addToCart(${product.id})">
                            Add to Cart
                        </button>
                    </div>
                </div>
            </div>
        </div>
    `).join('');
}

// Add product to cart
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    const existingItem = cart.find(item => item.id === productId);

    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            id: product.id,
            name: product.name,
            price: product.price,
            image: product.image,
            quantity: 1
        });
    }

    updateCartCount();
    showToast('Product added to cart!');
}

// Update cart count badge
function updateCartCount() {
    const count = cart.reduce((total, item) => total + item.quantity, 0);
    document.querySelector('.cart-count').textContent = count;
}

// Setup cart modal
function setupCartModal() {
    const cartLink = document.querySelector('.nav-link');
    const cartModal = new bootstrap.Modal(document.getElementById('cartModal'));

    cartLink.addEventListener('click', (e) => {
        e.preventDefault();
        displayCartItems();
        cartModal.show();
    });
}

// Display cart items in modal
function displayCartItems() {
    const cartItems = document.getElementById('cart-items');
    const cartTotal = document.getElementById('cart-total');

    if (cart.length === 0) {
        cartItems.innerHTML = '<p class="text-center">Your cart is empty</p>';
        cartTotal.textContent = '0.00';
        return;
    }

    cartItems.innerHTML = cart.map(item => `
        <div class="cart-item">
            <img src="${item.image}" alt="${item.name}" class="cart-item-image">
            <div class="cart-item-details">
                <h6 class="cart-item-title">${item.name}</h6>
                <p class="cart-item-price">$${item.price.toFixed(2)}</p>
                <div class="quantity-controls">
                    <button class="quantity-btn" onclick="updateQuantity(${item.id}, -1)">-</button>
                    <span>${item.quantity}</span>
                    <button class="quantity-btn" onclick="updateQuantity(${item.id}, 1)">+</button>
                </div>
            </div>
        </div>
    `).join('');

    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    cartTotal.textContent = total.toFixed(2);
}

// Update item quantity
function updateQuantity(productId, change) {
    const item = cart.find(item => item.id === productId);
    if (item) {
        item.quantity += change;
        if (item.quantity <= 0) {
            cart = cart.filter(item => item.id !== productId);
        }
        updateCartCount();
        displayCartItems();
    }
}

// Show toast notification
function showToast(message) {
    const toast = document.createElement('div');
    toast.className = 'toast position-fixed bottom-0 end-0 m-3';
    toast.setAttribute('role', 'alert');
    toast.setAttribute('aria-live', 'assertive');
    toast.setAttribute('aria-atomic', 'true');
    toast.innerHTML = `
        <div class="toast-header">
            <strong class="me-auto">Notification</strong>
            <button type="button" class="btn-close" data-bs-dismiss="toast"></button>
        </div>
        <div class="toast-body">${message}</div>
    `;
    document.body.appendChild(toast);
    const bsToast = new bootstrap.Toast(toast);
    bsToast.show();
    toast.addEventListener('hidden.bs.toast', () => toast.remove());
} 