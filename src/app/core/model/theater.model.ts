export interface TheaterSystem {
    maHeThongRap:  string;
    tenHeThongRap: string;
    biDanh:        string;
    logo:          string;
}

export type TheaterDetail ={
    lichChieu: Theater[];
} 

export interface Theater {
    maCumRap:    string;
    tenCumRap:   string;
    diaChi:      string;
    danhSachRap: TheaterList[];
}

export interface TheaterList {
    maRap:  number;
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
    danhSachPhim : MovieSchedule[];
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