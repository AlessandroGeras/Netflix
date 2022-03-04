/* ########## themoviedb ########## */

const api_key = "api_key=38c007f28d5b66f36b9c3cf8d8452a4b"; /*ApiKey do usuário cadastrado para fazer as consultas*/
const api_database = "https://api.themoviedb.org/3";
const api_top_rated = "/movie/top_rated?language=pt-BR&"; /*Pegar a lista de filmes top rated em português*/
const consulta = api_database+api_top_rated+api_key;

const backdrop_path = "https://image.tmdb.org/t/p/original/";

function getmovie(){

  fetch(consulta)
  .then(response=>response.json())
  .then(showjson => {
    console.log(showjson.results) /*Ver todos os filmes top rated*/
    /*console.log(showjson.results[0]); /*Ver apenas o primeiro filme top rated*/
    
    let backdrop_img = document.getElementById("backdrop_img");
    let back = document.getElementById("back");
    let front = document.getElementById("front");
    let backdrop_h2 = document.getElementById("backdrop_h2");    

    let section1_img = document.getElementById("section1").querySelectorAll("#section1 img");
    let section1_votes= document.getElementById("section1").querySelectorAll("#section1 h4");
    let section1_title = document.getElementById("section1").querySelectorAll("#section1 h3");
    let section2_img = document.getElementById("section2").querySelectorAll("#section2 img");
    let section2_votes= document.getElementById("section2").querySelectorAll("#section2 h4");
    let section2_title = document.getElementById("section2").querySelectorAll("#section2 h3");
    let section3_img = document.getElementById("section3").querySelectorAll("#section3 img");
    let section3_votes= document.getElementById("section3").querySelectorAll("#section3 h4");
    let section3_title = document.getElementById("section3").querySelectorAll("#section3 h3");

    let carrousel = document.getElementById("carrousel");
    
    backdrop_img.src = backdrop_path+showjson.results[1].backdrop_path; 
    back.innerHTML = showjson.results[1].title; 
    front.innerHTML = showjson.results[1].title; 

    let overview = showjson.results[1].overview; 
    let dotposition = (overview.indexOf('.')); /*Pegar a posição do ponto do texto overview e cortar o que vier depois para resumir o overview*/
    backdrop_h2.innerHTML = overview.substring(0, dotposition+1);    

   for(let x=0;x<section1_img.length;x++){
     section1_img[x].src = backdrop_path+showjson.results[x].backdrop_path; 
     section1_votes[x].innerHTML = "<span class='nota'>Nota: "+showjson.results[x].vote_average+"<span class='votos'>\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\ Votações: "+showjson.results[x].vote_count;
     section1_title[x].innerHTML = showjson.results[x].title; 
   }

   for(let x=0;x<section2_img.length;x++){
    section2_img[x].src = backdrop_path+showjson.results[x+section2_img.length+1].backdrop_path; 
    section2_votes[x].innerHTML = "<span class='nota'>Nota: "+showjson.results[x+section2_img.length+1].vote_average+"<span class='votos'>\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\ Votações: "+showjson.results[x+section2_img.length+1].vote_count;
    section2_title[x].innerHTML = showjson.results[x+section2_img.length+1].title; 
  }

  for(let x=0;x<section3_img.length;x++){
    section3_img[x].src = backdrop_path+showjson.results[x+(section2_img.length*2)+1].backdrop_path; 
    section3_votes[x].innerHTML = "<span class='nota'>Nota: "+showjson.results[x].vote_average+"<span class='votos'>\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\ Votações: "+showjson.results[x+(section2_img.length*2)+1].vote_count;
    section3_title[x].innerHTML = showjson.results[x+(section2_img.length*2)+1].title; 
  }
    
  carrousel.style.visibility = "visible";
  
  /*Verificar em tempo real a posição do mouse*/
  window.addEventListener('scroll', function() {
    let navbar = document.getElementById('navbar');
    if(window.pageYOffset>10){
      navbar.className = "nav_start nav_normal";
    }
    else{
      navbar.className = "nav_start nav_transparent";
    }
  });

  }
  )   
}


/* ########## Delay Time For Functions ########## */

function delay(time) {
  return new Promise(resolve => setTimeout(resolve, time));
}


/* ########## Arrow Inicio Button ########## */

function arrowinicioenter(){
  let arrow_inicio = document.getElementById("arrow_inicio");
  arrow_inicio.className = "arrowinicio_rotate180";
  }
  
  async function arrowinicioleave(){
    let arrow_inicio = document.getElementById("arrow_inicio");
    let menu_inicio = document.getElementById("menu_inicio");
    let opacidade = window.getComputedStyle(menu_inicio).getPropertyValue("opacity");  
    await delay (5);
  if (opacidade <= 0.20){
    arrow_inicio.className = "arrowinicio_rotate0";
  }
  else {arrowinicioleave();
  }
  }


/* ########## Arrow Link Button ########## */

function arrowlinkenter(){
let arrow_perfil = document.getElementById("arrow_perfil");
arrow_perfil.className = "arrowlink_rotate180";
}

async function arrowlinkleave(){
  let arrow_perfil = document.getElementById("arrow_perfil");
  let perfil = document.getElementById("perfil");
  let opacidade = window.getComputedStyle(perfil).getPropertyValue("opacity");  
  await delay (5);
if (opacidade <= 0.20){
  arrow_perfil.className = "arrowlink_rotate0";
}
else {arrowlinkleave();
}
}


/* ########## Play & Info Button ########## */

function playbuttonenter(){
  let button_play = document.getElementById("button_play");
  button_play.className = "play_button_hover";
  button_play.style.cursor = "pointer";
} 

function playbuttonleave(){
let button_play = document.getElementById("button_play");
 button_play.className = "play_button";
 button_play.style.cursor = "auto";
} 


/* ########## Info Button ########## */

function infobuttonenter(){
  let button_info = document.getElementById("button_info");
  button_info.className = "info_button_hover";
  button_info.style.cursor = "pointer";
} 

function infobuttonleave(){
  let button_info = document.getElementById("button_info");
  button_info.className = "info_button";
  button_info.style.cursor = "auto";
} 


/* ########## Search Button ########## */

var searchbar = new Boolean(false);

function searchinput(){
  let search_input = document.getElementById("search_input");
  let leftnavbar = document.getElementById("leftnavbar");
  let middlenavbar = document.getElementById("middlenavbar");
  let rightnavbar = document.getElementById("rightnavbar");
  const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0)
  if (searchbar==false){
  search_input.style.transitionDuration = "1s";
  search_input.style.width = "240px";
  searchbar=true;
if (vw<=380){
  rightnavbar.style.display = "none";
}
}

else{  
  search_input.style.width = "0px"; 
  searchbar=false;
  middlenavbar.style.visibility = "visible"; 
  rightnavbar.style.display = "flex";  
}
}

