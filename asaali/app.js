const SHIPPING_THRESHOLD = 30000;
const CART_HOLD_MS = 5 * 60 * 1000;

const products = {
  cannaAnorak: {
    key: "cannaAnorak",
    title: "Cannacamo Anorak Jacket",
    price: 25000,
    sizes: [
      { label: "XS", inventory: 8 },
      { label: "Small", inventory: 11 },
      { label: "Medium", inventory: 14 },
      { label: "Large", inventory: 6 },
      { label: "XL", inventory: 4 },
      { label: "2X", inventory: 0, disabled: true },
      { label: "3X", inventory: 2 }
    ],
    defaultSize: "Large",
    bullets: [
      "Cotton blend shell with all-over Canna Camo print",
      "Relaxed pull-over fit with half zip front",
      "Adjustable hood and waist for shape control",
      "Designed to pair with the matching Cargo Tech Pants"
    ],
    media: [
      "./assets/crops/canna-jacket.png",
      "./assets/crops/canna-jacket.png",
      "./assets/crops/canna-jacket.png",
      "./assets/crops/canna-jacket.png"
    ]
  },
  cannaPants: {
    key: "cannaPants",
    title: "Cannacamo Cargo Tech Pants",
    price: 18000,
    sizes: [
      { label: "28", inventory: 4 },
      { label: "30", inventory: 5 },
      { label: "32", inventory: 9 },
      { label: "34", inventory: 7 },
      { label: "36", inventory: 3 },
      { label: "38", inventory: 2 },
      { label: "40", inventory: 0, disabled: true },
      { label: "42", inventory: 0, disabled: true }
    ],
    defaultSize: "34",
    media: "./assets/crops/canna-pants.png"
  },
  pantoneHoodie: {
    key: "pantoneHoodie",
    title: "Pantone Cartel Hoodie",
    price: 26000,
    colors: ["Blue", "Grey", "Pink"],
    defaultColor: "Grey",
    sizes: [
      { label: "XS", inventory: 6 },
      { label: "Small", inventory: 11 },
      { label: "Medium", inventory: 13 },
      { label: "Large", inventory: 7 },
      { label: "XL", inventory: 4 },
      { label: "2X", inventory: 2 },
      { label: "3X", inventory: 0, disabled: true }
    ],
    defaultSize: "Large",
    bullets: [
      "True to size",
      "Heavyweight fleece construction",
      "Cartel graphic placement at front and back",
      "Built to complete the matching Pantone fit"
    ],
    media: [
      "./assets/crops/pantone-hoodie.png",
      "./assets/crops/pantone-hoodie.png",
      "./assets/crops/pantone-hoodie.png",
      "./assets/crops/pantone-hoodie.png"
    ]
  },
  pantoneSweats: {
    key: "pantoneSweats",
    title: "Pantone Cartel Sweatpants",
    price: 18000,
    sizes: [
      { label: "XS", inventory: 5 },
      { label: "Small", inventory: 10 },
      { label: "Medium", inventory: 12 },
      { label: "Large", inventory: 8 },
      { label: "XL", inventory: 3 },
      { label: "2X", inventory: 1 },
      { label: "3X", inventory: 0, disabled: true }
    ],
    defaultSize: "Large",
    media: "./assets/crops/pantone-sweats.png"
  },
  deadhomiesTee: {
    key: "deadhomiesTee",
    title: "Deadhomie$ In Loving Memory Tee",
    price: 8000,
    sizes: [
      { label: "XS", inventory: 9 },
      { label: "Small", inventory: 15 },
      { label: "Medium", inventory: 18 },
      { label: "Large", inventory: 10 },
      { label: "XL", inventory: 5 },
      { label: "2X", inventory: 4 },
      { label: "3X", inventory: 1 },
      { label: "4X", inventory: 0, disabled: true }
    ],
    defaultSize: "Large",
    media: "./assets/crops/deadhomies-tee.png"
  }
};

const stories = [
  {
    key: "canna",
    label: "Canna Camo",
    breadcrumb: "Cannacamo Anorak Jacket",
    main: "cannaAnorak",
    bundle: ["cannaPants"]
  },
  {
    key: "pantone",
    label: "Pantone Cartel",
    breadcrumb: "Pantone Cartel Hoodie",
    main: "pantoneHoodie",
    bundle: ["pantoneSweats", "deadhomiesTee"]
  }
];

const state = {
  storyKey: stories[0].key,
  selectedImage: 0,
  mainSize: products.cannaAnorak.defaultSize,
  mainColor: null,
  quantity: 1,
  bundleSelections: {},
  cart: [],
  holdExpiresAt: null
};

const storySwitcher = document.getElementById("story-switcher");
const breadcrumbLabel = document.getElementById("breadcrumb-label");
const gallery = document.getElementById("gallery");
const thumbs = document.getElementById("thumbs");
const productTitle = document.getElementById("product-title");
const productPrice = document.getElementById("product-price");
const colorGroup = document.getElementById("color-group");
const colorSwatches = document.getElementById("color-swatches");
const selectedColorLabel = document.getElementById("selected-color-label");
const mainSizeGrid = document.getElementById("main-size-grid");
const selectedSizeLabel = document.getElementById("selected-size-label");
const qtyValue = document.getElementById("qty-value");
const detailList = document.getElementById("detail-list");
const fitGrid = document.getElementById("fit-grid");
const fitPreviewItems = document.getElementById("fit-preview-items");
const cartOverlay = document.getElementById("cart-overlay");
const cartDrawer = document.getElementById("cart-drawer");
const cartItems = document.getElementById("cart-items");
const cartCount = document.getElementById("bag-count");
const cartCountMobile = document.getElementById("bag-count-mobile");
const cartCountTitle = document.getElementById("cart-count-title");
const subtotalValue = document.getElementById("subtotal-value");
const shippingStatus = document.getElementById("shipping-status");
const shippingFill = document.getElementById("shipping-fill");
const shippingThresholdLabel = document.getElementById("shipping-threshold-label");
const cartOutcome = document.getElementById("cart-outcome");
const cartHold = document.getElementById("cart-hold");
const cartHoldCopy = document.getElementById("cart-hold-copy");
let holdIntervalId = null;

document.getElementById("qty-minus").addEventListener("click", () => {
  state.quantity = Math.max(1, state.quantity - 1);
  render();
});

document.getElementById("qty-plus").addEventListener("click", () => {
  state.quantity += 1;
  render();
});

document.getElementById("add-main-to-cart").addEventListener("click", () => {
  const product = getMainProduct();

  addToCart({
    key: product.key,
    title: product.title,
    price: product.price,
    size: state.mainSize,
    color: state.mainColor,
    quantity: state.quantity,
    media: product.media[0]
  });
});

document.getElementById("bag-trigger").addEventListener("click", openCart);
document.getElementById("bag-trigger-mobile").addEventListener("click", openCart);
document.getElementById("cart-close").addEventListener("click", closeCart);
document.getElementById("continue-shopping").addEventListener("click", closeCart);
cartOverlay.addEventListener("click", closeCart);

function getCurrentStory() {
  return stories.find((story) => story.key === state.storyKey);
}

function getMainProduct() {
  return products[getCurrentStory().main];
}

function formatMoney(cents) {
  return `$${(cents / 100).toFixed(2)}`;
}

function getProductSize(product, label) {
  return product.sizes.find((size) => size.label === label);
}

function isLowStock(size) {
  return size && size.inventory > 0 && size.inventory <= 5;
}

function formatHoldTime(msRemaining) {
  const totalSeconds = Math.max(0, Math.ceil(msRemaining / 1000));
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;
  return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
}

function updateHoldTimerUI() {
  if (!state.holdExpiresAt || state.cart.length === 0) {
    cartHold.hidden = true;
    cartHoldCopy.textContent = "05:00";
    return;
  }

  const msRemaining = state.holdExpiresAt - Date.now();
  const formatted = msRemaining <= 0 ? "00:00" : formatHoldTime(msRemaining);
  cartHold.hidden = false;
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

function renderStorySwitcher() {
  storySwitcher.innerHTML = stories
    .map(
      (story) => `
        <button type="button" class="${story.key === state.storyKey ? "is-active" : ""}" data-story="${story.key}">
          ${story.label}
        </button>
      `
    )
    .join("");

  storySwitcher.querySelectorAll("button").forEach((button) => {
    button.addEventListener("click", () => {
      const story = stories.find((entry) => entry.key === button.dataset.story);
      const main = products[story.main];

      state.storyKey = story.key;
      state.selectedImage = 0;
      state.mainSize = main.defaultSize;
      state.mainColor = main.defaultColor || null;
      state.quantity = 1;
      state.cart = [];
      clearHoldTimer();
      render();
    });
  });
}

function renderGallery() {
  const product = getMainProduct();
  const currentMedia = product.media[state.selectedImage];

  breadcrumbLabel.textContent = getCurrentStory().breadcrumb;
  gallery.innerHTML = `<div class="gallery-frame"><img src="${currentMedia}" alt="${product.title}" /></div>`;

  thumbs.innerHTML = product.media
    .map((media, index) => {
      return `
        <button type="button" class="thumb-button ${index === state.selectedImage ? "is-active" : ""}" data-index="${index}">
          <div class="thumb-frame"><img src="${media}" alt="${product.title} thumbnail ${index + 1}" /></div>
        </button>
      `;
    })
    .join("");

  thumbs.querySelectorAll(".thumb-button").forEach((button) => {
    button.addEventListener("click", () => {
      state.selectedImage = Number(button.dataset.index);
      renderGallery();
    });
  });
}

function renderColors(product) {
  if (!product.colors) {
    colorGroup.hidden = true;
    return;
  }

  colorGroup.hidden = false;
  selectedColorLabel.textContent = state.mainColor || product.defaultColor;
  colorSwatches.innerHTML = product.colors
    .map(
      (color) => `
        <button type="button" class="swatch ${color === (state.mainColor || product.defaultColor) ? "is-active" : ""}" data-color="${color}">
          ${color}
        </button>
      `
    )
    .join("");

  colorSwatches.querySelectorAll(".swatch").forEach((button) => {
    button.addEventListener("click", () => {
      state.mainColor = button.dataset.color;
      renderInfo();
    });
  });
}

function renderInfo() {
  const product = getMainProduct();

  productTitle.textContent = product.title;
  productPrice.textContent = formatMoney(product.price);
  selectedSizeLabel.textContent = state.mainSize;
  shippingThresholdLabel.textContent = formatMoney(SHIPPING_THRESHOLD);
  qtyValue.textContent = state.quantity;

  renderColors(product);

  mainSizeGrid.innerHTML = product.sizes
    .map(
      (size) => `
        <button type="button" class="size-chip ${size.label === state.mainSize ? "is-active" : ""} ${isLowStock(size) && size.label !== state.mainSize ? "is-low" : ""}" data-size="${size.label}" ${size.disabled ? "disabled" : ""}>
          ${size.label}
        </button>
      `
    )
    .join("");

  mainSizeGrid.querySelectorAll(".size-chip").forEach((button) => {
    button.addEventListener("click", () => {
      state.mainSize = button.dataset.size;
      renderInfo();
    });
  });

  detailList.innerHTML = product.bullets.map((bullet) => `<li>• ${bullet}</li>`).join("");
}

function renderFitGrid() {
  const story = getCurrentStory();

  fitPreviewItems.innerHTML = [getMainProduct().media[0], ...story.bundle.map((key) => products[key].media)]
    .map((src, index) => `<div class="fit-preview__item"><img src="${src}" alt="Fit preview ${index + 1}" /></div>`)
    .join("");

  fitGrid.innerHTML = story.bundle
    .map((key) => {
      const product = products[key];

      return `
        <article class="fit-card">
          <div class="fit-card__media"><img src="${product.media}" alt="${product.title}" /></div>
          <div>
            <h3 class="fit-card__title">${product.title}</h3>
            <p class="fit-card__price">${formatMoney(product.price)}</p>
            <div class="size-grid">
              ${product.sizes
                .map((size) => {
                  const inCart = state.cart.some((item) => item.key === key && item.size === size.label);
                  return `<button type="button" class="companion-size ${inCart ? "is-active" : ""} ${isLowStock(size) && !inCart ? "is-low" : ""}" data-add="${key}" data-size="${size.label}" ${size.disabled ? "disabled" : ""}>${size.label}</button>`;
                })
                .join("")}
            </div>
            <p class="cart-item__meta">Tap a size to add directly to cart.</p>
          </div>
        </article>
      `;
    })
    .join("");

  fitGrid.querySelectorAll("[data-add]").forEach((button) => {
    button.addEventListener("click", () => {
      const product = products[button.dataset.add];
      const size = button.dataset.size;

      addToCart({
        key: product.key,
        title: product.title,
        price: product.price,
        size,
        quantity: 1,
        media: product.media
      });
    });
  });
}

function addToCart(entry) {
  const product = products[entry.key];
  const size = getProductSize(product, entry.size);
  if (!size || size.disabled) return;

  if (state.cart.length === 0) {
    startHoldTimer();
  }

  const existing = state.cart.find(
    (item) => item.key === entry.key && item.size === entry.size && (item.color || "") === (entry.color || "")
  );

  if (existing) {
    existing.quantity += entry.quantity;
  } else {
    state.cart.push({ ...entry });
  }

  renderCart();
  openCart();
}

function renderCart() {
  const totalQuantity = state.cart.reduce((sum, item) => sum + item.quantity, 0);
  const subtotal = state.cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const remaining = Math.max(0, SHIPPING_THRESHOLD - subtotal);
  const fillRatio = Math.min(subtotal / SHIPPING_THRESHOLD, 1);
  const story = getCurrentStory();
  const mainProduct = getMainProduct();
  const hasMain = state.cart.some((item) => item.key === mainProduct.key);
  const hasBundle = state.cart.some((item) => story.bundle.includes(item.key));

  cartCount.textContent = totalQuantity;
  cartCountMobile.textContent = totalQuantity;
  cartCountTitle.textContent = totalQuantity;
  subtotalValue.textContent = formatMoney(subtotal);
  shippingFill.style.width = `${fillRatio * 100}%`;

  if (subtotal >= SHIPPING_THRESHOLD) {
    shippingStatus.textContent = "You’ve unlocked free standard shipping.";
  } else if (subtotal === 0) {
    shippingStatus.textContent = "Add an item to start building toward free shipping.";
  } else {
    shippingStatus.textContent = `You’re ${formatMoney(remaining)} away from free standard shipping.`;
  }

  if (hasMain && hasBundle) {
    cartOutcome.textContent = "Bundle path shown: the PDP item plus one add-on clears the free shipping threshold.";
  } else if (hasMain) {
    cartOutcome.textContent = "One more add-to-fit item can push this bag into free shipping.";
  } else {
    cartOutcome.textContent = "Start with the main PDP item, then add the fit pieces directly by size.";
  }

  if (!state.cart.length) {
    clearHoldTimer();
    cartItems.innerHTML = `<p class="cart-item__meta">Your cart is empty.</p>`;
    return;
  }

  cartItems.innerHTML = state.cart
    .map((item, index) => {
      const meta = [item.color, item.size].filter(Boolean).join(" / ");

      return `
        <article class="cart-item">
          <div class="cart-item__media"><img src="${item.media}" alt="${item.title}" /></div>
          <div>
            <h3 class="cart-item__title">${item.title}</h3>
            <div class="cart-item__meta">${meta || "One Size"} · ${formatMoney(item.price)}</div>
            <div class="cart-item__qty">
              <button type="button" data-cart-minus="${index}">−</button>
              <span>${item.quantity}</span>
              <button type="button" data-cart-plus="${index}">+</button>
            </div>
          </div>
        </article>
      `;
    })
    .join("");

  cartItems.querySelectorAll("[data-cart-minus]").forEach((button) => {
    button.addEventListener("click", () => {
      const item = state.cart[Number(button.dataset.cartMinus)];
      item.quantity -= 1;

      if (item.quantity <= 0) {
        state.cart = state.cart.filter((entry) => entry !== item);
      }

      renderCart();
    });
  });

  cartItems.querySelectorAll("[data-cart-plus]").forEach((button) => {
    button.addEventListener("click", () => {
      state.cart[Number(button.dataset.cartPlus)].quantity += 1;
      renderCart();
    });
  });
}

function openCart() {
  cartDrawer.classList.add("is-open");
  cartOverlay.classList.add("is-open");
  cartDrawer.setAttribute("aria-hidden", "false");
  updateHoldTimerUI();
}

function closeCart() {
  cartDrawer.classList.remove("is-open");
  cartOverlay.classList.remove("is-open");
  cartDrawer.setAttribute("aria-hidden", "true");
}

function render() {
  renderStorySwitcher();
  renderGallery();
  renderInfo();
  renderFitGrid();
  renderCart();
  updateHoldTimerUI();
}

window.addEventListener("resize", renderGallery);

render();
