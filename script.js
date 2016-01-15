"use strict"

function messagePrompt(message){
	var userInput = prompt(message);
	return userInput;
}

function convertNumber(num) {
	var roman = "";
	var romanNumeral = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];
	var numbers = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
	for (var i = 0; i < numbers.length; i++){
		while (num >= numbers[i]){
			roman = roman + romanNumeral[i];
			num = num - numbers[i];
			console.log(i)
		}
	}
	return roman;
	}

var inputNumberMessage;
var userInput;

inputNumberMessage = "Please input number to be converted to roman numeral:"
userInput = messagePrompt(inputNumberMessage);
console.log(convertNumber(userInput));


/*
function messagePrompt(message){
	var userInput = prompt(message);
	return userInput;
}

function checkPalindrome(str) {
	var copy = str.split('').reverse().join('');
	str = str.toLowerCase();
		
	for(var i = 0; i < str.length; i++){
		str=str.replace(' ','');
	}
	if (copy === str) {
		console.log("That's a Palindrome")
	}
	else {
		console.log("That's not a Palindrom")
	}
}

var inputDataMessage;
var userInput;

inputDataMessage = "Please input data:"
userInput = messagePrompt(inputDataMessage);
checkPalindrome(userInput);
*/


/*
function convertRoman(roman) {
	var M = parseInt("1000")
	var CM = parseInt("900")
	var D = parseInt("500")
	var CD = parseInt("400")
	var C = parseInt("100")
	var XC = parseInt("90")
	var L = parseInt("50")
	var XL = parseInt("40")
	var X = parseInt("10")
	var IX = parseInt("9")
	var V = parseInt("5")
	var iV = parseInt("4")
	var I = parseInt("1")
	
	
	
	
	roman = roman.toUpperCase().split("");
	var integer = "";
	var romanNumeral = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];
	var numbers = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
	for (var i = 0; i < romanNumeral.length; i++){
			while (roman >= romanNumeral[i]){
			integer = integer + numbers[i];
			roman = roman - romanNumeral[i];
			console.log(i);
		}
	}
	return integer;
	}*/