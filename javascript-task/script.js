// REDUCE - ЗАДАНИЯ
//-------------------
let arr1 = [-13, 0, 12, 1662, -0.32, -102, -2];
let arrNegNums = arr1.filter(function (item) { return item < 0});
let sumNegNums = arrNegNums.reduce(function (sum, item){ return sum + item},);
//-------------------
let arr2 = [{x: 10, y: 'lorem'},{x: 21, y: 'lorem'},{x: -17, y: 'lorem'},{x: 156, y: 'lorem'}];
let sumObjX = arr2.reduce(function (sum, item){
    return sum + item.x
},0);
//-------------------

// DOM - задания
// - Получить узел html
document.documentElement;

// - Пользуясь узлом `document.body` получить узлы `<b>` и `<i>`.
let b = document.body.firstElementChild.firstElementChild.firstElementChild;
let i = document.body.firstElementChild.lastElementChild.firstElementChild;
// - Поменять цвет текста  `<b>` на красный, а  `<i>` на коричневый.
b.className = 'text-color-red';
i.className = 'text-color-brown';
// - Получить текстовый узел  ‘интукод’ находящийся внутри тега `<title>`, и поменять его на 'intocode’.
let title = document.head.lastElementChild.previousElementSibling;
title.innerHTML = 'intocode';
// - Изменить содержимое `<li>` с текстом
let li = document.body.firstElementChild.lastElementChild.lastElementChild.children;
    li[0].innerHTML = 'html';
    li[1].innerHTML = 'css';
    li[2].innerHTML = 'git';
    li[3].innerHTML = 'js';






