const currentYear = new Date().getFullYear(); // 현재 연도 가져오기, 값 변경이 없으므로 const 선언
let birthyear;
let age;

//prompt() 함수: 사용자에게 입력창을 띄워 입력 할 수 있도록 함, 문자열로 입력됨
//  웹 화면에서 간단하게 입력 해 주는 창을 띄워줌
birthyear = prompt("태어난 연도를 입력하세요(YYYY): ", " ");
age = currentYear - birthyear + 1;
// 웹화면에 출력
document.write(currentYear + "년 현재<br>");
document.write(
  birthyear + "년에 태어난 사람의 나이는 <b>" + age + "</b>세 입니다."
);
