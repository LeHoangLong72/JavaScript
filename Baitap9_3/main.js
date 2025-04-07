let diemToan = Number(prompt("Hãy nhập vào điểm môn Toán:"));

let diemVan = Number(prompt("Hãy nhập vào điểm môn Văn:"));

let diemAnh = Number(prompt("Hãy nhập vào điểm môn Anh:"));

let dtb = (diemToan + diemVan + diemAnh) / 3;
dtb = dtb.toFixed(2);
console.log(`Điểm trung bình = %s`, dtb);
