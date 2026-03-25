// Static menu data keeps the site fully functional when opened directly in a browser.
const menuItems = [
  {
    category: "Breakfast",
    name: "Cornetto al Burro",
    description: "Classic Italian butter croissant with a crisp shell and soft layered center.",
    details: "Freshly baked each morning and served best with espresso or cappuccino.",
    protein: "6 g",
    calories: "280 kcal",
    price: 180,
    image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=900&q=80"
  },
  {
    category: "Breakfast",
    name: "Ricotta Pancakes",
    description: "Fluffy pancakes finished with lemon zest, whipped ricotta, and berry compote.",
    details: "A soft, sweet breakfast plate with bright citrus notes and creamy ricotta.",
    protein: "11 g",
    calories: "420 kcal",
    price: 290,
    image: "https://images.unsplash.com/photo-1528207776546-365bb710ee93?auto=format&fit=crop&w=900&q=80"
  },
  {
    category: "Breakfast",
    name: "Frittata Primavera",
    description: "Open-faced omelette with zucchini, tomato, basil, and Parmesan.",
    details: "A light egg dish with spring vegetables, herbs, and a savory cheese finish.",
    protein: "18 g",
    calories: "350 kcal",
    price: 320,
    image: "https://images.unsplash.com/photo-1510693206972-df098062cb71?auto=format&fit=crop&w=900&q=80"
  },
  {
    category: "Breakfast",
    name: "Avocado Bruschetta",
    description: "Toasted sourdough topped with smashed avocado, cherry tomatoes, and olive oil.",
    details: "Crunchy, fresh, and herbaceous with a balance of creamy avocado and tomato.",
    protein: "8 g",
    calories: "310 kcal",
    price: 260,
    image: "https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=900&q=80"
  },
  {
    category: "Breakfast",
    name: "Mascarpone French Toast",
    description: "Golden brioche with mascarpone cream, honey, and roasted figs.",
    details: "Rich and indulgent with caramelized edges and a soft custardy center.",
    protein: "10 g",
    calories: "460 kcal",
    price: 340,
    image: "https://images.unsplash.com/photo-1484723091739-30a097e8f929?auto=format&fit=crop&w=900&q=80"
  },
  {
    category: "Breakfast",
    name: "Mediterranean Egg Bowl",
    description: "Soft eggs with herbed potatoes, olives, peppers, and whipped feta.",
    details: "A hearty savory bowl with creamy eggs, salty feta, and roasted vegetables.",
    protein: "17 g",
    calories: "390 kcal",
    price: 310,
    image: "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=900&q=80"
  },
  {
    category: "Breakfast",
    name: "Pesto Breakfast Panini",
    description: "Pressed panini with mozzarella, basil pesto, tomato, and scrambled eggs.",
    details: "Crisp outside, melty inside, and layered with fragrant basil pesto.",
    protein: "19 g",
    calories: "440 kcal",
    price: 330,
    image: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=900&q=80"
  },
  {
    category: "Breakfast",
    name: "Italian Yogurt Parfait",
    description: "Greek yogurt layered with honey granola, orange segments, and pistachios.",
    details: "A bright and lighter breakfast with crunch, citrus, and nutty sweetness.",
    protein: "12 g",
    calories: "260 kcal",
    price: 240,
    image: "https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&w=900&q=80"
  },
  {
    category: "Breakfast",
    name: "Espresso Tiramisu Oats",
    description: "Overnight oats infused with espresso, cocoa, and vanilla cream.",
    details: "Coffee-forward and creamy, inspired by classic tiramisu flavors.",
    protein: "9 g",
    calories: "300 kcal",
    price: 220,
    image: "https://images.unsplash.com/photo-1517673400267-0251440c45dc?auto=format&fit=crop&w=900&q=80"
  },
  {
    category: "Breakfast",
    name: "Caprese Croissant Sandwich",
    description: "Buttery croissant filled with tomato, mozzarella, basil, and pesto aioli.",
    details: "A flaky breakfast sandwich with fresh Caprese flavors and creamy pesto aioli.",
    protein: "13 g",
    calories: "410 kcal",
    price: 300,
    image: "https://images.unsplash.com/photo-1608039755401-742074f0548d?auto=format&fit=crop&w=900&q=80"
  },
  {
    category: "Lunch",
    name: "Margherita Pizza",
    description: "Wood-fired pizza with San Marzano tomato, mozzarella, basil, and olive oil.",
    details: "A classic Neapolitan-style pizza with a light crust and balanced tomato flavor.",
    protein: "16 g",
    calories: "520 kcal",
    price: 420,
    image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=900&q=80"
  },
  {
    category: "Lunch",
    name: "Chicken Alfredo Pasta",
    description: "Creamy fettuccine with grilled chicken, Parmesan, and cracked pepper.",
    details: "A rich pasta dish with velvety sauce, juicy chicken, and deep cheese flavor.",
    protein: "28 g",
    calories: "610 kcal",
    price: 470,
    image: "https://images.unsplash.com/photo-1645112411341-6c4fd023714a?auto=format&fit=crop&w=900&q=80"
  },
  {
    category: "Lunch",
    name: "Lasagna al Forno",
    description: "Baked layers of pasta, beef ragu, bechamel, and bubbling cheese.",
    details: "Slow-baked and deeply savory with a comforting meat sauce and creamy layers.",
    protein: "24 g",
    calories: "640 kcal",
    price: 490,
    image: "https://images.unsplash.com/photo-1619895092538-128341789043?auto=format&fit=crop&w=900&q=80"
  },
  {
    category: "Lunch",
    name: "Penne Arrabbiata",
    description: "Penne tossed in a spicy tomato sauce with garlic, basil, and chili flakes.",
    details: "Bright, spicy, and clean with a punch of garlic and slow-cooked tomato.",
    protein: "12 g",
    calories: "430 kcal",
    price: 390,
    image: "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?auto=format&fit=crop&w=900&q=80"
  },
  {
    category: "Lunch",
    name: "Mushroom Risotto",
    description: "Creamy Arborio rice with porcini mushrooms, Parmesan, and parsley.",
    details: "Earthy and silky, cooked slowly for a classic risotto texture.",
    protein: "11 g",
    calories: "470 kcal",
    price: 450,
    image: "https://images.unsplash.com/photo-1476124369491-e7addf5db371?auto=format&fit=crop&w=900&q=80"
  },
  {
    category: "Lunch",
    name: "Gnocchi al Pesto",
    description: "Soft potato gnocchi in basil pesto with toasted pine nuts and Parmesan.",
    details: "Tender gnocchi with a fragrant pesto sauce and a lightly nutty finish.",
    protein: "12 g",
    calories: "480 kcal",
    price: 430,
    image: "https://images.unsplash.com/photo-1516100882582-96c3a05fe590?auto=format&fit=crop&w=900&q=80"
  },
  {
    category: "Lunch",
    name: "Eggplant Parmigiana",
    description: "Layered baked eggplant with tomato sauce, mozzarella, and herbs.",
    details: "A vegetarian favorite with soft baked eggplant and bubbling cheese.",
    protein: "14 g",
    calories: "450 kcal",
    price: 410,
    image: "https://images.unsplash.com/photo-1604908176997-4313f9bdcbc6?auto=format&fit=crop&w=900&q=80"
  },
  {
    category: "Lunch",
    name: "Mediterranean Chicken Panini",
    description: "Ciabatta pressed with grilled chicken, provolone, peppers, and pesto.",
    details: "Toasted until crisp and layered with smoky peppers and melted cheese.",
    protein: "22 g",
    calories: "510 kcal",
    price: 360,
    image: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=900&q=80"
  },
  {
    category: "Lunch",
    name: "Caprese Salad Bowl",
    description: "Heirloom tomatoes, buffalo mozzarella, basil, olives, and balsamic glaze.",
    details: "Fresh and cooling, built around ripe tomatoes and creamy mozzarella.",
    protein: "10 g",
    calories: "290 kcal",
    price: 340,
    image: "https://images.unsplash.com/photo-1563379091339-03246963d29a?auto=format&fit=crop&w=900&q=80"
  },
  {
    category: "Lunch",
    name: "Spaghetti Pomodoro",
    description: "Simple, bright tomato pasta with garlic, basil, and extra virgin olive oil.",
    details: "A lighter pasta option with classic tomato sweetness and basil aroma.",
    protein: "10 g",
    calories: "410 kcal",
    price: 370,
    image: "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?auto=format&fit=crop&w=900&q=80"
  },
  {
    category: "Snacks",
    name: "Garlic Focaccia",
    description: "Warm baked focaccia with garlic butter, rosemary, and sea salt.",
    details: "Soft inside and crisp on top, ideal for sharing or pairing with soup.",
    protein: "7 g",
    calories: "250 kcal",
    price: 190,
    image: "https://images.unsplash.com/photo-1549931319-a545dcf3bc73?auto=format&fit=crop&w=900&q=80"
  },
  {
    category: "Snacks",
    name: "Arancini Balls",
    description: "Golden risotto croquettes filled with mozzarella and served with marinara.",
    details: "Crunchy outside with a creamy rice center and stretchy cheese filling.",
    protein: "9 g",
    calories: "330 kcal",
    price: 260,
    image: "https://images.unsplash.com/photo-1604908177225-1c13bb05b3cc?auto=format&fit=crop&w=900&q=80"
  },
  {
    category: "Snacks",
    name: "Bruschetta Trio",
    description: "Three toasted slices topped with tomato basil, mushroom cream, and olive tapenade.",
    details: "A mixed tasting plate that moves from bright and fresh to rich and savory.",
    protein: "8 g",
    calories: "290 kcal",
    price: 280,
    image: "https://images.unsplash.com/photo-1572695157366-5e585ab2b69f?auto=format&fit=crop&w=900&q=80"
  },
  {
    category: "Snacks",
    name: "Mozzarella Sticks",
    description: "Crispy fried mozzarella with Parmesan dust and spicy tomato dip.",
    details: "A crowd-pleasing snack with crunchy coating and melted cheese center.",
    protein: "11 g",
    calories: "360 kcal",
    price: 240,
    image: "https://images.unsplash.com/photo-1548340748-6d2b7d7da280?auto=format&fit=crop&w=900&q=80"
  },
  {
    category: "Snacks",
    name: "Truffle Fries",
    description: "Crisp fries tossed with truffle oil, herbs, and grated pecorino.",
    details: "A rich upgrade to classic fries with aromatic truffle and sharp cheese.",
    protein: "5 g",
    calories: "320 kcal",
    price: 220,
    image: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&w=900&q=80"
  },
  {
    category: "Snacks",
    name: "Mini Calzones",
    description: "Handheld folded pizzas stuffed with ricotta, spinach, and mozzarella.",
    details: "Small baked calzones with a soft center and lightly blistered crust.",
    protein: "13 g",
    calories: "390 kcal",
    price: 300,
    image: "https://images.unsplash.com/photo-1511689660979-10d2b1aada49?auto=format&fit=crop&w=900&q=80"
  },
  {
    category: "Snacks",
    name: "Stuffed Mushrooms",
    description: "Button mushrooms baked with herbed cheese, breadcrumbs, and garlic butter.",
    details: "Earthy mushrooms packed with savory cheese filling and crisp topping.",
    protein: "8 g",
    calories: "240 kcal",
    price: 250,
    image: "https://images.unsplash.com/photo-1626200419199-391ae4be7a41?auto=format&fit=crop&w=900&q=80"
  },
  {
    category: "Snacks",
    name: "Polenta Bites",
    description: "Crisp polenta squares served with creamy Gorgonzola dip.",
    details: "Golden fried polenta with a rich blue cheese sauce for dipping.",
    protein: "6 g",
    calories: "270 kcal",
    price: 210,
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=900&q=80"
  },
  {
    category: "Snacks",
    name: "Pesto Cheese Twists",
    description: "Flaky pastry twists with basil pesto, Parmesan, and black pepper.",
    details: "Buttery and crisp, with basil fragrance and a savory cheese finish.",
    protein: "6 g",
    calories: "230 kcal",
    price: 180,
    image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=900&q=80"
  },
  {
    category: "Snacks",
    name: "Tomato Olive Crostini",
    description: "Toasted baguette with tomato confit, olives, basil, and whipped ricotta.",
    details: "A crisp bite with sweet tomato, briny olives, and smooth ricotta.",
    protein: "7 g",
    calories: "260 kcal",
    price: 230,
    image: "https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=900&q=80"
  },
  {
    category: "Dinner",
    name: "Lobster Ravioli",
    description: "Delicate pasta parcels in saffron cream with herbs and citrus butter.",
    details: "Elegant ravioli with sweet lobster filling and a silky saffron sauce.",
    protein: "23 g",
    calories: "590 kcal",
    price: 690,
    image: "https://images.unsplash.com/photo-1559847844-5315695dadae?auto=format&fit=crop&w=900&q=80"
  },
  {
    category: "Dinner",
    name: "Osso Buco Milanese",
    description: "Slow-braised veal shank with gremolata and creamy Parmesan risotto.",
    details: "A deeply savory braise with tender meat and bright gremolata on top.",
    protein: "34 g",
    calories: "760 kcal",
    price: 760,
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=900&q=80"
  },
  {
    category: "Dinner",
    name: "Seafood Linguine",
    description: "Linguine with prawns, calamari, mussels, garlic, chili, and white wine sauce.",
    details: "Briny and aromatic with mixed seafood and a light chili kick.",
    protein: "29 g",
    calories: "620 kcal",
    price: 640,
    image: "https://images.unsplash.com/photo-1563379091339-03246963d29a?auto=format&fit=crop&w=900&q=80"
  },
  {
    category: "Dinner",
    name: "Chicken Cacciatore",
    description: "Braised chicken with tomatoes, olives, herbs, and rustic vegetables.",
    details: "Slow-cooked until tender in a rich tomato and herb braising sauce.",
    protein: "31 g",
    calories: "580 kcal",
    price: 560,
    image: "https://images.unsplash.com/photo-1600891964092-4316c288032e?auto=format&fit=crop&w=900&q=80"
  },
  {
    category: "Dinner",
    name: "Wild Mushroom Tagliatelle",
    description: "Silky tagliatelle with mushrooms, thyme, cream, and shaved Parmesan.",
    details: "A rich vegetarian pasta with earthy mushrooms and fresh herb aroma.",
    protein: "15 g",
    calories: "560 kcal",
    price: 520,
    image: "https://images.unsplash.com/photo-1516100882582-96c3a05fe590?auto=format&fit=crop&w=900&q=80"
  },
  {
    category: "Dinner",
    name: "Burrata Neapolitan Pizza",
    description: "Stone-baked pizza topped with roasted tomato sauce, burrata, basil, and chili oil.",
    details: "Finished with cool creamy burrata over a hot blistered crust.",
    protein: "18 g",
    calories: "610 kcal",
    price: 560,
    image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=900&q=80"
  },
  {
    category: "Dinner",
    name: "Porcini Truffle Risotto",
    description: "Creamy risotto with porcini mushrooms, truffle butter, and aged pecorino.",
    details: "Luxuriously creamy with bold mushroom depth and a truffle finish.",
    protein: "13 g",
    calories: "540 kcal",
    price: 590,
    image: "https://images.unsplash.com/photo-1476124369491-e7addf5db371?auto=format&fit=crop&w=900&q=80"
  },
  {
    category: "Dinner",
    name: "Grilled Salmon Piccata",
    description: "Pan-grilled salmon with lemon caper butter and charred asparagus.",
    details: "Bright, buttery, and clean with a citrus caper sauce over flaky salmon.",
    protein: "33 g",
    calories: "570 kcal",
    price: 670,
    image: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&w=900&q=80"
  },
  {
    category: "Dinner",
    name: "Spinach Ricotta Cannelloni",
    description: "Baked pasta tubes filled with ricotta and spinach in tomato cream sauce.",
    details: "Soft pasta filled generously and baked until the top turns golden.",
    protein: "17 g",
    calories: "550 kcal",
    price: 530,
    image: "https://images.unsplash.com/photo-1619895092538-128341789043?auto=format&fit=crop&w=900&q=80"
  },
  {
    category: "Dinner",
    name: "Tuscan Herb Chicken",
    description: "Roasted chicken breast in garlic cream with sun-dried tomatoes and basil.",
    details: "A hearty dinner plate with creamy garlic sauce and herb-roasted chicken.",
    protein: "32 g",
    calories: "600 kcal",
    price: 580,
    image: "https://images.unsplash.com/photo-1532550907401-a500c9a57435?auto=format&fit=crop&w=900&q=80"
  }
];

const menuGrid = document.getElementById("menuGrid");
const filterButtons = document.querySelectorAll(".filter-btn");
const navToggle = document.getElementById("navToggle");
const navMenu = document.getElementById("navMenu");
const navLinks = document.querySelectorAll(".nav-link");
const sections = document.querySelectorAll("main section, header.hero");
const reservationForm = document.getElementById("reservationForm");
const formMessage = document.getElementById("formMessage");
const loader = document.getElementById("loader");
const backToTopButton = document.getElementById("backToTop");
const revealElements = document.querySelectorAll(".reveal");
const dishModal = document.getElementById("dishModal");
const dishModalBackdrop = document.getElementById("dishModalBackdrop");
const dishModalClose = document.getElementById("dishModalClose");
const dishModalImage = document.getElementById("dishModalImage");
const dishModalCategory = document.getElementById("dishModalCategory");
const dishModalTitle = document.getElementById("dishModalTitle");
const dishModalDescription = document.getElementById("dishModalDescription");
const dishModalPrice = document.getElementById("dishModalPrice");
const dishModalProtein = document.getElementById("dishModalProtein");
const dishModalCalories = document.getElementById("dishModalCalories");
const dishModalDetails = document.getElementById("dishModalDetails");

let currentFilter = "all";
let lastFocusedCard = null;

window.addEventListener("load", () => {
  window.setTimeout(() => loader.classList.add("hidden"), 700);
});

document.addEventListener("DOMContentLoaded", () => {
  renderMenu(currentFilter);
  setMinimumDate();
  setupMenuFilters();
  setupMenuCardInteractions();
  setupDishModal();
  setupMobileMenu();
  setupScrollSpy();
  setupRevealAnimations();
  setupBackToTop();
  setupReservationForm();
  applyImageFallbacks();
});

function renderMenu(filter) {
  const filteredItems = filter === "all"
    ? menuItems
    : menuItems.filter((item) => item.category === filter);

  menuGrid.innerHTML = filteredItems.map((item) => {
    const itemIndex = menuItems.findIndex((menuItem) => menuItem.name === item.name);

    return `
      <article class="menu-card reveal visible" tabindex="0" role="button" aria-label="View details for ${item.name}" data-index="${itemIndex}">
        <img src="${item.image}" alt="${item.name}" loading="lazy" data-fallback-label="${item.name}">
        <div class="menu-card__body">
          <span class="menu-card__tag">${item.category}</span>
          <div class="menu-card__top">
            <h3>${item.name}</h3>
            <span class="menu-card__price">Rs ${item.price}</span>
          </div>
          <p>${item.description}</p>
        </div>
      </article>
    `;
  }).join("");

  applyImageFallbacks();
  setupMenuCardInteractions();
}

function setupMenuFilters() {
  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      currentFilter = button.dataset.filter;
      filterButtons.forEach((item) => item.classList.remove("active"));
      button.classList.add("active");
      renderMenu(currentFilter);
    });
  });
}

function setupMenuCardInteractions() {
  document.querySelectorAll(".menu-card").forEach((card) => {
    card.addEventListener("click", () => openDishModal(Number(card.dataset.index), card));
    card.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        openDishModal(Number(card.dataset.index), card);
      }
    });
  });
}

function setupDishModal() {
  dishModalClose.addEventListener("click", closeDishModal);
  dishModalBackdrop.addEventListener("click", closeDishModal);

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && dishModal.classList.contains("open")) {
      closeDishModal();
    }
  });
}

function openDishModal(index, triggerCard) {
  const item = menuItems[index];

  if (!item) {
    return;
  }

  lastFocusedCard = triggerCard || null;
  dishModalImage.src = item.image;
  dishModalImage.alt = item.name;
  dishModalImage.dataset.fallbackLabel = item.name;
  dishModalCategory.textContent = item.category;
  dishModalTitle.textContent = item.name;
  dishModalDescription.textContent = item.description;
  dishModalPrice.textContent = `Rs ${item.price}`;
  dishModalProtein.textContent = item.protein;
  dishModalCalories.textContent = item.calories;
  dishModalDetails.textContent = item.details;
  dishModal.classList.add("open");
  dishModal.setAttribute("aria-hidden", "false");
  document.body.classList.add("menu-open");
  applyImageFallbacks();
  dishModalClose.focus();
}

function closeDishModal() {
  dishModal.classList.remove("open");
  dishModal.setAttribute("aria-hidden", "true");
  document.body.classList.remove("menu-open");

  if (lastFocusedCard) {
    lastFocusedCard.focus();
  }
}

function setupMobileMenu() {
  navToggle.addEventListener("click", () => {
    const expanded = navMenu.classList.toggle("open");
    navToggle.setAttribute("aria-expanded", String(expanded));
    document.body.classList.toggle("menu-open", expanded);
  });

  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      navMenu.classList.remove("open");
      navToggle.setAttribute("aria-expanded", "false");
      if (!dishModal.classList.contains("open")) {
        document.body.classList.remove("menu-open");
      }
    });
  });
}

// Keep the current section highlighted in the sticky nav while the user scrolls.
function setupScrollSpy() {
  const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) {
        return;
      }

      const currentId = entry.target.id;

      navLinks.forEach((link) => {
        const isMatch = link.getAttribute("href") === `#${currentId}`;
        link.classList.toggle("active", isMatch);
      });
    });
  }, {
    threshold: 0.45
  });

  sections.forEach((section) => sectionObserver.observe(section));
}

// Reveal sections as they enter the viewport for a softer, more polished feel.
function setupRevealAnimations() {
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        revealObserver.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.16
  });

  revealElements.forEach((element) => revealObserver.observe(element));
}

function setupBackToTop() {
  window.addEventListener("scroll", () => {
    backToTopButton.classList.toggle("visible", window.scrollY > 500);
  });

  backToTopButton.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
}

// Validate the reservation locally and show a confirmation without any backend.
function setupReservationForm() {
  reservationForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const formData = new FormData(reservationForm);
    const data = Object.fromEntries(formData.entries());

    if (!validateForm(data)) {
      formMessage.textContent = "Please fix the highlighted fields and try again.";
      return;
    }

    formMessage.textContent = `Thank you, ${data.name}. Your table for ${data.guests} on ${data.date} at ${data.time} has been reserved.`;
    reservationForm.reset();
    setMinimumDate();
    clearErrors();
  });
}

function validateForm(data) {
  clearErrors();

  let valid = true;
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const fields = [
    { id: "name", invalid: !data.name.trim(), message: "Please enter your name." },
    { id: "email", invalid: !emailPattern.test(data.email.trim()), message: "Please enter a valid email address." },
    { id: "phone", invalid: data.phone.trim().length < 7, message: "Please enter a valid phone number." },
    { id: "date", invalid: !data.date || new Date(data.date) < today, message: "Please choose a valid reservation date." },
    { id: "time", invalid: !data.time, message: "Please select a reservation time." },
    { id: "guests", invalid: !data.guests || Number(data.guests) < 1, message: "Please enter at least 1 guest." }
  ];

  fields.forEach((field) => {
    if (field.invalid) {
      valid = false;
      showError(field.id, field.message);
    }
  });

  return valid;
}

function showError(id, message) {
  const input = document.getElementById(id);
  const errorText = input.parentElement.querySelector(".error-text");
  input.classList.add("input-error");
  errorText.textContent = message;
}

function clearErrors() {
  reservationForm.querySelectorAll("input").forEach((input) => {
    input.classList.remove("input-error");
  });

  reservationForm.querySelectorAll(".error-text").forEach((element) => {
    element.textContent = "";
  });
}

function setMinimumDate() {
  const dateInput = document.getElementById("date");
  const now = new Date();
  const localDate = new Date(now.getTime() - now.getTimezoneOffset() * 60000)
    .toISOString()
    .split("T")[0];
  dateInput.min = localDate;
}

function applyImageFallbacks() {
  document.querySelectorAll("img").forEach((image) => {
    if (image.dataset.fallbackBound === "true") {
      return;
    }

    image.dataset.fallbackBound = "true";
    image.addEventListener("error", () => {
      const label = image.dataset.fallbackLabel || image.alt || "Praveen Cuisine";
      image.src = createPlaceholderImage(label);
    }, { once: true });
  });
}

function createPlaceholderImage(label) {
  const safeLabel = escapeSvgText(label);

  return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(
    `<svg xmlns="http://www.w3.org/2000/svg" width="900" height="600" viewBox="0 0 900 600">
      <defs>
        <linearGradient id="g" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0%" stop-color="#2a1f18"/>
          <stop offset="100%" stop-color="#b98a45"/>
        </linearGradient>
      </defs>
      <rect width="900" height="600" fill="url(#g)"/>
      <circle cx="730" cy="140" r="110" fill="rgba(255,255,255,0.08)"/>
      <circle cx="160" cy="470" r="150" fill="rgba(255,255,255,0.06)"/>
      <text x="50%" y="46%" text-anchor="middle" fill="#fff7ef" font-family="Poppins, Arial, sans-serif" font-size="28" letter-spacing="3">PRAVEEN CUISINE</text>
      <text x="50%" y="55%" text-anchor="middle" fill="#fff0d8" font-family="Poppins, Arial, sans-serif" font-size="34" font-weight="700">${safeLabel}</text>
    </svg>`
  )}`;
}

function escapeSvgText(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}
