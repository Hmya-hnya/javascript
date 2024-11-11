//시간과 분을 입력하면 45분 일찍 시간이 설정되도록 변경하는 프로그램
// 시간은 24시간제로 하고, 00:30 == 23:45 로 설정 됨
// parselnt() 함수: 해당값을 정수로 반환, Math.floor을 사용해도 동일한 효과

let hour = Number(prompt("시간 입력: "));
let min = Number(prompt("분 입력: "));
let calc = hour * 60 + min;
if (calc < 45) {
  calc = 24 * 60 + min;
}

calc -= 45;

hour = parseInt(calc / 60);
min = calc % 60;
document.write(
  "<h3>" + `${hour}시 ${min}분 ` + " 으로 알람을 설정하였습니다.</h3>"
);
