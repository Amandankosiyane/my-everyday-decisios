"use strict";
var infoList = [{amountDeducted: 0, availableBalance: 0, amountBefore:0}]; 

var rechargeAmountDeducted = document.querySelector("#anotherAmount");
var rechargeAmountBefore = document.querySelector("#rechargingAmount");
var userDisplay = document.querySelector("#display");
var template = document.querySelector(".monthlyFees").innerHTML;
var theTemplate = Handlebars.compile(template);


var storedInfoList = localStorage.getItem('infoList');
if(storedInfoList){
    infoList = JSON.parse(storedInfoList);
    var results = theTemplate(
        infoList
    );

    userDisplay.innerHTML += results;
}


var deductAmount = document.querySelector("#checkBtn");
deductAmount.addEventListener('click', transportFees);

function transportFees(){
    "use strict";
    
    var dailyAmount = Number(document.querySelector(".dailyAmount").value);
    infoList.amountDeducted += dailyAmount;
    infoList.availableBalance = infoList.amountBefore - infoList.amountDeducted;
    
    var dataToStore = JSON.stringify(infoList);
    console.log(dataToStore);

        localStorage.setItem('infoList', dataToStore);
    
    //console.log(infoList)
    var results = theTemplate(
        infoList
    );

    userDisplay.innerHTML = results;
    
    }
   

var addingAmount = document.querySelector("#ricBtn");
addingAmount.addEventListener('click', rechargeFees);

function rechargeFees(){
         var dailyAmount = Number(document.querySelector(".dailyAmount").value);
        //replace the values of objects and converting the number from string to interger
        var amountBefore = parseInt(rechargeAmountBefore.value); 
        var  availableBalance = infoList.amountBefore - infoList.amountDeducted;

        var amountAdding = {};
//    {amountDeducted: 0, availableBalance: 0, amountBefore:0}

        createProperty('amountDeducted', dailyAmount)
        createProperty('availableBalance', availableBalance)
        createProperty('amountBefore', amountBefore)
        
        function createProperty(propertyName,propertyValue){
            amountAdding [propertyName] = propertyValue;
        }
        infoList.push(amountAdding);

    
        var dataToStore = JSON.stringify(infoList);
        console.log(dataToStore);
    
        localStorage.setItem('infoList', dataToStore);
        
        rechargeAmountBefore.value ="";
    
        var results = theTemplate(
            infoList
        );

        userDisplay.innerHTML = results;
    
    
}



















//"use strict";
//var infoList = {amountDeducted: 0, availableBalance: 0, amountBefore:0}; 
//var rechargeAmountDeducted = document.querySelector("#anotherAmount");
//var rechargeAmountBefore = document.querySelector("#rechargingAmount");
//var userDisplay = document.querySelector("#display");
//var template = document.querySelector(".monthlyFees").innerHTML;
//var theTemplate = Handlebars.compile(template);
//
//
//var storedInfoList = localStorage.getItem('infoList');
//if(storedInfoList){
//    infoList = JSON.parse(storedInfoList);
//    var results = theTemplate(
//        infoList
//    );
//
//    userDisplay.innerHTML += results;
//}
//
//
//var deductAmount = document.querySelector("#checkBtn");
//deductAmount.addEventListener('click', transportFees);
//
//function transportFees(){
//    "use strict";
//    
//    var dailyAmount = Number(document.querySelector(".dailyAmount").value);
//    infoList.amountDeducted += dailyAmount;
//    infoList.availableBalance = infoList.amountBefore - infoList.amountDeducted;
//    
//    var dataToStore = JSON.stringify(infoList);
//    console.log(dataToStore);
//
//        localStorage.setItem('infoList', dataToStore);
//    
//    //console.log(infoList)
//    var results = theTemplate(
//        infoList
//    );
//
//    userDisplay.innerHTML += results;
//    
//    }
//   
//
//var addingAmount = document.querySelector("#ricBtn");
//addingAmount.addEventListener('click', rechargeFees);
//
//function rechargeFees(){
//    
//        //replace the values of objects and converting the number from string to interger
//        infoList.amountBefore = parseInt(rechargeAmountBefore.value); 
//        infoList.availableBalance = infoList.amountBefore - infoList.amountDeducted;
//        
////    var amountAdding = {};
////    function createProperty(propertyName,propertyValue){
////  amountAdding [propertyName] = propertyValue;
////}
////    infoList.push(amountAdding);
//    
//    
//        var dataToStore = JSON.stringify(infoList);
//        console.log(dataToStore);
//    
//        localStorage.setItem('infoList', dataToStore);
//        
//        rechargeAmountBefore.value ="";
//    
//        var results = theTemplate(
//            infoList
//        );
//
//        userDisplay.innerHTML += results;
//    
//    
//}
//
//
//
//
