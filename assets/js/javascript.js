/* ########## THEMOVIEDB API DATA ########## */

const api_key = "api_key=38c007f28d5b66f36b9c3cf8d8452a4b"; /* User ApiKey to make query */
const api_database = "https://api.themoviedb.org/3";
const api_top_rated = "/movie/top_rated?language=pt-BR&"; /* Take the top rated movies in PT-BR */
const query = api_database + api_top_rated + api_key;

const backdrop_path = "https://image.tmdb.org/t/p/original/"; /* Main image for Backdrop */

function getmovie() {
  fetch(query)
    .then((response) => response.json())
    .then((showjson) => {
      /* Show all top rated movies */
      /* console.log(showjson.results[0]); /*Show only the first top rated movie */
      console.log(showjson.results);

      /* ########## BACKDROP ########## */
      let backdrop_img = document.getElementById("backdrop_img");
      let back = document.getElementById("back");
      let front = document.getElementById("front");
      let backdrop_h2 = document.getElementById("backdrop_h2");

      /* Populate the Backdrop */
      backdrop_img.src = backdrop_path + showjson.results[1].backdrop_path;
      back.innerHTML = showjson.results[1].title;
      front.innerHTML = showjson.results[1].title;

      let overview = showjson.results[1].overview;
      /* Take the position of the overview text dot and cut what follows to summarize the overview */
      let dotposition = overview.indexOf(".");
      backdrop_h2.innerHTML = overview.substring(0, dotposition + 1);

      /* ########## CARROUSEL ########## */
      let section1_img = document.getElementById("section1").querySelectorAll("#section1 img");
      let section1_votes = document.getElementById("section1").querySelectorAll("#section1 h4");
      let section1_title = document.getElementById("section1").querySelectorAll("#section1 h3");
      let section2_img = document.getElementById("section2").querySelectorAll("#section2 img");
      let section2_votes = document.getElementById("section2").querySelectorAll("#section2 h4");
      let section2_title = document.getElementById("section2").querySelectorAll("#section2 h3");
      let section3_img = document.getElementById("section3").querySelectorAll("#section3 img");
      let section3_votes = document.getElementById("section3").querySelectorAll("#section3 h4");
      let section3_title = document.getElementById("section3").querySelectorAll("#section3 h3");
      let carrousel = document.getElementById("carrousel");

      /* Populate the Carrousel */
      for (let x = 0; x < section1_img.length; x++) {
        section1_img[x].src = backdrop_path + showjson.results[x].backdrop_path;
        section1_votes[x].innerHTML =
          "<span class='vote_average'>Nota: " +
          showjson.results[x].vote_average +
          "<span class='vote_count'>\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 Votações: " +
          showjson.results[x].vote_count;
        section1_title[x].innerHTML = showjson.results[x].title;
      }

      for (let x = 0; x < section2_img.length; x++) {
        section2_img[x].src = backdrop_path + showjson.results[x + section2_img.length + 1].backdrop_path;
        section2_votes[x].innerHTML =
          "<span class='vote_average'>Nota: " +
          showjson.results[x + section2_img.length + 1].vote_average +
          "<span class='vote_count'>\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 Votações: " +
          showjson.results[x + section2_img.length + 1].vote_count;
        section2_title[x].innerHTML = showjson.results[x + section2_img.length + 1].title;
      }

      for (let x = 0; x < section3_img.length; x++) {
        section3_img[x].src = backdrop_path + showjson.results[x + section2_img.length * 2 + 1].backdrop_path;
        section3_votes[x].innerHTML =
          "<span class='vote_average'>Nota: " +
          showjson.results[x].vote_average +
          "<span class='vote_count'>\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 Votações: " +
          showjson.results[x + section2_img.length * 2 + 1].vote_count;
        section3_title[x].innerHTML = showjson.results[x + section2_img.length * 2 + 1].title;
      }

      carrousel.style.visibility = "visible";      
    });
}

/* ########## Delay Time For Functions ########## */
function delay(time) {
  return new Promise((resolve) => setTimeout(resolve, time));
}

/* ########## BUTTONS - ARROW START, ARROW LINK, PLAY, INFO AND SEARCH ########## */
/* Arrow Start Button  */
function arrow_start_enter() {
  let arrow_start = document.getElementById("arrow_start");
  arrow_start.className = "arrowstart_rotate180";
}

async function arrow_start_leave() {
  let arrow_start = document.getElementById("arrow_start");
  let menu_inicio = document.getElementById("menu_start");
  let opacidade = window.getComputedStyle(menu_inicio).getPropertyValue("opacity");
  await delay(5);
  if (opacidade <= 0.2) {
    arrow_start.className = "arrowstart_rotate0";
  }
  else {
    arrow_start_leave();
  }
}

/* Arrow Link Button */
function arrow_link_enter() {
  let arrow_perfil = document.getElementById("arrow_perfil");
  arrow_perfil.className = "arrowlink_rotate180";
}

async function arrow_link_leave() {
  let arrow_perfil = document.getElementById("arrow_perfil");
  let perfil = document.getElementById("perfil");
  let opacidade = window.getComputedStyle(perfil).getPropertyValue("opacity");
  await delay(5);
  if (opacidade <= 0.2) {
    arrow_perfil.className = "arrowlink_rotate0";
  } else {
    arrow_link_leave();
  }
}

/* Play Button */
function playbutton_enter() {
  let button_play = document.getElementById("button_play");
  button_play.className = "play_button_hover";
  button_play.style.cursor = "pointer";
}

function playbutton_leave() {
  let button_play = document.getElementById("button_play");
  button_play.className = "play_button";
  button_play.style.cursor = "auto";
}

/* Info Button */
function infobutton_enter() {
  let button_info = document.getElementById("button_info");
  button_info.className = "info_button_hover";
  button_info.style.cursor = "pointer";
}

function infobutton_leave() {
  let button_info = document.getElementById("button_info");
  button_info.className = "info_button";
  button_info.style.cursor = "auto";
}

/* Search Button */
var searchbar = new Boolean(false);

function search_input() {
  let search_input = document.getElementById("search_input");
  let middle_navbar = document.getElementById("middle_navbar");
  let right_navbar = document.getElementById("right_navbar");
  const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
  if (searchbar == false) {
    search_input.style.transitionDuration = "1s";
    search_input.style.width = "240px";
    searchbar = true;
    if (vw <= 380) {
      right_navbar.style.display = "none";
    }
  } else {
    search_input.style.width = "0px";
    searchbar = false;
    middle_navbar.style.visibility = "visible";
    right_navbar.style.display = "flex";
  }
}

/* Real-time check for the mouse position to make Navbar fading effect */
window.addEventListener("scroll", function () {
  let navbar = document.getElementById("navbar");
  if (window.pageYOffset > 10) {
    navbar.className = "nav_start nav_normal";
  } else {
    navbar.className = "nav_start nav_transparent";
  }
});