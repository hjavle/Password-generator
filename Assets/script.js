// Assignment Code

  $(document).ready(function (){

  $("#generate").click(function (){
    var choiceCounter = 0;

    let passwordLength = prompt("Specify number of characters in your password minimum 8 and maximum 128");
      while(passwordLength < 8 || passwordLength  > 128)
        passwordLength = prompt("Specify number of characters in your password minimum 8 and maximum 128");
  
      let passwordNum = confirm("Do you want numbers e.g. 123456 to be included in your password");

      if(passwordNum == true){
        choiceCounter++;
      } 

      let passwordUpper = confirm("Do you want Upper case characters e.g. ABCDEFGH to be included in your password");

      if(passwordUpper == true) {
        choiceCounter++;
      } 
      let passwordLower = confirm("Do you want Lower case characters e.g. abcdefgh to be included in your password");

      if(passwordUpper == true) {
        choiceCounter++;
      } 
      let passwordSymbl = confirm("Do you want Symbols e.g. @#$% to be included in your password");

      if(passwordSymbl == true) {
        choiceCounter++;
      } 
    if(choiceCounter > 0 )
        alert(`Please check below criteria for your password: You entered (password length):${passwordLength}Includes Numbers:${passwordNum}Includes Uppercase Alphabets:${passwordUpper}Includes Lowercase Alphabets:${passwordLower}Includes Symbols:${passwordSymbl}`);
      else 
        alert('Password cannot be generated without selecting at least one criteria');
  });
});

  /*
// Assignment Code
var generateBtn = document.querySelector("#generate");
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword); */
