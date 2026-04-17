export const translations = {
  en: {
    nav: {
      about: "About",
      projects: "Projects",
      skills: "Skills",
      experience: "Experience",
      contact: "Contact",
    },

    hero: {
      hello: "HELLO, I'M",
      typingWords: ["Full Stack Developer", "PERN Stack Engineer", "MERN Stack Builder", "API & Auth Specialist"],
      badge: "Full Stack Developer",
      bio: "Full Stack Developer specializing in PERN/MERN Stack (PostgreSQL, MongoDB, Express.js, React.js/Next.js, Node.js). Experienced in developing secure RESTful APIs, JWT authentication, RBAC authorization, and relational database design. Strong understanding of clean architecture, performance optimization, and deployment on Ubuntu Linux. Passionate about building scalable systems and improving software quality.",
      cta1: "View Projects →",
      cta2: "Get in Touch",
      stats: [
        { suffix: "Projects", label: "Completed" },
        { suffix: "Stacks",   label: "Tech Mastered" },
        { suffix: "Internship", label: "Experience" },
      ],
    },

    sections: {
      projects:   "Projects",
      skills:     "Skills",
      experience: "Experience",
      contact:    "Contact",
    },

    projects: {
      hint:      "// tap card to expand · click image to zoom",
      liveDemo:  "Live Demo",
      userDemo:  "User Demo",
      adminDemo: "Admin Demo",
      viewCode:  "View Code",
    },

    experience: {
      workLabel:      "WORK EXPERIENCE",
      educationLabel: "EDUCATION",
    },

    contact: {
      availableBadge: "Available for opportunities",
      description:
        "Currently looking for new opportunities — whether it's a full-time role, freelance project, or just a chat about tech. My inbox is always open.",
      labels: {
        email:    "Email",
        phone:    "Phone",
        github:   "GitHub",
        location: "Location",
      },
      formComment:        "// send a message",
      nameLabel:          "NAME",
      emailLabel:         "EMAIL",
      messageLabel:       "MESSAGE",
      namePlaceholder:    "Your name",
      emailPlaceholder:   "your@email.com",
      messagePlaceholder: "What's on your mind?",
      sendBtn:    "Send Message →",
      sendingBtn: "sending...",
      sentBtn:    "✓ Message Sent!",
      copyHint:   "copy",
      copied:     "✓ Copied!",
      errors: {
        nameRequired:    "Name is required",
        emailRequired:   "Email is required",
        emailInvalid:    "Enter a valid email address",
        messageRequired: "Message is required",
        messageTooShort: "Message is too short (min 10 chars)",
      },
    },

    footer: {
      role: "Full Stack Developer · PERN · MERN",
    },

    data: {
      profile: {
        location: "Huai Khwang, Bangkok",
      },
      experience: [
        {
          role:    "IT Support Intern",
          company: "NAGA METAL SHEET CO.",
          period:  "Mar 2024 – Jun 2024",
          bullets: [
            "Installed and configured engineering/design software for internal workflows",
            "Created structured documentation and user guides for operational efficiency",
            "Managed internal communication tools and visual materials for staff coordination",
            "Provided technical troubleshooting and daily IT support for employees",
          ],
        },
      ],
      education: {
        degree:     "Business Computer",
        university: "Mahasarakham University",
        period:     "Jun 2021 – May 2025",
      },
      projects: [
        {
          id:       1,
          period:   "Mar 2026",
          subtitle: "Fullstack E-Commerce with Admin Dashboard & Payment Flow",
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
          id:       2,
          period:   "Feb 2026",
          subtitle: "Advanced Rental Workflow & Admin Management System",
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
          id:       3,
          period:   "Dec 2024 – Feb 2025",
          subtitle: "Graduation Project Dual-App Rental Platform (Customer & Back Office)",
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
          id:       4,
          period:   "Jul 2024 – Oct 2024",
          subtitle: "Inventory & Sales Management System with Repair Module",
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
      ],
    },
  },

  th: {
    nav: {
      about:      "เกี่ยวกับ",
      projects:   "โปรเจกต์",
      skills:     "ทักษะ",
      experience: "ประสบการณ์",
      contact:    "ติดต่อ",
    },

    hero: {
      hello: "สวัสดี, ฉันคือ",
      typingWords: ["นักพัฒนา Full Stack", "วิศวกร PERN Stack", "ผู้สร้าง MERN Stack", "ผู้เชี่ยวชาญ API & Auth"],
      badge: "นักพัฒนา Full Stack",
      bio: "นักพัฒนา Full Stack ที่เชี่ยวชาญด้าน PERN/MERN Stack (PostgreSQL, MongoDB, Express.js, React.js/Next.js, Node.js) มีประสบการณ์พัฒนา RESTful API ที่ปลอดภัย, JWT authentication, RBAC authorization และการออกแบบฐานข้อมูลเชิงสัมพันธ์ มีความเข้าใจด้าน Clean Architecture, การปรับปรุงประสิทธิภาพ และการ Deploy บน Ubuntu Linux มุ่งมั่นสร้างระบบที่ Scalable และพัฒนาคุณภาพซอฟต์แวร์อย่างต่อเนื่อง",
      cta1: "ดูโปรเจกต์ →",
      cta2: "ติดต่อฉัน",
      stats: [
        { suffix: "โปรเจกต์",  label: "ที่เสร็จสิ้น" },
        { suffix: "Stacks",     label: "ที่เชี่ยวชาญ" },
        { suffix: "ฝึกงาน",   label: "ประสบการณ์" },
      ],
    },

    sections: {
      projects:   "โปรเจกต์",
      skills:     "ทักษะ",
      experience: "ประสบการณ์",
      contact:    "ติดต่อ",
    },

    projects: {
      hint:      "// แตะการ์ดเพื่อขยาย · คลิกภาพเพื่อซูม",
      liveDemo:  "ดูตัวอย่าง",
      userDemo:  "ตัวอย่าง User",
      adminDemo: "ตัวอย่าง Admin",
      viewCode:  "ดูโค้ด",
    },

    experience: {
      workLabel:      "ประสบการณ์ทำงาน",
      educationLabel: "การศึกษา",
    },

    contact: {
      availableBadge: "พร้อมรับงานใหม่",
      description:
        "กำลังมองหาโอกาสใหม่ๆ ไม่ว่าจะเป็นงานประจำ, โปรเจกต์ Freelance หรือแค่อยากคุยเรื่องเทคโนโลยี กล่องข้อความเปิดรับเสมอ",
      labels: {
        email:    "อีเมล",
        phone:    "โทรศัพท์",
        github:   "GitHub",
        location: "ที่อยู่",
      },
      formComment:        "// ส่งข้อความหาฉัน",
      nameLabel:          "ชื่อ",
      emailLabel:         "อีเมล",
      messageLabel:       "ข้อความ",
      namePlaceholder:    "ชื่อของคุณ",
      emailPlaceholder:   "อีเมลของคุณ",
      messagePlaceholder: "มีอะไรอยากบอก?",
      sendBtn:    "ส่งข้อความ →",
      sendingBtn: "กำลังส่ง...",
      sentBtn:    "✓ ส่งสำเร็จแล้ว!",
      copyHint:   "คัดลอก",
      copied:     "✓ คัดลอกแล้ว!",
      errors: {
        nameRequired:    "กรุณากรอกชื่อ",
        emailRequired:   "กรุณากรอกอีเมล",
        emailInvalid:    "กรุณากรอกอีเมลที่ถูกต้อง",
        messageRequired: "กรุณากรอกข้อความ",
        messageTooShort: "ข้อความสั้นเกินไป (ขั้นต่ำ 10 ตัวอักษร)",
      },
    },

    footer: {
      role: "นักพัฒนา Full Stack · PERN · MERN",
    },

    data: {
      profile: {
        location: "ห้วยขวาง, กรุงเทพฯ",
      },
      experience: [
        {
          role:    "นักศึกษาฝึกงาน IT Support",
          company: "NAGA METAL SHEET CO.",
          period:  "มี.ค. 2567 – มิ.ย. 2567",
          bullets: [
            "ติดตั้งและกำหนดค่าซอฟต์แวร์วิศวกรรม/ออกแบบสำหรับกระบวนการทำงานภายใน",
            "จัดทำเอกสารและคู่มือผู้ใช้อย่างเป็นระบบเพื่อเพิ่มประสิทธิภาพการทำงาน",
            "ดูแลเครื่องมือสื่อสารภายในและสื่อภาพสำหรับการประสานงานพนักงาน",
            "ให้การสนับสนุนด้านเทคนิคและ IT Support ประจำวันแก่พนักงาน",
          ],
        },
      ],
      education: {
        degree:     "คอมพิวเตอร์ธุรกิจ",
        university: "มหาวิทยาลัยมหาสารคาม",
        period:     "มิ.ย. 2564 – พ.ค. 2568",
      },
      projects: [
        {
          id:       1,
          period:   "มี.ค. 2569",
          subtitle: "ระบบ E-Commerce แบบ Fullstack พร้อม Admin Dashboard และระบบชำระเงิน",
          bullets: [
            "สร้างระบบ E-Commerce แบบ Fullstack โดยใช้ Next.js App Router (Server Actions + Route Handlers)",
            "พัฒนาระบบ Role-Based Access Control สำหรับ CUSTOMER และ ADMIN พร้อม Protected Routes",
            "พัฒนาตะกร้าสินค้าพร้อมคำนวณยอดรวมแบบ Real-time และขั้นตอน Checkout",
            "จัดการวงจรชีวิตคำสั่งซื้อ: PENDING → PAID → SHIPPED → DELIVERED",
            "ระบบอัปโหลดสลิปพร้อมการตรวจสอบโดย Admin (อนุมัติ/ปฏิเสธ)",
            "สร้าง QR Code PromptPay สำหรับการชำระเงินที่สะดวก",
            "Dashboard Admin พร้อมกราฟรายได้และระบบจัดการคำสั่งซื้อ",
            "ฟังก์ชัน Soft-Delete / Restore สำหรับสินค้าและหมวดหมู่",
            "เชื่อมต่อ ImageKit CDN สำหรับการอัปโหลดและปรับแต่งรูปภาพ",
            "Server-Side Rendering (SSR) พร้อม Caching และ Revalidation",
          ],
        },
        {
          id:       2,
          period:   "ก.พ. 2569",
          subtitle: "ระบบจัดการการเช่าขั้นสูงและ Admin Management System",
          bullets: [
            "สร้าง Admin Panel สำหรับจัดการวงจรชีวิตการเช่าตั้งแต่การจองจนเสร็จสิ้น",
            "พัฒนา RBAC Middleware จำกัดเส้นทาง Back-Office ให้เฉพาะ Admin เท่านั้น",
            "ออกแบบ Workflow Engine หลายขั้นตอน: PENDING → CONFIRMED → ACTIVE → RETURNED → COMPLETED",
            "พัฒนาระบบตรวจสอบสลิปชำระเงิน — Admin อนุมัติหรือปฏิเสธหลักฐานที่ลูกค้าอัปโหลด",
            "State Machine เงินประกัน: HELD / REFUNDED / DEDUCTED พร้อมการคำนวณอัตโนมัติ",
            "โมดูลค่าปรับ: LATE / DAMAGE / LOST พร้อมสร้างใบแจ้งหนี้อัตโนมัติ",
            "ระบบตรวจสอบ Stock Conflict เพื่อป้องกันการจองซ้ำในช่วงวันที่ทับซ้อน",
            "โมดูลรายงาน: กราฟรายได้รายเดือน, สินค้าที่เช่ามากที่สุด 10 อันดับ และการติดตามการเช่าเกินกำหนด",
            "Audit Log พร้อมการล้างข้อมูลตามช่วงวันที่ — ติดตามการกระทำของ Admin ได้ทั้งหมด",
          ],
        },
        {
          id:       3,
          period:   "ธ.ค. 2567 – ก.พ. 2568",
          subtitle: "โปรเจกต์จบการศึกษา ระบบเช่าชุดแบบ Dual-App (ลูกค้าและ Back Office)",
          bullets: [
            "สถาปัตยกรรม Dual-Frontend: Customer App + Admin Panel แต่ละส่วนมี Role-Based Access แบบอิสระ (owner / user) ผ่าน JWT Middleware",
            "Schema PostgreSQL รองรับวงจรชีวิตการเช่าแบบสมบูรณ์: PENDING → CONFIRMED → ACTIVE → RETURNED → COMPLETED",
            "RESTful APIs ครอบคลุม สินค้า, การเช่า, การชำระเงิน, เงินประกัน, ค่าปรับ, การคืน และ Audit Logs",
            "ระบบอัปโหลดและตรวจสอบสลิปชำระเงิน — Admin อนุมัติหรือปฏิเสธหลักฐานที่ลูกค้าส่งมา",
            "วงจรชีวิตเงินประกัน: สถานะ HELD / REFUNDED / DEDUCTED พร้อมรองรับการหักบางส่วน",
            "ระบบตรวจสอบ Stock Conflict เพื่อป้องกันการจองซ้ำในช่วงวันที่เช่า",
            "ตะกร้าสินค้าฝั่งลูกค้าพร้อมระยะเวลาเช่าที่ปรับได้, คำนวณวันคืนอัตโนมัติ, ส่วนลด และสรุปค่าจัดส่ง",
            "Admin Panel รองรับการนำเข้าสินค้าและหมวดหมู่แบบ Bulk ผ่าน Excel",
          ],
        },
        {
          id:       4,
          period:   "ก.ค. 2567 – ต.ค. 2567",
          subtitle: "ระบบจัดการสินค้าคงคลังและการขายพร้อมโมดูลซ่อม",
          bullets: [
            "สร้างด้วย Next.js 14 (App Router), TypeScript และ Tailwind CSS สำหรับประสบการณ์จัดการร้านที่ตอบสนองทุกอุปกรณ์",
            "Schema MongoDB ผ่าน Prisma ORM ครอบคลุม สินค้า, คำสั่งขาย, งานซ่อม/Service, ผู้ใช้ และการตั้งค่าบริษัท",
            "ขั้นตอนการขาย: ค้นหาหมายเลขซีเรียล → รายการขายรอดำเนินการ → ยืนยันแบบ Bulk → สินค้าถูกทำเครื่องหมายว่าขายแล้ว",
            "การรับสินค้าแบบ Bulk รองรับสูงสุด 10,000 หน่วยต่อครั้ง พร้อม Soft-Delete สำหรับสินค้าและผู้ใช้",
            "RESTful APIs สำหรับจัดการ Stock, ขั้นตอนการขาย, งานซ่อม/Service และการจัดการผู้ใช้",
            "Authentication ด้วย JWT พร้อม Role ระดับ admin / user — Decode Auth แบบ Per-Controller ไม่ใช่ Global Middleware",
            "Dashboard พร้อมสถิติสรุป: รายได้รวม, จำนวนการขายรวม, งานซ่อมรวม และกราฟรายได้รายเดือนผ่าน Recharts",
            "Deploy บน Ubuntu Linux โดยใช้ PM2 สำหรับจัดการ Process",
          ],
        },
      ],
    },
  },
};