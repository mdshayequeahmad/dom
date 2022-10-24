//EXAMINE THE DOCUMENT OBJECT
//console.dir(document);

// console.log(document.domain);
// console.log(document.URL);
// console.log(document.title);
// console.log(document.doctype);
// console.log(document.head);
// console.log(document.all);
// console.log(document.all[10]);

//document.all[10].textContent = 'hello';

// console.log(document.forms[0]);
// console.log(document.links);
///console.log(document.images);


//GET ELEMENT BY ID
//console.log(document.getElementById('header-title'));
//var header_title = document.getElementById('header-title');
//var header = document.getElementById('main-title');
// console.log(header_title);
// header_title.textContent = 'hello';
// header_title.innerText = 'goodbay';
// console.log(header_title.innerText);
// header_title.innerHTML = 'Hello';
//header.style.borderBottom = 'solid 3px #000';


//GET ELEMENTS BY CLASSNAME
// var items = document.getElementsByClassName('list-group-item');
// console.log(items);
// console.log(items[1]);
// items[1].textContent = 'Hello 2';
// items[1].style.fontWeight = 'bold';
// items[1].style.backgroundColor = 'yellow';

// for (var i=0; i<items.length; i++) {
//     items[i].style.backgroundColor = '#b5af9e';
// }


// items[2].style.backgroundColor = 'green';

// for (var i=0; i<items.length; i++) {
//     items[i].style.fontWeight = 'bold';
// }


//GET ELEMENTS BY TAGNAME
// var li = document.getElementsByTagName('li');
// console.log(li);
// console.log(li[1]);
// li[1].textContent = 'Hello 2';
// li[1].style.fontWeight = 'bold';
// var li = document.getElementsByTagName('li');
// li[1].style.backgroundColor = 'yellow';

// for (var i=0; i<li.length; i++) {
//     li[i].style.backgroundColor = '#b5af9e';
// }


// var new_li = document.getElementsByClassName('new-li');
// new_li[0].textContent = 'Hello 5';
// new_li[0].style.fontWeight = 'bold';


// var li = document.getElementsByTagName('li');
// li[4].textContent = 'Hello 10';
// li[4].style.backgroundColor = 'red';


//QUERY SELECTOR
// var header = document.querySelector('#main-header');
// header.style.borderBottom = 'solid 4px #ccc';

// var input = document.querySelector('input');
// input.value = 'Helle World';

// var submit = document.querySelector('input[type="submit"]');
// submit.value = 'SEND';

// var items = document.querySelector('.list-group-item');
// items.style.color = 'red';

// var lastitem = document.querySelector('.list-group-item:last-child');
// lastitem.style.color = 'blue';

// var seconditem = document.querySelector('.list-group-item:nth-child(2');
// seconditem.style.color = 'coral';

//Deliverable
// var seconditem = document.querySelector('.list-group-item:nth-child(2');
// seconditem.style.backgroundColor = 'green';

// var thirditem = document.querySelector('.list-group-item:nth-child(3');
// thirditem.style.color = 'white';

//QuerySelectorALL
// var titles = document.querySelectorAll('.title');
// console.log(titles);
// titles[0].textContent = 'Hello';

// var odd = document.querySelectorAll('li:nth-child(odd)');
// var even = document.querySelectorAll('li:nth-child(even)');

// for (var i=0; i < odd.length; i++){
//     odd[i].style.backgroundColor = '#b3afa6';
//     even[i].style.backgroundColor = '#e8ca76';
// }

//Deliverable
var seconditem = document.querySelector('.list-group-item:nth-child(2');
seconditem.style.color = 'green';

var odd = document.querySelectorAll('li:nth-child(odd)');
for (var i=0; i < odd.length; i++){
    odd[i].style.backgroundColor = 'green';
}