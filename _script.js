const root = document.querySelector("#root");

/* function create(tag, options) {
  options;
  const element = document.createElement(tag);
  const keys = Object.keys(options);
  for (let i = 0; i < keys.length; i++) {
    const key = keys[i];
    element[key] = options[key];
  }
  return element;
} */

function createEl(tag, options) {
  const el = document.createElement(tag);

  for (let keys in options) {
    el[keys] = options[keys];
  }
  return el;
}

function createRoot() {
  const headerEl = createEl("header", { className: "header-el" });
  const beersEl = createEl("h2", {
    className: "best-beers",
    innerText: "Best Beers",
  });

  const headerImg = createEl("img", { src: "/img/menu.png" });
  headerEl.append(beersEl, headerImg);

  const main = createEl("main", {className: "main"});

  const cardDiv1 = createEl("div", {className: "card-div-1"});
  const cardNum = createEl("div", {className: "card-num", innerText: "1"});
  const button = createEl("div", {className: "button", innerText: "details"});
  const cardText = createEl("div", {className: "card-text"});
  const beerTitle = createEl("h1", {className: "beer-title", innerText: "Mango Bay"});
  const line = createEl("HR");
  const beerText1 = createEl("p", {className: "beer-text-1", innerText: "Mad Scientist Beer"});
  const beerText2 = createEl("p", {className: "beer-text-2", innerText: "Pale Ale - American"});
  cardText.append(beerTitle, line, beerText1, beerText2)
  cardDiv1.append(cardNum, button, cardText);

  
  main.append(cardDiv1)
  root.append(headerEl, main);
}
createRoot();
