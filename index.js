//  sessionStorage.setItem('name','Kazi');
//  localStorage.setItem('name','Ariyan');

"use strict";

/* console.log(document.all);

console.log(document.all[1]);
console.log(document.all[8]);

console.log(document.all.length);
console.log(document.domain);
console.log(document.URL);
console.log(document.doctype);
console.log(document.head);
console.log(document.body);
console.log(document.characterSet);
console.log(document.contentType);
console.log(document.body.className);
console.log(document.forms);
console.log(document.forms[0]);
console.log(document.forms[0].id);
console.log(document.forms[0].className);
 */



/* 
let headers = document.getElementsByClassName("header");
headers = Array.from(headers);


headers.forEach((header, index) =>{
    console.log(header.className);
    
    header.style.color ="#ffffff";
    header.style.backgroundColor = "red";
    header.style.padding = "15px";
    header.style.marginLeft ="50px";
    header.style.borderRadius ="20px";

    header.innerText = `Hi ${index}`;
   
}); */


/* let header1 = document.getElementById("add-post-title-id");
header1.style.background = "red";
header1.style.color = "white";
header1.style.padding ="20px";
header1.textContent ="Yaw";
header1.innerText = "yo";

console.log(header1.id);
console.log(header1.classList);
console.log(header1.className);  

let header = document.querySelector("#add-post-title-id");

header.style.background = "red";
header.style.color = "white";
header.style.padding ="20px";
header.textContent ="Yaw";

*/



// Web storage API

/* LocalStorage.setItem("name","Solomon");
localStorage.setItem("age",50);

const age = localStorage.getItem("age");
console.log(age);

localStorage.removeItem("age");
console.log(window.localStorage);

 localStorage.setItem("name","Adeklo");//update storage means reassign
 console.log(window.localStorage);

 localStorage.clear(); */

 /* const users = [
    {name:'Soomon', age:34},
    {name:'Yaw', age:36},
    {name:'Adeklo', age:39}
 ];

 
 localStorage.setItem("users",JSON.stringify(users));

 const userFrom = localStorage.getItem("users");
 console.log(userFrom);
 
 const userLocal = JSON.parse(userFrom);
 console.log(userLocal); */


 sessionStorage.setItem("name","Solomon");// session storage data will be removed if browser is closed 
 sessionStorage.setItem("name","Arian");
 
 
