const bodyElement = document.querySelector('body') as HTMLBodyElement;
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