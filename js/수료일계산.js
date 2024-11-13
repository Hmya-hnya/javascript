const dDay = new Date("2025-03-24");
const now = new Date();

const toNow = now.getTime();
const toDay = dDay.getTime();
let remainTime = toDay - toNow;

remainDay = Math.round(remainTime / (1000 * 60 * 60 * 24)); // 밀리 초를 일 수로 계산하고 반올림

if (remainDay !== 0) {
  document.querySelector("#result").innerText = remainDay;
} else if (remainDay == 0) {
  document.querySelector("#result").innerText = "day";
}
