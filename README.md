# Trellow 🚀

A full-stack task management application inspired by Trello, built using the MERN stack. Trellow provides secure authentication, role-based access control, task assignment/management, user management, and productivity tracking through dedicated dashboards for admins and members.

## 🚧 Project Status: In Development

Currently, the backend implementation is complete, and frontend development is in progress. The Login and Signup pages with authentication, the dashboard layout, and the Create Task page have been completed.
All backend APIs have been developed and tested using Thunder Client.

> Note: Some features are currently available through backend APIs and are being integrated into the frontend.

## ✨ Features

### 🔐 Authentication & Authorization
- User registration and login
- JWT-based authentication
- Secure password hashing with bcrypt
- Protected routes
- Role-based access control (Admin & Member)

### 📋 Task Management
- Create tasks
- Update tasks
- Delete tasks
- View assigned tasks
- Task status tracking
- Priority management
- Due date support

### 👥 User Management
- Admin can manage users
- Assign tasks to team members
- View user-related task information
- Role-based user access

### 📊 Dashboard
- Dedicated Admin Dashboard
- Dedicated Member Dashboard
- Task statistics and summaries
- Quick overview of task progress

### 🖼 Profile Management
- User profile support
- Profile image upload
- Personal account management

### 📁 Reports & Export
- Admin report generation
- Export functionality for task-related reports

---

## 🛠 Tech Stack

### Frontend
- React
- Vite
- React Router
- Axios
- Tailwind CSS

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT
- bcrypt
- Multer
- CORS

---

## 📂 Project Structure

```text
trellow/
│
├── backend/
│   ├── config/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── uploads/
│   └── server.js
│
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── routes/
│   │   ├── context/
|   |   ├── hooks/
|   |   ├── utils/
│   │   └── assets/
│   ├── index.html
│   └── vite.config.js
│
├── .gitignore
└── README.md
```

---

## 🚀 Getting Started

### Prerequisites

Make sure you have the following installed:

- Node.js
- npm
- MongoDB

### Clone the Repository

```bash
git clone https://github.com/aayush-778/trellow.git
cd trellow
```

## Backend Setup

Navigate to the backend directory:

```bash
cd backend
```

Install dependencies:

```bash
npm install
```

Create a `.env` file in the backend directory and add:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
ADMIN_INVITE_TOKEN=your_admin_invite_token
CLIENT_URL=http://localhost:5173
```

Start the backend server:

```bash
npm run dev
```

The backend should now be running on:

```text
http://localhost:5000
```

---

## Frontend Setup

Open a new terminal and navigate to the frontend directory:

```bash
cd frontend
```

Install dependencies:

```bash
npm install
```

Start the frontend development server:

```bash
npm run dev
```

The frontend should now be running on:

```text
http://localhost:5173
```

---

## Running the Application

1. Start MongoDB
2. Start the backend server
3. Start the frontend server
4. Open:

```text
http://localhost:5173
```

in your browser.

---

## 🔑 User Roles

### Admin
- Create and manage tasks
- Assign tasks to users
- View platform statistics
- Manage users
- Export reports

### Member
- View assigned tasks
- Update task progress
- Track task status
- Manage personal profile

---

## 👨‍💻 Author

**Aayush Raj**

Built to explore and implement modern full-stack MERN development concepts including authentication, role-based access control, authorization, task management, user collaboration, and dashboard analytics.