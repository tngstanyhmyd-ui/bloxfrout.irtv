/**
 * BlackFruit Marketplace - Core Vanilla JavaScript Engine
 * Fully deployable to Cloudflare Pages without build steps.
 */

// Global Fruit Database
const DEFAULT_FRUITS = [
  {
    id: "kitsune",
    nameFa: "کیتسونه",
    nameEn: "Kitsune Fruit",
    category: "mythical",
    rarity: "Mythical",
    demand: 10,
    beliValue: "115,000,000",
    beliNum: 115000000,
    priceToman: 750000,
    priceFormatted: "۷۵۰,۰۰۰",
    stock: 9,
    glowColor: "#c084fc",
    accent: "purple",
    badge: "تخفیف ویژه",
    status: "محبوب‌ترین",
    desc: "قدرتمندترین میوه فنتسی بیست، باز کردن فرم نهال آتشین، موبیلیتی فوق‌العاده در دریا و اتک‌های اسطوره‌ای Sea 3."
  },
  {
    id: "dragon-west",
    nameFa: "دراگون وست",
    nameEn: "Dragon West",
    category: "mythical",
    rarity: "Mythical",
    demand: 10,
    beliValue: "180,000,000",
    beliNum: 180000000,
    priceToman: 5000000,
    priceFormatted: "۵,۰۰۰,۰۰۰",
    stock: 3,
    glowColor: "#f59e0b",
    accent: "gold",
    badge: "Rework غربی",
    status: "PvP King",
    desc: "نسخه غربی دراگون بازطراحی شده با نهایت قدرت ویرانگری و دمیج محیطی سهمگین در نبردهای دریایی."
  },
  {
    id: "dragon-east",
    nameFa: "دراگون ایست",
    nameEn: "Dragon East",
    category: "mythical",
    rarity: "Mythical",
    demand: 10,
    beliValue: "110,000,000",
    beliNum: 110000000,
    priceToman: 4000000,
    priceFormatted: "۴,۰۰۰,۰۰۰",
    stock: 4,
    glowColor: "#ef4444",
    accent: "red",
    badge: "Rework شرقی",
    status: "کمیاب",
    desc: "نسخه شرقی دراگون با استایل اژدهای کهن و سرعت ضربات سرسام‌آور در تمام جهات."
  },
  {
    id: "dough",
    nameFa: "دوگ / خمیر",
    nameEn: "Dough (Awakened)",
    category: "mythical",
    rarity: "Mythical",
    demand: 9,
    beliValue: "25,000,000",
    beliNum: 25000000,
    priceToman: 59000,
    priceFormatted: "۵۹,۰۰۰",
    stock: 14,
    glowColor: "#ec4899",
    accent: "pink",
    badge: "Awakened",
    status: "بهترین برای PvP",
    desc: "محبوب‌ترین میوه بیداری (Awakened) بازی با کمبوهای قفل‌کننده و گریزناپذیر."
  },
  {
    id: "buddha",
    nameFa: "بودا",
    nameEn: "Buddha Fruit",
    category: "legendary",
    rarity: "Legendary",
    demand: 10,
    beliValue: "7,000,000",
    beliNum: 7000000,
    priceToman: 45000,
    priceFormatted: "۴۵,۰۰۰",
    stock: 18,
    glowColor: "#fbbf24",
    accent: "gold",
    badge: "بهترین برای راید",
    status: "سلطان فارمینگ",
    desc: "پادشاه بدون رقیب فارمینگ و لول‌آپ سریع در تمام دریاهای روبلاکس با رنج اتک عظیم."
  },
  {
    id: "portal",
    nameFa: "پورتال",
    nameEn: "Portal Fruit",
    category: "legendary",
    rarity: "Legendary",
    demand: 9,
    beliValue: "6,000,000",
    beliNum: 6000000,
    priceToman: 45000,
    priceFormatted: "۴۵,۰۰۰",
    stock: 11,
    glowColor: "#38bdf8",
    accent: "cyan",
    badge: "جابجایی سریع",
    status: "PvP Meta",
    desc: "تله‌پورت نامحدود در سراسر نقشه و بهترین دسترسی برای جاخالی دادن و غافلگیری حریف."
  },
  {
    id: "trex",
    nameFa: "تی‌رکس",
    nameEn: "T-Rex Fruit",
    category: "mythical",
    rarity: "Mythical",
    demand: 8,
    beliValue: "20,000,000",
    beliNum: 20000000,
    priceToman: 60000,
    priceFormatted: "۶۰,۰۰۰",
    stock: 7,
    glowColor: "#10b981",
    accent: "emerald",
    badge: "دمیج بالا",
    status: "جانوری قدرتمند",
    desc: "دمیج فیزیکی سنگین و توانایی تعقیب بی‌رحمانه دشمن با حالت ماقبل تاریخ."
  },
  {
    id: "tiger",
    nameFa: "تایگر",
    nameEn: "Tiger Fruit",
    category: "mythical",
    rarity: "Mythical",
    demand: 9,
    beliValue: "35,000,000",
    beliNum: 35000000,
    priceToman: 140000,
    priceFormatted: "۱۴۰,۰۰۰",
    stock: 5,
    glowColor: "#f97316",
    accent: "orange",
    badge: "ویژه بتل",
    status: "کمیاب و پرسرعت",
    desc: "میوه گربه‌سان پرقدرت با چنگال‌های برنده و کمبوهای متوالی در میدان جنگ."
  },
  {
    id: "yeti",
    nameFa: "یتی",
    nameEn: "Yeti Fruit",
    category: "mythical",
    rarity: "Mythical",
    demand: 9,
    beliValue: "32,000,000",
    beliNum: 32000000,
    priceToman: 130000,
    priceFormatted: "۱۳۰,۰۰۰",
    stock: 6,
    glowColor: "#67e8f9",
    accent: "cyan",
    badge: "یخی ویژه",
    status: "یخ‌بندان سنگین",
    desc: "میوه یخ‌بندان آرکتیک با ضربات کوبنده و یخ زدن طولانی‌مدت دشمنان."
  },
  {
    id: "lightning",
    nameFa: "لایتنینگ (رامبل)",
    nameEn: "Lightning (Rumble)",
    category: "legendary",
    rarity: "Legendary",
    demand: 8,
    beliValue: "15,000,000",
    beliNum: 15000000,
    priceToman: 75000,
    priceFormatted: "۷۵,۰۰۰",
    stock: 10,
    glowColor: "#38bdf8",
    accent: "cyan",
    badge: "سرعت فوق‌العاده",
    status: "استان stun قوی",
    desc: "میوه صاعقه و رعد با سرعت بی‌نظیر و استان‌های شوک‌آور پیاپی."
  },
  {
    id: "gas",
    nameFa: "گس",
    nameEn: "Gas Fruit",
    category: "mythical",
    rarity: "Mythical",
    demand: 8,
    beliValue: "22,000,000",
    beliNum: 22000000,
    priceToman: 90000,
    priceFormatted: "۹۰,۰۰۰",
    stock: 8,
    glowColor: "#a855f7",
    accent: "purple",
    badge: "آنتی‌کامبو",
    status: "مه کشنده",
    desc: "میوه گاز سمی با مه غلیظ محیطی و دمیج مستمر به تمام بازیکنان اطراف."
  },
  {
    id: "leopard",
    nameFa: "لئوپارد",
    nameEn: "Leopard Fruit",
    category: "mythical",
    rarity: "Mythical",
    demand: 8,
    beliValue: "40,000,000",
    beliNum: 40000000,
    priceToman: 265000,
    priceFormatted: "۲۶۵,۰۰۰",
    stock: 14,
    glowColor: "#eab308",
    accent: "gold",
    badge: "سرعت وحشی",
    status: "محبوب متای PvP",
    desc: "تبدیل به چیتا، سرعت حرکت باورنکردنی و اسکیل‌های ضربتی با کمبوهای کشنده."
  }
];

// Initialize LocalStorage Data
function getStoredProducts() {
  const data = localStorage.getItem('blackfruit_products');
  if (data) {
    try { return JSON.parse(data); } catch(e){}
  }
  localStorage.setItem('blackfruit_products', JSON.stringify(DEFAULT_FRUITS));
  return DEFAULT_FRUITS;
}

function saveProducts(products) {
  localStorage.setItem('blackfruit_products', JSON.stringify(products));
}

// Shopping Cart Management
function getCart() {
  const cart = localStorage.getItem('blackfruit_cart');
  return cart ? JSON.parse(cart) : [];
}

function saveCart(cart) {
  localStorage.setItem('blackfruit_cart', JSON.stringify(cart));
  updateCartBadge();
}

function addToCart(fruitId, permanent = false) {
  const products = getStoredProducts();
  const product = products.find(p => p.id === fruitId);
  if (!product) return;
  
  const cart = getCart();
  const existing = cart.find(item => item.id === fruitId && item.permanent === permanent);
  
  if (existing) {
    existing.qty += 1;
  } else {
    cart.push({
      id: product.id,
      nameFa: product.nameFa,
      nameEn: product.nameEn,
      priceToman: permanent ? Math.round(product.priceToman * 3.5) : product.priceToman,
      priceFormatted: permanent ? (Math.round(product.priceToman * 3.5)).toLocaleString('fa-IR') : product.priceFormatted,
      permanent: permanent,
      beliValue: product.beliValue,
      qty: 1
    });
  }
  
  saveCart(cart);
  showToast(`«${product.nameFa}» به سبد خرید اضافه شد.`);
  playUiBeep(880, 0.08);
}

function removeFromCart(fruitId, permanent) {
  let cart = getCart();
  cart = cart.filter(item => !(item.id === fruitId && item.permanent === permanent));
  saveCart(cart);
  renderCartDrawer();
}

function updateCartBadge() {
  const cart = getCart();
  const totalCount = cart.reduce((sum, item) => sum + item.qty, 0);
  const badges = document.querySelectorAll('.cart-counter');
  badges.forEach(b => {
    b.textContent = totalCount;
    b.style.display = totalCount > 0 ? 'flex' : 'none';
  });
}

// SVG Generator for Blox Fruits Icons
function getFruitSvg(fruitId) {
  const map = {
    'kitsune': `
      <svg viewBox="0 0 100 100" class="card-fruit-svg">
        <defs>
          <radialGradient id="kitGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stop-color="#38bdf8" />
            <stop offset="70%" stop-color="#8b5cf6" />
            <stop offset="100%" stop-color="#0b0d13" stop-opacity="0" />
          </radialGradient>
        </defs>
        <circle cx="50" cy="50" r="42" fill="url(#kitGlow)" />
        <path d="M50 20 C35 22 25 35 28 52 C30 65 42 75 50 82 C58 75 70 65 72 52 C75 35 65 22 50 20 Z" fill="#1e1b4b" stroke="#38bdf8" stroke-width="2.5"/>
        <!-- Fox Ears -->
        <polygon points="32,28 22,12 40,24" fill="#6366f1" stroke="#38bdf8" stroke-width="1.5" />
        <polygon points="68,28 78,12 60,24" fill="#6366f1" stroke="#38bdf8" stroke-width="1.5" />
        <!-- Fox Eyes -->
        <ellipse cx="40" cy="48" rx="4" ry="2" fill="#38bdf8" transform="rotate(-15 40 48)" />
        <ellipse cx="60" cy="48" rx="4" ry="2" fill="#38bdf8" transform="rotate(15 60 48)" />
        <polygon points="50,56 46,62 54,62" fill="#a855f7" />
        <!-- Spirit Flames -->
        <path d="M50 14 Q52 4 48 0 Q46 6 50 14" fill="#38bdf8" />
        <path d="M22 45 Q12 40 16 52 Q20 50 22 45" fill="#818cf8" />
        <path d="M78 45 Q88 40 84 52 Q80 50 78 45" fill="#818cf8" />
      </svg>`,
    'dragon-west': `
      <svg viewBox="0 0 100 100" class="card-fruit-svg">
        <circle cx="50" cy="50" r="40" fill="rgba(245, 158, 11, 0.2)" />
        <path d="M50 22 C32 25 25 40 28 62 C32 75 45 82 50 85 C55 82 68 75 72 62 C75 40 68 25 50 22 Z" fill="#451a03" stroke="#f59e0b" stroke-width="2.5"/>
        <path d="M30 30 L18 18 L34 26" fill="#b45309" stroke="#fbbf24" stroke-width="1.5" />
        <path d="M70 30 L82 18 L66 26" fill="#b45309" stroke="#fbbf24" stroke-width="1.5" />
        <polygon points="40,50 44,54 38,54" fill="#fef08a" />
        <polygon points="60,50 56,54 62,54" fill="#fef08a" />
        <path d="M42 66 Q50 74 58 66" stroke="#fbbf24" stroke-width="2" fill="none" />
      </svg>`,
    'dragon-east': `
      <svg viewBox="0 0 100 100" class="card-fruit-svg">
        <circle cx="50" cy="50" r="40" fill="rgba(239, 68, 68, 0.2)" />
        <path d="M50 20 C30 25 25 45 28 65 C32 78 45 85 50 88 C55 85 68 78 72 65 C75 45 70 25 50 20 Z" fill="#7f1d1d" stroke="#ef4444" stroke-width="2.5"/>
        <!-- Horns -->
        <path d="M34 26 Q20 15 15 28 Q24 28 34 26" fill="#dc2626" stroke="#fca5a5" stroke-width="1.5"/>
        <path d="M66 26 Q80 15 85 28 Q76 28 66 26" fill="#dc2626" stroke="#fca5a5" stroke-width="1.5"/>
        <ellipse cx="40" cy="52" rx="4" ry="3" fill="#fef08a"/>
        <ellipse cx="60" cy="52" rx="4" ry="3" fill="#fef08a"/>
      </svg>`,
    'dough': `
      <svg viewBox="0 0 100 100" class="card-fruit-svg">
        <circle cx="50" cy="50" r="40" fill="rgba(236, 72, 153, 0.2)" />
        <ellipse cx="50" cy="62" rx="34" ry="24" fill="#831843" stroke="#f472b6" stroke-width="2.5"/>
        <!-- Melting Frosting -->
        <path d="M20 54 Q30 72 40 56 Q50 74 60 55 Q70 70 80 54 C80 40 70 30 50 30 C30 30 20 40 20 54 Z" fill="#fce7f3" stroke="#ec4899" stroke-width="2"/>
        <circle cx="42" cy="46" r="3.5" fill="#831843" />
        <circle cx="58" cy="46" r="3.5" fill="#831843" />
        <!-- Cherry / swirls -->
        <circle cx="50" cy="24" r="7" fill="#ec4899" stroke="#fff" stroke-width="1.5"/>
      </svg>`,
    'buddha': `
      <svg viewBox="0 0 100 100" class="card-fruit-svg">
        <circle cx="50" cy="50" r="42" fill="rgba(251, 191, 36, 0.25)" />
        <!-- Radiant Halo -->
        <circle cx="50" cy="50" r="36" fill="#78350f" stroke="#fbbf24" stroke-width="3" stroke-dasharray="4 2"/>
        <!-- Sitting Statuette outline -->
        <circle cx="50" cy="40" r="12" fill="#fbbf24" />
        <path d="M30 70 C30 55 40 52 50 52 C60 52 70 55 70 70 Z" fill="#d97706" stroke="#fef08a" stroke-width="2"/>
        <ellipse cx="50" cy="74" rx="26" ry="7" fill="#b45309" stroke="#fbbf24" stroke-width="1.5"/>
      </svg>`,
    'portal': `
      <svg viewBox="0 0 100 100" class="card-fruit-svg">
        <circle cx="50" cy="50" r="40" fill="rgba(56, 189, 248, 0.2)" />
        <!-- Vortex Rings -->
        <ellipse cx="50" cy="50" rx="34" ry="34" fill="none" stroke="#0284c7" stroke-width="3"/>
        <ellipse cx="50" cy="50" rx="26" ry="26" fill="none" stroke="#38bdf8" stroke-width="2.5" stroke-dasharray="8 4"/>
        <ellipse cx="50" cy="50" rx="16" ry="16" fill="#082f49" stroke="#7dd3fc" stroke-width="2"/>
        <circle cx="50" cy="50" r="8" fill="#e0f2fe" />
      </svg>`,
    'leopard': `
      <svg viewBox="0 0 100 100" class="card-fruit-svg">
        <rect x="22" y="24" width="56" height="56" rx="14" fill="#854d0e" stroke="#eab308" stroke-width="3"/>
        <!-- Ears -->
        <polygon points="26,24 16,10 36,18" fill="#ca8a04" stroke="#fde047" stroke-width="1.5"/>
        <polygon points="74,24 84,10 64,18" fill="#ca8a04" stroke="#fde047" stroke-width="1.5"/>
        <!-- Spots -->
        <circle cx="36" cy="40" r="3.5" fill="#422006" />
        <circle cx="64" cy="40" r="3.5" fill="#422006" />
        <circle cx="50" cy="62" r="4" fill="#422006" />
        <ellipse cx="40" cy="50" rx="4" ry="2.5" fill="#fef08a" />
        <ellipse cx="60" cy="50" rx="4" ry="2.5" fill="#fef08a" />
      </svg>`
  };

  return map[fruitId] || `
    <svg viewBox="0 0 100 100" class="card-fruit-svg">
      <circle cx="50" cy="50" r="38" fill="rgba(139, 92, 246, 0.2)" stroke="#8b5cf6" stroke-width="2.5"/>
      <path d="M50 20 Q55 35 50 80 Q45 35 50 20" fill="#a855f7" />
      <circle cx="50" cy="50" r="14" fill="#c084fc" />
    </svg>`;
}

// Render Products Grid
function renderProducts(targetContainerId = 'productsGrid', category = 'all', searchTerm = '', inStockOnly = false) {
  const container = document.getElementById(targetContainerId);
  if (!container) return;

  const products = getStoredProducts();
  const filtered = products.filter(p => {
    const matchCat = category === 'all' || p.category === category || (category === 'perm' && p.priceToman > 100000);
    const matchSearch = searchTerm === '' || 
      p.nameFa.toLowerCase().includes(searchTerm.toLowerCase()) || 
      p.nameEn.toLowerCase().includes(searchTerm.toLowerCase()) ||
      p.rarity.toLowerCase().includes(searchTerm.toLowerCase());
    const matchStock = inStockOnly ? p.stock > 0 : true;
    return matchCat && matchSearch && matchStock;
  });

  if (filtered.length === 0) {
    container.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 4rem 1rem;">
        <div style="font-size: 3rem; margin-bottom: 1rem;">🔍</div>
        <h3 style="font-size: 1.25rem; font-weight: 700; color: #fff; margin-bottom: 0.5rem;">میوه‌ای با این مشخصات یافت نشد</h3>
        <p style="color: var(--text-muted); font-size: 0.9rem;">نام میوه یا کلماتی مانند Kitsune، Buddha، دوگ یا اسطوره‌ای را جستجو کنید.</p>
      </div>`;
    return;
  }

  container.innerHTML = filtered.map(p => {
    const rarityClass = p.rarity.toLowerCase() === 'mythical' ? 'rarity-mythical' : 
                         p.rarity.toLowerCase() === 'legendary' ? 'rarity-legendary' : 'rarity-rare';

    // 5-bar demand
    const filledBars = Math.min(5, Math.max(1, Math.round(p.demand / 2)));
    let demandBarsHtml = '';
    for(let i=0; i<5; i++) {
      demandBarsHtml += `<div class="meter-bar ${i < filledBars ? 'filled' : ''}"></div>`;
    }

    return `
      <div class="product-card" data-id="${p.id}">
        <div class="card-top-strip">
          <span class="rarity-badge ${rarityClass}">${p.rarity}</span>
          <div class="demand-meter" title="میزان تقاضای بازی">
            <span>تقاضا ${p.demand}/۱۰</span>
            <div class="meter-bars">${demandBarsHtml}</div>
          </div>
        </div>

        <div class="card-image-box">
          <div class="card-glow-backdrop" style="background: ${p.glowColor};"></div>
          ${getFruitSvg(p.id)}
          <span class="card-stock-pill">موجودی: ${p.stock} عدد</span>
        </div>

        <div class="card-title-fa">${p.nameFa}</div>
        <div class="card-title-en">${p.nameEn}</div>

        <div class="card-metrics-row">
          <span style="color: var(--text-dim);">ارزش ترید (Value):</span>
          <span class="metric-col-val">${p.beliValue} Beli</span>
        </div>

        <div class="card-price-row">
          <div style="font-size: 0.75rem; color: var(--text-muted);">قیمت تحویل آنی:</div>
          <div>
            <span class="price-toman-val">${p.priceFormatted}</span>
            <span class="price-unit">تومان</span>
          </div>
        </div>

        <div class="card-action-btns">
          <button class="btn-primary-glow" onclick="openOrderModal('${p.id}', false)">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path><line x1="3" y1="6" x2="21" y2="6"></line><path d="M16 10a4 4 0 0 1-8 0"></path></svg>
            <span>خرید سریع</span>
          </button>
          <button class="btn-icon-round" title="افزودن به سبد خرید" onclick="addToCart('${p.id}', false)">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg>
          </button>
        </div>
      </div>
    `;
  }).join('');
}

// Standardized Order Status List
const ORDER_STATUSES = {
  AWAITING_PAYMENT: 'Awaiting Payment',
  RECEIPT_SUBMITTED: 'Receipt Submitted',
  UNDER_VERIFICATION: 'Under Verification',
  PAID_PROCESSING: 'Paid / Processing',
  PAYMENT_REJECTED: 'Payment Rejected',
  COMPLETED: 'Completed'
};

// Default Sample Orders
const DEFAULT_ORDERS = [
  {
    id: 'BF-829431',
    fruitId: 'kitsune',
    fruitName: 'میوه کیتسونه (Kitsune Fruit)',
    robloxUser: 'BloxNinja_IR',
    phone: '09121112233',
    sea: 'Sea 3 (Mansion VIP)',
    priceToman: 750000,
    priceFormatted: '۷۵۰,۰۰۰',
    date: '۱۴۰۳/۱۱/۲۸ - ۱۸:۳۲',
    status: 'Receipt Submitted',
    step: 2,
    isPerm: false,
    beliValue: '115,000,000',
    receiptImg: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="400" height="280" viewBox="0 0 400 280"><rect width="400" height="280" fill="%231e293b"/><text x="50%25" y="40%25" fill="%2338bdf8" font-size="20" font-family="sans-serif" font-weight="bold" text-anchor="middle">رسید پرداخت کارت به کارت</text><text x="50%25" y="60%25" fill="%23fcd34d" font-size="16" font-family="sans-serif" text-anchor="middle">مبلغ: 750,000 تومان - پیگیری: 984210</text><text x="50%25" y="75%25" fill="%2394a3b8" font-size="14" font-family="sans-serif" text-anchor="middle">مقصد: 6219-8619-5751-5835 (محمد تنگستانی)</text></svg>',
    receiptDate: '۱۴۰۳/۱۱/۲۸ - ۱۸:۳۵',
    receiptMessage: 'سلام، مبلغ ۷۵۰ هزار تومان از کارت سامان به کارت آقای محمد تنگستانی واریز شد.'
  },
  {
    id: 'BF-829430',
    fruitId: 'buddha',
    fruitName: 'بودا (Permanent Buddha)',
    robloxUser: 'SinaProPirate',
    phone: '09359876543',
    sea: 'Sea 2 (Cafe SafeZone)',
    priceToman: 690000,
    priceFormatted: '۶۹۰,۰۰۰',
    date: '۱۴۰۳/۱۱/۲۸ - ۱۷:۱۵',
    status: 'Paid / Processing',
    step: 3,
    isPerm: true,
    beliValue: '7,000,000',
    receiptImg: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="400" height="280" viewBox="0 0 400 280"><rect width="400" height="280" fill="%231e293b"/><text x="50%25" y="40%25" fill="%234ade80" font-size="20" font-family="sans-serif" font-weight="bold" text-anchor="middle">تایید واریز رسمی شتاب</text><text x="50%25" y="60%25" fill="%23fcd34d" font-size="16" font-family="sans-serif" text-anchor="middle">مبلغ: 690,000 تومان - تایید شده</text></svg>',
    receiptDate: '۱۴۰۳/۱۱/۲۸ - ۱۷:۱۸',
    receiptMessage: 'واریز اینترنتی انجام شد.'
  },
  {
    id: 'BF-829429',
    fruitId: 'dough',
    fruitName: 'Dough Fruit (Awakened)',
    robloxUser: 'KianBloxHunter',
    phone: '09194445566',
    sea: 'Sea 3 (Mansion VIP)',
    priceToman: 185000,
    priceFormatted: '۱۸۵,۰۰۰',
    date: '۱۴۰۳/۱۱/۲۸ - ۱۶:۰۲',
    status: 'Completed',
    step: 4,
    isPerm: false,
    beliValue: '25,000,000',
    receiptImg: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="400" height="280" viewBox="0 0 400 280"><rect width="400" height="280" fill="%231e293b"/><text x="50%25" y="50%25" fill="%2338bdf8" font-size="18" font-family="sans-serif" text-anchor="middle">تراکنش کامل شد</text></svg>',
    receiptDate: '۱۴۰۳/۱۱/۲۸ - ۱۶:۰۵',
    receiptMessage: 'میوه تحویل شد با تشکر.'
  }
];

// Default Sample Tickets
const DEFAULT_TICKETS = [
  {
    id: 'TK-48209',
    orderId: 'BF-829431',
    customerName: 'آرمین نیک‌پور',
    customerRoblox: 'BloxNinja_IR',
    customerPhone: '09121112233',
    subject: 'ارسال فیش واریز برای سفارش #BF-829431 (میوه کیتسونه)',
    status: 'Receipt Submitted',
    date: '۱۴۰۳/۱۱/۲۸ - ۱۸:۳۵',
    messages: [
      {
        sender: 'customer',
        author: 'BloxNinja_IR',
        text: 'سلام وقت بخیر، تصویر فیش واریز کارت به کارت پیوست گردید. مبلغ ۷۵۰,۰۰۰ تومان به کارت محمد تنگستانی انتقال یافت. لطفاً تایید فرمایید.',
        receiptImg: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="400" height="280" viewBox="0 0 400 280"><rect width="400" height="280" fill="%231e293b"/><text x="50%25" y="40%25" fill="%2338bdf8" font-size="20" font-family="sans-serif" font-weight="bold" text-anchor="middle">رسید پرداخت کارت به کارت</text><text x="50%25" y="60%25" fill="%23fcd34d" font-size="16" font-family="sans-serif" text-anchor="middle">مبلغ: 750,000 تومان - پیگیری: 984210</text><text x="50%25" y="75%25" fill="%2394a3b8" font-size="14" font-family="sans-serif" text-anchor="middle">مقصد: 6219-8619-5751-5835 (محمد تنگستانی)</text></svg>',
        date: '۱۴۰۳/۱۱/۲۸ - ۱۸:۳۵'
      }
    ]
  }
];

function getStoredOrders() {
  const data = localStorage.getItem('blackfruit_orders');
  if (data) {
    try {
      const parsed = JSON.parse(data);
      if (Array.isArray(parsed) && parsed.length > 0) return parsed;
    } catch(e) {}
  }
  localStorage.setItem('blackfruit_orders', JSON.stringify(DEFAULT_ORDERS));
  return DEFAULT_ORDERS;
}

function saveOrdersList(orders) {
  localStorage.setItem('blackfruit_orders', JSON.stringify(orders));
}

function saveNewOrder(order) {
  const orders = getStoredOrders();
  // Avoid duplicate ID
  const existingIdx = orders.findIndex(o => o.id === order.id);
  if (existingIdx >= 0) {
    orders[existingIdx] = order;
  } else {
    orders.unshift(order);
  }
  saveOrdersList(orders);
}

function updateOrderStatus(orderId, newStatus, reason = '', adminReply = '') {
  const orders = getStoredOrders();
  const order = orders.find(o => o.id === orderId);
  if (!order) return null;

  order.status = newStatus;
  if (reason) order.adminReason = reason;
  if (adminReply) order.adminReply = adminReply;
  order.lastUpdated = new Date().toLocaleString('fa-IR');

  // Step mapping based on status
  if (newStatus === 'Awaiting Payment') order.step = 1;
  else if (newStatus === 'Receipt Submitted' || newStatus === 'Under Verification') order.step = 2;
  else if (newStatus === 'Paid / Processing') order.step = 3;
  else if (newStatus === 'Completed') order.step = 4;
  else if (newStatus === 'Payment Rejected') order.step = 1; // back to payment or rejected

  saveOrdersList(orders);

  // Synchronize associated tickets
  const tickets = getStoredTickets();
  const ticket = tickets.find(t => t.orderId === orderId);
  if (ticket) {
    ticket.status = newStatus;
    if (adminReply || reason) {
      ticket.messages.push({
        sender: 'admin',
        author: 'پشتیبانی بلک‌فروت (Admin Verification)',
        text: adminReply || `وضعیت سفارش شما به «${newStatus}» تغییر یافت. توضیحات: ${reason}`,
        date: new Date().toLocaleString('fa-IR')
      });
    }
    saveTicketsList(tickets);
  }

  return order;
}

function getStoredTickets() {
  const data = localStorage.getItem('blackfruit_tickets');
  if (data) {
    try {
      const parsed = JSON.parse(data);
      if (Array.isArray(parsed) && parsed.length > 0) return parsed;
    } catch(e) {}
  }
  localStorage.setItem('blackfruit_tickets', JSON.stringify(DEFAULT_TICKETS));
  return DEFAULT_TICKETS;
}

function saveTicketsList(tickets) {
  localStorage.setItem('blackfruit_tickets', JSON.stringify(tickets));
}

// Customer Session Identification (Requirement 22)
function getCustomerSessionUser() {
  return sessionStorage.getItem('bf_customer_roblox') || localStorage.getItem('bf_customer_roblox') || '';
}

function setCustomerSessionUser(robloxUser) {
  if (robloxUser) {
    sessionStorage.setItem('bf_customer_roblox', robloxUser);
    localStorage.setItem('bf_customer_roblox', robloxUser);
  }
}

// Filter orders for the current customer (Requirement 22)
function getCustomerOrders() {
  const allOrders = getStoredOrders();
  const currentRoblox = getCustomerSessionUser().toLowerCase();
  const currentOrderId = sessionStorage.getItem('bf_current_customer_order');

  if (currentRoblox) {
    const filtered = allOrders.filter(o => 
      (o.robloxUser && o.robloxUser.toLowerCase() === currentRoblox) || 
      (currentOrderId && o.id === currentOrderId)
    );
    if (filtered.length > 0) return filtered;
  }
  if (currentOrderId) {
    const matched = allOrders.filter(o => o.id === currentOrderId);
    if (matched.length > 0) return matched;
  }
  // Return recent default customer orders if no session yet
  return allOrders.slice(0, 2);
}

// Filter tickets for current customer (Requirement 22)
function getCustomerTickets() {
  const allTickets = getStoredTickets();
  const currentRoblox = getCustomerSessionUser().toLowerCase();
  const currentOrderId = sessionStorage.getItem('bf_current_customer_order');

  if (currentRoblox) {
    const filtered = allTickets.filter(t => 
      (t.customerRoblox && t.customerRoblox.toLowerCase() === currentRoblox) ||
      (currentOrderId && t.orderId === currentOrderId)
    );
    if (filtered.length > 0) return filtered;
  }
  if (currentOrderId) {
    const matched = allTickets.filter(t => t.orderId === currentOrderId);
    if (matched.length > 0) return matched;
  }
  return allTickets.slice(0, 1);
}

// Status Badges & Translations (Requirement 16)
function getStatusBadgeHtml(status) {
  const configs = {
    'Awaiting Payment': {
      class: 'status-awaiting-payment',
      faText: 'در انتظار پرداخت',
      icon: '⏳'
    },
    'Receipt Submitted': {
      class: 'status-receipt-submitted',
      faText: 'فیش ارسال شده',
      icon: '📷'
    },
    'Under Verification': {
      class: 'status-under-verification',
      faText: 'در حال بررسی توسط ادمین',
      icon: '🔍'
    },
    'Paid / Processing': {
      class: 'status-paid-processing',
      faText: 'پرداخت تایید شد / در حال پردازش',
      icon: '✓'
    },
    'Payment Rejected': {
      class: 'status-payment-rejected',
      faText: 'رد پرداخت',
      icon: '✕'
    },
    'Completed': {
      class: 'status-completed',
      faText: 'تحویل کامل شد',
      icon: '🎉'
    }
  };

  const conf = configs[status] || configs['Awaiting Payment'];
  return `<span class="status-pill ${conf.class}">${conf.icon} ${conf.faText} (${status})</span>`;
}

// Order & Checkout Modal Logic
let currentSelectedFruit = null;
function openOrderModal(fruitId, isPermanent = false) {
  const products = getStoredProducts();
  const product = products.find(p => p.id === fruitId);
  if (!product) return;
  currentSelectedFruit = product;

  const modal = document.getElementById('orderModal');
  if (!modal) return;

  const titleEl = document.getElementById('orderModalFruitTitle');
  const priceEl = document.getElementById('orderModalPrice');
  const beliEl = document.getElementById('orderModalBeli');
  const descEl = document.getElementById('orderModalDesc');
  const permCheckbox = document.getElementById('orderModalPermCheck');

  if (titleEl) titleEl.textContent = `${product.nameFa} (${product.nameEn})`;
  if (beliEl) beliEl.textContent = `${product.beliValue} Beli`;
  if (descEl) descEl.textContent = product.desc;
  
  if (permCheckbox) {
    permCheckbox.checked = isPermanent;
    permCheckbox.onchange = () => updateOrderModalPrice();
  }

  updateOrderModalPrice();
  modal.classList.add('active');
  playUiBeep(640, 0.06);
}

function updateOrderModalPrice() {
  if (!currentSelectedFruit) return;
  const permCheckbox = document.getElementById('orderModalPermCheck');
  const isPerm = permCheckbox ? permCheckbox.checked : false;
  const priceEl = document.getElementById('orderModalPrice');
  
  const finalPrice = isPerm ? Math.round(currentSelectedFruit.priceToman * 3.5) : currentSelectedFruit.priceToman;
  if (priceEl) priceEl.textContent = `${finalPrice.toLocaleString('fa-IR')} تومان`;
}

function closeOrderModal() {
  const modal = document.getElementById('orderModal');
  if (modal) modal.classList.remove('active');
}

// Process Purchase: Card-to-Card Payment Flow or Telegram (Requirements 1, 2, 3, 16)
function processOrder(method = 'card') {
  if (!currentSelectedFruit) return;

  const robloxUser = document.getElementById('orderRobloxUser')?.value.trim();
  const phone = document.getElementById('orderPhone')?.value.trim();
  const sea = document.getElementById('orderSea')?.value || 'Sea 3 (Mansion VIP)';
  const isPerm = document.getElementById('orderModalPermCheck')?.checked || false;

  if (!robloxUser) {
    showToast('لطفاً آیدی روبلاکس (Roblox Username) خود را وارد کنید.');
    document.getElementById('orderRobloxUser')?.focus();
    return;
  }

  const finalPrice = isPerm ? Math.round(currentSelectedFruit.priceToman * 3.5) : currentSelectedFruit.priceToman;
  const orderId = 'BF-' + Math.floor(100000 + Math.random() * 900000);

  if (method === 'telegram') {
    // Generate Pre-filled Telegram Message
    const textMsg = `سلام پشتیبانی بلک‌فروت، قصد خرید میوه دارم:
🛒 میوه: ${currentSelectedFruit.nameFa} (${currentSelectedFruit.nameEn})
⚡ نوع: ${isPerm ? 'دائمی (Permanent)' : 'فیزیکی (Physical Storage)'}
🎮 آیدی روبلاکس: @${robloxUser}
🌊 دریا و سرور: ${sea}
💰 مبلغ فاکتور: ${finalPrice.toLocaleString('fa-IR')} تومان
📱 تماس: ${phone || 'ثبت نشده'}
🔖 شناسه پیش‌فاکتور: #${orderId}`;

    const tgUrl = `https://t.me/blackfruit_support?text=${encodeURIComponent(textMsg)}`;
    window.location.href = tgUrl;
    closeOrderModal();
    return;
  }

  // Create order with Initial Status: "Awaiting Payment" (Requirement 16)
  const newOrder = {
    id: orderId,
    fruitId: currentSelectedFruit.id,
    fruitName: `${currentSelectedFruit.nameFa} (${currentSelectedFruit.nameEn})`,
    robloxUser: robloxUser,
    phone: phone,
    sea: sea,
    priceToman: finalPrice,
    priceFormatted: finalPrice.toLocaleString('fa-IR'),
    date: new Date().toLocaleString('fa-IR'),
    status: 'Awaiting Payment', // Requirement 16
    step: 1, // Step 1: Awaiting Payment
    isPerm: isPerm,
    beliValue: currentSelectedFruit.beliValue,
    receiptImg: null,
    receiptDate: null,
    receiptMessage: ''
  };

  // Save to active orders
  saveNewOrder(newOrder);

  // Remember as customer's active order & roblox user session
  sessionStorage.setItem('bf_current_customer_order', orderId);
  setCustomerSessionUser(robloxUser);

  closeOrderModal();
  showToast(`سفارش شما با شناسه #${orderId} ثبت شد! در حال انتقال به صفحه پرداخت و انتقال کارت به کارت...`);

  // Redirect to Payment & Receipt Upload page (Requirement 1)
  setTimeout(() => {
    window.location.href = `payment.html?orderId=${orderId}`;
  }, 900);
}

// Blox Values Calculator Logic
function setupCalculator() {
  const calcBtn = document.getElementById('calcCalculateBtn');
  if (!calcBtn) return;

  calcBtn.addEventListener('click', () => {
    const myFruitId = document.getElementById('calcMyFruit')?.value;
    const theirFruitId = document.getElementById('calcTheirFruit')?.value;

    const products = getStoredProducts();
    const myFruit = products.find(p => p.id === myFruitId) || products[0];
    const theirFruit = products.find(p => p.id === theirFruitId) || products[1];

    const diff = theirFruit.beliNum - myFruit.beliNum;
    const percent = Math.round((diff / myFruit.beliNum) * 100);

    const resultBox = document.getElementById('calcResultBox');
    if (!resultBox) return;

    let verdict = 'FAIR (F)';
    let color = '#38bdf8';
    if (diff > 0) {
      verdict = `WIN (W) +${Math.abs(diff).toLocaleString()} Beli (+${percent}%)`;
      color = '#10b981';
    } else if (diff < 0) {
      verdict = `LOSE (L) -${Math.abs(diff).toLocaleString()} Beli (${percent}%)`;
      color = '#ef4444';
    } else {
      verdict = 'FAIR (منصفانه و برابر)';
    }

    resultBox.innerHTML = `
      <div style="background: rgba(0,0,0,0.4); border: 1px solid ${color}; border-radius: 8px; padding: 1rem; text-align: center;">
        <div style="font-size: 0.8rem; color: var(--text-muted); margin-bottom: 0.3rem;">نتیجه تحلیل ارزش سیستم Blox Values:</div>
        <div style="font-size: 1.25rem; font-weight: 800; color: ${color}; font-family: var(--font-en);">${verdict}</div>
        <div style="font-size: 0.75rem; color: var(--text-dim); margin-top: 0.4rem;">
          ارزش شما: ${myFruit.beliValue} | ارزش دریافتی: ${theirFruit.beliValue}
        </div>
      </div>
    `;
    playUiBeep(520, 0.08);
  });
}

// Cart Drawer Renderer
function renderCartDrawer() {
  const container = document.getElementById('cartDrawerItems');
  const subtotalEl = document.getElementById('cartDrawerSubtotal');
  if (!container) return;

  const cart = getCart();
  if (cart.length === 0) {
    container.innerHTML = `
      <div style="text-align: center; padding: 3rem 1rem; color: var(--text-muted);">
        <div style="font-size: 2.5rem; margin-bottom: 0.8rem;">🛒</div>
        <div>سبد خرید شما خالی است.</div>
      </div>`;
    if (subtotalEl) subtotalEl.textContent = '۰ تومان';
    return;
  }

  let total = 0;
  container.innerHTML = cart.map(item => {
    total += item.priceToman * item.qty;
    return `
      <div style="display: flex; align-items: center; justify-content: space-between; padding: 0.75rem 0; border-bottom: 1px solid var(--border-subtle);">
        <div>
          <div style="font-weight: 700; font-size: 0.9rem; color: #fff;">${item.nameFa} ${item.permanent ? '(دائمی)' : ''}</div>
          <div style="font-size: 0.75rem; color: var(--text-dim);">${item.qty} × ${item.priceFormatted} تومان</div>
        </div>
        <div style="display: flex; align-items: center; gap: 0.5rem;">
          <button class="btn-icon-round" style="width: 28px; height: 28px;" onclick="removeFromCart('${item.id}', ${item.permanent})">✕</button>
        </div>
      </div>
    `;
  }).join('');

  if (subtotalEl) subtotalEl.textContent = `${total.toLocaleString('fa-IR')} تومان`;
}

function toggleCartDrawer(open = null) {
  const drawer = document.getElementById('cartDrawerModal');
  if (!drawer) return;
  if (open === true) {
    drawer.classList.add('active');
    renderCartDrawer();
  } else if (open === false) {
    drawer.classList.remove('active');
  } else {
    drawer.classList.toggle('active');
    if (drawer.classList.contains('active')) renderCartDrawer();
  }
}

// Toast Alert
function showToast(message) {
  let toast = document.getElementById('appToast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'appToast';
    toast.className = 'toast-box';
    document.body.appendChild(toast);
  }
  toast.innerHTML = `
    <span style="color: var(--cyan); font-size: 1.1rem;">⚡</span>
    <span>${message}</span>
  `;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 3500);
}

// Subtle Web Audio UI Synth
function playUiBeep(freq = 600, duration = 0.05) {
  try {
    const ctx = new (window.AudioContext || window.webkitAudioContext)();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.frequency.setValueAtTime(freq, ctx.currentTime);
    gain.gain.setValueAtTime(0.04, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + duration);
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.start();
    osc.stop(ctx.currentTime + duration);
  } catch(e) {}
}

// Global Init on DOM Ready
document.addEventListener('DOMContentLoaded', () => {
  updateCartBadge();
  setupCalculator();

  // FAQ Accordions
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    const q = item.querySelector('.faq-question');
    if (q) {
      q.addEventListener('click', () => {
        const isOpen = item.classList.contains('open');
        faqItems.forEach(i => i.classList.remove('open'));
        if (!isOpen) item.classList.add('open');
      });
    }
  });

  // Filter Pills click handler
  const pills = document.querySelectorAll('.filter-pill');
  pills.forEach(pill => {
    pill.addEventListener('click', () => {
      pills.forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
      const cat = pill.getAttribute('data-cat') || 'all';
      const searchInput = document.getElementById('catalogSearchInput');
      const term = searchInput ? searchInput.value.trim() : '';
      renderProducts('productsGrid', cat, term);
    });
  });

  // Catalog search input
  const searchInput = document.getElementById('catalogSearchInput');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      const activePill = document.querySelector('.filter-pill.active');
      const cat = activePill ? (activePill.getAttribute('data-cat') || 'all') : 'all';
      renderProducts('productsGrid', cat, e.target.value.trim());
    });
  }

  // Ctrl+K shortcut to focus search
  window.addEventListener('keydown', (e) => {
    if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
      e.preventDefault();
      const s = document.getElementById('navSearchInput') || document.getElementById('catalogSearchInput');
      if (s) s.focus();
    }
  });

  // Initial render of products if container exists
  if (document.getElementById('productsGrid')) {
    renderProducts('productsGrid', 'all');
  }
});
