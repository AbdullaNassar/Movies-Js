"usestrict";

// API Call
let res;

let url =
  "https://api.themoviedb.org/3/movie/858485?api_key=e18ad800950cc61dbaa56a2fad2a2666";
// "https://api.themoviedb.org/3/movie/550?api_key=e18ad800950cc61dbaa56a2fad2a2666";

let xhr = new XMLHttpRequest();
xhr.open("GET", url, false);

xhr.onreadystatechange = function () {
  if (xhr.readyState == 4 && xhr.status == 200) {
    let resp = xhr.response;
    res = JSON.parse(resp);
  }
};
xhr.send();

console.log(res);

// get all document elements

var imagePoster = document.getElementById("imagePoster");
var releasedDate = document.getElementById("releasedDate");
var movieTitle = document.getElementById("movieTitle");
var overview = document.getElementById("overview");
var ratingStar = document.getElementById("ratingStar");
var ratingValue = document.getElementById("ratingValue");

imagePoster.src = `https://image.tmdb.org/t/p/w500/${res.poster_path}`;
releasedDate.innerText = res.release_date.substring(0, 4);
movieTitle.innerText = res.title;
movieTitle.href = res.homepage;
overview.innerText = res.overview;

var genresContainer = document.createElement("div");
for (var i = 0; i < res.genres.length; i++) {
  var genresItem = document.createElement("span");
  genresItem.className = "genres_item";
  genresItem.innerText = res.genres[i].name;

  genresContainer.appendChild(genresItem);
}

document
  .getElementById("genresHeading")
  .insertAdjacentElement("afterend", genresContainer);

var languagesContainer = document.createElement("div");
for (var i = 0; i < res.spoken_languages.length; i++) {
  var languageItem = document.createElement("span");
  languageItem.className = "language_item";
  languageItem.innerText = res.spoken_languages[i].english_name;

  languagesContainer.appendChild(languageItem);
}

document
  .getElementById("languageHeading")
  .insertAdjacentElement("afterend", languagesContainer);

var rate = Math.floor(Number(res.vote_average) / 2);
ratingValue.innerText = rate;
console.log(rate);
var star = "";
for (let i = 0; i < rate; i++) star += "⭐";
ratingStar.innerText = star;

for (let i = 0; i < res.production_companies.length; i++) {
  var productionItem = document.createElement("div");
  productionItem.className = "productionItem";

  var img = document.createElement("img");
  img.src = `https://image.tmdb.org/t/p/w500${res.production_companies[i].logo_path}`;
  img.width = 50;
  img.height = 50;
  img.alt = "sd";
  img.style.filter = "invert(1)";
  // img.style.mixBlendMode = "difference";

  console.log(img);

  var prodName = document.createElement("span");
  prodName.innerText = res.production_companies[i].name;

  productionItem.appendChild(img);
  productionItem.appendChild(prodName);

  console.log(document.getElementById("productionConitainer"));
  document
    .getElementById("productionConitainer")
    .insertAdjacentElement("beforeend", productionItem);
}
