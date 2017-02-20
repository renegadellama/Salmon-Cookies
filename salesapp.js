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

storeFormEl.addEventListener('submit', handleSubmit);
function handleSubmit(event){
    // var formStore = new CookieStore(formNewStoreName, formMinCustomers, formMaxCustomers, formAvgCookies);
  event.preventDefault();
  event.stopPropagation(); //stops all bubbling/capturing
  var formNewStoreName = event.target.cookieStoreName.value;
  var formMinCustomers = parseInt(event.target.minCust.value);
  var formMaxCustomers = parseInt(event.target.maxCust.value);
  var formAvgCookies = parseFloat(event.target.avgCust.value);

   //VERY IMPORTANT! This function pulls the data in the selected field.
  //event = whole element, target = storeFormEl, cookieStoreName = the specific input node, value = input inside of text field.
  // console.log(formNewStoreName, formMinCustomers, formMaxCustomers, formAvgCookies);
  var formStore = new CookieStore(formNewStoreName, formMinCustomers, formMaxCustomers, formAvgCookies);
  console.log(formStore);
  console.log('User pressed submit button on form');
  console.log(storeArray);
  formStoreArray.splice(formStore, 5);
  formStore.getAvgCookieCount();
  formStore.avgSales();
  formStore.sumSales();
  formStore.populateTable();

};

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

var storeArray = [pikePlace, seaTac, seaCenter, capHill, alKai];
var formStoreArray = [];
var hourlyTotalsStorage = [];
var allTotal = 0;

var storeTimes = ['Location', '6:00AM', '7:00AM', '8:00AM', '9:00AM', '10:00AM', '11:00AM', '12:00PM', '1:00PM', '2:00PM', '3:00PM', '4:00PM', '5:00PM', '6:00PM', '7:00PM', '8:00PM', 'Total'];

//-----------------------------FUNCTIONS-----------------------------------

function runAllStoreData() {
  for (var i = 0; i < storeArray.length; i++) {
    storeArray[i].avgSales();
    storeArray[i].sumSales();
  }
};

function runStoreHourTotals(){
  var total = 0;
  for (var i = 0; i < storeTimes.length - 2; i++) {
    var hourlyTotal = 0;
    for (var j = 0; j < storeArray.length; j++) {
      console.log(storeArray[j].hourlyCookies[i]);
      total += storeArray[j].hourlyCookies[i];
      hourlyTotal += storeArray[j].hourlyCookies[i];

    }
    hourlyTotalsStorage.push(hourlyTotal);
  }
  console.log('TOTAL:', total);
  console.log('HourlyTotal', hourlyTotalsStorage);
}

var sumEverything = function(){
  var total = 0;
  for ( var i = 0; i < hourlyTotalsStorage.length; i++ ){
    total += hourlyTotalsStorage[i];
  }
  // console.log(total);
  allTotal = total;
  console.log(allTotal);
  // this.totalSales = total;
  return total;
};
//--------------------TABLE---------------------------------------------------
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
  function runAllStoreData() {
    for (var i = 0; i < storeArray.length; i++) {
      storeArray[i].avgSales();
      storeArray[i].sumSales();
    }
  };
};



var runTimeTotals = function() {
  var timeTotals = document.createElement('tfoot');
  tableEl.appendChild(timeTotals);
  var footTitle = document.createElement('th');
  footTitle.textContent = 'Totals';
  timeTotals.appendChild(footTitle);
  for (var i = 0; i < hourlyTotalsStorage.length + 1; i++) {
    var fieldEl = document.createElement('td');
    fieldEl.textContent = hourlyTotalsStorage[i];
    timeTotals.appendChild(fieldEl);
  }
  timeTotals.appendChild(fieldEl);
  fieldEl.textContent = allTotal;

};

//-----------------------------CALL FUNCTIONS--------------------------------------
runTableTimes();
runAllStoreData();
runStoreHourTotals();
sumEverything();
runTimeTotals();


for(var i = 0; i < storeArray.length; i++){
  storeArray[i].populateTable();
};
