// Boolean
let boolean : boolean
let falseBoolean : boolean = false

// Number
let number : number
let integer : number = 6
let float : number = 1.2345

// String
let string : string
let firstName : string = "Dong Joon";

// Array
// 한가지 타입만 가지는 배열
let names1 : string[] = ["Dong Joon", "Lee", "Kim"]
let names2 : Array<string> = ["Dong Joon", "Lee", "Kim"]

// 여러가지 타입을 가지는 배열(유니언 타입 사용)
let array1: (string | number)[] = ["Dong Joon", 1, "Lee", 2, "Kim", 3]
let array2: Array<string | number> = ["Dong Joon", 1, "Lee", 2, "Kim", 3]

// 여러 타입을 단언 X any
let someArray: any[] = ["Dong Joon", 1, [], {}, false]

// Interface, type

// 읽기 전용 배열 생성(readonly, ReadonlyArray)
let stringArray: readonly string[] = ["Dong Joon", "Lee", "Kim"]
let numberArray: ReadonlyArray<number> = [1, 2, 3]

// stringArray.push("Park") // Error: Property 'push' does not exist on type 'readonly string[]'.
// numberArray[0]=4 // Error: Property 'push' does not exist on type 'readonly number[]'.

// Tuple
let tuple1: [string, number]
tuple1 = ["Dong Joon", 1]
// tuple1 = ['a',1,2]
// tuple1 = [1,'a']

let users : [number, string][]
users = [
    [1, "Dong Joon"],
    [2, "Lee"],
    [3, "Kim"]
]

let tuple2 : [string, number]
tuple2 = ["Dong Joon", 1]
tuple2.push(2)
console.log(tuple2) // ["Dong Joon", 1, 2]