// Hàm Math.random()
// 1. Random trong [0 -> 1)
let randomValue = Math.random();
console.log(`Số ngẫu nhiên từ 0 đến sát 1 là: ${randomValue}`);

// 2. Random số lớn hơn 1
let randomValue2 = Math.random() * 10;
console.log(`Số ngẫu nhiên từ 0 đến sát 10 là: ${randomValue2}`);

// 3. Random số nguyên
let randomValue3 = parseInt(Math.random() * 10);
console.log(`Số ngẫu nhiên nguyên từ 0 đến sát 10 là: ${randomValue3}`);

// chạy từ 0 đến sát 30
let randomValue4 = parseInt(Math.random() * 30);
console.log(`Số ngẫu nhiên nguyên chạy từ 0 đến sát 30 là: ${randomValue4}`);

// chạy từ 0 đến 30
let randomValue5 = parseInt(Math.random() * 31);
console.log(`Số ngẫu nhiên nguyên chạy từ 0 đến 30 là: ${randomValue5}`);

// chạy từ 10 đến 30
let randomValue6 = parseInt(Math.random() * 21) + 10;
console.log(`Số ngẫu nhiên nguyên chạy từ 10 đến 30 là: ${randomValue6}`);
