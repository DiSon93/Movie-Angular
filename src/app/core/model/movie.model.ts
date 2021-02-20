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
export type MovieDetail ={
    lichChieu: Showtimes[];
} & Movie

export interface Showtimes {
    thongTinRap:       CinemaDetail;
    maLichChieu:       number;
    maRap:             number;
    maPhim:            number;
    tenPhim:           string;
    ngayChieuGioChieu: Date;
    giaVe:             number;
    thoiLuong:         number;
}

export interface CinemaDetail {
    maRap:         number;
    tenRap:        string;
    maCumRap:      string;
    tenCumRap:     string;
    maHeThongRap:  string;
    tenHeThongRap: string;
}
