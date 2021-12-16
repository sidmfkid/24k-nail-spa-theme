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
console.log(product);
const productID = product.dataset.productid;
const variantID = product.dataset.variantid;
console.log(productID);

const bookingForm = document.getElementById("bookingForm");

btaApi
  .getProducts({ external_id: [productID] })
  .then((res) => {
    const productData = res.data;
    console.log(productData);
  })
  .catch((res) => console.log(res));

const bookappointment = function (formData) {
  btaApi.createBooking({
    formData,
  });
};

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

btaApi.getLocations().then((res) => console.log(res.data));

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
    console.log(blockDate, block);

    dayOptions.value = block.date;
    dayOptions.innerText = slotDate;
  });

  const allOptions = document.querySelectorAll("option");
  allOptions[1].selected = true;
  allOptions.forEach((option) => {
    option.addEventListener("click", handleClick.bind(this, slots));
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
    timeRadios.setAttribute("data-finishAt", `${slot.end}`);
    timeRadios.setAttribute("name", "starts_at");

    console.log(timeRadios);
    const startTime = creatLabelText(slot.start);
    const finishTime = creatLabelText(slot.finish);

    timeRadios.setAttribute("type", "radio");
    const inputText = "From " + `${startTime}` + " to " + `${finishTime}`;
    timeRadios.setAttribute("data-text", `${inputText}`);
    timeText.textContent = inputText;

    console.log(slot);
  });

  console.log(slot);
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
  console.log(bookingMinutes);
  if (bookingMinutes === 0) {
    bookingMinutes = "00";
  }

  const bookingTime =
    `${bookingHour}` + ":" + `${bookingMinutes}` + " " + `${bookingTimeOfDay}`;
  console.log(bookingHour, bookingTimeOfDay);

  return bookingTime;
}
