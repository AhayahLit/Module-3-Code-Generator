var generateBtn = document.querySelector("#generate");
let Numbers= ["1","2","3","4","5","6","7","8","9","0"];
let Symbols= ["!@#$%^&*()"];
let LowerCase= ["abcdefghijklmnopqrstuvwxyz"];
let UpperCase= ["ABCDEFGHIJKLMNOPQRSTUVWXYZ"];

function generatePassword() {
    var passwordLength= prompt("What is the length of the password?");
    var password = calcPassword(passwordLength)
    console.log(passwordLength);
    if (passwordLength < 8 || passwordLength > 128) {
        alert("Invalid Password count");
        return;
    }
}

function calcPassword(passwordLength) {
    do {
        var useNumbers= prompt("Would you like to use numbers in your password? (y or n or yes or no)");
        var useLowerCase= prompt("Would you like to use lower case letters? (y or n or yes or no)");
        var useUpperCase= prompt("Would you like to use upper case letters? (y or n or yes or no)");
        var useSymbols= prompt("Would you like to use symbols? (y or n or yes or no)");
        if(!useNumbers && !useLowerCase && !useUpperCase && !useSymbols); {
            alert("Please choose a method to generate your password");
        }
    } while(!useNumbers && !useLowerCase && !useUpperCase && !useSymbols);
    console.log(useNumbers)
    console.log(useLowerCase)
    console.log(useUpperCase)
    console.log(useSymbols)
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
     

let passArray= [];
    if (Numbers) {
        passArray.splice(0,0,...Numbers);
    } 
    if (LowerCase) {
        passArray.splice(0,0,...LowerCase);
    }
    if (UpperCase) {
        passArray.splice(0,0,...UpperCase);
    }
    if (Symbols) {
        passArray.splice(0,0,...Symbols);
    }
    let password= " ";
    for (i=0; i <=length; i++) {    
    let randomNum= Math.floor(Math.random() * passArray.length);
    password += passArray[randomNum];
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
