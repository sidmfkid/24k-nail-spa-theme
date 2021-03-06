// ************ Open Mobile Menu *************//

const hamburgerBtn = document.querySelector(".hamburger-button");

if (window.innerWidth <= 899) {
  hamburgerBtn.setAttribute("aria-hidden", false);
}
console.log(window.innerWidth);
console.log(hamburgerBtn.ariaHidden);
const openMenu = () => {
  const navlinkContainer = document.querySelector(".navlink__container");
  const overlay = document.querySelector(".overlay");
  const navContainer = document.querySelector(".nav-container");
  navlinkContainer.classList.toggle("open");
  overlay.classList.toggle("open");
  navContainer.classList.toggle("open");
  hamburgerBtn.classList.toggle("open");
};

hamburgerBtn.addEventListener("click", openMenu);

// ************ Intersection Observer ************* //

let options = {
  root: null,
  rootMargin: "0px",
  threshold: 0.4,
};

let observer = new IntersectionObserver(callbackFn, options);

let targets = document.querySelectorAll(".shopify-section");

targets.forEach((target) => {
  observer.observe(target);
});

function callbackFn(entries, observer) {
  entries.forEach((entry) => {
    if (entry.target.id.includes("hero")) {
      stickNav(entry);
    }

    animateIn(entry);
  });
}

function stickNav(entry) {
  const header = document.querySelector(".header");

  if (entry.target.id.includes("hero") && entry.isIntersecting === false) {
    // console.log(entry);
    header.classList.add("sticky");
    setTimeout(() => {
      header.classList.add("slideDown");
    }, 100);
  } else if (
    entry.target.id.includes("hero") &&
    entry.isIntersecting === true
  ) {
    // console.log(entry);
    header.classList.remove("slideDown");
    setTimeout(() => {
      header.classList.remove("sticky");
    }, 400);
  }
}

function animateIn(entry) {
  if (entry.isIntersecting === true) {
    entry.target.firstChild.classList.add("fadeIn");
  }
}

// ************ Cart ************* //
const cartIcon = document.querySelector("#cartIcon");
const cartNum = document.querySelector(".cart-icon-num");

const checkCart = async function (fn, e) {
  const res = await fetch("/cart.js", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await res.json();
  if (!fn) {
    addNumToCart(await data);
  }

  if (fn) {
    if (fn.name === "renderReview") {
      fn(e, data);
    }
  }
  return await data;
};

document.addEventListener("DOMContentLoaded", checkCart());

function addNumToCart(data) {
  if (data.item_count >= 1 && cartNum.classList.contains("hide")) {
    // console.log("ADDED NUM");
    cartNum.classList.toggle("hide");
    cartNum.textContent = data.items.length;
    return;
  }
  if (data.item_count === 0 && !cartNum.classList.contains("hide")) {
    // console.log("ADDED NUM");
    cartNum.classList.toggle("hide");
    cartNum.textContent = data.items.length;
    return;
  }
}

// let observer = new IntersectionObserver(getWidth, options)
