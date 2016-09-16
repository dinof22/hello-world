//This is a boolean var
var levelLocked = true;
//Number of times user acan enter password
var attempts = 3;




function PasswordPrompt () {
//this is string var
    var myPassword = prompt("Enter password");
//This tests if my password is a certain string
//also test for number of login attempts 
if (myPassword == "ou812") {
//If true this changes the bool to false
    levelLocked = false;
} else {
    //decreases attempts
    attempts--;
    
    if (attempts >0){
    
   //Recall of the function if false.
    PasswordPrompt();
    }

}
}

PasswordPrompt();

//This will test if levelLocked is true or false.
if (levelLocked) {
    alert("This level is locked.");
} else {
    alert("The level is unlocked.");
}