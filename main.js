// DOM Manipulation

// 1. GetElementByID()
// const title  = document.getElementById('main-heading');
// console.log(title);

// 2. GetElementByClassName()
// const listItems = document.getElementsByClassName('list-item');
// console.log(listItems)


// 3. getElementByTagName()
// const listTag = document.getElementsByTagName('li');
// console.log(listTag)

// 4. querySelector()
// const container = document.querySelector('div');
// console.log(container);

// 5. quearySelectorAll()
// const container = document.querySelectorAll('div');
// console.log(container);

// ++== styiling an elements ==++

// const title = document.querySelector('#main-heading');
// inline styling *1 0 0 0
// title.style.color = '#00f';

// const listItems = document.querySelectorAll('.list-item');
// css property written with camel case
// Also, for styiling selector all, you need for loop.
// for ( let i = 0; i < listItems.length; i++){
//     listItems[i].style.fontSize = '1em';
// }


// ++== Creating Elements ==++
const ul = document.querySelector('ul');
const li = document.createElement('li');

// adding elements
ul.append(li)
li.innerText = "Tricked into becoming the heroine's stepmother"

// modifying the text/content
const firstListItem = document.querySelector('.list-item');

// --- innerText, innerHTML, and textConeten ---
// console.log(firstListItem.innerText);
// inner html has an security issue
// console.log(firstListItem.innerHTML);
// console.log(firstListItem.textContent);

// ++== Modifying elements attributes & Classes
li.setAttribute('class', 'list-item');
// remove attribut to make it back to default settings
// li.removeAttribute('id')

// const title = document.querySelector('#main-heading');
// console.log(title.getAttribute('id'))

// --for the class just replace id with class i think

// remove element
// li.remove();

// ++== HOW TO NAVIGATE THE DOM ==++
function pangkat(c,a,b){
    let d = a ** b * c;
    return d;
}