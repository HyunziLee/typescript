// Generics - 함수에 타입도 파라미터로 입력가능
// Generic 함수 장점: 
// 확장성이 조금 있어보임
// 매번 다른 타입 출력가능

function 함수<MyType>(x :MyType[]) :MyType{
  return x[0]
}

let a = 함수<number>([4,2])

// 타입파라미터 제한두기

// MyType2가 우측에 있는 속성을 가지고있는지 체크
function 함수2<MyType2 extends number>(x: MyType2){
  return x-1;
}
let b = 함수2<number>(100)

//tuple type: 위치까지 고려한 타입지정 가능
// tuple 안에 옵션표시 가능
let 멈머: [string, boolean?] = ['dog', true]

function 함수1(...x: [number,string]){

}
함수1(1,"p")

// array 합칠 때 spread 타입 지정
let arr2 = [1,2,3]
let arr3: [number, number, ...number[]] = [4,5, ...arr2]

// declare: 변수 재정의가 가능한 declare 문법 => 어딘가에 분명 변수 x가 있음 에러내지 말아주셈
// .js에 있는 변수를 .ts에서 이용하고 싶다.

// ts 이상한 특정:
// 모든 ts 파일은 ambient module(글로벌모듈)
// ts 파일은 ambient 모듈이 아니라 로컬 모듈로 만드는 법: import export 있으면 자동으로 로컬 모듈임

// 근데 갑자기 글로벌 변수로 만들고 싶어짐
declare global {
  type Dod = string;
}
export{}