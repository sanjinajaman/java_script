//This is a single line comment

/* This
is a
multi-line
comment*/


//      |||||||||||||| OPERATORS |||||||||||||||||||||

// used to perform some operation on data

//Arithmatic Operators
let a=5;
let b=2;
let sum=a+b;
let sub=a-b;
let mul=a*b;
let div=a/b;
let modu=a%b;
console.log("a+b" , a+b);
console.log("Sum", sum);
console.log("Sub", sub);
console.log("Mul", mul);
console.log("Div", div);
console.log("Modulo", modu);


// Unary    a++(post)  a--(post)
//          ++a(pre)   --a(pre) 


let x=5;

console.log("++x:", ++x);
console.log("x++:", x++);
console.log("x++:", x)
let y=6;
console.log("--y:", --y);
console.log("y--:", y--);
console.log("y--:", y);

//Assignment Operators
// = += -= *= /= %= **=

let asA=5;
let asB=5;

asA +=4;  //asA=asA+4
console.log("asA:" , asA);

asA -=4;  //asA=asA-4
console.log("asA:" , asA);

asA /=4;  //asA=asA/4
console.log("asA:" , asA);

asB %=4;  //asB=asB%4
console.log("asB:" , asB);


asA **=4;  //asA=asA**4
console.log("asA:" , asA);

// Comparism Operators
// comparisn operators always return boolean value (true/false)
// == just check value
// Equal to ==  

let aeq=5;
let beq=5;
let ceq="5";
console.log("5==5", aeq==beq);//true
console.log("5==5", aeq==ceq);// true

//=== check value and data type
//Equal to & type ===
let aTr=5;
let bTr=5;
console.log("aTr===bTr", aTr===bTr); //true

//Not equal to !=
let anot=5;
let bnot=2;
console.log("anot != bnot:", anot != bnot);//true

//Not equal to & type !==
let aTri=5;
let bTri="5";
console.log("aTri !==bTri", aTri !== bTri); //True

//Comparison Operators
//>, >=, <, <=
let aC=5;
let bC=3; 

console.log("Comparison")
console.log("5>3:", aC>bC);//true
console.log("5>=3:", aC>=bC);//true
console.log("2<3:", aC<bC);//true
console.log("2<=3:", aC<=bC);//true

//Logical Operators
//Logical and &&
console.log("aTri == bTri && aC==bC", aTri == bTri && aC==bC )//false
//Logical or ||
console.log("aTri == bTri || aC==bC", aTri == bTri || aC==bC )//true

//Logical not !

console.log("!(aTri == bTri && aC==bC)", !(aTri == bTri && aC==bC) )//false


//Conditional Statements
//To implement some condition in the code
//if else if else 

let age=17;

if(age>18){
    console.log("You can vote");
}
 
if(age<18){
    console.log("You can't vote");
}

else{
    console.log("Please re-enter your age ");
}


let mode ="blue";
let color;
if(mode==="dark"){
    color="black";
}
   
else if(mode==="light"){
    color ="white";
}
else{
   color="white";
}
console.log("Color:", color);


//Conditional Statements
//odd or even
let num=5;
if(num%2===0){
    console.log(num," is Even Number");
}else{
    console.log(num, "is Odd Number");
}

//Ternary Operators
// write if-else condition second way ternary operator
//condition? true output:false output
//ageP>18? "adult" : "not adult";
/* for example
2 oprands like a+b
1 oprand like a++ , a-- (unary oprand) 
3 oprand like cond?true:false  (ternary oprand) 
*/

let ageP=25;
console.log(ageP>=18? "Adult":"Not Adult");
//ageP>=18? console.log("Adult"):console.log("Not Adult");
let agePP=17;
let result=agePP>=18? "Adult":"Not Adult";
console.log(result);


//create a pop-up massage
alert("Hello!");

//practice
//Q: Get user to input a number using prompt("Enter a number:"). Check if the number is a multiple of 5 or not
let name = prompt("Hello!");
console.log(name);

let newNum=prompt("Enter a number");

if(newNum%5===0){
    console.log("This number is multiple of 5");
}
else{
    console.log("This number is not multiple of 5");
}

let marks=prompt("Enter Marks:");
if(marks>=80 && marks<=100){
    console.log("A");
}
else if(marks>=70 && marks<=89){
    console.log("B");
}
else if(marks>=60 && marks<=69){
    console.log("C");
}
else if(marks>=50 && marks<=59){
    console.log("D");
}
else if(marks>=0 && marks<=49){
    console.log("F");
}