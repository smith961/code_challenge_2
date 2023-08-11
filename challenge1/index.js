// Student Grade Generator
const input = prompt("Input student marks");
 if (input >= 79 && input <= 100){
        alert("Your grade is A");
    }
    else if (input >= 60 && input <= 79){
        alert("Your grade is B")
    }
    else if (input >= 49 && input <= 59){
        alert("Your grade is C");
    }
    else if (input >= 40 && input <= 49){
        alert("Your grade is D");
    }
    else if (input < 40 && input >= 0){
        alert("Your grade is E");
    }
    else{
        alert("Invalid input")
    }



