const products = {
  cannaAnorak: {
    key: "cannaAnorak",
    title: "Cannacamo Anorak Jacket",
    price: 25000,
    sizes: ["XS", "Small", "Medium", "Large", "XL", "2X", "3X"],
    defaultSize: "Large",
    bullets: [
      "Cotton blend shell with all-over Canna Camo print",
      "Relaxed pull-over fit with half zip front",
      "Adjustable hood and waist for shape control",
      "Designed to pair with the matching Cargo Tech Pants"
    ],
    media: [
      {
        kind: "crop",
        src: "./assets/canna-pdp-desktop.png",
        desktop: { size: "165%", position: "14% 17%" },
        mobile: { size: "220%", position: "10% 17%" }
      },
      {
        kind: "crop",
        src: "./assets/canna-listing.png",
        desktop: { size: "176%", position: "8% 14%" },
        mobile: { size: "250%", position: "8% 13%" }
      },
      {
        kind: "crop",
        src: "./assets/canna-pdp-desktop.png",
        desktop: { size: "182%", position: "11% 33%" },
        mobile: { size: "238%", position: "11% 34%" }
      },
      {
        kind: "crop",
        src: "./assets/asaali-pdp-mobile.png",
        desktop: { size: "135%", position: "49% 21%" },
        mobile: { size: "165%", position: "49% 20%" }
      }
    ]
  },
  cannaPants: {
    key: "cannaPants",
    title: "Cannacamo Cargo Tech Pants",
    price: 18000,
    sizes: ["28", "30", "32", "34", "36", "38", "40", "42"],
    defaultSize: "34",
    media: {
      src: "./assets/canna-listing.png",
      desktop: { size: "182%", position: "49% 18%" },
      mobile: { size: "230%", position: "49% 17%" }
    }
  },
  pantoneHoodie: {
    key: "pantoneHoodie",
    title: "Pantone Cartel Hoodie",
    price: 26000,
    colors: ["Blue", "Grey", "Pink"],
    defaultColor: "Grey",
    sizes: ["XS", "Small", "Medium", "Large", "XL", "2X", "3X"],
    defaultSize: "Large",
    bullets: [
      "True to size",
      "Heavyweight fleece construction",
      "Cartel graphic placement at front and back",
      "Built to complete the matching Pantone fit"
    ],
    media: [
      {
        kind: "crop",
        src: "./assets/pantone-pdp-desktop.png",
        desktop: { size: "134%", position: "13% 16%" },
        mobile: { size: "178%", position: "14% 16%" }
      },
      {
        kind: "crop",
        src: "./assets/pantone-pdp-desktop.png",
        desktop: { size: "140%", position: "14% 36%" },
        mobile: { size: "188%", position: "14% 37%" }
      },
      {
        kind: "crop",
        src: "./assets/pantone-listing.png",
        desktop: { size: "170%", position: "63% 15%" },
        mobile: { size: "225%", position: "63% 15%" }
      },
      {
        kind: "crop",
        src: "./assets/asaali-pdp-mobile.png",
        desktop: { size: "138%", position: "49% 22%" },
        mobile: { size: "170%", position: "49% 22%" }
      }
    ]
  },
  pantoneSweats: {
    key: "pantoneSweats",
    title: "Pantone Cartel Sweatpants",
    price: 18000,
    sizes: ["XS", "Small", "Medium", "Large", "XL", "2X", "3X"],
    defaultSize: "Large",
    media: {
      src: "./assets/pantone-listing.png",
      desktop: { size: "166%", position: "33.5% 14%" },
      mobile: { size: "215%", position: "33.5% 14%" }
    }
  },
  deadhomiesTee: {
    key: "deadhomiesTee",
    title: "Deadhomie$ In Loving Memory Tee",
    price: 8000,
    sizes: ["XS", "Small", "Medium", "Large", "XL", "2X", "3X", "4X"],
    defaultSize: "Large",
    media: {
      src: "./assets/pantone-listing.png",
      desktop: { size: "172%", position: "87% 14%" },
      mobile: { size: "224%", position: "87% 14%" }
    }
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
  cart: []
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
const cartOverlay = document.getElementById("cart-overlay");
const cartDrawer = document.getElementById("cart-drawer");
const cartItems = document.getElementById("cart-items");
const cartCount = document.getElementById("bag-count");
const cartCountMobile = document.getElementById("bag-count-mobile");
const cartCountTitle = document.getElementById("cart-count-title");
const subtotalValue = document.getElementById("subtotal-value");

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

function getMediaStyles(media) {
  const mobile = window.innerWidth <= 960;
  const crop = mobile ? media.mobile : media.desktop;

  return {
    backgroundImage: `url("${media.src}")`,
    backgroundSize: crop.size,
    backgroundPosition: crop.position
  };
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
      render();
    });
  });
}

function renderGallery() {
  const product = getMainProduct();
  const currentMedia = product.media[state.selectedImage];
  const galleryStyles = getMediaStyles(currentMedia);

  breadcrumbLabel.textContent = getCurrentStory().breadcrumb;
  gallery.innerHTML = `<div class="gallery-frame" style="background-image:${galleryStyles.backgroundImage};background-size:${galleryStyles.backgroundSize};background-position:${galleryStyles.backgroundPosition};"></div>`;

  thumbs.innerHTML = product.media
    .map((media, index) => {
      const styles = getMediaStyles(media);

      return `
        <button type="button" class="thumb-button ${index === state.selectedImage ? "is-active" : ""}" data-index="${index}">
          <div class="thumb-frame" style="background-image:${styles.backgroundImage};background-size:${styles.backgroundSize};background-position:${styles.backgroundPosition};"></div>
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
  qtyValue.textContent = state.quantity;

  renderColors(product);

  mainSizeGrid.innerHTML = product.sizes
    .map(
      (size) => `
        <button type="button" class="size-chip ${size === state.mainSize ? "is-active" : ""}" data-size="${size}">
          ${size}
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

  fitGrid.innerHTML = story.bundle
    .map((key) => {
      const product = products[key];
      const styles = getMediaStyles(product.media);
      const selected = state.bundleSelections[key] || product.defaultSize || product.sizes[0];
      const inCart = state.cart.some((item) => item.key === key && item.size === selected);

      return `
        <article class="fit-card">
          <div class="fit-card__media" style="background-image:${styles.backgroundImage};background-size:${styles.backgroundSize};background-position:${styles.backgroundPosition};"></div>
          <div>
            <h3 class="fit-card__title">${product.title}</h3>
            <p class="fit-card__price">${formatMoney(product.price)}</p>
            <select class="fit-card__size" data-select="${key}">
              ${product.sizes.map((size) => `<option value="${size}" ${selected === size ? "selected" : ""}>${size}</option>`).join("")}
            </select>
            <button type="button" class="fit-card__button ${inCart ? "is-added" : ""}" data-add="${key}">
              ${inCart ? "Added" : "Add to fit"}
            </button>
          </div>
        </article>
      `;
    })
    .join("");

  fitGrid.querySelectorAll("[data-select]").forEach((select) => {
    select.addEventListener("change", () => {
      state.bundleSelections[select.dataset.select] = select.value;
    });
  });

  fitGrid.querySelectorAll("[data-add]").forEach((button) => {
    button.addEventListener("click", () => {
      const product = products[button.dataset.add];
      const size = state.bundleSelections[product.key] || product.defaultSize || product.sizes[0];

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

  cartCount.textContent = totalQuantity;
  cartCountMobile.textContent = totalQuantity;
  cartCountTitle.textContent = totalQuantity;
  subtotalValue.textContent = formatMoney(subtotal);

  if (!state.cart.length) {
    cartItems.innerHTML = `<p class="cart-item__meta">Your cart is empty.</p>`;
    return;
  }

  cartItems.innerHTML = state.cart
    .map((item, index) => {
      const styles = getMediaStyles(item.media);
      const meta = [item.color, item.size].filter(Boolean).join(" / ");

      return `
        <article class="cart-item">
          <div class="cart-item__media" style="background-image:${styles.backgroundImage};background-size:${styles.backgroundSize};background-position:${styles.backgroundPosition};"></div>
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
}

window.addEventListener("resize", renderGallery);

render();
