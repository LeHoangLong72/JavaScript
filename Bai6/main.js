// Ép kiểu dữ liệu
// xuất thông báo cho người dùng nhập vào số a
let numberA = prompt("Mời bạn nhập vào numberA: ");
// check thử kiểu loại biến numberA
console.log(typeof numberA); // -> kiểu string
// prompt trả về kiểu string

// thử thực hiện tính toán (nếu chưa ép kiểu)
let numberB = 5;
console.log(typeof numberB);

// cộng A với B
let kq = numberA + numberB;
console.log(`kết quả A + B = ${kq}`);
console.log(typeof kq); // kết quả là 85 vì numberA là chuỗi + số = chuỗi

// Các phép tính khác
console.log(`A-B= %s`, numberA - numberB);
console.log(`A*B= %s`, numberA * numberB);
console.log(`A/B= %s`, numberA / numberB);
console.log(`A%B= %s`, numberA % numberB);

// ép kiểu dữ liệu nhập vào dùng prompt
let numberC = parseInt(prompt("Mời bạn nhập vào numberC: "));
console.log(numberC);
console.log(typeof numberC); // trường hợp ép kiểu nguyên nhưng nhập vào số thực thì sẽ mất phần thập phân và hiển thị phần nguyên
console.log(numberC + numberB);
// let numberD = parseFloat(prompt("Mời bạn nhập vào numberD: "));
// console.log(numberD);
// console.log(typeof numberD);


// hoặc đơn giản dùng hàm Number() để ép --> Kiểu dữ liệu number
let numberD = Number(prompt("Mời bạn nhập vào numberD: "));
console.log(numberD);
console.log(typeof numberD); 
console.log(numberD + numberB)