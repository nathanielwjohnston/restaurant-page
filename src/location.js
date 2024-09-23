function createLocationElement() {
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

  return locationContainer;
}

export default createLocationElement;