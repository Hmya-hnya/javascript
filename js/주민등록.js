// 주민등록번호(785423-1056578) 를 입력받아 성별, 나이 출력하기 (웹에 출력하기) - 가능하면 CSS 스타일링
// 문자열을 자르는 함수: jumin.substring(0,2) // 문자열 0번째에서 2번 인덱스 미만까지 자름
// 문자열에서 해당 인덱스의 문자를 추출 jumin.charAt(5); // 문자열에서 5번 인덱스의 문자 추출
// const date = new Date();
// date.getFullYear(); // 2024
// 주민등록번호 입력 오류 체크하기(길이 체크, - 포함 확인)
// 특정 문자열 포함여부 확인은 indexOf("-") 사용

let jumin = null;
while (true) {
  jumin = prompt("주민등록 번호를 입력 해 주세요(000000-0000000): ", "");
  if (jumin.length != 14 || jumin.indexOf("-") == -1) {
    alert("입력 오류: 주민등록번호는 '-' 을 포함하여 14글자여야 합니다.");
  }
  break;
}

const genderCode = jumin.charAt(7);
const birthYearPrefix = genderCode === "1" || genderCode === "2" ? "19" : "20";
const birthyear = Number(birthYearPrefix + jumin.substring(0, 2));
const currentYear = new Date().getFullYear();
const age = currentYear - birthyear;
const genderStr = genderCode === "1" || genderCode === "3" ? "male" : "female";

document.write(`<p class='box'>성별: ${genderStr} <br> 나이: ${age} </p>`);
