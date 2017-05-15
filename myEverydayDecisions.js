"use strict";
var infoList = {amountBefore: 0, amountDeducted: 0, availableBalance: 0};
var tbleBody = document.querySelector(".tableBody");
var updateAmountBefore = document.querySelector(".rechargingAmount");
var updatesBtn = document.querySelector(".checkBtn");
var addingAmount = document.querySelector(".ricBtn");
var clearBtn = document.querySelector(".resetBtn");
var display = document.querySelector('.output');

var template = document.querySelector(".monthlyFees").innerHTML;
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


if(dailyAmount !==''){
  infoList.amountBefore = infoList.availableBalance;
  infoList.amountDeducted = dailyAmount;
  infoList.availableBalance = infoList.amountBefore - infoList.amountDeducted;
}
    if(infoList.availableBalance <100){
        window.alert('You are running out of money please recharge');
    }



    var dataToStore = JSON.stringify(infoList);


        localStorage.setItem('infoList', dataToStore);

var results = theTemplate({infoList : infoList});
    tbleBody.innerHTML+= results;
  }
updatesBtn.addEventListener('click', transportFees);




function rechargeFees(){

    var updateFees = document.querySelector(".rechargingAmount");
    var amountAdding = [];


        createProperty('amountBefore', parseInt(updateFees.value));
    function createProperty(propertyName, propertyValue){
        amountAdding[propertyName] = propertyValue;
    }

    infoList.amountBefore = infoList.amountBefore + amountAdding.amountBefore;
        infoList.availableBalance += infoList.amountBefore;

        if(updateAmountBefore.value >1000){
              display.innerHTML= ('Thats a lot of money for one month!!!');
        }
        var dataToStore = JSON.stringify(infoList);

        localStorage.setItem('infoList', dataToStore);

        updateAmountBefore.value ="";
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
