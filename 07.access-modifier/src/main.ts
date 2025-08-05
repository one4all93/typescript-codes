/**
 * 접근제어자
 *  - 클래스의 속성이나 메서드에 '외부에서' 접근할 수 있는 범위를 제어하는 기능입니다.
 *  - public(defalt) :: 지정안하면 public
 *  - private :: 부모자식 상속에서만 접근가능
 *  - protected :: 클래스만 가능
 */

class Post{
    // 이렇게 초기에 클래스내에 속성을 지정해주어야함
    // id: number =0;
    // title : string ="";

    // 위에 처럼 안하려면 직접 접근제어자 + 속성 지정 가능한데, 
    // 타입스크립트에서는 초기값도 같이 지정가능
    constructor(
        private id:number = 0,
        protected title: string = ""
    ){
        this.id = id;
        this.title = title;
    }

    getPost(){
        return `postId ${this.id}, postTitle: ${this.title}`;
    }
}

class PostB extends Post{
    getPost(){
        return this.title;
    }
}


const post:Post = new Post(1,"title 1");


console.log(post.id);
console.log(post.title);
