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

// any
let any : any = 'abc'
any = 1;
any = [];

// unknown
let unknown : unknown = 123;
//let string : string = unknown; // Error: Type 'unknown' is not assignable to type 'string'.
let string2 : string = unknown as string; // Type assertion

// object
let obj: object = {};
let arr: object = [];
//let null: object = null;
let date: object = new Date();

const obj1: {id : number , tit : string , description : string} = {
    id : 1,
    tit : 'tit1',
    description : 'description'
}

// union
let union: (string | number)
union = 'hi';
union = 123;
//union = []

// Function
let func1:(arg1:number , arg2:number) => number;
func1 = function(x,y){
    return x*y;
}

let func2 : () => void;
func2 = function(){
    console.log('hi')
}

// 로그 디버깅 함수로 사용하면 될듯***
let myLog : (msg: string) => void;
// 줄라인도 같이 넣어주면 좋을듯
const log = (msg: string , object: any) => {
  console.log(`[LOG]: ${msg}` , object);
};

// Null, Undefined
// let number1 : number = undefined;
// let string9 : string = null;
// let object : {a:10,b:false} = undefined;
// let array : any[] = null;
// let undefined1 : undefined = null;
// let null1 : null = undefined;
// let void1 : void = null;

let void2 : void = undefined;

// void
function greeting() : void{
    console.log('hi');
}

// never
function throwError() {
    throw new Error('error');
}

function keepProcessing() : never{
    while(true){
        console.log('hi');
    }
}

const never : number[] = []
never.push(1);