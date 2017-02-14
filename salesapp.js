'use strict';
var storeHours = ['6AM', '7AM', '8AM', '9AM', '10AM', '11AM', '12PM', '1PM', '2PM', '3PM', '4PM', '5PM', '6PM', '7PM', '8PM'];

//price arrays

var arrayPike = [];
var arraySeatac = [];
var arraySeattleCntr = [];
var arrayCapHill = [];
var arrayAlki = [];

//Store Objects

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
    return pikeStore;
  }
};

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
    return pikeStore;
  }
};

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
    return pikeStore;
  }
};

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
    return pikeStore;
  }
};

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
    return pikeStore;
  }
};

// var a = [];
// for(var i=0; i<15; i++){
//   a.push(Math.floor(Math.random() *  100));
// };
