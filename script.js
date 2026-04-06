// ========== PRODUCT DATABASE - 325+ PRODUCTS IN INDIAN RUPEES ==========
// All prices are in ₹ (Indian Rupees)

const products = [
    // ========== ELECTRONICS (68 Products) ==========
    // Smartphones (15)
    { id: 1, name: "iPhone 15 Pro Max", price: 159900, category: "electronics", rating: 4.8, reviews: 12340, image: "https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=400", 
      description: "Apple's flagship smartphone with A17 Pro chip, titanium design, and 48MP camera system.", 
      specifications: "Display: 6.7-inch Super Retina XDR | Processor: A17 Pro | Storage: 256GB | Camera: 48MP + 12MP + 12MP | Battery: 4422mAh" },
    
    { id: 2, name: "Samsung Galaxy S24 Ultra", price: 144999, category: "electronics", rating: 4.7, reviews: 8950, image: "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=400",
      description: "AI-powered smartphone with 200MP camera, S Pen integration, and titanium frame.",
      specifications: "Display: 6.8-inch Dynamic AMOLED | Processor: Snapdragon 8 Gen 3 | Storage: 256GB | Camera: 200MP + 50MP + 12MP + 10MP | S Pen Included" },
    
    { id: 3, name: "Google Pixel 8 Pro", price: 124999, category: "electronics", rating: 4.6, reviews: 5670, image: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=400",
      description: "Best camera phone with AI features and pure Android experience.",
      specifications: "Display: 6.7-inch OLED | Processor: Google Tensor G3 | Storage: 128GB | Camera: 50MP + 48MP + 48MP | 7 years of updates" },
    
    { id: 4, name: "OnePlus 12", price: 64999, category: "electronics", rating: 4.5, reviews: 4320, image: "https://images.unsplash.com/photo-1616348436168-de43ad0db179?w=400",
      description: "Fast and smooth flagship killer with Hasselblad camera.",
      specifications: "Display: 6.82-inch AMOLED | Processor: Snapdragon 8 Gen 3 | Storage: 256GB | Camera: 50MP + 64MP + 48MP | 100W Charging" },
    
    { id: 5, name: "Xiaomi 14 Ultra", price: 99999, category: "electronics", rating: 4.6, reviews: 3210, image: "https://images.unsplash.com/photo-1678911820864-e2c567c655d9?w=400",
      description: "Leica-tuned cameras with 1-inch sensor and premium build.",
      specifications: "Display: 6.73-inch AMOLED | Processor: Snapdragon 8 Gen 3 | Storage: 512GB | Camera: 50MP Quad | Leica Optics" },
    
    { id: 6, name: "Nothing Phone 2", price: 44999, category: "electronics", rating: 4.4, reviews: 5670, image: "https://images.unsplash.com/photo-1680525507652-2762c8a6b2e9?w=400",
      description: "Unique transparent design with Glyph Interface and clean software.",
      specifications: "Display: 6.7-inch OLED | Processor: Snapdragon 8+ Gen 1 | Storage: 256GB | Glyph Lights | Nothing OS 2.0" },
    
    { id: 7, name: "Vivo X100 Pro", price: 89999, category: "electronics", rating: 4.5, reviews: 2890, image: "https://images.unsplash.com/photo-1616348436168-de43ad0db179?w=400",
      description: "Zeiss-powered camera system with professional portrait capabilities.",
      specifications: "Display: 6.78-inch AMOLED | Processor: Dimensity 9300 | Storage: 256GB | Zeiss Camera | 100W Charging" },
    
    { id: 8, name: "Motorola Edge 50 Ultra", price: 59999, category: "electronics", rating: 4.3, reviews: 2100, image: "https://images.unsplash.com/photo-1610945415292-d9bbf067e59c?w=400",
      description: "Premium mid-ranger with wooden finish options and 125W charging.",
      specifications: "Display: 6.7-inch pOLED | Processor: Snapdragon 8s Gen 3 | Storage: 512GB | 125W TurboPower" },
    
    // Laptops (12)
    { id: 9, name: "MacBook Pro M3 Max", price: 299900, category: "electronics", rating: 4.9, reviews: 8760, image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400",
      description: "Ultimate professional laptop with M3 Max chip for creators and developers.",
      specifications: "Display: 16-inch Liquid Retina XDR | Chip: M3 Max (16-core) | RAM: 36GB | Storage: 1TB SSD | Battery: 22 hours" },
    
    { id: 10, name: "Dell XPS 15", price: 189900, category: "electronics", rating: 4.7, reviews: 5430, image: "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=400",
      description: "Premium Windows laptop with stunning InfinityEdge display and powerful performance.",
      specifications: "Display: 15.6-inch 3.5K OLED | Processor: Intel i9-13900H | RAM: 32GB | Storage: 1TB SSD | RTX 4070" },
    
    { id: 11, name: "ASUS ROG Strix G16", price: 149900, category: "electronics", rating: 4.8, reviews: 4320, image: "https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=400",
      description: "Gaming powerhouse with RGB lighting and high refresh rate display.",
      specifications: "Display: 16-inch 240Hz | Processor: Intel i9-13980HX | RAM: 32GB | Storage: 1TB SSD | RTX 4080" },
    
    { id: 12, name: "HP Spectre x360", price: 159900, category: "electronics", rating: 4.6, reviews: 3870, image: "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=400",
      description: "Convertible 2-in-1 laptop with stunning design and OLED display.",
      specifications: "Display: 16-inch 3K OLED Touch | Processor: Intel i7-1360P | RAM: 16GB | Storage: 1TB SSD | 360° Hinge" },
    
    { id: 13, name: "Lenovo Legion Pro 7", price: 179900, category: "electronics", rating: 4.7, reviews: 2980, image: "https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=400",
      description: "High-performance gaming laptop with AI chip tuning.",
      specifications: "Display: 16-inch 240Hz | Processor: AMD Ryzen 9 7945HX | RAM: 32GB | Storage: 1TB SSD | RTX 4090" },
    
    { id: 14, name: "Microsoft Surface Laptop 5", price: 129900, category: "electronics", rating: 4.5, reviews: 3240, image: "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=400",
      description: "Elegant laptop with 3:2 aspect ratio touchscreen and premium build.",
      specifications: "Display: 15-inch PixelSense | Processor: Intel i7-1265U | RAM: 16GB | Storage: 512GB SSD | Alcantara keyboard" },
    
    // Audio Devices (10)
    { id: 15, name: "Sony WH-1000XM5", price: 32990, category: "electronics", rating: 4.8, reviews: 12540, image: "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?w=400",
      description: "Industry-leading noise cancellation with exceptional sound quality and comfort.",
      specifications: "Type: Over-ear | Battery: 30 hours | ANC: Yes | Multipoint: Yes | LDAC Support" },
    
    { id: 16, name: "Apple AirPods Pro 2", price: 24900, category: "electronics", rating: 4.8, reviews: 18760, image: "https://images.unsplash.com/photo-1600294037681-c80b4cb5b434?w=400",
      description: "Premium wireless earbuds with H2 chip and adaptive transparency.",
      specifications: "Type: In-ear | Battery: 6 hours | ANC: Yes | Spatial Audio: Yes | MagSafe Case" },
    
    { id: 17, name: "Bose QC Ultra", price: 39990, category: "electronics", rating: 4.7, reviews: 5430, image: "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?w=400",
      description: "Immersive audio experience with Bose's best noise cancellation.",
      specifications: "Type: Over-ear | Battery: 24 hours | Immersive Audio: Yes | CustomTune technology" },
    
    { id: 18, name: "Samsung Galaxy Buds2 Pro", price: 17990, category: "electronics", rating: 4.6, reviews: 8760, image: "https://images.unsplash.com/photo-1600294037681-c80b4cb5b434?w=400",
      description: "24-bit Hi-Fi sound with intelligent ANC and seamless Samsung integration.",
      specifications: "Type: In-ear | Battery: 8 hours | 24-bit Audio | IPX7 Water Resistant" },
    
    // More Electronics continue...
    { id: 19, name: "iPad Pro 12.9 M2", price: 119900, category: "electronics", rating: 4.8, reviews: 9870, image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=400",
      description: "Pro-level tablet with Liquid Retina XDR display and M2 power.",
      specifications: "Display: 12.9-inch XDR | Chip: M2 | Storage: 256GB | LiDAR Scanner | Apple Pencil hover" },
    
    { id: 20, name: "Samsung Tab S9 Ultra", price: 109990, category: "electronics", rating: 4.7, reviews: 6540, image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=400",
      description: "Massive AMOLED display tablet with S Pen included.",
      specifications: "Display: 14.6-inch AMOLED | Processor: Snapdragon 8 Gen 2 | Storage: 256GB | S Pen included" },
];

// Generate remaining 300+ products programmatically for each category
const categories = {
    electronics: { count: 68, basePrice: [5000, 250000], brands: ["Samsung", "Apple", "OnePlus", "Xiaomi", "Realme", "iQOO", "Nothing", "Motorola", "Google", "ASUS", "Dell", "HP", "Lenovo", "Acer", "MSI"] },
    fashion: { count: 72, basePrice: [500, 25000], brands: ["Nike", "Adidas", "Puma", "Zara", "H&M", "Levi's", "Allen Solly", "US Polo", "Raymond", "Peter England", "Louis Philippe", "Arrow", "Van Heusen", "Park Avenue", "Wrangler"] },
    home: { count: 65, basePrice: [300, 50000], brands: ["IKEA", "Urban Ladder", "Pepperfry", "Home Centre", "Wakefit", "Nilkamal", "Godrej Interio", "Durian", "Springtek", "Sleepwell"] },
    books: { count: 58, basePrice: [150, 5000], brands: ["Penguin", "HarperCollins", "Bloomsbury", "Hachette", "Simon & Schuster", "Rupa", "Westland", "S Chand", "Oxford", "Cambridge"] },
    sports: { count: 62, basePrice: [400, 35000], brands: ["Nike", "Adidas", "Puma", "Decathlon", "Reebok", "Under Armour", "Skechers", "ASICS", "New Balance", "Fitbit"] }
};

let currentId = products.length + 1;

// Generate Electronics Products
for (let i = 1; i <= 68 - 20; i++) { // 20 already added above
    const brands = categories.electronics.brands;
    const types = ["Smartphone", "Laptop", "Headphones", "Smartwatch", "Tablet", "Speaker", "Charger", "Power Bank", "Monitor", "Keyboard", "Mouse", "Webcam", "Microphone", "Router", "SSD", "RAM", "Graphics Card", "Cooling Fan", "Gaming Chair", "VR Headset"];
    const brand = brands[i % brands.length];
    const type = types[i % types.length];
    const price = Math.floor(Math.random() * (categories.electronics.basePrice[1] - categories.electronics.basePrice[0]) + categories.electronics.basePrice[0]);
    const rating = (Math.random() * 1.5 + 3.5).toFixed(1);
    
    products.push({
        id: currentId++,
        name: `${brand} ${type} ${Math.floor(i/5)+1}`,
        price: price,
        category: "electronics",
        rating: parseFloat(rating),
        reviews: Math.floor(Math.random() * 5000),
        image: `https://picsum.photos/id/${i+200}/400/300`,
        description: `Premium ${type} from ${brand} with advanced features and excellent build quality. Perfect for daily use with long-lasting performance.`,
        specifications: `${type} Specifications: High-quality components, durable design, 1-year warranty, Made for Indian conditions.`
    });
}

// Generate Fashion Products
for (let i = 1; i <= 72; i++) {
    const brands = categories.fashion.brands;
    const types = ["T-Shirt", "Jeans", "Shirt", "Dress", "Jacket", "Shoes", "Watch", "Sunglasses", "Cap", "Belt", "Wallet", "Bag", "Saree", "Kurta", "Lehenga", "Sweater", "Hoodie", "Track Pant", "Shorts", "Socks"];
    const brand = brands[i % brands.length];
    const type = types[i % types.length];
    const price = Math.floor(Math.random() * (categories.fashion.basePrice[1] - categories.fashion.basePrice[0]) + categories.fashion.basePrice[0]);
    const rating = (Math.random() * 1.5 + 3.5).toFixed(1);
    
    products.push({
        id: currentId++,
        name: `${brand} ${type}`,
        price: price,
        category: "fashion",
        rating: parseFloat(rating),
        reviews: Math.floor(Math.random() * 8000),
        image: `https://picsum.photos/id/${i+300}/400/300`,
        description: `Stylish ${type} from ${brand}. Made with premium materials for comfort and durability. Perfect for casual and formal occasions.`,
        specifications: `Material: Premium fabric | Sizes: S, M, L, XL, XXL | Care: Machine wash | Fit: Regular | Origin: India`
    });
}

// Generate Home Products
for (let i = 1; i <= 65; i++) {
    const brands = categories.home.brands;
    const types = ["Sofa", "Bed", "Dining Table", "Chair", "Wardrobe", "Bookshelf", "Lamp", "Rug", "Curtains", "Pillows", "Bedsheet", "Towels", "Cookware", "Utensils", "Mixer", "Juicer", "Air Fryer", "Vacuum Cleaner", "Water Purifier", "Air Purifier"];
    const brand = brands[i % brands.length];
    const type = types[i % types.length];
    const price = Math.floor(Math.random() * (categories.home.basePrice[1] - categories.home.basePrice[0]) + categories.home.basePrice[0]);
    const rating = (Math.random() * 1.5 + 3.5).toFixed(1);
    
    products.push({
        id: currentId++,
        name: `${brand} ${type}`,
        price: price,
        category: "home",
        rating: parseFloat(rating),
        reviews: Math.floor(Math.random() * 3000),
        image: `https://picsum.photos/id/${i+400}/400/300`,
        description: `Beautiful ${type} from ${brand} to enhance your home decor. Quality craftsmanship with modern design.`,
        specifications: `Material: Premium quality | Dimensions: Standard size | Assembly: Required | Warranty: 1 year | Color options available`
    });
}

// Generate Books Products
for (let i = 1; i <= 58; i++) {
    const brands = categories.books.brands;
    const genres = ["Fiction", "Non-Fiction", "Self-Help", "Business", "Biography", "Science", "History", "Fantasy", "Romance", "Mystery", "Thriller", "Poetry", "Comics", "Children's", "Academic"];
    const authors = ["Chetan Bhagat", "Amish Tripathi", "Durjoy Datta", "Ravinder Singh", "Preeti Shenoy", "Arundhati Roy", "Vikram Seth", "Ruskin Bond", "Khushwant Singh", "Jhumpa Lahiri"];
    const genre = genres[i % genres.length];
    const author = authors[i % authors.length];
    const price = Math.floor(Math.random() * (categories.books.basePrice[1] - categories.books.basePrice[0]) + categories.books.basePrice[0]);
    const rating = (Math.random() * 1.5 + 3.5).toFixed(1);
    
    products.push({
        id: currentId++,
        name: `${genre} Book: ${author} - ${["The Beginning", "The Journey", "The Secret", "The Truth", "The Dream"][i % 5]}`,
        price: price,
        category: "books",
        rating: parseFloat(rating),
        reviews: Math.floor(Math.random() * 2000),
        image: `https://picsum.photos/id/${i+500}/400/300`,
        description: `A captivating ${genre} book by bestselling author ${author}. Perfect for readers who love engaging stories and thoughtful narratives.`,
        specifications: `Pages: ${Math.floor(Math.random() * 400) + 150} pages | Language: English | Edition: Latest | Binding: Paperback | Publisher: ${brands[i % brands.length]}`
    });
}

// Generate Sports Products
for (let i = 1; i <= 62; i++) {
    const brands = categories.sports.brands;
    const types = ["Running Shoes", "Training Shoes", "Sports Bra", "Track Suit", "Dumbbells", "Yoga Mat", "Protein Powder", "Shaker Bottle", "Gym Bag", "Resistance Bands", "Jump Rope", "Fitness Tracker", "Cycling Helmet", "Football", "Cricket Bat", "Tennis Racket", "Badminton Racquet", "Swimming Goggles", "Water Bottle", "Foam Roller"];
    const brand = brands[i % brands.length];
    const type = types[i % types.length];
    const price = Math.floor(Math.random() * (categories.sports.basePrice[1] - categories.sports.basePrice[0]) + categories.sports.basePrice[0]);
    const rating = (Math.random() * 1.5 + 3.5).toFixed(1);
    
    products.push({
        id: currentId++,
        name: `${brand} ${type}`,
        price: price,
        category: "sports",
        rating: parseFloat(rating),
        reviews: Math.floor(Math.random() * 4000),
        image: `https://picsum.photos/id/${i+600}/400/300`,
        description: `High-quality ${type} from ${brand} for fitness enthusiasts. Durable and designed for optimal performance.`,
        specifications: `Material: Premium sports-grade | Sizes: Available in all sizes | Warranty: 6 months | Care: Wipe clean | Made for Indian athletes`
    });
}

console.log(`Total products loaded: ${products.length}`); // Should be 325+ products

// ========== CART & STATE MANAGEMENT ==========
let cart = JSON.parse(localStorage.getItem('cart')) || [];
let wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
let currentPage = 'home';
let currentCategory = 'all';
let currentSort = 'default';
let currentSearch = '';
let currentProduct = null;
let detailQuantity = 1;

// ========== UTILITY FUNCTIONS ==========
function formatPrice(price) {
    return `₹${price.toLocaleString('en-IN')}`;
}

function showToast(message) {
    const toast = document.getElementById('toast');
    toast.textContent = message;
    toast.classList.add('show');
    setTimeout(() => toast.classList.remove('show'), 3000);
}

function saveCart() {
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartUI();
    updateCartCount();
}

function updateCartCount() {
    const total = cart.reduce((sum, item) => sum + item.quantity, 0);
    document.getElementById('cartCount').textContent = total;
}

function updateCartUI() {
    const container = document.getElementById('cartItems');
    if (!container) return;
    
    if (cart.length === 0) {
        container.innerHTML = '<div style="text-align:center; padding:40px;">🛒 Your cart is empty</div>';
        document.getElementById('cartTotal').innerHTML = '';
        return;
    }
    
    container.innerHTML = cart.map(item => `
        <div class="cart-item">
            <div class="cart-item-info">
                <div class="cart-item-title">${item.name}</div>
                <div class="cart-item-price">${formatPrice(item.price)}</div>
            </div>
            <div class="cart-item-actions">
                <button onclick="updateQuantity(${item.id}, -1)">-</button>
                <span>${item.quantity}</span>
                <button onclick="updateQuantity(${item.id}, 1)">+</button>
                <button onclick="removeFromCart(${item.id})" style="background:#ff6b6b; color:white;">×</button>
            </div>
        </div>
    `).join('');
    
    const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    document.getElementById('cartTotal').innerHTML = `<div class="cart-total-sidebar">Total: ${formatPrice(total)}</div>`;
}

function updateQuantity(id, delta) {
    const item = cart.find(i => i.id === id);
    if (item) {
        item.quantity += delta;
        if (item.quantity <= 0) {
            cart = cart.filter(i => i.id !== id);
        }
        saveCart();
    }
}

function removeFromCart(id) {
    cart = cart.filter(i => i.id !== id);
    saveCart();
    showToast('Item removed from cart');
}

function clearCart() {
    cart = [];
    saveCart();
    showToast('Cart cleared');
}

function addToCart(product, quantity = 1) {
    const existing = cart.find(item => item.id === product.id);
    if (existing) {
        existing.quantity += quantity;
    } else {
        cart.push({ ...product, quantity: quantity });
    }
    saveCart();
    showToast(`${product.name} added to cart!`);
}

function openCart() {
    document.getElementById('cartSidebar').classList.add('open');
    document.getElementById('cartOverlay').classList.add('active');
}

function closeCart() {
    document.getElementById('cartSidebar').classList.remove('open');
    document.getElementById('cartOverlay').classList.remove('active');
}

// ========== PAGE RENDERING FUNCTIONS ==========
function renderProductCard(product) {
    return `
        <div class="product-card" onclick="viewProduct(${product.id})">
            <img src="${product.image}" class="product-image" alt="${product.name}" onerror="this.src='https://via.placeholder.com/400x300?text=Product'">
            ${product.rating >= 4.7 ? '<div class="product-badge">🔥 Bestseller</div>' : ''}
            <div class="product-info">
                <div class="product-category">${product.category}</div>
                <div class="product-title">${product.name}</div>
                <div class="product-price">${formatPrice(product.price)}</div>
                <div class="product-rating">⭐ ${product.rating} (${product.reviews.toLocaleString()} reviews)</div>
                <button class="add-to-cart-btn" onclick="event.stopPropagation(); addToCart(${JSON.stringify(product).replace(/"/g, '&quot;')})">
                    <i class="fas fa-cart-plus"></i> Add to Cart
                </button>
            </div>
        </div>
    `;
}

function renderHome() {
    const featuredProducts = products.filter(p => p.rating >= 4.6).slice(0, 8);
    const categoryCounts = {
        electronics: products.filter(p => p.category === 'electronics').length,
        fashion: products.filter(p => p.category === 'fashion').length,
        home: products.filter(p => p.category === 'home').length,
        books: products.filter(p => p.category === 'books').length,
        sports: products.filter(p => p.category === 'sports').length
    };
    
    return `
        <section class="hero">
            <div class="container">
                <div class="hero-content">
                    <span class="hero-badge">🇮🇳 Great Indian Festival Live!</span>
                    <h1>Shop <span class="gradient-text">Premium Products</span><br>Delivered to Your Doorstep</h1>
                    <p>Discover ${products.length}+ products from top brands. Best prices, secure payments, and fast shipping across India.</p>
                    <div class="hero-buttons">
                        <button class="btn-primary" onclick="navigateTo('shop', 'all')">Start Shopping →</button>
                        <button class="btn-secondary" onclick="navigateTo('deals')">View Deals</button>
                    </div>
                    <div class="trust-badges">
                        <span>✓ Secure Payments</span>
                        <span>✓ Free Shipping*</span>
                        <span>✓ 24/7 Support</span>
                        <span>✓ Easy Returns</span>
                    </div>
                </div>
            </div>
        </section>
        
        <section class="categories-section">
            <div class="container">
                <h2 class="section-title">Shop by <span class="gradient-text">Category</span></h2>
                <div class="category-grid">
                    <div class="category-card" onclick="navigateTo('shop', 'electronics')">
                        <i class="fas fa-microchip"></i>
                        <h3>Electronics</h3>
                        <p>${categoryCounts.electronics} products</p>
                    </div>
                    <div class="category-card" onclick="navigateTo('shop', 'fashion')">
                        <i class="fas fa-tshirt"></i>
                        <h3>Fashion</h3>
                        <p>${categoryCounts.fashion} products</p>
                    </div>
                    <div class="category-card" onclick="navigateTo('shop', 'home')">
                        <i class="fas fa-home"></i>
                        <h3>Home & Living</h3>
                        <p>${categoryCounts.home} products</p>
                    </div>
                    <div class="category-card" onclick="navigateTo('shop', 'books')">
                        <i class="fas fa-book"></i>
                        <h3>Books</h3>
                        <p>${categoryCounts.books} products</p>
                    </div>
                    <div class="category-card" onclick="navigateTo('shop', 'sports')">
                        <i class="fas fa-futbol"></i>
                        <h3>Sports & Fitness</h3>
                        <p>${categoryCounts.sports} products</p>
                    </div>
                </div>
            </div>
        </section>
        
        <section class="categories-section">
            <div class="container">
                <h2 class="section-title">Featured <span class="gradient-text">Products</span></h2>
                <div class="products-grid">
                    ${featuredProducts.map(p => renderProductCard(p)).join('')}
                </div>
            </div>
        </section>
    `;
}

function renderShop() {
    let filtered = products.filter(p => {
        const matchesCategory = currentCategory === 'all' || p.category === currentCategory;
        const matchesSearch = p.name.toLowerCase().includes(currentSearch.toLowerCase()) || 
                             p.description.toLowerCase().includes(currentSearch.toLowerCase());
        return matchesCategory && matchesSearch;
    });
    
    if (currentSort === 'price-asc') filtered.sort((a,b) => a.price - b.price);
    if (currentSort === 'price-desc') filtered.sort((a,b) => b.price - a.price);
    if (currentSort === 'rating') filtered.sort((a,b) => b.rating - a.rating);
    
    const categoryCount = filtered.length;
    
    return `
        <div class="container" style="padding: 40px;">
            <div class="products-header">
                <div>
                    <h2>${currentCategory === 'all' ? 'All Products' : currentCategory.charAt(0).toUpperCase() + currentCategory.slice(1)}</h2>
                    <p style="color: #666; margin-top: 5px;">${categoryCount} products found</p>
                </div>
                <div class="filter-bar">
                    <select id="categorySelect" onchange="changeCategory(this.value)">
                        <option value="all" ${currentCategory === 'all' ? 'selected' : ''}>All Categories</option>
                        <option value="electronics" ${currentCategory === 'electronics' ? 'selected' : ''}>Electronics (${products.filter(p=>p.category==='electronics').length})</option>
                        <option value="fashion" ${currentCategory === 'fashion' ? 'selected' : ''}>Fashion (${products.filter(p=>p.category==='fashion').length})</option>
                        <option value="home" ${currentCategory === 'home' ? 'selected' : ''}>Home & Living (${products.filter(p=>p.category==='home').length})</option>
                        <option value="books" ${currentCategory === 'books' ? 'selected' : ''}>Books (${products.filter(p=>p.category==='books').length})</option>
                        <option value="sports" ${currentCategory === 'sports' ? 'selected' : ''}>Sports & Fitness (${products.filter(p=>p.category==='sports').length})</option>
                    </select>
                    <select id="sortSelect" onchange="changeSort(this.value)">
                        <option value="default" ${currentSort === 'default' ? 'selected' : ''}>Sort by: Featured</option>
                        <option value="price-asc" ${currentSort === 'price-asc' ? 'selected' : ''}>Price: Low to High</option>
                        <option value="price-desc" ${currentSort === 'price-desc' ? 'selected' : ''}>Price: High to Low</option>
                        <option value="rating" ${currentSort === 'rating' ? 'selected' : ''}>Best Rating</option>
                    </select>
                </div>
            </div>
            <div class="products-grid" id="shopGrid">
                ${filtered.length > 0 ? filtered.map(p => renderProductCard(p)).join('') : '<div style="text-align:center; padding:50px;">No products found 😢</div>'}
            </div>
        </div>
    `;
}

function renderProductDetail() {
    if (!currentProduct) return '<div>Product not found</div>';
    
    return `
        <div class="container" style="padding: 40px;">
            <a class="back-button" onclick="navigateTo('shop', '${currentProduct.category}')">← Back to ${currentProduct.category}</a>
            <div class="product-detail-grid">
                <img src="${currentProduct.image}" class="product-detail-image" alt="${currentProduct.name}">
                <div>
                    <h1 class="product-detail-title">${currentProduct.name}</h1>
                    <div class="product-detail-rating">⭐ ${currentProduct.rating} (${currentProduct.reviews.toLocaleString()} global ratings)</div>
                    <div class="product-detail-price">${formatPrice(currentProduct.price)}</div>
                    <div class="product-detail-description">
                        <strong>Description:</strong>
                        <p>${currentProduct.description}</p>
                    </div>
                    <div class="product-detail-description">
                        <strong>Specifications:</strong>
                        <p>${currentProduct.specifications || "Premium quality product with 1-year warranty. Made to last with excellent build quality."}</p>
                    </div>
                    <div class="quantity-selector">
                        <button onclick="updateDetailQuantity(-1)">-</button>
                        <span id="detailQuantity">1</span>
                        <button onclick="updateDetailQuantity(1)">+</button>
                    </div>
                    <button class="btn-primary" style="width: 100%; margin-top: 20px;" onclick="addToCart(currentProduct, parseInt(document.getElementById('detailQuantity').innerText))">
                        <i class="fas fa-shopping-cart"></i> Add to Cart
                    </button>
                    <div style="margin-top: 20px; padding: 15px; background: #f5f5f5; border-radius: 12px;">
                        <small>✅ Free delivery on orders over ₹499</small><br>
                        <small>🔒 Secure transaction</small><br>
                        <small>↺ 7-day return policy</small>
                    </div>
                </div>
            </div>
        </div>
    `;
}

function renderDeals() {
    const deals = products.filter(p => p.price < 2000 && p.rating > 4.3);
    return `
        <div class="container" style="padding: 40px;">
            <h1>Today's <span class="gradient-text">Deals</span></h1>
            <p style="margin-bottom: 30px;">Limited time offers - up to 70% off! ${deals.length} products on sale</p>
            <div class="products-grid">
                ${deals.map(p => renderProductCard(p)).join('')}
            </div>
        </div>
    `;
}

function renderSupport() {
    return `
        <div class="container" style="padding: 60px 40px;">
            <h1>Customer <span class="gradient-text">Support</span></h1>
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 30px; margin-top: 40px;">
                <div style="background: white; padding: 30px; border-radius: 16px; box-shadow: 0 2px 10px rgba(0,0,0,0.05);">
                    <i class="fas fa-headset" style="font-size: 2rem; color: #667eea;"></i>
                    <h3 style="margin: 15px 0;">24/7 Live Chat</h3>
                    <p>Get instant help from our support team anytime, anywhere in India.</p>
                    <button class="btn-primary" style="margin-top: 15px;">Start Chat →</button>
                </div>
                <div style="background: white; padding: 30px; border-radius: 16px; box-shadow: 0 2px 10px rgba(0,0,0,0.05);">
                    <i class="fas fa-envelope" style="font-size: 2rem; color: #667eea;"></i>
                    <h3 style="margin: 15px 0;">Email Support</h3>
                    <p>support@globallane.co.in<br>Response within 24 hours</p>
                </div>
                <div style="background: white; padding: 30px; border-radius: 16px; box-shadow: 0 2px 10px rgba(0,0,0,0.05);">
                    <i class="fas fa-phone" style="font-size: 2rem; color: #667eea;"></i>
                    <h3 style="margin: 15px 0;">Call Us</h3>
                    <p>1800-123-4567 (Toll Free)<br>Mon-Sat, 9AM-7PM IST</p>
                </div>
                <div style="background: white; padding: 30px; border-radius: 16px; box-shadow: 0 2px 10px rgba(0,0,0,0.05);">
                    <i class="fas fa-store" style="font-size: 2rem; color: #667eea;"></i>
                    <h3 style="margin: 15px 0;">Return Center</h3>
                    <p>Easy returns within 7 days<br>Pickup available across India</p>
                </div>
            </div>
        </div>
    `;
}

// ========== NAVIGATION FUNCTIONS ==========
function updateDetailQuantity(delta) {
    detailQuantity += delta;
    if (detailQuantity < 1) detailQuantity = 1;
    const span = document.getElementById('detailQuantity');
    if (span) span.innerText = detailQuantity;
}

function viewProduct(id) {
    currentProduct = products.find(p => p.id === id);
    currentPage = 'product';
    renderApp();
}

function navigateTo(page, category = null) {
    currentPage = page;
    if (category) currentCategory = category;
    if (page === 'home') {
        currentCategory = 'all';
        currentSearch = '';
        document.getElementById('globalSearchInput').value = '';
    }
    renderApp();
}

function changeCategory(category) {
    currentCategory = category;
    renderApp();
}

function changeSort(sort) {
    currentSort = sort;
    renderApp();
}

// ========== MAIN RENDER FUNCTION ==========
function renderApp() {
    const app = document.getElementById('app');
    let content = '';
    
    switch(currentPage) {
        case 'home':
            content = renderHome();
            break;
        case 'shop':
            content = renderShop();
            break;
        case 'product':
            content = renderProductDetail();
            break;
        case 'deals':
            content = renderDeals();
            break;
        case 'support':
            content = renderSupport();
            break;
        default:
            content = renderHome();
    }
    
    app.innerHTML = content;
    
    // Update active nav link
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.classList.remove('active');
        if (link.dataset.page === currentPage) {
            link.classList.add('active');
        }
    });
    
    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ========== INITIALIZATION ==========
function init() {
    renderApp();
    updateCartCount();
    
    // Hide loader
    setTimeout(() => {
        document.getElementById('loader').classList.add('hide');
    }, 500);
    
    // Event listeners
    document.getElementById('cartBtn').addEventListener('click', openCart);
    document.getElementById('closeCart').addEventListener('click', closeCart);
    document.getElementById('cartOverlay').addEventListener('click', closeCart);
    document.getElementById('clearCartBtn').addEventListener('click', clearCart);
    document.getElementById('checkoutBtn').addEventListener('click', () => {
        if (cart.length === 0) {
            showToast('Your cart is empty!');
        } else {
            const total = cart.reduce((sum, i) => sum + i.price * i.quantity, 0);
            showToast(`🎉 Order placed! Total: ${formatPrice(total)}. Thank you for shopping!`);
            cart = [];
            saveCart();
            closeCart();
        }
    });
    
    document.querySelector('.close-announcement').addEventListener('click', (e) => {
        e.target.closest('.announcement-bar').style.display = 'none';
    });
    
    document.getElementById('globalSearchInput').addEventListener('input', (e) => {
        currentSearch = e.target.value;
        if (currentPage === 'shop') {
            renderApp();
        } else if (currentSearch) {
            navigateTo('shop');
        }
    });
    
    // Navigation links
    document.querySelectorAll('[data-page]').forEach(el => {
        el.addEventListener('click', (e) => {
            e.preventDefault();
            const page = el.dataset.page;
            const category = el.dataset.category;
            navigateTo(page, category);
        });
    });
    
    // Logo click
    document.querySelector('.logo').addEventListener('click', () => navigateTo('home'));
}

// Make functions global for onclick
window.navigateTo = navigateTo;
window.viewProduct = viewProduct;
window.addToCart = addToCart;
window.updateQuantity = updateQuantity;
window.removeFromCart = removeFromCart;
window.changeCategory = changeCategory;
window.changeSort = changeSort;
window.updateDetailQuantity = updateDetailQuantity;
window.currentProduct = null;

// Start the app
init();