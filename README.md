# 🛠 JobBoard Backend (Node.js + PostgreSQL)

A backend system for a **Job Board** application built with **Node.js, Express, Sequelize, and PostgreSQL**.

---

## 🚀 Features
- User authentication (Admin, Company, JobSeeker)
- Job posting and applications
- Secure JWT-based authentication
- PostgreSQL database with Sequelize ORM
- RESTful API endpoints

---

## 📦 Tech Stack
- **Backend**: Node.js, Express.js
- **Database**: PostgreSQL with Sequelize ORM
- **Authentication**: JWT (JSON Web Tokens)
- **Deployment**: Render.com

---

## 🛠 Installation

### 1️⃣ **Clone the repository**
```sh
git clone https://github.com/your-username/jobboard-backend.git
cd jobboard-backend
2️⃣ Install dependencies
npm install
3️⃣ Set up the .env file
Create a .env file in the project root and add:
PORT=5000
# PostgreSQL Database Config
PG_HOST=localhost
PG_DATABASE=jobboard
PG_USER=your_username
PG_PASSWORD=your_password
PG_PORT=5432

# JWT Secret Key
JWT_SECRET=your_super_secret_key
🔹 For Cloud Database (Render, Supabase, AWS RDS, etc.), use:
DATABASE_URL=postgres://your_username:your_password@your_database_host:5432/your_database_name
4️⃣ Run Database Migrations
npx sequelize-cli db:migrate
5️⃣ Start the Server
npm start  # For production
npm run dev  # For development (with Nodemon)
✅ Server will start on http://localhost:5000
📡 API Endpoints
🔹 User Authentication
Method	Endpoint	Description
POST	/api/auth/register	Register a user
POST	/api/auth/login	Login & get token
Example Login Request:
json
{
  "email": "john@example.com",
  "password": "password123"
}
✅ Response (JWT Token):
json
{
  "token": "your_jwt_token_here"
}
🔹 Job Management
Method	Endpoint	Description
GET	/api/jobs	Get all jobs
POST	/api/jobs	Create a new job (Company)
Example Create Job Request:
json
{
  "title": "Backend Developer",
  "description": "Looking for an experienced Node.js developer.",
  "company": "TechCorp",
  "location": "Remote",
  "salary": 90000
}
✅ Include JWT Token in Headers:
Authorization: Bearer your_jwt_token_here
🔹 Job Applications
Method	Endpoint	Description
POST	/api/applications/:jobId	Apply for a job
GET	/api/applications/:jobId	View all applications
Example Apply for a Job:
json
{
  "resumeUrl": "https://example.com/my_resume.pdf"
}
🚀 Deployment on Render
Push your code to GitHub
git add .
git commit -m "Initial commit"
git push origin main
Go to Render and create a New Web Service.
Connect your GitHub repository.
Set the Environment Variables:
pgsql
PG_HOST, PG_DATABASE, PG_USER, PG_PASSWORD, JWT_SECRET
Use npm start as the start command.

Click Deploy and wait for your backend to go live.

✅ Your API will be accessible at:
https://your-app-name.onrender.com/api/jobs
