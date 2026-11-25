// 논리 연산자
// 파이썬에서는 and, or 
// 참/거짓 조건을 조합해서 사용

// 모든 인간은 죽는다 // 소크라테스는 인간이다 (전제)
// 소크 -> 인간 -> 죽는다 / 소크라테스는 죽는다

let age = 20;
let hasId= true;

console.log(age >= 19 && hasId);  // true
// &&는 둘다 참일때만 참인 조건 (그리고, and)
console.log(age < 20 || !hasId);  // false
// ||는 둘 중 하나가 참이어도 참 (또는, or)

