// 자바스크립트의 조건문은 if, if ~ else, if ~ else if else, switch ~ case 등이 존재.
// 반복문은 while, do ~ while, for(초기값;최종조건;증감값),
// for ~ in(객체반복), for ~ of (이터러블 객체 순회)
//switch문
// let num = new Date().getDay(); // 주중 몇번째 요일인지를 의미함
// let day = null;
// switch (num) {
//   case 0:
//     day = "일요일";
//     break;
//   case 1:
//     day = "월요일";
//     break;
//   case 2:
//     day = "화요일";
//     break;
//   case 3:
//     day = "수요일";
//     break;
//   case 4:
//     day = "목요일";
//     break;
//   case 5:
//     day = "금요일";
//     break;
//   case 6:
//     day = "토요일";
//     break;
//   default:
//     console.log("잘못된 요일 입니다.");
// }
// console.log(`오늘은 ${day} 입니다.`);

//반복문
for (let i = 0; i < 100; i++) {
  console.log(i);
}

const brands = ["애플", "구글", "엔비디아", "현대자동차", "테슬라", "아마존"];
//기본적인 순회방식
for (let i = 0; i < brands.length; i++) {
  console.log(brands[i]);
}
// for ~ of: 이터러블 객체를 반복 순회
for (const e of brands) {
  console.log(e);
}
//for ~ in: 객체의 속성을 반복하는데 사용
const person = {
  name: "장원영",
  age: 20,
  addr: "서울특별시 강남구 역삼동",
};

for (const key in person) {
  console.log(person[key]);
}
