// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


function charArr(spec, num, low, up) {
  //creates an array of all the special character values
  var specArray = [];
  for (i = 0; i < 16; i++) {
    specArray[i] = i + 32;
  }
  for (i = 0; i < 7; i++) {
    specArray[i + 16] = i + 58;
  }
  for (i = 0; i < 6; i++) {
    specArray[i + 23] = i + 91;
  }

  // creates an array of all the ASCII values for numbers
  var numArray = [];
  for (i = 0; i < 10; i++) {
    numArray[i] = i + 48;
  }

  // creates an array of all the ASCII values for lowercase letters

  let lowArray = [];
  for (i = 0; i < 26; i++) {
    lowArray[i] = i + 97;
  }

  // creates an array of all the ASCII values for uppercase letters
  var upArray = [];
  for (i = 0; i < 26; i++) {
    upArray[i] = i + 65;
  }

  var charArray = [];
  // concatenates the new arrays to what will be returned based on input
  if (spec === true) {
    charArray = charArray.concat(specArray);
  } 
  if (num === true) {
    charArray = charArray.concat(numArray);
  }
  if (low === true) {
    charArray = charArray.concat(lowArray);
  }
  if (up === true) {
    charArray = charArray.concat(upArray);
  }
  return charArray;
}

function characterTypes(inputLength) {
  var finalPassword = [];

  var specChar = confirm("Click OK to confirm including special characters.");
  var numChar = confirm("Click OK to confirm including numeric characters.");
  var lowCase = confirm("Click OK to confirm including lowercase characters.");
  var upCase = confirm("Click OK to confirm including uppercase characters.");

  if (specChar === false && numChar === false && lowCase === false && upCase === false) {
    alert("You must choose at least one character type");
    finalPassword = characterTypes(inputLength);
  } else {
    var characterArray = charArr(specChar, numChar, lowCase, upCase);
    for (i = 0; i < inputLength; i++) {
      var currentNum = Math.floor(Math.random() * (characterArray.length));
      finalPassword[i] = String.fromCharCode(characterArray[currentNum]);
    }
    finalPassword = finalPassword.join("");
  } 

  return finalPassword;
}

function generatePassword() {
  
  var length = prompt("How many characters would you like your password to contain?\nPlease choose a length between 8 and 128");

  if (length === null) {
    return "";
  } else if (isNaN(length)) {
    alert("Input must be provided as a number");
    return generatePassword(); 
  } else if (length < 8 || length > 128) {
    alert("Input must be a valid number");    
    return generatePassword(); 
  } else {
    return characterTypes(length);
  }
}