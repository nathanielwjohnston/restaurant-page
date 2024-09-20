import krustyKrabImage from "../assets/krusty-krab.png";

function loadHomePage () {
  const pageContent = document.querySelector("#content");

  const mainHeading = document.createElement("h1");
  const mainHeadingNode = document.createTextNode("Krusty Krab");
  mainHeading.appendChild(mainHeadingNode);

  const image = document.createElement("img");
  image.src = krustyKrabImage;

  const description = document.createElement("div");
  const descriptionNode = document.createTextNode("The best restaurant in Bikini "
   + "Bottom, famous for our Krabby Patties!");
  description.appendChild(descriptionNode);

  const locationContainer = document.createElement("div");
  locationContainer.id = "location-container";

  const locationHeader = document.createElement("h3");
  const locationHeaderNode = document.createTextNode("Location");
  locationHeader.appendChild(locationHeaderNode);

  const locationDiv = document.createElement("div");

  const locationFirstLine = document.createElement("p");
  const firstLineNode = document.createTextNode("831 Bottom Feeder Lane");
  locationFirstLine.appendChild(firstLineNode);

  const locationSecondLine = document.createElement("p");
  const secondLineNode = document.createTextNode("Bikini Bottom");
  locationSecondLine.appendChild(secondLineNode);

  locationDiv.appendChild(locationFirstLine);
  locationDiv.appendChild(locationSecondLine);

  locationContainer.appendChild(locationHeader);
  locationContainer.appendChild(locationDiv);

  const elements = [mainHeading, image, description, locationContainer];

  for (let element of elements) {
    pageContent.appendChild(element);
  }

}

export { loadHomePage };