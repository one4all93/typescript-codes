"use strict";
// Boolean
let boolean;
let falseBoolean = false;
// Number
let number;
let integer = 6;
let float = 1.2345;
// String
let string;
let firstName = "Dong Joon";
// Array
// 한가지 타입만 가지는 배열
let names1 = ["Dong Joon", "Lee", "Kim"];
let names2 = ["Dong Joon", "Lee", "Kim"];
// 여러가지 타입을 가지는 배열(유니언 타입 사용)
let array1 = ["Dong Joon", 1, "Lee", 2, "Kim", 3];
let array2 = ["Dong Joon", 1, "Lee", 2, "Kim", 3];
// 여러 타입을 단언 X any
let someArray = ["Dong Joon", 1, [], {}, false];
// Interface, type
// 읽기 전용 배열 생성(readonly, ReadonlyArray)
let stringArray = ["Dong Joon", "Lee", "Kim"];
let numberArray = [1, 2, 3];
// stringArray.push("Park") // Error: Property 'push' does not exist on type 'readonly string[]'.
// numberArray[0]=4 // Error: Property 'push' does not exist on type 'readonly number[]'.
// Tuple
let tuple1;
tuple1 = ["Dong Joon", 1];
// tuple1 = ['a',1,2]
// tuple1 = [1,'a']
let users;
users = [
    [1, "Dong Joon"],
    [2, "Lee"],
    [3, "Kim"]
];
let tuple2;
tuple2 = ["Dong Joon", 1];
tuple2.push(2);
console.log(tuple2); // ["Dong Joon", 1, 2]
// any
let any = 'abc';
any = 1;
any = [];
// unknown
let unknown = 123;
//let string : string = unknown; // Error: Type 'unknown' is not assignable to type 'string'.
let string2 = unknown; // Type assertion
// object
let obj = {};
let arr = [];
//let null: object = null;
let date = new Date();
const obj1 = {
    id: 1,
    tit: 'tit1',
    description: 'description'
};
// union
let union;
union = 'hi';
union = 123;
//union = []
// Function
let func1;
func1 = function (x, y) {
    return x * y;
};
let func2;
func2 = function () {
    console.log('hi');
};
// Null, Undefined
// let number1 : number = undefined;
// let string9 : string = null;
// let object : {a:10,b:false} = undefined;
// let array : any[] = null;
// let undefined1 : undefined = null;
// let null1 : null = undefined;
// let void1 : void = null;
let void2 = undefined;
// void
function greeting() {
    console.log('hi');
}
// never
function throwError() {
    throw new Error('error');
}
function keepProcessing() {
    while (true) {
        console.log('hi');
    }
}
const never = [];
never.push(1);
