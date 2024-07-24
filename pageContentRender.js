import { ROUTES } from "./constants.js";
import { renderLearnPage } from "./learn-page/index.js";
import { renderDiscussionsPage } from "./discussion-page/index.js";

const ROUTE_SPECIFIC_CONTENT_RENDER_MAP = {
  [ROUTES.learn]: renderLearnPage,
  [ROUTES.discussions]: renderDiscussionsPage,
};

export const renderPageSpecificContent = () => {
  const activeRoute = location.hash.slice(1);
  const allowedRoutes = Object.values(ROUTES);

  if (allowedRoutes.includes(activeRoute)) {
    const renderPageContentFunction =
      ROUTE_SPECIFIC_CONTENT_RENDER_MAP[activeRoute];

    renderPageContentFunction?.();
  }
};
