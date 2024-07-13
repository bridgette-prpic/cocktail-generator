function generateCocktail(event) {
  event.preventDefault();

  new Typewriter("#cocktail", {
    strings: ["Vodka, Dry Vermouth, Olive Brine, Blue Cheese Olives"],
    autoStart: true,
    delay: 30,
    cursor: "",
  });
}

let cocktailFormElement = document.querySelector("#cocktail-generator-form");
cocktailFormElement.addEventListener("submit", generateCocktail);
