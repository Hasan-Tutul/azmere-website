/* ============================================================
   AZMERE — shared app logic
   ============================================================ */

const BRAND = {
  name: "Azmere",
  tagline: "A Name of Trust",
  phone: "01306-472520",
  whatsapp: "8801306472520",
  fb: "https://facebook.com/azmere",
  ig: "https://instagram.com/azmere_clothing",
  currency: "৳"
};

const CATEGORIES = [
  { slug:"three-piece", name:"Three-Piece", bn:"থ্রি-পিস", img:"https://picsum.photos/seed/azmere-3pc/640/820" },
  { slug:"saree",       name:"Saree",        bn:"শাড়ি",    img:"https://picsum.photos/seed/azmere-saree/640/820" },
  { slug:"kurti",       name:"Kurti",        bn:"কুর্তি",   img:"https://picsum.photos/seed/azmere-kurti/640/820" },
  { slug:"lehenga",     name:"Lehenga",      bn:"লেহেঙ্গা", img:"https://picsum.photos/seed/azmere-lehenga/640/820" },
  { slug:"gown",        name:"Gown",         bn:"গাউন",     img:"https://picsum.photos/seed/azmere-gown/640/820" }
];

const COLORS = ["Maroon","Teal","Mustard","Ivory","Charcoal"];
const SIZES = ["S","M","L","XL","XXL"];

function img(seed,w=640,h=820){
  if(typeof seed === "string" && (seed.startsWith("data:") || seed.startsWith("http"))) return seed;
  return `https://picsum.photos/seed/${seed}/${w}/${h}`;
}

/* PRODUCTS_START */
const PRODUCTS = [
  { id:"AZ-3001", cat:"three-piece", name:"Guljee Embroidered Three-Piece", price:2950, was:3600, stock:8, tag:"Eid Edition", colors:["Maroon","Mustard"], desc:"An original Pakistani guljee three-piece set with hand-finished embroidery along the neckline and hem. Pairs a lawn kameez with a chiffon dupatta and matching trouser.", fabric:"Lawn cotton, chiffon dupatta", care:"Dry clean recommended for first wash, then gentle hand wash in cold water.", images:["AZ-3001a","AZ-3001b","AZ-3001c"] },
  { id:"AZ-3002", cat:"three-piece", name:"Amreen Sparkle Festive Suit", price:3200, was:null, stock:5, tag:"New", colors:["Teal","Ivory"], desc:"Part of the Amreen'Sparkle collection — a richly worked festive three-piece designed for evening celebrations, finished with delicate sequin detailing.", fabric:"Net with sequin embroidery, satin lining", care:"Dry clean only.", images:["AZ-3002a","AZ-3002b","AZ-3002c"] },
  { id:"AZ-3003", cat:"three-piece", name:"Indigo Bandhani Block-Print Suit", price:1850, was:2200, stock:12, tag:null, colors:["Charcoal","Ivory"], desc:"A relaxed everyday three-piece in classic bandhani block print, cut for comfort with a straight-fit kameez and matching dupatta.", fabric:"Pure cotton", care:"Machine washable, cold water, line dry.", images:["AZ-3003a","AZ-3003b","AZ-3003c"] },
  { id:"AZ-3004", cat:"three-piece", name:"Rose Garden Embroidered Lawn Suit", price:2050, was:null, stock:10, tag:null, colors:["Ivory","Maroon"], desc:"Floral lawn print suit with subtle thread embroidery on the yoke — light enough for everyday wear, elegant enough for visiting.", fabric:"Premium lawn cotton", care:"Hand wash separately in cold water.", images:["AZ-3004a","AZ-3004b","AZ-3004c"] },
  { id:"AZ-3005", cat:"three-piece", name:"Tie-Dye Shibori Cotton Suit", price:1650, was:1950, stock:14, tag:"Bestseller", colors:["Teal","Charcoal"], desc:"Hand tie-dyed in a shibori-inspired wash, this cotton three-piece brings a relaxed, artisanal feel to your everyday wardrobe.", fabric:"100% cotton", care:"Cold hand wash, dark colours separately.", images:["AZ-3005a","AZ-3005b","AZ-3005c"] },

  { id:"AZ-4001", cat:"saree", name:"Pure Katan Silk Saree", price:4500, was:5200, stock:6, tag:"Premium", colors:["Maroon","Mustard"], desc:"A traditional katan silk saree with a woven gold border, finished with an unstitched matching blouse piece.", fabric:"Katan silk", care:"Dry clean only.", images:["AZ-4001a","AZ-4001b","AZ-4001c"] },
  { id:"AZ-4002", cat:"saree", name:"Soft Georgette Printed Saree", price:1980, was:null, stock:11, tag:null, colors:["Teal","Ivory"], desc:"Lightweight georgette saree with an all-over print, designed to drape effortlessly for daily or office wear.", fabric:"Georgette", care:"Hand wash cold, mild detergent.", images:["AZ-4002a","AZ-4002b","AZ-4002c"] },
  { id:"AZ-4003", cat:"saree", name:"Handloom Cotton Tangail Saree", price:2600, was:3000, stock:9, tag:"Heritage", colors:["Charcoal","Maroon"], desc:"Woven on traditional handlooms, this Tangail cotton saree carries the signature fine border and breathable comfort of the original craft.", fabric:"Handloom cotton", care:"Dry clean first wash, then gentle hand wash.", images:["AZ-4003a","AZ-4003b","AZ-4003c"] },

  { id:"AZ-5001", cat:"kurti", name:"Floral Bell-Sleeve Kurti", price:1450, was:null, stock:18, tag:"New", colors:["Ivory","Mustard"], desc:"An A-line kurti with dramatic bell sleeves and an all-over floral print — pairs beautifully with palazzos or jeans.", fabric:"Rayon", care:"Machine wash cold, gentle cycle.", images:["AZ-5001a","AZ-5001b","AZ-5001c"] },
  { id:"AZ-5002", cat:"kurti", name:"Embroidered Yoke Straight Kurti", price:1250, was:1500, stock:20, tag:"Bestseller", colors:["Teal","Maroon"], desc:"A classic straight-cut kurti with hand embroidery detailing on the yoke, finished with side slits for ease of movement.", fabric:"Cotton blend", care:"Hand wash recommended.", images:["AZ-5002a","AZ-5002b","AZ-5002c"] },
  { id:"AZ-5003", cat:"kurti", name:"Block-Print Cotton Kurti", price:990, was:null, stock:25, tag:null, colors:["Charcoal","Ivory"], desc:"Hand block-printed cotton kurti, lightweight and breathable — an everyday staple for warm days.", fabric:"100% cotton", care:"Machine washable.", images:["AZ-5003a","AZ-5003b","AZ-5003c"] },

  { id:"AZ-6001", cat:"lehenga", name:"Bridal Zardozi Lehenga Set", price:8500, was:9800, stock:3, tag:"Bridal", colors:["Maroon","Mustard"], desc:"A heavily worked zardozi lehenga set with matching dupatta and blouse, designed for the bride who wants timeless grandeur.", fabric:"Velvet with zardozi embroidery", care:"Dry clean only, store in muslin cloth.", images:["AZ-6001a","AZ-6001b","AZ-6001c"] },
  { id:"AZ-6002", cat:"lehenga", name:"Pastel Net Embroidered Lehenga", price:5200, was:null, stock:5, tag:"New", colors:["Ivory","Teal"], desc:"A softly embroidered net lehenga in pastel tones, ideal for engagement and reception functions.", fabric:"Net with thread embroidery", care:"Dry clean only.", images:["AZ-6002a","AZ-6002b","AZ-6002c"] },

  { id:"AZ-7001", cat:"gown", name:"Maroon Velvet Evening Gown", price:4200, was:4800, stock:7, tag:"Festive", colors:["Maroon","Charcoal"], desc:"A floor-length velvet gown with a fitted bodice and flowing skirt, finished with delicate gold piping at the waist.", fabric:"Velvet", care:"Dry clean only.", images:["AZ-7001a","AZ-7001b","AZ-7001c"] },
  { id:"AZ-7002", cat:"gown", name:"Embroidered Chiffon Kaftan Gown", price:3650, was:null, stock:9, tag:"Bestseller", colors:["Teal","Mustard"], desc:"An oversized kaftan-style gown in flowing chiffon, hand-embellished along the front panel — relaxed, regal, and easy to wear.", fabric:"Chiffon, satin lining", care:"Dry clean recommended.", images:["AZ-7002a","AZ-7002b","AZ-7002c"] },
  { id:"AZ-7003", cat:"gown", name:"Ivory Lace Detail Gown", price:3950, was:4400, stock:4, tag:null, colors:["Ivory"], desc:"A graceful ivory gown finished with lace detailing at the sleeves and neckline — designed for receptions and formal evenings.", fabric:"Satin with lace overlay", care:"Dry clean only.", images:["AZ-7003a","AZ-7003b","AZ-7003c"] }
];
/* PRODUCTS_END */

function findProduct(id){ return PRODUCTS.find(p => p.id === id); }
function catName(slug){ const c = CATEGORIES.find(c=>c.slug===slug); return c ? c.name : slug; }
function fmt(n){ return BRAND.currency + n.toLocaleString("en-BD"); }

/* ---------------- Cart (localStorage) ---------------- */
const CART_KEY = "azmere_cart";

function getCart(){
  try{ return JSON.parse(localStorage.getItem(CART_KEY)) || []; }catch(e){ return []; }
}
function saveCart(cart){
  localStorage.setItem(CART_KEY, JSON.stringify(cart));
  updateCartCount();
}
function addToCart(productId, color, size, qty){
  qty = qty || 1;
  const cart = getCart();
  const existing = cart.find(l => l.id === productId && l.color === color && l.size === size);
  if(existing){ existing.qty += qty; }
  else{ cart.push({ id: productId, color: color || COLORS[0], size: size || "M", qty }); }
  saveCart(cart);
}
function removeFromCart(index){
  const cart = getCart();
  cart.splice(index,1);
  saveCart(cart);
  renderCartPage && renderCartPage();
}
function setCartQty(index, qty){
  const cart = getCart();
  if(!cart[index]) return;
  cart[index].qty = Math.max(1, qty);
  saveCart(cart);
  renderCartPage && renderCartPage();
}
function cartCount(){
  return getCart().reduce((sum,l)=> sum + l.qty, 0);
}
function cartTotal(){
  return getCart().reduce((sum,l)=>{
    const p = findProduct(l.id);
    return p ? sum + p.price * l.qty : sum;
  },0);
}
function updateCartCount(){
  document.querySelectorAll(".cart-count").forEach(el => el.textContent = cartCount());
}

/* ---------------- Toast ---------------- */
function toast(msg){
  let t = document.querySelector(".toast");
  if(!t){
    t = document.createElement("div");
    t.className = "toast";
    document.body.appendChild(t);
  }
  t.textContent = msg;
  t.classList.add("show");
  clearTimeout(window.__toastTimer);
  window.__toastTimer = setTimeout(()=> t.classList.remove("show"), 2400);
}

/* ---------------- Header / Footer injection ---------------- */
function renderHeader(active){
  const navItems = [
    { href:"index.html", label:"Home", key:"home" },
    { href:"category.html?cat=three-piece", label:"Three-Piece", key:"three-piece" },
    { href:"category.html?cat=saree", label:"Saree", key:"saree" },
    { href:"category.html?cat=kurti", label:"Kurti", key:"kurti" },
    { href:"category.html?cat=lehenga", label:"Lehenga", key:"lehenga" },
    { href:"category.html?cat=gown", label:"Gown", key:"gown" }
  ];
  const navHtml = navItems.map(n => `<a href="${n.href}" class="${active===n.key?'active':''}">${n.label}</a>`).join("");
  const mobileHtml = navItems.map(n => `<a href="${n.href}">${n.label}</a>`).join("");

  document.body.insertAdjacentHTML("afterbegin", `
  <div class="topbar">আজীবন বিশ্বস্ততার প্রতিশ্রুতি — Free delivery inside Dhaka on orders over ৳3,000</div>
  <header class="site-header">
    <div class="header-inner">
      <a href="index.html" class="logo">AZMERE<small>A Name of Trust</small></a>
      <nav class="main-nav">${navHtml}</nav>
      <div class="header-actions">
        <button class="icon-btn nav-toggle" aria-label="Open menu" onclick="document.querySelector('.mobile-nav').classList.add('open');document.querySelector('.scrim').classList.add('show')">☰</button>
        <a class="icon-btn" href="https://wa.me/${BRAND.whatsapp}" target="_blank" rel="noopener">Call Us</a>
        <a class="icon-btn" href="cart.html">Cart <span class="cart-count">0</span></a>
      </div>
    </div>
  </header>
  <div class="scrim" onclick="this.classList.remove('show');document.querySelector('.mobile-nav').classList.remove('open')"></div>
  <nav class="mobile-nav">${mobileHtml}<a href="cart.html">Cart</a></nav>
  `);
  updateCartCount();
}

function renderFooter(){
  document.body.insertAdjacentHTML("beforeend", `
  <footer class="site-footer">
    <div class="container">
      <div class="footer-grid">
        <div>
          <div class="footer-logo">AZMERE</div>
          <p>বাংলাদেশের বিশ্বস্ত লেডিস ফ্যাশন ডেস্টিনেশন। Three-piece, saree, kurti, lehenga and gown — exclusive Pakistani, Indian and own collections, curated for the modern Bangladeshi woman.</p>
          <div class="social-row">
            <a href="${BRAND.fb}" target="_blank" rel="noopener" aria-label="Facebook">f</a>
            <a href="${BRAND.ig}" target="_blank" rel="noopener" aria-label="Instagram">ig</a>
          </div>
        </div>
        <div class="footer-col">
          <h5>Shop</h5>
          <ul>
            <li><a href="category.html?cat=three-piece">Three-Piece</a></li>
            <li><a href="category.html?cat=saree">Saree</a></li>
            <li><a href="category.html?cat=kurti">Kurti</a></li>
            <li><a href="category.html?cat=lehenga">Lehenga</a></li>
            <li><a href="category.html?cat=gown">Gown</a></li>
          </ul>
        </div>
        <div class="footer-col">
          <h5>Help</h5>
          <ul>
            <li><a href="cart.html">Your Cart</a></li>
            <li><a href="checkout.html">Checkout</a></li>
            <li><a href="https://wa.me/${BRAND.whatsapp}" target="_blank" rel="noopener">WhatsApp Support</a></li>
            <li><a href="tel:${BRAND.phone}">${BRAND.phone}</a></li>
          </ul>
        </div>
        <div class="footer-col">
          <h5>Visit</h5>
          <ul>
            <li><a href="#">Dhaka, Bangladesh</a></li>
            <li><a href="#">Cash on Delivery available</a></li>
            <li><a href="#">Exchange within 3 days</a></li>
          </ul>
        </div>
      </div>
      <div class="footer-bottom">
        <span>© ${new Date().getFullYear()} Azmere. All rights reserved.</span>
        <span>Designed with care for every occasion.</span>
      </div>
    </div>
  </footer>
  `);
}

document.addEventListener("DOMContentLoaded", updateCartCount);
