/**
 * Bài tập: Viết chương trình nhập vào 1 năm dương lịch, kiểm tra năm đó có phải là năm nhuận hay không.
 *
 * Gợi ý: Năm nhuận là năm (chia hết cho 4, và không chia hết cho 100) hoặc (chia hết cho 400)
 *
 * Case test:
 * Năm nhuận: 2004, 2008, 2012, 2016, 2020, 2024
 * Năm không nhuận: 1900, 2005
 *
 */

let nam = Number(
  prompt("Nhập vào năm để kiểm tra năm nhuận hay năm không nhuận:")
);

if ((nam % 4 === 0 && nam % 100 !== 0) || nam % 400 === 0) {
  console.log("Năm nhuận!");
} else {
  console.log("Năm không nhuận!");
}
