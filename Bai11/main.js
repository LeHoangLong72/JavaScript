// các hàm toán học thông dung
// 1. Hàm Math.sqrt()
let a = Math.sqrt(4);
console.log(a);

// 2. Hàm Math.pow(base, exponent)
let b = Math.pow(2, 3);
console.log(b);

// 3. Hàm Math.abs()
let c = Math.abs(-10);
console.log(c);

// 4. Hàm Math.ceil(), Math.floor()
let d = Math.ceil(5.001); // ceil làm tròn lên
console.log(d);
d = Math.floor(5.001); // floor làm tròn xuống
console.log(d);

// 5. Hàm Math.round(), từ 0.5 làm tròn thành 1
let e = Math.round(7.49); // 7 vì phần thập phân nhỏ hơn 0.5
console.log(e);
e = Math.round(7.51); // 8 vì phần thập phân lớn hơn 0.5
console.log(e);

// 6. Làm tròn x chữ số phần đơn vị
let f = 3.14159;
let fRound = f.toFixed(2);
console.log(fRound);
console.log(typeof fRound); // kết quả là string do hàm toFixed() trả về kiểu string

// cộng thử
let g = fRound + 5;
console.log(g); // "3.14" + 5 = 3.145

fRound = Number(f.toFixed(2)); // ép kiểu về số
console.log(fRound);
console.log(typeof fRound); // trả về number

// 7. Hàm Math.min() và Math.max()
let h = Math.max(1, 2, 3, 5, 8, 40, 100);
console.log(h);
h = Math.min(1, 2, 3, 5, 8, 40, 100);
console.log(h);
