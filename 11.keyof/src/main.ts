/**
 * keyof :: 타입에서 키를 추출해야할때 사용
 */

interface IUser {
    name : string;
    age : number;
    address : string;
}

type UserKeys = keyof IUser
// "name" | "age" | "address"

const user = {
    name : "John",
    age : 20,
    address : 'seoul',
}

type UserKeyss = keyof typeof user

enum UserRole {
    admin,
    manager
}

type UserRoleKeys = keyof typeof UserRole