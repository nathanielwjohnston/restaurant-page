import { loadHomePage } from "./home";
import { loadMenu, menuItems } from "./menu";
import { loadContactPage } from "./contact";

import "./styles.css";

loadHomePage();

const homeButton = document.querySelector("#home-tab-button");
const menuButton = document.querySelector("#menu-tab-button");
const contactButton = document.querySelector("#contact-tab-button");

homeButton.addEventListener("click", () => {
  const pageContent = document.querySelector("#content");
  pageContent.replaceChildren();

  loadHomePage();
})

menuButton.addEventListener("click", () => {
  const pageContent = document.querySelector("#content");
  pageContent.replaceChildren();

  loadMenu(menuItems);
})

contactButton.addEventListener("click", () => {
  if (!document.querySelector("#contact-container")) {
    const pageContent = document.querySelector("#content");
    pageContent.replaceChildren();

    loadContactPage();
  }
})