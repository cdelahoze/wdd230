const gridbutton = document.querySelector ("#grid");
const listbutton = document.querySelector ("#list");
const display = document.querySelector ("div.cards");
display.classList.add("grid");

// The following code could be written cleaner. How? We may have to simplfiy our HTMl and think about a default view.

gridbutton.addEventListener("click", () => {
	// example using arrow function
	display.classList.add("grid");
	display.classList.remove("list");
});

listbutton.addEventListener("click", showList); // example using defined function

function showList() {
	display.classList.add("list");
	display.classList.remove("grid");
}

const requestURL = 'https://cdelahoze.github.io/wdd230/images_directory/directory.json';
const cards = document.querySelector('.cards');

  fetch(requestURL)
  .then(function (response) {
  return response.json();
})
.then(function (jsonObject) {
  console.table(jsonObject); // temporary checking for valid response and data parsing
  const prophets = jsonObject['directory'];
  prophets.forEach(displayDirectory);
});

function displayDirectory(directory) {

  // Create elements to add to the document

  let card = document.createElement('section');
  let h2 = document.createElement('p');
  let h3 = document.createElement('p');
  let title1 = document.createElement('p');
  let title2 = document.createElement('a');
  let portrait = document.createElement('img');
  

  // Change the textContent property of the h2 element to contain the prophet's full name


  h2.textContent = directory.name;
  h3.textContent = directory.address;
  title1.textContent = directory.phone;
  title2.textContent = directory.webname;

  title2.setAttribute('href',  directory.website)

  // Build the image attributes by using the setAttribute method for the src, alt, and loading attribute values. (Fill in the blank with the appropriate variable).

  portrait.setAttribute('src', directory.imageurl);
  portrait.setAttribute('alt', 'Portait of ' + directory.name);
  portrait.setAttribute('loading', 'lazy');

  // Add/append the section(card) with the h2 element

  card.appendChild(portrait);
  card.appendChild(h2);
  card.appendChild(h3);
  card.appendChild(title1);
  card.appendChild(title2);


  // Add/append the existing HTML div with the cards class with the section(card)

  document.querySelector('div.cards').appendChild(card);
}