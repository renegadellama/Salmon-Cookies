'use strict';

//price arrays
var storeHours = ['6AM', '7AM', '8AM', '9AM', '10AM', '11AM', '12PM', '1PM', '2PM', '3PM', '4PM', '5PM', '6PM', '7PM', '8PM'];
var arrayPike = [];
var arraySeatac = [];
var arraySeattleCntr = [];
var arrayCapHill = [];
var arrayAlki = [];

//Store Objects
//PIKE OBJECT
var storeFirstPike = {
  minHourCustomers:23,
  maxHourCustomers:65,
  avgCookiesPerCustomer:6.3,
  avgCustomers: function(){
    return Math.floor(Math.random() * (this.maxHourCustomers + 1 - this.minHourCustomers) + this.minHourCustomers);
  },
  avgSales: function(){
    for(var i = 0; i < 15; i++){
      arrayPike.push(Math.floor(this.avgCustomers() * this.avgCookiesPerCustomer));
    }
    return arrayPike;
  }
};

//SEATAC object

var storeSeatac = {
  minHourCustomers:3,
  maxHourCustomers:24,
  avgCookiesPerCustomer:1.2,
  avgCustomers: function(){
    return Math.floor(Math.random() * (this.maxHourCustomers + 1 - this.minHourCustomers) + this.minHourCustomers);
  },
  avgSales: function(){
    for(var i = 0; i < 15; i++){
      arraySeatac.push(Math.floor(this.avgCustomers() * this.avgCookiesPerCustomer));
    }
    return arraySeatac;
  }
};

//SEATTLE CENTER

var storeSeattleCntr = {
  minHourCustomers: 11,
  maxHourCustomers: 38,
  avgCookiesPerCustomer:3.7,
  avgCustomers: function(){
    return Math.floor(Math.random() * (this.maxHourCustomers + 1 - this.minHourCustomers) + this.minHourCustomers);
  },
  avgSales: function(){
    for(var i = 0; i < 15; i++){
      arraySeattleCntr.push(Math.floor(this.avgCustomers() * this.avgCookiesPerCustomer));
    }
    return arraySeattleCntr;
  }
};

//CAPITOL HILL object

var storeCapHill = {
  minHourCustomers:20,
  maxHourCustomers:38,
  avgCookiesPerCustomer:2.8,
  avgCustomers: function(){
    return Math.floor(Math.random() * (this.maxHourCustomers + 1 - this.minHourCustomers) + this.minHourCustomers);
  },
  avgSales: function(){
    for(var i = 0; i < 15; i++){
      arraySeattleCntr.push(Math.floor(this.avgCustomers() * this.avgCookiesPerCustomer));
    }
    return arrayCapHill;
  }
};

//ALKI object

var storeAlki = {
  minHourCustomers: 2,
  maxHourCustomers: 16,
  avgCookiesPerCustomer: 4.6,
  avgCustomers: function(){
    return Math.floor(Math.random() * (this.maxHourCustomers + 1 - this.minHourCustomers) + this.minHourCustomers);
  },
  avgSales: function(){
    for(var i = 0; i < 15; i++){
      arrayAlki.push(Math.floor(this.avgCustomers() * this.avgCookiesPerCustomer));
    }
    return storeAlki;
  }
};
//Pike
var displayPike = function () {
  var list = document.getElementById('pike');
  for(var i = 0; i < arrayPike.length; i++) {
    var item = document.createElement('li');
    item.textContent = storeHours[i] + ': ' + arrayPike[i] + ' cookies.';
    list.appendChild(item);
  }
  return list;
};
storeFirstPike.avgSales();
displayPike();

//Seatac

var displaySeatac = function () {
  var list = document.getElementById('seatac');
  for(var i = 0; i < arraySeatac.length; i++) {
    var item = document.createElement('li');
    item.textContent = storeHours[i] + ': ' + arraySeatac[i] + ' cookies.';
    list.appendChild(item);
  }
  return list;
};
storeSeatac.avgSales();
displaySeatac();

//SEATTLE CENTER

var displaySeaCenter = function () {
  var list = document.getElementById('seacenter');
  for(var i = 0; i < arraySeattleCntr.length; i++) {
    var item = document.createElement('li');
    item.textContent = storeHours[i] + ': ' + arraySeattleCntr[i] + ' cookies.';
    list.appendChild(item);
  }
  return list;
};
storeSeattleCntr.avgSales();
displaySeaCenter();

//CAPITOL HILL

var displayCapHill = function () {
  var list = document.getElementById('caphill');
  for(var i = 0; i < arrayCapHill.length; i++) {
    var item = document.createElement('li');
    item.textContent = storeHours[i] + ': ' + arrayCapHill[i] + ' cookies.';
    list.appendChild(item);
  }
  return list;
};
storeCapHill.avgSales();
displayCapHill();

//Alki

var displayAlki = function () {
  var list = document.getElementById('alkai');
  for(var i = 0; i < arrayAlki.length; i++) {
    var item = document.createElement('li');
    item.textContent = storeHours[i] + ': ' + arrayAlki[i] + ' cookies.';
    list.appendChild(item);
  }
  return list;
};
storeAlki.avgSales();
displayAlki();
