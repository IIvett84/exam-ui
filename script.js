const root = document.querySelector("#root");

function createEl(tag, options) {
    const el = document.createElement(tag);
  
    for (let keys in options) {
      el[keys] = options[keys];
    }
    return el;
  }

  function createBeerCard(cardNum, title, sub, text) {
    const cardDiv = createEl("div", { className: "card-div" });
    const cardNumEl = createEl("div", { className: "card-num", innerText: cardNum });
    const button = createEl("div", { className: "button" });
    const btnText = createEl("div", { className: "btn-text", innerText: "details" });
    const btnIcon = createEl("span", { className:"material-icons btn-icon", innerText: "arrow_forward"});
    const cardText = createEl("div", { className: "card-text" });
    const beerTitle = createEl("h1", { className: "beer-title", innerText: title });
    const line = createEl("HR");
    const beerSub = createEl("p", { className: "beer-sub", innerText: sub });
    const beerText = createEl("p", { className: "beer-text", innerText: text });
    button.append( btnText, btnIcon );
    cardText.append(beerTitle, line, beerSub, beerText);
    cardDiv.append(cardNumEl, button, cardText);
  
    return cardDiv;
  }

function createRoot(beersData) {
  const headerEl = createEl("header", { className: "header-el" });
  const beersEl = createEl("h2", { className: "best-beers", innerText: beersData.logo });

  const headerImg = createEl("span", { className:"material-icons menu-icon", innerText: "menu"});
  headerEl.append(beersEl, headerImg);

  const main = createEl("main", { className: "main" });

  const cards = beersData.cards;
  for (let i = 0; i < cards.length; i++) {
    const cardData = cards[i];
    const beerCard = createBeerCard(i + 1, cardData.title, cardData.sub, cardData.text);
    main.appendChild(beerCard);
  }

  root.append(headerEl, main);
} 

const beers = {
  id: "beers",
  logo: "Best Beers",
  button: "details",
  cards: [
    {
      title: "Mango Bay",
      sub: "Mad Scientist Beer",
      text: "Pale Ale - American",
    },
    {
      title: "Távoli Galaxis",
      sub: "Rothbeer Brewery",
      text: "IPA - American",
    },
    {
			title: "Liquid Cocaine",
			sub: "Mad Scientist Beer",
			text: "IPA - Imperial"
		},
		{
			title: "Organic Chocolate Stout",
			sub: "Samuel Smith Old Brewery",
			text: "Stout - English"
		},
		{
			title: "Bracia",
			sub: "Thornbridge Brewery",
			text: "Strong Ale - English"
		},
		{
			title: "Oatmeal Stout",
			sub: "Samuel Smith Old Brewery",
			text: "Stout - Oatmeal"
		},
		{
			title: "Black Tokyo Horizon",
			sub: "BrewDog",
			text: "Stout - American Imperial"
		},
		{
			title: "Vintage Ale",
			sub: "Fuller's",
			text: "Old Ale"
		},
		{
			title: "All the Leaves are Brown",
			sub: "Tempest Brewing Company",
			text: "Brown Ale - American"
		},
  ],
};

createRoot(beers);



