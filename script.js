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

function convertRoman(roman) {
	var integer = "";
	var romanNumeral = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];
	var numbers = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
	for (var i = 0; i < romanNumeral.length; i++){
		while (roman >= romanNumeral[i]){
			integer = integer + numbers[i];
			roman = roman - romanNumeral[i];
			console.log(i)
		}
	}
	return integer;
	}
	


var inputNumberMessage;
var userInput;

inputNumberMessage = "Please input number to be converted to roman numeral:"
userInput = messagePrompt(inputNumberMessage);
console.log(convertRoman(userInput));


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