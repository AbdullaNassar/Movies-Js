"usestrict";

// API Call
let res;

const params = new URLSearchParams(window.location.search);
const id = params.get("id");

console.log(id);
var url = `https://api.themoviedb.org/3/movie/${id}?api_key=e18ad800950cc61dbaa56a2fad2a2666`;

// let url =
//   // "https://api.themoviedb.org/3/movie/858485?api_key=e18ad800950cc61dbaa56a2fad2a2666";
//   "https://api.themoviedb.org/3/movie/550?api_key=e18ad800950cc61dbaa56a2fad2a2666";

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
var logo = document.getElementById("logo");
var heart = document.getElementById("heart");

console.log(logo);
logo.addEventListener("click", function () {
  console.log(logo);
  window.location = "../HomePage/index.html";
});

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

let favsMovies = JSON.parse(localStorage.getItem("favorites"));
console.log(favsMovies);
var curFav = favsMovies.filter((movie) => movie.id == res.id);
console.log(curFav);
if (curFav.length) heart.classList.add("heartColor");
function heartClick() {
  let listObj = JSON.parse(localStorage.getItem("favorites"));
  if (heart.classList.contains("heartColor")) {
    listObj = listObj.filter((item) => item.id !== res.id);
    console.log(listObj);
    heart.classList.remove("heartColor");
    localStorage.setItem("favorites", JSON.stringify(listObj));
  } else {
    var obj = {
      id: res.id,
      name: res.title,
      src: `https://image.tmdb.org/t/p/w500/${res.poster_path}`,
    };

    listObj.push(obj);
    console.log(listObj);
    localStorage.setItem("favorites", JSON.stringify(listObj));
    heart.classList.add("heartColor");
  }

  // favs.push(obj);
  // console.log(localStorage.getItem("favorites"));
}

heart.addEventListener("click", heartClick);
