
var gameLevel = 1;
var password = "mellon"; 

var userName = prompt("Enter your name");
var passWordCheck;

function CheckPAssword() {
    switch (gameLevel) {
    case 1:
        passWordCheck = prompt(userName + ", speak friend and enter.");
        if (password == passWordCheck) {
            gameLevel = 2;
        }
        CheckPAssword();
        break;

    case 2:
        alert(gameLevel);
        break;

    case 3:
        
        break;

    default:
        break;


}
}
CheckPAssword();