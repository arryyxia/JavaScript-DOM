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


console.log(paragraph)