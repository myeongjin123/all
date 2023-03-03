// Math.abs() //절댓값을 반환
// math.max(1,5,100); //최댓값
// math.min(1,5,100); //최소값
// math.pow(5, 2); //거듭제곱값 5의제곱

// Math.random() //0과 1사이의 난수
// Math.round(숫자) // 소수점 첫째 자리에서 반올림한 정수
// Math.ceil(숫자) //소수점 첫째 자리에서 무조건 올림한 정수
// Math.floor(숫자) // 소수점 첫째 자리에서 무조건 내림한 정수
// Math.sqrt(숫자) //숫자의 제곱근
// Math.PI (원주율)
// 1. 10, 5, 8, 30중 가장 큰 수를 구하라
// 2. 10, 5, 8, 30중 가장 작은 수를 구하라

// 변수 num = 2.13215.이다.
// 3.num을 반올림 한 수를 구하라.
// 3.num을 소수점 첫째 자리 내림 한 수를 구하라.
// 3.num을 소수점 첫째 자리 올림 한 수를 구하라.
// 6. 0부터 1사이의 난수를 발생 시켜라.
// 7. 원주율 상수를 출력하라.
// 8.0부터 30사이의 난수를 발생 시켜라

console.log(Math.max(10, 5, 8, 30));
console.log(Math.min(10, 5, 8, 30));

const num = 2.13215;
console.log(Math.floor(num));
console.log(Math.ceil(num));

let num2 = (0,1);
console.log(Math.random(num2));

console.log(Math.PI);

console.log(Math.floor(Math.random()*31));


