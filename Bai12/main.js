// hàm isNaN, Number
// hàm Number(value) --> Chuyển value sang số
// --> Nếu không chuyển được trả về NaN
let str = "123";
console.log(typeof str);
let num = Number(str);
console.log(num);
console.log(typeof num); // trả về number

// trường hợp chuyển đổi giá trị không phải số
str = "123a";
num = Number(str);
console.log(num); // trả về NaN
console.log(typeof num); // number

// bài toán khi người dùng nhập vào 1 số
// let so = Number(prompt("Mời nhập vào 1 số:"));
// console.log(so);

// hàm isNaN()
let a = 123;
console.log(isNaN(a)); // false vì biến a đang là kiểu số
a = "123";
console.log(isNaN(a)); // vẫn là false vì chuỗi a vẫn có thể chuyển đổi sang số được
a = "123a";
console.log(isNaN(a)); // true do 123a không chuyển sang số được

let b = Number(true); // true tương ứng với 1 trong 1 số NNLT nên khi chuyển đổi sang số thì sẽ là 1
console.log(b);
console.log(typeof b);
console.log(isNaN(b));

console.log(Number(null)); // null khi chuyển về số sẽ là 0
console.log(Number("")); // chuyển về 0
console.log(Number("  ")); // chuyển về 0

// hàm Number.isNaN()
console.log(Number.isNaN(NaN));
console.log(Number.isNaN("abc" / "bcd"));
console.log("abc" / "bcd");
console.log(0 / 0);
console.log(Number.NaN);
console.log({});
console.log("ponyfoo");
