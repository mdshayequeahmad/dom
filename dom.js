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
var items = document.getElementsByClassName('list-group-item');
console.log(items);
console.log(items[1]);
items[1].textContent = 'Hello 2';
items[1].style.fontWeight = 'bold';
items[1].style.backgroundColor = 'yellow';

// for (var i=0; i<items.length; i++) {
//     items[i].style.backgroundColor = '#b5af9e';
// }


items[2].style.backgroundColor = 'green';

for (var i=0; i<items.length; i++) {
    items[i].style.fontWeight = 'bold';
}