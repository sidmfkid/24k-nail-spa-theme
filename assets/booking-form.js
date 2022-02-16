const bookNowBtns = document.querySelectorAll("#bookAppointment");
const step1 = document.querySelector(".booking-form__content-step-1");
const step2 = document.querySelector(".booking-form__content-step-2");
const step3 = document.querySelector(".booking-form__content-step-3");
const step4 = document.querySelector(".booking-form__content-step-4");
const step5 = document.querySelector(".booking-form__content-step-5");
const step6 = document.querySelector(".booking-form__content-step-6");
const step7 = document.querySelector(".booking-form__content-step-7");
const step8 = document.querySelector(".booking-form__content-step-8");

const cartBtns = document.querySelector(".cart-btns");
bookNowBtns.forEach((btn) => {
  btn.addEventListener("click", toggleForm.bind(this));
});
cartIcon.addEventListener("click", toggleForm.bind(this));

// document.addEventListener("DOMContentLoaded", (e) => {
//   console.log(e);
//   const loadingIconStep6 = document.querySelector(".loading-svg");
//   loadingIconStep6.classList.add("hide");
//   console.log(loadingIconStep6);
// });
const loadingIconStep6 = document.querySelector(
  ".booking-form__content-step-6 .loading-svg"
);
const loadingIconStep5 = document.querySelector(
  ".booking-form__content-step-5 .loading-svg"
);

const loadingIconStep3 = document.querySelector(
  ".booking-form__content-step-3 .loading-svg"
);

const loadingIconStep4 = document.querySelector(
  ".booking-form__content-step-4 .loading-svg"
);

window.addEventListener("load", (e) => {
  e.preventDefault();
  // console.log(e);

  loadingIconStep6.classList.add("hide");
  // console.log(loadingIconStep6);
});

function toggleForm(e) {
  e.preventDefault();

  const bookingForm = document.querySelector(".booking-form");
  const goBack = document.getElementById("goBack");

  if (
    e.target.id === "cartIcon" ||
    e.target.classList.contains("cart-icon") ||
    e.target.classList.contains("cart-icon-num") ||
    e.target.classList.contains("cart-icon-img")
  ) {
    bookingForm.classList.add("open");
    step1.classList.remove("selected");
    step7.classList.add("selected");
    checkCart(renderReview, e);
  }

  if (
    e.target.id === "bookAppointment" &&
    e.target.classList.contains("goToServices")
  ) {
    bookingForm.classList.add("open");
    step1.classList.remove("selected");
    step2.classList.add("selected");

    return;
  } else if (e.target.id === "bookAppointment") {
    bookingForm.classList.add("open");
    return;
  }

  if (
    !cartBtns.classList.contains("hide") &&
    !step5.classList.contains("selected") &&
    !step1.classList.contains("selected")
  ) {
    cartBtns.classList.add("hide");
  }

  if (
    (bookingForm.classList.contains("open") &&
      !step1.classList.contains("selected") &&
      !step2.classList.contains("selected") &&
      !step3.classList.contains("selected") &&
      !step4.classList.contains("selected") &&
      !step5.classList.contains("selected") &&
      e.target.id === "closeBookingForm") ||
    (bookingForm.classList.contains("open") &&
      e.target.id === "closeBookingForm")
  ) {
    bookingForm.classList.remove("open");
    step1.classList.add("selected");
    step2.classList.remove("selected");
    step3.classList.remove("selected");
    step4.classList.remove("selected");
    step5.classList.remove("selected");
    step6.classList.remove("selected");
    step7.classList.remove("selected");
    step8.classList.remove("selected");
    cartBtns.classList.add("hide");

    !goBack.classList.contains("hide")
      ? goBack.classList.add("hide")
      : goBack.classList.remove("hide");
    return;
  }
}

const closeBookingForm = document.querySelector(
  ".booking-form__overlay #closeBookingForm"
);
const closeBookingFormSmall = document.querySelector(
  ".booking-form__content-header #closeBookingForm"
);
closeBookingForm.addEventListener("click", toggleForm.bind(this));
closeBookingFormSmall.addEventListener("click", toggleForm.bind(this));
const singleAppointment = document.getElementById("singleAppointment");
const goBack = document.querySelector(".booking-form__content #goBack");
singleAppointment.addEventListener("click", toggleSelected.bind(this));
goBack.addEventListener("click", toggleSelected.bind(this));

const selectDateBtn = document.querySelector(".set-date");
selectDateBtn.addEventListener("click", toggleSelected.bind(this));
const stepBack = document.querySelector("#stepBack");
const backToProducts = document.querySelector(
  ".booking-form__content-step-4 #stepBack"
);
const backToCollections = document.querySelectorAll(
  ".booking-form__content-step-3 #stepBack, .booking-form__content-step-3 #stepBack ~ h2"
);

const cartStepBack = document.querySelector(
  ".booking-form__content-step-5 #stepBack"
);

const appointmentStepBack = document.querySelector(
  ".booking-form__content-step-6 #stepBack"
);

const goToCart = document.querySelector(".go-to-cart");
const addMoreItems = document.querySelector(".add-more");
goToCart.addEventListener("click", viewCart.bind(this));
stepBack.addEventListener("click", toggleSelected.bind(this));
addMoreItems.addEventListener("click", toggleSelected.bind(this));
backToProducts.addEventListener("click", toggleSelected.bind(this));

backToCollections.forEach((el) => {
  el.addEventListener("click", toggleSelected.bind(this));
});

cartStepBack.addEventListener("click", toggleSelected.bind(this));
appointmentStepBack.addEventListener("click", toggleSelected.bind(this));

function viewCart(e) {
  e.preventDefault();

  if (
    e.target.classList.contains("go-to-cart") &&
    step4.classList.contains("selected")
  ) {
    const errorMsg = document.querySelector(".cart-error");
    const successMsg = document.querySelector(".cart-success");
    errorMsg.classList.remove("show");
    successMsg.classList.remove("show");
    step4.classList.remove("selected");
    step5.classList.add("selected");
    cartBtns.classList.remove("hide");
  }
}

function toggleSelected(e) {
  e.preventDefault();
  if (e.target.id === "goBack" && step8.classList.contains("selected")) {
    step8.classList.remove("selected");
    step7.classList.add("selected");
    return;
  }
  if (
    (e.target.id === "stepBack" &&
      step5.classList.contains("selected") &&
      !cartBtns.classList.contains("hide")) ||
    (e.target.classList.contains("booking-form__content-step-5-heading") &&
      step5.classList.contains("selected") &&
      !cartBtns.classList.contains("hide")) ||
    (e.target.id === "goBack" && step5.classList.contains("selected"))
  ) {
    cartBtns.classList.add("hide");
  }
  if (e.target.id === "goBack" && step2.classList.contains("selected")) {
    step2.classList.remove("selected");
    step1.classList.add("selected");
    return;
  }
  if (step7.classList.contains("selected") && e.target.id === "goBack") {
    step7.classList.remove("selected");
    step4.classList.add("selected");
  }

  if (
    (step6.classList.contains("selected") && e.target.id === "stepBack") ||
    (step6.classList.contains("selected") && e.target.id === "goBack")
  ) {
    step6.classList.remove("selected");
    step5.classList.add("selected");
    cartBtns.classList.toggle("hide");
    removeProducts();
    return;
  }

  if (step3.classList.contains("selected") && e.target.id === "goBack") {
    step3.classList.remove("selected");
    step2.classList.add("selected");
    removeProducts();
    return;
  }

  if (
    step5.classList.contains("selected") &&
    e.target.classList.contains("set-date")
  ) {
    step5.classList.remove("selected");
    step6.classList.add("selected");
    e.target.parentNode.classList.add("hide");
    removeProducts();
    return;
  }

  if (
    (step4.classList.contains("selected") && e.target.id === "stepBack") ||
    (step4.classList.contains("selected") && e.target.id === "goBack")
  ) {
    step4.classList.remove("selected");
    const errorMsg = document.querySelector(".cart-error");
    const successMsg = document.querySelector(".cart-success");
    errorMsg.classList.remove("show");
    successMsg.classList.remove("show");
    step2.classList.add("selected");
    removeProducts();
    return;
  }

  if (
    e.target.classList.contains("add-more") &&
    step5.classList.contains("selected")
  ) {
    step5.classList.remove("selected");
    step2.classList.add("selected");
    cartBtns.classList.add("hide");
    removeProducts();
    return;
  }
  if (
    (step5.classList.contains("selected") && e.target.id === "stepBack") ||
    (step5.classList.contains("selected") && e.target.id === "goBack")
  ) {
    step5.classList.remove("selected");
    step2.classList.add("selected");
    removeProducts();
    return;
  }
  if (
    !step5.classList.contains("selected") &&
    e.target.classList.contains("go-to-cart") &&
    step4.classList.contains("selected")
  ) {
    e.target.classList.add("hide");
    step4.classList.remove("selected");
    step5.classList.add("selected");
  }

  if (
    (step5.classList.contains("selected") && e.target.id === "goBack") ||
    (step5.classList.contains("selected") && e.target.id === "stepBack") ||
    (step5.classList.contains("selected") &&
      e.target.classList.contains("booking-form__content-step-5-heading"))
  ) {
    step5.classList.remove("selected");
    step2.classList.add("selected");
    return;
  }

  if (
    (step1.classList.contains("selected") &&
      step2.classList.contains("selected")) ||
    (step1.classList.contains("selected") &&
      step3.classList.contains("selected")) ||
    (step1.classList.contains("selected") &&
      step4.classList.contains("selected")) ||
    (step2.classList.contains("selected") &&
      step3.classList.contains("selected")) ||
    (step2.classList.contains("selected") &&
      step4.classList.contains("selected")) ||
    (step4.classList.contains("selected") &&
      step3.classList.contains("selected"))
  ) {
    step3.classList.remove("selected");
    step4.classList.remove("selected");
    step1.classList.remove("selected");
    step2.classList.add("selected");
    if (step3.children.length > 2) {
      removeProducts();
    }

    return;
  }

  if (
    (e.target.classList.contains("booking-form__content-step-3-option") &&
      step3.classList.contains("selected")) ||
    (e.target.classList.contains("booking-form__content-step-3-option__info") &&
      step3.classList.contains("selected")) ||
    (e.target.classList.contains("title") &&
      step3.classList.contains("selected"))
  ) {
    step4.classList.add("selected");
    step3.classList.remove("selected");

    return;
  }

  if (
    (step4.classList.contains("selected") && e.target.id === "stepBack") ||
    (step4.classList.contains("selected") && e.target.id === "goBack") ||
    e.target.classList.contains("booking-form__content-step-4-heading") ||
    e.target.id === "goBack"
  ) {
    removeProducts();
    step4.classList.remove("selected");
    step3.classList.add("selected");
    return;
  }
  if (step4.classList.contains("selected") && e.target.id === "goBack") {
    removeProducts();

    step4.classList.remove("selected");
    step3.classList.add("selected");
    return;
  }
  if (
    (e.target.id === "goBack" && step5.classList.contains("selected")) ||
    (e.target.id === "stepBack" && step5.classList.contains("selected"))
  ) {
    step5.classList.remove("selected");
    step3.classList.add("selected");
    removeProducts();
    return;
  }

  if (
    (e.target.id === "goBack" &&
      step3.classList.contains("selected") &&
      step3.children.length > 1) ||
    (e.target.id === "stepBack" &&
      step3.classList.contains("selected") &&
      step3.children.length > 1) ||
    (e.target.id === "goBack" && step3.classList.contains("selected"))
  ) {
    step3.classList.remove("selected");
    step2.classList.add("selected");

    removeProducts();
    return;
  }

  if (
    (step1.classList.contains("selected") &&
      e.target.id === "singleAppointment") ||
    (step1.classList.contains("selected") &&
      e.target.classList.contains(
        "booking-form__content-step-1-option__info"
      )) ||
    (step1.classList.contains("selected") &&
      e.target.classList.contains("title"))
  ) {
    step1.classList.remove("selected");
    step2.classList.add("selected");
    goBack.classList.remove("hide");
    return;
  }

  if (
    (!step1.classList.contains("selected") &&
      !step3.classList.contains("selected") &&
      e.target.id !== "stepBack" &&
      !e.target.classList.contains("booking-form__content-step-3-option")) ||
    (!step1.classList.contains("selected") &&
      !step2.classList.contains("selected") &&
      e.target.id !== "stepBack" &&
      !e.target.classList.contains("booking-form__content-step-3-option"))
  ) {
    step1.classList.add("selected");
    step2.classList.remove("selected");
    step3.classList.remove("selected");
    goBack.classList.add("hide");

    return;
  }

  if (
    !step1.classList.contains("selected") &&
    step3.classList.contains("selected") &&
    e.target.id === "stepBack"
  ) {
    step2.classList.add("selected");
    step3.classList.remove("selected");
    return;
  }
}

function removeProducts() {
  const allOptions = document.querySelectorAll(
    ".booking-form__content-step-3-option"
  );
  allOptions.forEach((options) => {
    options.remove();
  });
}

const collectionOptions = document.querySelectorAll(
  ".collection-option, .collection-option .booking-form__content-step-2-option__info, .collection-option .booking-form__content-step-2-option__info .title"
);

collectionOptions.forEach((option) => {
  option.addEventListener("click", toggleCollection.bind(this), {
    bubbles: false,
  });
});

function toggleCollection(e) {
  e.stopPropagation();
  e.preventDefault();
  const collectionID = e.target.dataset.id;
  const step3 = document.getElementById("collectionProducts");
  const step2 = document.querySelector(".booking-form__content-step-2");
  step3.dataset.id = collectionID;

  renderCollectionInfo(Number(collectionID), step3);

  if (!step3.classList.contains("selected")) {
    step3.classList.add("selected");
    step2.classList.remove("selected");
    return;
  }
  if (step3.classList.contains("selected")) {
    step3.classList.remove("selected");
  }
}

async function renderCollectionInfo(targetID, el) {
  let selectedCollection = {};
  let collectionItems = {};
  jsonCollection.forEach((collection) => {
    if (collection.id === targetID) {
      selectedCollection = collection;
    }
  });
  const optionHeading = document.querySelector(
    ".booking-form__content-step-3-heading>h2"
  );

  collectionProducts.forEach((collection) => {
    if (selectedCollection.id === collection.id) {
      collectionItems = collection.products;
      optionHeading.textContent = collection.collection;
    }
  });

  collectionItems.forEach((item) => {
    const itemWrapper = el.appendChild(document.createElement("div"));
    itemWrapper.classList.add("booking-form__content-step-3-option");
    const itemDiv = itemWrapper.appendChild(document.createElement("div"));
    itemDiv.classList.add("booking-form__content-step-3-option__info");
    itemDiv.dataset.id = item.id;
    itemDiv.dataset.variantId = item.variants[0].id;
    const itemIcon = itemWrapper.appendChild(document.createElement("i"));
    itemIcon.classList.add("fa");
    itemIcon.classList.add("fa-chevron-right");
    const itemTitle = itemDiv.appendChild(document.createElement("span"));
    itemTitle.classList.add("title");
    itemTitle.textContent = item.title;

    itemWrapper.addEventListener("click", showProductInfo.bind(this, item));
  });
}

async function showProductInfo(item, e) {
  const productTitle = document.querySelector(
    ".booking-form__content-step-4-option__info .product-title"
  );
  const productDescription = document.querySelector(
    ".booking-form__content-step-4-option__info .product-description"
  );
  const productATC = document.querySelector(
    ".booking-form__content-step-4 .product-atc"
  );
  const staffSelect = document.querySelector(
    ".booking-form__content-step-4 #staff-select"
  );
  productTitle.textContent = item.title;
  const parser = new DOMParser();
  const html = parser.parseFromString(item.description, "text/html");
  const desc = html.querySelector("body");
  productDescription.textContent = desc.textContent;
  productATC.dataset.id = item.id;
  productATC.dataset.variantId = item.variants[0].id;
  productATC.dataset.title = item.title;
  productATC.dataset.price = item.price;
  const [prodMetaInfo] = prodMeta.filter((prod) => {
    if (Number(prod.id) === Number(item.id)) {
      return prod.time;
    }
    return;
  });
  productATC.dataset.duration = prodMetaInfo.time;
  productATC.textContent = `Add $${item.price * 0.01}`;

  const productID = item.id;
  const resources = await fetchResources(productID, e);
  const staff = resources.staff;
  const prevOptions = document.querySelectorAll(
    ".booking-form__content-step-4 #staff-select option"
  );
  if (prevOptions.length > 1) {
    prevOptions.forEach((option) => {
      if (option.value !== "") {
        option.remove();
      }
    });
  }
  staff.forEach((emp) => {
    const staffOption = staffSelect.appendChild(
      document.createElement("option")
    );
    staffOption.value = emp.id;
    staffOption.textContent = emp.name;
  });
  toggleSelected(e);
}
const staffSelect = document.querySelector(
  ".booking-form__content-step-4 #staff-select"
);

staffSelect.addEventListener("change", selectStaff.bind(this));

async function selectStaff(e) {
  const options = document.querySelectorAll(
    ".booking-form__content-step-4 #staff-select option"
  );

  options.forEach((option) => {
    if (option.selected) {
      const staffID = option.value;
      const staffName = option.textContent;

      const employee = {
        attributes: {
          ResourceID: staffID,
          ResourceName: staffName,
        },
      };
      updateCart(employee, e);
    }
  });
}
async function fetchResources(id, e) {
  const product = {
    id: id,
  };

  if (e.target === "button") {
    const allProductOptions = document.querySelectorAll(
      ".booking-form__content-step-3-option"
    );
    allProductOptions.forEach((prod) => {
      prod.classList.add("hide");
    });
    loadingIconStep3.classList.remove("hide");
    const req = await fetch("/apps/app_proxy/bta-products", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(product),
    });
    const res = await req.json();
    loadingIconStep3.classList.add("hide");
    allProductOptions.forEach((prod) => {
      prod.classList.remove("hide");
    });

    return await res;
  } else {
    const req = await fetch("/apps/app_proxy/bta-products", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(product),
    });
    const res = await req.json();
    return await res;
  }
}

let cartStorage = [];
const productATC = document.querySelector(
  ".booking-form__content-step-4 .product-atc"
);
productATC.addEventListener("click", storeCartItem.bind(this), false);

async function storeCartItem(e) {
  e.preventDefault();

  const selectedItem = {
    id: e.target.dataset.variantId,
    quantity: 1,
    properties: {
      duration: e.target.dataset.duration,
    },
  };

  await addToCart(selectedItem);
  await getCart();
  await checkCart();
}

function renderCart(cartData) {
  if (cartData) {
    goToCart.classList.remove("hide");
  }
  const items = cartData.items;
  const itemsWrapper = document.querySelector(
    ".booking-form__content-step-5-items"
  );
  const itemWrapper = document.querySelectorAll(
    ".booking-form__content-step-5-items .item-wrapper"
  );

  if (itemWrapper.length > 0) {
    itemWrapper.forEach((item) => {
      item.remove();
    });
  }

  if (items) {
    items.forEach((item) => {
      const cartItems = itemsWrapper.appendChild(document.createElement("div"));
      const itemTitle = cartItems.appendChild(document.createElement("div"));
      const itemH2 = itemTitle.appendChild(document.createElement("h2"));
      const itemRemove = itemTitle.appendChild(document.createElement("div"));
      const itemQuantity = itemTitle.appendChild(document.createElement("div"));
      const itemPrice = cartItems.appendChild(document.createElement("div"));
      cartItems.classList.add("item-wrapper");
      itemRemove.classList.add("item-remove");
      itemQuantity.classList.add("item-quantity");
      itemQuantity.textContent = "Quantity: " + item.quantity;
      itemRemove.dataset.id = item.id;
      itemTitle.classList.add("title");
      itemPrice.classList.add("price");
      itemH2.textContent = item.title;
      itemRemove.textContent = "Remove";
      itemPrice.textContent = "$" + item.price * 0.01;
    });
  }
  // if (step4.classList.contains("selected")) {
  //   step4.classList.remove("selected");
  //   step5.classList.add("selected");
  // }

  const removeItemBtns = document.querySelectorAll(".item-remove");

  removeItemBtns.forEach((btn) => {
    btn.addEventListener("click", removeItem.bind(this));
  });

  if (items.length === 0) {
    selectDateBtn.disabled = true;
  } else {
    selectDateBtn.disabled = false;
  }

  // const cartBtns = document.querySelector(".cart-btns");

  if (
    cartBtns.classList.contains("hide") &&
    step5.classList.contains("selected")
  ) {
    cartBtns.classList.remove("hide");
    return;
  } else if (
    !step5.classList.contains("selected") &&
    cartBtns.classList.contains("hide")
  ) {
    cartBtns.classList.add("hide");
    return;
  }
}

async function removeItem(e) {
  const deletedItem = {
    id: e.target.dataset.id,
    quantity: 0,
  };
  changeCart(deletedItem);
}

const currentCart = getCart();

if (currentCart) {
  getCart();
}

const calendarIcon = document.getElementById("calendar");
calendarIcon.addEventListener("click", toggleCalendar.bind(this));

function toggleCalendar(e) {
  e.stopPropagation();
  e.preventDefault();
  const calendarForm = document.getElementById("dateSelection");
  if (!calendarForm.classList.contains("open")) {
    calendarForm.classList.add("open");
  } else {
    calendarForm.classList.remove("open");
  }
}
//********++++++------********* Calendar Widget Code ********++++++------*********/
let currentCartItems;
let fullCart;
async function getItemsInCart() {
  const req = await fetch("/cart.js", {
    method: "GET",
  });
  const res = await req.json();
  currentCartItems = res.items;
  fullCart = res;
}

getItemsInCart();

const dt = new Date();

function renderDate(e, divNum) {
  dt.setDate(1);

  let day = dt.getDay();
  let today = new Date();
  let endDate = new Date(dt.getFullYear(), dt.getMonth() + 1, 0).getDate();
  let prevDate = new Date(dt.getFullYear(), dt.getMonth(), 0).getDate();

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const selectMonth = document.getElementById("month");
  const formMonth = document.querySelector(".date-month");
  const formDay = document.querySelector(".date-day");

  selectMonth.textContent = months[dt.getMonth()];
  formMonth.textContent = months[dt.getMonth()];

  const monthDays = document.getElementById("days");
  if (e) {
    if (
      e.target.id === "previousMonth" ||
      e.target.id === "nextMonth" ||
      e.target.id === "nextDate" ||
      e.target.id === "prevDate" ||
      e.target.id === "nextDay" ||
      e.target.id === "prevDay"
    ) {
      const allDays = document.querySelectorAll(
        ".day-wrapper, .prev-day, .visible-day, .hidden-day"
      );
      allDays.forEach((day) => {
        day.remove();
      });
    }
  }

  if (
    !e ||
    e.type !== "change" ||
    e.target.id === "nextDay" ||
    e.target.id === "prevDay"
  ) {
    for (let i = day; i > 0; i--) {
      const dayEl = monthDays.appendChild(document.createElement("div"));
      dayEl.classList.add(`prev-day`);
      dayEl.textContent = `${prevDate - i + 1}`;
    }

    for (let i = 1; i <= endDate; i++) {
      const daysWrapper = monthDays.appendChild(document.createElement("div"));
      daysWrapper.classList.add("day-wrapper");
      const dayEl = daysWrapper.appendChild(document.createElement("input"));
      const labelEl = daysWrapper.appendChild(document.createElement("label"));
      const formDays = formDay.appendChild(document.createElement("span"));
      dayEl.setAttribute("type", "radio");
      dayEl.setAttribute("name", "day");
      dayEl.setAttribute("id", `day-${i}`);
      labelEl.setAttribute("for", `day-${i}`);

      if (!divNum || e.type === "change") {
        if (i == today.getDate() && dt.getMonth() == today.getMonth()) {
          formDays.classList.add(`visible-day`);

          formDays.textContent = `${i}`;
          labelEl.classList.add(`day`);
          labelEl.textContent = `${i}`;
          dayEl.value = `${i}`;
          dayEl.checked = true;
        } else {
          formDays.classList.add(`hidden-day`);

          formDays.textContent = `${i}`;
          labelEl.classList.add(`day`);
          labelEl.textContent = `${i}`;
          dayEl.value = `${i}`;
        }
      }
      if (divNum) {
        if (i === divNum) {
          formDays.classList.add(`visible-day`);

          formDays.textContent = `${i}`;
          labelEl.classList.add(`day`);
          labelEl.textContent = `${i}`;
          dayEl.value = `${i}`;
          dayEl.checked = true;
        } else {
          formDays.classList.add(`hidden-day`);

          formDays.textContent = `${i}`;
          labelEl.classList.add(`day`);
          labelEl.textContent = `${i}`;
          dayEl.value = `${i}`;
        }
      }
    }

    let dayOptions = document.querySelector(".visible-day");
    if (!dayOptions) {
      const firstDay = document.querySelector(".date-day > span");
      firstDay.classList.remove("hidden-day");
      firstDay.classList.add("visible-day");
      dayOptions = firstDay;
    }
    const radioDays = document.querySelectorAll(
      '.booking-form input[type="radio"]'
    );

    radioDays.forEach((radio) => {
      radio.addEventListener(
        "change",
        updateDate.bind(this, "", currentCartItems)
      );
    });
  }
}

async function updateDate(divNum, cartItems, e) {
  if (!divNum) {
    divNum = Number(e.target.value);
  }
  console.log(divNum);
  if (!cartItems) {
    cartItems = currentCartItems;
  }
  console.log(e);
  const currentMonth = document.getElementById("month");
  const currentYear = dt.getFullYear();
  const currentDay = e.target.value || divNum;
  const allFormDays = document.querySelectorAll(".hidden-day, .visible-day");
  allFormDays.forEach((day) => {
    if (Number(day.textContent) === Number(currentDay)) {
      day.classList.remove("hidden-day");
      day.classList.add("visible-day");
    } else {
      day.classList.add("hidden-day");
    }
  });

  const selectDate = document.getElementById("selectedDate");
  const selectedRadioDate =
    currentMonth.textContent + " " + currentDay + ", " + currentYear;
  selectDate.textContent = selectedRadioDate;

  const items = cartItems;
  const checkCartItems = await checkCart();
  const variantID = checkCartItems.items[0].id;

  const locationID = 35770;
  const today = new Date(selectedRadioDate);
  const end = new Date(today.getTime() + 20 * 600000);
  today.setHours(10, 0, 0);
  const startDate = today;
  startDate.toISOString();
  // end.setHours(19, 0, 0);
  const endDate = end;
  end.toISOString();
  const resourceID = Number(fullCart.attributes.ResourceID);
  const durationArr = items.map((item) => {
    return Number(item.properties.duration);
  });
  const totalTime = durationArr.reduce(
    (prevVal, currentVal) => Number(prevVal) + Number(currentVal),
    0
  );
  const timeString = totalTime + ":00";
  const body = {
    external_id: variantID,
    location_ids: [locationID],
    resource_ids: [resourceID] || null,
    start: startDate,
    finish: endDate,
    interval: "30:00",
  };
  console.log(body, body.resource_ids);

  async function testProxy() {
    const timeWrapper = document.querySelector(
      ".booking-form__content-step-6-time"
    );
    timeWrapper.classList.add("hide");
    loadingIconStep6.classList.remove("hide");
    const req = await fetch("/apps/app_proxy/blocks", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });
    const res = await req.json();
    getDaysAvailable(res);
    loadingIconStep6.classList.add("hide");
    timeWrapper.classList.remove("hide");
  }
  testProxy();
  const getDaysAvailable = (data) => {
    let blocks = [];
    data.blocks.forEach((block) => {
      blocks.push(block);
    });
    renderBlocks(blocks, totalTime);
  };
  renderDate(e, divNum);
}

function renderBlocks(blocks, totalTime) {
  console.log(blocks, "render blocks func");
  if (blocks.length > 0) {
    const dateBlocks = blocks[0].timeslots;
    const timeWrapper = document.querySelector(
      ".booking-form__content-step-6-time"
    );
    const timeForm = document.querySelector(
      ".booking-form__content-step-6-time #appointmentTime"
    );
    timeForm.textContent = "";
    const timeEl = document.querySelectorAll(
      ".booking-form__content-step-6-time input, .booking-form__content-step-6-time label, .evening, .morning, .afternoon"
    );
    if (timeEl) {
      timeEl.forEach((el) => {
        el.remove();
      });
    }
    const currentDate = new Date();
    dateBlocks.forEach((block, i) => {
      const startTime = new Date(block.start);

      const prevTime = new Date(block.finish);
      const finishTime = new Date(prevTime.getTime() + totalTime * 60000);
      const startTimeString = new Intl.DateTimeFormat("en-US", {
        timeStyle: "short",
      }).format(startTime);
      const timeForm = document.querySelector(
        ".booking-form__content-step-6-time form"
      );
      const prevMorning = document.querySelector(".morning");
      const prevAfternoon = document.querySelector(".afternoon");
      const prevEvening = document.querySelector(".evening");

      if (startTimeString.includes("AM") && !prevMorning) {
        const timeOfDay = timeForm.appendChild(document.createElement("div"));
        timeOfDay.classList.add("morning");
        timeOfDay.textContent = "Morning";
      }
      if (
        (startTimeString.includes("PM") &&
          !prevAfternoon &&
          startTimeString.includes("12:")) ||
        (startTimeString.includes("PM") &&
          !prevAfternoon &&
          startTimeString.includes("1:")) ||
        (startTimeString.includes("PM") &&
          !prevAfternoon &&
          startTimeString.includes("2:")) ||
        (startTimeString.includes("PM") &&
          !prevAfternoon &&
          startTimeString.includes("3:")) ||
        (startTimeString.includes("PM") &&
          !prevAfternoon &&
          startTimeString.includes("4:"))
      ) {
        const timeOfDay = timeForm.appendChild(document.createElement("div"));
        timeOfDay.classList.add("afternoon");
        timeOfDay.textContent = "Afternoon";
      }

      if (
        startTimeString.includes("PM") &&
        !prevEvening &&
        startTimeString.includes("5:")
      ) {
        const timeOfDay = timeForm.appendChild(document.createElement("div"));
        timeOfDay.classList.add("evening");
        timeOfDay.textContent = "Evening";
      }

      const timeSlotsContainer = timeForm.appendChild(
        document.createElement("div")
      );
      const timeSlots = timeSlotsContainer.appendChild(
        document.createElement("input")
      );
      const timeSlotsLabel = timeSlotsContainer.appendChild(
        document.createElement("label")
      );
      timeSlotsContainer.classList.add("time-slot-container");
      timeSlots.type = "radio";
      timeSlots.name = "start";
      timeSlots.value = startTime;
      if (finishTime) {
        timeSlots.dataset.endTime = finishTime;
      } else {
        timeSlots.dataset.endTime = prevTime;
      }

      timeSlots.id = "timeslot-" + i;
      timeSlotsLabel.setAttribute("for", "timeslot-" + i);
      timeSlotsLabel.textContent = startTimeString;
      if (
        startTime.getHours() < currentDate.getHours() + 1 &&
        startTime.getDate() === currentDate.getDate()
      ) {
        timeSlots.disabled = true;
        timeSlotsLabel.disabled = true;
      }
    });

    const timeSlots = document.querySelectorAll(
      ".booking-form__content-step-6-time input"
    );
    timeSlots.forEach((slot) => {
      slot.addEventListener("change", handleSlotChange.bind(this));
    });
  }

  if (blocks.length === 0) {
    const timeForm = document.querySelector(
      ".booking-form__content-step-6-time #appointmentTime"
    );
    timeForm.classList.add("hide");
    const calIcon = document.querySelector(".calendar-icon");
    const calText = document.querySelector(".calendar-icon span");
    calIcon.classList.remove("hide");

    calText.textContent =
      "Oops Looks Like Our Nail Techs Are Booked Up, Please Select Another Date";
  } else {
    const calIcon = document.querySelector(".calendar-icon");

    const timeForm = document.querySelector(
      ".booking-form__content-step-6-time #appointmentTime"
    );
    timeForm.classList.remove("hide");
    calIcon.classList.add("hide");
  }
}

function handleSlotChange(e) {
  e.preventDefault();
  const start = e.target.value;
  const startTime = new Date(start);
  const finishTime = e.target.dataset.endTime;
  const selectTimeBtn = document.querySelector(".select-time-btn");
  selectTimeBtn.classList.remove("hidden");

  const startTimeString = new Intl.DateTimeFormat("en-us", {
    dateStyle: "long",
    timeStyle: "short",
  }).format(startTime);
  const weekDayString = new Intl.DateTimeFormat("en-us", {
    weekday: "short",
  }).format(startTime);
  selectTimeBtn.textContent = "Select " + weekDayString + " " + startTimeString;
  selectTimeBtn.dataset.startTime = start;
  selectTimeBtn.dataset.finishTime = finishTime;
}

const selectTimeBtn = document.querySelector(".select-time-btn");
selectTimeBtn.addEventListener("click", addDateTime.bind(this));

function addDateTime(e) {
  e.preventDefault();
  const currentStep = document.querySelector(".booking-form__content-step-6");
  const nextStep = document.querySelector(".booking-form__content-step-7");

  const startTime = e.target.dataset.startTime;
  const finishTime = e.target.dataset.finishTime;

  const selectedTime = {
    attributes: {
      Start: startTime,
      Finish: finishTime,
      ResourceID: fullCart.attributes.ResourceID,
      ResourceName: fullCart.attributes.ResourceName,
    },
  };

  updateCart(selectedTime, e);

  currentStep.classList.remove("selected");
  nextStep.classList.add("selected");
}

async function updateCart(itemProps, e) {
  const req = await fetch("/cart/update.js", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(itemProps),
  });
  const res = await req.json();

  await getItemsInCart();
  if (e) {
    if (e.target.id !== "staff-select") {
      renderReview(e, await fullCart);
      showCheckoutBtn(await fullCart, e);
    }
  }
}
function showCheckoutBtn(data) {
  const checkoutBtn = document.querySelector(".checkout-btn");
  const formErrorName = document.querySelectorAll(".form-error-alert.name");
  const formSuccess = document.querySelectorAll(".form-success-alert");
  const formSuccessEmail = document.querySelector(".form-success-alert.email");
  const formErrorEmail = document.querySelector(".form-error-alert.email");
  const formSuccessPhone = document.querySelector(".form-success-alert.phone");
  const formErrorPhone = document.querySelector(".form-error-alert.phone");
  if (
    data.attributes.Name === " " ||
    !data.attributes.Name ||
    data.attributes.Name === ""
  ) {
    formErrorName.forEach((el, i) => {
      el.classList.remove("hide");
      formSuccess[i].classList.add("hide");
    });
  } else {
    formErrorName.forEach((el, i) => {
      el.classList.add("hide");
      formSuccess[i].classList.remove("hide");
    });
  }

  if (
    data.attributes.Email === " " ||
    !data.attributes.Email ||
    data.attributes.Email === ""
  ) {
    formErrorEmail.classList.remove("hide");
    formSuccessEmail.classList.add("hide");
  } else {
    formErrorEmail.classList.add("hide");
    formSuccessEmail.classList.remove("hide");
  }

  if (
    data.attributes.Phone === " " ||
    !data.attributes.Phone ||
    data.attributes.Phone === ""
  ) {
    formErrorPhone.classList.remove("hide");
    formSuccessPhone.classList.add("hide");
  } else {
    formErrorPhone.classList.add("hide");
    formSuccessPhone.classList.remove("hide");
  }

  if (data.attributes.Name && data.attributes.Email) {
    checkoutBtn.classList.remove("hide");
    checkoutBtn.disabled = false;
    checkoutBtn.ariaDisabled = "false";
    return;
  }
}

async function changeCart(itemProps) {
  const step5Items = document.querySelector(
    ".booking-form__content-step-5-items"
  );
  step5Items.classList.add("hide");
  loadingIconStep5.classList.remove("hide");

  const req = await fetch("/cart/change.js", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(itemProps),
  });
  const res = await req.json();
  await getItemsInCart();
  renderCart(await fullCart);
  loadingIconStep5.classList.add("hide");
  step5Items.classList.remove("hide");
}

function renderReview(e, items) {
  const cartEl = document.querySelector(
    ".booking-form__content-step-7-items .items-none"
  );
  if (items.items.length === 0) {
    cartEl.classList.remove("hide");
  } else {
    cartEl.classList.add("hide");
  }

  const bookingInfo = items.attributes;
  const cartInfo = items.items;
  if (bookingInfo.Start) {
    const startDate = new Date(bookingInfo.Start);

    const startString = new Intl.DateTimeFormat("en-US", {
      dateStyle: "medium",
    }).format(startDate);
    const weekDayString = new Intl.DateTimeFormat("en-US", {
      weekday: "long",
    }).format(startDate);
    const timeString = new Intl.DateTimeFormat("en-US", {
      timeStyle: "short",
    }).format(startDate);

    const section = document.querySelector(
      ".booking-form__content-step-7"
    ).children;

    for (let i = 1; i < section.length; i++) {
      if (section[i].classList[0].includes("location")) {
        section[i].children[1].textContent = "24K Broadripple Ave";
      }
      if (section[i].classList[0].includes("date")) {
        section[i].children[1].textContent = weekDayString + ", " + startString;
        section[i].children[1].addEventListener(
          "click",
          editBookingDate.bind(this)
        );
      }
      if (section[i].classList[0].includes("time")) {
        section[i].children[1].textContent = timeString;
        section[i].children[1].addEventListener(
          "click",
          editBookingDate.bind(this)
        );
      }
      if (section[i].classList[0].includes("staff")) {
        if (bookingInfo.ResourceName) {
          section[i].children[1].textContent = bookingInfo.ResourceName;
          section[i].children[1].addEventListener(
            "click",
            editBookingDate.bind(this) // Change to editResource
          );
        } else {
          section[i].children[1].textContent = "No Preference";
        }
      }
    }
  } else {
    const location = document.querySelector(
      ".booking-form__content-step-7-location"
    );
    const date = document.querySelector(".booking-form__content-step-7-date");
    const time = document.querySelector(".booking-form__content-step-7-time");
    const staff = document.querySelector(".booking-form__content-step-7-staff");
    location.children[1].textContent = "24K | 815 Broadripple Ave";
    date.children[1].textContent = "No Date Selected";
    time.children[1].textContent = "No Time Selected";
    if (bookingInfo.ResourceName) {
      staff.children[1].textContent = bookingInfo.ResourceName;
    } else {
      staff.children[1].textContent = "No Preference Selected";
    }
    location.children[1].addEventListener("click", editBookingDate.bind(this));
    date.children[1].addEventListener("click", editBookingDate.bind(this));
    time.children[1].addEventListener("click", editBookingDate.bind(this));
    staff.children[1].addEventListener("click", editBookingDate.bind(this));
  }

  const allItemsInfo = document.querySelectorAll(
    ".booking-form__content-step-7-items .item-info"
  );

  if (allItemsInfo) {
    allItemsInfo.forEach((item) => {
      item.remove();
    });
  }

  let itemTotalPrice;
  cartInfo.forEach((item, i = 0) => {
    const itemsWrapper = document.querySelector(
      ".booking-form__content-step-7-items"
    );
    const itemContainer = itemsWrapper.appendChild(
      document.createElement("div")
    );
    const itemTitle = itemContainer.appendChild(document.createElement("div"));
    const itemPrice = itemContainer.appendChild(document.createElement("div"));
    itemTitle.classList.add("item-info-title");
    itemPrice.classList.add("item-info-price");
    itemTitle.textContent = item.title;
    itemPrice.textContent = "$" + item.price * 0.01;
    const itemStaff = itemTitle.appendChild(document.createElement("span"));
    itemContainer.classList.add("item-info");
  });

  const allItems = document.querySelectorAll(".item-info-price");
  let itemPrices = [];
  for (let i = 0; i < allItems.length; i++) {
    itemPrices.push(Number(allItems[i].textContent.slice(1)));
  }
  const cartTotal = itemPrices.reduce((a, b) => a + b, 0);
  const totalPriceEl = document.getElementById("totalPrice");
  const customerBtn = document.getElementById("priceCustomer");
  const totalPriceBtn = document.querySelector(
    ".booking-form__content-step-7-btn>button>span"
  );
  totalPriceEl.textContent = "$" + cartTotal;
  if (totalPriceBtn) {
    totalPriceBtn.textContent = "$" + cartTotal;
  }
  customerBtn.textContent = "$" + cartTotal;

  // console.log(bookingInfo, cartInfo, cartTotal, "heyyy LOOK HERE");
}

async function editResource(e) {
  e.preventDefault();
  e.target.textContent = "";
  const resourceSelect = e.target.appendChild(document.createElement("select"));
  resourceSelect.classList.add("custom-select");
  const resources = await fetchResources(currentCartItems[0].product_id, e);
  console.log(resources, currentCartItems[0].id);
  const staff = resources.staff;
  staff.forEach((emp) => {
    const option = resourceSelect.appendChild(document.createElement("option"));
    option.textContent = emp.name;
    option.value = emp.id;
  });
}

function editBookingDate(e) {
  e.preventDefault();
  step6.classList.add("selected");
  step7.classList.remove("selected");
}
const customerInfoBtn = document.getElementById("toCustomerInfo");
customerInfoBtn.addEventListener("click", renderCustomerForm.bind(this));

function renderCustomerForm(e) {
  e.preventDefault();
  step7.classList.remove("selected");
  step8.classList.add("selected");
}

const submitCustomerInfo = document.querySelector("#addCustomerInfo");
submitCustomerInfo.addEventListener("click", addCustomerInfo.bind(this));

const formEls = document.querySelectorAll(
  "#firstName, #lastName, #email, #phone"
);
formEls.forEach((el) => {
  el.addEventListener("change", validateForms.bind(this));
});

function validateForms(e) {
  e.preventDefault();
  if (
    (e.target.id === "firstName" && e.target.value.length >= 3) ||
    (e.target.id === "lastName" && e.target.value.length >= 3) ||
    (e.target.id === "email" &&
      e.target.value.includes("@") &&
      e.target.value.includes(".")) ||
    (e.target.id === "phone" && e.target.value.length >= 10)
  ) {
    if (e.target.id === "email" || e.target.id === "phone") {
      e.target.nextElementSibling.nextElementSibling.nextElementSibling.firstElementChild.classList.remove(
        "hide"
      );
      e.target.nextElementSibling.nextElementSibling.firstElementChild.classList.add(
        "hide"
      );
    } else {
      e.target.nextElementSibling.nextElementSibling.firstElementChild.classList.remove(
        "hide"
      );
      e.target.nextElementSibling.firstElementChild.classList.add("hide");
    }
  } else {
    if (e.target.id === "email" || e.target.id === "phone") {
      e.target.nextElementSibling.nextElementSibling.firstElementChild.classList.remove(
        "hide"
      );
      e.target.nextElementSibling.nextElementSibling.nextElementSibling.firstElementChild.classList.add(
        "hide"
      );
    } else {
      e.target.nextElementSibling.firstElementChild.classList.remove("hide");
      e.target.nextElementSibling.nextElementSibling.firstElementChild.classList.add(
        "hide"
      );
    }
  }
}

function addCustomerInfo(e) {
  e.preventDefault();
  const firstName = document.querySelector("#firstName").value;
  const lastName = document.querySelector("#lastName").value;
  const email = document.querySelector("#email").value;
  const phone = document.querySelector("#phone").value;

  const formValues = [firstName, lastName, email, phone];

  const customerInformation = {
    attributes: {
      Start: currentCartItems[0].properties.Start,
      Finish: currentCartItems[0].properties.Finish,
      ResourceID: fullCart.attributes.ResourceID,
      ResourceName: fullCart.attributes.ResourceName,
      Name: firstName + " " + lastName,
      Email: email,
      Phone: phone,
    },
  };

  updateCart(customerInformation, e);
}

async function addToCart(cart) {
  const successMsg = document.querySelector(".cart-success");
  const errorMsg = document.querySelector(".cart-error");
  const atcBtnText = productATC.textContent;
  productATC.textContent = "";
  loadingIconStep4.classList.remove("hide");
  try {
    const req = await fetch("/cart/add.js", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(cart),
    });
    if (req.status === 400) {
      errorMsg.classList.add("show");
      productATC.textContent = atcBtnText;
    }
    if (req.status === 200) {
      successMsg.classList.add("show");
      productATC.textContent = atcBtnText;
    }

    const res = await req.json();
  } catch (error) {
    console.log(error);
  }
}

async function getCart() {
  loadingIconStep6.classList.remove("hide");

  const req = await fetch("/cart.js", {
    method: "GET",
  });
  const res = await req.json();

  renderCart(await res);
  loadingIconStep6.classList.add("hide");
}

renderDate();

const nextMonth = document.getElementById("nextMonth");
const previousMonth = document.getElementById("previousMonth");
const nextDate = document.getElementById("nextDate");
const previousDate = document.getElementById("prevDate");
const nextDay = document.getElementById("nextDay");
const previousDay = document.getElementById("prevDay");

nextDate.addEventListener("click", moveDate.bind(this, "next"));
previousDate.addEventListener("click", moveDate.bind(this, "prev"));
nextMonth.addEventListener("click", moveDate.bind(this, "next"));
previousMonth.addEventListener("click", moveDate.bind(this, "prev"));
nextDay.addEventListener("click", moveDate.bind(this, "nextDay"));
previousDay.addEventListener("click", moveDate.bind(this, "prevDay"));

function moveDate(params, e) {
  const calendarPlaceholder = document.querySelector(".calendar-icon");
  if (!calendarPlaceholder.classList.contains("hide")) {
    calendarPlaceholder.classList.add("hide");
  }

  let dayOptions = document.querySelector(".visible-day");
  if (!dayOptions) {
    const firstDay = document.querySelector(".date-day > span");
    firstDay.classList.remove("hidden-day");
    firstDay.classList.add("visible-day");
    dayOptions = firstDay;
  }

  if (params === "prevDay") {
    // dayOptions.previousElementSibling.classList.remove("hidden-day");
    // dayOptions.previousElementSibling.classList.add("visible-day");

    const dayNum = Number(dayOptions.previousElementSibling.textContent);

    updateDate(dayNum, currentCartItems, e);
    // dayOptions.classList.remove("visible-day");
    // dayOptions.classList.add("hidden-day");
    return;
  } else if (params === "nextDay") {
    const dayNum = Number(dayOptions.nextElementSibling.textContent);

    updateDate(dayNum, currentCartItems, e);
    return;
  } else if (params === "prev") {
    dt.setMonth(dt.getMonth() - 1);
  } else if (params === "next") {
    dt.setMonth(dt.getMonth() + 1);
  }
  renderDate(e);
}
