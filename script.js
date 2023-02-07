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

function generatePassword() {
  
  var length = prompt("Input password length between 8 and 128 characters");
  var specChar = false;
  var numChar = false;
  var lowCase = false;
  var upCase = false;

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

    
  }

 

  
  
  
  
  
  

}