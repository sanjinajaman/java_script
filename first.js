// print on console
console.log("JavaScript");
//syntax->rules
//   ################## variable ##########
//string
full_name="Test Code"
console.log(full_name);
//normal value
//age=24;
//console.log(age);
x=null;
console.log(typeof(x));

y=undefined;
console.log(y);
// Boolean

isFollow=false;
console.log(isFollow);


isFollow=true;
console.log(isFollow);


//variable declare

// var variable can be re-declared  & updated. A global scope variable
var Yname="Test Code";
var Yname="re_declared"
var Yname="Code Test"
console.log(Yname)

// let  variable cannot be re-declared but updated. A block scope variable{}
let age=23;
console.log(age);

// const  variable cannot be re-declared & updated. A block scope variable{}
// const declaration must be initialized 
const fullName="tony stark";
console.log(fullName);

let a;
a=10;
console.log(a);
//typeof
// Number , String, Boolean,Undefined, Null, BigInt, Symbol

// Number 

number = 23;
console.log(typeof(number));

//String

string= "XYZ";
console.log(typeof(string));


//Boolean
boolean=true;
console.log(typeof(boolean));

//Undefined 
Undefined=undefined;
console.log(typeof(Undefined));

//Null
z= null;
console.log(typeof(z));

//BigInt

let bigint=BigInt('1234567890123456789012345678901234567890');
console.log(typeof(bigint));

let sy=Symbol('Hello!')
console.log(typeof(sy));

let symbolWithDescription = Symbol('description');
console.log(typeof(symbolWithDescription));


//non-primtive data type
// here student is object.Object means collection of different variable
const student={
    fullName:"sanjina Jaman",
    age: 23,
    cgpa:3.50,
    isPass:true,
} ;

console.log(student);
console.log(student["fullName"]);
console.log(student);
console.log(student["age"]);
console.log(student.age);
//key value updating

student["age"]=student["age"]+1;
console.log(student["age"]);



const product={
    pName: "Parker Jotter Standard CT Ball Pen(Black) ",
    rating:3.5,
    price:285,
    offerPrice:270,
};
console.log(product);
console.log(typeof(product));




