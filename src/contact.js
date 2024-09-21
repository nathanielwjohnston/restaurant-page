function loadContactPage () {
  const pageContent = document.querySelector("#content");

  const emailContainer = document.createElement("div");
  const emailHeader = document.createElement("h3");
  const emailHeaderNode = document.createTextNode("Email");
  const email = document.createElement("p");
  const emailAddress = document.createTextNode("mrkrabs@krustykrab.com");

  emailHeader.appendChild(emailHeaderNode);
  email.appendChild(emailAddress);

  emailContainer.appendChild(emailHeader);
  emailContainer.appendChild(email);

  const telephoneContainer = document.createElement("div");
  const telephoneHeader = document.createElement("h3");
  const telephoneHeaderNode = document.createTextNode("Telephone");
  const telephone = document.createElement("p");
  const telephoneNumber = document.createTextNode("555-3198");

  telephoneHeader.appendChild(telephoneHeaderNode);
  telephone.appendChild(telephoneNumber);

  telephoneContainer.appendChild(telephoneHeader);
  telephoneContainer.appendChild(telephone);

  const detailsContainer = document.createElement("div");
  detailsContainer.id = "details-container";
  detailsContainer.appendChild(emailContainer);
  detailsContainer.appendChild(telephoneContainer);

  const formContainer = document.createElement("div");
  formContainer.id = "form-container";

  const formHeading = document.createElement("h3");
  const formHeadingNode = document.createTextNode("Send us a message!");
  formHeading.appendChild(formHeadingNode);
  formContainer.appendChild(formHeading);
  const form = document.createElement("form");

  const nameLabel = document.createElement("label");
  nameLabel.setAttribute("for", "name-input");
  const nameLabelNode = document.createTextNode("Full Name");
  nameLabel.appendChild(nameLabelNode);

  const nameInput = document.createElement("input");
  nameInput.id = "name-input";

  const emailLabel = document.createElement("label");
  emailLabel.setAttribute("for", "email-input");
  const emailLabelNode = document.createTextNode("Email");
  emailLabel.appendChild(emailLabelNode);

  const emailInput = document.createElement("input");
  emailInput.id = "email-input";
  emailInput.setAttribute("type", "email");

  const messageLabel = document.createElement("label");
  messageLabel.setAttribute("for", "message-input");
  const messageLabelNode = document.createTextNode("Message");
  messageLabel.appendChild(messageLabelNode);

  const messageInput = document.createElement("textarea");
  messageInput.id = "message-input";

  const submitButton = document.createElement("button");
  submitButton.setAttribute("type", "submit");
  const submitNode = document.createTextNode("Submit");
  submitButton.appendChild(submitNode);

  const formElements = [
    nameLabel, nameInput, emailLabel, emailInput, messageLabel, messageInput,
    submitButton
  ];

  for (let element of formElements) {
    form.appendChild(element);
  }

  formContainer.appendChild(form);

  const contactContainer = document.createElement("div");
  contactContainer.id = "contact-container";
  
  contactContainer.appendChild(formContainer);
  contactContainer.appendChild(detailsContainer);

  pageContent.appendChild(contactContainer);
}

export { loadContactPage };