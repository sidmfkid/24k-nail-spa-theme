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
  threshold: 0,
};

// ************ Cart ************* //
const cartIcon = document.querySelector("#cartIcon");
const cartNum = document.querySelector(".cart-icon-num");

const checkCart = async function (fn) {
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
      fn(data);
    }
  }
};

document.addEventListener("DOMContentLoaded", checkCart());

function addNumToCart(data) {
  if (data.item_count >= 1) {
    console.log("ADDED NUM");
    cartNum.classList.toggle("hide");
    cartNum.textContent = data.items.length;
    return;
  }
}

// let observer = new IntersectionObserver(getWidth, options)
