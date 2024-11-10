//1- Write a program that allow to user enter number then printit

/*var number=+prompt("Enter your Number");
console.log(number);*/


/*2- Write a program that take number from user then print yes if that number can divide by 3 
and 4 otherwise print no*/

/*var number=+prompt("Enter Your Number");
if (number % 3 === 0 && number % 4 === 0 )     {
    console.log("yes");
}
else if (number % 3 !== 0 || number % 4 !== 0 ) {
    console.log("no");
}
else{
    console.log("Error!");
    
}*/


//3- Write a program that allows the user to insert 2 integers then print the max

/*var x=+prompt("Enter Your Number");
var y=+prompt("Enter Your Number");

if (x>y) {
    console.log(x);
}
else if (y>x) {
    console.log(y);
}
else{
    console.log("Error!");
}*/

/*4- Write a program that allows the user to insert an integer then print negative if it is
negative number otherwise print positive.*/

/*var num=+prompt("Enter Your Number");

if (num > 0) {
    console.log("positive");
}
else if (num < 0) {
    console.log("negative");
}
else if (num === 0) {
    console.log("Zero");
}
else{
    console.log("Invalid input.");
}*/



/*5- Write a program that take 3 integers from user then print the max element 
and the min element.*/

/*var num1=+prompt("enter number 1");
var num2=+prompt("enter number 2");
var num3=+prompt("enter number 3");
var max;
var min;

if ( num1 > num2 && num1 > num3) {
    max = num1;
} else if (num2 > num1 && num2 > num3) {
    max = num2;
} else {
    max = num3;
}

if (num1 < num2 && num1 < num3) {
    min = num1;
} else if (num2 < num1 && num2 < num3) {
    min = num2;
} else {
    min = num3;
}

console.log("max element", max);
console.log("min element", min);*/


/*6- Write a program that allows the user to insert integer number then 
check If a number is oven or odd*/

/*var num=+prompt("Enter your Number");
if (num % 2 === 0) {
    console.log(num + " is even.");
}
else if (num % 2 !== 0) {
    console.log(num + " is odd."); 
}
else{
    console.log("Invalid input."); 
}*/

/*8- Write a program that take character from user then if it is vowel chars (a,e,I,o,u) 
then print vowel otherwise print consonant*/

/*var char = prompt("Enter a character:").toLowerCase();

if (char === "a" || char === "e" || char === "i" || char === "o" || char === "u") {
    console.log("(" + char + ")" + " is a vowel.");
} else if (char === 'b' || 
    char === 'c' || 
    char === 'd' || 
    char === 'f' || 
    char === 'g' || 
    char === 'h' || 
    char === 'j' || 
    char === 'k' || 
    char === 'l' || 
    char === 'm' || 
    char === 'n' || 
    char === 'p' || 
    char === 'q' || 
    char === 'r' || 
    char === 's' || 
    char === 't' || 
    char === 'v' || 
    char === 'w' || 
    char === 'x' || 
    char === 'y' || 
    char === 'z') {
    console.log( "(" + char + ")" + " is a consonant.");
}

else{
    console.log("Invalid input! Please enter a valid alphabet.");
    
}*/


/*9- Writeaprogramthat allowsusertoinsertintegerthenprintallnumbersbetween1to 
that’s number*/

/*var num=+prompt("enter your number")
for (var i=1;i<num;i++){
    console.log(i);
    
}*/



//10- Write a program that allows userto insert integerthen print a multiplication table up to 12.

/*var number=+prompt("Enter your Number");

for (var i = 1; i <= 12; i++) {
    console.log(number + " x " + i + " = " + (number * i));
}*/


/* 11- Write a program that allows to user to insert number then print all even numbers 
between 1 to this number */


/*var num=+prompt("Enter your Number");

for (var i=1;i<=num;i++){
    if (i % 2 === 0) {
        console.log(i);
    }
}*/


//12- Write a program that take two integers then print the power 


/*var num1=+prompt("Enter Number1");
var num2=+prompt("Enter Number2");
var result=(num1**num2);
console.log(result);*/

/*12- Write a program to enter marks of five subjects and calculate total, average and 
percentage.*/

/*var num1=+prompt("Enter mark number 1");
var num2=+prompt("Enter mark number 2");
var num3=+prompt("Enter mark number 3");
var num4=+prompt("Enter mark number 4");
var num5=+prompt("Enter mark number 5");

var total=(num1 + num2 + num3 + num4 + num5);
var average=(total / 5);
var percentage=((total / 500) * 100 )

console.log("Total " + total);
console.log("Average " + average);
console.log("Percentage " + percentage + "%");

if (percentage>50) {
    console.log("SUCCESSFUL");
}
else{
    console.log("FAILED");
    
}*/

/*13-Write a program to input month number and print number of days in that 
month. */

/*var x=+prompt("Enter the month number");

if (x === 1 || x === 3 || x === 5 || x === 7 || x === 8 || x === 10 || x === 12) {
    console.log(" Days in Month: 31");
    
}
else if (x === 2) {
    console.log("28 days or (29 in leap years)");
    
}
else if (x === 4 || x === 6 || x === 9 || x === 11) {
    console.log(" Days in Month: 30");
    
}
else{
    console.log("Invalid month number");
    
}*/


/*14- Write a program to input marks of five subjects 
Physics, Chemistry, Biology, Mathematics and Computer 
  , Find percentage and grade  */

  /*var Physics=+prompt("Physics");
  var Chemistry=+prompt("Chemistry");
  var Biology=+prompt("Biology");
  var Mathematics=+prompt("Mathematics");
  var Computer=+prompt("Computer");

  var total = Physics + Chemistry + Biology + Mathematics + Computer;
  var percentage = (total / 500) * 100;
    console.log(percentage + " %");
    
  if (percentage >= 90) {
    console.log("Grade A");
    
  }
  else if (percentage >= 80) {
    console.log("Grade B");
    
  }
  else if (percentage >= 70) {
    console.log("Grade C");
    
  }
  else if (percentage >= 60) {
    console.log("Grade D");
    
  }
  else if (percentage >= 40) {
    console.log("Grade E");
    
  }
  else if (percentage < 40) {
    console.log("Grade F");
    
  }
  else{
    console.log("Error!");
  }*/


//15- Write a program to print total number of days in month  
//switch
/*var x=+prompt("Enter the month number");

switch (x) {
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
        console.log("Days in Month: 31");
        break;
    case 2:
        console.log("28 days or (29 in leap years)");
        break;
    case 4:
    case 6:
    case 9:
    case 11:
        console.log("Days in Month: 30");
        break;
    default:
        console.log("Invalid month number");
        
        break;
}*/

//if

/*var x=+prompt("Enter the month number");

if (x === 1 || x === 3 || x === 5 || x === 7 || x === 8 || x === 10 || x === 12) {
    console.log(" Days in Month: 31");
    
}
else if (x === 2) {
    console.log("28 days or (29 in leap years)");
    
}
else if (x === 4 || x === 6 || x === 9 || x === 11) {
    console.log(" Days in Month: 30");
    
}
else{
    console.log("Invalid month number");
    
}*/

//16- Write a program to check whether an alphabet is vowel or consonant  

//switch
/*var char=prompt("Enter a character:").toLowerCase();

switch (char) {
    case 'a':
    case 'e':
    case 'i':
    case 'o':
    case 'u':
        console.log( "(" + char + ")" + " is a vowel.");
        break;
    case 'b':
    case 'c':
    case 'd':
    case 'f':
    case 'g':
    case 'h':
    case 'j':
    case 'k':
    case 'l':
    case 'm':
    case 'n':
    case 'p':
    case 'q':
    case 'r':
    case 's':
    case 't':
    case 'v':
    case 'w':
    case 'x':
    case 'y':
    case 'z':
        console.log( "(" + char + ")" + " is a consonant.");
        break;
    default:
        console.log("Invalid input! Please enter a valid alphabet.");
        break;
}*/

//IF
/*var char = prompt("Enter a character:").toLowerCase();

if (char === "a" || char === "e" || char === "i" || char === "o" || char === "u") {
    console.log("(" + char + ")" + " is a vowel.");
} else if (char === 'b' || 
    char === 'c' || 
    char === 'd' || 
    char === 'f' || 
    char === 'g' || 
    char === 'h' || 
    char === 'j' || 
    char === 'k' || 
    char === 'l' || 
    char === 'm' || 
    char === 'n' || 
    char === 'p' || 
    char === 'q' || 
    char === 'r' || 
    char === 's' || 
    char === 't' || 
    char === 'v' || 
    char === 'w' || 
    char === 'x' || 
    char === 'y' || 
    char === 'z') {
    console.log( "(" + char + ")" + " is a consonant.");
}

else{
    console.log("Invalid input! Please enter a valid alphabet.");
    
}*/

//17- Write a program to find maximum between two numbers  


// var num1=+prompt("Enter Number 1");
// var num2=+prompt("Enter Number 2");

//switch

/*switch (true) {
    case (num1 > num2):
        console.log(num1);
        break;
    case (num2 > num1):
        console.log(num2);
        break;
    default:
        console.log(false);
        
        break;
}*/

//If

/*if (num1 > num2) {
    console.log(num1);
}
else if (num2 > num1) {
    console.log(num2);
}
else{
    console.log(false);
    
}*/


//18- Write a program to check whether a number is even or odd  

//switch
/*var num=+prompt("Enter your Number");

switch (num % 2) {
    case 0:
        console.log(num + " is even.");
        break;
    case 1:
        console.log(num + " is odd.");
        break;
    default:
        console.log("Invalid input.");
        break;
}*/

//If
/*var num=+prompt("Enter your Number");
if (num % 2 === 0) {
    console.log(num + " is even.");
}
else if (num % 2 !== 0) {
    console.log(num + " is odd.");
    
}
else{
    console.log("Invalid input.");
    
}*/

//19- Write a program to check whether a number is positive or negative or zero  

//switch
/*var num=+prompt("Enter Your Number");

switch (true) {
    case (num > 0):
        console.log("positive");
        break;
    case (num < 0):
        console.log("negative");
        break;
    case (num === 0):
        console.log("Zero");
        break;
    default:
        console.log("Invalid input.");
        break;
}*/

//If
/*var num=+prompt("Enter Your Number");

if (num > 0) {
    console.log("positive");
}
else if (num < 0) {
    console.log("negative");
}
else if (num === 0) {
    console.log("Zero");
}
else{
    console.log("Invalid input.");
}*/


//20- Write a program to create Simple Calculator  

//switch
/*var num1=+prompt("Enter the first number:");
var num2=+prompt("Enter the second number:");
var operator = prompt("Enter an operator (+, -, *, /):");
var result;
switch (operator) {
    case '+':
        result = num1 + num2;
        console.log(result);
        break;
    case '-':
        result = num1 - num2;
        console.log(result);
        break;
    case '*':
        result = num1 * num2;
        console.log(result);
        break;
    case '/':
        if (num2 !== 0) {
            result = num1 / num2;
            console.log(result);
        }
        else{
            console.log("Error: Division by zero is not allowed.");
        }
        break;
    default:
        console.log("error!");
        
        break;
}*/

/*var num1=+prompt("Enter the first number:");
var num2=+prompt("Enter the second number:");
var operator = prompt("Enter an operator (+, -, *, /):");
var result;

if (operator === '+') {
    result = num1 + num2;
    console.log(result);
}
else if (operator === '-') {
    result = num1 - num2;
    console.log(result);
}
else if (operator === '*') {
    result = num1 * num2;
    console.log(result);
}
else if (operator === '/') {
    if (num2 !== 0) {
        result = num1 / num2;
        console.log(result);
    }
    else{
        console.log("Error: Division by zero is not allowed.");
    }
}
else{
    console.log("Error!");
    
}*/

    