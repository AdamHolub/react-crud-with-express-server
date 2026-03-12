# ⚛️ React CRUD with Express Server

![Node.js](https://img.shields.io/badge/-Node.js-339933?logo=node.js&logoColor=white&style=for-the-badge) 
![React](https://img.shields.io/badge/-React-61DAFB?logo=react&logoColor=black&style=for-the-badge) 
![Express](https://img.shields.io/badge/-Express-000000?logo=express&logoColor=white&style=for-the-badge) 
![License](https://img.shields.io/badge/License-MIT-yellow?logo=github&logoColor=black&style=for-the-badge)

Simple template project demonstrating a CRUD application with a React client and Express.js server connected to MongoDB.

---
<details> 
  <summary>📑 Table of Contents</summary> 
  <ol> 
    <li> <a href="#-features">Features</a> </li> 
    <li> <a href="#-quick-start">Quick Start</a> 
      <ul> 
        <li><a href="#-prerequisites">Prerequisites</a></li> 
      </ul> 
    </li> 
    <li><a href="#-project-structure">Project Structure</a></li> 
    <li><a href="#-tech-stack">Tech Stack</a></li> 
    <li><a href="#-api-endpoints">API Endpoints</a></li> 
    <li><a href="#-environment-variables">Environment Variables</a></li> 
    <li><a href="#-license">License</a></li> </ol> </details>

## 🚀 Features
- **Frontend:** Modern React with Vite
- **Backend:** Robust Express.js REST API
- **Database:** MongoDB integration via Mongoose
- **Structure:** Clean, separation-of-concerns oriented architecture

## ⚡ Quick start
Clone the repository and start the development server:

```
git clone https://github.com/AdamHolub/react-crud-with-express-server.git
cd react-crud-with-express-server
npm install
npm run dev
```
This will start:
- Express backend server
- React development server

Once started, the applications are available at:
- Frontend: http://localhost:5173
- Backend: http://localhost:3000
  
### 📋 Prerequisites
Make sure you have installed:

- Node.js **18.x or higher**
- npm **9.x or higher**
- MongoDB instance (local or cloud)


## 🛠 Tech Stack

- Frontend: React
- Backend: Express.js
- Runtime: Node.js
- Database: MongoDB

## 📁 Project Structure
```
react-crud-with-express-server/
│
├── client/                     # React frontend (Vite)
│   ├── src/                    # React source code
│   ├── .eslintrc.cjs           # ESLint configuration
│   ├── index.html              # Main HTML file
│   ├── package.json
│   ├── package-lock.json
│   └── vite.config.js          # Vite configuration
│
├── server/                     # Express backend
│   ├── bin/                    # Server startup scripts
│   ├── controllers/            # Request logic
│   ├── models/                 # Database models
│   ├── public/                 # Static files
│   ├── routes/                 # API routes
│   ├── views/                  # Server-side views
│   │
│   ├── .env.example
│   ├── app.js                  # Express app configuration
│   ├── package.json
│   └── package-lock.json
│
├── .gitignore
├── package.json                # Workspace configuration
├── package-lock.json
└── README.md
```

## 🔌 API Endpoints
Example CRUD endpoints:
| Method | Endpoint         | Description      |
|------|----------------|----------------|
| GET  | /api/items      | Get all items   |
| GET  | /api/items/:id  | Get item by ID  |
| POST | /api/items      | Create new item |
| PUT  | /api/items/:id  | Update item     |
| DELETE | /api/items/:id | Delete item     |

## ⚙️ Environment Variables
Navigate to the `server` directory.
```
cd server
```
Copy `.env.example` to a new file named `.env`:
```
cp .env.example .env
```
Open `.env` and add your MongoDB connection:
```
PORT=3000
DB_CONNECTION=your_database_connection
```

## 🎯 Purpose of the Project
This project is meant to:
- Demonstrate communication between React and Express
- Serve as a template for CRUD applications
- Provide a starting point for full-stack projects

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
