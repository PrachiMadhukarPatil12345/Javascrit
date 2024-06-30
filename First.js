alert("Hii js from external file");

document.write("Prachi!! first js@@@@####!!!!!!!" );
console.log("Hii from console");
/*
keywords to declare any variable
10 var
20 let
3 const
*/
const k = 10;
console.log(k);
const l = 60;
document.write(l);
var i = 20;
console.log(i);


let j;
j=30;
console.log(j);
// single line comment
/* Multiline Comment
*/

//  Data Types in JS

/*
1] Primitive Data types
i) Number //10,40,56.98
ii) String // 'A', 'ABCD',"A","ABCD"
III) bigint // 7807677967978899080798967908434366
iv) Null
v) Undefined
vi) Symbol 
vii) Boolean // true, false

2] Non Primitive data types
i) Object
*/

let w ;
w = 10;
document.write(typeof w);

let s = ("Prachi");
document.write(typeof s);

let m = null;
document.write(typeof m);

let q ;
q = true;
document.write(typeof q);

let arr=[45,87,23,76.34];
arr.push(60);
arr.pop();
arr.shift();
arr.unshift(0);
document.write(arr);

//push-adds element to end of list,pop-removes last element,shift-removes 1st element from list,
//unshift-adds at starting of list

var student = {
name:"prachi",
Rollno:429,
Address:"Sangli"
}
console.log(student);