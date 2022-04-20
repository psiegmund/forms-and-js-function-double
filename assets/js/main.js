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
