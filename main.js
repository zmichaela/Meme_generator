//set timer
//event listener
//5 memes 

let randomNumber;


//generate a random number from 1-5
function getRandomNumber () {
 randomNumber = Math.floor(Math.random() * 5 + 1);
 return randomNumber;
}


//change existing meme to a random meme
function randomBackground () {
 randomNumber = Math.floor(Math.random() * 255);
 let randomGrb = randomNumber + ", " + randomNumber + ", " + randomNumber; //9,9,9
 document.body.style.backgroundColor = `grb(${randomGrb})`;
}

function changeMeme () {
  let memeImage = document.querySelector("#image");
  memeImage.src = "images/image-" + getRandomNumber() + ".jpg";
  randomBackground();
}



