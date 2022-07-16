var generateBtn = document.querySelector("#generate");
function generatePassword() {
    var passwordLength= prompt("What is the length of the password?");
console.log(passwordLength);
if (passwordLength < 8 || passwordLength > 128) {
alert("Invalid Password count");
return;
} 


}     

function writePassword() {
  var password = generatePassword()
  var passwordText = document.querySelector("#password");
    
    // charset= ["1-0", "!-)", "a-z", "A-Z"];
    // for (i=0, n=charset.length; i<length; i++) {
    //     retVal += charAT(Math.floor(Math.random()*n));
    // };
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
