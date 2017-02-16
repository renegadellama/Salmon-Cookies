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

for(var i = 0; i < storeArray.length; i++){
  storeArray[i].populateTable();
};

// var tableEL = document.createElement('table');
// //
// // for(var i = 0; i < storeArray.length; i++){
// //   var currentStore = storeArray[i];
// //
//   var rowEl = document.createElement('tr');
//   var tableEl = appendChild(rowEl);
//
//   var nameEl = document.createElement('th');
//   nameEl.textContent = currentStore.name;
//   //<th>currentStore.name</th>
//   rowEl.appendChild(nameEl);
//
//   var minCustEl = document.createElement('td');
//   minCustEl.textContent = currentStore.minHourCustomers;
//   rowEl.appendChild(minCustEl);
//
//   var maxCustEl = document.createElement('td');
//   maxCustEl.textContent = currentStore.maxHourCustomers;
//   rowEl.appendChild(maxCustEl);
//
//   var avgCookiesEl = document.createElement('td');
//   avgCookiesEl.textContent = currentStore.avgCookies;
//   rowEl.appendChild(avgCookiesEl);
//   tableEl.appendChild(rowEl);
// };
//
// document.body.appendChild(tableEl);

//---------------------------------------------------------------------------
// //object constructor
//
// function CookieStore(storeName, minHourCustomers, maxHourCustomers, avgCookiesPerCustomer, hourlyCount){
//   this.storeName = storeName;
//   this.minHourCustomers = minHourCustomers;
//   this.maxHourCustomers = maxHourCustomers;
//   this.avgCookiesPerCustomer = avgCookiesPerCustomer;
//   this.hourlyCount = function(){
//     return Math.floor(Math.random() * (this.maxHourCustomers + 1 - this.minHourCustomers) + this.minHourCustomers);
//   },
//   avgSales = function(){
//     for(var i = 0; i < 15; i++){
//       hourlyCount.push(Math.floor(this.avgCustomers() * this.avgCookiesPerCustomer));
//   }
//   return hourlyCount;
//   }
// };
//
// var pikePlace = new CookieStore('Pike Place', 23, 65, 6.3, []);
// var seaTac = new CookieStore('SeaTac', 3, 24, 1.2, []);
// var seacCenter = new CookieStore('Seattle Center', 11, 38, 3.7, []);
// var capHill = new CookieStore('Capitol Hill', 20, 38, 2.8, []);
// // var alKai = new CookieStore('Alkai', 2, 16, 4.6, []);
// //
// CookieStore.prototype.getAvgCookieCount  = function() {
//   return Math.floor(Math.random() * (this.maxHourCustomers + 1 - this.minHourCustomers) + this.minHourCustomers);}
//
//
// // }
//   for(var i = 0; i < 15; i++){
//     this.hourlyCount.push(Math.floor(this.avgCustomers() * this.avgCookiesPerCustomer));
//   }
// };
// pikePlace.getAvgCookieCount();
// // //table
// var tableEL = document.createElement('table');
//
// var stores = [pikePlace, seaTac, seacCenter, capHill, alKai];
// for(var i = 0; i < stores.length; i++){
//   var currentStore = stores[i];
//
//   var rowEl = document.createElement('tr');
//   var tableEl = appendChild(rowEl);
//
//   var nameEl = document.createElement('th');
//   nameEl.textContent = currentStore.name;
//   //<th>currentStore.name</th>
//   rowEl.appendChild(nameEl);
//
//   var minCustEl = document.createElement('td');
//   minCustEl.textContent = currentStore.minHourCustomers;
//   rowEl.appendChild(minCustEl);
//
//   var maxCustEl = document.createElement('td');
//   maxCustEl.textContent = currentStore.maxHourCustomers;
//   rowEl.appendChild(maxCustEl);
//
//   var avgCookiesEl = document.createElement('td');
//   avgCookiesEl.textContent = currentStore.avgCookies;
//   rowEl.appendChild(avgCookiesEl);
//   tableEl.appendChild(rowEl);
// };
//
// document.body.appendChild(tableEl);
// --------------------------------------literals--------------------------------
// //
// //price arrays
// // var storeHours = ['6AM', '7AM', '8AM', '9AM', '10AM', '11AM', '12PM', '1PM', '2PM', '3PM', '4PM', '5PM', '6PM', '7PM', '8PM'];
// // var arrayPike = [];
// // var arraySeatac = [];
// // var arraySeattleCntr = [];
// // var arrayCapHill = [];
// // var arrayAlki = [];
// // var result = 0;
// //
// // //Store Objects
// // //PIKE OBJECT
// // var storeFirstPike = {
// //   minHourCustomers:23,
// //   maxHourCustomers:65,
// //   avgCookiesPerCustomer:6.3,
// //   avgCustomers: function(){
// //     return Math.floor(Math.random() * (this.maxHourCustomers + 1 - this.minHourCustomers) + this.minHourCustomers);
// //   },
// //   avgSales: function(){
// //     for(var i = 0; i < 15; i++){
// //       arrayPike.push(Math.floor(this.avgCustomers() * this.avgCookiesPerCustomer));
// //     }
// //     return arrayPike;
// //   }
// // };
// //
// // //SEATAC object
// //
// // var storeSeatac = {
// //   minHourCustomers:3,
// //   maxHourCustomers:24,
// //   avgCookiesPerCustomer:1.2,
// //   avgCustomers: function(){
// //     return Math.floor(Math.random() * (this.maxHourCustomers + 1 - this.minHourCustomers) + this.minHourCustomers);
// //   },
// //   avgSales: function(){
// //     for(var i = 0; i < 15; i++){
// //       arraySeatac.push(Math.floor(this.avgCustomers() * this.avgCookiesPerCustomer));
// //     }
// //     return arraySeatac;
// //   }
// // };
// //
// // //SEATTLE CENTER
// //
// // var storeSeattleCntr = {
// //   minHourCustomers: 11,
// //   maxHourCustomers: 38,
// //   avgCookiesPerCustomer:3.7,
// //   avgCustomers: function(){
// //     return Math.floor(Math.random() * (this.maxHourCustomers + 1 - this.minHourCustomers) + this.minHourCustomers);
// //   },
// //   avgSales: function(){
// //     for(var i = 0; i < 15; i++){
// //       arraySeattleCntr.push(Math.floor(this.avgCustomers() * this.avgCookiesPerCustomer));
// //     }
// //     return arraySeattleCntr;
// //   }
// // };
// //
// // //CAPITOL HILL object
// //
// // var storeCapHill = {
// //   minHourCustomers:20,
// //   maxHourCustomers:38,
// //   avgCookiesPerCustomer:2.8,
// //   avgCustomers: function(){
// //     return Math.floor(Math.random() * (this.maxHourCustomers + 1 - this.minHourCustomers) + this.minHourCustomers);
// //   },
// //   avgSales: function(){
// //     for(var i = 0; i < 15; i++){
// //       arrayCapHill.push(Math.floor(this.avgCustomers() * this.avgCookiesPerCustomer));
// //     }
// //     return arrayCapHill;
// //   }
// // };
// //
// // //ALKI object
// //
// // var storeAlki = {
// //   minHourCustomers: 2,
// //   maxHourCustomers: 16,
// //   avgCookiesPerCustomer: 4.6,
// //   avgCustomers: function(){
// //     return Math.floor(Math.random() * (this.maxHourCustomers + 1 - this.minHourCustomers) + this.minHourCustomers);
// //   },
// //   avgSales: function(){
// //     for(var i = 0; i < 15; i++){
// //       arrayAlki.push(Math.floor(this.avgCustomers() * this.avgCookiesPerCustomer));
// //     }
// //     return storeAlki;
// //   }
// // };
// // //Pike
// // var displayPike = function () {
// //   var list = document.getElementById('pike');
// //   for(var i = 0; i < arrayPike.length; i++) {
// //     var item = document.createElement('li');
// //     item.textContent = storeHours[i] + ': ' + arrayPike[i] + ' cookies.';
// //     list.appendChild(item);
// //   }
// //   return list;
// // };
// //
// // var totalPike = function() {
// //   var list = document.getElementById('pike');
// //   var total = 0;
// //   for ( var i = 0; i < arrayPike.length; i++ ){
// //     total += arrayPike[i];
// //   }
// //   var item = document.createElement('li');
// //   item.textContent = 'Total: ' + total + ' cookies sold.';
// //   list.appendChild(item);
// //   return total;
// // };
// // storeFirstPike.avgSales();
// // displayPike();
// // totalPike();
// //
// // //---------------------------Seatac--------------------
// //
// // var displaySeatac = function () {
// //   var list = document.getElementById('seatac');
// //   for(var i = 0; i < arraySeatac.length; i++) {
// //     var item = document.createElement('li');
// //     item.textContent = storeHours[i] + ': ' + arraySeatac[i] + ' cookies.';
// //     list.appendChild(item);
// //   }
// //   return list;
// // };
// //
// // var totalSeaTac = function() {
// //   var list = document.getElementById('seatac');
  // var total = 0;
  // for ( var i = 0; i < arraySeatac.length; i++ ){
  //   total += arraySeatac[i];
  // }
// //   var item = document.createElement('li');
// //   item.textContent = 'Total: ' + total + ' cookies sold.';
// //   list.appendChild(item);
// //   return total;
// // };
// // storeSeatac.avgSales();
// // displaySeatac();
// // totalSeaTac();
// //
// // //--------------------------SEATTLE CENTER--------------------
// //
// // var displaySeaCenter = function () {
// //   var list = document.getElementById('seacenter');
// //   for(var i = 0; i < arraySeattleCntr.length; i++) {
// //     var item = document.createElement('li');
// //     item.textContent = storeHours[i] + ': ' + arraySeattleCntr[i] + ' cookies.';
// //     list.appendChild(item);
// //   }
// //   return list;
// // };
// //
// // var totalSeaCntr = function() {
// //   var list = document.getElementById('seacenter');
// //   var total = 0;
// //   for ( var i = 0; i < arraySeattleCntr.length; i++ ){
// //     total += arraySeattleCntr[i];
// //   }
// //   var item = document.createElement('li');
// //   item.textContent = 'Total: ' + total + ' cookies sold.';
// //   list.appendChild(item);
// //   return total;
// // };
// //
// // storeSeattleCntr.avgSales();
// // displaySeaCenter();
// // totalSeaCntr();
// //
// // //----------------------CAPITOL HILL-------------------------
// //
// // var displayCapHill = function () {
// //   var list = document.getElementById('caphill');
// //   for(var i = 0; i < arrayCapHill.length; i++) {
// //     var item = document.createElement('li');
// //     item.textContent = storeHours[i] + ': ' + arrayCapHill[i] + ' cookies.';
// //     list.appendChild(item);
// //   }
// //   return list;
// // };
// //
// // var totalCapHill = function() {
// //   var list = document.getElementById('caphill');
// //   var total = 0;
// //   for ( var i = 0; i < arrayCapHill.length; i++ ){
// //     total += arrayCapHill[i];
// //   }
// //   var item = document.createElement('li');
// //   item.textContent = 'Total: ' + total + ' cookies sold.';
// //   list.appendChild(item);
// //   return total;
// // };
// // storeCapHill.avgSales();
// // displayCapHill();
// // totalCapHill();
// //
// // //------------------Alki---------------
// //
// // var displayAlki = function () {
// //   var list = document.getElementById('alkai');
// //   for(var i = 0; i < arrayAlki.length; i++) {
// //     var item = document.createElement('li');
// //     item.textContent = storeHours[i] + ': ' + arrayAlki[i] + ' cookies.';
// //     list.appendChild(item);
// //   }
// //   return list;
// // };
// //
// // var totalAlki = function() {
// //   var list = document.getElementById('alkai');
// //   var total = 0;
// //   for ( var i = 0; i < arrayAlki.length; i++ ){
// //     total += arrayAlki[i];
// //   }
// //   var item = document.createElement('li');
// //   item.textContent = 'Total: ' + total + ' cookies sold.';
// //   list.appendChild(item);
// //   return total;
// // };
// //
// // storeAlki.avgSales();
// // displayAlki();
// // totalAlki();
// //
// //
// //
// //
// // ////constructor
// // // function CookieStore(storeName, minHourCustomers, maxHourCustomers, avgCookiesPerCustomer){
// // //   this.storeName = storeName;
// // //   this.minHourCustomers = minHourCustomers;
// // //   this.maxHourCustomers = maxHourCustomers;
// // //   this.avgCookiesPerCustomer = avgCookiesPerCustomer;
// // // }
// // //
// // // var pikePlace = new CookieStore('Pike Place', 23, 65, 6.3);
// // // var seaTac = new CookieStore('SeaTac', 3, 24, 1.2);
// // // var seacCenter = new CookieStore(11, 38, 3.7);
// // // var capHill = new CookieStore(20, 38, 2.8);
// // // var alKai = new CookieStore(2, 16, 4.6);
// // //
// // // CookieStore.prototype.getAvgCookieCount  = function() {
// // //   return Math.floor(Math.random() * (this.maxHourCustomers + 1 - this.minHourCustomers) + this.minHourCustomers);
// // // },
// // //  avgSales = function(){
// // //    for(var i = 0; i < 15; i++){
// // //      arrayPike.push(Math.floor(this.avgCustomers() * this.avgCookiesPerCustomer));
// // //    }
// // //    return arrayPike;
// // //  };
// // // pikePlace.getAvgCookieCount();
