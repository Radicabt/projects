import { DISCUSSION_DATA } from "./data.js";
import { getById } from "../helper.js";
import {
  isUserAuthenticated,
  getAuthenticatedUsername,
} from "../loginHelpers.js";

const STORED_DISCUSSIONS_SESSION_KEY = "storedDiscussions";

const randomColor = () => {
  const colors = ["#83EAB166", "#4B7CF366", " #764FF066 ", "#9946F366"];
  return colors[Math.floor(Math.random() * colors.length)];
};

const renderDiscussionsPageData = () => {
  const storedDiscussionsString = localStorage.getItem(
    STORED_DISCUSSIONS_SESSION_KEY
  );

  const storedDiscussions = storedDiscussionsString
    ? JSON.parse(storedDiscussionsString)
    : [];

  const allDiscussions = [...storedDiscussions, ...DISCUSSION_DATA];

  const discussionsContainer = getById("discussions-page-container");
  const renderedDiscussionCardsString = allDiscussions
    .map(renderDiscussionCard)
    .join("");

  discussionsContainer.innerHTML = renderedDiscussionCardsString;
};

export const renderDiscussionsPage = () => {
  renderOrHideNewDiscussionForm();
  renderDiscussionsPageData();
};

const renderDiscussionCard = (discussionData) => {
  const color = randomColor();
  return `
    <div class="comment-card card mb-4" style="background-color: ${color};">
      <div class="card-body d-flex flex-column">
        <p class="card-text">${discussionData.content}</p>
        <div class="d-flex justify-between align-items-center">
        <img src="${discussionData.authorPhoto}" alt="User photo" class="rounded-circle" width="50" height="50 border border-dark ">
          <small class="text-muted mx-5">${discussionData.authorUsername}</small>
          <small class="text-muted mx-4">${discussionData.postedTimestamp}</small>
        </div>
        
        <div class="mt-2 d-flex align-items-center ">
       
         
          <input type="text" class="form-control-comment text-left w-100" placeholder="Пиши коментар...">
        </div>
        <hr class="underline">
        <div class="mt-2">
          <span class="font-weight-bold fs-5 mr-3">+</span>
          <span class="text-black">${discussionData.numberOfComments} Коментари</span>
          <span class="text-black ml-4">${discussionData.numberOfReactions} Реакции</span>
        </div>
      </div>
    </div>
  `;
};

const handleAddNewDiscussion = (event) => {
  event.preventDefault();

  const newDiscussionContent = getById("discussion-content").value;
  const currentDate = new Date();
  const postedTimestamp = currentDate
    .toLocaleDateString()
    .concat(", ".concat(currentDate.toLocaleTimeString().slice(0, 5)));
  const currentUsername = getAuthenticatedUsername();

  const newDiscussion = {
    content: newDiscussionContent,
    authorUsername: currentUsername,
    numberOfComments: 5,
    numberOfReactions: 1,
    postedTimestamp,
  };

  const existingDiscussionsString = localStorage.getItem(
    STORED_DISCUSSIONS_SESSION_KEY
  );
  const storedDiscussions = existingDiscussionsString
    ? JSON.parse(existingDiscussionsString)
    : [];

  const allStoredDiscussions = [newDiscussion, ...storedDiscussions];

  localStorage.setItem(
    STORED_DISCUSSIONS_SESSION_KEY,
    JSON.stringify(allStoredDiscussions)
  );
  renderDiscussionsPageData();
};

const renderOrHideNewDiscussionForm = () => {
  const addNewDiscussionContainer = getById("add-new-discussions-container");

  if (!isUserAuthenticated()) {
    addNewDiscussionContainer.style.display = "none";
    return;
  }

  addNewDiscussionContainer.style.display = "block";

  const currentUsername = getAuthenticatedUsername();
  getById("current-username").innerHTML = currentUsername;

  document
    .getElementById("add-new-discussions-form")
    .addEventListener("keypress", function (event) {
      if (event.key === "Enter") {
        event.preventDefault();
        handleAddNewDiscussion(event);
      }
    });
};
