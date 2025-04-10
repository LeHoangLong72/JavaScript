/**
 * Bài tập: Viết chương trình giải phương trình bậc 2 : ax^2 + bx + c = 0;
 *
 * 1. case 1 : a = 1, b = 2, c = -1
 * => Pt có 2 nghiệm x1 = 1, x2 = -3
 *
 * 2. case 2: a = 1, b = 2, c = 1
 * => Pt có nghiệm kép x1 = x2 = -1
 *
 * 3. case 3: a = 1, b = 1, c = 1
 * => Pt vô nghiệm
 */

let a = Number(prompt("Nhập vào giá trị a:"));
let b = Number(prompt("Nhập vào giá trị b:"));
let c = Number(prompt("Nhập vào giá trị c:"));

let delta = Math.pow(b, 2) - 4 * a * c;
let x1 = (-b + Math.sqrt(delta)) / (2 * a);
let x2 = (-b - Math.sqrt(delta)) / (2 * a);

if (delta < 0) {
  console.log("Phương trình vô nghiệm");
} else if (delta === 0) {
  console.log("Phương trình có nghiệm kép x1 = x2 =" + -b / (2 * a));
} else {
  console.log("Phương trình có 2 nghiệm phân biệt x1 = " + x1 + ", x2 = " + x2);
}
