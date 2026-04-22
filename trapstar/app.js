const SHIPPING_THRESHOLD = 16000;
const CART_HOLD_MS = 5 * 60 * 1000;

const products = {
  blackHoodie: {
    key: "blackHoodie",
    title: "TS Script Hoodie - Black",
    handle: "ts-script-flame-hoodie-black",
    price: 13000,
    description: "100% Cotton Hoodie",
    url: "https://uk.trapstarlondon.com/products/ts-script-flame-hoodie-black",
    media: [
      "https://cdn.shopify.com/s/files/1/1248/9105/files/Tssnake_BLACK_Fcopy.jpg?v=1771343709",
      "https://cdn.shopify.com/s/files/1/1248/9105/files/Tssnake_BLACK_D1copy.jpg?v=1771343709",
      "https://cdn.shopify.com/s/files/1/1248/9105/files/Tssnake_BLACK_D3copy.jpg?v=1771343709"
    ],
    sizes: [
      { label: "XS", inventory: 20, policy: "deny" },
      { label: "S", inventory: 32, policy: "deny" },
      { label: "M", inventory: 69, policy: "deny" },
      { label: "L", inventory: 52, policy: "deny" },
      { label: "XL", inventory: 16, policy: "deny" },
      { label: "XXL", inventory: 0, policy: "deny", disabled: true },
      { label: "3XL", inventory: 5, policy: "deny" }
    ]
  },
  camoHoodie: {
    key: "camoHoodie",
    title: "TS Script Hoodie - Camo",
    handle: "ts-flame-hoodie-camo",
    price: 13000,
    description: "100% Cotton Hoodie",
    url: "https://uk.trapstarlondon.com/products/ts-flame-hoodie-camo",
    media: [
      "https://cdn.shopify.com/s/files/1/1248/9105/files/Tssnake_camo_F1copy.jpg?v=1772212285",
      "https://cdn.shopify.com/s/files/1/1248/9105/files/Tssnake_camo_D3copy.jpg?v=1772212285",
      "https://cdn.shopify.com/s/files/1/1248/9105/files/Tssnake_camo_Bcopy.jpg?v=1772212285"
    ],
    sizes: [
      { label: "XS", inventory: 16, policy: "deny" },
      { label: "S", inventory: 28, policy: "deny" },
      { label: "M", inventory: 47, policy: "deny" },
      { label: "L", inventory: 32, policy: "deny" },
      { label: "XL", inventory: 17, policy: "deny" },
      { label: "XXL", inventory: 0, policy: "deny", disabled: true },
      { label: "3XL", inventory: 3, policy: "deny" }
    ]
  },
  teeBlack: {
    key: "teeBlack",
    title: "*PRE ORDER* Trapstar x A Jewellers 2.0 Tee - Black",
    handle: "tee-black",
    price: 3500,
    description: "Pre-order dispatch starts late April to early May 2026.",
    url: "https://uk.trapstarlondon.com/products/tee-black",
    media: [
      "https://cdn.shopify.com/s/files/1/1248/9105/files/02_ae49fef1-a7a6-48b6-a7ed-4c443841b2d1.jpg?v=1771499919",
      "https://cdn.shopify.com/s/files/1/1248/9105/files/01_341326f0-63f2-49ff-9526-44161daf649d.jpg?v=1771499919"
    ],
    sizes: [
      { label: "XS", inventory: 0, policy: "continue", preorder: true },
      { label: "S", inventory: 19, policy: "continue" },
      { label: "M", inventory: 14, policy: "continue" },
      { label: "L", inventory: 9, policy: "continue" },
      { label: "XL", inventory: 0, policy: "continue", preorder: true },
      { label: "XXL", inventory: 3, policy: "continue" },
      { label: "3XL", inventory: 1, policy: "deny" },
      { label: "4XL", inventory: 0, policy: "deny", disabled: true }
    ]
  },
  trispeed: {
    key: "trispeed",
    title: "Trispeed 3000 - Black/Grey",
    handle: "trispeed-3000-black-grey",
    price: 19500,
    description: "Premium footwear attach for a bigger basket.",
    url: "https://uk.trapstarlondon.com/products/trispeed-3000-black-grey",
    media: [
      "https://cdn.shopify.com/s/files/1/1248/9105/files/Trp3000s_Black_pair_S_1copy.jpg?v=1772214999",
      "https://cdn.shopify.com/s/files/1/1248/9105/files/Trp3000s_Black_S_1copy.jpg?v=1772214999",
      "https://cdn.shopify.com/s/files/1/1248/9105/files/Trp3000s_Black_pair_D_1copy.jpg?v=1771344316"
    ],
    sizes: [
      { label: "3", inventory: 8, policy: "deny" },
      { label: "4", inventory: 13, policy: "deny" },
      { label: "5", inventory: 15, policy: "deny" },
      { label: "6", inventory: 13, policy: "deny" },
      { label: "7", inventory: 2, policy: "deny" },
      { label: "8", inventory: 0, policy: "deny", disabled: true }
    ]
  }
};

const stories = [
  {
    key: "black",
    label: "Black hoodie story",
    mainKey: "blackHoodie",
    defaultSize: "L",
    fitTitle: "Lock in the full look.",
    fitCopy: "One more piece takes this bag over free shipping.",
    companions: [
      { key: "teeBlack", recommendedSize: "L" },
      { key: "trispeed", recommendedSize: "7" }
    ]
  },
  {
    key: "camo",
    label: "Camo hoodie story",
    mainKey: "camoHoodie",
    defaultSize: "3XL",
    fitTitle: "Lock in the full look.",
    fitCopy: "One more piece takes this bag over free shipping.",
    companions: [
      { key: "teeBlack", recommendedSize: "3XL" },
      { key: "trispeed", recommendedSize: "7" }
    ]
  }
];

const state = {
  storyKey: stories[0].key,
  selectedMainSize: stories[0].defaultSize,
  selectedImage: 0,
  cart: [],
  holdExpiresAt: null
};

const storyPicker = document.getElementById("story-picker");
const heroViewport = document.getElementById("hero-viewport");
const heroTrack = document.getElementById("hero-track");
const heroDots = document.getElementById("hero-dots");
const thumbnailRow = document.getElementById("thumbnail-row");
const productTitle = document.getElementById("product-title");
const productPrice = document.getElementById("product-price");
const mainSizeGrid = document.getElementById("main-size-grid");
const pdpLowStockCopy = document.getElementById("pdp-low-stock-copy");
const fitTitle = document.getElementById("fit-title");
const fitCopy = document.getElementById("fit-copy");
const fitTeaserItems = document.getElementById("fit-teaser-items");
const lookGrid = document.getElementById("look-grid");
const cartCount = document.getElementById("cart-count");
const shippingStatus = document.getElementById("shipping-status");
const shippingFill = document.getElementById("shipping-fill");
const cartBody = document.getElementById("cart-body");
const cartTotal = document.getElementById("cart-total");
const cartOutcome = document.getElementById("cart-outcome");
const productDescription = document.getElementById("product-description");
const bagTrigger = document.getElementById("bag-trigger");
const cartDrawer = document.getElementById("cart-drawer");
const cartOverlay = document.getElementById("cart-overlay");
const cartClose = document.getElementById("cart-close");
const cartHold = document.getElementById("cart-hold");
const cartHoldCopy = document.getElementById("cart-hold-copy");
const floatingHold = document.getElementById("floating-hold");
const floatingHoldCopy = document.getElementById("floating-hold-copy");
const addMainToBagMobile = document.getElementById("add-main-to-bag-mobile");
let holdIntervalId = null;

document.getElementById("add-main-to-bag").addEventListener("click", () => {
  const story = getCurrentStory();
  const product = products[story.mainKey];
  addToCart(product, state.selectedMainSize);
});

document.getElementById("scroll-fit").addEventListener("click", () => {
  document.getElementById("full-look").scrollIntoView({ behavior: "smooth", block: "start" });
});

addMainToBagMobile.addEventListener("click", () => {
  const story = getCurrentStory();
  const product = products[story.mainKey];
  addToCart(product, state.selectedMainSize);
});

bagTrigger.addEventListener("click", () => {
  if (cartDrawer.classList.contains("is-open")) {
    closeCart();
  } else {
    openCart();
  }
});

cartClose.addEventListener("click", closeCart);
cartOverlay.addEventListener("click", closeCart);

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

function getCurrentStory() {
  return stories.find((story) => story.key === state.storyKey);
}

function formatMoney(pence) {
  return `£${(pence / 100).toFixed(2)}`;
}

function formatHoldTime(msRemaining) {
  const totalSeconds = Math.max(0, Math.ceil(msRemaining / 1000));
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;
  return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
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
  const isDrawerOpen = cartDrawer.classList.contains("is-open");
  const formatted = msRemaining <= 0 ? "00:00" : formatHoldTime(msRemaining);

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

function getProductSize(product, label) {
  return product.sizes.find((size) => size.label === label);
}

function syncHeroViewport(behavior = "smooth") {
  const slideWidth = heroViewport.clientWidth;
  heroViewport.scrollTo({
    left: slideWidth * state.selectedImage,
    behavior
  });
}

function updateMediaSelectionUI() {
  heroDots.querySelectorAll(".hero-dot").forEach((dot, index) => {
    dot.classList.toggle("is-active", index === state.selectedImage);
  });

  thumbnailRow.querySelectorAll(".thumb-button").forEach((thumb, index) => {
    thumb.classList.toggle("is-active", index === state.selectedImage);
  });
}

function isLowStock(size) {
  return size && size.inventory > 0 && size.inventory <= 10;
}

function sameItem(line, product, sizeLabel) {
  return line.productKey === product.key && line.sizeLabel === sizeLabel;
}

function addToCart(product, sizeLabel) {
  const size = getProductSize(product, sizeLabel);
  if (!size || size.disabled) return;

  if (state.cart.length === 0) {
    startHoldTimer();
  }

  const existing = state.cart.find((line) => sameItem(line, product, sizeLabel));
  if (existing) {
    existing.quantity += 1;
  } else {
    state.cart.push({
      productKey: product.key,
      sizeLabel,
      quantity: 1
    });
  }

  renderCart();
  openCart();
}

function syncCartStateAfterChange() {
  renderCart();

  if (state.cart.length === 0) {
    closeCart();
    return;
  }

  updateHoldTimerUI();
}

function updateLineQuantity(productKey, sizeLabel, nextQuantity) {
  const line = state.cart.find(
    (entry) => entry.productKey === productKey && entry.sizeLabel === sizeLabel
  );

  if (!line) return;

  if (nextQuantity <= 0) {
    state.cart = state.cart.filter(
      (entry) => !(entry.productKey === productKey && entry.sizeLabel === sizeLabel)
    );
  } else {
    line.quantity = nextQuantity;
  }

  syncCartStateAfterChange();
}

function removeLine(productKey, sizeLabel) {
  state.cart = state.cart.filter(
    (entry) => !(entry.productKey === productKey && entry.sizeLabel === sizeLabel)
  );
  syncCartStateAfterChange();
}

function renderStoryPicker() {
  storyPicker.innerHTML = "";

  stories.forEach((story) => {
    const button = document.createElement("button");
    button.className = `story-button${story.key === state.storyKey ? " is-active" : ""}`;
    button.textContent = story.label;
    button.addEventListener("click", () => {
      state.storyKey = story.key;
      state.selectedMainSize = story.defaultSize;
      state.selectedImage = 0;
      state.cart = [];
      clearHoldTimer();
      render();
    });
    storyPicker.appendChild(button);
  });
}

function renderPdp() {
  const story = getCurrentStory();
  const mainProduct = products[story.mainKey];
  const lowStockSizes = mainProduct.sizes.filter(isLowStock).map((size) => size.label);

  productTitle.textContent = mainProduct.title;
  productPrice.textContent = formatMoney(mainProduct.price);
  productDescription.textContent = mainProduct.description;
  pdpLowStockCopy.textContent =
    lowStockSizes.length > 0
      ? `Last units remaining in ${lowStockSizes.join(" / ")}`
      : "Core sizes available";
  fitTitle.textContent = story.fitTitle;
  fitCopy.textContent = story.fitCopy;

  heroTrack.innerHTML = "";
  heroDots.innerHTML = "";

  mainProduct.media.forEach((src, index) => {
    const slide = document.createElement("div");
    slide.className = "hero-slide";
    slide.innerHTML = `<img src="${src}" alt="${mainProduct.title} image ${index + 1}" />`;
    heroTrack.appendChild(slide);

    const dot = document.createElement("button");
    dot.className = `hero-dot${index === state.selectedImage ? " is-active" : ""}`;
    dot.setAttribute("aria-label", `Go to image ${index + 1}`);
    dot.addEventListener("click", () => {
      state.selectedImage = index;
      renderPdp();
      syncHeroViewport();
    });
    heroDots.appendChild(dot);
  });

  thumbnailRow.innerHTML = "";
  mainProduct.media.forEach((src, index) => {
    const thumb = document.createElement("button");
    thumb.className = `thumb-button${index === state.selectedImage ? " is-active" : ""}`;
    thumb.innerHTML = `<img src="${src}" alt="${mainProduct.title} thumbnail ${index + 1}" />`;
    thumb.addEventListener("click", () => {
      state.selectedImage = index;
      renderPdp();
      syncHeroViewport();
    });
    thumbnailRow.appendChild(thumb);
  });

  mainSizeGrid.innerHTML = "";
  mainProduct.sizes.forEach((size) => {
    const chip = document.createElement("button");
    const classes = ["size-chip"];
    if (size.label === state.selectedMainSize) classes.push("is-active");
    if (isLowStock(size)) classes.push("is-low");
    chip.className = classes.join(" ");
    chip.disabled = Boolean(size.disabled);
    chip.textContent = size.label;
    chip.addEventListener("click", () => {
      state.selectedMainSize = size.label;
      renderPdp();
    });
    mainSizeGrid.appendChild(chip);
  });

  fitTeaserItems.innerHTML = "";
  [mainProduct, ...story.companions.map((item) => products[item.key])].forEach((product) => {
    const tile = document.createElement("div");
    tile.className = "fit-teaser__tile";
    tile.innerHTML = `<img src="${product.media[0]}" alt="${product.title}" />`;
    fitTeaserItems.appendChild(tile);
  });

  lookGrid.innerHTML = "";
  story.companions.forEach((companion) => {
    const product = products[companion.key];
    const card = document.createElement("article");
    card.className = "companion-card";
    card.innerHTML = `
      <div class="companion-card__media">
        <img src="${product.media[0]}" alt="${product.title}" />
      </div>
      <div class="companion-card__body">
        <h4>${product.title}</h4>
        <p>${product.description}</p>
        <div class="companion-card__meta">
          <strong>${formatMoney(product.price)}</strong>
          <a href="${product.url}" target="_blank" rel="noreferrer">View live</a>
        </div>
        <div class="companion-card__sizes"></div>
        <p class="companion-card__hint">Tap a size to add directly to cart.</p>
      </div>
    `;

    const sizesWrap = card.querySelector(".companion-card__sizes");
    product.sizes.forEach((size) => {
      const chip = document.createElement("button");
      const classes = ["companion-size"];
      if (size.label === companion.recommendedSize) classes.push("is-active");
      if (isLowStock(size)) classes.push("is-low");
      chip.className = classes.join(" ");
      chip.disabled = Boolean(size.disabled);
      chip.textContent = size.label;
      chip.addEventListener("click", () => addToCart(product, size.label));
      sizesWrap.appendChild(chip);
    });

    lookGrid.appendChild(card);
  });

  updateMediaSelectionUI();
  window.requestAnimationFrame(() => {
    syncHeroViewport("auto");
  });
}

function renderCart() {
  const story = getCurrentStory();
  const mainProduct = products[story.mainKey];
  const totalPence = state.cart.reduce((sum, line) => {
    const product = products[line.productKey];
    return sum + product.price * line.quantity;
  }, 0);

  cartCount.textContent = `${state.cart.reduce((sum, line) => sum + line.quantity, 0)}`;
  cartTotal.textContent = formatMoney(totalPence);

  const remaining = Math.max(0, SHIPPING_THRESHOLD - totalPence);
  const fillRatio = Math.min(totalPence / SHIPPING_THRESHOLD, 1);
  shippingFill.style.width = `${fillRatio * 100}%`;

  if (totalPence >= SHIPPING_THRESHOLD) {
    shippingStatus.textContent = "You’ve unlocked free standard shipping.";
  } else if (totalPence === 0) {
    shippingStatus.textContent = "Add an item to start building toward free shipping.";
  } else {
    shippingStatus.textContent = `You’re ${formatMoney(remaining)} away from free standard shipping.`;
  }

  const hasMain = state.cart.some((line) => line.productKey === mainProduct.key);
  const hasTee = state.cart.some((line) => line.productKey === "teeBlack");

  if (hasMain && hasTee) {
    cartOutcome.textContent = "Bundle path shown: hoodie + tee clears the free shipping threshold.";
  } else if (hasMain) {
    cartOutcome.textContent = "One more tee add moves this bag over the free shipping threshold.";
  } else {
    cartOutcome.textContent = "Start with the main PDP item, then add a matching piece from the bundle module.";
  }

  if (state.cart.length === 0) {
    clearHoldTimer();
    cartBody.innerHTML = `
      <div class="cart-empty">
        <p>Your cart is empty</p>
      </div>
    `;
    return;
  }

  updateHoldTimerUI();

  cartBody.innerHTML = "";
  state.cart.forEach((line) => {
    const product = products[line.productKey];
    const size = getProductSize(product, line.sizeLabel);
    const lineElement = document.createElement("article");
    lineElement.className = "cart-item";
    lineElement.innerHTML = `
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

    const meta = lineElement.querySelector(".cart-item__meta");

    if (isLowStock(size)) {
      const low = document.createElement("span");
      low.className = "cart-item__flag cart-item__flag--low";
      low.textContent = "Last few remaining items";
      meta.appendChild(low);
    }

    if (size?.preorder || size?.policy === "continue") {
      const preorder = document.createElement("span");
      preorder.className = "cart-item__flag cart-item__flag--preorder";
      preorder.textContent = "Pre-order item";
      meta.appendChild(preorder);
    }

    if (hasMain && hasTee && (line.productKey === mainProduct.key || line.productKey === "teeBlack")) {
      const bundle = document.createElement("span");
      bundle.className = "cart-item__flag cart-item__flag--bundle";
      bundle.textContent = "Complete the look applied";
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
      <button
        type="button"
        class="cart-item__remove"
        aria-label="Remove item"
      >
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

    const decrementButton = qtyWrap.querySelector('[data-action="decrement"]');
    const incrementButton = qtyWrap.querySelector('[data-action="increment"]');
    const removeButton = qtyWrap.querySelector(".cart-item__remove");

    decrementButton.addEventListener("click", () => {
      updateLineQuantity(line.productKey, line.sizeLabel, line.quantity - 1);
    });

    incrementButton.addEventListener("click", () => {
      updateLineQuantity(line.productKey, line.sizeLabel, line.quantity + 1);
    });

    removeButton.addEventListener("click", () => {
      removeLine(line.productKey, line.sizeLabel);
    });

    meta.appendChild(qtyWrap);

    cartBody.appendChild(lineElement);
  });
}

function render() {
  renderStoryPicker();
  renderPdp();
  renderCart();
  updateHoldTimerUI();
}

render();

let heroScrollFrame = null;
heroViewport.addEventListener("scroll", () => {
  if (heroScrollFrame) return;

  heroScrollFrame = window.requestAnimationFrame(() => {
    const nextIndex = Math.round(heroViewport.scrollLeft / Math.max(1, heroViewport.clientWidth));
    if (nextIndex !== state.selectedImage) {
      state.selectedImage = nextIndex;
      updateMediaSelectionUI();
    }
    heroScrollFrame = null;
  });
});

window.addEventListener("resize", () => {
  syncHeroViewport("auto");
});
