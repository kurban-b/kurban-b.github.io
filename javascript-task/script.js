

let main = document.getElementById('main-post').firstElementChild;
let mainTitle = main.firstElementChild.firstElementChild;

let post1 = document.getElementById('post-1-tab');
let post2 = document.getElementById('post-2-tab');
let post3 = document.getElementById('post-3-tab');
let post4 = document.getElementById('post-4-tab');

post1.addEventListener('click', actPost);
post2.addEventListener('click', actPost);
post3.addEventListener('click', actPost);
post4.addEventListener('click', actPost);

post1.addEventListener('click', changeMain);
post2.addEventListener('click', changeMain);
post3.addEventListener('click', changeMain);
post4.addEventListener('click', changeMain);


function actPost() {
    post1.classList.remove('active');
    post2.classList.remove('active');
    post3.classList.remove('active');
    post4.classList.remove('active');
    this.classList.add('active');
}

function changeMain() {
    let img = this.firstElementChild.firstElementChild.firstElementChild.src;
    let title = this.firstElementChild.lastElementChild.firstElementChild.innerHTML;
    main.style.backgroundImage = `url(${img})`;
    mainTitle.innerHTML = title;


}

