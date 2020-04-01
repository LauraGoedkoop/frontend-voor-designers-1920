/*/jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/
/*eslint-env browser*/
/*eslint 'no-console':0*/


const header = document.querySelector('header');
const section = document.querySelector('section');
const div = document.querySelector('.column1');


// url waar wj de data vandaan halen
var requestURL = 'https://koopreynders.github.io/frontendvoordesigners/opdracht3/json/movies.json';


// het verzoek om de data te laden
var request = new XMLHttpRequest();

//het verzoek openen
request.open('GET', requestURL);

//type op json zetten
request.responseType = 'json';

//verzoek versturen
request.send();

// wacht op response van de server
request.onload = function () {
  console.log(request.response);
  console.log(request.response[3].release_date);
  //var films = request.response;
  //  titelHeader(films);
  showCover(request.response);

}

//function titelHeader(jsonObj) {
//  const myH1 = document.createElement('h1');
//  myH1.textContent = jsonObj['titel'];
//  header.appendChild(myH1);
//}

//we noemen de parameter jsonObj om ons zelf eraan te herinneren dat het javascript object afkomstig is van JSON 

function showCover(movies) {
//  var myH1 = document.createElement('h1');
//  myH1.textContent = movies[3].title;
//  myH1.setAttribute("class", "boe");
//  header.appendChild(myH1);


  for (var i = 0; i < movies.length; i++) {

    var section = document.createElement('section');
    section.setAttribute('tabindex', 0);

    var cover = document.createElement('img');
    cover.setAttribute("src", movies[i].cover);
    section.appendChild(cover);

    var article = document.createElement('article');
    var myTitle = document.createElement('h2');
    article.appendChild(myTitle);
    section.appendChild(article);
    myTitle.textContent = movies[i].title;

    var release_date = document.createElement('h4');
    release_date.textContent = movies[i].release_date;
    article.appendChild(release_date);

    var genres = document.createElement('h3');
    genres.textContent = movies[i].genres;
    article.appendChild(genres);

    var simple_plot = document.createElement('p');
    simple_plot.textContent = movies[i].simple_plot;
    article.appendChild(simple_plot);
    
    var trailer = document.createElement('iframe');
    trailer.setAttribute("src", movies[i].trailer);
    article.appendChild(trailer);

    div.appendChild(section);

  }


  //
  //  var cover = document.createElement('img');
  //  cover.setAttribute("src", movies[1].cover);
  //  foto2.appendChild(cover);
  //
  //
  //  var cover = document.createElement('img');
  //  cover.setAttribute("src", movies[2].cover);
  //  foto3.appendChild(cover);
  //
  //
  //  var cover = document.createElement('img');
  //  cover.setAttribute("src", movies[3].cover);
  //  foto4.appendChild(cover);
  //
  //
  //  var cover = document.createElement('img');
  //  cover.setAttribute("src", movies[4].cover);
  //  foto5.appendChild(cover);
  //
  //  var cover = document.createElement('img');
  //  //  cover.src = movies[3].cover;
  //  cover.setAttribute("src", movies[5].cover);
  //  //  cover.id="dljnljedn";
  //  foto6.appendChild(cover);
  //
  //  var cover = document.createElement('img');
  //  cover.setAttribute("src", movies[0].cover);
  //  foto7.appendChild(cover);
  //
  //  var cover = document.createElement('img');
  //  cover.setAttribute("src", movies[1].cover);
  //  foto8.appendChild(cover);
  //

}
