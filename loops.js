//loops
//Loops are used to excute a pice of code again & again

//let iter_num=prompt(Enter )

for (let i = 1; i <= 5; i++) {
    console.log("Loops", i);
    
}

for(let count=1; count<=5; count++){
    console.log("times execute");
}

//Calculate sum of 1 to 5
let sum=0;
let n=10
for (let i=1; i<=n;i++){
sum=sum+i;
/*
0+1=1
1+2=3
3+3=6
6+4=10
10+5=15
*/
console.log(sum);
}
console.log(sum);

//Infinite loop: A loop that never ends


//While loop
let x=1;
while (x<=10) {
    console.log(x);
    x++;
    
}

//do while loop
let A=1;
do {
    console.log(A);
    A++;
} while (A<=10);

//For-of loop
//Use string & array
let str="Test Code";
let str_Size=0;
for(let i of str){
    console.log("i=",i);
    str_Size++;
}
console.log(str_Size);

//For-in loop
//Use array & object
let student={
    name:"Sanjina Jaman",
    age:"24",
    cgpa:3.50,
    isPass:true,
};
for (let key in student ){
    console.log("Key=",key, "value=", student[key]);

}

//Q:Print all even numbers from 0 to 100

for(let i=0; i<=100; i++){
    if(i%2===0){
        console.log("Even number is:", i);
    }
    else{
        console.log("Odd number is", i);
    }
    
}

