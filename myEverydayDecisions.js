"use strict";
var infoList = {amountBefore: 0, amountDeducted: 0, availableBalance: 0};
console.log(infoList.amountDeducted)
var tbleBody = document.querySelector(".tableBody");
var rechargeAmountDeducted = document.querySelector("#anotherAmount");
var rechargeAmountBefore = document.querySelector("#rechargingAmount");
var theCheckBtn = document.querySelector(".checkBtn");
var addingAmount = document.querySelector("#ricBtn");
var clearBtn = document.querySelector("#resetBtn");

var template = document.querySelector(".monthlyFees").innerHTML;
console.log(template)
var theTemplate = Handlebars.compile(template);


var storedInfoList = localStorage.getItem('infoList');
if(storedInfoList){
    infoList = JSON.parse(storedInfoList);
    var results = theTemplate({infoList : infoList});
    tbleBody.innerHTML+= results;

}



function transportFees(){
    "use strict";
    
    var dailyAmount = Number(document.querySelector(".dailyAmount").value);
    
        infoList.amountBefore -= dailyAmount;
//    infoList.amountBefore = infoList.amountDeducted + infoList.availableBalance;
        infoList.amountDeducted = dailyAmount;
        infoList.availableBalance = infoList.amountBefore - infoList.amountDeducted;

    
    var dataToStore = JSON.stringify(infoList);
    console.log(infoList);
    console.log(dataToStore);

        localStorage.setItem('infoList', dataToStore);
    
var results = theTemplate({infoList : infoList});
    tbleBody.innerHTML+= results;
}
theCheckBtn.addEventListener('click', transportFees)
    



function rechargeFees(){
    
    var updateFees = document.querySelector("#rechargingAmount");
    var amountAdding = [];
        console.log(dataToStore);
//        infoList.amountBefore += parseInt(rechargeAmountBefore.value); 
        infoList.availableBalance = infoList.amountBefore - infoList.amountDeducted;
    
    
        createProperty('amountBefore', parseInt(updateFees.value));
    function createProperty(propertyName, propertyValue){
        amountAdding[propertyName] = propertyValue;
    }
    
    infoList.amountBefore = infoList.amountBefore + amountAdding.amountBefore;
        infoList.availableBalance += infoList.amountBefore;

        var dataToStore = JSON.stringify(infoList);
        console.log(dataToStore);
    
        localStorage.setItem('infoList', dataToStore);
        
        rechargeAmountBefore.value ="";
    
}
addingAmount.addEventListener('click', rechargeFees);



function clearData(){
localStorage.infoList = "";
   tbleBody.innerHTML =  theTemplate({infoList : infoList});
}

clearBtn.addEventListener('click', clearData);


function openNav() {
    document.getElementById("myNav").style.height = "100%";
}

function closeNav() {
    document.getElementById("myNav").style.height = "0%";
}
