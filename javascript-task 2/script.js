

/***** second tab group  *****/
let uniqueLink = document.getElementById('unique-link');
let themeLink = document.getElementById('theme-link');
let translationLink = document.getElementById('translation-link');
let eventLink = document.getElementById('event-link');
let photoLink = document.getElementById('photo-link');


uniqueLink.addEventListener('click', activator);
themeLink.addEventListener('click', activator);
translationLink.addEventListener('click', activator);
eventLink.addEventListener('click', activator);
photoLink.addEventListener('click', activator);

function activator() {
    uniqueLink.classList.remove('active');
    themeLink.classList.remove('active');
    translationLink.classList.remove('active');
    eventLink.classList.remove('active');
    photoLink.classList.remove('active');
    this.classList.add('active')
}

//

let unique = document.getElementById('unique');
let theme = document.getElementById('theme');
let translation = document.getElementById('translation');
let event1 = document.getElementById('event');
let photo = document.getElementById('photo');

function show(){
    unique.className = 'hidden';
    theme.className = 'hidden';
    translation.className = 'hidden';
    event1.className = 'hidden';
    photo.className = 'hidden';

    let currentId = this.getAttribute('data-value');
    let visibleBlock = document.getElementById(currentId);
    visibleBlock.className = 'animated fadeInDown';
}

uniqueLink.addEventListener('click', show);
themeLink.addEventListener('click', show);
translationLink.addEventListener('click', show);
eventLink.addEventListener('click', show);
photoLink.addEventListener('click', show);

/***** first tab group  *****/

let linkTab1 = document.getElementById('link-tab1');
let linkTab2 = document.getElementById('link-tab2');
let linkTab3 = document.getElementById('link-tab3');
let linkTab4 = document.getElementById('link-tab4');
let linkTab5 = document.getElementById('link-tab5');

function activator2() {
    linkTab1.classList.remove('active');
    linkTab2.classList.remove('active');
    linkTab3.classList.remove('active');
    linkTab4.classList.remove('active');
    linkTab5.classList.remove('active');
    this.classList.add('active')
}

linkTab1.addEventListener('click', activator2);
linkTab2.addEventListener('click', activator2);
linkTab3.addEventListener('click', activator2);
linkTab4.addEventListener('click', activator2);
linkTab5.addEventListener('click', activator2);

let tab1 = document.getElementById('tab1');
let tab2 = document.getElementById('tab2');
let tab3 = document.getElementById('tab3');
let tab4 = document.getElementById('tab4');
let tab5 = document.getElementById('tab5');

function show2() {
    tab1.className = 'hidden';
    tab2.className = 'hidden';
    tab3.className = 'hidden';
    tab4.className = 'hidden';
    tab5.className = 'hidden';

    let currentId = this.getAttribute('data-value');
    let visibleBlock = document.getElementById(currentId);
    visibleBlock.className = 'active';
}

linkTab1.addEventListener('click', show2);
linkTab2.addEventListener('click', show2);
linkTab3.addEventListener('click', show2);
linkTab4.addEventListener('click', show2);
linkTab5.addEventListener('click', show2);

