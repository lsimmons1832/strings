var userInput = document.getElementById("textInput");
var button = document.getElementById("validate"),
//console.log("userInput", userInput);

//var button = document.getElementById('validate');


function reversal(array){
	var reverseInput = array.split('').reverse().join('');
	return reverseInput;
}
console.log(reverseInput)
button.addEventListener("click", reversal); //tell me what click event does after comma




// function alphabits() {

// }

// function palindrome() {

// }

// var testString = "";
// reversal(testString);
// alphabits(testString);
// palindrome(testString);
