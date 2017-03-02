var userInput = document.getElementById("textInput");
var button = document.getElementById("validate"),
//console.log("userInput", userInput);

//var button = document.getElementById('validate');


function reversal(array){
	var reverseInput = array.split('').reverse().join('');
	return reverseInput;
}
console.log(reverseInput)

function alphabits(array) {
	var string = array.split('').sort().join('');
	return string;
}

// function palindrome() {

// }

// var testString = "";
// reversal(testString);
// alphabits(testString);
// palindrome(testString);
button.addEventListener("click", reversal); //tell me what click event does after comma
