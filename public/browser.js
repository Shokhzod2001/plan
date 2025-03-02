console.log("FrontEnd JS ga xush kelibsiz!");

const createField = document.getElementById("create-field");

function itemTemplate(item) {
  return `<li
          class="list-group-item list-group-item-info d-flex align-items-center justify-content-between"
        >
          <span class="item-text">${item.reja}</span>
          <div>
            <button
              data-id="${item._id}"
              class="edit-me btn btn-secondary btn-sm mr-1"
            >
              Ozgartirish
            </button>
            <button
              data-id="${item._id}"
              class="delete-me btn btn-danger btn-sm"
            >
              Ochirish
            </button>
          </div>
        </li>`;
}
document
  .getElementById("create-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();

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
        console.log("Iltimos qaytadan harakat qilib ko`ring");
      });
  });

document.addEventListener("click", function (event) {
  if (event.target.classList.contains("delete-me")) {
    if (confirm("Are you sure to delete!")) {
      axios
        .post("/delete-item", { id: event.target.getAttribute("data-id") })
        .then((response) => {
          console.log(response.data);
          event.target.parentElement.parentElement.remove();
        })
        .catch((err) => {
          console.log("Iltimos qaytadan harakat qilib ko`ring");
        });
    } else {
      alert("Ok You did not delete item!");
    }
  }
  if (event.target.classList.contains("edit-me")) {
    alert("Siz edit buttonini bosdingiz!");
  }
});
