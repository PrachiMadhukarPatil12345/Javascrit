/*
alert("Hii BOM");

alert('Hiiii without window Keyword');*/


/*let time = Date();

let hii = document.getElementById('Bye');*/

/*let btn=document.querySelector('#btnTime');

btn.onclick = CurrentTime;*/

/*setInterval(CurrentTime,200)
//1 sec = 1000
//2 sec = 2000

function CurrentTime(){
    hii.innerHTML = Date();
}*/

let hii1 = document.getElementById('time1');
let hii2 = document.getElementById('time2');

setInterval(CurrentTime2,2000);

function CurrentTime2(){
    hii1.innerHTML = Date();

}

window.setTimeout(CurrentTime1,10000);

function CurrentTime1(){
    hii2.innerHTML = Date();
}





