//Random numbers - 1-6 dice
randomNumber1=Math.floor(Math.random() * 6)+1;
randomNumber2=Math.floor(Math.random() * 6)+1;
//Change number dice img
let imgdice1 = "images/dice"+randomNumber1+".png";
let imgdice2 = "images/dice"+randomNumber2+".png";
//Query selector
document.querySelector(".dice .img1").setAttribute("src",imgdice1);
document.querySelector(".dice .img2").setAttribute("src",imgdice2);

//variable winner = DOM query selector of h1
winner = document.querySelector("h1")
//change <h1>text - win or lose 
if (randomNumber1 === randomNumber2){
    winner.innerHTML="🐶 Draw 🐶"
}
else if (randomNumber1 >randomNumber2){
    winner.innerHTML="🚩 Win player 1"
}
else{
    winner.innerHTML=" Win player 2 🚩"
}