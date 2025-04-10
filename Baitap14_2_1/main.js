/* 
Bài tập: Tìm x, y khi biết tổng và hiệu của chúng

case test : tong = 14, hieu = 4 => x = 9, y = 5
case 2    : tong = 8, hieu = 5 => x = 6.5, y = 1.5

x + y = 14
x - y = 4
*/

let tong = Number(prompt("Nhập vào tổng 2 số:"));
let hieu = Number(prompt("Nhập vào hiệu 2 số:"));

let x = (tong + hieu) / 2;
let y = x - hieu;

console.log(`Giá trị x cần tìm là: ${x}`);
console.log(`Giá trị y cần tìm là: ${y}`);
