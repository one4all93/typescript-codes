/**
 *  generics
 *  :: 타입을 함수나 컴포넌트가 사용 시점에 외부에서 주입받도록 해주는 기능
 *  - 여러타입의 데이터가 들어올것을 대비해서 여러 타입을 받을 수 있게 해주고, 
 *    호출시 명확한 타입을 명시해줌
 *  - 제네릭을 사용하면 재사용성이 높은 함수와 클래스를 생성할 수 있다.
 *  - any타입 처러머 타입을 직접 지정하지 않지만, 타입을 체크해 컴파일가 오류를 찾을 수 있음
 *  + 컴포넌트에 props로 어떠한 값이 들어올지 모르기에 제네릭을 사용함**
 */

// function getArrayLength(arr: number[] | string[] | boolean[]) : number{
//     return arr.length;
// }

const array1 = [1,2,3];
const array2 = ["a","b","c"];
const array3 = [true,false,true];

getArrayLength(array1);
getArrayLength(array2);
getArrayLength(array3);

// function getArrayLength<T>(arr:T[]) : number{
function getArrayLength<T>(arr:T[]) : number{
    return arr.length;
}

getArrayLength<number>(array1);
getArrayLength<string>(array2);
getArrayLength<boolean>(array3);

interface Vehicle<T> {
    name : string;
    color : string;
    option : T;
}

const car:Vehicle<{price:number}> = {
    name: 'Car',
    color: 'red',
    option : {
        price : 1000
    }
}

const bike:Vehicle<boolean> = {
    name: 'bike',
    color: 'green',
    option : true,
}


const makeArr = <X,Y>(x:X,y:Y):[X,Y] => {
    return [x,y];
}

const array = makeArr<number,number>(4,5);
const array = makeArr<string,string>("a","b");


const makeArr1 = <X,Y = string>(x:X,y:Y):[X,Y] => {
    return [x,y];
}

const array1 = makeArr1<string>("a","b"); 

const makeFullName = <T extends {firstName : string, lastName : string}>(obj: T) => {
    return {
        ...obj,
        fullName: obj.firstName + " " + obj.lastName
    }
}

makeFullName({firstName: "John", lastName: "Doe", location: "Seoul"});
makeFullName({firstName: "John", lastName: "Doe", hello: "Greeting"});