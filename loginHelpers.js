import { getById } from "./helper.js";
import { navigateTo } from "./routingHelpers.js";
import {
  USERNAME_STORAGE_KEY,
  ROUTES,
  EMAIL_STORAGE_KEY,
  DOB_STORAGE_KEY,
} from "./constants.js";

export const handleLoginRelatedContentVisibility = () => {
  const isAuthenticated = isUserAuthenticated();
  if (isAuthenticated) {
    getById("login-link").style.display = "none";
    getById("profile-link").style.display = "inline";
    getById("logout-btn").style.display = "inline";
    getById("picture-circle").style.display = "inline";
    setLogoutButtonClickHandler();
  } else {
    getById("login-link").style.display = "inline";
    getById("profile-link").style.display = "none";
    getById("logout-btn").style.display = "none";
    getById("picture-circle").style.display = "none";
  }
};

export const isUserAuthenticated = () =>
  Boolean(localStorage.getItem(USERNAME_STORAGE_KEY));

export const getAuthenticatedUsername = () =>
  localStorage.getItem(USERNAME_STORAGE_KEY);

export const getAuthenticatedEmail = () =>
  localStorage.getItem(EMAIL_STORAGE_KEY);

export const getAuthenticatedDob = () => localStorage.getItem(DOB_STORAGE_KEY);

export const setLogoutButtonClickHandler = () =>
  getById("logout-btn").addEventListener("click", () => {
    localStorage.clear();

    handleLoginRelatedContentVisibility();
    navigateTo(ROUTES.home);
  });
