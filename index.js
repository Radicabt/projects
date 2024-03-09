const loadMoreButton = document.getElementById("load-more");
let buttonClicked = false;
loadMoreButton.addEventListener("click", () => {
  if (buttonClicked) {
    document
      .querySelectorAll(".design")
      .forEach((card) => (card.style.display = "inline-block"));
    loadMoreButton.style.display = "none";
  }
  document
    .querySelectorAll(".coding")
    .forEach((card) => (card.style.display = "inline-block"));
  buttonClicked = true;
});

const filterLabels = document.querySelectorAll(".custom-filter");
filterLabels.forEach((label) => {
  label.addEventListener("click", () => {
    label.classList.toggle("active");
    if (!label.querySelector("input").checked) {
      label.classList.remove("active");
    } else {
      filterLabels.forEach((otherLabel) => {
        if (otherLabel !== label) {
          otherLabel.classList.remove("active");
        }
      });
    }
  });
});
document
  .querySelector("#filter-coding")
  .addEventListener("change", filterCoding);
document
  .querySelector("#filter-design")
  .addEventListener("change", filterDesign);
document
  .querySelector("#filter-marketing")
  .addEventListener("change", filterMarketing);

function filterCoding() {
  hideAllCards();

  if (document.querySelector("#filter-coding").checked) {
    var codingCards = document.querySelectorAll(".coding");
    codingCards.forEach((codingCard) => {
      codingCard.style.display = "inline-block";
    });

    document.querySelector("#filter-design").checked = false;
    document.querySelector("#filter-marketing").checked = false;
  } else {
    showAllCards();
  }
}

function filterDesign() {
  hideAllCards();

  if (document.querySelector("#filter-design").checked) {
    var designCards = document.querySelectorAll(".design");
    designCards.forEach((designCard) => {
      designCard.style.display = "inline-block";
    });

    document.querySelector("#filter-coding").checked = false;
    document.querySelector("#filter-marketing").checked = false;
  } else {
    showAllCards();
  }
}

function filterMarketing() {
  hideAllCards();

  if (document.querySelector("#filter-marketing").checked) {
    var marketingCards = document.querySelectorAll(".marketing");
    marketingCards.forEach((marketingCard) => {
      marketingCard.style.display = "inline-block";
    });

    document.querySelector("#filter-design").checked = false;
    document.querySelector("#filter-coding").checked = false;
  } else {
    showAllCards();
  }
}

function hideAllCards() {
  loadMoreButton.style.display = "none";
  var allCards = document.querySelectorAll(".col-12");

  allCards.forEach((card) => {
    card.style.display = "none";
  });
}

function showAllCards() {
  var allCards = document.querySelectorAll(".col-12");

  allCards.forEach((card) => {
    card.style.display = "inline-block";
  });
}
