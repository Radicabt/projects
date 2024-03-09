const studentSelect = document.querySelector("#student-select");
const selectOptionsDiv = document.querySelector(".select-options");
let selectClicked = false;
studentSelect.addEventListener("click", function (event) {
  if (!selectClicked) {
    selectOptionsDiv.classList.remove("d-none");
    selectClicked = true;
  } else {
    selectOptionsDiv.classList.add("d-none");
    selectClicked = false;
  }
});
selectOptionsList = document.querySelectorAll(".list-item");
selectOption = studentSelect.querySelector("option");
selectOptionsList.forEach((item) => {
  item.addEventListener("click", function (event) {
    selectOption.value = event.target.getAttribute("value");
    selectOption.innerText = event.target.innerText;
    selectOptionsDiv.classList.add("d-none");
    selectClicked = false;
    studentSelect.classList.add("valid-field");
  });
});

const elements = ["#name", "#company", "#email", "#phone", "#student-select"];

elements.forEach((element) => {
  document.querySelector(element).addEventListener("invalid", function (event) {
    if (event.target.validity.valueMissing) {
      event.target.setCustomValidity("Пополнете го полето");
      event.target.nextElementSibling.style.display = "block";
      event.target.classList.add("field-error");
    }
  });
  document.querySelector(element).addEventListener("change", function (event) {
    event.target.setCustomValidity("");
    event.target.classList.add("valid-field");
    event.target.nextElementSibling.style.display = "none";
    event.target.classList.remove("field-error");
  });
});
