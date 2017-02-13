'use strict';

//Object literals

// var myUser = {
//   fullName: 'Isak Swearingen',
//   userName: 'renegadellama',
//   numberOfFollowers: 5
// };

//The above is an object literals. fullName = key, value = Isak Swearingen
//
// myUser.email = 'isakswearingen@gmail.com';

//This adds an additional property to the object

//To create an input for your object
var userFullName = prompt('Enter your name.');
var userEmail = prompt('Enter your email.');
var myUser = {
  fullName: userFullName,
  userName: userEmail,
  numberOfFollowers: 5,
  login: function(){
    console.log(userFullName + ' has now logged in!');
  },
};
console.log(myUser);
myUser.login();

var userElement = document.createElement('h4'); //step 1 create element/get access
// this creates an userElement = <h1></h1>

//step 2 = set any attributes you need
userElement.setAttribute('id', 'first-user-heading'); //this is a method on any html element node.
//now userElement = <h1 id='first-user-heading'></h1>
userElement.textContent = myUser.fullName;

//get access to existing element

var sectionElement = document.getElementById('main-content');

// sectionElement now represents entire section element.  <section is = "main-content"></section>
//can use getElementByClass to get a class, use id for a single element.

sectionElement.appendChild(userElement); //step 3, hand element to thte DOM
