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

const today = new Date();
const end = new Date();
const numWeeks = 2;
const startDate = today.toISOString();

const weekDate = end.setDate(end.getDate() + numWeeks * 7);
const endDate = end.toISOString();
console.log(`${today}`, `${startDate}`, `${endDate}`);

const timeslots = btaApi
  .getBlocks({
    external_id: variantID,
    start: startDate,
    finish: endDate,
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
  const selectInput = selectWrapper.appendChild(
    document.createElement("select")
  );
  selectInput.classList.add("day-selection");
  blocks.forEach((block) => {
    const dayOptions = selectInput.appendChild(
      document.createElement("option")
    );
    const date = new Date(block.date);
    const slotDate = date.toDateString();
    console.log(date);

    dayOptions.value = block.date;
    dayOptions.innerText = slotDate;
  });
};
