const generateBtn = document.querySelector("#generate")

function writePassword() {
  const passwordText = document.querySelector("#password")
  const password = []
  const passwordLength = prompt("How many characters do you want your password to be?")
  
  if (passwordLength >= 8 && passwordLength <= 128) {
    const lowercase = confirm("Do you want to include lowercase characters?")
    const uppercase = confirm("Do you want to include uppercase characters?")
    const numeric = confirm("Do you want to include numbers characters?")
    const specialCharacters = confirm("Do you want to include special characters characters?")

    for (let i = 0; i < passwordLength; i++) {
      if(lowercase) password.push(String.fromCharCode(Math.floor(Math.random() * 26) + 97))
      if(uppercase) password.push(String.fromCharCode(Math.floor(Math.random() * 26) + 65))
      if(numeric) password.push(String.fromCharCode(Math.floor(Math.random() * 10) + 48))
      if(specialCharacters) {
        const symbols = '!@#$%^&*(){}[]=<>/,.'
        password.push(symbols[Math.floor(Math.random() * symbols.length)])
      }
    }

    let i = password.length, j, temp
    while (--i > 0) {
        j = Math.floor(Math.random() * (i + 1))
        temp = password[j]
        password[j] = password[i]
        password[i] = temp
    }
    
  } else {
    alert("password must be at least 8 characters and not more than 128 characters")
    writePassword()
  }
  
  passwordText.value = password.splice(0, passwordLength).join('')
}

generateBtn.addEventListener("click", writePassword)
