export interface TheaterSystem {
    maHeThongRap: string;
    tenHeThongRap: string;
    biDanh: string;
    logo: string;
}

export type TheaterDetail = {
    lichChieu: Theater[];
}

export interface Theater {
    maCumRap: string;
    tenCumRap: string;
    diaChi: string;
    danhSachRap: TheaterList[];
}

export interface TheaterList {
    maRap: number;
    tenRap: string;
}

export interface CumRap {
    maHeThongRap: string;
    tenHeThongRap: string;
    logo: string;
    maNhom: string;
    lstCumRap: MovieTheater[];

}
export interface MovieTheater {
    danhSachPhim: MovieSchedule[];
    maCumRap: string;
    tenCumRap: string;
    diaChi: string;
}
export interface MovieSchedule {
    lstLichChieuTheoPhim: MovieSheduleList[];
    maPhim: number;
    tenPhim: string;
    hinhAnh: string;
}
export interface MovieSheduleList {
    maLichChieu: number;
    maRap: number;
    tenRap: string;
    ngayChieuGioChieu: string;
    giaVe: number;

}
export interface BookTicket {
    maLichChieu: number;
    danhSachVe: Seat[];
    taiKhoanNguoiDung: string;

}
export interface Seat {
    maGhe: number;
    giaVe: number;
}

export interface DanhSachPhongVe {
    thongTinPhim: ThongTinPhim;
    danhSachGhe: DanhSachGhe[];
}

export interface DanhSachGhe {
    maGhe: number;
    tenGhe: string;
    maRap: number;
    loaiGhe: string;
    stt: string;
    giaVe: number;
    daDat: boolean;
    taiKhoanNguoiDat: null;
}

export interface ThongTinPhim {
    maLichChieu: number;
    tenCumRap: string;
    tenRap: string;
    diaChi: string;
    tenPhim: string;
    hinhAnh: string;
    ngayChieu: string;
    gioChieu: string;
}
export interface DanhSachRapTheoPhim {
    heThongRapChieu: HeThongRapChieu[];
    maPhim:          number;
    tenPhim:         string;
    biDanh:          string;
    trailer:         string;
    hinhAnh:         string;
    moTa:            string;
    maNhom:          string;
    ngayKhoiChieu:   Date;
    danhGia:         number;
}

export interface HeThongRapChieu {
    cumRapChieu:   CumRapChieu[];
    maHeThongRap:  string;
    tenHeThongRap: string;
    logo:          string;
}

export interface CumRapChieu {
    lichChieuPhim: LichChieuPhim[];
    maCumRap:      string;
    tenCumRap:     string;
    hinhAnh:       null;
}

export interface LichChieuPhim {
    maLichChieu:       string;
    maRap:             string;
    tenRap:            string;
    ngayChieuGioChieu: Date;
    giaVe:             number;
    thoiLuong:         number;
}

export interface Movie {
    maPhim: number;
    tenPhim: string;
    biDanh: string;
    trailer: string;
    hinhAnh: string;
    moTa: string;
    maNhom: string;
    ngayKhoiChieu: Date;
    danhGia: number;
}

