import { getById } from "./helper.js";
import { ROUTES } from "./constants.js";

export const hideAllSections = () => {
  document
    .querySelectorAll("section")
    .forEach((sectionElement) => (sectionElement.style.display = "none"));
};
export const handleRouteVisibility = () => {
  const currentHashRoute = location.hash.slice(1); 
  const allowedRoutes = Object.values(ROUTES);
  hideAllSections();

  if (allowedRoutes.includes(currentHashRoute)) {
    getById(currentHashRoute).style.display = "block";
  } else {
    getById(ROUTES.home).style.display = "block";
  }
};

export const navigateTo = (hashRoute) => {
  location.hash = `#${hashRoute}`;
};
