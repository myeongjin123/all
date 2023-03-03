const greenAir = ["교대", "방배", "강남"];
const yellowAir = ["미금", "정자", "수서"];

//splice, pop, shift, push, unshift

greenAir.splice((2, 1),2, "서초","역삼"); //2번 인덱스부터 1개 , 배열 자체를 변화 시킨다.
console.log(greenAir);

let rs = yellowAir.pop();
console.log(yellowAir, rs); //수서

let rs2 = yellowAir.shift();
console.log(yellowAir, rs2);//미금

yellowAir.push(rs);
yellowAir.unshift(rs2);
console.log(yellowAir);