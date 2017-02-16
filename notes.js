'use strict';

//Look at events in book
var storeFormEl = document.getElementById('new-store-form');

storeFormEl.addEventListener('submit', handleSubmit, false); //when submit happens, fire off handleSubmit. 'False' forces browsers to swithc to event bubbling.

function handleSubmit(event){ //when function runs, we get back event
  event.preventDefault(); //stops page from reloading and submitting info back to server when submit pressed
  event.stopPropagation(); //stops all bubbling/capturing
  var newStoreName = event.target.cookieStoreName.value;
  var minCustomers = parseInt(event.target.minCust.value);
  var maxCustomers = parseInt(event.target.maxCust.value);
  var avgCustomers = parseInt(event.target.avgCust.value);
   //VERY IMPORTANT! This function pulls the data in the selected field.
  //event = whole element, target = storeFormEl, cookieStoreName = the specific input node, value = input inside of text field.
  console.log(newStoreName, minCustomers, maxCustomers, avgCustomers);
  var store = new CookieStore(name, minCustomers, maxCustomers, avgCustomers);
  console.log('User pressed submit button on form');
}


//event bubbleing:pg260, without stopping bubbling, the code will go from the innermost body to the outermost looking for events.  Events on the outer sections of the body take priority.  Only occurs in parent child relationship.
