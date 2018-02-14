"use strict";
const PROMPT = require('readline-sync');

//Integer
let policyNumber, birthday, birthMonth, birthYear, premiumDays, premiumMonths, premiumYears, accidentNum, age;
//String
let lastName, firstName;
//Constants
let basePrice = 100;

main();
function main(){
    policyNum();
    lastNames();
    firstNames();
    birthMonths();
    birthDays();
    birthYears();
    premiumDay();
    premiumMonth();
    premiumYear();
    driverAccident();
    customerAgeCalc();
    calcTotalPremium();
}

function policyNum(){
    policyNumber = Number(PROMPT.question("\nWhat's your policy number?"));
    if (policyNum < 0){
        console.log("\nHow can you have a negative polcy number? Try again");
        return policyNum();
    }
}

function lastNames(){
    lastName = PROMPT.question("\nWhat's your last name?");
}

function firstNames(){
    firstName = PROMPT.question("\nWhat's your first name?");
}

//birthday///////////////////////////////////////////////////////////////////////
function birthMonths(){
    birthMonth = Number(PROMPT.question("\nWhen's your month of birth? (The number please)"));
    if (birthday > 12 || birthday < 1){
        console.log("There's not that many months in existence, try again");
        return birthMonths();
    }
}

function birthDays(){
    birthday = Number(PROMPT.question("\nWhen's your day of birth?"));
    if (birthday > 31 || birthday < 1){
        console.log("There's not that many days in a month, try again");
        return birthDays();
    }
}

function birthYears(){
    birthYear = Number(PROMPT.question("\nWhen's your year of birth?"));
    if (birthYear > 2000 || birthYear < 1950){
        console.log("Try again");
        return birthYears();
    }
}

//premium date///////////////////////////////////////////////////////////////////////
function premiumDay(){
    premiumDays = Number(PROMPT.question("\nWhat's the day of your premium?"));
    if (premiumDays > 31 || premiumDays < 1){
        console.log("There's not that many days in a month, try again");
        return premiumDay();
    }
}

function premiumMonth(){
    premiumMonths = Number(PROMPT.question("\nWhat's the month of your premium? (The number please)"));
    if (premiumMonths > 12 || premiumMonths < 1){
        console.log("There's not that many months in existence, try again");
        return premiumMonth();
    }
    else if (premiumDay == 20 && premiumMonth == 4){
        console.log("\n420 man!");
    }
}

function premiumYear(){
    premiumYears = Number(PROMPT.question("\nWhat's the year of your premium?"));
    if (premiumYears > 2018){
        console.log("\nYou can't go in the future (yet), try again");
        return premiumYear();
    }
}
//accident
function driverAccident(){
    accidentNum = Number(PROMPT.question("\nHow many accidents have you been at fault in the past 3 years?"));
    if(accidentNum < 0){
        console.log("\nYou can't have negative accidents, you'd have to be a black hole to do that...");
        return driverAccident();
    }
}
//age
function customerAgeCalc(){
    age = Number(PROMPT.question("\nHow old are you?"));
    if (age < 15){
        console.log ("\nYou can't be unborn, try again");
        return customerAgeCalc();
    }
    if (age > 15 && age < 30){
        basePrice + 20;
    }
    if (age <= 30 && age < 45){
        basePrice + 10;
    }
    if (age >= 60){
        basePrice + 30;
    }
}
//total
function calcTotalPremium(){
    console.log("\nHello " + firstName + " " + lastName + ", your monthly premium is: $" + basePrice + accidentNum * 50);
}