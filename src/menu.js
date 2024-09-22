const menuItems = {
  mains : [
    {name:"Krabby Patty", price:"$1.25"},
    {name:"Double Krabby Patty", price:"$2.00"},
    {name:"Triple Krabby Patty", price:"$3.00"},
    {name:"Krabby Meal", price:"$3.50"},
    {name:"Double Krabby Meal", price:"$3.75"},
    {name:"Triple Krabby Meal", price:"$4.00"},
    {name:"Salty Sea Dog", price:"$1.25"},
    {name:"Footlong", price:"$2.00"},
    {name:"Sailors Surprise", price:"$3.00"},
    {name:"Golden Loaf", price:"$2.00"}
  ],
  sides : [
    {name:"Coral Bits", options:[
      {name:"Small", price:"$1.00"},
      {name:"Medium", price:"$1.25"},
      {name:"Large", price:"$1.50"}
    ]},
    {name:"Kelp Rings", price:"$1.50"},
    {name:"Salty Sauce", price:"$0.50"},
    {name:"Sea Cheese", price:"$0.25"}
  ],
  drinks : [
    {name:"Kelp Shake", price:"$2.50"},
    {name:"Seafoam Soda", options:[
      {name:"Small", price:"$1.00"},
      {name:"Medium", price:"$1.25"},
      {name:"Large", price:"$1.50"}
    ]},
  ] 
}

function loadMenu (menuItems) {

  const pageContent = document.querySelector("#content");
  const menuContainer = document.createElement("div");
  menuContainer.id = "menu-container"

  for (const section in menuItems) {
    const sectionContainer = document.createElement("div");
    sectionContainer.id = `${section}-container`;

    const sectionHeading = document.createElement("h2");
    const sectionName = document.createTextNode(`${section.charAt(0).toUpperCase() + section.slice(1)}`);
    sectionHeading.appendChild(sectionName);

    const itemsContainer = document.createElement("div");
    itemsContainer.classList.add("item-container");
    
    sectionContainer.appendChild(sectionHeading);

    for (const item of menuItems[section]) {
      const itemContainer = document.createElement("div");

      const itemHeading = document.createElement("h3");
      const itemName = document.createTextNode(`${item.name}`);
      itemHeading.appendChild(itemName);

      itemContainer.appendChild(itemHeading);

      if (item.options) {
        const itemOptions = document.createElement("div");
        itemOptions.classList.add(
          `${item.name.toLowerCase().replace(" ", "-")}-options`, "item-options"
        );

        for (let option of item.options) {
          const optionHeading = document.createElement("h4");
          const optionName = document.createTextNode(`${option.name}`);
          optionHeading.appendChild(optionName);

          const optionPrice = document.createElement("p");
          const optionPriceValue = document.createTextNode(`${option.price}`);
          optionPrice.appendChild(optionPriceValue);

          itemOptions.appendChild(optionHeading);
          itemOptions.appendChild(optionPrice);
        }

        itemContainer.appendChild(itemOptions);
      } else {
        const itemPrice = document.createElement("p");
        const itemPriceValue = document.createTextNode(`${item.price}`);
        itemPrice.appendChild(itemPriceValue);

        itemContainer.appendChild(itemPrice);
      }

      itemsContainer.appendChild(itemContainer);
    }

    sectionContainer.appendChild(itemsContainer);
    menuContainer.appendChild(sectionContainer);
  }

  pageContent.appendChild(menuContainer);
}

export { loadMenu, menuItems };