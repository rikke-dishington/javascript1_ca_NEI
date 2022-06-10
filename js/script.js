const url = "https://api.thedogapi.com/v1/images/search";

const resultsContainer = document.querySelector(".results");

async function fetchGames() {
  try {
    const response = await fetch(url);
    const json = await response.json();

    console.log(json);

    resultsContainer.innerHTML = "";

    const game = json.results;

    for (let i = 0; i < game.length; i++) {
      console.log(game[i].background_image);
      console.log(game[i].name);
      console.log(game[i].rating);
      if (i === 2) {
        break;
      }

      const gameImg = game[i].background_image;
      const gameName = game[i].name;
      const gameRating = game[i].rating;

      resultsContainer.innerHTML += `<div class="games">
                                            <a href="details.html?id=${game.id}"><img src="${gameImg}"/></a>
                                            <a href="details.html?id=${game.id}"><h4>${gameName}</h4>
                                            <a href="details.html?id=${game.id}"><p>${gameRating}</p>
                                        </div>`;
    }
  } catch (error) {
    console.log(error);
    resultsContainer.innerHTML = displayError("Oh no! An error occurred");
  }
}

fetchGames();
