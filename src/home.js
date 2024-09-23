import krustyKrabImage from "../assets/krusty-krab.png";
import getLocationContainer from "./location";

function loadHomePage () {
  const pageContent = document.querySelector("#content");

  const homeContainer = document.createElement("div");
  homeContainer.id = "home-container";

  const infoContainer = document.createElement("div");
  infoContainer.id = "home-info";
  const imageContainer = document.createElement("div");

  const mainHeading = document.createElement("h1");
  const mainHeadingNode = document.createTextNode("Krusty Krab");
  mainHeading.appendChild(mainHeadingNode);

  const image = document.createElement("img");
  image.src = krustyKrabImage;

  const description = document.createElement("div");
  const descriptionNode = document.createTextNode("The best restaurant in Bikini "
   + "Bottom, famous for our Krabby Patties!");
  description.appendChild(descriptionNode);

  const elements = [mainHeading, description, getLocationContainer()];

  for (let element of elements) {
    infoContainer.appendChild(element);
  }

  imageContainer.appendChild(image);

  homeContainer.appendChild(infoContainer);
  homeContainer.appendChild(imageContainer);

  pageContent.appendChild(homeContainer);

}

export { loadHomePage };