// 정규표현식(Regular Expression): 특정 패턴을 정의 해 문자열을 검색, 대체, 추출하는데에 사용
// 정규표현식 생성 방법: 리터럴 방식(/), RefExp 객체 사용 방식
// const regex = new RegExp("World");
const regex = /World/; //리터럴 방식을 더 많이 사용 함
let inputStr = "Hello World~";
console.log(regex.test(inputStr)); // test(): 해당 문자열이 포함되어있으면 true, 없으면 false 반환

const regex2 = /가장/;
//exec(): 문자열에서 패턴에 일치하는 첫 번쨰 결과를 반환
console.log(regex2.exec("안녕하세요. 가장 큰 실수는 포기입니다."));

const inputText =
  "010-5006-4146 ajsjdoedjdsjdsje 010-1234-5678asdf 011-123-2345";
const regNumber = inputText.match(/\d{3}-\d{3,4}-\d{4}/g);
console.log(regNumber);
