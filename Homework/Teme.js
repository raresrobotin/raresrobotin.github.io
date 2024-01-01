// function variabile() {
//   var name = true; //boolean
//   console.info("Male:", name);
//   name = false; //boolean
//   console.info("Female:", name);
//   name = "Rares"; //string
//   console.info("Nume:", name);
//   var age = 35; //number
//   console.info("Rares Robotin", age);

//   // objects [array]
//   var skills = ["html", "css", "js"];
//   console.log("tipul variabilei skills:", typeof skills);
// }
// //variabile();

// function changeColor(red) {
//   var color = document.getElementById("blue");
//   console.warn("color:", color);
//   console.info("tipul variabilei color:", typeof color);
//   color.style.backgroundColor = red;
// }
//changeColor("red");

// CODUL PAGINII HTML[Teme(HTML+CSS)]//
// //Cub 1/2
// function changeBlue() {
//   document.getElementById("red").style.backgroundColor = "red";

//   var cub = document.getElementById("blue");
//   cub.style.backgroundColor = "blue";
// }
// function changeRed() {
//   document.getElementById("blue").style.backgroundColor = "red";

//   var cub = document.getElementById("red");
//   cub.style.backgroundColor = "blue";
// }

// //Cub 3/6
// function changeOrange() {
//   document.getElementById("orange").style.backgroundColor = "orange";
//   document.getElementById("turquoise").style.backgroundColor = "turquoise";
// }
// function changeTurquoise() {
//   document.getElementById("turquoise").style.backgroundColor = "orange";
//   document.getElementById("orange").style.backgroundColor = "turquoise";
// }

// //Cub 4/5
// function changeOrangered() {
//   document.getElementById("orangered").style.backgroundColor = "orangered";
//   document.getElementById("purple").style.backgroundColor = "purple";
// }
// function changePurple() {
//   document.getElementById("orangered").style.backgroundColor = "purple";
//   document.getElementById("purple").style.backgroundColor = "orangered";
// }

// //Cub 7/8
// function changeGreen() {
//   document.getElementById("green").style.backgroundColor = "green";
//   document.getElementById("yellow").style.backgroundColor = "yellow";
// }
// function changeYellow() {
//   document.getElementById("green").style.backgroundColor = "yellow";
//   document.getElementById("yellow").style.backgroundColor = "green";
// }

// //Cub 9
// function changeMagenta() {
//   document.getElementById("green,yellow,blue").style.backgroundColor =
//     "magenta";
// }

// function cubeOne() {
//   document.querySelector("#one").style.backgroundColor = "blue";
//   console.info("blue", one);
// }
// cubeOne();

// function cubeTwo() {
//   document.querySelector("#two").style.backgroundColor = "yellow";
//   console.info("red", two);
// }
// cubeTwo();

function changeColors() {
  document.querySelector("#one").style.backgroundColor = "purple";
  document.querySelector("#two").style.backgroundColor = "green";
  document.querySelector("#three").style.backgroundColor = "blue";
}
changeColors();

document.getElementById("one").addEventListener("click", function () {
  document.getElementById("two").style.backgroundColor = "blue";
});
