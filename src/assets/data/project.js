import codeShield from "../images/cs.png";
import ecom from "../images/ecom.png";
import edtech from "../images/edtech.avif";
import event from "../images/event.png";
import blogapp from "../images/blogapp.jpg";
import streamyard from "../images/streamyard.png";
import expense from "../images/expense.avif";
import vercelclone from "../images/vercelclone.png";

export const projects = [
  {
    id: 1,
    title: "E-commerce Platform",
    description:
      "A full-stack E-commerce application built with Angular and Spring Boot with authentication roles and payment features.",
    repoLink: "https://github.com/rishika105/Ecommerce",
    tags: ["Angular", "Spring Boot", "MySQL", "Tailwind", "Cloudinary", "JWT"],
    image: ecom,
  },

  {
    id: 2,
    title: "CodeShield AI",
    description:
      "A GenAI-powered cybersecurity platform for developers that detects code vulnerabilities using models like VulBERTa, VulDeePecker, and GPT, and provides fixes with gamified learning features.",
    repoLink: "https://github.com/rishika105/CodeShield-AI",
    demoLink: "https://code-shield-ai.vercel.app/",
    tags: [
      "React.js",
      "Tailwind",
      "Express.js",
      "MongoDB",
      "VulBERTa",
      "VulDeePecker",
      "OpenAI",
      "FlaskAPI",
    ],
    image: codeShield,
  },

  {
    id: 3,
    title: "Event Management System",
    description:
      "A platform to manage, schedule, and book events in real-time with food, transportation and payment integrations.",
    repoLink: "https://github.com/rishika105/Event-Management-Advanced-Java",
    tags: ["Advanced Java", "JSP", "Servlet", "Tomcat", "MySQL", "Razorpay"],
    image: event,
  },


  {
    id: 4,
    title: "Streamcast Studio",
    description:
      "A web-based live streaming platform featuring real-time video streaming to RMTP to endpoints like Facebook, Youtube, Twitch, etc.",
    repoLink: "https://github.com/rishika105/streamcast-studio",
    demoLink: "https://streamcast-studio.vercel.app/",
    tags: ["Next.js", "Express.js", "Socket.io", "Docker", "FFmpeg", "Nginx"],
    image: streamyard,
  },

  {
    id: 5,
    title: "Blogging Application",
    description:
      "A server-side application that provides authentication, blog creation by user, likes and comment from other users with cache prevention techniques for secure user sessions.",
    repoLink: "https://github.com/rishika105/blogging-application",
    demoLink: "https://blogging-application-jp8c.onrender.com/",
    tags: [
      "Node.js",
      "Express.js",
      "Ajax",
      "MongoDB",
      "EJS",
      "Tailwind",
      "JWT & Cookies",
    ],
    image: blogapp,
  },

    {
    id: 6,
    title: "Next Deploy",
    description: "A scalable cloud deployment platform integrating authentication, live log streaming, and real-time analytics.",
    repoLink: "https://github.com/rishika105/Next-Deploy",
    tags: [
      "Next.js",
      "Tailwind",
      "Firebase",
      "Express.js",
      "Docker",
      "AWS",
      "PostgreSQL",
      "Clickhouse",
      "Redis",
      "Kafka",
      "Web Sockets",
    ],
    image: vercelclone,
  },
  {
    id: 7,
    title: "Expense Tracker",
    description:
      "An efficient, modern, multicurrency, analytics based expense tracking system powered by Redis caching and BullMQ queues for high performance and scalability.",
    repoLink: "https://github.com/rishika105/Expense-tracker",
    demoLink: "https://expense-tracker-nine-virid.vercel.app/",
    tags: [
      "React.js",
      "Redux",
      "Tailwind",
      "Express.js",
      "MongoDB",
      "BullMQ",
      "Redis",
    ],
    image: expense,
  },

  {
    id: 8,
    title: "EdTech Platform",
    description:
      "An interactive Ed-Tech platform built using the MERN stack with features like JWT authentication roles, course management, payment and AI integration.",
    repoLink: "https://github.com/rishika105/Study-Notion-EdTech",
    demoLink: "https://study-notion-ed-tech-frontend-phi.vercel.app",
    tags: [
      "React.js",
      "Redux",
      "Express.js",
      "MongoDB",
      "Razorpay",
      "Cloudinary",
      "Tailwind",
      "Gemini",
    ],
    image: edtech,
  },
];
