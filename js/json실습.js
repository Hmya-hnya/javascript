// JSON 데이터
const jsonData = `
[
    {
        "name": "안유진",
        "age": 20,
        "isStudent": false,
        "courses": ["음악", "댄스", "연기"],
        "address": {
            "city": "서울",
            "zipcode": "12345"
        }
    },
    {
        "name": "가을",
        "age": 20,
        "isStudent": false,
        "courses": ["음악", "댄스", "연기"],
        "address": {
            "city": "서울",
            "zipcode": "12345"
        }
    },
    {
        "name": "레이",
        "age": 19,
        "isStudent": true,
        "courses": ["음악", "일본어", "연기"],
        "address": {
            "city": "서울",
            "zipcode": "12345"
        }
    }
]
`;

// JSON 문자열을 JavaScript 객체로 변환 (역직렬화)
const jsonObject = JSON.parse(jsonData);
const container = document.querySelector("#container");

const htmlContent = jsonObject
  .map(
    (person) =>
      `
  <div class = "person">
  <h2>${person.name} </h2>
  <p>나이: ${person.age} </p>
  <p>학생여부: ${person.isStudent ? "예" : "아니오"} </p>
  <p>나이: ${person.age} </p>
  <p>과목: ${person.courses.join(", ")} </p>
  <p>주소: ${person.address.city}, 우편번호: ${person.address.zipcode} </p>
  </div>
  `
  )
  .join(" ");

container.innerHTML = htmlContent;

// JavaScript 객체를 JSON 문자열로 변환 (직렬화)
// const jsonString = JSON.stringify(jsonObject, null, 4);
// console.log("다시 JSON으로 변환된 데이터:", jsonString);
