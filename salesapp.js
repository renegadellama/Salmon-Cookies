'use strict';

//-------------------------CONSTRUCTOR OBJECT-------------------
function CookieStore(storeName, minHourCustomers, maxHourCustomers, avgCookiesPerCustomer){
  this.storeName = storeName;
  this.minHourCustomers = minHourCustomers;
  this.maxHourCustomers = maxHourCustomers;
  this.avgCookiesPerCustomer = avgCookiesPerCustomer;
  this.hourlyCookies = [];
  this.totalSales = 0;
};
//-------------------------------FORM----------------------------
var storeFormEl = document.getElementById('new-store-form');
var formStore;
storeFormEl.addEventListener('submit', handleSubmit, false);
var formStore;
function handleSubmit(event){
    // var formStore = new CookieStore(formNewStoreName, formMinCustomers, formMaxCustomers, formAvgCookies);
  event.preventDefault();
  event.stopPropagation(); //stops all bubbling/capturing
  var formNewStoreName = event.target.cookieStoreName.value;
  var formMinCustomers = parseInt(event.target.minCust.value);
  var formMaxCustomers = parseInt(event.target.maxCust.value);
  var formAvgCookies = parseInt(event.target.avgCust.value);

   //VERY IMPORTANT! This function pulls the data in the selected field.
  //event = whole element, target = storeFormEl, cookieStoreName = the specific input node, value = input inside of text field.
  // console.log(formNewStoreName, formMinCustomers, formMaxCustomers, formAvgCookies);
  formStore = new CookieStore(formNewStoreName, formMinCustomers, formMaxCustomers, formAvgCookies);
  console.log(formStore);
  console.log('User pressed submit button on form');



//-------------------------------METHODS---------------------------------
CookieStore.prototype.getAvgCookieCount = function() {
  return Math.floor(Math.random() * (this.maxHourCustomers + 1 - this.minHourCustomers) + this.minHourCustomers);
};

CookieStore.prototype.avgSales = function(){
  for(var i = 0; i < 15; i++){
    this.hourlyCookies.push(Math.floor(this.getAvgCookieCount() * this.avgCookiesPerCustomer));
  }
  return this.hourlyCookies;
};

CookieStore.prototype.sumSales = function(){
  var total = 0;
  for ( var i = 0; i < this.hourlyCookies.length; i++ ){
    total += this.hourlyCookies[i];
  }
  this.totalSales = total;
  return total;
};

CookieStore.prototype.populateTable = function() {
  var rowEl = document.createElement('tr');
  var nameEl = document.createElement('th');
  nameEl.textContent = this.storeName;
  rowEl.appendChild(nameEl);
  for( var i = 0; i < this.hourlyCookies.length; i++){
    var fieldEl = document.createElement('td');
    fieldEl.textContent = this.hourlyCookies[i];
    rowEl.appendChild(fieldEl);
  }
  var fieldTotal = document.createElement('td');
  fieldTotal.textContent = this.totalSales;
  rowEl.appendChild(fieldTotal);
  tableEl.appendChild(rowEl);
};
//-----------------------------------VARIABLES----------------------------
var pikePlace = new CookieStore('Pike Place', 23, 65, 6.3);
var seaTac = new CookieStore('SeaTac', 3, 24, 1.2);
var seaCenter = new CookieStore('Seattle Center', 11, 38, 3.7);
var capHill = new CookieStore('Capitol Hill', 20, 38, 2.8);
var alKai = new CookieStore('Alkai', 2, 16, 4.6);

var storeArray = [pikePlace, seaTac, seaCenter, capHill, alKai, formStore];

var storeTimes = ['Location', '6:00am', '7:00am', '8:00am', '9:00am', '10:00am', '11:00am', '12:00pm', '1:00pm', '2:00pm', '3:00pm', '4:00pm', '5:00pm', '6:00pm', '7:00pm', '8:00pm', 'Total'];

//-----------------------------FUNCTIONS-----------------------------------

function runAllStoreData() {
  for (var i = 0; i < storeArray.length; i++) {
    storeArray[i].avgSales();
    storeArray[i].sumSales();
  }
};

var tableEl = document.createElement('table');

var sectionEl = document.getElementById('cookie-table');
sectionEl.appendChild(tableEl);

var runTableTimes = function(){
  var tableTimes = document.createElement('tr');
  for( var i = 0; i < storeTimes.length; i++){
    var fieldEl = document.createElement('td');
    fieldEl.textContent = storeTimes[i];
    tableTimes.appendChild(fieldEl);
  }

  tableEl.appendChild(tableTimes);
};

runTableTimes();
runAllStoreData();

var footerEl = document.createElement('tr');
tableEl.appendChild(footerEl);

for(var i = 0; i < storeArray.length; i++){
  storeArray[i].populateTable();
}
};
