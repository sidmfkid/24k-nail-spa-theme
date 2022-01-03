const bookNowBtn = document.getElementById("bookAppointment");
const step1 = document.querySelector(".booking-form__content-step-1");
const step2 = document.querySelector(".booking-form__content-step-2");
const step3 = document.querySelector(".booking-form__content-step-3");
const step4 = document.querySelector(".booking-form__content-step-4");
const step5 = document.querySelector(".booking-form__content-step-5");
const step6 = document.querySelector(".booking-form__content-step-6");
bookNowBtn.addEventListener("click", toggleForm.bind(this));
const cartBtns = document.querySelector(".cart-btns");

function toggleForm(e) {
  e.preventDefault();
  const bookingForm = document.querySelector(".booking-form");
  const goBack = document.getElementById("goBack");

  if (e.target.id === "bookAppointment") {
    bookingForm.classList.add("open");
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

    !goBack.classList.contains("hide")
      ? goBack.classList.add("hide")
      : goBack.classList.remove("hide");
    return;
  }
}

const closeBookingForm = document.getElementById("closeBookingForm");
closeBookingForm.addEventListener("click", toggleForm.bind(this));
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
const backToCollections = document.querySelector(
  ".booking-form__content-step-3 #stepBack"
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
backToCollections.addEventListener("click", toggleSelected.bind(this));
cartStepBack.addEventListener("click", toggleSelected.bind(this));
appointmentStepBack.addEventListener("click", toggleSelected.bind(this));

function viewCart(e) {
  e.preventDefault();
  if (
    e.target.classList.contains("go-to-cart") &&
    step4.classList.contains("selected")
  ) {
    step4.classList.remove("selected");
    step5.classList.add("selected");
    cartBtns.classList.remove("hide");
  }
}

function toggleSelected(e) {
  e.preventDefault();

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

  if (
    step5.classList.contains("selected") &&
    e.target.classList.contains("set-date")
  ) {
    step5.classList.remove("selected");
    step6.classList.add("selected");
    removeProducts();
    return;
  }

  if (
    (step4.classList.contains("selected") && e.target.id === "stepBack") ||
    (step4.classList.contains("selected") && e.target.id === "goBack")
  ) {
    step4.classList.remove("selected");
    step2.classList.add("selected");
    removeProducts();
    return;
  }
  if (
    e.target.classList.contains("add-more") &&
    step5.classList.contains("selected")
  ) {
    console.log("addmore");
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
    console.log("goback");
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
      step3.children.length > 1)
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
      e.target.id !== "stepBack") ||
    (!step1.classList.contains("selected") &&
      !step2.classList.contains("selected") &&
      e.target.id !== "stepBack")
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

const collectionOptions = document.querySelectorAll(".collection-option");
console.log(collectionOptions);
collectionOptions.forEach((option) => {
  option.addEventListener("click", toggleCollection.bind(this), {
    bubbles: true,
  });
});

function toggleCollection(e) {
  e.stopPropagation();
  e.preventDefault();
  const collectionID = e.target.dataset.id;
  const step3 = document.getElementById("collectionProducts");
  const step2 = document.querySelector(".booking-form__content-step-2");
  step3.dataset.id = collectionID;

  console.log(step3);

  renderCollectionInfo(Number(collectionID), step3);
  //   const url = new URL(window.location);
  //   url.searchParams.set("collection", `${handle}`);
  //   window.history.pushState({}, "", url);
  console.log(collectionID, step3);
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
      console.log(collection);
      console.log(jsonCollection, collectionProducts);
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
  console.log(selectedCollection);
  console.log(collectionItems);

  // await fetch("?section_id=booking-form")
  //   .then((res) => res.text())
  //   .then((resText) => {
  //     const id = "collectionProducts";
  //     const html = new DOMParser().parseFromString(resText, "text/html");
  //     const destination = document.getElementById(id);
  //     const source = html.getElementById(id);
  //     console.log(source);
  //     console.log(destination);
  //     if (source && destination) {
  //       destination.outerHTML = source.outerHTML;
  //     }
  //   });
}

function showProductInfo(item, e) {
  console.log(e, item);
  const productTitle = document.querySelector(
    ".booking-form__content-step-4-option__info .product-title"
  );
  const productDescription = document.querySelector(
    ".booking-form__content-step-4-option__info .product-description"
  );
  const productATC = document.querySelector(
    ".booking-form__content-step-4 .product-atc"
  );
  productTitle.textContent = item.title;
  productDescription.textContent = item.description;
  productATC.dataset.id = item.id;
  productATC.dataset.variantId = item.variants[0].id;
  productATC.dataset.title = item.title;
  productATC.dataset.price = item.price;
  productATC.textContent = `Add $${item.price * 0.01}`;
  toggleSelected(e);
}
let cartStorage = [];
const productATC = document.querySelector(
  ".booking-form__content-step-4 .product-atc"
);
productATC.addEventListener("click", storeCartItem.bind(this), false);

function storeCartItem(e) {
  e.stopPropagation();
  e.preventDefault();

  const selectedItem = {
    title: e.target.dataset.title,
    price: e.target.dataset.price,
    id: e.target.dataset.id,
    id: e.target.dataset.variantId,
    quantity: 1,
  };

  cartStorage.push(selectedItem);

  localStorage.setItem("cartStorage", JSON.stringify(cartStorage));
  console.log(cartStorage, e, localStorage.cartStorage);
  renderCart();
}

function renderCart() {
  if (localStorage.getItem("cartStorage")) {
    goToCart.classList.remove("hide");
  }
  const items = JSON.parse(localStorage.getItem("cartStorage"));
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
      const itemPrice = cartItems.appendChild(document.createElement("div"));
      cartItems.classList.add("item-wrapper");
      itemTitle.classList.add("title");
      itemPrice.classList.add("price");
      itemTitle.textContent = item.title;
      itemPrice.textContent = "$" + item.price * 0.01;
    });
  }
  if (step4.classList.contains("selected")) {
    step4.classList.remove("selected");
    step5.classList.add("selected");
    console.log(items);
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

if (localStorage.getItem("cartStorage")) {
  renderCart();
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

const dt = new Date();

function renderDate(e, selectedDate) {
  dt.setDate(1);
  console.log(dt);
  let day = dt.getDay();
  let today = new Date();
  let endDate = new Date(dt.getFullYear(), dt.getMonth() + 1, 0).getDate();
  let prevDate = new Date(dt.getFullYear(), dt.getMonth(), 0).getDate();
  console.log(day, today, endDate, prevDate);
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
  const monthDayOptions = document.querySelectorAll(".monthDay");
  const weekDayOptions = document.querySelectorAll(".weekDay");
  const options = { weekday: "short" };

  let monthNum;
  let dayNum;
  if (selectedDate) {
    monthNum = dt.getMonth() + 1;
    dayNum = dt.getDay() + 1;
  } else {
    monthNum = dt.getMonth() + 1;
    dayNum = dt.getDay() + 1;
  }

  console.log(selectedDate);

  monthDayOptions.forEach((option, i) => {
    let newDay;
    if (i === 0) {
      newDay = new Date(
        today.getFullYear(),
        today.getMonth(),
        today.getDay() - 1
      );

      const dayShort = new Intl.DateTimeFormat("en-US", options).format(newDay);
      option.textContent = monthNum + "/" + `${dayNum - 1}`;
      console.log(dayShort);
      weekDayOptions[i].textContent = `${dayShort}`;
    }
    if (i === 1) {
      const newDay = new Date(
        today.getFullYear(),
        today.getMonth(),
        today.getDay()
      );
      const dayShort = new Intl.DateTimeFormat("en-US", options).format(newDay);

      console.log(dayShort);

      option.textContent = monthNum + "/" + `${dayNum}`;
      weekDayOptions[i].textContent = `${dayShort}`;
    }
    if (i === 2) {
      const newDay = new Date(
        today.getFullYear(),
        today.getMonth(),
        today.getDay() + 1
      );
      const dayShort = new Intl.DateTimeFormat("en-US", options).format(newDay);

      console.log(dayShort);
      option.textContent = monthNum + "/" + `${dayNum + 1}`;
      weekDayOptions[i].textContent = `${dayShort}`;
    }
  });

  selectMonth.textContent = months[dt.getMonth()];

  const monthDays = document.getElementById("days");
  if (e) {
    console.log(e);
    if (e.target.id === "previousMonth" || e.target.id === "nextMonth") {
      const allDays = document.querySelectorAll(".day-wrapper, .prev-day");
      allDays.forEach((day) => {
        day.remove();
      });
    }
    console.log("delete");
  }

  if (!e || e.type !== "change") {
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
      dayEl.setAttribute("type", "radio");
      dayEl.setAttribute("name", "day");
      dayEl.setAttribute("id", `day-${i}`);
      labelEl.setAttribute("for", `day-${i}`);
      if (i == today.getDate() && dt.getMonth() == today.getMonth()) {
        labelEl.classList.add(`day`);
        labelEl.textContent = `${i}`;
        dayEl.value = `${i}`;
        dayEl.checked = true;
      } else {
        labelEl.classList.add(`day`);
        labelEl.textContent = `${i}`;
        dayEl.value = `${i}`;
      }
    }

    const radioDays = document.querySelectorAll('input[type="radio"]');

    radioDays.forEach((radio) => {
      radio.addEventListener("change", updateDate.bind(this));

      // radio.addEventListener("change", updateDate.bind());
    });
  }
}

function updateDate(e) {
  e.preventDefault();
  const currentMonth = document.getElementById("month");
  const currentYear = dt.getFullYear();
  const currentDay = e.target.value;
  const selectDate = document.getElementById("selectedDate");
  const selectedRadioDate =
    currentMonth.textContent + " " + currentDay + ", " + currentYear;
  selectDate.textContent = selectedRadioDate;

  const items = JSON.parse(localStorage.getItem("cartStorage"));
  const variantID = items[0].id;
  const locationID = 35770;
  const today = new Date(selectedRadioDate);
  const end = new Date(selectedRadioDate);
  today.setHours(10, 0, 0);
  const startDate = today;
  startDate.toISOString();
  end.setHours(19, 0, 0);
  const endDate = end;
  end.toISOString();
  let btaApi = btaSdk.init(token);
  console.log(startDate, endDate);
  btaApi
    .getBlocks({
      external_id: variantID,
      location_ids: [locationID],
      start: startDate,
      finish: endDate,
      interval: null,
    })
    .then((res) => {
      const blocks = res.data;
      getDaysAvailable(blocks);
      console.log(blocks);
    });

  const getDaysAvailable = (data) => {
    let blocks = [];
    data.blocks.forEach((block) => {
      blocks.push(block);
    });

    console.log(blocks);
  };
  renderDate(e, selectDate);
}

renderDate();

const nextDate = document.getElementById("nextMonth");
const previousDate = document.getElementById("previousMonth");

nextDate.addEventListener("click", moveDate.bind(this, "next"));
previousDate.addEventListener("click", moveDate.bind(this, "prev"));
function moveDate(params, e) {
  console.log(params);
  if (params === "prev") {
    dt.setMonth(dt.getMonth() - 1);
  } else if (params === "next") {
    dt.setMonth(dt.getMonth() + 1);
  }
  renderDate(e);
}
/*
function handleChange(option) {
  let day = dt.getDay();
  let today = new Date();
  let endDate = new Date(dt.getFullYear(), dt.getMonth() + 1, 0).getDate();
  let nextDate = new Date(dt.getFullYear(), dt.getMonth() + 1, 1).getDate();
  let nextDay = new Date(dt.getFullYear(), dt.getMonth() + 1, 1).getDay();
  let endDay = new Date(dt.getFullYear(), dt.getMonth() + 1, 0).getDay();
  let prevDate = new Date(dt.getFullYear(), dt.getMonth(), 0).getDate();
  console.log(day, endDay, today, nextDate, nextDay, endDate, prevDate);
  const daysWrapper = document.getElementById("days");
  const selectMonth = document.getElementById("month");

  const allDays = document.querySelectorAll(
    "#days input[type='radio'], #days label, #days div, .days-wrapper"
  );
  const val = 7 - nextDay;
  console.log(val);
  if (allDays.length > 0) {
    allDays.forEach((day) => {
      day.remove();
    });
  }

  for (let i = day; i > 0; i--) {
    const dayEl = daysWrapper.appendChild(document.createElement("div"));
    dayEl.classList.add(`prev-day`);
    dayEl.textContent = `${prevDate - i + 1}`;
  }

  for (let i = 1; i <= endDate; i++) {
    const dayWrap = daysWrapper.appendChild(document.createElement("div"));
    dayWrap.classList.add("day-wrapper");
    const dayEl = dayWrap.appendChild(document.createElement("input"));
    const labelEl = dayWrap.appendChild(document.createElement("label"));
    dayEl.setAttribute("type", "radio");
    dayEl.setAttribute("name", "day");
    dayEl.setAttribute("id", `day-${i}`);
    labelEl.setAttribute("for", `day-${i}`);
    if (i == today.getDate() && dt.getMonth() == today.getMonth()) {
      labelEl.classList.add(`day`);
      labelEl.selected = true;
      labelEl.textContent = `${i}`;
      dayEl.value = `${i}`;
    } else {
      labelEl.classList.add(`day`);
      labelEl.textContent = `${i}`;
      dayEl.value = `${i}`;
    }
  }

  for (let i = 1; i <= val; i++) {
    const dayEl = daysWrapper.appendChild(document.createElement("div"));
    dayEl.classList.add(`prev-day`);
    dayEl.textContent = `${i}`;
  }
  const options = document.querySelectorAll("option");
  selectMonth.addEventListener("change", pickMonth.bind(this, options));
  const radioDays = document.querySelectorAll('input[type="radio"]');

  radioDays.forEach((radio) => {
    radio.addEventListener("change", updateDate.bind(this));
  });
}

function updateDate(e) {
  const monthOptions = document.querySelector("#month");

  const selectedDate = document.querySelector(
    ".calendar-container_content-select-days h2 span"
  );
  selectedDate.textContent = "";
  selectedDate.textContent = string;
  console.log(e, options);
}

updateDate();
*/
