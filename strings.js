var userInput = document.getElementById('textInput').value;
//console.log("userInput", userInput);

// var button = document.getElementById('validate');

// button.addEventListener("click", reversal); //tell me what click event does after comma

// function reversal(array) {
// 	getInput = document.getElementById('textInput').value;
// 	push(array[i].split("").reverse().join(""));
// }
function reversal(array){
	var reverseInput = [];//userInput.split (" ");;
	for (var i = 0; i < array.length; i++) {
		reverseInput.push(array[i].split("").reverse().join(""));
	}
	console.log(reverseInput);
}

reversal(userInput);





// function alphabits() {

// }

// function palindrome() {

// }

// var testString = "";
// reversal(testString);
// alphabits(testString);
// palindrome(testString);