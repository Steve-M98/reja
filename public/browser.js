console.log("Frontend JS ishga tushdi");

function itemTemplate(item) {
  return ` <li style = "background-color:yellowgreen;"
              class="list-group-item list-group-item-info d-flex align-items-center justify-content-between">
              <span class="item-text">${item.reja}</span>
              <div>
                <button data-id="${item._id}" class="edit-me btn btn-secondary btn-sm mr-1">
                  O'zgartirish
                </button>
                <button data-id="${item._id}" class="delete-me btn btn-danger btn-sm">O'chirish</button>
              </div>
            </li>`;
}

let createField = document.getElementById("create-field");

document.getElementById("create-form").addEventListener("submit", function (e) {
  e.preventDefault();

  axios
    .post("/create-item", { reja: createField.value })
    .then((response) => {
      document
        .getElementById("item-list")
        .insertAdjacentHTML("beforeend", itemTemplate(response.data));
      createField.value = "";
      createField.focus();
    })
    .catch((err) => {
      console.log("Iltimos qaytadan urunib ko'ring!");
    });
});

//delete oper

document.addEventListener("click", function (s) {
  if (s.target.classList.contains("delete-me")) {
    if (confirm("Aniq o'chirmoqchimisiz ?")) {
      axios
        .post("/delete-item", { id: s.target.getAttribute("data-id") })
        .then((response) => {
          console.log(response.data);
          s.target.parentElement.parentElement.remove();
        })
        .catch((err) => {
          console.log("Iltimos qaytadan urunib ko'ring");
        });
    }
  }

  // edit oper

  if (s.target.classList.contains("edit-me")) {
    let userInput = prompt(
      "O'zgartirish kiriting",
      s.target.parentElement.parentElement.querySelector(".item-text")
        .innerHTML,
    );
    if (userInput) {
      axios
        .post("/edit-item", {
          id: s.target.getAttribute("data-id"),
          new_input: userInput,
        })
        .then((response) => {
          console.log(response.data);
          s.target.parentElement.parentElement.querySelector(
            ".item-text",
          ).innerHTML = userInput;
        })
        .catch((err) => {
          console.log("Iltimos qaytadan urunib ko'ring");
        });
    }
  }
});

// delete- all oper

document.getElementById("clean-all").addEventListener("click", function () {
  axios.post("/delete-all", { delete_all: true }).then((response) => {
    alert(response.data.state);
    document.location.reload();
  });
});
