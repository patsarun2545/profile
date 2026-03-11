# Patsarun Kathinthong — Portfolio

> **🔗 ดูผลงานได้ที่ → [patsarun2545.github.io/profile](https://patsarun2545.github.io/profile/)**

---

## 👋 เกี่ยวกับฉัน

**Full Stack Developer** เชี่ยวชาญ PERN/MERN Stack ได้แก่ PostgreSQL, MongoDB, Express.js, React.js/Next.js และ Node.js มีประสบการณ์พัฒนา RESTful API ที่ปลอดภัย, JWT Authentication, RBAC Authorization และออกแบบฐานข้อมูลเชิงสัมพันธ์ เน้น Clean Architecture, Performance Optimization และ Deployment บน Ubuntu Linux

📧 patsarun2545@gmail.com &nbsp;|&nbsp; 📞 061-651-6187 &nbsp;|&nbsp; 📍 Huai Khwang, Bangkok  
🔗 [github.com/patsarun2545](https://github.com/patsarun2545)

---

## 🗂️ ผลงาน (Projects)

### 1. Rental Management System — Admin Panel
**PERN Stack · Feb 2026 · Graduation Project**

ระบบหลังบ้านสำหรับจัดการการเช่าครบวงจร ตั้งแต่รับจองจนเสร็จสิ้นสัญญา

- Workflow engine หลายขั้นตอน: `PENDING → CONFIRMED → ACTIVE → RETURNED → COMPLETED`
- RBAC Middleware ป้องกันเส้นทาง Admin ทุกเส้น
- ระบบตรวจสอบหลักฐานการโอนเงิน (อนุมัติ/ปฏิเสธ)
- State Machine มัดจำ: `HELD / REFUNDED / DEDUCTED` พร้อมคำนวณอัตโนมัติ
- โมดูลค่าปรับ: `LATE / DAMAGE / LOST` พร้อมออกใบแจ้งหนี้อัตโนมัติ
- ตรวจสอบ Stock Conflict ป้องกัน Double-Booking
- Dashboard: กราฟรายรับรายเดือน, Top-10 สินค้า, ติดตามการเช่าเกินกำหนด
- Audit Log พร้อม Date-Range Cleanup

**Stack:** PostgreSQL · Express.js · React.js · Node.js · JWT · RBAC · Prisma ORM

---

### 2. Dress Rental Web
**PERN Stack · Dec 2024 – Feb 2025 · Graduation Project**

เว็บแอปเช่าชุด สถาปัตยกรรมแบบ Dual-Frontend (Customer App + Admin Panel)

- Auth แยกอิสระแต่ละ Frontend ด้วย JWT Middleware + Role-Based Access
- PostgreSQL Schema รองรับ Rental Lifecycle เต็มรูปแบบ
- RESTful API ครอบคลุม: สินค้า, การเช่า, การชำระเงิน, มัดจำ, ค่าปรับ, การคืน และ Audit Log
- ตะกร้าสินค้าฝั่ง Customer: เลือกระยะเช่า, คำนวณวันคืนอัตโนมัติ, ส่วนลด, ค่าส่ง
- Import สินค้าและหมวดหมู่ผ่าน Excel (Bulk Import)

**Stack:** PostgreSQL · Express.js · React.js · Node.js · JWT · RBAC · Prisma

---

### 3. Mobile Store Web
**MERN Stack · Jul 2024 – Oct 2024**

ระบบจัดการร้านขายมือถือ ครอบคลุมทั้ง Stock, ขาย และงานซ่อม

- Next.js 14 (App Router) + TypeScript + Tailwind CSS
- MongoDB via Prisma ORM: สินค้า, ออเดอร์ขาย, งานซ่อม, ผู้ใช้, ตั้งค่าบริษัท
- Sell Workflow: ค้นหา Serial Number → Pending List → Bulk Confirm → Mark Sold
- Bulk Stock Entry รองรับสูงสุด 10,000 รายการต่อครั้ง
- Dashboard: รายรับรวม, จำนวนขาย, งานซ่อม และกราฟรายรับรายเดือน (Recharts)
- Deploy บน Ubuntu Linux ด้วย PM2

**Stack:** Next.js · TypeScript · Tailwind CSS · MongoDB · Prisma · Node.js · JWT · PM2

---

## 🛠️ ทักษะ (Skills)

| ด้าน | เทคโนโลยี |
|------|-----------|
| **Languages** | JavaScript (ES6+), TypeScript, SQL, Python, HTML5, CSS3 |
| **Frameworks & Libs** | React.js, Next.js, Node.js, Express.js, Nest.js, Tailwind, Bootstrap |
| **Databases** | PostgreSQL, MongoDB, MySQL, Prisma ORM |
| **Tools & Platforms** | Git, GitHub, Postman, Ubuntu Linux, PM2 |

---

## 💼 ประสบการณ์ทำงาน

**IT Support Intern** — NAGA METAL SHEET CO. *(Mar 2024 – Jun 2024)*

- ติดตั้งและ Configure ซอฟต์แวร์วิศวกรรม/ออกแบบสำหรับภายใน
- จัดทำเอกสารและคู่มือการใช้งาน
- ดูแลเครื่องมือสื่อสารภายในองค์กร
- ให้คำปรึกษาด้านเทคนิคและ IT Support ประจำวัน

---

## 🎓 การศึกษา

**Business Computer** — Mahasarakham University *(Jun 2021 – May 2025)*

---

## 🚀 เทคโนโลยีของ Portfolio นี้

พัฒนาด้วย **React + Vite** พร้อม Scroll Reveal, Typing Animation, Lightbox Gallery และ Responsive Design รองรับทุกขนาดหน้าจอ

---

<p align="center">Made with ❤️ by Patsarun Kathinthong · Full Stack Developer · PERN · MERN</p>
