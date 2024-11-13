// 배열에서 사용 할 수 있는 속성과 메서드 활용하기
// 배열 메서드는 크게 파괴적 메서드와 비파괴적 메서드가 있음.
// 비파괴적 메서드는 불변성의 원칙과 관련있음(유사함)
const arr = [10, 20, 30, 40, 50];

// 배열을 순회하는 비파괴적 메서드를 사용
arr.forEach((e) => {
  e += 100; //원본값이 바뀌지는 않음, 요소기반
  console.log(e);
});

for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]); //변경 시 원본값이 바뀜 , 인덱스 기반
}
//이터러블 객체의 요소를 순회 할 때 사용
for (let e of arr) {
  console.log(e);
}
// toString(): 배열 안의 모든 문자열을 쉼표를 이용해 모두 결합 해 하나의 문자열로 반환
console.log(arr.toString());

// join(): 배열 안의 모든 문자열을 지정한 문자를 이용해 모두 결합
const fruits = ["Apple", "Banana", "Orange", "Kiwi", "Mango"];
console.log(fruits.join("*"));

// pop(): 스택 자료구조에서 마지막 데이터를 제거하고, 마지막 데이터를 반환 -> 내용이 변경됨으로 파괴적 메서드
console.log(fruits.pop());

// push(): 배열에 새로운 요소를 추가
fruits.push("Watermelon");
console.log(fruits);

// shift(): 배열에서 첫번째 요소를 제거하고, 첫번째 요소를 반환
console.log(fruits.shift());
console.log(fruits);

// unshift(): 배열의 맨 앞에 요소를 추가하고, 배열의 길이를 반환
console.log(fruits.unshift("Lemon"));
console.log(fruits);

// 배열의 요소 변경
fruits[3] = "Peach";
console.log(fruits);

// concat(): 2개 이상의 배열을 하나의 배열로 결합 (비파괴적 메서드)
const arrCar1 = ["코나", "아반떼", "소나타"];
const arrCar2 = ["산타페", "그랜저", "캐스퍼"];
const newCar = arrCar1.concat(arrCar2, "GV70");
console.log(newCar);

const newCar2 = [...arrCar1, ...arrCar2];
console.log(newCar2); //ES6부터 추가된 문법

// slice(): 시작 인덱스 ~ 마지막 인덱스 미만까지
const newCar3 = newCar2.slice(3);
console.log(newCar3);

// sort(): 정렬
console.log(newCar3.sort());

// filter(): 배열에서 특정 조건을 만족하는 배열의 요소만 찾아 새로운 배열로 반환
const persons = [
  {
    name: "유재석",
    point: 78,
    city: "서울",
  },
  {
    name: "김종국",
    point: 92,
    city: "서울",
  },
  {
    name: "양세찬",
    point: 76,
    city: "제주",
  },
  {
    name: "하하",
    point: 81,
    city: "서울",
  },
];

// const pass = persons.filter((e) => e.point > 80);
const pass = persons.filter((e) => e.city == "서울");
console.log(pass);

// map(): 배열의 각 요소를 변환하고, 그 결과로 새로운 배열을 반환하는 메서드
const numbers = [1, 2, 3, 4, 5];

const squareN = numbers.map((e) => e * e); // 제곱한 결과를 반환

console.log(squareN);
