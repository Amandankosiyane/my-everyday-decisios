"use strict";
var rechargeAmountDeducted = document.querySelector("#anotherAmount");
var rechargeAmountBefore = document.querySelector("#rechargingAmount");
var infoList = {amountDeducted: 0, availableBalance: 0, amountBefore:0}; 

var userDisplay = document.querySelector("#display");

var template = document.querySelector(".monthlyFees").innerHTML;
var theTemplate = Handlebars.compile(template);

var deductAmount = document.querySelector("#checkBtn");
deductAmount.addEventListener('click', transportFees);
function transportFees(){
    "use strict";
    
    var dailyAmount = Number(document.querySelector(".dailyAmount").value);
    infoList.amountDeducted += dailyAmount;
    infoList.availableBalance = infoList.amountBefore - infoList.amountDeducted;
    
   
    //console.log(infoList)
    var results = theTemplate(
        infoList
    );

    userDisplay.innerHTML = results;
    
    }
   

var addingAmount = document.querySelector("#ricBtn");
addingAmount.addEventListener('click', rechargeFees);
function rechargeFees(){
    
        //infoList.amountDeducted += Number(rechargeAmountDeducted.value);
        //replace the values of objects and converting the number from string to interger
        infoList.amountBefore = parseInt(rechargeAmountBefore.value); 
        infoList.availableBalance = infoList.amountBefore - infoList.amountDeducted;
        rechargeAmountBefore.value ="";
    
        var results = theTemplate(
            infoList
        );

        userDisplay.innerHTML = results;
    
    
}


