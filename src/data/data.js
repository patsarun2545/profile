import { onlineDressImages, adminPanelImages, nextjsEcomImages } from "../data/images";

export const PROFILE = {
  name: "Patsarun Kathinthong",
  title: "Full Stack Developer",
  email: "patsarun2545@gmail.com",
  phone: "061-651-6187",
  github: "github.com/patsarun2545",
  location: "Huai Khwang, Bangkok",
  bio: "Full Stack Developer specializing in PERN/MERN Stack (PostgreSQL, MongoDB, Express.js, React.js/Next.js, Node.js). Experienced in developing secure RESTful APIs, JWT authentication, RBAC authorization, and relational database design. Strong understanding of clean architecture, performance optimization, and deployment on Ubuntu Linux. Passionate about building scalable systems and improving software quality.",
};

export const SKILLS = {
  Languages: ["JavaScript (ES6+)", "TypeScript", "SQL", "Python", "HTML5", "CSS3"],
  "Frameworks & Libs": ["React.js", "Next.js", "Node.js", "Express.js", "Nest.js", "Tailwind", "Bootstrap"],
  Databases: ["PostgreSQL", "MongoDB", "MySQL", "Prisma ORM"],
  "Tools & Platforms": ["Git", "GitHub", "Postman", "Ubuntu Linux", "PM2"],
};

export const PROJECTS = [
  {
    id: 1,
    title: "Next.js E-Commerce Platform",
    url: "https://nextjs-ecommerce-platform-gamma.vercel.app/",
    subtitle: "Fullstack E-Commerce with Admin Dashboard & Payment Flow",
    period: "Mar 2026",
    stack: "Next.js Fullstack",
    color: "#22c55e",
    colorRgb: "34,197,94",
    screens: nextjsEcomImages,
    tags: ["Next.js", "React", "PostgreSQL", "Prisma", "Tailwind CSS", "JWT", "Zod", "ImageKit"],
    bullets: [
      "Built fullstack e-commerce system using Next.js App Router (Server Actions + Route Handlers)",
      "Implemented role-based access control for CUSTOMER and ADMIN with protected routes",
      "Developed shopping cart with real-time total calculation and checkout flow",
      "Order lifecycle management: PENDING → PAID → SHIPPED → DELIVERED",
      "Payment slip upload system with admin verification (approve/reject)",
      "Generated PromptPay QR code for seamless payment integration",
      "Admin dashboard with revenue charts and order management system",
      "Product & category soft-delete / restore functionality",
      "Integrated ImageKit CDN for image upload and optimization",
      "Server-side rendering (SSR) with caching and revalidation",
    ],
  },
  {
    id: 2,
    title: "Rental Management System",
    url: "https://rental-management-system-blush.vercel.app/",
    subtitle: "Advanced Rental Workflow & Admin Management System",
    period: "Feb 2026",
    stack: "PERN Stack",
    color: "#60a5fa",
    colorRgb: "96,165,250",
    screens: adminPanelImages,
    tags: ["PostgreSQL", "Express.js", "React.js", "Node.js", "JWT", "RBAC", "Prisma ORM"],
    bullets: [
      "Built a dedicated Admin Panel for managing the full rental lifecycle from booking to completion",
      "Implemented RBAC middleware restricting all back-office routes to admin roles only",
      "Designed multi-step workflow engine: PENDING → CONFIRMED → ACTIVE → RETURNED → COMPLETED",
      "Developed payment slip verification — admins can approve or reject uploaded payment evidence",
      "Deposit state machine: HELD / REFUNDED / DEDUCTED with automatic calculation",
      "Penalty module covering LATE / DAMAGE / LOST with auto-generated invoices",
      "Built stock conflict-checking to prevent double-booking across overlapping date ranges",
      "Reports module: monthly revenue chart, top-10 rented products, and overdue rental tracking",
      "Audit Log with date-range cleanup — full traceability of all admin actions",
    ],
  },
  {
    id: 3,
    title: "Dress Rental Web",
    url: ["https://dress-rental-web-wtnm.vercel.app/", "https://dress-rental-web.vercel.app/"],
    subtitle: "Graduation Project Dual-App Rental Platform (Customer & Back Office)",
    period: "Dec 2024 – Feb 2025",
    stack: "PERN Stack",
    color: "#e879f9",
    colorRgb: "232,121,249",
    screens: onlineDressImages,
    tags: ["PostgreSQL", "Express.js", "React.js", "Node.js", "JWT", "RBAC", "Prisma"],
    bullets: [
      "Dual-frontend architecture: Customer App + Admin Panel, each with independent role-based access (owner / user) via JWT middleware",
      "PostgreSQL schema supporting full rental lifecycle: PENDING → CONFIRMED → ACTIVE → RETURNED → COMPLETED",
      "RESTful APIs covering products, rentals, payments, deposits, penalties, returns, and audit logs",
      "Payment slip upload and verification flow — admins approve or reject customer-submitted evidence",
      "Deposit lifecycle: HELD / REFUNDED / DEDUCTED states with partial deduction support",
      "Stock reservation conflict-checking to prevent double-booking across rental date ranges",
      "Customer-facing cart with configurable rental duration, auto return date calculation, discount, and shipping fee summary",
      "Admin panel supports bulk product and category import via Excel",
    ],
  },
  {
    id: 4,
    title: "Mobile Store Web",
    subtitle: "Inventory & Sales Management System with Repair Module",
    period: "Jul 2024 – Oct 2024",
    stack: "MERN Stack",
    color: "#fb923c",
    colorRgb: "251,146,60",
    screens: [],
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "MongoDB", "Prisma", "Node.js", "JWT", "PM2", "Ubuntu"],
    bullets: [
      "Built with Next.js 14 (App Router), TypeScript, and Tailwind CSS for a responsive store management experience",
      "MongoDB schema via Prisma ORM covering products, sell orders, service/repair jobs, users, and company settings",
      "Sell workflow: serial number lookup → pending sell list → bulk confirm → products marked as sold",
      "Bulk stock entry supporting up to 10,000 units per transaction with soft-delete for products and users",
      "RESTful APIs for stock management, sell workflow, repair/service jobs, and user administration",
      "JWT-based authentication with admin / user role levels — auth decoded per-controller, not global middleware",
      "Dashboard with summary stats: total income, total sales count, total repair jobs, and monthly income bar chart via Recharts",
      "Deployed on Ubuntu Linux using PM2 for process management",
    ],
  },
];

export const EXPERIENCE = [
  {
    role: "IT Support Intern",
    company: "NAGA METAL SHEET CO.",
    period: "Mar 2024 – Jun 2024",
    bullets: [
      "Installed and configured engineering/design software for internal workflows",
      "Created structured documentation and user guides for operational efficiency",
      "Managed internal communication tools and visual materials for staff coordination",
      "Provided technical troubleshooting and daily IT support for employees",
    ],
  },
];

export const EDUCATION = {
  degree: "Business Computer",
  university: "Mahasarakham University",
  period: "Jun 2021 – May 2025",
};