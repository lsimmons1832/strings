# NSS String Exercise

## Project Description

[Project Specifications](https://github.com/nashville-software-school/front-end-milestones/blob/master/3-single-page-applications/exercises/SP_JS_ARRAYS_STRING_MANIPULATION.md)

- Copy the code below into the JavaScript file
- In your HTML, create an text input and a button.
	- The text input should only accept letters. No numbers.
- Implement the logic in the reversal function that reverses the order of the characters in the string, and outputs the result in the DOM, below the text input.
- Implement the logic in the alphabits function that return the characters in alphabetical order, and outputs the result in the DOM, below the text input.
- Implement the logic in the palindrome function that determine whether the string is a palindrome. If it is, display the text "Your string is a palidrome" in the DOM, below the text input.
- When the user presses the enter key in the text input, or clicks the button, set the value of the testString variable (see below) to the value of the input.
- The output of each of the functions should immediately appear as well.

```
function reversal() {

}

function alphabits() {

}

function palindrome() {

}

var testString = "";
reversal(testString);
alphabits(testString);
palindrome(testString);
```

## Technologies

- HTML5
- JavaScript


### How to run (Node must be installed on your machine):

git clone git@github.com:lsimmons1832/strings.git
cd strings
npm install http-server -g
http-server -p 8080