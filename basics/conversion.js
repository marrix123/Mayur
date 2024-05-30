let score = "33abc"

console.log(typeof score);
console.log(typeof (score));

let valueNumber = Number(score);
console.log(typeof valueNumber);
console.log(valueNumber);

//"33"  => 33
//"123abc" => NaN
// true => 1; false=>0;

let isLoggedIn = 1;

let bool = Boolean(isLoggedIn);

console.log(bool);

// 1=> true; 0=> false
//"" => false
//"mayuresh" => true

let someNumber = 33
let strNumber = String(someNumber);
console.log(strNumber);
console.log(typeof (strNumber));


// ********************* operations*************//
let val = 3
let ngvalue = -val
console.log(ngvalue);

//
let str1 = "Hello"
let str2 = "\t mayur"
let str3 = str1 + str2
console.log(str3);
// 
console.log("12"+3); // 123
console.log("1"+2+2); //122
console.log(1+2+"2"); // 32

//
let gameCounter = 100

console.log((gameCounter)++);

let gameCount = 100;

console.log(++(gameCount));

// 
let gameCounter1 = 200
console.log((gameCounter1)--);

let gameCount1 = 200
console.log(--(gameCount1));


