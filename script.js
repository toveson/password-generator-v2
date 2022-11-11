// Assignment Code
// GIVEN I need a new, secure password
var generateBtn = document.querySelector("#generate")

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password")

  const passwordLength = prompt("How many characters do you want your password to be?")
  const lowercase = confirm("Do you want to include lowercase characters?")
  const uppercase = confirm("Do you want to include uppercase characters?")
  const numeric = confirm("Do you want to include numbers characters?")
  const specialCharacters = confirm("Do you want to include special characters characters?")

  passwordText.value = password

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword)
