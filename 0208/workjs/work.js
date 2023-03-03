//배열 --1. 원소의 걋구, 배열순서 ,원소를 추가,원소 삭제
//배열을 만드는 법 3가지
// let myArr = [1, 2, 3, ,4, 5];
// let myArr2 = new Array (1, 2, 3, 4, 5);
// let myArr3 = new Array();
// myArr3[0] = 1;
// myArr3[1] = 2;
// myArr3[2] = 3;
// myArr3[3] = 4;
// myArr3[4] = 5;

let myIntros = [20, "홍길동", "프로그래머", 30000, true, 0];
// // console.log(myIntros[2]);

// //배열의 갯수 = 배열변수.length;
// console.log(myIntros.length);
for(let i = 0; i < myIntros.length; i ++){
console.log(`myIntros 배열의 ${i}번째 원소의 내용은 ${myIntros[i]}입니다.`)
}
console.log(myIntros.length);

// for(i in myIntros) {
//     console.log(`myIntros 배열의 ${i}번째 원소의 내용은 ${myIntros[i]}입니다.`)
// }

// join(연걸하는 문자) - 배열의 원소를 연결하는 문자를 기준으로 연결하여 1개의 문자형으로 만듬.
// reverse() - 배열의 객체데이터(배열의 원소) 순서를 거꾸로 바꾼 후 반환.
// sort() - 배열의 객체데이터를 오름차순으로 정렬
// slice(index1, index2) - 배열의 객체데이터를 원하는 인덱스 구간만큼 잘라서 배열객체로 가져옴
// splice() - 배열 객체의 지정 데이터를 삭제하고 그 구간에 새 데이터를 삽입
// concat() - 2개의 배열을 하나로 결합
// pop() - 지정된 데이터 중 마지막 인덱스에 저장된 데이터를 삭제
// shift() - 저장된 데이터 중 첫 번째 인덱스에 저장된 데이터를 삭제
// push(새로운 데이터) - 마지막 인덱스에 새로운 데이터를 삽입
// unshift(새로운 데이터) - 첫 번째 인덱스에 새로운 데이터를 삽입
// length - 배열데이터의 갯수를 반환.
// const arr_1 = ["사당", "교대", "방배", "강남"];
// const arr_2 = ["신사", "압구정", "옥수"];
// let result = arr_1.join("->");
// console.log(result);

// result = arr_1.concat(arr_2);
// console.log(result);

// result = arr_1.slice(2, 3); //배열 1번 이전의 인덱스 요소를 잘래내고 남은 값을 반환
// console.log(result);

// arr_1.sort();
// console.log(arr_1);

// arr_2.reverse();
// console.log(arr_2);