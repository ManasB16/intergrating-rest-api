const form = document.querySelector("#myform");
const itemname = document.querySelector("#itname");
const description = document.querySelector("#des");
const price = document.querySelector("#price");
const quantity = document.querySelector("#quantity");

form.addEventListener("submit", onsubmit);

function onsubmit(e) {
  e.preventDefault();

  let obj = {
    itemname: itemname.value,
    description: description.value,
    price: price.value,
    quantity: quantity.value,
  };

  axios
    .post(
      "https://crudcrud.com/api/cbd8e6d835724b1c84aa361fea507d67/integratingrestapi",
      obj
    )
    .then((res) => {
      showNewUserOnScreen(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
}

window.addEventListener("DOMContentLoaded", () => {
  axios
    .get(
      "https://crudcrud.com/api/cbd8e6d835724b1c84aa361fea507d67/integratingrestapi"
    )
    .then((res) => {
      console.log(res);
      for (var i = 0; i < res.data.length; i++) {
        showNewUserOnScreen(res.data[i]);
      }
    })
    .catch((err) => {
      console.log(err);
    });
});

function showNewUserOnScreen(user) {
  document.getElementById("itname").value = "";
  document.getElementById("des").value = "";
  document.getElementById("price").value = "";
  document.getElementById("quantity").value = "";

  const parentNode = document.getElementById("users");
  const childElement = `<li id=${user._id}> ${user.itemname} - ${user.description} - ${user.price} - ${user.quantity}
                        <button onclick="buyone('${user._id}','${user.itemname}','${user.description}','${user.price}','${user.quantity}')"> BuyOne </button>
                        <button onclick="buytwo('${user._id}','${user.itemname}','${user.description}','${user.price}','${user.quantity}')"> BuyTwo </button>
                        <button onclick="buythree('${user._id}','${user.itemname}','${user.description}','${user.price}','${user.quantity}')"> BuyThree </button>
                        </li>`;

  parentNode.innerHTML = parentNode.innerHTML + childElement;
}

function buyone(userID, itemname, description, price, quantity) {
    let obj = {
      itemname: itemname,
      description: description,
      price: price,
      quantity: quantity - 1,
    };
  axios
    .put(
      `https://crudcrud.com/api/cbd8e6d835724b1c84aa361fea507d67/integratingrestapi/${userID}`,
      obj
    )
    .then(() => {
      obj._id = userID;
      showNewUserOnScreen(obj);
    })
    .catch((err) => {
      console.log(err);
    });
}

function buytwo(userID, itemname, description, price, quantity) {
    let obj = {
      itemname: itemname,
      description: description,
      price: price,
      quantity: quantity - 2,
    };
  axios
    .put(
      `https://crudcrud.com/api/cbd8e6d835724b1c84aa361fea507d67/integratingrestapi/${userID}`,
      obj
    )
    .then((res) => {
      obj._id = userID;
      showNewUserOnScreen(obj);
    })
    .catch((err) => {
      console.log(err);
    });
}

function buythree(userID, itemname, description, price, quantity) {
    let obj = {
      itemname: itemname,
      description: description,
      price: price,
      quantity: quantity - 3,
    };
  axios
    .put(
      `https://crudcrud.com/api/cbd8e6d835724b1c84aa361fea507d67/integratingrestapi/${userID}`,
      obj
    )
    .then((res) => {
      obj._id = userID;
      showNewUserOnScreen(obj);
    })
    .catch((err) => {
      console.log(err);
    });
}