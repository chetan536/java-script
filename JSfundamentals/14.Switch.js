// Switch case
/* Instead of writing many else if condition we can 
write switch case to check multiple values at once*/

let dice = 7;

switch (dice){
   case 1:
       console.log("one");
       break;                //to go out of switch or else rest of case will be considered true
   case 2:
       console.log("two");
       break;
    case 3:
        console.log("three");
        break;
    case 4:
        console.log("four");
        break;
    case 5:
        console.log("five");
    case 6:
        console.log("six");
        break;
    case 7:
        console.log("seven");
        break;
    default :
        console.log("invalid");
}                                    /*break is not necesarry, 
as this will only execute if all the cases are false*/


function daysOfWeek(day) {
    switch(day){
        case monday:
            console.log(1);
            break;
            case "tuesday":
                    console.log(2);
                    break;
                  case "wednesday":
                    console.log(3);
                    break;
                  case "thursday":
                    console.log(4);
                    break;
                  case "friday":
                    console.log(5);
                    break;
                  case "saturday":
                    console.log(6);
                    break;
                  case "sunday":
                    console.log(7);
                    break;
                  default:
                    console.log("Enter valid day");
                }
              }
              
    







