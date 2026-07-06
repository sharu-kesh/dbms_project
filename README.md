# Vaahan 🚗 - Full-Stack Vehicle Management System

An all-in-one portal designed to bring everything related to vehicles under a single roof. This web application streamlines registrations, certificate checks, ownership transfers, and vehicle theft tracking for users, police officials, and RTO administrators.

---

## 🌟 Key Features

### 👤 For General Users
* **Multi-Step Registration**: Register personal details, vehicle specs, and document numbers.
* **Digital Document Wallet**: Instant access to vehicle documents in one place:
  * **Licence Details**: Track validity, issue, and expiry dates.
  * **Insurance Information**: View provider, scheme number, and expiry status.
  * **Pollution Certificate (PUC)**: Monitor PUC validation status and emissions engine details.
* **Theft Reporting**: File complaints for lost/stolen vehicles, which are automatically assigned to the correct local police station based on your registration prefix.
* **Ownership Transfer**: Sell or transfer vehicle ownership securely. The system validates the chassis number and automatically emails the buyer their generated password using SMTP.

### 👮 For Police Officials
* **Unified Dashboard**: View theft complaints filed within their station's jurisdiction.
* **Case Resolution**: Update complaint status instantly to mark a vehicle as "Found" (auto-stamps the current date).
* **Global Vehicle Lookup**: Query details of any vehicle in the system by its registration plate to view owner details, license, insurance, and PUC status.

### 🏛️ For RTO Admins (Super Admins)
* **Verify Ownership Transfer**: Approve or deny pending transfer requests.
* **Automated Record Updating**: Approving a transfer automatically updates the email, address, phone number, and name of the owner across all tables (`users`, `user_details`, and `vehicle_details`).

---

## 🛠️ Technology Stack

* **Frontend**: React.js (SPA), React Router DOM, Axios, React Icons, Vanilla CSS
* **Backend**: Node.js, Express.js, cookie-parser, express-session (session-based authentication)
* **Database**: PostgreSQL (Neon.tech serverless Postgres / local database)
* **Notifications**: Nodemailer (Gmail SMTP server)

---

## 🚀 Getting Started

### 1. Prerequisites
Ensure you have the following installed:
* [Node.js](https://nodejs.org/) (v16 or higher)
* [PostgreSQL](https://www.postgresql.org/) (or a free cloud database on [Neon](https://neon.tech/))

### 2. Database Setup
1. Create a database named `vehicle_management` in your PostgreSQL instance.
2. Run the SQL commands in [Login_fol/schema.sql](Login_fol/schema.sql) in your query editor to initialize all tables, keys, and views.

### 3. Backend Setup & Configuration
1. Open a terminal and navigate to the backend folder:
   ```bash
   cd Login_fol
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file in the `Login_fol` folder:
   ```env
   # PostgreSQL database config (or use DATABASE_URL)
   PGHOST=your_db_host
   PGDATABASE=vehicle_management
   PGUSER=postgres
   PGPASSWORD=your_db_password
   DATABASE_URL=your_postgres_connection_string (e.g. from Neon)

   # Gmail SMTP details for transfer emails
   MAIL_USER=your_email@gmail.com
   MAIL_PASS=your_gmail_app_password
   ```
4. Start the backend server:
   ```bash
   npm run dev
   ```
   *The backend will run on `http://localhost:5000`.*

### 4. Frontend Setup
1. Open a new terminal in the root directory.
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the React development server:
   ```bash
   npm start
   ```
   *The frontend will run on `http://localhost:3000`.*

---

## 📡 Production Deployment

### 1. Backend (e.g. Render)
* Deploy the `Login_fol` directory as a Node Web Service.
* Add your database credentials and `FRONTEND_URL` (your deployed client URL) to the Environment Variables.

### 2. Frontend (e.g. Netlify)
* Deploy the root repository as a Static Site.
* Set the environment variable `REACT_APP_API_URL` to point to your live Render backend URL.
* Add a `_redirects` file to the publish folder (auto-generated in `public/_redirects`) to enable React client-side routing.
