var generateBtn = document.querySelector("#generate");
let Numbers= ["1","2","3","4","5","6","7","8","9","0"];
let Symbols= ["!@#$%^&*()"];
let LowerCase= ["abcdefghijklmnopqrstuvwxyz"];
let UpperCase= ["ABCDEFGHIJKLMNOPQRSTUVWXYZ"];

function generatePassword() {
    var passwordLength= prompt("What is the length of the password?");
console.log(passwordLength);
if (passwordLength < 8 || passwordLength > 128) {
alert("Invalid Password count");
return;
    }
}
function prompt(question) {
    let response= prompt(question).tolowercase();
    do {
        if (response === "y" || "yes") {
            return true;
        }
        else if (response === "n" || "no") {
            return false;
        }
        else {
            response= prompt("Y/N or Yes or No is not specified" + question).tolowercase();  
        }
    } while (true);
}
     
do {
    useNumbers= prompt("Would you like to use numbers in your password? (y or n or yes or no)");
    useLowerCase= prompt("Would you like to use lower case letters? (y or n or yes or no)");
    useUpperCase= prompt("Would you like to use upper case letters? (y or n or yes or no)");
    useSymbols= prompt("Would you like to use symbols? (y or n or yes or no)");
    if(!Numbers && !useLowerCase && !UpperCase && !Symbols);
    alert("Please choose a method to generate your password");
}

let passArray= [];
    if (useNumbers) {
        passArray.splice(0,0,...Numbers);
    } 
    if (useLowerCase) {
        passArray.splice(0,0...LowerCase);
    }
    if (useUpperCase) {
        passArray.splice(0,0...UpperCase);
    }
    if (useSymbols) {
        passArray.splice(0,0...Symbols);
    }

function writePassword() {
  var password = generatePassword()
  var passwordText = document.querySelector("#password");
   passwordText.value= " "   
  
     passwordText.value = password;
}
generateBtn.addEventListener("click", writePassword);

//Footer
// © 2022 GitHub, Inc.
// Footer navigation
// Terms
// Privacy
// Security
// Status
// Docs
// Contact GitHub
// Pricing
// API
// Training
// Blog
// About
