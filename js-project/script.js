"use strict" 
const output = document.getElementById('output');
const equally = document.getElementById('eql');
const plus = document.getElementById('plus');
const minus = document.getElementById('minus');
const mult = document.getElementById('mult');
const divis = document.getElementById('divis');
const allItems = document.querySelectorAll('.item');
const dot = document.getElementById('dot');
const packLeft = document.getElementById('packLeft');
const packRight = document.getElementById('packRight');
const del = document.getElementById('delete');
const back = document.getElementById('back')
const nums = [];

for(let i = 0; i < 10; i++) {
    nums.push(document.getElementById(`num${i}`))
    nums[i].addEventListener('click', addValueInInput)
};

plus.addEventListener('click', addValueInInput);
minus.addEventListener('click', addValueInInput);
mult.addEventListener('click', addValueInInput);
divis.addEventListener('click', addValueInInput);
dot.addEventListener('click', addValueInInput);
packLeft.addEventListener('click', addValueInInput);
packRight.addEventListener('click', addValueInInput);
equally.addEventListener('click', getResult)
del.addEventListener('click', deleteValue)
back.addEventListener('click', backing)

function addValueInInput () {
    output.append(this.innerHTML)
}

function deleteValue () {
    output.innerHTML = '';
}

function getResult () {
    output.innerHTML = eval(output.innerHTML)
}

function backing () {
    let a = output.innerHTML;
    output.innerHTML = a.substring(0, a.length - 1)
}