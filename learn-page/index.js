import { getByClass, getById } from "../helper.js";
import {
  cardData,
  NEWEST_CATEGORY,
  POPULAR_CATEGORY,
  TRIVIA_CATEGORY,
} from "./data.js";
import {
  isUserAuthenticated,
  getAuthenticatedUsername,
} from "../loginHelpers.js";

const ACTIVE_FILTERS = "activeFilters";

const constructActiveFiltersSessionKeyForUser = (username) =>
  `${username}_activeFilters`;

const getActiveFiltersSessionKey = () => {
  const authenticatedUsername = getAuthenticatedUsername();

  return authenticatedUsername
    ? constructActiveFiltersSessionKeyForUser(authenticatedUsername)
    : ACTIVE_FILTERS;
};
const renderCardElement = ({
  id,
  title,
  description,
  publishDate,
  imagePath,
}) => `
<div data-toggle="modal" data-target=".bd-example-modal-lg" class="col-12 col-sm-6 col-md-6 col-lg-3">
  <div id="${id}" class="card learn-card">
    <img src="${imagePath}" alt="Card image" class="card-image" />
    <div class="card-content">
      <h5 class="card-title">${title}</h5>
      <p class="card-description">${description}</p>
      <p class="card-date">${publishDate}</p>
    </div>
  </div> </div>`;

const renderAllCardElements = () => {
  const activeFiltersSessionKey = getActiveFiltersSessionKey();
  const activeFiltersString = localStorage.getItem(activeFiltersSessionKey);

  const activeFilters = activeFiltersString
    ? JSON.parse(activeFiltersString)
    : [];

  const activeCardsData =
    activeFilters.length === 0
      ? cardData
      : cardData.filter((card) => {
          const cardCategory = card.category;
          return activeFilters.includes(cardCategory);
        });

  const renderedCardElements = activeCardsData.map(renderCardElement);
  const mergedCardElementsHtmlString = renderedCardElements.join("");

  const container = getById("learn-page-container");
  container.innerHTML = mergedCardElementsHtmlString;

  document.querySelectorAll(".learn-card").forEach((learnCardElement) => {
    const cardId = learnCardElement.id;
    learnCardElement.addEventListener("click", () => {
      showCardModal(cardId);
    });
  });
  activeFilters.forEach((activeFilter) => {
    getById("filter-" + activeFilter).classList.add("active");
  });
};

const NO_EVENT_HANDLER_CLASS = "no-event-handler";
const WITH_EVENT_HANDLER_CLASS = "with-event-handler";

export const renderLearnPage = () => {
  if (!isUserAuthenticated()) {
    localStorage.removeItem(ACTIVE_FILTERS);
  }

  renderAllCardElements();

  const filterNewestButton = getById("filter-newest");
  if (filterNewestButton.classList.contains(NO_EVENT_HANDLER_CLASS)) {
    filterNewestButton.addEventListener("click", () => {
      filterCards(NEWEST_CATEGORY);
    });

    filterNewestButton.classList.add(WITH_EVENT_HANDLER_CLASS);
  }

  const filterPopularButton = getById("filter-popular");
  if (filterPopularButton.classList.contains(NO_EVENT_HANDLER_CLASS)) {
    filterPopularButton.addEventListener("click", () => {
      filterCards(POPULAR_CATEGORY);
    });

    filterPopularButton.classList.add(WITH_EVENT_HANDLER_CLASS);
  }

  const filterTriviaButton = getById("filter-trivia");
  if (filterTriviaButton.classList.contains(NO_EVENT_HANDLER_CLASS)) {
    filterTriviaButton.addEventListener("click", () => {
      filterCards(TRIVIA_CATEGORY);
    });

    filterTriviaButton.classList.add(WITH_EVENT_HANDLER_CLASS);
  }
};

export const filterCards = (newFilterCategory) => {
  addActiveClass(newFilterCategory);
  const activeFiltersSessionKey = getActiveFiltersSessionKey();
  const activeFiltersString = localStorage.getItem(activeFiltersSessionKey);

  const activeFilters = activeFiltersString
    ? JSON.parse(activeFiltersString)
    : [];

  const cleanActiveFilters = activeFilters.filter(
    (activeFilter) => activeFilter !== newFilterCategory
  );

  const newActiveFilters =
    activeFilters.length === cleanActiveFilters.length
      ? [...activeFilters, newFilterCategory]
      : cleanActiveFilters;

  localStorage.setItem(
    activeFiltersSessionKey,
    JSON.stringify(newActiveFilters)
  );

  renderAllCardElements();
};

const formCardCommentsSessionKey = (cardId) => `${cardId}_storedComments`;

const getAllCommentsForCard = (cardData) => {
  const { comments, id } = cardData;
  const cardCommentsSessionKey = formCardCommentsSessionKey(id);
  const cardCommentsFromSessionString = localStorage.getItem(
    cardCommentsSessionKey
  );

  const cardCommentsFromSession = cardCommentsFromSessionString
    ? JSON.parse(cardCommentsFromSessionString)
    : [];

  return [...cardCommentsFromSession, ...comments];
};

const renderCardCommentsAsString = (commentsData) =>
  commentsData
    .map(
      ({ content, authorUsername, publishTimestamp }) =>
        `
<div style="border: 1px solid black; width: 300px; padding-left: 20px; margin-bottom: 10px border-radius: 16px;">
 <p>${content}</p>
 <p>${authorUsername}</p>
 <p>${publishTimestamp}</p>
</div>
`
    )
    .join("");

const showCardModal = (selectedCardId) => {
  window.scrollTo(0, 0);

  const selectedCardData = cardData.find(({ id }) => id === selectedCardId);
  const allCommentsData = getAllCommentsForCard(selectedCardData);

  const renderedModal = `
  <div id="modal-wrapper" class="comments-modal-wrapper">
    <div id="comments-modal" class="modal fade bd-example-modal-lg" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
      <div class="modal-dialog" style="max-width: 80vw;">
        <div class="modal-content">
          <div class="modal-body" style="display: flex; align-items: center;">
            <div style="flex: 1;">
              <h3>${selectedCardData.title}</h3>
              <p>${selectedCardData.description}</p>
              <p>${selectedCardData.publishDate}</p>
              <div id="learn-card-modal-comments-container" style="margin: 10px 0;">
                <h5>Comments</h5>
                <div id="add-new-comment-container" style="margin-bottom: 20px">
                  <form id="learn-card-modal-form" data-cardId="${selectedCardId}">
                    <div>
                      <textarea id="comment-content" placeholder="Остави коментар..."></textarea>
                    </div>
                    <button type="submit">Објави</button>
                  </form>
                </div>
                ${renderCardCommentsAsString(allCommentsData)}
              </div>
            </div>
            <div style="flex: 1; display: flex; flex-direction: column; align-items: center; justify-content: center; position: relative;">
              <img id="card-image" src="${selectedCardData.imagePath}" alt="Card image" style="width: 100%; height: 45%; cursor: pointer; display: block; position: relative;" />
              <i class="fa-regular fa-circle-play" style="position: absolute; color: #FFFFFF; font-size: 3rem; pointer-events: none;"></i>
              <video id="card-video" controls style="width: 100%; height: 45%; margin-top: 20px; display: none;">
                <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4">
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
          <div>
            <button id="learn-card-modal-close-btn" data-dismiss="modal">Затвори</button>
          </div>
        </div>
      </div>
    </div>
  </div>
`;



  document.body.innerHTML += renderedModal;

  getById("learn-card-modal-close-btn").addEventListener("click", () => {
    renderAllCardElements();
  });

  if (isUserAuthenticated()) {
    const newCommentFormElement = getById("learn-card-modal-form");
    const ownerCardId = newCommentFormElement.dataset.cardid;

    newCommentFormElement.addEventListener("submit", (event) => {
      event.preventDefault();

      const cardCommentsSessionKey = formCardCommentsSessionKey(ownerCardId);
      const cardCommentsFromSessionString = localStorage.getItem(
        cardCommentsSessionKey
      );

      const cardCommentsFromSession = cardCommentsFromSessionString
        ? JSON.parse(cardCommentsFromSessionString)
        : [];

      const currentDate = new Date();

      const postedTimestamp = currentDate
        .toLocaleDateString()
        .concat(", ".concat(currentDate.toLocaleTimeString().slice(0, 5)));
      const currentUsername = getAuthenticatedUsername();
      const newCommentContent = getById("comment-content").value;

      const allComments = [
        {
          content: newCommentContent,
          authorUsername: currentUsername,
          publishTimestamp: postedTimestamp,
        },
        ...cardCommentsFromSession,
      ];

      localStorage.setItem(cardCommentsSessionKey, JSON.stringify(allComments));

      $("#comments-modal").modal("hide");
      document.body.removeChild(getById("modal-wrapper"));
      document.body.removeChild(getByClass("modal-backdrop"));
      showCardModal(ownerCardId);
      $("#comments-modal").modal("show");
    });
  } else {
    getById("add-new-comment-container").style.display = "none";
  }
};

function addActiveClass(element) {
  if (getById("filter-" + element).classList.contains("active")) {
    getById("filter-" + element).classList.remove("active");
  } else {
    getById("filter-" + element).classList.add("active");
  }
}
