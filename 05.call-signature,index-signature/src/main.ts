/**
 * 콜 시그니처
 *  - 함수타입을 객체처럼 정의함
 *  - 
 * 
 * 인덱스 시그니처
 *  - 속성 이름이 미리 정해지지 않은 객체를 다룰때
 *  - json 형태 데이터 다룰때
 *  - 키-벨류 형태 맴 객체 표현
 */


// interface getLikeNumber{
//     // 호출시그니처 (파라미터 : 파라미터 타입) : 리턴타입;
//     (like : number ) : number;
// }

// interface Post {
//     id : number,
//     title : string,
//     getLikeNumber: getLikeNumber;
// }

// const post1 = {
//     id : 1,
//     title : 'post 1',
//     getLikeNumber(like: number){
//         return like;
//     }
// }

// post1.getLikeNumber(1);

/**
 * 
 */

interface Post {
    [key:string]:unknown;
    id : number,
    title : string,
}

const post1: Post = {
    id : 1,
    title : 'post 1',
}

post1['desc'] = 'desc';
post1['pages'] = 300;


interface Names {
    [item: number]: string;
}

const userNames : Names = ['Jhon','Kim','Joe'];

