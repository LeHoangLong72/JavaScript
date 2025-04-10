/**
 * Bài tập: Viết chương trình nhập vào tháng trong năm, cho biết tháng đó thuộc quy mấy
 *
 * Gợi ý:
 *  1 năm có 4 quý, mỗi quý 3 tháng:
 *  + Quý 1: tháng 1,2,3
 *  + Quý 2: tháng 4,5,6
 *  + Quý 3: tháng 7,8,9
 *  + Quý 4: tháng 10,11,12
 */

let thang = Number(prompt("Nhập vào tháng trong năm:"));

if (thang === 1 || thang === 2 || thang === 3) {
  console.log("Quý 1");
} else if (thang === 4 || thang === 5 || thang === 6) {
  console.log("Quý 2");
} else if (thang === 7 || thang === 8 || thang === 9) {
  console.log("Quý 3");
} else if (thang === 10 || thang === 11 || thang === 12) {
  console.log("Quý 4");
} else {
  console.log("Giá trị không hợp lệ! Vui lòng nhập lại từ 1 - 12");
}
