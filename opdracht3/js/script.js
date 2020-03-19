/*/jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/
/*eslint-env browser*/
/*eslint 'no-console':0*/


const header = document.querySelector('header');
const section = document.querySelector('section');
const foto1 = document.querySelector('#foto1');
const foto2 = document.querySelector('#foto2');
const foto3 = document.querySelector('#foto3');
const foto4 = document.querySelector('#foto4');
const foto5 = document.querySelector('#foto5');
const foto6 = document.querySelector('#foto6');


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
  var myH1 = document.createElement('h1');
  myH1.textContent = movies[3].title;
  myH1.setAttribute("class", "boe");
  header.appendChild(myH1);

  var cover = document.createElement('img');
  cover.setAttribute("src", movies[0].cover);
  foto1.appendChild(cover);
  
  var cover = document.createElement('img');
  cover.setAttribute("src", movies[1].cover);
  foto2.appendChild(cover);

  
  var cover = document.createElement('img');
  cover.setAttribute("src", movies[2].cover);
  foto3.appendChild(cover);


  var cover = document.createElement('img');
  cover.setAttribute("src", movies[3].cover);
  foto4.appendChild(cover);


  var cover = document.createElement('img');
  cover.setAttribute("src", movies[4].cover);
  foto5.appendChild(cover);

  var cover = document.createElement('img');
  //  cover.src = movies[3].cover;
  cover.setAttribute("src", movies[5].cover);
  //  cover.id="dljnljedn";
  foto6.appendChild(cover);


}


new Glider(document.querySelector('.glider'), {
  // Mobile-first defaults
  slidesToShow: 1,
  slidesToScroll: 1,
  scrollLock: true,
  dots: '.dots',
  arrows: {
    prev: '.glider-prev',
    next: '.glider-next'
  },
  responsive: [
    {
      // screens greater than >= 775px
      breakpoint: 775,
      settings: {
        // Set to `auto` and provide item width to adjust to viewport
        slidesToShow: 'auto',
        slidesToScroll: 'auto',
        itemWidth: 150,
        duration: 0.25
      }
    }, {
      // screens greater than >= 1024px
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        itemWidth: 150,
        duration: 0.25
      }
    }
  ]
});

document.addEventListener('keydown', function (event) {
  if (event.keyCode == 39) {
    var buttonRight = document.querySelector('.glider-next');
    console.log(buttonRight);
    buttonRight.click();
    buttonRight.style.opacity="100%";
    
  }

});

document.addEventListener('keydown', function (event) {
//  console.log("test", event.keyCode);
  if (event.keyCode == 37) {
    var buttonLeft = document.querySelector('.glider-prev');
    console.log(buttonLeft);
    buttonLeft.click();
  }

});




//  const myPara = document.createElement('p');
//  myPara.textContent = 'Hometown: ' + jsonObj['homeTown'] + ' // Formed: ' + jsonObj['formed'];
//  header.appendChild(myPara);
//}

//function showHeroes(jsonObj) {
//  const heroes = jsonObj['members'];
//
//  for (let i = 0; i < heroes.length; i++) {
//    const myArticle = document.createElement('article');
//    const myH2 = document.createElement('h2');
//    const myPara1 = document.createElement('p');
//    const myPara2 = document.createElement('p');
//    const myPara3 = document.createElement('p');
//    const myList = document.createElement('ul');
//
//    myH2.textContent = heroes[i].name;
//    myPara1.textContent = 'Secret identity: ' + heroes[i].secretIdentity;
//    myPara2.textContent = 'Age: ' + heroes[i].age;
//    myPara3.textContent = 'Superpowers:';
//
//    const superPowers = heroes[i].powers;
//    for (let j = 0; j < superPowers.length; j++) {
//      const listItem = document.createElement('li');
//      listItem.textContent = superPowers[j];
//      myList.appendChild(listItem);
//    }
//
//    myArticle.appendChild(myH2);
//    myArticle.appendChild(myPara1);
//    myArticle.appendChild(myPara2);
//    myArticle.appendChild(myPara3);
//    myArticle.appendChild(myList);
//
//    section.appendChild(myArticle);
//  }
//}

