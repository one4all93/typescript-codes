/**
 * extends vs implements
 *  - extends :: 부모 클래스에 있는 프로퍼티나 메소드를 상속해서 사용할 수 있음
 *  - implements :: 새로운 클래스의 타입 체트를 위해서 사용됨,
 *                  그 클래스의 모양을 정의할때 사용함 == 상속한 클래스나 인터페이스의 속성이 정의되어야함
 */

class Car {
    mileage = 0;
    price = 100;
    color = 'white';
    
    drive(){
        return 'drive!';
    }

    brake(){
        return 'brake!';
    }
}

interface Part {
    seats : number;
    tire : number;
}

class Ford implements Car,Part {
    mileage = 0;
    price = 2;
    color = 'white';
    seats = 4;
    tire = 4;

    drive(){
        return 'drive!';
    }

    brake(){
        return 'brake!';
    }
}

const myFordCar = new Ford();