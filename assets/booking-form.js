const bookNowBtn = document.getElementById("bookAppointment");
const step1 = document.querySelector(".booking-form__content-step-1");
const step2 = document.querySelector(".booking-form__content-step-2");
const step3 = document.querySelector(".booking-form__content-step-3");
const step4 = document.querySelector(".booking-form__content-step-4");
const step5 = document.querySelector(".booking-form__content-step-5");
const step6 = document.querySelector(".booking-form__content-step-6");
const step7 = document.querySelector(".booking-form__content-step-7");
const step8 = document.querySelector(".booking-form__content-step-8");
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

function showProductInfo(item, e) {
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
  e.preventDefault();

  const selectedItem = {
    id: e.target.dataset.variantId,
    quantity: 1,
  };
  addToCart(selectedItem);
  getCart();
}

function renderCart(cartData) {
  setTimeout(() => {
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
        const cartItems = itemsWrapper.appendChild(
          document.createElement("div")
        );
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
  }, 500);
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
    const radioDays = document.querySelectorAll('input[type="radio"]');

    radioDays.forEach((radio) => {
      radio.addEventListener(
        "change",
        updateDate.bind(this, "", currentCartItems)
      );
    });
  }
}

function updateDate(divNum, cartItems, e) {
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
  const variantID = 41179086717101;

  const locationID = 35770;
  const today = new Date(selectedRadioDate);
  const end = new Date(selectedRadioDate);
  today.setHours(10, 0, 0);
  const startDate = today;
  startDate.toISOString();
  end.setHours(19, 0, 0);
  const endDate = end;
  end.toISOString();

  const body = {
    external_id: variantID,
    location_ids: [locationID],
    start: startDate,
    finish: endDate,
    interval: "60:00",
  };

  async function testProxy() {
    const req = await fetch("/apps/app_proxy/blocks", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });
    const res = await req.json();
    getDaysAvailable(res);
  }
  testProxy();

  const getDaysAvailable = (data) => {
    let blocks = [];
    data.blocks.forEach((block) => {
      blocks.push(block);
    });

    renderBlocks(blocks);
  };
  renderDate(e, divNum);
}

function renderBlocks(blocks) {
  const dateBlocks = blocks[0].timeslots;
  const timeWrapper = document.querySelector(
    ".booking-form__content-step-6-time"
  );

  const timeEl = document.querySelectorAll(
    ".booking-form__content-step-6-time input, .booking-form__content-step-6-time label, .evening, .morning, .afternoon"
  );
  if (timeEl) {
    timeEl.forEach((el) => {
      el.remove();
    });
  }

  dateBlocks.forEach((block, i) => {
    const startTime = new Date(block.start);
    const finishTime = new Date(block.finish);
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
    timeSlots.dataset.endTime = finishTime;

    timeSlots.id = "timeslot-" + i;
    timeSlotsLabel.setAttribute("for", "timeslot-" + i);
    timeSlotsLabel.textContent = startTimeString;
  });

  const timeSlots = document.querySelectorAll(
    ".booking-form__content-step-6-time input"
  );
  timeSlots.forEach((slot) => {
    slot.addEventListener("change", handleSlotChange.bind(this));
  });
}

function handleSlotChange(e) {
  e.preventDefault();

  const startTime = new Date(e.target.value);
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
  selectTimeBtn.dataset.startTime = startTime;
  selectTimeBtn.dataset.finishTime = finishTime;
}

const selectTimeBtn = document.querySelector(".select-time-btn");
selectTimeBtn.addEventListener("click", addDateTime.bind(this));

function addDateTime(e) {
  e.preventDefault();
  const currentStep = document.querySelector(".booking-form__content-step-6");
  const nextStep = document.querySelector(".booking-form__content-step-7");

  const startTime = new Date(e.target.dataset.startTime);
  const finishTime = new Date(e.target.dataset.finishTime);

  const selectedTime = {
    attributes: {
      Start: startTime.toISOString(),
      Finish: finishTime.toISOString(),
    },
  };

  updateCart(selectedTime);

  currentStep.classList.remove("selected");
  nextStep.classList.add("selected");
}

async function updateCart(itemProps) {
  const req = await fetch("/cart/update.js", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(itemProps),
  });
  const res = await req.json();
  await getItemsInCart();
  await renderReview(fullCart);
}

function renderReview(items) {
  const bookingInfo = items.attributes;
  const cartInfo = items.items;
  console.log(items);
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
    }
    if (section[i].classList[0].includes("time")) {
      section[i].children[1].textContent = timeString;
    }
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
    // console.log(itemPrices);
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

const customerInfoBtn = document.getElementById("toCustomerInfo");
customerInfoBtn.addEventListener("click", renderCustomerForm.bind(this));

function renderCustomerForm(e) {
  e.preventDefault();
  step7.classList.remove("selected");
  step8.classList.add("selected");
}

const submitCustomerInfo = document.querySelector("#addCustomerInfo");
submitCustomerInfo.addEventListener("click", addCustomerInfo.bind(this));

function addCustomerInfo(e) {
  e.preventDefault();
  const firstName = document.querySelector("#firstName").value;
  const lastName = document.querySelector("#lastName").value;
  const email = document.querySelector("#email").value;

  const customerInformation = {
    attributes: {
      Start: currentCartItems[0].properties.Start,
      Finish: currentCartItems[0].properties.Finish,
      Name: firstName + " " + lastName,
      Email: email,
    },
  };
  updateCart(customerInformation);
}

async function addToCart(cart) {
  try {
    const req = await fetch("/cart/add.js", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(cart),
    });
    const res = await req.json();
  } catch (error) {
    console.log(error);
  }
}

async function getCart() {
  const req = await fetch("/cart.js", {
    method: "GET",
  });
  const res = await req.json();

  renderCart(res);
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
