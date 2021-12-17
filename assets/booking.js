const btaSdk = BookThatApp.init(
  "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6NTI5MzQsInNob3AiOiIyNGstbmFpbC1zcGEifQ.vLHdGJPbu4mi4X_xNu0QBpaVdu6d5ci53p9dy898K0E"
);

const auth = btaSdk.auth(
  '{"key": "1b1433a3a926025af3c8a02817f7906f", "password": "6b87d38452205b0efd63c62f92251cba"}'
);

const btaApi = btaSdk.init(
  "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6NTI5MzQsInNob3AiOiIyNGstbmFpbC1zcGEifQ.vLHdGJPbu4mi4X_xNu0QBpaVdu6d5ci53p9dy898K0E"
);

console.log("sdk methods here", btaSdk);

console.log("here should be 404 due to no key", auth);

console.log(btaApi);

const product = document.getElementById("productBooking");

const productID = product.dataset.productid;
const variantID = product.dataset.variantid;

const bookingForm = document.getElementById("bookingForm");

let btaProductID;

btaApi
  .getProducts({ external_id: [productID] })
  .then((res) => {
    const productData = res.data;
    btaProductID = productData.products[0].id;
    // console.log(productData);
    // console.log(btaProductID);
  })
  .catch((res) => console.log(res));

function getDay(date) {
  const weekDay = new Intl.DateTimeFormat("en-US", { weekday: "long" }).format(
    date
  );
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

const timeslots = btaApi
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
  createDaySlots(blocks);
  console.log(blocks);
};

//***** Creating formData Object ******/
let formData = {
  items: [
    {
      external_id: variantID,
      quantity: 1,
    },
  ],
};

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
    const timeLabels = timeContainer.appendChild(
      document.createElement("label")
    );
    const timeText = timeLabels.appendChild(document.createElement("span"));
    // timeLabels.setAttribute("for", "slot-" + `${i}`);
    timeLabels.classList.add("slot");
    const timeRadios = timeLabels.appendChild(document.createElement("input"));
    timeRadios.setAttribute("form", "bookingForm");
    timeRadios.setAttribute("value", `${slot.start}`);
    timeRadios.setAttribute("name", "properties[Start]");
    timeRadios.setAttribute("data-finishAt", `${slot.finish}`);

    // console.log(timeRadios);
    const startTime = creatLabelText(slot.start);
    const finishTime = creatLabelText(slot.finish);

    timeRadios.setAttribute("type", "radio");
    const inputText = "From " + `${startTime}` + " to " + `${finishTime}`;
    timeRadios.setAttribute("data-text", `${inputText}`);
    timeText.textContent = inputText;

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
formData.properties = {};
formData.fields = {};
//** Adding :selected PsuedoClass to Radio Element  ***/

function addSelected(e) {
  // e.target.setAttribute("checked", "true");
  let timeRadios = document.querySelector("input:checked");
  let hiddenInput = document.querySelector("input[type='hidden']");

  const startsAt = timeRadios.value;
  const finishAt = timeRadios.dataset.finishat;
  formData.properties.Start = startsAt;
  formData.properties.Finish = finishAt;
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
    formData.properties.Name = e.target.value;
  }
  if (e.target.id === "email") {
    formData.properties.Email = e.target.value;
  }
  if (e.target.id === "phone") {
    formData.properties.phone = e.target.value;
  }
  console.log(e.target.value, e.target, formData);
}

//** Create Booking**/
const submitFormBtn = document.querySelector(".submit");
submitFormBtn.addEventListener("submit", submitForm.bind(this));
console.log(submitFormBtn);
// const bookappointment = function (data) {
//   btaApi.createBooking({
//     data,
//   });
// };

function submitForm(e) {
  console.log(e);
  e.preventDefault();
  console.log("hi");
}
