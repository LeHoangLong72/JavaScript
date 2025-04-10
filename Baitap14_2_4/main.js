/**
 * Bài tập: Viết chương trình cho người dùng nhập vào 1 tháng bất kỳ từ 1 - 12 => Cho biết tháng đó có bao nhiêu ngày?
 *
 * Gợi ý:
 * - Tháng 1,3,5,7,8,10,12 có 31 ngày
 * - Tháng 4,6,9,11 có 30 ngày
 * - Nếu tháng 2 thì yêu cầu nhập thêm năm:
 *   + Nếu năm nhuận thì tháng 2 có 29 ngày
 *   + Nếu năm không nhuận thì tháng 2 có 28 ngày
 */

let thang = Number(prompt("Nhập vào tháng để kiểm tra xem có bao nhiêu ngày:"));

if (
  thang === 1 ||
  thang === 3 ||
  thang === 5 ||
  thang === 7 ||
  thang === 8 ||
  thang === 10 ||
  thang === 12
) {
  console.log("Tháng", thang, "có 31 ngày");
} else if (thang === 4 || thang === 6 || thang === 9 || thang === 11) {
  console.log("Tháng", thang, "có 30 ngày");
} else if (thang === 2) {
  let nam = Number(prompt("Nhập vào năm:"));
  if ((nam % 4 === 0 && nam % 100 !== 0) || nam % 400 === 0) {
    console.log("Tháng", thang, "có 29 ngày");
  } else {
    console.log("Tháng", thang, "có 28 ngày");
  }
} else {
  console.log("Giá trị không hợp lệ! Hãy nhập lại (Từ tháng 1 -> 12)");
}
