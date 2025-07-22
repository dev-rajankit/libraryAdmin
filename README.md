
# 📚 Recoz Library 

A comprehensive **full-stack application** to manage library or co-working space memberships, expenses, and admin operations — built with **Node.js, Express, MongoDB, React, and Vite**.

---

## 🚀 Features

- **Admin Authentication (JWT based)**
- **Membership Management**
  - Add, update, delete members
  - Track due dates, fees paid, seating hours
  - View expiring/expired memberships
- **Expense Management**
  - Record and manage various types of expenses (Rent, Water, Electricity, etc.)
  - Monthly expense summary
- **Dashboard**
  - Overview of total members, revenue, expenses
  - Monthly revenue charts
- **Notifications**
  - Automated alerts for expiring memberships
  - QR code based payment prompts
- **Secure API**
  - Protected routes using authentication middleware
- **Responsive Admin Panel**
  - Developed with React and Vite for fast performance

---
<img width="1360" height="637" alt="image" src="https://github.com/user-attachments/assets/ca7b4864-cb6b-426c-ae4a-891a84955c4f" />

<img width="1348" height="636" alt="image" src="https://github.com/user-attachments/assets/86513b5c-e552-444f-b137-02a864a5f77c" />

<img width="1344" height="639" alt="image" src="https://github.com/user-attachments/assets/a3a1dc57-0c4f-4dc2-80f6-aa2b1bebdfa2" />

<img width="1366" height="804" alt="screencapture-recoz-library-admin-vercel-app-dashboard-2025-07-22-19_18_32" src="https://github.com/user-attachments/assets/2f8547d8-132b-42c1-9dee-2c46db4e840d" />

<img width="1366" height="661" alt="screencapture-recoz-library-admin-vercel-app-dashboard-2025-07-22-19_19_35" src="https://github.com/user-attachments/assets/5aa6f246-8917-48e6-938c-d2eae0b406ad" />



## 🛠 Tech Stack

| Technology     | Purpose           |
|----------------|-------------------|
| Node.js        | Backend runtime    |
| Express.js     | REST API Framework |
| MongoDB        | Database           |
| Mongoose       | ODM for MongoDB    |
| React.js       | Frontend UI        |
| Vite           | React build tool   |
| JWT            | Authentication     |
| Bcrypt         | Password hashing   |
| Express Validator | Input validation |

---

## 📂 Folder Structure

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



---

## ⚙️ Setup Instructions

### Backend

1. **Install dependencies**
cd backend
npm install


2. **Environment Configuration**
   Create a `.env` file in `/backend` with:


MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
PORT=5000


3. **Run Backend**


npm run dev


### Frontend

1. **Install dependencies**


cd frontend
npm install


2. **Start Frontend**


npm run dev


3. Open:
http://localhost:5173


---

## 🔒 API Endpoints

### Auth

| Method | Endpoint          | Description       |
| ------ | ----------------- | ----------------- |
| POST   | `/api/auth/login` | Admin Login       |
| GET    | `/api/auth/me`    | Get Admin Profile |

### Members

| Method | Endpoint                | Description           |
| ------ | ----------------------- | --------------------- |
| GET    | `/api/members`          | List all members      |
| POST   | `/api/members`          | Create new member     |
| PUT    | `/api/members/:id`      | Update member details |
| DELETE | `/api/members/:id`      | Delete member         |
| GET    | `/api/members/expired`  | List expired members  |
| GET    | `/api/members/expiring` | List expiring members |

### Expenses

| Method | Endpoint                | Description     |
| ------ | ----------------------- | --------------- |
| GET    | `/api/expenses`         | List expenses   |
| POST   | `/api/expenses`         | Add expense     |
| PUT    | `/api/expenses/:id`     | Update expense  |
| DELETE | `/api/expenses/:id`     | Delete expense  |
| GET    | `/api/expenses/summary` | Expense summary |

### Dashboard

| Method | Endpoint                       | Description           |
| ------ | ------------------------------ | --------------------- |
| GET    | `/api/dashboard/stats`         | Overview stats        |
| GET    | `/api/dashboard/revenue-chart` | Monthly revenue chart |

---

## 📦 Deployment

* **Backend**: Render / Railway / Heroku
* **Frontend**: Vercel / Netlify

---

## 📌 Future Enhancements

* SMS/WhatsApp payment reminders
* Razorpay/Stripe payment integration
* User role management (admin, staff)
* Member self-service portal

---

## 👨‍💻 Author

**Ankit Raj**
