// LVL1_1

// let number = document.getElementById('input-number');
// let result = document.getElementById('result');


// function double() {
//     console.log(number.value * 2);
//     result.innerHTML = number.value * 2;
// }

// // LVL 1_2

// let number = document.getElementById('input-number');
// let result = document.getElementById('result');

// function calcAge() {
//     result.innerHTML = 2022 - number.value;
// }

// // LVL 1_3

// let number1 = document.getElementById('input-number1');
// let number2 = document.getElementById('input-number2');
// let result = document.getElementById('result');

// function calcAge() {
//     console.log(number1.value);
//     console.log(number2.value);
//     console.log(number1.value - number2.value);
//     result.innerHTML = number1.value - number2.value;
// }

// LVL 3_1

let fontSize = document.getElementById('input-fontsize');
let fontFamily = document.getElementById('input-fontFamily');
let exampleText = document.getElementById('input-text');
let result = document.getElementById('result');
let rgbR = document.getElementById('range-R');
let rgbG = document.getElementById('range-G');
let rgbB = document.getElementById('range-B');
let hexCode = document.getElementById('input-hexCode')
let superBallsDiv = document.getElementById('superBalls')
let ball1 = document.getElementById('ballOne')
let ball2 = document.getElementById('ballTwo')
let ball3 = document.getElementById('ballThree')
let ball4 = document.getElementById('ballFour')

function chgFont() {
    console.log(fontSize.value);
    console.log(fontFamily.value);
    console.log(exampleText.value);
    result.style.fontFamily = fontFamily.value;
    result.style.fontSize = fontSize.value + 'px';
    result.innerHTML = exampleText.value;
}

function chgBg() {
    console.log(rgbR.value);
    console.log(rgbG.value);
    console.log(rgbB.value);
    body.style.backgroundColor = 'rgb(' + rgbR.value + ', ' + rgbG.value + ', ' + rgbB.value + ')';
}

function chgBgByInput() {
    body.style.backgroundColor = hexCode.value;
    console.log(hexCode.value);
}

function superBall1() {
    superBallsDiv.classList.remove("one", "two", "three", "four")
    superBallsDiv.classList.add("one")
}

function superBall2() {
    superBallsDiv.classList.remove("one", "two", "three", "four")
    superBallsDiv.classList.add("two")
}

function superBall3() {
    superBallsDiv.classList.remove("one", "two", "three", "four")
    superBallsDiv.classList.add("three")
}

function superBall4() {
    superBallsDiv.classList.remove("one", "two", "three", "four")
    superBallsDiv.classList.add("four")
}