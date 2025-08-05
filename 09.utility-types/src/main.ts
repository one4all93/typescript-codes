/**
 * 
 */

// Partial :: 인터페이스에 하나라도 일치하는 속성이 있으면 부분적으로 타입 지정가능
interface Address {
    email : string;
    address : string;
}

const me : Partial<Address> = {};
const you : Partial<Address> = {email : 'john@abc.com'}; 
const all : Address = {email : 'john@abc.com' , address : 'John'};

// Pick :: 인터페이스에서 필요한 속성만 가져와 타입으로 만들어줌
// type 타입명 = Pick<인터페이스명, 속성 | 속성 ....>
interface Todo{
    title : string;
    description : string;
    completed : boolean;
}

type TodoPreview = Pick<Todo, "title" | "completed">;

const todo : TodoPreview = {
    title : "Clean Room",
    completed : false,
}

// Omit :: 인터페이스에서 불필요한 속성만 빼고 가져옴
// type 타입명 = Omit<인터페이스명, 속성 | 속성 ....>
interface Todo2 {
    title : string;
    description : string;
    completed : boolean; 
    createdAt : number;
}

type TodoPreview2 = Omit<Todo2, "description">;

const todo2 : TodoPreview2 = {
    title : "Clean Room",
    completed : false,   
    createdAt : 123124, 
}

// Exlude

// Required :: 타입의 속성들을 모두 필수로 바꿔버림(속성들 모두 지정이 되어야 사용가능**)
type User = {
    firstName : string,
    lastName? : string,
}

let firstUser: User = {
    firstName: "John",
}

let secondUser : Required<User> = {
    firstName : "John",
    // lastName : "Doe",
}

// Record<Keys, Type> :: 지정한 키들을 모두 속성으로 가지는 객체 타입을 만듬
// 
interface CatInfo {
    age : number;
    breed : string;
}

type CatName = "miffy" | "boris" | "moerdred";

const cats : Record<CatName,CatInfo> = {
    miffy : {age: 10, breed : 'persian'},
    boris : {age: 5, breed : 'maine coon'},
    moerdred : {age: 16, breed : 'british shorthair'}
}

// ReturnType<T>

type T0 = ReturnType<()=> string>
type T1 = ReturnType<(s:string)=> void>

function fn(str:string){
    return str;
}

const a: ReturnType<typeof fn> = 'Hello';
const b: ReturnType<typeof fn> = true;

// 