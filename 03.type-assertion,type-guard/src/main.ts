/**
 * 타입단언
 *  해당 객체의 타입을 확실하게 알때 타입스크립트에게 알려주는 것.
 * 타입가드
 *  해당 객체가 null반환할때 미리 확인해서 막아주는 것.
 */

/** interface로 미리 값 지정해주면 객체에도 타입 지정 가능
 * 타입에러 우회
 */
interface Foo{
    bar : number;
    bas : string;
}

var foo = {} as Foo;
foo.bar = 123;
foo.bas = 'hellow';



/** index.html에 body가 없을 수도 있다고 생각하기때문에  
 * const bodyElement = document.querySelector('body') 이렇게만 지정하면 
 * 오류가 발생함 => 빈값이라고 판단을 해서 null이라고 값이 나오기때문
 *  - const el: Element | null
 * bodyElement!.innerText = "Hello World!"; !를 붙이면 무조건 있다고 알려주는것 :: 오류 없앰
*/
// 1) as HTMLBodyElement붙여주기 
// :: as를 사용해서 타입단언(type assertion)해주면서 이 객체는 내가 아는 타입이라야하고 알려줌
const bodyElement = document.querySelector('body') as HTMLBodyElement;
// 해결방법 / !를 붙이는 방법은 런타임상황에서 해당 객체가 없으면 null에러 터짐(주의)
// 2) bodyElement!.innerText = "Hello World!"; 
//                      or 
//    const bodyElement = document.querySelector('body')!
// 3) if(bodyElement){      타입가드 :: if문 제어가 가장 안전(다른방법들 모두 null반환을 막지않음, 이 방법은 조건으로 실행차단)
//     bodyElement.innerText = "Hello World!";
// }
bodyElement.innerText = "Hello World!";

// const bodyElement = document.querySelector('body');
// bodyElement!.innerText = "Hello World!";



function func(arg: string | null){
    if(arg){
        return arg?.toLowerCase();
    }
}

func('hello');
func(null);