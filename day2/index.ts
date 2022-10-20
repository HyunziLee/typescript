// Literal Types : 변수에 뭐가 들어올지 더 엄격하게 관리 가능, 자동완성 힌트 굿
// 더엄격한 타입지정 가능

let 이름5: 123;

이름5 = 456;

let 접니다 : '대머리' | "솔로";
접니다 = 긴머리; 

function 함수(a: 'hello') :1 | 0{
  return 1
}
함수('hello')

function 가위바위보(a: '가위'|'바위'|'보') : ('가위'|'바위'|'보')[]{
  return ['가위']
}

// Literal type의 문제점

// 솔루션 1: object 만들 때 타입지정 확실히 하셈
// 솔루션 2: as 문법으로 타입 구라
// 솔루션 3: as const 키워드 쓰든가 => as const 뜻 object는 literal type 지정 알아서 해주셈
// => 효과 1: object value 값을 그대로 타입으로 지정해줌
// => 효과 2: object 속성들에 모두 readonly 붙여줌
var 자료 = {
  name: 'kim'
}

// 'kim'이라는 자료만 들어올 수 있습니다 x
// 'kim' 이라는 타입만 들어올 수 있습니다. o
function 내함수(a: 'kim'){

}

//method types
// type alias에 함수 type 저장해서 쓰는법
// 1. 합수타입은 ()=>{} 모양으로
// 2. 함수 표현식에만 type alias 사용 가능 

type 함수타입 = (a: string)=> number

const 함수7:함수타입 = ()=>{
  return 4;
}
// object안의 함수 타입지정 어떻게?
let 회원정보 = {
  name: 'kim',
  plusOne(a){
    return a+1;
  }
}

//Typescript DOM Manupulation
// html 조작시 narrowing 방법 5개
// 2. instanceof 연산자 (가장 많이 사용하게 될거임) = > 왼쪽에 있는 오브젝트가 오른쪽 클래스의 자식이냐 이뜻임
// 3. as로 사기치기 (타입 100% 확신할 때 써야함, 근데 사용하면 안됨)
// 4. 오브젝트에 붙이는 ?. => 왼쪽에 있는 오브젝트에 오른쪽에 있는게 있으면 출력해주고, 없으면 undefined 뱉으셈


// class types
class Person{
 // data = 0; // class 필드값(constructor와 똑같은 역할)
 name: string;
 constructor(){
  this.name = 'kim' 
 }
 힘수(a: string){
  console.log(a)
 }
}
// 타입스크립트 constructor에 값을 쓸 때는 바깥에 필드값이 있어야함



let 사람1 = new Person()
let 사람2 = new Person()

// 오브젝트는 type키워드로 타입변수 생성 가능 interface 키워드도 타입변수 생성가능
interface Square  {color: string, width: number}
let 네모 = {
  color: 'red',
  width: 100
}

// interface 장점: extends로 복사 가능
/*
interface Student {
  name: string
}

interface Teacher {
  name: string,
  age: number
}
 */
// =>
interface Student {
  name: string
}

interface Teacher extends Student{
  
  age: number
}


let 학생 :Student = {name: 'kim'}
let 선생 :Teacher = {name: 'kim', age: 20}
// interface 와 type 뭐가 다름
// interface는 중복선언 가능 (합쳐짐)
// type은 중복선언 불가능

// 외부라이브러리같은 경우 interface 많이 씀
// 다른 사람이 이용많이 할 것 같으면 object 타입정할 때 interface 쓰셈

// & 기호(intersection type) => 왼쪽도 만족하고 오른쪽도 만족하는 타입을 새로 생성해주셈 (복사랑은 개념이 다름)
type Animal2 = {name: string}
type Cat = {age: number} & Animal2
// & 쓸 때 중복속성 발생하면 - > 미리 에러안나서 주의, 쓸 때 에러남


// rest parameter / destructuring

// type이 number만 들어올 수 있어야한다면
function 함수6(...a: number[]){
  console.log(a)
}
함수6(1,2,3,4,5,5)

// type이 string 또는 number 또는 number만 들어올 수 있어야한다면
function 함수8(...a: (number | boolean | string)[]){
  console.log(a)
}
함수6(1,2,3,4,5,5)

// 파라미터 destructuring시 타입지정 방법

let {student, age1} = {student: true, age1: 20}
let 오브젝트 = {student: true, age1:20}

type Obj = {
  student: boolean,
  age1: number
}
function 함수9({student, age1}: Obj){
  console.log(student, age1)
}

함수9({student: true, age1:20})

// type narrowing2 
// null & undefined 타입체크하는 경우 매우 잦음
// 1. && 연산자로 null & undefined 타입체크
function 함수10(a: string | undefined){
  if(a && typeof a === 'string'){

  }
} // a가 undefined 면 if문 실행 x
 // a 가 string이면 if문 실행 o

 // typeof 연산자는 number, string, boolean, object 이런식으로만 판정가능
 type Fish = {swim: string}
 type Bird = {fly: string}

 // 2. in키워드로 object narrowing 가능
 // 속성명 in 오브젝트자료
 function func(animal: Fish | Bird){
  if('swim' in animal ){
    animal.swim
  }
 }

 //3. instanceof 연산자로 object narrowing 가능
 // => 오브젝트 instanceof 부모class

 // object 타입이 둘다 비슷하게 생겼는데 narrowing 어떻게함?
 // 비슷한 오브젝트 타입일 경우 literal type 강제로 만들어두면 나중에 도움됨

 type Car = {
  wheel : '4',
  color: string
 }

 type Bike = {
  wheel : '2',
  color: string
 }
 
 function 함수11(x: Car | Bike){
  if(x.wheel === '4'){

  }
 }


 // never type
 // function return 값에 붙일 수 있는 never type
 // 조건 1. return 값이 없어야함
 // 조건 2. endpoint가 없어야함
 // 실제 코딩생활에서 never타입 쓰는 법
 // 대부분 쓸데 없음 => :void 쓰면됨

 // never 타입은 코드 이상하게 짜면 출몰함
 function 함수12(p: string){
  if(typeof p === 'string'){
    console.log(p)
  } else{
    console.log(p) // type never 뜸 왜냐면, 타입을 문자열로 선언했고, 위에 함수는 무조건 스트링만 들어올 수 있음 그래서 else에 걸릴일이 없음
  }
 }

 // never 타입 등장하는 경우2 
 // 어떤 함수표현식은 return타입이 자동으로 never
 let fun11 = function(){
  throw new Error()
 }

 // public, private
 // 객체지향언어 같은 문법도 제공함
 // public, private, protected, static 키워드
 
 // class에서 쓰는 public 키워드 - public 붙으면 모든 자식들이 이용가느
 class User {
  public name = 'kim'
  constructor(a){
    this.name = a
  }
 }
 let user1 = new User('park')

 // class에서 쓰는 private 키워드 - private 붙으면 class안에서만 수정, 이용가능
 class User2 {
  private name = 'kim'
  constructor(a){
    this.name = a
  }
 }
 let user2 = new User2('park')
 user2.name

 // public 키워드쓰면 this. 어쩌구 생략가능
 class User3 {
  
  constructor( public name: string){
   
  }
 }


 