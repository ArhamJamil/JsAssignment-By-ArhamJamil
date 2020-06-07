// 

/* question 1: Write a program to take “city” name as input from user. If 
user enters “Karachi”, welcome the user like this: 
“Welcome to city of lights” 

 sol:

var city = prompt("enter a city");
if ( city == "Karachi" ) {
    alert("“Welcome to city of lights”");
}else{
    alert("enter Karachi, to get Beautiful message")
};

*/

// TASK2
// Task 2 Solution:

// var gender = prompt("What Is Your Gender");
// if (gender == "Male" || gender == male) {
//     alert("Good Morning,Sir , your gender = "+(gender))
// }else{
//     alert("Good Morning,Mam , your gender = Female ")
// }


// Task3
// Task3 sol

var color = prompt("Enter Trafic signal Color");
if(color == "Red" || color == "red"){
    alert("Must STop");
}else if(color == "Yellow" ||  color == "yellow"){
    alert("Ready to move");

}else if(color == "Green" ||  color == "green"){
    alert("move Now")
}else{
    alert("write color name as :Red,red,Green,green,yellow,Yellow")
}




// task4:
// task4-sol

var fuel = +prompt("Enter your Car Fuel !");
if(fuel <= 0.25){
    alert("Please refill the fuel in your car")
}else{
    alert("You can Drive Car but Refuel your Car at 0.25L")
}


// task5 "SCRIPTS"

// var a = 4;
// if (++a === 5){
// alert("given condition for variable a is true");
// }

// var b = 82;
// if (b++ === 83){
// alert("given condition for variable b is true");
// }


// var c = 12;
// if (c++ === 13){
// alert("condition 1 is true");
// }
// if (c === 13){
// alert("condition 2 is true");
// }
// if (++c < 14){
// alert("condition 3 is true");
// }
// if(c === 14){
// alert("condition 4 is true");
// }


// var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost){
// alert("The cost equals");
// }

// if (true){
//     alert("True");
//     }
// if (false){
//     alert("False");
// }


// if("car" < "cat"){
//     alert("car is smaller than cat");
// }

// task5 sol:

// a = displayed
// b = not 
// c = displayed
//  d = displayed
//  e = displayed 
//  f = displayed



// task6
// task6 sol

var Tmarks = 300;
var sub1 = +prompt("Enter subject 1 marks");
var sub2 = +prompt("Enter subject 2 marks");
var sub3 = +prompt("Enter subject 3 marks");
var MarksObt = (sub1 + sub2 +sub3);
var MarksPerct = (MarksObt/Tmarks*100)
var Grades = ["A+" ,"A", "B", "Fail(U)"];
var Remarks = ["Excellent", "Good", "You need To improve", "Sorry"]
if(MarksPerct >= 80){
    alert("You have Done " + Remarks[0] +" Work,Wow, "
    +" Your Grade is = "+ Grades[0] + " ,  You have obtained Total Marks out of "+Tmarks+"="+  MarksObt
    )
}else if(MarksPerct >= 70){
    alert("You have Done " + Remarks[1] +" Work,Wow, "
    +" Your Grade is = "+ Grades[1] + " ,  You have obtained Total Marks out of "+Tmarks+"="+  MarksObt
    )

}else if((MarksPerct >= 60)){
    alert("You " + Remarks[2] +" dont be Lazy, "
    +" Your Grade is = "+ Grades[2] + " ,  You have obtained Total Marks out of "+Tmarks+"="+  MarksObt
    )
}else if((MarksPerct < 60)){
    alert(Remarks[3] +"But You are Fail"
    +" Your Grade is = "+ Grades[3] + " ,  You have obtained Total Marks out of "+Tmarks+"="+  MarksObt
    )
}



//  task7 (guess game):
// task7 sol:
var store = 6;
var Ustore = +prompt("Guess Number Ranging from 1 - 10 for Quiz !")
if(store > 10){
    +prompt("Guess Number Ranging from 1 - 10 for Quiz !")
}else if(Ustore == store){
alert(" “Bingo! Correct answer” ")
}else{
alert("“Close enough to the correct answer”.")
}


// task8:
// task8 sol:

// task9:
// task9 sol:


// task10(temperature input)
// task 10 sol:

var Tinput = +prompt("Enter Today Temperature");
if(Tinput >= 40){
    alert("“It is too hot outside.")
}else if(Tinput >= 30){
    alert("The Weather today is Normal.")
}else if(Tinput >= 20){
    alert("Today’s Weather is cool.")
}else if(Tinput >= 10){
    alert("“OMG! Today’s weather is so Cool.”")
}else if(Tinput < 10){
    alert("OMG ! today temperature is extremely cold")
}



// task 11(calculator)
// task 11 sol:

var FirstNum = +prompt("Enter First Number");
var SecondNum = +prompt("Enter second Number");
var operation = prompt("What Operation You want with these Number (+ , - , / , % , * )")
if(operation == "+"){
    alert("The Result is : "+ (FirstNum+SecondNum))
}else if(operation == "-"){
    alert("The Result is : "+ (FirstNum-SecondNum))  
}else if(operation == "*"){
    alert("The Result is : "+ (FirstNum*SecondNum))
}else if(operation == "/"){
    alert("The Result is : "+ (FirstNum/SecondNum))
}else if(operation == "%"){
    alert("The Result is : "+  (FirstNum%SecondNum))
}










