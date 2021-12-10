const inputs = document.querySelectorAll(".product_input");

console.log(inputs);
console.log("hello");

let formData = {
  items: [],
};

function updateForm(e) {
  const serviceQuantity =
    e.target.parentElement.nextElementSibling.children[0].children[1].value;
  if (e.target.checked) {
    e.target.setAttribute("checked", true);
    const prodData = {
      id: Number(e.target.value),
      quantity: Number(serviceQuantity),
    };
    let ID = prodData.id;
    let quantity = prodData.quantity;
    formData.items.push({ id: ID, quantity: quantity });
    console.log(JSON.stringify(formData));
  } else {
    e.target.setAttribute("checked", false);

    const removedItem = formData.items.find(
      (item) => item.id === Number(e.target.value)
    );
    const index = formData.items.indexOf(removedItem);
    formData.items.splice(index, 1);
    console.log(formData);
    console.log(index);
  }
}
function isProduct(item, dataID) {
  return item.id === dataID;
}

inputs.forEach((input) => {
  input.addEventListener("change", updateForm);
});

const postCart = async (e) => {
  e.preventDefault();

  const res = await fetch("/cart/add.js", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  });
  const data = await res.json();
  console.log(data);
};

const addToCart = document.querySelector("input[type=submit]");
addToCart.addEventListener("click", postCart);

$(".quantity-button")
  .off("click")
  .on("click", function () {
    if ($(this).hasClass("quantity-add")) {
      var addValue = parseInt($(this).parent().find("input").val()) + 1;
      $(this).parent().find("input").val(addValue).trigger("change");
    }

    if ($(this).hasClass("quantity-remove")) {
      var removeValue = parseInt($(this).parent().find("input").val()) - 1;
      if (removeValue == 0) {
        removeValue = 1;
      }
      $(this).parent().find("input").val(removeValue).trigger("change");
    }
  });

$(".quantity input")
  .off("change")
  .on("change", function () {
    console.log($(this).val());
  });
