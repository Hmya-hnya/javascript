// 세개의 수를 입력받아서 가장 큰 수와 작은 수를 화면에 출력하기
// prompt로 입력받은 값은 문자열이므로 숫자로 변경하기 위해서는
// Number()함수로 형을 변경해야 함.

let a = Number(prompt("첫번째 수 입력 : ", ""));
let b = Number(prompt("두번째 수 입력 : ", ""));
let c = Number(prompt("세번째 수 입력 : ", ""));
let max, min;

max = Math.max(a, b, c);
min = Math.min(a, b, c);

document.write("<p>제일 큰 값 : " + max + "</p>");
document.write("<p>제일 작은 값 : " + min + "</p>");
