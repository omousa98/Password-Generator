// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

//have an array - global scope to store characters
var characters = [];
var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split('');
var lower = "abcdefhijklmnopqrstuvwxyz".split('');
var numbers = "1234567890".split('')
var specialChar = "!@#$%^&*()-+".split('')
// boolean for the confirm window operator
var hasUpper;
var hasLower;
var hasNumber;
var hasSpecial;
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//function that will gather user input, generate random password, IMPORTANT returns the generated password at the end
function generatePassword() {
    
    var length = parseInt(prompt("Please enter a number between 8 and 128!"))
    // Length validation statement 
    if(!length){
        retu = alert("This needs a value");
        // confirm value 
    } else if ((length < 8 || length > 128)) {
        alert("Please Input a number between 8 and 128!");
        return(retu) 
    
        // decide the rest of the conditions
    } else {
        hasUpper = confirm("Would you like Upper Case Characters?!")
        hasLower = confirm("Would you like Lower Case Characters?!")
        hasNumber = confirm("Would you like Numbers?!")
        hasSpecial = confirm("Would you like Special Characters?!")
    };
     
    // 4 negative condition 
    if (!hasUpper && !hasLower && !hasNumber && !hasSpecial){
        alert("You must select a criteria!")
    }


    // 4 positive condition
    if (hasUpper && hasLower && hasNumber && hasSpecial) {
        characters = upper.concat(lower, numbers, specialChar)
    } // 3 positive conditions
     else if(hasUpper && hasLower && hasNumber) {
        characters = upper.concat(lower, numbers)
    } else if(hasUpper && hasNumber && hasSpecial) {
        characters = upper.concat(numbers, specialChar)
    } else if (hasLower && hasNumber && hasSpecial) {    
        characters = lower.concat(numbers, specialChar)
    // 2 positive conditions
    } else if (hasUpper && hasLower) {
        characters = upper.concat(lower)
    } else if (hasUpper && hasNumber) {
        characters = upper.concat(numbers)
    } else if (hasUpper && hasSpecial){
        characters = upper.concat(specialChar)
    } else if(hasLower && hasNumber) {
        characters = lower.concat(numbers)
    } else if (hasLower && hasSpecial) {
        characters = lower.concat(specialChar)
    } else if (hasNumber && hasSpecial) {
        characters = numbers.concat(specialChar)
    // 1 positive condition
    } else if (hasUpper) {
        characters = upper;
    } else if (hasLower) {
        characters = lower;
    } else if (hasNumber) {
        characters = numbers;
    } else if (hasSpecial) {
        characters = specialChar;
    }
    
    
    // function that generates 1 random character from an array of characters
    // when generating if choose length 8, gonna run for loop for 8 iterations
    var randomPass = [];
    for (var i = 0; i < length; i++) {
        var randomChar = characters[Math.floor(Math.random()* characters.length)]
        randomPass.push(randomChar);  
    }
    password = randomPass.join("");
    
    return(password) 
    
    

    
    
    
}