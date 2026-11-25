// 함수 정의 (선언)
function add(n1, n2) {
    return n1 + n2;
}
// 이 상태로 출력하면 출력되는게 없다.

// // 함수 호출
// let result = add(10, 30);
// console.log(result);

// // 이렇게 줄일 수 있음
// console.log(add(10, 30));

// 함수호출
let result = add;
console.log(result(10, 20));
// console.log(add(10, 30)); 와 같은 코드다

