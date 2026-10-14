# ☁️ CLOUD-LAB — MERN Stack & Docker Deployment

**Dự án thực hành Cloud Computing, Linux, Docker, GitHub và xây dựng ứng dụng MERN quản lý sinh viên.**

[![GitHub Repository](https://img.shields.io/badge/GitHub-cloud--lab-black?logo=github)](https://github.com/s236496-cmd/cloud-lab)
[![Docker Frontend](https://img.shields.io/badge/Docker%20Hub-Frontend-blue?logo=docker)](https://hub.docker.com/r/lamtrannhutkhoi/mern-frontend)
[![Docker Backend](https://img.shields.io/badge/Docker%20Hub-Backend-blue?logo=docker)](https://hub.docker.com/r/lamtrannhutkhoi/mern-backend)

## 1. Giới thiệu dự án

`cloud-lab` là dự án thực hành triển khai ứng dụng web theo kiến trúc MERN Stack. Dự án xây dựng hệ thống quản lý sinh viên, sử dụng React cho giao diện, Node.js và Express cho backend, MongoDB Atlas để lưu trữ dữ liệu.

Các thành phần được đóng gói thành Docker Image và đăng tải lên Docker Hub. Docker Compose được sử dụng để khởi chạy nhiều container và kết nối các dịch vụ.

**Mục tiêu dự án:**

- Làm quen với Linux Server và môi trường GitHub Codespaces.
- Sử dụng Git và GitHub để quản lý mã nguồn.
- Thực hành Docker Image, Container và Docker Compose.
- Xây dựng REST API với Express và Mongoose.
- Kết nối ứng dụng với MongoDB Atlas.
- Triển khai Frontend và Backend bằng Docker Hub.
- Kiểm tra các thao tác CRUD trên giao diện web.

## 2. Liên kết dự án

| Tài nguyên | Liên kết |
|---|---|
| GitHub Repository | [cloud-lab](https://github.com/s236496-cmd/cloud-lab) |
| Frontend Docker Hub | [mern-frontend](https://hub.docker.com/r/lamtrannhutkhoi/mern-frontend) |
| Frontend Tag 2.0 | [Xem image và tag](https://hub.docker.com/r/lamtrannhutkhoi/mern-frontend/tags) |
| Backend Docker Hub | [mern-backend](https://hub.docker.com/r/lamtrannhutkhoi/mern-backend) |
| Backend Tag 1.0 | [Xem image và tag](https://hub.docker.com/r/lamtrannhutkhoi/mern-backend/tags) |
| MongoDB Atlas Documentation | [Tài liệu chính thức](https://www.mongodb.com/docs/atlas/) |
| Docker Documentation | [Tài liệu Docker](https://docs.docker.com/) |
| Docker Compose Documentation | [Tài liệu Docker Compose](https://docs.docker.com/compose/) |
| Git Documentation | [Tài liệu Git](https://git-scm.com/doc) |
| GitHub Docs | [Tài liệu GitHub](https://docs.github.com/) |
| Node.js | [Trang chủ Node.js](https://nodejs.org/) |
| Express.js | [Tài liệu Express](https://expressjs.com/) |
| React | [Tài liệu React](https://react.dev/) |
| Vite | [Tài liệu Vite](https://vite.dev/) |
| Mongoose | [Tài liệu Mongoose](https://mongoosejs.com/docs/) |

## 3. Công nghệ sử dụng

| Công nghệ | Vai trò |
|---|---|
| Linux / GitHub Codespaces | Môi trường phát triển |
| Git / GitHub | Quản lý phiên bản và lưu trữ mã nguồn |
| Docker | Đóng gói và chạy ứng dụng |
| Docker Compose | Khởi chạy Frontend và Backend |
| React | Xây dựng giao diện quản lý sinh viên |
| Vite | Công cụ phát triển và chạy Frontend |
| Node.js | Môi trường thực thi JavaScript phía máy chủ |
| Express.js | Xây dựng REST API |
| Mongoose | Làm việc với cơ sở dữ liệu MongoDB |
| MongoDB Atlas | Cơ sở dữ liệu đám mây |
| Docker Hub | Lưu trữ và phân phối Docker Image |

## 4. Kiến trúc hệ thống

```text
                 USER / WEB BROWSER
                         |
                         v
               REACT + VITE FRONTEND
                   Port 5173
                         |
                    /api/students
                         |
                         v
                EXPRESS REST API
                   Port 5000
                         |
                         v
                   MONGOOSE ODM
                         |
                         v
                  MONGODB ATLAS
                  Cloud Database
```

### Luồng hoạt động

1. Người dùng thao tác trên giao diện React.
2. Frontend gửi HTTP request đến REST API thông qua đường dẫn `/api`.
3. Express tiếp nhận và xử lý yêu cầu.
4. Mongoose thực hiện các thao tác với MongoDB Atlas.
5. Backend trả kết quả JSON về cho Frontend để cập nhật giao diện.

## 5. Cấu trúc dự án

```text
cloud-lab/
├── client/
│   ├── src/
│   │   ├── App.jsx
│   │   └── App.css
│   ├── vite.config.js
│   └── Dockerfile
├── mern-demo/
│   ├── server/
│   │   └── server.js
│   ├── models/
│   ├── .env
│   ├── package.json
│   ├── package-lock.json
│   └── Dockerfile
├── docker/
│   └── compose.yml
├── docker-compose.yml
├── docker-compose.hub.yml
└── README.md
```

*Lưu ý: Cấu trúc trên mô tả các tệp và thư mục chính; một số tệp khác có thể tồn tại trong repository.*

## 6. Các phần thực hành

### Phần 1 — Linux Server

- Làm quen với terminal trong Linux và GitHub Codespaces.
- Kiểm tra tài nguyên hệ thống bằng `free -h` và `df -h`.
- Kiểm tra người dùng bằng `id`.
- Kiểm tra tiến trình bằng `ps aux`.
- Kiểm tra cổng đang lắng nghe bằng `ss -lnt`.
- Thực hành phân quyền tệp bằng `chmod`.

### Phần 2 — Docker cơ bản

- Kiểm tra Docker bằng `docker --version` và `docker info`.
- Tải Docker Image từ Docker Hub.
- Chạy container thử nghiệm.
- Kiểm tra image và container bằng `docker images`, `docker ps` và `docker ps -a`.

### Phần 3 — Git và GitHub

- Clone repository và làm việc trên nhánh `main`.
- Theo dõi thay đổi bằng `git status` và `git diff`.
- Stage các tệp cần thiết bằng `git add`.
- Lưu lịch sử bằng `git commit`.
- Đồng bộ mã nguồn lên GitHub bằng `git push`.

### Phần 4 — MERN Stack

- Khởi tạo dự án Node.js.
- Cài đặt Express, CORS và dotenv.
- Xây dựng backend và frontend.
- Chạy Frontend tại cổng `5173`.
- Chạy Backend tại cổng `5000`.

### Phần 5 — REST API

Xây dựng API quản lý sinh viên bằng Express và Mongoose.

| Phương thức | Endpoint | Chức năng |
|---|---|---|
| GET | `/api/students` | Lấy danh sách sinh viên |
| POST | `/api/students` | Thêm sinh viên |
| PUT | `/api/students/:id` | Cập nhật sinh viên |
| DELETE | `/api/students/:id` | Xóa sinh viên |

Dữ liệu sinh viên gồm các trường chính:

- `studentId`: Mã sinh viên.
- `name`: Họ tên.
- `email`: Địa chỉ email.

### Phần 6 — Docker hóa ứng dụng

- Tạo Dockerfile cho Frontend và Backend.
- Build Docker Image.
- Cấu hình các cổng dịch vụ.
- Sử dụng Docker Compose để quản lý các container.
- Kiểm tra giao tiếp giữa Frontend và Backend.

### Phần 7 — Docker Hub

Các Docker Image được sử dụng trong quá trình triển khai:

**Frontend**

- Repository: [`lamtrannhutkhoi/mern-frontend`](https://hub.docker.com/r/lamtrannhutkhoi/mern-frontend)
- Tag triển khai: `2.0`

**Backend**

- Repository: [`lamtrannhutkhoi/mern-backend`](https://hub.docker.com/r/lamtrannhutkhoi/mern-backend)
- Tag triển khai: `1.0`

Các image này cho phép tải và khởi chạy ứng dụng mà không cần build lại từ mã nguồn tại máy triển khai.

### Phần 8 — Git và bài tập tổng hợp

- Kiểm tra Git status.
- Đảm bảo `.env` không bị đưa vào Git.
- Kiểm tra các tệp Docker Compose.
- Commit với thông điệp `Complete Lab 04 Docker Hub Multi-Container`.
- Push mã nguồn lên GitHub.
- Xóa container và image cần thiết để kiểm tra quy trình tải lại.
- Pull Frontend và Backend từ Docker Hub.
- Khởi chạy ứng dụng bằng `docker-compose.hub.yml`.
- Kiểm tra kết nối React → Express → MongoDB Atlas.
- Kiểm tra CRUD trên giao diện.
- Xác nhận tag image trên Docker Hub.

## 7. Hướng dẫn chạy dự án bằng Docker Hub

### Yêu cầu

- Đã cài đặt Docker Engine và Docker Compose.
- Có quyền truy cập các Docker Image trên Docker Hub.
- Có chuỗi kết nối MongoDB Atlas hợp lệ.
- Đã cấu hình tệp môi trường `.env` tại `mern-demo/.env`.

### Bước 1 — Clone repository

```bash
git clone https://github.com/s236496-cmd/cloud-lab.git
cd cloud-lab
```

### Bước 2 — Cấu hình biến môi trường

Tạo tệp `mern-demo/.env` theo cấu hình mà Backend sử dụng. Ví dụ:

```dotenv
PORT=5000
MONGODB_URI=your_mongodb_atlas_connection_string
```

Thay `your_mongodb_atlas_connection_string` bằng chuỗi kết nối thực tế của bạn và bổ sung các biến khác nếu mã nguồn yêu cầu.

**Không đăng tải mật khẩu, MongoDB URI thật hoặc các thông tin bí mật lên GitHub.** Tệp `.env` cần được giữ trong danh sách Git ignore.

### Bước 3 — Tải Docker Image

```bash
docker pull lamtrannhutkhoi/mern-backend:1.0
docker pull lamtrannhutkhoi/mern-frontend:2.0
```

### Bước 4 — Khởi chạy hệ thống

```bash
docker compose -f docker-compose.hub.yml up -d
```

### Bước 5 — Kiểm tra container

```bash
docker ps
```

Kiểm tra log Backend:

```bash
docker logs --tail=50 cloud-lab-backend-1
```

Tên container thực tế có thể thay đổi tùy theo tên project Compose.

### Bước 6 — Kiểm tra API

```bash
curl -i http://localhost:5173/api/students
```

Nếu thành công, API trả về mã HTTP `200 OK` và dữ liệu JSON của sinh viên.

### Bước 7 — Truy cập ứng dụng

- Frontend: http://localhost:5173
- Backend: http://localhost:5000
- API danh sách sinh viên: http://localhost:5173/api/students

Khi chạy trong GitHub Codespaces, hãy mở cổng tương ứng trong tab **Ports** để truy cập dịch vụ qua trình duyệt.

## 8. Các chức năng chính

- Hiển thị danh sách sinh viên.
- Thêm sinh viên mới.
- Cập nhật thông tin sinh viên.
- Xóa sinh viên.
- Lưu trữ dữ liệu trong MongoDB Atlas.
- Giao tiếp giữa React và Express thông qua REST API.
- Đóng gói ứng dụng bằng Docker.
- Triển khai bằng Docker Image lưu trữ trên Docker Hub.

## 9. Kiểm tra và xử lý sự cố

| Vấn đề | Hướng kiểm tra |
|---|---|
| `docker: command not found` | Kiểm tra môi trường có Docker Engine hoặc Docker CLI hay không |
| Frontend không gọi được API | Kiểm tra cấu hình proxy trong `client/vite.config.js` |
| Backend không kết nối MongoDB | Kiểm tra `mern-demo/.env`, URI và quyền truy cập mạng Atlas |
| Container không chạy | Dùng `docker ps -a` và `docker logs` |
| API trả về lỗi | Kiểm tra log Backend và cấu hình kết nối |
| Cổng đã được sử dụng | Kiểm tra các tiến trình đang dùng cổng `5000` hoặc `5173` |

## 10. Kết quả đạt được

Dự án đã thực hiện được các mục tiêu chính:

- Quản lý mã nguồn bằng Git và GitHub.
- Xây dựng ứng dụng quản lý sinh viên bằng MERN Stack.
- Kết nối REST API với MongoDB Atlas.
- Đóng gói Frontend và Backend thành Docker Image.
- Đăng tải và quản lý image trên Docker Hub.
- Khởi chạy hai container bằng Docker Compose.
- Kiểm tra API và thao tác thêm/xóa sinh viên trên giao diện.

## 11. Tác giả và tài nguyên

**Repository:** [s236496-cmd/cloud-lab](https://github.com/s236496-cmd/cloud-lab)

**Docker Hub:**
- [Frontend Images](https://hub.docker.com/r/lamtrannhutkhoi/mern-frontend/tags)
- [Backend Images](https://hub.docker.com/r/lamtrannhutkhoi/mern-backend/tags)

**Mục đích:** Học tập và thực hành Cloud Computing, Linux, Docker, MERN Stack, REST API và GitHub.

---

*README được xây dựng nhằm tổng hợp nội dung thực hành và hướng dẫn sử dụng dự án. Các thông số, đường dẫn và lệnh chạy cần được đối chiếu với cấu hình thực tế của repository trước khi sử dụng ở môi trường khác.*
