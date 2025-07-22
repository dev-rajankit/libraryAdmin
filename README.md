
A comprehensive full-stack application to manage library or co-working space memberships, expenses, and admin operations — built with Node.js, Express, MongoDB, React, and Vite.

🚀 Features
Admin Authentication (JWT based)

Membership Management

Add, update, delete members

Track due dates, fees paid, seating hours

View expiring/expired memberships

Expense Management

Record and manage various types of expenses (Rent, Water, Electricity, etc.)

Monthly expense summary

Dashboard

Overview of total members, revenue, expenses

Monthly revenue charts

Notifications

Automated alerts for expiring memberships

QR code based payment prompts

Secure API

Protected routes using authentication middleware

Responsive Admin Panel

Developed with React and Vite for fast performance

🛠 Tech Stack
Technology	Purpose
Node.js	Backend runtime
Express.js	REST API Framework
MongoDB	Database
Mongoose	ODM for MongoDB
React.js	Frontend UI
Vite	React build tool
JWT	Authentication
Bcrypt	Password hashing
Express Validator	Input validation

📂 Folder Structure
arduino
Copy
Edit
backend/
├── src/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── middleware/
│   ├── config/
│   └── scripts/
├── app.js
├── server.js
└── .env
frontend/
├── src/
│   ├── components/
│   ├── pages/
│   └── services/
└── vite.config.js
⚙️ Setup Instructions
Backend
Install dependencies

bash
Copy
Edit
cd backend
npm install
Environment Configuration

Create a .env file with:

ini
Copy
Edit
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
PORT=5000
Run Backend

bash
Copy
Edit
npm run dev
Frontend
Install dependencies

bash
Copy
Edit
cd frontend
npm install
Start Frontend

bash
Copy
Edit
npm run dev
Navigate to:

arduino
Copy
Edit
http://localhost:5173
🔒 API Endpoints
Auth
Method	Endpoint	Description
POST	/api/auth/login	Admin Login
GET	/api/auth/me	Get Admin Profile

Members
Method	Endpoint	Description
GET	/api/members	List all members
POST	/api/members	Create new member
PUT	/api/members/:id	Update member details
DELETE	/api/members/:id	Delete member
GET	/api/members/expired	List expired members
GET	/api/members/expiring	List expiring members

Expenses
Method	Endpoint	Description
GET	/api/expenses	List expenses
POST	/api/expenses	Add expense
PUT	/api/expenses/:id	Update expense
DELETE	/api/expenses/:id	Delete expense
GET	/api/expenses/summary	Expense summary

Dashboard
Method	Endpoint	Description
GET	/api/dashboard/stats	Overview stats
GET	/api/dashboard/revenue-chart	Monthly revenue chart

📦 Deployment
You can deploy:

Backend: Render / Railway / Heroku

Frontend: Vercel / Netlify

📌 Future Enhancements
SMS/WhatsApp payment reminders

Razorpay/Stripe integration

User role management

Member self-service portal

👨‍💻 Author
Ankit Raj
Freelance Full Stack Developer
LinkedIn | GitHub