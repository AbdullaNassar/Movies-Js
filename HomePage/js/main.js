let Homepath = new XMLHttpRequest();
let allposts = [];

Homepath.open(
  "Get",
  `https://api.themoviedb.org/3/trending/all/week?api_key=eb2ea9d1a56bfee6c00b801429fd0d16`
);

Homepath.send();

Homepath.addEventListener("readystatechange", function () {
  if (Homepath.readyState == 4 && Homepath.status == 200) {
    allposts = JSON.parse(Homepath.response).results;
    Display();
  }
});

function Display() {
  let cartoona = "";
  for (let i = 0; i < allposts.length; i++) {
    cartoona += `
                <div class="col-md-3">
                <div class="post">
                    <img src="https://image.tmdb.org/t/p/w500${
                      allposts[i].poster_path
                    }" alt="pho" width="100%">
                    <h2>${
                      allposts[i].title ? allposts[i].title : allposts[i].name
                    }</h2>
                    <button class="butt" onclick="getid(${allposts[i].id})">Show Details</button> 
                    <br>
                    <span id='star' onclick="fav(this)">★</span>
                    <br>
                    <span>Vote: ${allposts[i].vote_average}</span>
                </div>
            </div>    
        `;
  }
  document.getElementById("content").innerHTML = cartoona;
}

setTimeout(() => {
  document.getElementById("loading").style.cssText = `
    display: none !important;
    `;
  this.document.body.style.cssText = `
    overflow: auto ;
    `;
  document.getElementById("linkid").style.cssText = `
    background-color: red;
    `;
}, 1000);

const toggleIcon = document.getElementById("toggleIcon");
const body = document.body;

toggleIcon.addEventListener("click", () => {
  body.classList.toggle("light");
  toggleIcon.textContent = body.classList.contains("light") ? "☀️" : "🌙"; // Change icon
});

let ups = document.getElementById("up");
window.addEventListener("scroll", function () {
  let x = this.window.scrollY;
  if (x > 1300) {
    ups.style.cssText = `
            display: block;
            `;
  } else {
    ups.style.cssText=`
            display: none;
            `;
  }
});

ups.addEventListener("click", function () {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

function fav(star){
  star.style.cssText=`
  color:yellow;
  `;
}

function getid(id) {
  window.location = `./datails.html?id=${id}`;
}
