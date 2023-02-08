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

// function getLength() {
//   var length = prompt("Input password length between 8 and 128 characters");

//   if (isNaN(length)) {
//     alert("Input must be a valid number");
//   } else if (length < 8 || length > 128) {
//     alert("Input must be a valid number");    
//   }
// }


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

function generatePassword() {
  
  var length = prompt("Input password length between 8 and 128 characters");
  var specChar = false;
  var numChar = false;
  var lowCase = false;
  var upCase = false;
  var finalPassword = [];

  if (isNaN(length)) {
    alert("Input must be provided as a number");
    //find a way to have this line redirect the user back up to line 28
    generatePassword();
  } else if (length < 8 || length > 128) {
    alert("Input must be a valid number");    
    generatePassword();
    //find a way to have this line redirect the user back up to line 28
  } else {
    specChar = confirm("Click OK to confirm including special characters.");
    numChar = confirm("Click OK to confirm including numeric characters.");
    lowCase = confirm("Click OK to confirm including lowercase characters.");
    upCase = confirm("Click OK to confirm including uppercase characters.");
    
    if (specChar === false && numChar === false && lowCase === false && upCase === false) {
      alert("Must choose one character type");
      //I could possibly user helper functions in order to split these bit and allow this alert to redirect to the first specChar confirm
    } else {
      var characterArray = charArr(specChar, numChar, lowCase, upCase);
      console.log(characterArray);
      for (i = 0; i < length; i++) {
        var currentNum = Math.floor(Math.random() * (characterArray.length));
        finalPassword[i] = String.fromCharCode(characterArray[currentNum]);
      }
      console.log(finalPassword);
      finalPassword = finalPassword.join("")


    } 
    return finalPassword;
  }

 

  
  
  
  
  
  

}