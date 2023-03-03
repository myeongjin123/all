// const tv = {
//     com: "LG",
//     size: "100icnh",
//     color: "white",
//     price: "5,000,000원",
//     start: function(){
//         console.log(this.com + "의" + this.size + " tv를 켭니다.");
        
//     },
//     stop: function(){
//         console.log(this.com + "의" + this.size + "tv를 끕니다.");
//     }
// }
// tv.start();
// tv.stop();

//생성자 함수 ---> new라는 키워드를 통해 함수를 불러온다.
// const tv = new Object();
// tv.com = "LG";
// tv.size = "100인치";
// tv.color = "흰색";
// tv.start = function(){
//     console.log(this.com + "의" + this.size + " tv를 켭니다.");
// }
// tv.start();

//날짜 객체
// const thisDate = new Date();
//     console.log(new Date);
// const dt = new Date();
//날짜 관련 메서드
// const nyear = dt.getFullYear()//연도
// console.log(nyear);
// const nMonth = dt.getMonth()+1; //배열 0~11
// const nDate = dt.getDate();
// const nHours = dt.getHours();
// const nMinute = dt.getMinutes();
// const nSeconds = dt.getSeconds();
// const nmSeconds = dt.getMilliseconds();
// console.log(nMonth);

//2023년 2월 7일 화요일 00시
// console.log(nyear + "년 " + nMonth +"월" + nDate + "일 " + nHours +"시"
// )
// `${변수명} 문자열 $(변수명)""
// let nnDay;
// switch(nday){
//     case 0:
//         nnday = "일";
//         break;

//         case 1:
//             nnday = "월"
//             break;
// }
// if(nDay == 0){
//     nnDay = "일";   
// }else if(nDay == 1){

// }
// const myDay = ["일","월","화","수","목","금","토"];
// const nDay = dt.getDay()


// const nowDate = `오늘은 ${nyear}년 ${nMonth}월${nDate}일 ${myDay[nDay]}요일 ${nHours}시 입니다.`;
// console.log(nowDate);

// const myBirth = new Date (1999,02,18);
// const theMonth = myBirth.getDay();
// console.log(`명진이가 태어난 날은 ${myDay[theMonth]}요일 입니다.`);

// console.log(myBirth);


// const ngettime = dt.getTime();
// console.log(ngettime);
//2023년 연말까지 남은 일수 계산
const dt = new Date();
const nYear = dt.getFullYear()//연도
const nMonth = dt.getMonth()+1; //배열 0~11
const nDate = dt.getDate();


const toDay = new Date();
const nowYear = toDay.getFullYear();
const theDate = new Date(nowYear, 11,31);

const diffDate = theDate.getTime() - toDay.getTime();
const result = Math.ceil(diffDate/(60*60*24*1000));
console.log(`연말까지 ${result}일 남았다!`);