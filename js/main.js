/* main.js - Sweet Crumbs Bakery, Part 3 JavaScript features
   Each feature only runs if its HTML hook exists on the page. */

document.addEventListener("DOMContentLoaded", () => {
  initAccordion();
  initLightbox();
  initSearchFilter();
  initScrollAnimations();
  initMap();
  initDynamicProducts();
});

/* 1. ACCORDION (FAQ on the about page) */
function initAccordion() {
  document.querySelectorAll(".accordion-header").forEach((btn) => {
    btn.setAttribute("aria-expanded", "false");
    btn.addEventListener("click", () => {
      const panel = btn.nextElementSibling;
      const open = panel.classList.toggle("open");
      btn.setAttribute("aria-expanded", open);
    });
  });
}

/* 2. GALLERY LIGHTBOX (click an image to see it larger) */
function initLightbox() {
  const images = document.querySelectorAll(".gallery img");
  if (!images.length) return;

  const overlay = document.createElement("div");
  overlay.className = "lightbox";
  overlay.innerHTML = '<span class="lightbox-close" aria-label="Close">&times;</span><img alt="">';
  document.body.appendChild(overlay);
  const bigImg = overlay.querySelector("img");

  images.forEach((img) => {
    img.addEventListener("click", () => {
      bigImg.src = img.src;
      bigImg.alt = img.alt;
      overlay.classList.add("show");
    });
  });
  overlay.addEventListener("click", () => overlay.classList.remove("show"));
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") overlay.classList.remove("show");
  });
}

/* 3. SEARCH AND SORT (products page) */
function initSearchFilter() {
  const box = document.getElementById("searchBox");
  const list = document.getElementById("productList");
  if (!box || !list) return;
  const sort = document.getElementById("sortSelect");

  function update() {
    const term = box.value.trim().toLowerCase();
    const items = Array.from(list.querySelectorAll(".item"));
    items.forEach((i) => {
      i.style.display = i.dataset.name.toLowerCase().includes(term) ? "" : "none";
    });
    if (sort) {
      items.sort((a, b) =>
        sort.value === "price"
          ? Number(a.dataset.price) - Number(b.dataset.price)
          : a.dataset.name.localeCompare(b.dataset.name)
      );
      items.forEach((i) => list.appendChild(i));
    }
  }
  box.addEventListener("input", update);
  if (sort) sort.addEventListener("change", update);
}

/* 4. SCROLL ANIMATIONS (elements with class "fade-in" fade into view) */
function initScrollAnimations() {
  const els = document.querySelectorAll(".fade-in");
  if (!els.length) return;
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add("visible");
          observer.unobserve(e.target);
        }
      });
    },
    { threshold: 0.15 }
  );
  els.forEach((el) => observer.observe(el));
}

/* 5. LEAFLET MAP (contact page). Change the coordinates to your bakery. */
function initMap() {
  const mapDiv = document.getElementById("map");
  if (!mapDiv || typeof L === "undefined") return;
  const coords = [-25.65, 31.7889761]; // Tonga, Nkomazi (approximate)
  const map = L.map("map").setView(coords, 14);
  L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: "&copy; OpenStreetMap contributors",
  }).addTo(map);
  L.marker(coords).addTo(map).bindPopup("<b>Sweet Crumbs Bakery</b><br>123 Main Road, Nkomazi").openPopup();
}

/* 6. DYNAMIC CONTENT (home page cards built with JavaScript) */
function initDynamicProducts() {
  const container = document.getElementById("featured");
  if (!container) return;
  const products = [
    { name: "Fresh Bread", desc: "Baked every morning." },
    { name: "Croissants", desc: "Buttery and flaky." },
    { name: "Cupcakes", desc: "Topped with handmade buttercream." },
    { name: "Celebration Cakes", desc: "Made to order." },
  ];
  products.forEach((p) => {
    const card = document.createElement("article");
    card.className = "card fade-in";
    card.innerHTML = `<h3>${p.name}</h3><p>${p.desc}</p>`;
    container.appendChild(card);
  });
}