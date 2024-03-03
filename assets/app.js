console.log("JS is Alive!");
// this is a comment 
//use of the comsole

//js variables
//use variables to store values.
//Declare, then initialize
//ES5-Var
//ES6-Let Const (constant)

//const-constant
//let-variable that will change their value. If it's not constant

//Data types

//strings 'Demetrius walker'-text enclosed in "double quotes"
//numbers 22-decimals,#values,negative
//boolean true false-yes or no, off or on asked like a yes/no
//Arrays-a list of similar items [square brackets, separted by commas]
//Unidentified-variable is unassigned
//null-has no value now, but it will change later

//Variable names
//lower case
//multi word-//
//use camelCase-first letter of the word is lower case the second word is upper case (so anything after the first word is all upper case )
//no spaces
//do not start with #s or symbols
//related to the info it's sharing
//reserved words 
// examples break null return location final(do not name variable's)
//Practice

//Create 5 variables name, age,city, have kids, fav movies/games
//concatenate together and consoles.log it/browser objects 

const myname = "Demetrius Walker";
let myage = 39;
let myloctation = "Denver,Co";
let havekids = true;
let favMovies = ["heat", "Black Panther", "John Wick"];
//ES5
// console.log("my name is"+ myname+ "I am "+ myage+" myloctation +"Kids" + havekids + "My fav Movies" + favMovies);
alert(`My name is ${myname} \n I live in ${myloctation}\n I am ${myage}`);
// 
// ageVerifier =() => alert("hi + myName");
// funtction declaration-function keyword, name the function, pass the parameter
// function body is anything inside the {}
//ES5 function //ES6 uses aroow functions
function tellFortune() {
    const myFortune = [
        "You'll be a Famous pup!",
        "You'll get hit by a car",
        "You'll get a steak dinner",
        "Youl'll get some icecream",
        "You'll learn a new trick",
        "You'll fall in love",
        "You'll get a new chew toy",
        "be careful on Tuseday",
        "Your owner might move away",
        "Going to the pound"
    ];
    let random = myFortune[Math.floor(Math.random() * myFortune.length)]
    document.getElementById("message").innerHTML = random;
}


//Age verifier using conditionals 
let agePrompt = prompt("Please Enter your Age");

if (agePrompt >= 18) {
    alert("welcome")
} else {
    alert("Come Back in a few years")
    document.location = "https://www.Google.com";
}



const today = new Date();
console.log(today);
//returns the current day in number form
const dayNumber = today.getDay();
//storing my output location
console.log(dayNumber)
const element = document.getElementById("message1")


function special() {
    if (dayNumber == 0) {
        return `1/2 off all oils`;
    } else if (dayNumber == 1) {
        return `2-for-1 Buy-one-Get-one Free day`;
    } else if (dayNumber == 3) {
        return `Add a gummy`;
    } else if (dayNumber == 4) {
        return `Bring a friend get an extra treat`;
    } else if (dayNumber == 5) {
        return `Buy two edibles get one free`;
    } else if (dayNumber == 6) {
        return `Brunch and free samples`;
    } else element.classList.add("hideme")


}
element.innerHTML = `Check out the Special today` + `</br>` + special();

const arrayCarousel = [
    "images/images (1).jpg",
    "images/images (2).jpg",
    "images/images (3).jpg",
    "images/images (4).jpg",

];

counter = 0;

function setImage() {
    document.getElementById("carousel-cbd").src = arrayCarousel[counter];

    counter = (counter + 1) % arrayCarousel.length
}
setInterval(setImage, 2000);