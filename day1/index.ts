// Primitive type

const 이름 :string = 'kim';  // 변수명 :타입명
const age :number = 20;
const app :boolean = true;

const people :string[] = ['kim', 'park'];
const people2:{mem: string, mem2: string} = {mem: 'kim', mem2: 'park'}




// Union, any, unknown type

// union => 타입을 합쳐서 만들어진 새로운 타입임
const human :number | string =123; // number 또는 string 
// 할당을 하면, 할당된 변수의 타입으로 타입 확정됨. 근데 다른 타입으로 재할당하면 재할당된 변수 타입으로 변함 (가변적임)

// 숫자 또는 문자가 가능한 array/object타입 지정은?
const arr: (number | string)[] = [1,'2',3]; // const arr1: number | string[] = [1,'2',3] // number 또는 ['string'] 이거 뜻임

const obj: {a: string | number} = {a: '123'}

// unknown
// any보다 안전한 이유는 => 

let 이름2 :unknown;
이름2 = 123;
이름2 = {};
let 변수1 :string = 이름2;

// 왜 타입맞는데 +1 이 안됨?
let 나이 :string | number;
나이+1;

// string type +1 (허용)
// number type +1 (허용)
// string | number +1 (안됨)


// function parameter & return

function 함수(x: number) :number{
    return x*2;

}


// 리턴이 없을 때 :void => 실수로 뭔가 return하는걸 사전에 막을 수 있음
function 함수2(x: number) :void{
   
}

// 타입 지정된 파라미터는 필수임
// 파라미터가 옵션일 경우엔 ? 사용
function 함수3(x?: number) :void{

}

// 중요) 변수? : number는 
// 변수 :number | undefined와 같음

// Narrowing / assertion

// Narrowing 
function 함수4(x: number | string){
    
    if(typeof x === 'number'){
        console.log(x+3);
    }

    console.log(x+3); // 애매한 타입이여서 에러뜸;

}

/// assertion (=타입 덮어쓰기, (유니온 타입 확정할 때 사용))
function 함수5(x: number | string){
    let arr :number[] = [];
    arr[0]= x as number; // 왼쪽의 변수를 number로 덮어써주삼 이 뜻임



}
// assertion 용도 
// 1. Narrowing 할 때 
// 2. 무슨타입이 들어올지 100% 확신할 때 
// 거의 안쓰면 됨 -> 근데 언제쓰냐? => 남이 짠 코드 수정할 때, 왜 타입 에러가 나는지 모르겠을 때

// 안됨 예시
let 이름3 :string = 'kim';
이름 as number;


// type alias
type Animal = string | number | undefined

let 동물 :Animal;
// let 동물 :string | number | undefined;

let 동물2 :{name: string, age: number}

// type 변수 작명 관습: 시작 대문자

//typescript쓰면 object 자료 수정 막을 수 있음
type Human = {
    readonly name: string // 읽기 전용으로 수정 불가
}
const human1: Human = {
    name: '엠버'
}