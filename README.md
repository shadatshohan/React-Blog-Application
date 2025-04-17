# 📝 React Blog Application

A simple and lightweight blog application built with **React**, allowing users to **create**, **read**, **update**, and **delete** (CRUD) blog posts. It uses **JSON data** (via `json-server`) to manage and store blog content locally.

---

## 🔥 Features

- 📰 View all blog posts
- ➕ Create a new post
- ✏️ Edit and update existing posts
- ❌ Delete posts
- ⚡ Real-time feedback (loading, error messages)
- 🧾 JSON-server as a mock backend

---

## 🛠️ Tech Stack

- **Frontend:** React (Vite or Create React App)
- **Backend (Mock):** json-server
- **Styling:** CSS Modules or plain CSS
- **Icons:** React Icons (optional)

---

## 🚀 Getting Started

### 1. Clone the Repository
```bash
git clone https://github.com/your-username/react-blog-app.git
cd react-blog-app
npm start
npx json-server -p 3500 -w data/db.json
