const product = document.getElementById("productBooking");

const productID = product.dataset.productid;
const variantID = product.dataset.variantid;

const bookingForm = document.getElementById("bookingForm");

function getDay(date) {
  const weekDay = new Intl.DateTimeFormat("en-US", {
    weekday: "long",
  }).format(date);
}

const today = new Date(Date.now());
const end = new Date();
const numWeeks = 2;
today.setHours(10, 0, 0);
const startDate = today;
startDate.toISOString();

const locationID = 35770;

const weekDate = end.setDate(end.getDate() + numWeeks * 7);
end.setHours(19, 0, 0);
const endDate = end;
end.toISOString();
console.log(`${today}`, `${startDate}`, `${endDate}`);

// btaApi.getLocations().then((res) => console.log(res.data));
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
  console.log(res);
  getDaysAvailable(res);
}
testProxy();

const getDaysAvailable = (data) => {
  let blocks = [];
  data.blocks.forEach((block) => {
    blocks.push(block);
  });
  createDaySlots(blocks);
  console.log(blocks, "BLOOOCKKKSFASDFSDFAS");
};

//***** Creating formData Object ******/
let formData = {
  items: [
    {
      id: productID,
      quantity: 1,
      properties: [
        {
          Start: null,
          Finish: null,
          Name: null,
          Email: null,
          Phone: null,
        },
      ],
    },
  ],
};

const [items] = formData.items;
const itemProps = items.properties;

//** Creating Day Selector **/

const createDaySlots = (blocks) => {
  const selectWrapper = bookingForm.appendChild(document.createElement("div"));
  selectWrapper.classList.add("custom-select");
  const icon = selectWrapper.appendChild(document.createElement("i"));
  icon.classList.add("fa");
  icon.classList.add("fa-chevron-down");
  const selectInput = selectWrapper.appendChild(
    document.createElement("select")
  );
  selectInput.classList.add("day-selection");
  const slots = blocks;

  slots.forEach((block) => {
    const dayOptions = selectInput.appendChild(
      document.createElement("option")
    );

    let blockDate = new Date(block.date);
    blockDate.setDate(block.date.slice(8, 10));
    const slotDate = blockDate.toDateString();
    // console.log(blockDate, block);

    dayOptions.value = block.date;
    dayOptions.innerText = slotDate;
  });

  const allOptions = document.querySelectorAll("option");
  allOptions[1].setAttribute("selected", "true");
  allOptions.forEach((option) => {
    option.addEventListener("click", handleClick.bind(this, slots));
  });

  const selectedDate = document.querySelector("option[selected='true']");
  // console.log(selectedDate);
  slots.forEach((slot) => {
    if (slot.date === selectedDate.value) {
      createTimeSlots(slot);
    }
  });

  // selectInput.addEventListener("change", handleChange.bind(this, slots));
};

function handleChange(e, slots) {
  console.log(slots);
}

function handleClick(slots, e) {
  const radioSlots = document.querySelectorAll(".slot");
  if (radioSlots) {
    radioSlots.forEach((radio) => {
      radio.remove();
    });
  }

  slots.forEach((slot) => {
    if (slot.date === e.target.value) {
      createTimeSlots(slot);
    }
  });
}

function createTimeSlots(slot) {
  const timeContainer = document.querySelector(".time-slots");

  const timeSlots = slot.timeslots;
  timeSlots.forEach((slot, i) => {
    // const timeText = timeLabels.appendChild(document.createElement("span"));
    // timeLabels.setAttribute("for", "slot-" + `${i}`);
    const timeRadios = timeContainer.appendChild(
      document.createElement("input")
    );
    const timeLabels = timeContainer.appendChild(
      document.createElement("label")
    );
    timeLabels.classList.add("slot");

    timeRadios.setAttribute("form", "bookingForm");
    timeRadios.setAttribute("id", `time-slot-${i}`);
    timeLabels.setAttribute("for", `time-slot-${i}`);
    timeLabels.setAttribute("class", `slot time-slot-${i}`);
    timeRadios.setAttribute("value", `${slot.start}`);
    timeRadios.setAttribute("name", "properties[Start]");
    timeRadios.setAttribute("data-finishAt", `${slot.finish}`);

    // console.log(timeRadios);
    const startTime = creatLabelText(slot.start);
    const finishTime = creatLabelText(slot.finish);

    timeRadios.setAttribute("type", "radio");
    const inputText = "From " + `${startTime}` + " to " + `${finishTime}`;
    timeRadios.setAttribute("data-text", `${inputText}`);
    timeLabels.setAttribute("data-text", `${inputText}`);
    timeLabels.textContent = inputText;

    timeRadios.addEventListener("change", addSelected.bind(this));

    // console.log(slot);
  });

  // console.log(slot);
}

function creatLabelText(time) {
  const bookingStart = new Date(time);
  let bookingHour = bookingStart.getHours();
  let bookingTimeOfDay;
  if (bookingHour > 12) {
    bookingHour -= 12;
    bookingTimeOfDay = "PM";
  } else {
    bookingTimeOfDay = "AM";
  }

  let bookingMinutes = bookingStart.getMinutes();
  if (bookingMinutes === 0) {
    bookingMinutes = "00";
  }

  const bookingTime =
    `${bookingHour}` + ":" + `${bookingMinutes}` + " " + `${bookingTimeOfDay}`;
  // console.log(bookingHour, bookingTimeOfDay);

  return bookingTime;
}

// formData.fields = {};
//** Adding :selected PsuedoClass to Radio Element  ***/

function addSelected(e) {
  // e.target.setAttribute("checked", "true");
  let timeRadios = document.querySelector("input:checked");
  let hiddenInput = document.querySelector("input[type='hidden']");

  const startsAt = timeRadios.value;
  const finishAt = timeRadios.dataset.finishat;
  itemProps.Start = startsAt;
  itemProps.Finish = finishAt;
  hiddenInput.value = finishAt;
  console.log(e.target.checked);
  console.log(formData);
}

//** Save Form Inputs */

const customerFormInputs = document.querySelectorAll(
  ".customer-info__input input"
);

customerFormInputs.forEach((input) => {
  input.addEventListener("input", addCustomerInfo.bind(this));
});

function addCustomerInfo(e) {
  if (e.target.id === "booking-name") {
    itemProps.Name = e.target.value;
  }
  if (e.target.id === "email") {
    itemProps.Email = e.target.value;
  }
  if (e.target.id === "phone") {
    itemProps.Phone = e.target.value;
  }
  console.log(e.target.value, e.target, formData);
}

//** Create Booking**/
const submitFormBtn = document.querySelector(".submit");
if (submitFormBtn) {
  submitFormBtn.addEventListener("submit", submitForm);
}

// const bookappointment = function (data) {
//   btaApi.createBooking({
//     data,
//   });
// };

async function submitForm(e) {
  e.preventDefault();
  const req = await fetch("/cart/add.js", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  });
  const res = await req.data;
  console.log(res);
}

// const addOnQuantityInput = document.querySelectorAll("input[type='number']");
// const plusIcon = document.querySelectorAll(".quantity .plus");
// const minusIcon = document.querySelectorAll(".quantity .minus");
// console.log(plusIcon);
// const quantityChange = new Event("change", { bubbles: true });

// addOnQuantityInput.forEach((input, i) => {
//   plusIcon[i].addEventListener("click", addQuantity(input));
//   minusIcon[i].addEventListener("click", minusQuantity(input));
// });

// function addQuantity(input) {
//   console.log("hi");
//   input.stepUp();
// }

// function minusQuantity(input) {
//   input.stepDown();
// }

class QuantityInput extends HTMLElement {
  constructor() {
    super();
    this.input = this.querySelector("input");
    this.changeEvent = new Event("change", { bubbles: true });

    this.querySelectorAll("button").forEach((button) =>
      button.addEventListener("click", this.onButtonClick.bind(this))
    );
  }

  onButtonClick(event) {
    event.preventDefault();
    const previousValue = this.input.value;

    event.target.name === "plus" ? this.input.stepUp() : this.input.stepDown();
    if (previousValue !== this.input.value)
      this.input.dispatchEvent(this.changeEvent);
  }
}

customElements.define("quantity-input", QuantityInput);
