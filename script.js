// DOM selection

// getElementById()
const title = document.getElementById('judul');

title.style.color = 'white';
title.style.backgroundColor = 'grey';
title.innerHTML = 'Brody';

// getElementsByTagName()
const paragraph = document.getElementsByTagName('p');

for (let i = 0; i <= 3; i++){
    paragraph[i].style.backgroundColor = 'gray';
}

// getElementsByClassName()
const p1 = document.getElementsByClassName('p1')[0];

p1.innerHTML = 'berubah lewat javascript'

// document.querySelector()
const listKeren = document.querySelector('#b ul li:nth-child(2)');

listKeren.style.backgroundColor = 'blue';

// console.log(paragraph)