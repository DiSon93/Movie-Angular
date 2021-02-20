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