// 클로저: 함수가 해당 함수의 스코프 외부에 있는 변수에 접근 할 수 있는 매커니즘
// 이를 통해 함수 내부엥서 외부 변수를 수정하거나 참조 가능
function Counter() {
  let count = 0;

  return {
    increment: function () {
      count++;
      console.log(count);
    },
    decrement: function () {
      count--;
      console.log(count);
    },
  };
}

const myCount = Counter();
myCount.increment();
myCount.increment();
myCount.decrement();

////
class Counter {
  constructor() {
    this.count = 0;
  }
  increment() {
    this.count++;
    console.log(this.count);
  }
  decrement() {
    this.count--;
    console.log(this.count);
  }
}

const counter = new Counter();
counter.increment();
counter.increment();
counter.decrement();
