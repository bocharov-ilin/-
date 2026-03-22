
/* price formatter */
function fmt(n) {
  return '€ ' + Number(n).toLocaleString('de-DE', {minimumFractionDigits: 2, maximumFractionDigits: 2});
}

const SPLASH_VIDEO_URL = 'https://allwebs.ru/images/2026/03/09/621212055bd3886dec045c4f915efece.mp4';
const SPLASH_IMAGE_URL = 'https://allwebs.ru/images/2026/03/09/6c468c2702063df5441ab7b3546bf51c.jpg';

/* data */
const SIZES_MAP_DEFAULT = {
  1:{S:true,M:true,L:true,XL:true}, 2:{S:true,M:true,L:true,XL:true},
  3:{S:true,M:true,L:true,XL:true}, 4:{S:true,M:true,L:true,XL:true},
  5:{S:true,M:true,L:true,XL:true}, 6:{ONE_SIZE:true},
  7:{S:true,M:true,L:true,XL:true}, 8:{S:true,M:true,L:true,XL:true},
  9:{S:true,M:true,L:true,XL:true}, 10:{ONE_SIZE:true},
  11:{S:true,M:true,L:true,XL:true},12:{S:true,M:true,L:true,XL:true},
  13:{S:true,M:true,L:true,XL:true},14:{S:true,M:true,L:true,XL:true},
  15:{S:true,M:true,L:true,XL:true},16:{S:true,M:true,L:true,XL:true},
  17:{S:true,M:true,L:true,XL:true},18:{S:true,M:true,L:true,XL:true},
  19:{S:true,M:true,L:true,XL:true},20:{S:true,M:true,L:true,XL:true},
  21:{S:true,M:true,L:true,XL:true},22:{S:true,M:true,L:true,XL:true},
  23:{ONE_SIZE:true},24:{ONE_SIZE:true},25:{ONE_SIZE:true},
  26:{ONE_SIZE:true},27:{ONE_SIZE:true},
};

let SIZES_MAP = {};

const DEFAULT_IMG = "data:image/svg+xml,%3Csvg%20viewBox%3D%220%200%20200%20220%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Crect%20width%3D%22200%22%20height%3D%22220%22%20fill%3D%22%23f7f7f7%22/%3E%3Crect%20x%3D%2260%22%20y%3D%2260%22%20width%3D%2280%22%20height%3D%22100%22%20rx%3D%228%22%20fill%3D%22%23e2e2e2%22%20stroke%3D%22%23aaaaaa%22%20stroke-width%3D%221.2%22/%3E%3Cline%20x1%3D%2260%22%20y1%3D%2295%22%20x2%3D%22140%22%20y2%3D%2295%22%20stroke%3D%22%23aaaaaa%22%20stroke-width%3D%220.8%22/%3E%3Cline%20x1%3D%22100%22%20y1%3D%2260%22%20x2%3D%22100%22%20y2%3D%22160%22%20stroke%3D%22%23aaaaaa%22%20stroke-width%3D%220.8%22%20stroke-dasharray%3D%223%2C3%22/%3E%3C/svg%3E";

const DEFAULT_PRODUCTS = [
  {id:1,  name:"level t",                    price:230,  cat:"tops",         img:"https://www.rickowens.eu/cdn/shop/files/0251004_level-t.jpg?v=1769695143&width=1000",                  desc:"color: black, material: 100% cotton, model is 189cm tall, model wears size s."},
  {id:2,  name:"cargobelas",                 price:615,  cat:"bottoms",      img:"https://www.rickowens.eu/cdn/shop/files/RR02E1339_WD_09_01.jpg?v=1769695077&width=900",                desc:"color: black, material: 100% wool, model is 189cm tall, model wears size 48."},
  {id:3,  name:"brad jkt",                   price:2325, cat:"tops",         img:"https://www.rickowens.eu/cdn/shop/files/RU01F2764_LBE_09_01.jpg?v=1769695230&width=900",               desc:"color: black, material:100% lamb leather, body and pockets lining 100% cotton, sleeves lining 100% cupro, model is 189cm tall, model wears size 48."},
  {id:4,  name:"hoodie",                     price:595,  cat:"tops",         img:"https://www.rickowens.eu/cdn/shop/files/0291712_hoodie.jpg?v=1770044883&width=1000",                   desc:"color: black, material:100% cotton, model is 189cm tall, model wears size s."},
  {id:5,  name:"bolan bootcut",              price:345,  cat:"bottoms",      img:"https://www.rickowens.eu/cdn/shop/files/DU02E7365_DGY_58_01.jpg?v=1769695322&width=900",               desc:"color: washed grey, material: 100% cotton, pockets lining 52% polyester + 48% cotton, model is 189cm tall, model wears size 31."},
  {id:6,  name:"small gemini bag",           price:1260,  cat:"accessories", img:"https://www.rickowens.eu/cdn/shop/files/0252688_small-gemini-bag.jpg?v=1769695348&width=1000",         desc:"color: black, material:100% lamb leather, width 28cm height 14cm depth 12cm."},
  {id:7,  name:"magnum tommy shirt",         price:805,  cat:"tops",         img:"https://www.rickowens.eu/cdn/shop/files/DU01F4290_CVS_51_01.jpg?v=1770648090&width=900",               desc:"color: milk wash, material:100% cotton, model is 189cm tall, model wears size s."},
  {id:8,  name:"jumbo mac",                  price:1147, cat:"tops",         img:"https://www.rickowens.eu/cdn/shop/files/RR02E1900_WRU_25_01.jpg?v=1769695333&width=900",               desc:"color: bosco, material:100%  wool, model is 189cm tall, model wears size 46."},
  {id:9,  name:"sliced skirt",               price:672.50,  cat:"bottoms",   img:"https://www.rickowens.eu/cdn/shop/files/RO02E4672_KWVH_09_01.jpg?v=1769695326&width=900",              desc:"color: black, material: 100% new wool, model is 181cm tall, model wears size s."},
  {id:10, name:"shopper",                    price:1135,  cat:"accessories", img:"https://www.rickowens.eu/cdn/shop/files/RA01F0862_LGE_09_01.jpg?v=1769695438&width=900",               desc:"color: black, material:100% cow leather, 100% bull leather, width 50cm height 32cm depth 15cm."},
  {id:11, name:"jumbo ss t",                 price:435,  cat:"tops",         img:"https://www.rickowens.eu/cdn/shop/files/DU01F4274_RIGEP4_0911_01.jpg?v=1770648090&width=900",          desc:"color: milk/black, material:100% cotton, model is 189cm tall, model wears size s."},
  {id:12, name:"fogpocket soft soft blazer", price:2215,  cat:"tops",        img:"https://www.rickowens.eu/cdn/shop/files/RU01F2724_CVSKE_09_01.jpg?v=1769695426&width=900",             desc:"color: black, material:100% cotton, yoke and sleeves lining 100% cupro, buttons 100% buffalo horn, model is 189cm tall, model wears size 48."},
  {id:14, name:"headon dbl sweater",         price:215,  cat:"tops",         img:"https://www.rickowens.eu/cdn/shop/files/DU02E7279_FSLP_09_01.jpg?v=1769695086&width=900",              desc:"color: black, material: 100% cotton, model is 189cm tall, model wears size s."},
  {id:15, name:"jumbo sl outershirt",        price:435,  cat:"tops",         img:"https://www.rickowens.eu/cdn/shop/files/RR01F2224_NCV_09_01.jpg?v=1770654078&width=900",               desc:"color: black, material:97% nylon + 3% polyurethane, inside pockets 97% cotton + 3% elastane, model is 189cm tall, model wears size 48."},
  {id:16, name:"naska cardigan",             price:560,  cat:"tops",         img:"https://www.rickowens.eu/cdn/shop/files/0296499_naska-cardigan.jpg?v=1771584945&width=1000",           desc:"color: black, material:100% new wool, model is 181cm tall, model wears size s."},
  {id:17, name:"bustier top",                price:920,  cat:"tops",         img:"https://www.rickowens.eu/cdn/shop/files/0296570_bustier-top.jpg?v=1771593645&width=1000",              desc:"color: black, material:65% lamb leather + 34% cotton + 1% spandex, inner bustier 84% nylon + 16% elastane, model is 181cm tall, model wears size 40."},
  {id:18, name:"cargobela shorts",           price:675,  cat:"bottoms",      img:"https://www.rickowens.eu/cdn/shop/files/0241317_cargobela-shorts.jpg?v=1760971699&width=1000",         desc:"color: black, material: 100% cotton, band 97% cotton + 3% elastane, model is 189cm tall, model wears size s."},
  {id:19, name:"double cargo jumbo belas",   price:442.50,  cat:"bottoms",   img:"https://www.rickowens.eu/cdn/shop/files/0252823_double-cargo-jumbo-belas.jpg?v=1769695284&width=1000", desc:"color: black, material: 100% cotton, model is 181cm tall, model wears size s."},
  {id:20, name:"joris trousers",             price:865,  cat:"bottoms",      img:"https://www.rickowens.eu/cdn/shop/files/RR02E1308_BBCL_09_01.jpg?v=1769695096&width=900",              desc:"color: black, material: 100% cotton, details 100% cotton, pockets lining 52% polyester + 48% cotton, model is 189cm tall, model wears size 31."},
  {id:21, name:"leggings",                   price:312.50,  cat:"bottoms",   img:"https://www.rickowens.eu/cdn/shop/files/RP02E4689_M_09_01.jpg?v=1769695110&width=900",                 desc:"color: black, material: 100% new wool, model is 181cm tall, model wears size s."},
  {id:22, name:"vega jeans",                 price:990,  cat:"bottoms",      img:"https://www.rickowens.eu/cdn/shop/files/RL01F2300_SDBK_09_01.jpg?v=1771519546&width=900",              desc:"color: black, material: 91% cotton 6% polyester 3% elastane, model is 189cm tall, model wears size 29."},
  {id:23, name:"sandy mega 140x200",         price:320,  cat:"accessories",  img:"https://www.rickowens.eu/cdn/shop/files/0297614_sandy-mega-140x200.jpg?v=1772447218&width=1000",       desc:"color: black, material:50% modal + 42% linen + 8% silk, 140cm x 200cm."},
  {id:24, name:"stooges belt",               price:380,  cat:"accessories",  img:"https://www.rickowens.eu/cdn/shop/files/RA01F0883_LGE_09_01.jpg?v=1769695445&width=900",               desc:"color: black, material:100% bull leather, buckle 100% brass, width 4cm_length 130,5cm depth 0,5cm."},
  {id:25, name:"beveled bangle",             price:540,  cat:"accessories",  img:"https://www.rickowens.eu/cdn/shop/files/0260021_performa-bracelet.jpg?v=1770038327&width=1000",        desc:"color: palladio, material: 100% tin, available in one size with an inside diameter of 6,4cm."},
  {id:26, name:"zipped wallet",              price:635,  cat:"accessories",  img:"https://www.rickowens.eu/cdn/shop/files/RA01F0816_LPR_09_01.jpg?v=1769695444&width=900",               desc:"color: black, material:100% leather  of pirarucu fish, lining 100% lamb leather, width 10,5cm height 10cm depth 2cm."},
  {id:27, name:"sunglasses fog",             price:425,  cat:"accessories",  img:"https://www.rickowens.eu/cdn/shop/files/0289678_sunglasses-fog.jpg?v=1769695394&width=1000",           desc:"color: black temple/black lens, material: frame 100% grilamid, lenses: 100% nylon, not suitable for conversion into prescription  glasses."},
];

const INFO = {
  about: {
    title: "about Bocharov-Ilin",
    body: `
      <p>Bocharov-Ilin is an independent fashion label founded in 2020.</p>
      <p>standard delivery 3–7 days, 500 €. free from 10 000 €. express 1–2 days in moscow/spb — 990 €.</p>
      <p>unworn items within 14 days. contact support@bocharov-ilin.store.</p>
      <p>hello@bocharov-ilin.store — mon–fri 10:00–18:00</p>
    `
  },
  policy: {
    title: "privacy policy",
    body: `
      <p>last updated: january 2026.</p>
      <p>name, email, shipping address. card numbers are not stored.</p>
      <p>order processing and shipping updates only.</p>
      <p>essential cookies only. no tracking.</p>
      <p>write to privacy@bocharov-ilin.store to manage your data.</p>
    `
  }
};

/* state */
const DELIVERY = 500;
let cart = [], user = null;

/* scroll lock */
const _noScroll = e => { if (e.target.closest('.pm-modal,.cart-modal,.modal,.admin-modal,.info-modal')) return; e.preventDefault(); };

function lockScroll() {
  document.body.style.overflow = 'hidden';
  document.addEventListener('touchmove', _noScroll, { passive: false });
  document.body.classList.add('modal-blur');
}
function unlockScroll() {
  document.body.style.overflow = '';
  document.removeEventListener('touchmove', _noScroll);
  document.body.classList.remove('modal-blur');
}

let curFilter = 'all', modalId = null, modalSize = null;

/* init */
function loadState() {
  try { cart = JSON.parse(localStorage.getItem('bi_cart') || '[]'); } catch(e) { cart = []; }
  try {
    const u = localStorage.getItem('bi_user');
    if (u) {
      user = JSON.parse(u);
      if (!user.role) { user.role = 'user'; localStorage.setItem('bi_user', JSON.stringify(user)); }
    }
  } catch(e) { user = null; }
}

function getProducts() {
  try {
    const s = localStorage.getItem('bi_products');
    return s ? JSON.parse(s) : [...DEFAULT_PRODUCTS];
  } catch(e) { return [...DEFAULT_PRODUCTS]; }
}

function saveProducts(p) { localStorage.setItem('bi_products', JSON.stringify(p)); }

function initProducts() {
  if (!localStorage.getItem('bi_products')) saveProducts([...DEFAULT_PRODUCTS]);
  SIZES_MAP = { ...SIZES_MAP_DEFAULT };
  getProducts().forEach(p => { if (!SIZES_MAP[p.id]) SIZES_MAP[p.id] = {S:true,M:true,L:true,XL:true}; });
}

function initAdmin() {
  const users = JSON.parse(localStorage.getItem('bi_users') || '[]');
  if (!users.find(u => u.role === 'admin')) {
    users.unshift({ name:'Admin', email:'admin@bocharov-ilin.store', password:'admin123', role:'admin' });
    localStorage.setItem('bi_users', JSON.stringify(users));
  }
}

/* navigation */
function goHome() {
  curFilter = 'all';
  document.querySelectorAll('.cat-tab').forEach(t => t.classList.remove('active'));
  document.getElementById('catAll').classList.add('active');
  renderProducts();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function catClick(cat, id) {
  curFilter = cat;
  document.querySelectorAll('.cat-tab').forEach(t => t.classList.remove('active'));
  document.getElementById(id).classList.add('active');
  renderProducts();
  const g = document.getElementById('productGrid'); if (g) g.scrollIntoView({behavior:'smooth',block:'start'});
}

function getFiltered() {
  const all = getProducts();
  return curFilter === 'all' ? all : all.filter(p => p.cat === curFilter);
}

/* catalog */
function renderProducts() {
  const list = getFiltered();
  document.getElementById('resultsInfo').textContent = list.length + ' item' + (list.length !== 1 ? 's' : '');
  document.getElementById('productGrid').innerHTML = list.map(p => `
    <div class="product-card" onclick="openProduct(${p.id})">
      <div class="product-img">
        <img src="${p.img || DEFAULT_IMG}" alt="${p.name}" loading="lazy" onerror="this.src='${DEFAULT_IMG}'" />
      </div>
      <div class="product-info">
        <span class="product-name">${p.name}</span>
        <span class="product-price">${fmt(p.price)}</span>
      </div>
    </div>
  `).join('');
}

/* product modal */
function openProduct(id) {
  const p = getProducts().find(x => x.id === id);
  if (!p) return;
  modalId = id;
  modalSize = null;

  document.getElementById('pmImg').src             = p.img || DEFAULT_IMG;
  document.getElementById('pmImg').alt             = p.name;
  document.getElementById('pmName').textContent    = p.name;
  document.getElementById('pmPrice').textContent   =fmt( p.price);
  document.getElementById('pmDesc').textContent    = p.desc;

  const sizes = SIZES_MAP[id] || {S:true,M:true,L:true,XL:true};

  document.getElementById('pmSizes').innerHTML = Object.keys(sizes).map(s => {
    const out = !sizes[s];
    return `<button class="pm-sz${out ? ' out' : ''}" onclick="selectSize('${s}')" ${out ? 'disabled' : ''}>${s.replace('_',' ')}</button>`;
  }).join('');

  renderPMActions();
  const _first = Object.entries(sizes).find(([, av]) => av);
  if (_first) selectSize(sizes['S'] ? 'S' : _first[0]);
  document.getElementById('pmOverlay').classList.add('open');
  lockScroll();
}

function selectSize(s) {
  modalSize = s;
  document.querySelectorAll('.pm-sz').forEach(b => b.classList.toggle('active', b.textContent === s.replace('_',' ')));
  renderPMActions();
}

function renderPMActions() {
  if (!modalSize) {
    document.getElementById('pmAddBtn').style.display = '';
    document.getElementById('pmQtyRow').style.display = 'none';
    return;
  }
  const existing = cart.find(c => c.id === modalId && c.size === modalSize);
  if (existing) {
    document.getElementById('pmAddBtn').style.display = 'none';
    document.getElementById('pmQtyRow').style.display = '';
    document.getElementById('pmQnum').textContent = existing.qty;
  } else {
    document.getElementById('pmAddBtn').style.display = '';
    document.getElementById('pmQtyRow').style.display = 'none';
  }
}

function pmAddToCart() {
  if (!modalSize) { toast('please select a size'); return; }
  const p = getProducts().find(x => x.id === modalId);
  if (!p) return;
  const existing = cart.find(c => c.id === modalId && c.size === modalSize);
  if (existing) { existing.qty++; }
  else { cart.push({ id: modalId, name: p.name, price: p.price, img: p.img, size: modalSize, qty: 1 }); }
  saveCart();
  updateBadge();
  renderPMActions();
  toast(p.name + ' added to cart');
}

function pmChangeQty(d) {
  const existing = cart.find(c => c.id === modalId && c.size === modalSize);
  if (!existing) return;
  existing.qty += d;
  if (existing.qty <= 0) cart = cart.filter(c => !(c.id === modalId && c.size === modalSize));
  saveCart();
  updateBadge();
  renderPMActions();
}

function closePM() {
  document.getElementById('pmOverlay').classList.remove('open');
  unlockScroll();
}

/* cart */
function goToCart() {
  document.getElementById('pmOverlay').classList.remove('open');
  setTimeout(openCart, 260);
}

function openCart() {
  renderCart();
  document.getElementById('cartOverlay').classList.add('open');
  lockScroll();
}

function closeCart() {
  document.getElementById('cartOverlay').classList.remove('open');
  unlockScroll();
}

function renderCart() {
  const body = document.getElementById('cartBody');
  const foot = document.getElementById('cartFoot');

  if (!cart.length) {
    body.innerHTML = '<div class="cart-empty">your cart is empty</div>';
    foot.innerHTML = '';
    return;
  }

  body.innerHTML = cart.map((c, i) => `
    <div class="cart-item">
      <div class="ci-img"><img src="${c.img || DEFAULT_IMG}" alt="${c.name}" onerror="this.src='${DEFAULT_IMG}'" /></div>
      <div style="flex:1">
        <div class="ci-name">${c.name}</div>
        <div class="ci-size">${c.size.replace('_',' ')}</div>
        <div class="ci-qty">
          <button class="qty-btn" onclick="changeQty(${i},-1)">&#8722;</button>
          <span class="qty-val">${c.qty}</span>
          <button class="qty-btn" onclick="changeQty(${i},1)">&#43;</button>
        </div>
      </div>
      <div style="display:flex;flex-direction:column;align-items:flex-end;gap:8px">
        <button class="ci-del" onclick="removeFromCart(${i})">&#10005;</button>
        <span class="ci-price">${fmt((c.price * c.qty))}</span>
      </div>
    </div>
  `).join('');

  const subtotal = cart.reduce((s, c) => s + c.price * c.qty, 0);
  const delivery = subtotal >= 10000 ? 0 : DELIVERY;
  const total = subtotal + delivery;

  foot.innerHTML = `
    <div class="cart-row"><span>subtotal</span><span>${fmt(subtotal)}</span></div>
    <div class="cart-row"><span>delivery</span><span>${fmt(DELIVERY)}</span></div>
    <div class="cart-row total"><span>total</span><span>${fmt(total)}</span></div>
    <button class="checkout-btn" onclick="checkout()">place order</button>
  `;
}

function changeQty(i, d) {
  cart[i].qty += d;
  if (cart[i].qty <= 0) cart.splice(i, 1);
  saveCart(); updateBadge(); renderCart();
}

function removeFromCart(i) {
  cart.splice(i, 1);
  saveCart(); updateBadge(); renderCart();
}

function checkout() {
  if (!user) {
    document.getElementById('cartOverlay').classList.remove('open');
    setTimeout(openAuth, 260);
    return;
  }
  const subtotal = cart.reduce((s, c) => s + c.price * c.qty, 0);
  const delivery = subtotal >= 10000 ? 0 : DELIVERY;
  const order = {
    id:    'ORD-' + Date.now(),
    user:  user.email,
    date:  new Date().toLocaleDateString('en-GB'),
    items: cart.map(c => ({ name: c.name, size: c.size, qty: c.qty, price: c.price })),
    total: subtotal + delivery,
  };
  const orders = JSON.parse(localStorage.getItem('bi_orders') || '[]');
  orders.unshift(order);
  localStorage.setItem('bi_orders', JSON.stringify(orders));
  cart = [];
  saveCart(); updateBadge();
  document.getElementById('cartOverlay').classList.remove('open');
  setTimeout(() => openSuccess(order), 260);
}

function saveCart()    { localStorage.setItem('bi_cart', JSON.stringify(cart)); }
function updateBadge() {
  const total = cart.reduce((s, c) => s + c.qty, 0);
  const badge = document.getElementById('cartBadge');
  badge.textContent = total > 0 ? '[ ' + total + ' ]' : '';
}

/* email validation */
function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

/* auth */
function openAuth() {
  switchTab('login');
  document.getElementById('authOverlay').classList.add('open');
  lockScroll();
}

function closeAuth() {
  document.getElementById('authOverlay').classList.remove('open');
  unlockScroll();
}

function switchTab(tab) {
  document.getElementById('tabLogin').classList.toggle('active', tab === 'login');
  document.getElementById('tabReg').classList.toggle('active',   tab === 'reg');
  document.getElementById('authForm').innerHTML = tab === 'login' ? loginForm() : regForm();
}

function loginForm() {
  return `
    <div class="form-group"><label class="form-label">email</label><input class="form-input no-lower" id="liEmail" type="email" placeholder="email@example.com" /></div>
    <div class="form-group"><label class="form-label">password</label><input class="form-input no-lower" id="liPass" type="password" placeholder="••••••••" /></div>
    <button class="form-submit" onclick="doLogin()">sign in</button>
  `;
}

function regForm() {
  return `
    <div class="form-group"><label class="form-label">name</label><input class="form-input" id="regName" type="text" placeholder="your name" /></div>
    <div class="form-group"><label class="form-label">email</label><input class="form-input no-lower" id="regEmail" type="email" placeholder="email@example.com" /></div>
    <div class="form-group"><label class="form-label">password</label><input class="form-input no-lower" id="regPass" type="password" placeholder="••••••••" /></div>
    <button class="form-submit" onclick="doRegister()">create account</button>
  `;
}

function doLogin() {
  const email = document.getElementById('liEmail').value.trim();
  const pass  = document.getElementById('liPass').value;
  const users = JSON.parse(localStorage.getItem('bi_users') || '[]');
  const found = users.find(u => u.email === email && u.password === pass);
  if (!found) { toast('invalid email or password'); return; }
  user = found;
  localStorage.setItem('bi_user', JSON.stringify(user));
  updateNav();
  closeAuth();
  toast('welcome, ' + user.name + '!');
}

function doRegister() {
  const name  = document.getElementById('regName').value.trim();
  const email = document.getElementById('regEmail').value.trim();
  const pass  = document.getElementById('regPass').value;
  if (!name || !email || !pass) { toast('please fill all fields'); return; }
  if (!isValidEmail(email)) { toast('invalid email format'); return; }
  const users = JSON.parse(localStorage.getItem('bi_users') || '[]');
  if (users.find(u => u.email === email)) { toast('email already registered'); return; }
  const newUser = { name, email, password: pass, role: 'user' };
  users.push(newUser);
  localStorage.setItem('bi_users', JSON.stringify(users));
  user = newUser;
  localStorage.setItem('bi_user', JSON.stringify(user));
  updateNav();
  closeAuth();
  toast('welcome, ' + user.name + '!');
}

function signOut() {
  user = null;
  localStorage.removeItem('bi_user');
  closeUserDD();
  updateNav();
  toast('signed out');
}

function toggleUserDD() {
  if (!user) { openAuth(); return; }
  document.getElementById('userDD').classList.toggle('open');
}

function closeUserDD() { document.getElementById('userDD').classList.remove('open'); }

function updateNav() {
  const authBtn  = document.getElementById('authBtn');
  const adminBtn = document.getElementById('adminBtn');
  if (user) {
    authBtn.textContent = user.name;
    document.getElementById('ddName').textContent  = user.name;
    document.getElementById('ddEmail').textContent = user.email;
    document.getElementById('ddRole').textContent  = user.role;
    document.getElementById('ddRole').className    = 'role-badge' + (user.role === 'admin' ? ' admin' : '');
    adminBtn.style.display = user.role === 'admin' ? 'inline-flex' : 'none';
  } else {
    authBtn.textContent    = 'account';
    adminBtn.style.display = 'none';
  }
}

/* admin panel */
let curAdminTab = 'products';

function openAdmin() {
  if (!user || user.role !== 'admin') return;
  curAdminTab = 'products';
  document.querySelectorAll('.admin-tab').forEach(t => t.classList.remove('active'));
  document.getElementById('aTabProducts').classList.add('active');
  renderAdminProducts();
  document.getElementById('adminOverlay').classList.add('open');
  lockScroll();
}

function closeAdmin() {
  document.getElementById('adminOverlay').classList.remove('open');
  unlockScroll();
}

function adminTab(tab) {
  curAdminTab = tab;
  document.querySelectorAll('.admin-tab').forEach(t => t.classList.remove('active'));
  document.getElementById('aTab' + tab.charAt(0).toUpperCase() + tab.slice(1)).classList.add('active');
  if (tab === 'products')    renderAdminProducts();
  else if (tab === 'users')  renderAdminUsers();
  else                       renderAdminOrders();
}

function renderAdminProducts() {
  const products = getProducts();
  document.getElementById('adminBody').innerHTML = `
    <table class="ap-table">
      <thead><tr>
        <th></th><th>name</th><th>price €</th><th>cat</th><th>img url</th><th></th>
      </tr></thead>
      <tbody>
        ${products.map(p => `
          <tr id="apr-${p.id}">
            <td><img class="ap-thumb" src="${p.img || DEFAULT_IMG}" onerror="this.src='${DEFAULT_IMG}'" /></td>
            <td><input class="ap-inline-input" id="apn-${p.id}" value="${p.name}" /></td>
            <td><input class="ap-inline-input" id="app-${p.id}" type="number" value="${p.price}" style="width:80px" /></td>
            <td>
              <select class="ap-inline-input" id="apc-${p.id}" style="width:110px">
                ${['tops','bottoms','accessories'].map(c => `<option ${p.cat===c?'selected':''}>${c}</option>`).join('')}
              </select>
            </td>
            <td><input class="ap-inline-input" id="api-${p.id}" value="${p.img || ''}" /></td>
            <td style="display:flex;gap:4px">
              <button class="ap-icon-btn save" onclick="saveProduct(${p.id})">&#10003;</button>
              <button class="ap-icon-btn"      onclick="deleteProduct(${p.id})">&#10005;</button>
            </td>
          </tr>
        `).join('')}
      </tbody>
    </table>
    <div class="ap-form">
      <div class="ap-form-title">add product</div>
      <div class="ap-grid">
        <div><label class="ap-label">name</label><input class="ap-input" id="apNewName" /></div>
        <div><label class="ap-label">price €</label><input class="ap-input" id="apNewPrice" type="number" /></div>
        <div>
          <label class="ap-label">category</label>
          <select class="ap-select" id="apNewCat">
            <option>tops</option><option>bottoms</option><option>accessories</option>
          </select>
        </div>
        <div><label class="ap-label">image url</label><input class="ap-input no-lower" id="apNewImg" /></div>
        <div class="ap-grid-full"><label class="ap-label">description</label><textarea class="ap-textarea" id="apNewDesc" rows="2"></textarea></div>
      </div>
      <button class="ap-submit" onclick="addProduct()">add</button>
    </div>
  `;
}

function saveProduct(id) {
  const products = getProducts();
  const p = products.find(x => x.id === id);
  if (!p) return;
  p.name  = document.getElementById('apn-' + id).value.trim();
  p.price = parseInt(document.getElementById('app-' + id).value) || p.price;
  p.cat   = document.getElementById('apc-' + id).value;
  p.img   = document.getElementById('api-' + id).value.trim();
  saveProducts(products);
  renderProducts();
  toast('saved');
}

function deleteProduct(id) {
  saveProducts(getProducts().filter(p => p.id !== id));
  renderAdminProducts();
  renderProducts();
  toast('deleted');
}

function addProduct() {
  const name  = document.getElementById('apNewName').value.trim();
  const price = parseInt(document.getElementById('apNewPrice').value) || 0;
  const cat   = document.getElementById('apNewCat').value;
  const img   = document.getElementById('apNewImg').value.trim();
  const desc  = document.getElementById('apNewDesc').value.trim();
  if (!name || !price) { toast('name and price required'); return; }
  const products = getProducts();
  const newId = Math.max(0, ...products.map(p => p.id)) + 1;
  products.push({ id: newId, name, price, cat, img, desc });
  saveProducts(products);
  renderAdminProducts(); renderProducts();
  ['apNewName','apNewPrice','apNewImg','apNewDesc'].forEach(id => document.getElementById(id).value = '');
  toast('product added');
}

function renderAdminUsers() {
  const users = JSON.parse(localStorage.getItem('bi_users') || '[]');
  document.getElementById('adminBody').innerHTML = users.length ? `
    <table class="users-table">
      <thead><tr><th></th><th>name</th><th>email</th><th>role</th></tr></thead>
      <tbody>
        ${users.map(u => `
          <tr>
            <td><div class="u-avatar">${u.name.charAt(0).toUpperCase()}</div></td>
            <td>${u.name}</td>
            <td class="no-lower">${u.email}</td>
            <td><span class="role-badge ${u.role === 'admin' ? 'admin' : ''}">${u.role}</span></td>
          </tr>
        `).join('')}
      </tbody>
    </table>
  ` : '<div class="admin-empty">no users yet</div>';
}

function renderAdminOrders() {
  const orders = JSON.parse(localStorage.getItem('bi_orders') || '[]');
  document.getElementById('adminBody').innerHTML = orders.length ? orders.map(o => `
    <div class="order-card">
      <div class="order-head">
        <span class="order-id">${o.id}</span>
        <span class="order-date">${o.date}</span>
      </div>
      <div class="order-user">${o.user}</div>
      <div class="order-items">${o.items.map(i => `${i.name} × ${i.qty} (${i.size})`).join('<br>')}</div>
      <div class="order-total">total: ${fmt(o.total)}</div>
    </div>
  `).join('') : '<div class="admin-empty">no orders yet</div>';
}

/* order success */
function openSuccess(order) {
  document.getElementById('successBody').innerHTML =
    'order ' + order.id + '<br>' +
    order.items.length + ' item' + (order.items.length !== 1 ? 's' : '') +
    ' &nbsp;&middot;&nbsp; total ' + fmt(order.total);
  document.getElementById('successOverlay').classList.add('open');
  lockScroll();
}
function closeSuccess() {
  document.getElementById('successOverlay').classList.remove('open');
  unlockScroll();
}

/* info modal */
function openInfo(key) {
  const info = INFO[key];
  if (!info) return;
  document.getElementById('infoTitle').textContent = info.title;
  document.getElementById('infoBody').innerHTML    = info.body;
  document.getElementById('infoOverlay').classList.add('open');
  lockScroll();
}

function closeInfo() {
  document.getElementById('infoOverlay').classList.remove('open');
  unlockScroll();
}

/* toast */
function toast(msg) {
  const wrap = document.getElementById('toastWrap');
  const el   = document.createElement('div');
  el.className   = 'toast';
  el.textContent = msg;
  wrap.appendChild(el);
  requestAnimationFrame(() => requestAnimationFrame(() => el.classList.add('show')));
  setTimeout(() => {
    el.classList.remove('show');
    setTimeout(() => el.remove(), 350);
  }, 2500);
}

/* overlay click to close */
function overlayClick(e, id) {
  if (e.target.id === id) {
    if (id === 'cartOverlay')  closeCart();
    if (id === 'pmOverlay')    closePM();
    if (id === 'authOverlay')  closeAuth();
    if (id === 'adminOverlay') closeAdmin();
    if (id === 'infoOverlay')  closeInfo();
  }
}

/* splash */
function hideSplash() {
  const splash = document.getElementById('splash');
  splash.style.opacity = '0';
  setTimeout(() => { splash.style.display = 'none'; }, 950);
}

/* bootstrap */
document.addEventListener('DOMContentLoaded', () => {
  loadState();
  initAdmin();

  SIZES_MAP = { ...SIZES_MAP_DEFAULT };
  if (!localStorage.getItem('bi_products')) initProducts();

  updateNav();
  updateBadge();
  renderProducts();

  document.addEventListener('click', e => {
    const wrap = document.querySelector('.user-wrap');
    if (wrap && !wrap.contains(e.target)) closeUserDD();
  });

  /* splash */
  const splashEl  = document.getElementById('splash');
  const splashVid = document.getElementById('splashVideo');
  const splashImg = document.getElementById('splashImg');
  let splashDone  = false;
  let mediaReady  = false;

  function doHideSplash() {
    if (!mediaReady || splashDone) return;
    splashDone = true;
    hideSplash();
  }

  function showImage() {
    if (splashVid) splashVid.style.display = 'none';
    if (!splashImg || !SPLASH_IMAGE_URL) { mediaReady = true; return; }
    splashImg.style.display = 'block';
    splashImg.onload  = () => { splashImg.classList.add('loaded'); mediaReady = true; };
    splashImg.onerror = () => { mediaReady = true; };
    splashImg.src = SPLASH_IMAGE_URL;
    if (splashImg.complete) { splashImg.classList.add('loaded'); mediaReady = true; }
  }

  if (splashEl) splashEl.addEventListener('click', doHideSplash);

  if (SPLASH_VIDEO_URL && splashVid) {
    splashVid.src = SPLASH_VIDEO_URL;
    splashVid.load();
    let videoStarted = false;
    ['loadeddata', 'canplay', 'canplaythrough'].forEach(evt => {
      splashVid.addEventListener(evt, () => {
        if (videoStarted) return;
        videoStarted = true;
        splashVid.play()
          .then(() => { splashVid.classList.add('loaded'); mediaReady = true; })
          .catch(() => showImage());
      }, { once: true });
    });
    splashVid.addEventListener('playing', () => { splashVid.classList.add('loaded'); mediaReady = true; });
    splashVid.addEventListener('error',   () => showImage());
    setTimeout(() => { if (!mediaReady) showImage(); }, 6000);
  } else {
    showImage();
  }
});
