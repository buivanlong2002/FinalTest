class SoTietKiem {
    constructor(maSo, loaiTietKiem, hoTen, cmnd, ngayMoSo, soTienGui) {
        this.maSo = maSo;
        this.loaiTietKiem = loaiTietKiem;
        this.hoTen = hoTen;
        this.cmnd = cmnd;
        this.ngayMoSo = ngayMoSo;
        this.soTienGui = soTienGui;
    }
}

let danhSachSoTietKiem = [
    new SoTietKiem("12345", "Dài hạn", "Nguyễn Văn A", "123456789", "2024-01-01", 5000000),
    new SoTietKiem("67890", "Ngắn hạn", "Trần Thị B", "987654321", "2024-02-15", 3000000),
    new SoTietKiem("54321", "Trung hạn", "Lê Văn C", "123123123", "2024-03-10", 7000000)
];
// hàm thêm
function themSoTietKiem() {
    const maSo = document.getElementById("maSo").value;
    const loaiTietKiem = document.getElementById("loaiTietKiem").value;
    const hoTen = document.getElementById("hoTen").value;
    const cmnd = document.getElementById("cmnd").value;
    const ngayMoSo = document.getElementById("ngayMoSo").value;
    const soTienGui = document.getElementById("soTienGui").value;

    if (!maSo || !loaiTietKiem || !hoTen || !cmnd || !ngayMoSo || !soTienGui) {
        alert("Vui lòng nhập đầy đủ thông tin");
        return;
    }

    if (danhSachSoTietKiem.some(so => so.maSo === maSo)) {
        alert("Mã số tiết kiệm đã tồn tại!");
        return;
    }

    const soMoi = new SoTietKiem(maSo, loaiTietKiem, hoTen, cmnd, ngayMoSo, soTienGui);
    danhSachSoTietKiem.push(soMoi);
    hienThiDanhSach();
}
// hàm hiện thị danh sách
function hienThiDanhSach() {
    const danhSach = document.getElementById("danhSachSo");
    danhSach.innerHTML = "";
    danhSachSoTietKiem.forEach((so, id) => {
        const row = `<tr>
                    <td>${so.maSo}</td>
                    <td>${so.loaiTietKiem}</td>
                    <td>${so.hoTen}</td>
                    <td>${so.cmnd}</td>
                    <td>${so.ngayMoSo}</td>
                    <td>${so.soTienGui}</td>
<!--                     <td><button onclick="editSoTietKiem(${id})">Xóa</button></td>-->
                    <td><button class="button-delete" onclick="xoaSoTietKiem(${id})">Xóa</button></td>
                </tr>`;
        danhSach.innerHTML += row;
    });
}
function xoaSoTietKiem(id) {
    if (confirm("Bạn có chắc chắn muốn xóa không?")) {
        danhSachSoTietKiem.splice(id, 1);
        hienThiDanhSach();
    }
}

hienThiDanhSach();

//  hàm edit
//   function editSoTietKiem(id) {
//     let content1 = `<fieldset >
//      <h3>Sửa sổ tiết kiệm</h3>
//      Mã số: <input value="${danhSachSoTietKiem[id].maSo}" id="editMaSo"> <br> <br>
//      Loại:<input value="${danhSachSoTietKiem[id].loaiTietKiem}" id="EditLoaiTietKiem"> <br> <br>
//      Họ tên: <input value="${danhSachSoTietKiem[id].hoTen}" id="editHoTen"> <br> <br>
//      Cmnd:<input value="${danhSachSoTietKiem[id].cmnd}" id="editCmnd"> <br> <br>
//      Ngày:<input value="${danhSachSoTietKiem[id].ngayMoSo}" id="editNgayMoSo"> <br> <br>
//      Số tiền TK:<input value="${danhSachSoTietKiem[id].soTienGui}" id="editSoTienGui"> <br> <br>
//     <button onclick="update(${id})">Cập nhập</button>
//     <button onclick="exit()">Quay lại</button>
//
// </fieldset>`
//     document.getElementById("updateDS").innerHTML = content1;
//
//   }
//   hàm update
//   function update(id) {
//     let editMaSo = document.getElementById("editMaSo").value;
//     let editLoaiTietKiem = document.getElementById("EditLoaiTietKiem").value;
//     let editHoTen = document.getElementById("editHoTen").value;
//     let editCmnd = document.getElementById("editCmnd").value;
//     let editNgayMoSo = document.getElementById("editNgayMoSo").value;
//     let editSoTienGui = document.getElementById("editSoTienGui").value;
//     danhSachSoTietKiem.splice(id, 1);
//     hienThiDanhSach();
//
//     if (danhSachSoTietKiem.some(so => so.maSo === maSo)) {
//       alert("Mã số tiết kiệm đã tồn tại!");
//       return;
//     }
//
//     let newSoTietKiem = new SoTietKiem(editMaSo, editLoaiTietKiem, editHoTen, editCmnd, editNgayMoSo, editSoTienGui);
//     danhSachSoTietKiem[id] = newSoTietKiem;
//     console.log(danhSachSoTietKiem[id]);
//     hienThiDanhSach();
//     exit();
//   }
//
//
//   function exit() {
//     document.getElementById("updateDS").innerHTML = "";
//   }
//


/// hàm xóa


