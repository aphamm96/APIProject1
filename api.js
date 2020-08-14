const baseURL = 'https://pokeapi.co/api/v2/';
let url;
const searchTerm = document.querySelector('.search');
const searchForm = document.querySelector('form');
const category = document.querySelector('#category');
const submitBtn = document.querySelector('.submit');
const section = document.querySelector('section');
searchForm.addEventListener('submit', fetchResults);
function fetchResults(event) {
    event.preventDefault();
    url = `${baseURL}${category.value}`;
    console.log('URL:', url);
    if (searchTerm.value !== '') {
      console.log(searchTerm.value)
      url += '/' + searchTerm.value;
    }
    fetch(url)
      .then(function(result) {
        console.log(result)
        return result.json();
      })
      .then(function(json) {
        console.log(json);
        displayResults(json);
      })
      .catch(function(err) {
        console.log(err);
      })
  }
  function displayResults(json) {
    while (section.firstChild) {
      section.removeChild(section.firstChild);
    }
    let results = json.species.name;
    let resultslink = json.species.url
    let sprite =json.sprites.front_default
    console.log(results);
      if (results.length === 0) {
        console.log('No results found');
      } else {
          let result = document.createElement('result');

          let heading = document.createElement('h3');

          let link = document.createElement('a');

          let img = document.createElement('img');
          console.log('Current name:', results);
          console.log('Current link:', resultslink);
          console.log('Current image:', sprite);
          heading.textContent=results;
          link.textContent=resultslink;
          link.href = resultslink;
          img.src = sprite;
          console.log(link);
          result.appendChild(heading);
          result.appendChild(link);
          result.appendChild(img);
          section.appendChild(result);
          console.log(section);
    }
}