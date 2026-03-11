# Patsarun Kathinthong — Portfolio

> **🔗 Live Portfolio → [patsarun2545.github.io/profile](https://patsarun2545.github.io/profile/)**

---

## 👋 About Me

**Full Stack Developer** specializing in PERN/MERN Stack (PostgreSQL, MongoDB, Express.js, React.js/Next.js, Node.js). Experienced in building secure RESTful APIs, JWT authentication, RBAC authorization, and relational database design. Strong understanding of clean architecture, performance optimization, and deployment on Ubuntu Linux.

📧 patsarun2545@gmail.com &nbsp;|&nbsp; 📞 061-651-6187 &nbsp;|&nbsp; 📍 Huai Khwang, Bangkok  
🔗 [github.com/patsarun2545](https://github.com/patsarun2545)

---

## 🗂️ Projects

### 1. Rental Management System — Admin Panel
**PERN Stack · Feb 2026 · Graduation Project**

A dedicated back-office system for managing the full rental lifecycle from booking to completion.

- Multi-step workflow engine: `PENDING → CONFIRMED → ACTIVE → RETURNED → COMPLETED`
- RBAC middleware restricting all back-office routes to admin roles only
- Payment slip verification — admins can approve or reject uploaded payment evidence
- Deposit state machine: `HELD / REFUNDED / DEDUCTED` with automatic calculation
- Penalty module covering `LATE / DAMAGE / LOST` with auto-generated invoices
- Stock conflict-checking to prevent double-booking across overlapping date ranges
- Reports: monthly revenue chart, top-10 rented products, overdue rental tracking
- Audit Log with date-range cleanup — full traceability of all admin actions

**Stack:** PostgreSQL · Express.js · React.js · Node.js · JWT · RBAC · Prisma ORM

---

### 2. Dress Rental Web
**PERN Stack · Dec 2024 – Feb 2025 · Graduation Project**

A dress rental web app with dual-frontend architecture (Customer App + Admin Panel).

- Independent role-based access per frontend (owner / user) via JWT middleware
- PostgreSQL schema supporting full rental lifecycle
- RESTful APIs for products, rentals, payments, deposits, penalties, returns, and audit logs
- Payment slip upload and verification flow — approve or reject customer-submitted evidence
- Deposit lifecycle: `HELD / REFUNDED / DEDUCTED` with partial deduction support
- Stock reservation conflict-checking to prevent double-booking
- Customer cart with configurable rental duration, auto return date, discount, and shipping summary
- Bulk product and category import via Excel

**Stack:** PostgreSQL · Express.js · React.js · Node.js · JWT · RBAC · Prisma

---

### 3. Mobile Store Web
**MERN Stack · Jul 2024 – Oct 2024**

A store management system covering stock, sales, and repair jobs.

- Built with Next.js 14 (App Router), TypeScript, and Tailwind CSS
- MongoDB via Prisma ORM: products, sell orders, service/repair jobs, users, company settings
- Sell workflow: serial number lookup → pending list → bulk confirm → mark as sold
- Bulk stock entry supporting up to 10,000 units per transaction
- Dashboard: total income, sales count, repair jobs, and monthly income chart (Recharts)
- JWT-based authentication with admin / user role levels
- Deployed on Ubuntu Linux with PM2 process management

**Stack:** Next.js · TypeScript · Tailwind CSS · MongoDB · Prisma · Node.js · JWT · PM2 · Ubuntu

---

## 🛠️ Skills

| Category | Technologies |
|----------|-------------|
| **Languages** | JavaScript (ES6+), TypeScript, SQL, Python, HTML5, CSS3 |
| **Frameworks & Libraries** | React.js, Next.js, Node.js, Express.js, Nest.js, Tailwind CSS, Bootstrap |
| **Databases** | PostgreSQL, MongoDB, MySQL, Prisma ORM |
| **Tools & Platforms** | Git, GitHub, Postman, Ubuntu Linux, PM2 |

---

## 💼 Experience

**IT Support Intern** — NAGA METAL SHEET CO. *(Mar 2024 – Jun 2024)*

- Installed and configured engineering/design software for internal workflows
- Created structured documentation and user guides for operational efficiency
- Managed internal communication tools and visual materials for staff coordination
- Provided technical troubleshooting and daily IT support for employees

---

## 🎓 Education

**Bachelor of Business Computer** — Mahasarakham University *(Jun 2021 – May 2025)*

---

## 🚀 About This Portfolio

Built with **React + Vite** featuring scroll reveal animations, typing effects, a lightbox image gallery, and fully responsive design across all screen sizes.

---

<p align="center">Made with ❤️ by Patsarun Kathinthong · Full Stack Developer · PERN · MERN</p>
