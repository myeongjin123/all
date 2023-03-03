// let str = new String("hello javascript");
// let str = "hello javascript";
/* 
1. charAt(index) - index 번호에 해당하는 문자를 반환.
ex) str = "web he she"; str.charAt(2); => b
2. indexOf("찾을 문자"); - 찾은 문자의 인덱스를 반환. 없으면 -1 반환.
    lastIndexOf
 ex) str = "그는 정말 개쉬키."; str.indexOf("개쉬키"); <-> 있으면 반환, 없으면 -1
 match("찾을문자") - 찾은 문자를 반환, <-> null
 4. replace("바꿀문자", "새 문자");
 5. search("찾을 문자"); - 인덱스 번호 반환.
 6. slice(a, b) - a개의 문자를 자르고 b번째 이후를 자른 후 남은 문자를 반환
    ex) let str = "hello javascript"; 
    str.slice(3, 7);
7.substring(a, b); - a인덱스부터 b인덱스 이전 구간 반환
8.substr(a, 문자 개수) - a인덱스부터 지정된 문자 개수 만큼 
9. split("문자"); - 지정한 문자를 기준으로 문자 데이터를 나누어 배열에 저장
10.(덜 중요) toLowerCase();
11.(덜 중요) toUpperCase();
12.length - 문자열 길이
13.concat("새로운 문자") - 문자열 결합
14. charCodeAt(index) - 문자열 해당 인덱스의 아스키코드 값을 반환
15. fromCharCode(아스키코드 값); - 해당 문자를 반환.
16. trim(); - 문자 앞 뒤 공백을 제거
*/
// let str = "hello javascript"; 
// console.log(str.substring(3,7));

/* 
1. 인덱스 16에 저장된 문자를 출력
2. 문자열 왼쪽부터 제일 먼저 발견되는 you의 인덱스 값을 출력
3. 문자열 인덱스 16이후에 첫번째로 발견되는 you의 인덱스 값을 출력
4. 문자열 오른쪽부터 왼쪽방향으로 제일 먼저 발견되는 you의 인덱스 값
5. 문자열 인덱스 25부터 왼쪽 방향으로 제일 먼저 발견되는 you 인덱스 값
6. 왼쪽부터 첫 번쨰 발견되는 luck를 찾아 반환
7. search로 you를 찾아 인덱스값 반환
9. 문자 인덱스 21부터 4글자를 반환
9. 문자 인덱스 6부터 12까지 반환
10. 왼쪽부터 제일 먼저 발견되는 you를 me로 바꾸시오.
*/
const str = "Hello Thank you good luck to you";
console.log(str.length);
console.log(str.charAt(16));
console.log(str.indexOf("you"));
console.log(str.lastIndexOf("you"));
console.log(str.indexOf("you", 25))
console.log(str.indexOf("luck"));
console.log(str.search("you"));
console.log(str.substr(21, 4));
console.log(str.slice(6, 12));
console.log(str.replace("you", "me"));

let t = str.split(" "); //문자열을 공백기준으로 나누어 t라는 배열로 만듬
let tt = Array(); // 공백 배열을 하나 만듬
console.log(t);
for(let i = 0; i < t.length; i++){  // t배열의 크기만큼 루프를 돌리면서 you를 me로
tt[i] = (t[i].replace("you", "me")); // 바꾼 변수를 배열 tt에 저장
}
console.log(tt.join(" ")); // 배열 tt를 공백을 기준으로 합침
