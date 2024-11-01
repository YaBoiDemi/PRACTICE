let x,y,z;
x = 5
y = 10
z = x + y

//Creating a variable
var num1;
var num2;

//Using my variable

num1 = 10;
num2 = 202;

let sum = num1 + num2;
/*
Cost code
*/

const bagPrice = 10;
const bagDiscount = 24;
let salePrice = bagPrice + bagDiscount;

let person = "Me", carName = "Lambo" , age = 14 , netWorth = "0"

{
    var number = 1 + 1;
}

function welcome() {
    var message = "Welcome User.";
}
let greeting = welcome()
document.getElementById("content").innerText = "greeting";

//CONST
//Creating a constant array:
const vechiles = ["Mercedes Benz", "Porshe", "Lexus"]

//Manipulating variables with "Const"
/* 
1.) Changing elements
 */

vechiles[2] = "BMW";
vechiles.push = "Lexus" //Changed and replaced arrays

//Creating a const Object.
const raceCars = {
    type:"BMW",
    model:"M3",
    color:"White",
}

//Changing the property of "const raceCars"
raceCars.color = "Gold"
raceCars.model = "M4"

//Adding a new property to "const raceCars":
raceCars.carName = "X_Cite."

//Operators
let text1 = "I"
let text2 = " Am Me"
let text3 = text1+ "" +text2
console.log(text3)

//increments
let p = 5;
p++; // or p--;
let b = p;
console.log(b)

let g = 5
let t = g ** 2
console.log(t)

//Exponentiation.
let w = 5;
let i = Math.pow(w,2)
console.log(i)

//Arethemeytic operations
let l = 5;
let v = (l * 12) / 20;
console.log("The V result is ", v)

//Using everything i learnt to practice:
/*let self = document.getElementById("testid").innerText = function myFucntion() {
    const playerData = {
        playerName: "Player",
    }

    document.getElementById("testid").innerText = playerData.playerName
}*///I will come back to this 😭

//Adding strings together.
let string1 = "Exception"
let string2 = " Time."
console.log(string1 + "" + string2)

//Simple assignment operators
let h = 5;
let vb = 20 + h;
console.log(vb ,"-- Line 105")

let radnum1 = 10;
radnum1 %= 5;
console.log(radnum1, "--line 109")

let text = "Hello"
text += " World"
console.log(text, "--line 133")

//<<== oprator
let number1 = -100
number1 <<= 5;
console.log(number1,"--line 188")

//Bitwise
let greaternumber = 10;
greaternumber &&= 5;
console.log(greaternumber ,"--Line 123")

//Data Types.
/* 
[1] Numbers.
*/

let lenght = 20;
let width = 1.7;

//Data type #2

/*
[2] strings
*/
let color = "green";
let lastName = "cite.";

//Data type #3

/*
[3] Booleans.
*/

let Boolean1 = true;
let Boolean2 = false;

//Data type #4

/*
[4] Objects.
*/

const people = {
    firstname: "X",
    lastname: "Cite."
}

//Data type #5

/*
[5] Array Objects.
*/

const carDrice = ["VolVo", "Benz", "Tesla"]

//Data type #6

/*
[6] Date Objects.
*/
const date = new Date("2024-01-11")

//Functions