

let NewE = document.createElement('p');

NewE.style.color = 'red';

let Text = document.createTextNode('Hii Iam new heading');

NewE.appendChild(Text);

document.body.appendChild(NewE);

let element = document.querySelector('#removeMe');

element.remove();

console.log(element);