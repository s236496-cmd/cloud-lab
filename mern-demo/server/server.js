
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

const Student = require("../models/Student");

const app = express();
const PORT = process.env.PORT || 5000;
const MONGODB_URI = process.env.MONGODB_URI;

app.use(cors());
app.use(express.json());
app.get("/api/hello", (req, res) => {
  res.json({ message: "Backend đang hoạt động!" });
});

// GET: Lấy danh sách sinh viên
app.get("/api/students", async (req, res) => {
  try {
    const students = await Student.find();
    res.status(200).json(students);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// POST: Thêm sinh viên mới
app.post("/api/students", async (req, res) => {
  try {
    const student = await Student.create(req.body);
    res.status(201).json(student);
  } catch (error) {
    const status = error.code === 11000 ? 409 : 400;
    res.status(status).json({ message: error.message });
  }
});

// PUT: Cập nhật sinh viên theo MongoDB _id
app.put("/api/students/:id", async (req, res) => {
  try {
    const student = await Student.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true
      }
    );

    if (!student) {
      return res.status(404).json({
        message: "Không tìm thấy sinh viên"
      });
    }

    res.status(200).json(student);

  } catch (error) {
    res.status(400).json({
      message: error.message
    });
  }
});
// API DELETE sinh viên
app.delete("/api/students/:id", async (req, res) => {
  try {
    const student = await Student.findByIdAndDelete(req.params.id);

    if (!student) {
      return res.status(404).json({
        message: "Không tìm thấy sinh viên"
      });
    }

    res.json({ message: "Xóa sinh viên thành công" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Khởi động server
async function startServer() {
  try {
    if (!MONGODB_URI) {
      throw new Error("Thiếu MONGODB_URI trong file .env");
    }

    await mongoose.connect(MONGODB_URI);
    console.log("MongoDB Atlas connected successfully!");

    app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running on port ${PORT}`);
});
  } catch (error) {
    console.error("Server startup failed:", error.message);
    process.exit(1);
  }
}

startServer();
