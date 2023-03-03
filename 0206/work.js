// let str = {
//     name:"철수",
//     age : 30,
//     gender:"남자"
// }
// console.log(typeof str);
// console.log(str.name);
// console.dir(str['age']);

// str.gender = "여자";
// console.log(typeof str);
// console.log(str.name);
// console.dir(str["gender"]);

// str.job = "백수";
// console.log(str.job);

// function myFunction(x, y){
//     return x * y;
// }
// console.log(myFunction (5,4));

// let result = function(){
//     return 5 * 10;
// }
// console.log(result());

// let result = () => {
//     return 5 * 10
// }
// console.log(result());
// const person = {
//     firstNmae : "철수",
//     lastName : "안",
//     age : 60,
//     fullName : function(){
//         return this.lastName + " " + this.firstNmae
//     }
// }
// const result = "나이는" + person.age +"이며 이름은 " + person.fullName() + "이다.";
// console.log(result);  


//car 라는 객체를 만들고 회사명 : 포르쉐 자동차명 : 718, 승차인원:1명
//메소드 자동차가 출발 합니다.

//출력 포르쉐의 718 모델 자동차가 출발합니다.

let car = {
    name : "porche",
    model : "718",
    person : 1,
    full : function(){
        return this.name + " " + this.model;
    }
}
let result = car.full() + "가 승객" + car.person + "명을 태우고 출발합니다.";  
console.log(result);
