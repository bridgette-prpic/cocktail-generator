function displayCocktail(response) {
  console.log("cocktail generated");
  new Typewriter("#cocktail", {
    strings: response.data.answer,
    autoStart: true,
    delay: 10,
    cursor: "",
  });
}

function generateCocktail(event) {
  event.preventDefault();

  let promptInput = document.querySelector("#user-prompt");

  let apiKey = "a9f2c840f2o2a03203b359b335b1ta00";
  let prompt = `User instructions are to generate a cocktail recipe that includes the liquor in ${promptInput.value}`;
  let context =
    "You are a classic cocktail expert and love to share all of your favorite cocktail recipes. Your mission is to generate a classic cocktail recipe that has only 4 ingredients that are most likely found in every kitchen in basic HTML without using 'html' in your response. Please, make sure to follow the user instructions.";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  console.log("Generating Cocktail");
  console.log(`prompt: ${prompt}`);
  console.log(`prompt: ${context}`);
  axios.get(apiUrl).then(displayCocktail);
}

let cocktailFormElement = document.querySelector("#cocktail-generator-form");
cocktailFormElement.addEventListener("submit", generateCocktail);
