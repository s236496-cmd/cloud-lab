import { useEffect, useState } from 'react'
import './App.css'

const API = '/api/students'
const emptyForm = { studentId: '', name: '', email: '' }

function App() {
  const [students, setStudents] = useState([])
  const [form, setForm] = useState(emptyForm)
  const [editingId, setEditingId] = useState(null)
  const [message, setMessage] = useState('')
  const [loading, setLoading] = useState(true)

  async function loadStudents() {
    setLoading(true)
    try {
      const response = await fetch(API)
      if (!response.ok) throw new Error('Không thể tải danh sách sinh viên')
      const data = await response.json()
      setStudents(Array.isArray(data) ? data : [])
    } catch (error) {
      setMessage(`Lỗi: ${error.message}`)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    loadStudents()
  }, [])

  function handleChange(event) {
    setForm({ ...form, [event.target.name]: event.target.value })
  }

  async function handleSubmit(event) {
    event.preventDefault()
    setMessage('')

    const url = editingId ? `${API}/${editingId}` : API
    const method = editingId ? 'PUT' : 'POST'

    try {
      const response = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })

      const result = await response.json().catch(() => ({}))
      if (!response.ok) {
        throw new Error(result.message || 'Không thể lưu sinh viên')
      }

      setMessage(editingId ? 'Cập nhật sinh viên thành công!' : 'Thêm sinh viên thành công!')
      setForm(emptyForm)
      setEditingId(null)
      await loadStudents()
    } catch (error) {
      setMessage(`Lỗi: ${error.message}`)
    }
  }

  function startEdit(student) {
    setEditingId(student._id)
    setForm({
      studentId: student.studentId || '',
      name: student.name || '',
      email: student.email || '',
    })
    setMessage('')
  }

  async function deleteStudent(id) {
    if (!window.confirm('Bạn có chắc muốn xóa sinh viên này?')) return

    try {
      const response = await fetch(`${API}/${id}`, { method: 'DELETE' })
      if (!response.ok) throw new Error('Không thể xóa sinh viên')

      setMessage('Xóa sinh viên thành công!')
      if (editingId === id) {
        setEditingId(null)
        setForm(emptyForm)
      }
      await loadStudents()
    } catch (error) {
      setMessage(`Lỗi: ${error.message}`)
    }
  }

  function cancelEdit() {
    setEditingId(null)
    setForm(emptyForm)
    setMessage('')
  }

  return (
    <main className="container">
      <header className="page-header">
        <p className="eyebrow">MERN STACK · DOCKER</p>
        <h1>Quản lý sinh viên - Version 2.0</h1>
        <p>React · Express · MongoDB Atlas</p>
      </header>

      <section className="panel">
        <h2>{editingId ? 'Cập nhật sinh viên' : 'Thêm sinh viên mới'}</h2>

        <form onSubmit={handleSubmit}>
          <label>
            Mã sinh viên
            <input
              name="studentId"
              value={form.studentId}
              onChange={handleChange}
              placeholder="VD: SV001"
              required
            />
          </label>

          <label>
            Họ và tên
            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Nhập họ và tên"
              required
            />
          </label>

          <label>
            Email
            <input
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              placeholder="student@example.com"
              required
            />
          </label>

          <div className="actions">
            <button type="submit">
              {editingId ? 'Lưu thay đổi' : 'Thêm sinh viên'}
            </button>
            {editingId && (
              <button type="button" className="secondary" onClick={cancelEdit}>
                Hủy sửa
              </button>
            )}
          </div>
        </form>

        {message && <p className="message" role="status">{message}</p>}
      </section>

      <section className="panel">
        <div className="table-heading">
          <h2>Danh sách sinh viên</h2>
          <span>{students.length} sinh viên</span>
        </div>

        {loading ? (
          <p>Đang tải danh sách...</p>
        ) : students.length === 0 ? (
          <p>Chưa có sinh viên. Hãy thêm sinh viên bằng biểu mẫu phía trên.</p>
        ) : (
          <div className="table-wrap">
            <table>
              <thead>
                <tr>
                  <th>Mã sinh viên</th>
                  <th>Họ và tên</th>
                  <th>Email</th>
                  <th>Thao tác</th>
                </tr>
              </thead>
              <tbody>
                {students.map((student) => (
                  <tr key={student._id}>
                    <td>{student.studentId}</td>
                    <td>{student.name}</td>
                    <td>{student.email}</td>
                    <td>
                      <div className="row-actions">
                        <button
                          type="button"
                          className="secondary"
                          onClick={() => startEdit(student)}
                        >
                          Sửa
                        </button>
                        <button
                          type="button"
                          className="danger"
                          onClick={() => deleteStudent(student._id)}
                        >
                          Xóa
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </section>
    </main>
  )
}

export default App
