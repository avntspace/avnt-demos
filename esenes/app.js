const SHIPPING_THRESHOLD = 20000;
const CART_HOLD_MS = 5 * 60 * 1000;

const products = {
  whiteMules: {
    key: "whiteMules",
    title: "Eyeball Mules - White",
    handle: "eyeball-mules-white-black-vip-preorder",
    url: "https://esenesworldwide.com/products/eyeball-mules-white-black-vip-preorder",
    price: 12900,
    paymentLines: [
      "or 5 payments of $25.80 USD with Sezzle",
      "Pay in 4 interest-free installments of $32.25 with Sezzle"
    ],
    media: [
      "https://cdn.shopify.com/s/files/1/0123/9891/9744/files/new_white_top_d4d2e710-359a-4127-bf58-95855970c7cb.png?v=1775322988",
      "https://cdn.shopify.com/s/files/1/0123/9891/9744/files/84441714468585_.piccopy_9c041fc0-b6c9-4dfe-a1d2-af666004d701.jpg?v=1775322988",
      "https://cdn.shopify.com/s/files/1/0123/9891/9744/files/new_white_3q.jpg?v=1775322988",
      "https://cdn.shopify.com/s/files/1/0123/9891/9744/files/eyeball_concrete.jpg?v=1775322988",
      "https://cdn.shopify.com/s/files/1/0123/9891/9744/files/Furryeyes_white_62d268dc-41b9-4676-8c87-5c3e67ea3063.jpg?v=1775322988",
      "https://cdn.shopify.com/s/files/1/0123/9891/9744/files/EYEBALL_WB_-_SIDE_598cb5b3-8b4d-48dc-93b8-08ec1613fecc.jpg?v=1775322988",
      "https://cdn.shopify.com/s/files/1/0123/9891/9744/files/EYEBALL_WB_-_3Q.jpg?v=1775322988"
    ],
    details: [
      "PREORDER",
      "US Men's sizing (whole sizing only 4-14 US Men's)",
      "For women sizing, order one or two sizes below your normal US women's size",
      "True to size. If you are between sizes, size up",
      "Ships in late June/July",
      "26 unique glass eyes in total",
      "White hair on hide",
      "Vegan tan leather lining and insole",
      "Final sale"
    ],
    sizes: [
      { label: "4", inventory: 11, policy: "deny" },
      { label: "5", inventory: 14, policy: "deny" },
      { label: "6", inventory: 16, policy: "deny" },
      { label: "7", inventory: 12, policy: "deny" },
      { label: "8", inventory: 9, policy: "deny" },
      { label: "9", inventory: 13, policy: "deny" },
      { label: "10", inventory: 12, policy: "deny" },
      { label: "11", inventory: 8, policy: "deny" },
      { label: "12", inventory: 6, policy: "deny" },
      { label: "13", inventory: 5, policy: "deny" },
      { label: "14", inventory: 4, policy: "deny" }
    ]
  },
  blackMules: {
    key: "blackMules",
    title: "Eyeball Mules - Black",
    handle: "eyeball-mules-black",
    url: "https://esenesworldwide.com/products/eyeball-mules-black",
    price: 12900,
    paymentLines: [
      "or 5 payments of $25.80 USD with Sezzle",
      "Pay in 4 interest-free installments of $32.25 with Sezzle"
    ],
    media: [
      "https://cdn.shopify.com/s/files/1/0123/9891/9744/files/unnamed_11.jpg?v=1774491356",
      "https://cdn.shopify.com/s/files/1/0123/9891/9744/files/8.png?v=1774491356",
      "https://cdn.shopify.com/s/files/1/0123/9891/9744/files/2_bfe91d80-00dc-4a29-8c7f-048100d5d65e.jpg?v=1774491356",
      "https://cdn.shopify.com/s/files/1/0123/9891/9744/files/5.png?v=1774491356",
      "https://cdn.shopify.com/s/files/1/0123/9891/9744/files/1.png?v=1774491356",
      "https://cdn.shopify.com/s/files/1/0123/9891/9744/files/eyeballsideblack_dfe965cf-c872-4af5-b9c4-660b3c7f898e.jpg?v=1774491356",
      "https://cdn.shopify.com/s/files/1/0123/9891/9744/files/eyeballtopblack_83af43e3-fcaf-4776-88b2-a12fb34720f5.jpg?v=1774491356"
    ],
    details: [
      "PRE-ORDER",
      "US Men's sizing (whole sizing only 4-14 US Men's)",
      "For women sizing, order one or two sizes below your normal US women's size",
      "True to size. If you are between sizes, size up",
      "Ships in late June/July",
      "26 unique glass eyes in total",
      "Black hair on hide",
      "Vegan black leather lining and insole",
      "Final sale"
    ],
    sizes: [
      { label: "4", inventory: 12, policy: "deny" },
      { label: "5", inventory: 13, policy: "deny" },
      { label: "6", inventory: 14, policy: "deny" },
      { label: "7", inventory: 11, policy: "deny" },
      { label: "8", inventory: 9, policy: "deny" },
      { label: "9", inventory: 10, policy: "deny" },
      { label: "10", inventory: 8, policy: "deny" },
      { label: "11", inventory: 7, policy: "deny" },
      { label: "12", inventory: 6, policy: "deny" },
      { label: "13", inventory: 5, policy: "deny" },
      { label: "14", inventory: 4, policy: "deny" }
    ]
  },
  washedJacket: {
    key: "washedJacket",
    title: "Type II Denim Jacket - Washed Blue",
    handle: "type-ii-denim-jacket-black-copy",
    url: "https://esenesworldwide.com/products/type-ii-denim-jacket-black-copy",
    price: 15900,
    description: "17oz denim jacket in washed blue.",
    media: [
      "https://cdn.shopify.com/s/files/1/0123/9891/9744/files/26.png?v=1742258694",
      "https://cdn.shopify.com/s/files/1/0123/9891/9744/files/27.png?v=1742258694",
      "https://cdn.shopify.com/s/files/1/0123/9891/9744/files/ConvertOut-Resized-DSC09868.jpg?v=1768952221"
    ],
    sizes: [
      { label: "XS", inventory: 12, policy: "deny" },
      { label: "S", inventory: 13, policy: "deny" },
      { label: "M", inventory: 9, policy: "deny" },
      { label: "L", inventory: 11, policy: "deny" },
      { label: "XL", inventory: 8, policy: "deny" },
      { label: "XXL", inventory: 0, policy: "deny", disabled: true },
      { label: "XXXL", inventory: 0, policy: "deny", disabled: true }
    ]
  },
  blackJacket: {
    key: "blackJacket",
    title: "Type II Denim Jacket - Black",
    handle: "type-ii-denim-jacket-black",
    url: "https://esenesworldwide.com/products/type-ii-denim-jacket-black",
    price: 15900,
    description: "17oz denim jacket in black.",
    media: [
      "https://cdn.shopify.com/s/files/1/0123/9891/9744/files/28.png?v=1742273054",
      "https://cdn.shopify.com/s/files/1/0123/9891/9744/files/29.png?v=1742273054",
      "https://cdn.shopify.com/s/files/1/0123/9891/9744/files/L1200056_1.jpg?v=1745520276"
    ],
    sizes: [
      { label: "XS", inventory: 12, policy: "deny" },
      { label: "S", inventory: 13, policy: "deny" },
      { label: "M", inventory: 10, policy: "deny" },
      { label: "L", inventory: 0, policy: "deny", disabled: true },
      { label: "XL", inventory: 8, policy: "deny" },
      { label: "XXL", inventory: 7, policy: "deny" },
      { label: "XXXL", inventory: 0, policy: "deny", disabled: true }
    ]
  },
  washedPants: {
    key: "washedPants",
    title: "Denim Work Pant - Washed Blue",
    handle: "denim-work-pants-washed-blue",
    url: "https://esenesworldwide.com/products/denim-work-pants-washed-blue",
    price: 13900,
    description: "Relaxed work pant in washed blue denim.",
    media: [
      "https://cdn.shopify.com/s/files/1/0123/9891/9744/files/18.png?v=1742258578",
      "https://cdn.shopify.com/s/files/1/0123/9891/9744/files/19.png?v=1742258578",
      "https://cdn.shopify.com/s/files/1/0123/9891/9744/files/5_10cb3b39-37f8-4469-8c2f-7000808889aa.png?v=1744672046"
    ],
    sizes: [
      { label: "26", inventory: 0, policy: "deny", disabled: true },
      { label: "28", inventory: 0, policy: "deny", disabled: true },
      { label: "30", inventory: 12, policy: "deny" },
      { label: "32", inventory: 9, policy: "deny" },
      { label: "34", inventory: 8, policy: "deny" },
      { label: "36", inventory: 10, policy: "deny" },
      { label: "38", inventory: 12, policy: "deny" },
      { label: "40", inventory: 8, policy: "deny" }
    ]
  },
  blackPants: {
    key: "blackPants",
    title: "Denim Work Pant - Black",
    handle: "denim-work-pants-black",
    url: "https://esenesworldwide.com/products/denim-work-pants-black",
    price: 13900,
    description: "Relaxed work pant in black denim.",
    media: [
      "https://cdn.shopify.com/s/files/1/0123/9891/9744/files/20.png?v=1744672001",
      "https://cdn.shopify.com/s/files/1/0123/9891/9744/files/21.png?v=1744672001",
      "https://cdn.shopify.com/s/files/1/0123/9891/9744/files/8_fcf060c1-d02d-4b18-bad5-076743146c6e.png?v=1744672001"
    ],
    sizes: [
      { label: "26", inventory: 12, policy: "deny" },
      { label: "28", inventory: 14, policy: "deny" },
      { label: "30", inventory: 11, policy: "deny" },
      { label: "32", inventory: 0, policy: "deny", disabled: true },
      { label: "34", inventory: 0, policy: "deny", disabled: true },
      { label: "36", inventory: 7, policy: "deny" },
      { label: "38", inventory: 8, policy: "deny" },
      { label: "40", inventory: 10, policy: "deny" }
    ]
  },
  brownBelt: {
    key: "brownBelt",
    title: "Eyeball Belt - Brown Cow Print",
    handle: "cow-belt-brown",
    url: "https://esenesworldwide.com/products/cow-belt-brown",
    price: 8900,
    description: "Hair-on-hide belt with brown cow print finish.",
    media: [
      "https://cdn.shopify.com/s/files/1/0123/9891/9744/files/738BCEE8-4573-46D2-BD08-0E569F9F37BD.jpg?v=1755389327",
      "https://cdn.shopify.com/s/files/1/0123/9891/9744/files/84655FC3-8C55-4063-9047-833103A080C1.jpg?v=1755389326"
    ],
    sizes: [
      { label: "24-28", inventory: 0, policy: "deny", disabled: true },
      { label: "26-30", inventory: 0, policy: "deny", disabled: true },
      { label: "28-32", inventory: 8, policy: "deny" },
      { label: "30-34", inventory: 0, policy: "deny", disabled: true },
      { label: "32-36", inventory: 0, policy: "deny", disabled: true },
      { label: "34-38", inventory: 0, policy: "deny", disabled: true },
      { label: "36-40", inventory: 0, policy: "deny", disabled: true }
    ]
  },
  blackBelt: {
    key: "blackBelt",
    title: "Eyeball Belt - Black",
    handle: "eyeball-belt-black",
    url: "https://esenesworldwide.com/products/eyeball-belt-black",
    price: 8900,
    description: "Hair-on-hide belt with hand placed glass eyeballs.",
    media: [
      "https://cdn.shopify.com/s/files/1/0123/9891/9744/files/DSC09204.jpg?v=1751583665",
      "https://cdn.shopify.com/s/files/1/0123/9891/9744/files/DSC09194.jpg?v=1751583665"
    ],
    sizes: [
      { label: "24-28", inventory: 0, policy: "deny", disabled: true },
      { label: "26-30", inventory: 6, policy: "deny" },
      { label: "28-32", inventory: 8, policy: "deny" },
      { label: "30-34", inventory: 7, policy: "deny" },
      { label: "32-36", inventory: 5, policy: "deny" },
      { label: "34-38", inventory: 0, policy: "deny", disabled: true },
      { label: "36-40", inventory: 0, policy: "deny", disabled: true }
    ]
  }
};

const stories = [
  {
    key: "white",
    label: "White mule story",
    mainKey: "whiteMules",
    defaultSize: "8",
    fitTitle: "Build the light fit.",
    fitCopy: "White mules with washed blue denim and the brown cow print belt.",
    companions: [
      { key: "washedJacket", recommendedSize: "M" },
      { key: "washedPants", recommendedSize: "32" },
      { key: "brownBelt", recommendedSize: "28-32" }
    ]
  },
  {
    key: "black",
    label: "Black mule story",
    mainKey: "blackMules",
    defaultSize: "8",
    fitTitle: "Build the dark fit.",
    fitCopy: "Black mules with black denim and the black eyeball belt.",
    companions: [
      { key: "blackJacket", recommendedSize: "M" },
      { key: "blackPants", recommendedSize: "30" },
      { key: "blackBelt", recommendedSize: "30-34" }
    ]
  }
];

const state = {
  storyKey: stories[0].key,
  selectedMainSize: stories[0].defaultSize,
  selectedImage: 0,
  mainQuantity: 1,
  cart: [],
  holdExpiresAt: null
};

const storyPicker = document.getElementById("story-picker");
const desktopMediaStack = document.getElementById("desktop-media-stack");
const heroViewport = document.getElementById("hero-viewport");
const heroTrack = document.getElementById("hero-track");
const mediaCounter = document.getElementById("media-counter");
const mediaPrev = document.getElementById("media-prev");
const mediaNext = document.getElementById("media-next");
const productTitle = document.getElementById("product-title");
const productPrice = document.getElementById("product-price");
const paymentCopy = document.getElementById("payment-copy");
const paymentCopySecondary = document.getElementById("payment-copy-secondary");
const mainSizeSelect = document.getElementById("main-size-select");
const mainQtyValue = document.getElementById("main-qty-value");
const pdpLowStockCopy = document.getElementById("pdp-low-stock-copy");
const fitTitle = document.getElementById("fit-title");
const fitCopy = document.getElementById("fit-copy");
const fitTeaserItems = document.getElementById("fit-teaser-items");
const detailsList = document.getElementById("details-list");
const fullLookTitle = document.getElementById("full-look-title");
const lookGrid = document.getElementById("look-grid");
const bagCount = document.getElementById("bag-count");
const cartCount = document.getElementById("cart-count");
const shippingStatus = document.getElementById("shipping-status");
const shippingFill = document.getElementById("shipping-fill");
const cartBody = document.getElementById("cart-body");
const cartTotal = document.getElementById("cart-total");
const cartOutcome = document.getElementById("cart-outcome");
const bagTrigger = document.getElementById("bag-trigger");
const cartDrawer = document.getElementById("cart-drawer");
const cartOverlay = document.getElementById("cart-overlay");
const cartClose = document.getElementById("cart-close");
const cartHold = document.getElementById("cart-hold");
const cartHoldCopy = document.getElementById("cart-hold-copy");
const floatingHold = document.getElementById("floating-hold");
const floatingHoldCopy = document.getElementById("floating-hold-copy");
const addMainToBag = document.getElementById("add-main-to-bag");
const addMainToBagMobile = document.getElementById("add-main-to-bag-mobile");

let holdIntervalId = null;
let heroScrollFrame = null;

document.getElementById("scroll-fit").addEventListener("click", () => {
  document.getElementById("full-look").scrollIntoView({ behavior: "smooth", block: "start" });
});

mainSizeSelect.addEventListener("change", (event) => {
  state.selectedMainSize = event.target.value;
  state.mainQuantity = 1;
  renderPdp();
});

document.getElementById("main-qty-dec").addEventListener("click", () => {
  state.mainQuantity = Math.max(1, state.mainQuantity - 1);
  mainQtyValue.textContent = String(state.mainQuantity);
});

document.getElementById("main-qty-inc").addEventListener("click", () => {
  state.mainQuantity += 1;
  mainQtyValue.textContent = String(state.mainQuantity);
});

addMainToBag.addEventListener("click", () => addMainProductToCart());
addMainToBagMobile.addEventListener("click", () => addMainProductToCart());

mediaPrev.addEventListener("click", () => setMediaIndex(state.selectedImage - 1));
mediaNext.addEventListener("click", () => setMediaIndex(state.selectedImage + 1));

bagTrigger.addEventListener("click", () => {
  if (cartDrawer.classList.contains("is-open")) closeCart();
  else openCart();
});

cartClose.addEventListener("click", closeCart);
cartOverlay.addEventListener("click", closeCart);

heroViewport.addEventListener("scroll", () => {
  if (window.innerWidth > 780 || heroScrollFrame) return;
  heroScrollFrame = window.requestAnimationFrame(() => {
    const nextIndex = Math.round(heroViewport.scrollLeft / Math.max(1, heroViewport.clientWidth));
    if (nextIndex !== state.selectedImage) {
      state.selectedImage = nextIndex;
      updateMediaUI();
    }
    heroScrollFrame = null;
  });
});

window.addEventListener("resize", () => {
  syncHeroViewport("auto");
});

function getCurrentStory() {
  return stories.find((story) => story.key === state.storyKey);
}

function getMainProduct() {
  return products[getCurrentStory().mainKey];
}

function getProductSize(product, label) {
  return product.sizes.find((size) => size.label === label);
}

function formatMoney(cents) {
  return `$${(cents / 100).toFixed(2)} USD`;
}

function formatCompactMoney(cents) {
  return `$${(cents / 100).toFixed(2)}`;
}

function formatHoldTime(msRemaining) {
  const totalSeconds = Math.max(0, Math.ceil(msRemaining / 1000));
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;
  return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
}

function closeCart() {
  cartDrawer.classList.remove("is-open");
  cartOverlay.classList.remove("is-open");
  updateHoldTimerUI();
}

function openCart() {
  cartDrawer.classList.add("is-open");
  cartOverlay.classList.add("is-open");
  updateHoldTimerUI();
}

function updateHoldTimerUI() {
  if (!state.holdExpiresAt || state.cart.length === 0) {
    floatingHold.hidden = true;
    cartHold.hidden = true;
    floatingHoldCopy.textContent = "You have 05:00 to checkout";
    cartHoldCopy.textContent = "05:00";
    return;
  }

  const msRemaining = state.holdExpiresAt - Date.now();
  const formatted = msRemaining <= 0 ? "00:00" : formatHoldTime(msRemaining);
  const isDrawerOpen = cartDrawer.classList.contains("is-open");

  floatingHold.hidden = isDrawerOpen;
  cartHold.hidden = !isDrawerOpen;
  floatingHoldCopy.textContent = `You have ${formatted} to checkout`;
  cartHoldCopy.textContent = formatted;
}

function clearHoldTimer() {
  state.holdExpiresAt = null;
  if (holdIntervalId) {
    clearInterval(holdIntervalId);
    holdIntervalId = null;
  }
  updateHoldTimerUI();
}

function startHoldTimer() {
  if (state.holdExpiresAt) return;

  state.holdExpiresAt = Date.now() + CART_HOLD_MS;
  updateHoldTimerUI();

  holdIntervalId = window.setInterval(() => {
    updateHoldTimerUI();
    if (state.holdExpiresAt && state.holdExpiresAt - Date.now() <= 0) {
      clearInterval(holdIntervalId);
      holdIntervalId = null;
    }
  }, 1000);
}

function sameItem(line, productKey, sizeLabel) {
  return line.productKey === productKey && line.sizeLabel === sizeLabel;
}

function syncCartStateAfterChange() {
  renderCart();
  if (state.cart.length === 0) {
    closeCart();
  }
}

function updateLineQuantity(productKey, sizeLabel, nextQuantity) {
  const line = state.cart.find((entry) => sameItem(entry, productKey, sizeLabel));
  if (!line) return;

  if (nextQuantity <= 0) {
    state.cart = state.cart.filter((entry) => !sameItem(entry, productKey, sizeLabel));
  } else {
    line.quantity = nextQuantity;
  }

  syncCartStateAfterChange();
}

function removeLine(productKey, sizeLabel) {
  state.cart = state.cart.filter((entry) => !sameItem(entry, productKey, sizeLabel));
  syncCartStateAfterChange();
}

function addToCart(product, sizeLabel, quantity = 1, source = "main") {
  const size = getProductSize(product, sizeLabel);
  if (!size || size.disabled) return;

  if (state.cart.length === 0) startHoldTimer();

  const existing = state.cart.find((entry) => sameItem(entry, product.key, sizeLabel));
  if (existing) {
    existing.quantity += quantity;
    if (source === "bundle") existing.source = "bundle";
  } else {
    state.cart.push({
      productKey: product.key,
      sizeLabel,
      quantity,
      source
    });
  }

  renderCart();
  openCart();
}

function addMainProductToCart() {
  const product = getMainProduct();
  const size = getProductSize(product, state.selectedMainSize);
  if (!size || size.disabled) return;
  addToCart(product, state.selectedMainSize, state.mainQuantity, "main");
}

function buildOptionLabel(size) {
  return size.disabled ? `${size.label} - Sold out` : size.label;
}

function isLowStock(size) {
  return size && size.inventory > 0 && size.inventory <= 10;
}

function setMediaIndex(nextIndex) {
  const product = getMainProduct();
  const clamped = Math.max(0, Math.min(nextIndex, product.media.length - 1));
  state.selectedImage = clamped;
  updateMediaUI();
  syncHeroViewport("smooth");
}

function syncHeroViewport(behavior = "smooth") {
  if (window.innerWidth > 780) return;
  heroViewport.scrollTo({
    left: heroViewport.clientWidth * state.selectedImage,
    behavior
  });
}

function updateMediaUI() {
  const product = getMainProduct();
  mediaCounter.textContent = `${state.selectedImage + 1}/${product.media.length}`;
}

function renderStoryPicker() {
  storyPicker.innerHTML = "";

  stories.forEach((story) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = `story-button${story.key === state.storyKey ? " is-active" : ""}`;
    button.textContent = story.label;
    button.addEventListener("click", () => {
      state.storyKey = story.key;
      state.selectedMainSize = story.defaultSize;
      state.selectedImage = 0;
      state.mainQuantity = 1;
      state.cart = [];
      clearHoldTimer();
      render();
    });
    storyPicker.appendChild(button);
  });
}

function renderDesktopMedia(product) {
  desktopMediaStack.innerHTML = "";
  product.media.slice(0, 6).forEach((src) => {
    const frame = document.createElement("div");
    frame.className = "media-desktop__frame";
    frame.innerHTML = `<img src="${src}" alt="${product.title}" />`;
    desktopMediaStack.appendChild(frame);
  });
}

function renderMobileMedia(product) {
  heroTrack.innerHTML = "";
  product.media.forEach((src) => {
    const slide = document.createElement("div");
    slide.className = "hero-slide";
    slide.innerHTML = `<img src="${src}" alt="${product.title}" />`;
    heroTrack.appendChild(slide);
  });
  updateMediaUI();
  window.requestAnimationFrame(() => syncHeroViewport("auto"));
}

function renderMainSizeSelect(product) {
  mainSizeSelect.innerHTML = "";
  product.sizes.forEach((size) => {
    const option = document.createElement("option");
    option.value = size.label;
    option.textContent = buildOptionLabel(size);
    option.disabled = !!size.disabled;
    option.selected = size.label === state.selectedMainSize;
    mainSizeSelect.appendChild(option);
  });
}

function renderDetails(product) {
  detailsList.innerHTML = "";
  product.details.forEach((detail) => {
    const item = document.createElement("li");
    item.textContent = detail;
    detailsList.appendChild(item);
  });
}

function renderTeaser(story) {
  fitTitle.textContent = story.fitTitle;
  fitCopy.textContent = story.fitCopy;
  fitTeaserItems.innerHTML = "";

  [story.mainKey, ...story.companions.map((item) => item.key)].forEach((key) => {
    const product = products[key];
    const thumb = document.createElement("div");
    thumb.className = "bundle-teaser__thumb";
    thumb.innerHTML = `<img src="${product.media[0]}" alt="${product.title}" />`;
    fitTeaserItems.appendChild(thumb);
  });

  fullLookTitle.textContent = story.fitTitle;
}

function renderLookGrid(story) {
  lookGrid.innerHTML = "";

  story.companions.forEach((companion) => {
    const product = products[companion.key];
    const card = document.createElement("article");
    card.className = "look-card";
    card.innerHTML = `
      <a class="look-card__image" href="${product.url}" target="_blank" rel="noreferrer">
        <img src="${product.media[0]}" alt="${product.title}" />
      </a>
      <div class="look-card__title">${product.title}</div>
      <div class="look-card__price">${formatMoney(product.price)}</div>
      <div class="look-card__sizes"></div>
    `;

    const sizeWrap = card.querySelector(".look-card__sizes");
    product.sizes.forEach((size) => {
      const button = document.createElement("button");
      button.type = "button";
      button.className = "look-card__size";
      button.textContent = size.label;
      button.disabled = !!size.disabled;
      if (size.label === companion.recommendedSize) button.style.borderColor = "#171717";
      button.addEventListener("click", () => addToCart(product, size.label, 1, "bundle"));
      sizeWrap.appendChild(button);
    });

    lookGrid.appendChild(card);
  });
}

function renderPdp() {
  const story = getCurrentStory();
  const product = getMainProduct();
  const selectedSize = getProductSize(product, state.selectedMainSize);

  productTitle.textContent = product.title;
  productPrice.textContent = formatMoney(product.price);
  paymentCopy.textContent = product.paymentLines[0];
  paymentCopySecondary.textContent = product.paymentLines[1];

  mainQtyValue.textContent = String(state.mainQuantity);
  renderMainSizeSelect(product);
  renderDesktopMedia(product);
  renderMobileMedia(product);
  renderDetails(product);
  renderTeaser(story);
  renderLookGrid(story);

  if (!selectedSize || selectedSize.disabled) {
    pdpLowStockCopy.textContent = "Sold out in this size";
    addMainToBag.disabled = true;
    addMainToBagMobile.disabled = true;
  } else if (isLowStock(selectedSize)) {
    pdpLowStockCopy.textContent = "Last units remaining";
    addMainToBag.disabled = false;
    addMainToBagMobile.disabled = false;
  } else {
    pdpLowStockCopy.textContent = "Popular sizes moving fast";
    addMainToBag.disabled = false;
    addMainToBagMobile.disabled = false;
  }
}

function renderCart() {
  const totalItems = state.cart.reduce((sum, line) => sum + line.quantity, 0);
  const totalCents = state.cart.reduce((sum, line) => {
    const product = products[line.productKey];
    return sum + product.price * line.quantity;
  }, 0);

  bagCount.textContent = String(totalItems);
  cartCount.textContent = String(totalItems);
  cartTotal.textContent = formatMoney(totalCents);

  const remaining = Math.max(0, SHIPPING_THRESHOLD - totalCents);
  shippingFill.style.width = `${Math.min(totalCents / SHIPPING_THRESHOLD, 1) * 100}%`;

  if (totalCents >= SHIPPING_THRESHOLD) {
    shippingStatus.textContent = "You’ve unlocked free domestic shipping.";
  } else if (totalCents === 0) {
    shippingStatus.textContent = "Add an item to start building toward free shipping.";
  } else {
    shippingStatus.textContent = `You’re ${formatCompactMoney(remaining)} away from free domestic shipping.`;
  }

  if (state.cart.length === 0) {
    clearHoldTimer();
    cartOutcome.textContent = "Build the full fit from the PDP to show the bundle path.";
    cartBody.innerHTML = `<div class="cart-empty"><p>Your cart is empty</p></div>`;
    return;
  }

  updateHoldTimerUI();

  const story = getCurrentStory();
  const activeBundleKeys = new Set([story.mainKey, ...story.companions.map((entry) => entry.key)]);
  const bundledCount = state.cart.filter((line) => activeBundleKeys.has(line.productKey)).length;
  if (bundledCount >= 2) {
    cartOutcome.textContent = "Complete the fit path is active. The full outfit is building from the PDP.";
  } else {
    cartOutcome.textContent = "Add one more bundle piece to complete the look.";
  }

  cartBody.innerHTML = "";
  state.cart.forEach((line) => {
    const product = products[line.productKey];
    const size = getProductSize(product, line.sizeLabel);
    const article = document.createElement("article");
    article.className = "cart-item";
    article.innerHTML = `
      <div class="cart-item__media">
        <img src="${product.media[0]}" alt="${product.title}" />
      </div>
      <div class="cart-item__meta">
        <div class="cart-item__top">
          <h4>${product.title}</h4>
          <p class="cart-item__price">${formatMoney(product.price * line.quantity)}</p>
        </div>
        <p>Size: ${line.sizeLabel}</p>
      </div>
    `;

    const meta = article.querySelector(".cart-item__meta");

    if (isLowStock(size)) {
      const low = document.createElement("span");
      low.className = "cart-item__flag cart-item__flag--low";
      low.textContent = "Last few remaining items";
      meta.appendChild(low);
    }

    if (line.source === "bundle") {
      const bundle = document.createElement("span");
      bundle.className = "cart-item__flag cart-item__flag--bundle";
      bundle.textContent = "Added from complete the fit";
      meta.appendChild(bundle);
    }

    const qtyWrap = document.createElement("div");
    qtyWrap.className = "cart-item__qty-row";
    qtyWrap.innerHTML = `
      <div class="cart-item__qty">
        <button type="button" data-action="decrement" aria-label="Decrease quantity">−</button>
        <span>${line.quantity}</span>
        <button type="button" data-action="increment" aria-label="Increase quantity">+</button>
      </div>
      <button type="button" class="cart-item__remove" aria-label="Remove item">
        <svg viewBox="0 0 16 18" aria-hidden="true" focusable="false">
          <path d="M2.5 4.5h11" />
          <path d="M6 1.75h4" />
          <path d="M5 6.5v7" />
          <path d="M8 6.5v7" />
          <path d="M11 6.5v7" />
          <path d="M4 4.5l.6 10.25c.03.66.58 1.18 1.24 1.18h4.32c.66 0 1.21-.52 1.24-1.18L12 4.5" />
        </svg>
      </button>
    `;

    qtyWrap.querySelector('[data-action="decrement"]').addEventListener("click", () => {
      updateLineQuantity(line.productKey, line.sizeLabel, line.quantity - 1);
    });

    qtyWrap.querySelector('[data-action="increment"]').addEventListener("click", () => {
      updateLineQuantity(line.productKey, line.sizeLabel, line.quantity + 1);
    });

    qtyWrap.querySelector(".cart-item__remove").addEventListener("click", () => {
      removeLine(line.productKey, line.sizeLabel);
    });

    meta.appendChild(qtyWrap);
    cartBody.appendChild(article);
  });
}

function render() {
  renderStoryPicker();
  renderPdp();
  renderCart();
}

render();
