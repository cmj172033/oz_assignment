// 변수 (variable)

// y = 2x + 1
// name = "alex"
// 바뀌는거보다 
// 컴퓨터 안에서는 무슨 일이 일어날까? (어떻게 동작할까?)
// 우변에 있는 값을 좌변에 할당한다.
// 10 = 20 은 안됨 (변수이름으로 숫자는 허용 x)

// old_name = "alex"
// name = old_name
// "alex"를 old_name에 할당
// old_name 을 name에 할당
// --> "alex"는 old_name이면서 name이다.

// => 주소에 의한 참조
// (전반적인 프로그로밍에 포함되는 개념)

// let : ~로 하자
let age = 20;
age = 30;

console.log(age);

// 상수 (Constant) : 변하지 않는 값, 일정한 값 / 재할당이 불가
const pi = 3.141592
