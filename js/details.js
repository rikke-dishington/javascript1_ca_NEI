const detailContainer = document.querySelector(".game-details");

const queryString = document.location.search;

const params = new URLSearchParams(queryString);

const id = params.get("id");

console.log(id);

const url = "https://api.rawg.io/api/games/" + id;

console.log(url);

async function fetchGame() {
  try {
    const response = await fetch(url);
    const details = await response.json();

    console.log(details);

    createHtml(details);
  } catch (error) {
    console.log(error);
    detailContainer.innerHTML = displayError(
      "Oh no! An unknown error has occurred"
    );
  }
}

fetchGame();

function createHtml(details) {
  detailContainer.innerHTML = `<h1>${details.name}</h1>
                                <div class="details-image" 
                                    style="background-image: url('${details.background_image}')"></div>
                                <div class="details-description">${details.description}</div>
                                <time class="details-date">Released: ${details.released}</time>`;
}
