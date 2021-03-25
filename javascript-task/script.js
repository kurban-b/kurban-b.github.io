//Создайте и добавьте с помощью JS между блоками one и three, div, внутри которого будет курсивный текст “dolor sit amet”;

let div = document.createElement('div');
let divOne = document.getElementById('one');
divOne.after(div);
divOne.nextElementSibling;
divOne.nextElementSibling.append('dolor sit amet');
divOne.nextElementSibling.classList.add('italic');

//Добавьте для этого дива атрибут id со значением two.
divOne.nextElementSibling.id = 'two';

//Добавьте в начала списка элемент li с тектом html
let ul = document.getElementsByTagName('ul')[0];
let li = document.createElement('li');
ul.prepend(li)
li.innerHTML = 'html';

//Добавьте в список элемент li с тектом js между элементами git и react
let li2 = document.createElement('li');
ul.lastElementChild.before(li2);
li2.textContent = 'js';

// Удалите div с классом “zero”
let divZero = document.getElementsByClassName('zero')[0].remove()

// Каждому из трех оставшихся дивов задайте свой фоновый цвет
divOne.style.backgroundColor = 'orange';
document.getElementById('two').style.backgroundColor = 'green';
document.getElementById('three').style.backgroundColor = 'yellow';

// Уберите маркеры у списка (свойство: `list-style: none;`)
ul.classList.add('resetListStyle');

// К диву с классом “main” добавьте класс “container”
document.getElementsByClassName('main')[0].classList.add('container');





