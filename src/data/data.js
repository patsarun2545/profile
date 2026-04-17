import { onlineDressImages, adminPanelImages, nextjsEcomImages } from "../data/images";

export const PROFILE = {
  name: "Patsarun Kathinthong",
  title: "Full Stack Developer",
  email: "patsarun2545@gmail.com",
  phone: "061-651-6187",
  github: "github.com/patsarun2545",
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
    repo: "https://github.com/patsarun2545/nextjs-ecommerce-platform",
    title: "Next.js E-Commerce Platform",
    url: "https://nextjs-ecommerce-platform-gamma.vercel.app/",
    stack: "Next.js Fullstack",
    color: "#22c55e",
    colorRgb: "34,197,94",
    screens: nextjsEcomImages,
    tags: ["Next.js", "React", "PostgreSQL", "Prisma", "Tailwind CSS", "JWT", "Zod", "ImageKit"],
  },
  {
    id: 2,
    repo: "https://github.com/patsarun2545/rental-management-system",
    title: "Rental Management System",
    url: "https://rental-management-system-blush.vercel.app/",
    stack: "PERN Stack",
    color: "#60a5fa",
    colorRgb: "96,165,250",
    screens: adminPanelImages,
    tags: ["PostgreSQL", "Express.js", "React.js", "Node.js", "JWT", "RBAC", "Prisma ORM"],
  },
  {
    id: 3,
    repo: "https://github.com/patsarun2545/dress-rental-web",
    title: "Dress Rental Web",
    url: ["https://dress-rental-web-wtnm.vercel.app/", "https://dress-rental-web.vercel.app/"],
    stack: "PERN Stack",
    color: "#e879f9",
    colorRgb: "232,121,249",
    screens: onlineDressImages,
    tags: ["PostgreSQL", "Express.js", "React.js", "Node.js", "JWT", "RBAC", "Prisma"],
  },
  {
    id: 4,
    repo: "https://github.com/patsarun2545/mobile-store-web",
    title: "Mobile Store Web",
    stack: "MERN Stack",
    color: "#fb923c",
    colorRgb: "251,146,60",
    screens: [],
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "MongoDB", "Prisma", "Node.js", "JWT", "PM2", "Ubuntu"],
  },
];