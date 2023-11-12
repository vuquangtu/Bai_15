// Bài 1: Tạo hàm alertMessage() hiển thị hộp thoại chứa chuỗi  "Xin chao". Gọi hàm từ trong phần <body> của trang web.

// function xinchao() {
//   alert("xin chao");
// }

// // Bài 2: Tạo hàm nhận vào một đối số dạng số, tăng giá trị đối số đó lên 1 và trả lại giá trị cho lời gọi hàm. Gọi hàm từ trong phần <body> của trang web và hiển thị kết quả lên màn hình.
// function traGiatri() {
//   let x = +prompt("nhap so");
//   x++;
//   alert(x);
//   return x;
// }
// // Bài 3: Tạo hàm nhận vào hai tham số. Nếu giá trị của tham số thứ nhất lớn hơn tham số thứ hai, hiển thị hộp thoại thông báo cho người dùng. Nếu giá trị của tham số thứ nhất nhỏ hơn hoặc bằng tham số thứ hai, trả về tổng của hai tham số.

// function soSanh() {
//   let x = +prompt("so thu nhat la = ");
//   let y = +prompt("so thu hai la =");
//   if (x > y) {
//     alert("so thu nhat lon hon so thu 2");
//   } else {
//     return x + y;
//   }
// }
// Bài 5: Tạo một mảng với bảy phần tử dạng chuỗi có giá trị là tên các ngôi sao sau: Polaris, Aldebaran, Deneb, Vega, Altair, Dubhe và Regulus. Tạo một mảng khác với bảy phần tử dạng chuỗi có giá trị là tên các chòm sao tương ứng chứa các ngôi sao: Ursa Minor, Tarurus, Cygnus, Lyra, Aquila, Ursa Major và Leo. Tiếp theo, tạo một hàm nhận vào một tham số dạng chuỗi duy nhất. Trong hàm này, duyệt qua mảng thứ nhất để tìm tên ngôi sao. Nếu tìm thấy, trả lại giá trị tương ứng với chỉ số đó ở mảng thứ hai. Nói cách khác, trả lại tên chòm sao của ngôi sao đó. Trong phần <body> của trang web, dùng hộp thoại prompt để người dùng nhập vào tên của ngôi sao, sau đó gọi hàm với thông tin đầu vào. Đừng quên xử lý trong trường hợp không tìm thấy ngôi sao nào. Cho kết quả hiển thị trên màn hình.
let x = prompt("nhap ten ngoi sao");
let ngoiSao = [
  "Polaris",
  "Aldebaran",
  "Deneb",
  "Vega",
  "Altair",
  "Dubhe",
  "Regulus",
];
let chomSao = [
  "Ursa Minor",
  "Tarurus",
  "Cygnus",
  "Lyra",
  "Aquila",
  "Ursa Major",
  "Leo",
];
let index = ngoiSao.indexOf(x);

timChomsao(index);
function timChomsao(y) {
  if (y == -1) {
    alert("khong co chom sao nao cua ngoi sao tren");
  }

  let chom = chomSao[y];
  alert("chom sao cua ngoi sao tren la =" + chom);
}
