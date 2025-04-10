/**
 * Bài tập: Viết chương trình nhập vào điểm trung bình, và xuất ra kết quả xếp loại của học sinh theo tiêu chuẩn sau: (dùng toán tử 3 ngôi)
 * - Giỏi: nếu điểm >= 8
 * - Khá: nếu 8 > điểm >= 6.5
 * - Trung bình: nếu 6.5 > điểm >= 5
 * - Yếu: nếu điểm < 5
 *
 */

let dtb = Number(prompt("Nhập vào điểm trung bình:"));

let message =
  dtb <= 10 && dtb >= 8
    ? "Giỏi"
    : dtb < 8 && dtb >= 6.5
    ? "Khá"
    : dtb < 6.5 && dtb >= 5
    ? "Trung bình"
    : dtb < 5 && dtb >= 0
    ? "Yếu"
    : "Bạn nhập tào lao";
console.log(message);
