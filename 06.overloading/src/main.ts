/**
 * 함수 오버로딩
 *  - 같은 이름의 함수를 같이 사용할 수 있는 것 
 *    (덮어써진다는 느낌이기는 한데, 
 *    이전에 선언된 함수들이 각각 값을 리턴해줘서 그냥 같은 이름으로 묶인다고 생각하는게 좋을듯)
 */

function add(a: string,b:string): string;
function add(a: number,b:number): number;

function add(a: any,b:any): any{
    return a+b;
};

add("hello","hellow");
add(1,1);

// function saySomthing(word:string | string[]) : string{
//     if(typeof word === "string"){
//         return word;
//     }else if(Array.isArray(word)){
//         return word.join(' ');
//     }
//     throw new Error("enable to sy somthing");
// }

function saySomthing(word:string): string
function saySomthing(word:string[]) : string

function saySomthing(word:any): any{
    if(typeof word === "string"){
        return word;
    }else if(Array.isArray(word)){
        return word.join(' ');
    }
    throw new Error("enable to sy somthing");
}

saySomthing(['hello','world'])

