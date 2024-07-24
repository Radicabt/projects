import {
  hideAllSections,
  handleRouteVisibility,
  navigateTo,
} from "./routingHelpers.js";
import { handleLoginRelatedContentVisibility } from "./loginHelpers.js";
import {
  getAuthenticatedUsername,
  getAuthenticatedEmail,
  getAuthenticatedDob,
} from "./loginHelpers.js";
import { getById } from "./helper.js";
import {
  USERNAME_STORAGE_KEY,
  ROUTES,
  EMAIL_STORAGE_KEY,
  DOB_STORAGE_KEY
} from "./constants.js";
import { renderPageSpecificContent } from "./pageContentRender.js";

window.addEventListener("load", () => {
  hideAllSections();
  handleRouteVisibility();
  handleLoginRelatedContentVisibility();
  renderPageSpecificContent();
});

window.addEventListener("hashchange", () => {
  hideAllSections();
  handleRouteVisibility();
  renderPageSpecificContent();
});

document.querySelector("#login-form").addEventListener("submit", (event) => {
  event.preventDefault();

  const username = getById("username").value;
  const password = getById("password").value;

  fetch("http://localhost:8888/api/authentication", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Permissions-Policy": "ch-ua-form-factor",
    },
    body: JSON.stringify({ username, password }),
  })
    .then((_) => {
      if (localStorage.getItem(EMAIL_STORAGE_KEY) === null) {
        localStorage.setItem(EMAIL_STORAGE_KEY, "email@email.com");
      }
      if (localStorage.getItem(DOB_STORAGE_KEY) === null) {
        localStorage.setItem(DOB_STORAGE_KEY, "2007");
      }
      localStorage.setItem(USERNAME_STORAGE_KEY, username);
      handleLoginRelatedContentVisibility();
      navigateTo(ROUTES.home);
    })
    .catch((error) => {
      console.error(`failure - ${error}`);
      alert("Invalid credentials.");
    });
});
document.addEventListener("DOMContentLoaded", function () {
  const hamburger = document.querySelector(".hamburger");
  const navLinks = document.querySelector(".nav-links");
  const navButtons = document.querySelector(".nav-buttons");
  const langSwitch = document.querySelector(".lang-switch");
  const btnSignIn = document.querySelector(".btn-sign-in");

  hamburger.addEventListener("click", function () {
    hamburger.classList.toggle("active");
    navLinks.classList.toggle("active");
    navButtons.classList.toggle("active");

    if (hamburger.classList.contains("active")) {
      langSwitch.style.display = "none";
      navButtons.appendChild(btnSignIn);
    } else {
      langSwitch.style.display = "flex";
      navButtons.insertBefore(btnSignIn, langSwitch);
    }
  });
});

document.getElementById("play-button").addEventListener("click", function () {
  document.getElementById("play-button").style.display = "none";
  const videoContainer = document.getElementById("video-container");
  const heroImages = document.querySelectorAll(".hero-img");
  const heroSection = document.querySelector(".hero");

  heroImages.forEach((img) => {
    img.style.display = "none";
  });

  heroSection.style.background = "none";
  videoContainer.style.display = "block";
  const video = document.getElementById("hero-video");
  video.play();
});
document.addEventListener("DOMContentLoaded", function () {
  document
    .getElementById("login-form")
    .addEventListener("submit", function (event) {
      event.preventDefault();
      showModal();
    });
});
document
  .querySelector(".toggle-password")
  .addEventListener("click", function () {
    const passwordInput = document.getElementById("password");
    const icon = this;
    if (passwordInput.type === "password") {
      passwordInput.type = "text";
      icon.classList.remove("fa-eye-slash");
      icon.classList.add("fa-eye");
    } else {
      passwordInput.type = "password";
      icon.classList.remove("fa-eye");
      icon.classList.add("fa-eye-slash");
    }
  });

function showModal() {
  $("#welcomeModal").modal("show");
}
document.addEventListener("DOMContentLoaded", function () {
  const editPopups = document.querySelectorAll(".edit-popup");

  editPopups.forEach(function (popup) {
    popup.addEventListener("click", function () {
      const inputField = popup.previousElementSibling;
      inputField.disabled = false;
      inputField.focus();
      inputField.addEventListener("focusout", function () {
        if (inputField.id === "email-field") {
          localStorage.setItem(EMAIL_STORAGE_KEY, inputField.value);
        }
        if (inputField.id === "dob-field") {
          console.log("dob-field")
          localStorage.setItem(DOB_STORAGE_KEY, inputField.value);
        }
      });
    });
  });
});

document.getElementById("user-name").value = getAuthenticatedUsername();

document.getElementById("email-field").value = getAuthenticatedEmail();

document.getElementById("dob-field").value = getAuthenticatedDob();
