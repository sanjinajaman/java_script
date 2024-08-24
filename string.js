// String is a sequence of characters used to represent text

//Creating String
let str="Sanjina Jaman";
let str1='sanjina';
console.log("str:", str, " & str1:",str1)

//String Length
console.log(str.length);

//String Index
console.log(str[0]);

//String Indices
console.log(str[0], str[1], str[3]);
//Template Literals
//A way to have embedded expressions in strings. 
//`This is template literal`
//String Interpolation->To create strings by doing substitition of placeholders
//`string text ${expression}string text`
//Syntax: Use the backtick (``) instead of regular quotes, and include expressions inside `${}`.
let specialString=`This is a template literal`;
console.log(specialString);
console.log(typeof specialString);

let obj={
    item:"Pen",
    price:10,
};
console.log("the cost of ", obj.item, "is", obj.price, "tk");

let output=`the cost of ${obj.item} is ${obj.price} tk `;
console.log(output);

let exPre=`This is a template literal ${1+2+3}`;
console.log(exPre);
//Escape characters
//\n->next line
//\t->tab space create

console.log("Sanjina\nJaman");
console.log("Sanjina\tJaman");




