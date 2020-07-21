$(document).ready(function (){
  //when document is ready and loaded ,
  //  assign (wire up) event handler for click event of button with id of 'generate'
  $("#generate").click(function (){
    //counter to count "no of choices" made by user for password complexity
    //this is used further below to ensure, that at least minimal required 
    //number of choices made by the user to maintain desired complexity of password
    var choiceCounter = 0;
    //locals below t accept user's input
    passwordLength=0;
    passwordNum= true;
    passwordUpper=true;
    passwordLower=true;
    passwordSymbol=true;

    var passwordLength = prompt("Specify number of characters in your password minimum 8 and maximum 128");
      while(passwordLength < 8 || passwordLength  > 128)
        passwordLength = prompt("Specify number of characters in your password minimum 8 and maximum 128");
  
      var passwordNum = confirm("Do you want numbers e.g. 123456 to be included in your password");

      //if user makes 'yes' choice increment "no of choices" counter
      if(passwordNum == true){
        choiceCounter++;
      } 

      var passwordUpper = confirm("Do you want Upper case characters e.g. ABCDEFGH to be included in your password");
      //if user makes 'yes' choice increment "no of choices" counter
      if(passwordUpper == true) {
        choiceCounter++;
      } 
      var passwordLower = confirm("Do you want Lower case characters e.g. abcdefgh to be included in your password");
      //if user makes 'yes' choice increment "no of choices" counter
      if(passwordUpper == true) {
        choiceCounter++;
      } 
      var passwordSymbol = confirm("Do you want Symbols e.g. @#$% to be included in your password");
      //if user makes 'yes' choice increment "no of choices" counter
      if(passwordSymbol == true) {
        choiceCounter++;
      } 

    //if user has made choice of at least one level of complexity to the password
    // give user message about the choices made by the user regarding complexity of password
    //else give user message that password cannot be generated
    if(choiceCounter > 0 )
        alert(`Please check below criteria for your password: You entered (password length):${passwordLength}Includes Numbers:${passwordNum}Includes Uppercase Alphabets:${passwordUpper}Includes Lowercase Alphabets:${passwordLower}Includes Symbols:${passwordSymbol}`);
      else 
        alert('Password cannot be generated without selecting at least one criteria');

    //generate the password and assign it to textarea
    let pwd = generatePassword(passwordLength,passwordNum,passwordUpper,passwordLower,passwordSymbol);
    document.querySelector("#password").value = pwd;
  });
});



function generatePassword(passlength,uppercase, lowercase, numbers, specialchars)
{
  //initial variable to hold, password characters for generating password
  passwordCharsString = '';
  generatedPassword = '';
 
  //if uppercase characters are chosen to be included in password,
  //then choose upper case character set and append to the password generation character set
  if(uppercase) passwordCharsString += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  //if lowercase characters are chosen to be included in password,
  //then choose lower case character set and append to the password generation character set
  if(lowercase) passwordCharsString += 'abcdefghijklmnopqrstuvwxyz';
  //if numbers  are chosen to be included in password,
  //then choose number characters set and append to the password generation character set
  if(numbers) passwordCharsString += '123456789';
  //if special characters are chosen to be included in password,
  //then choose special characters and append to the password generation character set
  if(specialchars) passwordCharsString += '~!@#$%^&*`';

  //iterate thorough length of characters counter to fill in 
  //Math.random() give random no from passwordCharsString's length 
  //Math.floor()
  for (i = 0; i <= passlength; i++)
  {
    console.log(passwordCharsString.length);
    let randomNo = Math.floor(Math.random()* passwordCharsString.length +1);
    generatedPassword += passwordCharsString.charAt(randomNo);
  }
  console.log(generatedPassword);
  return generatedPassword;
}
 $("#clear").click(function (){
  
  alert("Do you want to clear password?");
  generatedPassword  ='';
  console.log(generatedPassword);
  document.querySelector("#password").value = generatedPassword;
  return generatedPassword ;
 });

