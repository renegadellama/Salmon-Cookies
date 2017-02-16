'use strict';

function CookieStore(idTag, storeName, minHourCustomers, maxHourCustomers, avgCookiesPerCustomer){
  this.idTag = idTag;
  this.storeName = storeName;
  this.minHourCustomers = minHourCustomers;
  this.maxHourCustomers = maxHourCustomers;
  this.avgCookiesPerCustomer = avgCookiesPerCustomer;
  this.hourlyCookies = [];
  this.totalSales = 0;
};


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

var pikePlace = new CookieStore('pike', 'Pike Place', 23, 65, 6.3);
var seaTac = new CookieStore('seatac', 'SeaTac', 3, 24, 1.2);
var seaCenter = new CookieStore('seacent', 'Seattle Center', 11, 38, 3.7);
var capHill = new CookieStore('caphill', 'Capitol Hill', 20, 38, 2.8);
var alKai = new CookieStore('alkai', 'Alkai', 2, 16, 4.6);
var storeArray = [pikePlace, seaTac, seaCenter, capHill, alKai];
var storeTimes = ['Location', '6:00am', '7:00am', '8:00am', '9:00am', '10:00am', '11:00am', '12:00pm', '1:00pm', '2:00pm', '3:00pm', '4:00pm', '5:00pm', '6:00pm', '7:00pm', '8:00pm', 'Total'];

function runAllStoreData() {
  for (var i = 0; i < storeArray.length; i++) {
    storeArray[i].avgSales();
    storeArray[i].sumSales();
  }
};

function runStorHourTotals(){
  var total = 0
  for (var i = 0; i < storeTimes.length - 1; i++) {
    for (var j = 0; j < storeArray.length; j++) {
      console.log(storeArray[j]);
      // total += storeArray[j] 

    }
  }
}

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
};
