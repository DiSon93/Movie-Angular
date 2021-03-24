export interface UserList {
    taiKhoan: string;
    hoTen: string;
    email: string;
    soDt: string;
    matKhau: string;
    maLoaiNguoiDung: string;
}
export interface UserUpdate {
    taiKhoan:        string;
    matKhau:         string;
    email:           string;
    soDT:            string;
    hoTen:           string;
    maNhom:          string;
    maLoaiNguoiDung: string;
}

export interface AddUser {
    taiKhoan:        string;
    matKhau:         string;
    email:           string;
    soDt:            string;
    maNhom:          string;
    maLoaiNguoiDung: string;
    hoTen:           string;
}

export interface SearchUser {
    taiKhoan:        string;
    hoTen:           string;
    email:           string;
    soDt:            string;
    matKhau:         string;
    maLoaiNguoiDung: string;
}

export interface AddMovie {
    maPhim:        number;
    tenPhim:       string;
    biDanh:        string;
    trailer:       string;
    hinhAnh:       string;
    moTa:          string;
    maNhom:        string;
    ngayKhoiChieu: string;
    danhGia:       number;
}
