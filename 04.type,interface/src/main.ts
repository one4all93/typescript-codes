/**
 * interface
 *  - 선언병합 가능 :: 같은 이름으로 선언하면 같은 이름끼리 병합됨
 *  - 객체구조 정의
 *  - extends, 병합 가능 (확장에 유리)
 *  - 클래스, 객체 정의 시
 * Type
 *  - 선언병합 불가능
 *  - 모든 타입 정의 (객체/유니온/튜플 등)
 *  - extends, &로 확장 가능 (하지만 병합 불가)
 *  - 복잡한 타입 조합, 유니언/튜플 등
 */

// interface Animal {
//     name : string;
// }

// interface Bear extends Animal{
//     honey : boolean;
// }

// const bear1 : Bear = {
//     name : 'honey bear',
//     honey : true,
// }

type Animal = {
    name : string;
}

type Bear = Animal & {
    honey : boolean;
}

const bear1 : Bear = {
    name : 'honey bear',
    honey : true,
}



