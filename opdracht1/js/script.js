

var heart = document.querySelector('.heart');



var heart2 = document.querySelector('.heart2');
var heart3 = document.querySelector('.heart3');
var heart4 = document.querySelector('.heart4');
var lijst = document.querySelector('#lijst');
console.log("#lijst: ", lijst);




function toggleRood(){
  console.log("toggleRood",heart);
  heart.classList.toggle("rood"); 
}

heart.addEventListener('click', toggleRood);

function toggleRood2(){
  heart2.classList.toggle("rood"); 
}

heart2.addEventListener('click', toggleRood2);

function toggleRood3(){
  heart3.classList.toggle("rood"); 
}

heart3.addEventListener('click', toggleRood3);

function toggleRood4(){
  heart4.classList.toggle("rood"); 
}

heart4.addEventListener('click', toggleRood4);


