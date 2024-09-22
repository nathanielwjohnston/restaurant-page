import { loadHomePage } from "./home";
import { loadMenu, menuItems } from "./menu";
import { loadContactPage } from "./contact";

import "./styles.css";

loadHomePage();

const homeButton = document.querySelector("#home-tab-button");
const menuButton = document.querySelector("#menu-tab-button");
const contactButton = document.querySelector("#contact-tab-button");

function resetCurrentTab(newTabButton) {
  const currentTabButton = document.querySelector(".current-tab");

  if (newTabButton !== currentTabButton) {
    currentTabButton.classList.remove("current-tab");
    newTabButton.classList.add("current-tab");
  }
}

homeButton.addEventListener("click", () => {
  const pageContent = document.querySelector("#content");
  pageContent.replaceChildren();

  loadHomePage();

  resetCurrentTab(document.querySelector("#home-tab-button"));
})

menuButton.addEventListener("click", () => {
  const pageContent = document.querySelector("#content");
  pageContent.replaceChildren();

  loadMenu(menuItems);

  resetCurrentTab(document.querySelector("#menu-tab-button"));
})

contactButton.addEventListener("click", () => {
  if (!document.querySelector("#contact-container")) {
    const pageContent = document.querySelector("#content");
    pageContent.replaceChildren();

    loadContactPage();

    resetCurrentTab(document.querySelector("#contact-tab-button"));
  }
})