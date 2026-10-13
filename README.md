# Cloud Lab – Student Management System

## 1. Giới thiệu

**Cloud Lab** là dự án thực hành xây dựng hệ thống quản lý sinh viên theo mô hình MERN. Dự án kết hợp giao diện React, Backend Node.js/Express và cơ sở dữ liệu MongoDB Atlas, đồng thời áp dụng Docker để đóng gói ứng dụng.

Mục tiêu là thực hành quản lý mã nguồn bằng Git/GitHub, xây dựng REST API, kết nối cơ sở dữ liệu và triển khai ứng dụng trong môi trường GitHub Codespaces.

## 2. Công nghệ sử dụng

| Thành phần | Công nghệ |
|---|---|
| Frontend | React, Vite |
| Backend | Node.js, Express.js |
| Database | MongoDB Atlas |
| ODM | Mongoose |
| Container | Docker, Docker Compose |
| Quản lý mã nguồn | Git, GitHub |
| Môi trường phát triển | GitHub Codespaces |

## 3. Chức năng chính

- Hiển thị danh sách sinh viên.
- Thêm sinh viên mới.
- Cập nhật thông tin sinh viên.
- Xóa sinh viên.
- Xây dựng REST API để quản lý dữ liệu.
- Kết nối cơ sở dữ liệu MongoDB Atlas.
- Đóng gói ứng dụng bằng Docker.

## 4. Cấu trúc dự án

```text
cloud-lab/
├── client/
│   └── Dockerfile
├── mern-demo/
│   ├── models/
│   │   └── Student.js
│   ├── server/
│   │   └── server.js
│   ├── Dockerfile
│   ├── package.json
│   └── .env
├── docker/
│   └── compose.yml
├── docker-compose.yml
├── .gitignore
└── README.md
```

## 5. Các API chính

| Phương thức | Endpoint | Chức năng |
|---|---|---|
| GET | `/api/students` | Lấy danh sách sinh viên |
| POST | `/api/students` | Thêm sinh viên |
| PUT | `/api/students/:id` | Cập nhật sinh viên |
| DELETE | `/api/students/:id` | Xóa sinh viên |

## 6. Chạy dự án

### Yêu cầu

- Node.js và npm.
- Docker và Docker Compose.
- Tài khoản MongoDB Atlas cùng chuỗi kết nối hợp lệ.

### Khởi động Backend

```bash
cd mern-demo
npm install
npm start
```

Backend mặc định sử dụng cổng `5000`.

### Khởi động Frontend bằng Docker

Từ thư mục gốc dự án:

```bash
docker compose up -d --build
```

Frontend sử dụng cổng `5173`.

Để chạy cấu hình Backend và Frontend trong thư mục `docker`:

```bash
docker compose -f docker/compose.yml up -d --build
```

Kiểm tra trạng thái container:

```bash
docker compose -f docker/compose.yml ps
```

Xem log Backend:

```bash
docker compose -f docker/compose.yml logs --tail=50 backend
```

**Lưu ý:** Cấu hình Docker phụ thuộc vào môi trường mạng và kết nối MongoDB Atlas. Cần bảo đảm các dịch vụ có thể kết nối với nhau trước khi chạy toàn bộ ứng dụng.

## 7. Bảo mật

- Không đưa file `.env` chứa thông tin đăng nhập lên GitHub.
- Không công khai mật khẩu hoặc chuỗi kết nối MongoDB Atlas.
- Sử dụng `.gitignore` để loại trừ `.env` và `node_modules/`.
- Cấu hình quyền truy cập MongoDB Atlas phù hợp với môi trường triển khai.

## 8. Mục tiêu học tập

- Thực hành Git và GitHub.
- Làm quen với Linux và Terminal.
- Xây dựng ứng dụng MERN.
- Thiết kế và kiểm thử REST API.
- Sử dụng MongoDB Atlas.
- Thực hành Docker và Docker Compose.

## 9. Tác giả

**Lâm Trần Nhựt Khôi**

Dự án thực hành phục vụ mục đích học tập môn Cloud Lab.
