let phoneNum = "010-1234-5678";
let result1 = phoneNum.substring(phoneNum.length - 4, 0);
console.log(result1, "****");

let imgSrc = "imgaes/bnt_out.jpg";
let result2 = imgSrc.replace("out.jpg", "over.jpg");
console.log(result2);

const menu = ["짜장면", "돈가스", "된장국", "김치찌개", "회덮밥"];
const menuNum = Math.floor(Math.random() * menu.length);
console.log(menu[menuNum]);

//웹 브라우저의 운영체제와 모니터의 크기를 구하여 화면에 출력시키세요.
//예) 윈도우 -1200px * 800px
     //애플 -1980 * 1200px