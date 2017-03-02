var userInput = document.getElementById("textInput");
var button = document.getElementById("validate");
//console.log("userInput", userInput);

//var button = document.getElementById('validate');


function reversal(array){
	var reverseString = array.split('').reverse().join('');
	return reverseString;
console.log(reverseString);
}

function alphabits(array) {
	var alphabitsString = array.split('').sort().join('');
	return alphabitsString;
}

function palindrome(array) {
	var palindromeString = array.split('').reverse().join('');
	if (array === palindromeString) {
		return "Your string is a palindrome!";
	} else {
		return "It's not a palindrome"
	}
}

button.addEventListener("click", function(){
	var userInput = document.getElementById('textInput').value;
	var output = document.getElementById('output');

	var reverseInput = reversal(userInput);
	var alphabitsInput = alphabits(userInput);
	var palindromeInput = palindrome(userInput);

	if (userInput === '') {
		output.innerHTML = "Please enter text";
	} else {
		output.innerHTML = "Letters reversed: " + reverseInput + "Letters alphabetized: " + alphabitsInput  + palindromeInput;
	}
}); //tell me what click event does after comma
