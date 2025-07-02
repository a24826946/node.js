// fs.js
const fs = require("fs");

console.log("start");

// 1.비동기 방식.
// fs.readFile("./sample/output.log", "utf8", (err, data) => {
//   if (err) {
//     throw err;
//   }
//   console.log(data);
// }); // fs.readFileSync()
// console.log("end");

// 2.동기 방식
// let data = fs.readFileSync("./sample/output.log", "utf8");
// console.log(data);
// console.log("end");

fs.writeFile("./sample/write.txt", "글쓰기..", "utf8", (err) => {
  if (err) {
    throw err;
  }
  console.log("글쓰기완료");
});
console.log("end");
