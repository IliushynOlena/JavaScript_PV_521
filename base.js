console.log("Hello from Base.js");


let empty;              //undefined
let nullObject = null;  //null 

let number = 120.33;           // number
let email = "myemail@gmail.com"//string
let flag = true;               //boolean
let summa = function(a,b)      //function
{
    console.log(`${a} + ${b} = ${a+b}`);
}
//""  ''  ``
let array = [1,2,3,4, "green", false,["world","tree"],summa]//object

console.log(`Number : ${number}. Type : ${typeof(number)}`)
//Shift+Alt+ arrow down
console.log(`Email : ${email}. Type : ${typeof(email)}`)
console.log(`Flag : ${flag}. Type : ${typeof(flag)}`)
console.log(`summa : ${summa}. Type : ${typeof(summa)}`)

number = "hello";
flag = 52.33;
console.log(`Number : ${number}. Type : ${typeof(number)}`)
console.log(`Flag : ${flag}. Type : ${typeof(flag)}`)
console.log(`Empty : ${empty}. Type : ${typeof(empty)}`)
console.log(`nullObject : ${nullObject}. Type : ${typeof(nullObject)}`)
console.log(`Array : ${array}. Type : ${typeof(array)}`)
console.log(array[6][1]);
console.log(array[7](5,5));

summa(4,8);

//------------- cycles ------------
const numbers = [33,5,8,-9,-6,14,78,2]
//for
for (let i = 0; i < array.length; i++) {
   //console.log(`[${i}] - ${numbers[i]}`);
   //console.log( "Number : "  + numbers[i])
   //console.log( "[" +  i + "]" + " - "  + numbers[i]);
   console.log(`[${i}] - ${numbers[i]}`);    
}
numbers[0] = 111;
numbers[88] = 777;
//forof - readonly
for (const element of numbers) {
    console.log(element);
}

//forin - read all indexes
for (const key in numbers) {
   console.log(key);       
}
console.log(`Array length : ${array.length}`);  
console.warn("warning");
console.error("error in system");

//-----------------------------------
if (5 > 4)
{
    console.log("True");
}
else
    console.log("True");

// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }
let message = (3 > 2) ? "bigger": "less";


function divide(a,b)
{
    if( b == 0)
    {
        console.error("Can't divide by zero!");
        return;//break
    }
    return a/b;
}

function sum(a,b)
{
    return a+b;
}
console.log(`Result = ${divide(8,4)}`);
//alert(`Result = ${divide(8,4)}`)
let numA = +prompt("Enter number A : ");
let numB = +prompt("Enter number B : ");
alert(`Result = ${sum(numA,numB)}`);
alert(`Result = ${divide(numA,numB)}`);

