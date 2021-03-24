export interface SignupParams {
    taiKhoan: string;
    hoTen: string;
    email: string;
    soDT: string;
    matKhau: string;
}
export interface SignupResult {
    taiKhoan: string;
    email: string;
    soDt: string;
    maNhom: string;
    maLoaiNguoiDung: string;
    hoTen: string;
}

export interface SigninParams {
    taiKhoan: string;
    matKhau: string;
}
export interface SigninResult {
    taiKhoan:        string;
    hoTen:           string;
    email:           string;
    soDT:            string;
    maNhom:          string;
    maLoaiNguoiDung: string;
    accessToken:     string;
}

export interface UserDetail {
    taiKhoan:      string;
    matKhau:       string;
    hoTen:         string;
    email:         string;
    soDT:          string;
    maNhom:        string;
    loaiNguoiDung: null;
    thongTinDatVe: ThongTinDatVe[];
}

export interface ThongTinDatVe {
    danhSachGhe:   DanhSachGhe[];
    maVe:          number;
    ngayDat:       Date;
    tenPhim:       string;
    giaVe:         number;
    thoiLuongPhim: number;
}

export interface DanhSachGhe {
    maHeThongRap:  string;
    tenHeThongRap: string;
    maCumRap:      string;
    tenCumRap:     string;
    maRap:         number;
    tenRap:        string;
    maGhe:         number;
    tenGhe:        string;
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