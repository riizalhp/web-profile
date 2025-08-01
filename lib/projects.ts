export interface ProjectLink {
  type: 'direct' | 'denied';
  url?: string;
  companyProfileUrl?: string;
}

export interface ProjectDetail {
  id: string;
  title: string;
  mainImage: string;
  overview: string;
  features: string[];
  techStack: string[];
  githubLink?: ProjectLink;
  websiteLink?: ProjectLink;
  galleryImages?: string[];
}

export const projectsData: ProjectDetail[] = [
  {
    id: "sales-distribution-optimization",
    title: "Sales Distribution Optimization Website and Dashboard",
    mainImage: "https://s14.gifyu.com/images/bKy5T.png",
    overview: "This system is designed to help companies optimize their sales distribution process through a web-based technology solution. The website enables efficient management of product distribution data, real-time monitoring of sales performance, and identification of areas needing improvement or intervention.",
    features: ["User Management", "Store Management", "Order Management", "Route Optimization Utilizes K-Means Clustering, K-Nearest Neighbors (KNN), and Saving Matrix", "Map Integration Interactive visualization using Leaflet JS"],
    techStack: ["Laravel", "PHP", "Basis Data", "MySQL", "HTML5", "CSS3", "JavaScript"],
    githubLink: { type: 'denied', companyProfileUrl: 'http://pdam-kulonprogo.id/v1/?i=1' },
    websiteLink: { type: 'denied', companyProfileUrl: 'http://pdam-kulonprogo.id/v1/?i=1' }
  },
  {
    id: "mvp-agrofaster",
    title: "Minimum Viable Product Agrofaster",
    mainImage: "https://s14.gifyu.com/images/bKy5E.png",
    overview: "Agrofaster is a web-based digital platform designed to optimize the distribution of agricultural products from farmers to stores, distributors, or end consumers. The system leverages artificial intelligence and interactive mapping to accelerate delivery processes, optimize routes, and improve real-time visibility of agricultural distribution operations.",
    features: ["home", "saprodi market", "profile", "sell the harvest"],
    techStack: ["next js", "react native", "mysql", "express js"],
    githubLink: { type: 'denied', companyProfileUrl: 'https://agrofaster.com/' },
    websiteLink: { type: 'denied', companyProfileUrl: 'https://agrofaster.com/' }
  },
  {
    id: "cms-rantangin",
    title: "Content Management System Rantangin",
    mainImage: "https://s14.gifyu.com/images/bKy5k.png",
    overview: "The Admin Dashboard in a catering platform application serves as the central control panel for business owners or catering managers to efficiently monitor, manage, and optimize daily operations. This dashboard provides access to order data, customer records, menu settings, payments, and performance reports — all in one user-friendly interface.",
    features: ["Displays a summary of daily, weekly, and monthly orders", "Monitors order status (incoming, processing, delivery, completed)", "Manages customer and partner/vendor data", "Adds, edits, or removes food menu items", "Tracks sales statistics, revenue, and best-selling products", "Manages delivery schedules and menu availability", "Provides visual business performance reports"],
    techStack: ["Next js", "react native", "mysql", "express js"],
    githubLink: { type: 'denied', companyProfileUrl: 'https://rantangin.com/' },
    websiteLink: { type: 'denied', companyProfileUrl: 'https://rantangin.com/' }
  },
  {
    id: "attendance-system",
    title: "Attendance System",
    mainImage: "https://s14.gifyu.com/images/bKy5q.png",
    overview: "Digital attendance tracking system developed to help the company efficiently record, manage, and monitor employee attendance in real time. This system replaces manual attendance methods with a faster, more accurate, and centralized digital approach. With a user-friendly interface and secure data handling, the system enables daily attendance reporting, lateness tracking, leave requests, and overtime logging all in one integrated platform.",
    features: ["Daily Attendance Tracking", "Employee Data Management", "Lateness & Absence Notifications", "Monthly Attendance Recap", "Online Leave & Permission Requests", "Admin Dashboard"],
    techStack: ["next js", "react native", "mysql", "express js"],
    githubLink: { type: 'denied', companyProfileUrl: 'https://www.instagram.com/sevenincjogja' },
    websiteLink: { type: 'denied', companyProfileUrl: 'https://www.instagram.com/sevenincjogja' }
  },
  {
    id: "jogja-dataku-dlhk",
    title: "Jogja Dataku Dinas Lingkungan Hidup dan Kehutanan Yogyakarta",
    mainImage: "https://s14.gifyu.com/images/bKy5l.png",
    overview: "Web-based information system developed to support the management and publication of environmental and forestry data in the Yogyakarta region. This project is an initiative by the Environmental and Forestry Agency (DLHK) of Yogyakarta Special Region to promote transparency, efficiency, and open data access to the public.",
    features: ["Provide public access to environmental and forestry data", "Simplify the data input, update, and validation process for DLHK staff", "Present data visualizations through charts and interactive maps"],
    techStack: ["PHP"],
    githubLink: { type: 'denied', companyProfileUrl: 'https://bapperida.jogjaprov.go.id/dataku/data_dasar/index/26-lingkungan-hidup?bidang_urusan=1' },
    websiteLink: { type: 'direct', url: 'https://bapperida.jogjaprov.go.id/dataku/data_dasar/index/26-lingkungan-hidup?bidang_urusan=1' }
  },
  {
    id: "mvp-sinaou-edu",
    title: "Minimum Viable Product and Content Management System Admin Dashboard",
    mainImage: "https://s14.gifyu.com/images/bKy5W.png",
    overview: "Digital platform that connects students with qualified private tutors quickly, easily, and reliably. Sinaou Edu serves as a solution for parents, students, and university learners seeking additional academic or non-academic tutoring available both online and offline.",
    features: ["Simplifying access to qualified private tutors tailored to user needs", "Offering both online and in-person tutoring sessions", "Supporting flexible scheduling and automated booking", "Providing ratings, reviews, and detailed tutor profiles", "Enabling transparent learning progress monitoring"],
    techStack: ["Laravel",  "Botble", "PHP", "Basis Data", "MySQL", "Frontend Technologies", "HTML5", "CSS3", "JavaScript"],
    githubLink: { type: 'denied', companyProfileUrl: 'https://www.linkedin.com/company/sinaou-education/?viewAsMember=true' },
    websiteLink: { type: 'denied', companyProfileUrl: 'https://www.linkedin.com/company/sinaou-education/?viewAsMember=true' }
  },
  {
    id: "ahp-dss",
    title: "Analytical Hierarchy Process Decision Support System",
    mainImage: "https://s14.gifyu.com/images/bKy5c.png",
    overview: "Decision support system based on the Analytical Hierarchy Process (AHP) method, developed to assist in making strategic, objective, and structured decisions within PT Pindad. The system evaluates multiple decision alternatives based on defined criteria and sub-criteria, considering the weights and priorities of each element.",
    features: ["Assist management in selecting, evaluating, or ranking the best alternatives", "Provide objective, mathematical weighting of decision criteria", "Support consistent, data-based decision-making", "Visualize pairwise comparison results in tables and charts"],
    techStack: ["next js", "react native", "mysql", "express js"],
    githubLink: { type: 'denied', companyProfileUrl: 'https://pindad.com/' },
    websiteLink: { type: 'denied', companyProfileUrl: 'https://pindad.com/' }
  },
  {
    id: "dashboard-oee",
    title: "Overall Equipment Effectiveness Dashboard Real-Time",
    mainImage: "https://s14.gifyu.com/images/bKy5j.png",
    overview: "The OEE Dashboard is an interactive visual interface designed to monitor and analyze the effectiveness of production equipment in real time. OEE (Overall Equipment Effectiveness) is a key metric in manufacturing used to measure how effectively a machine is being utilized, based on three core components: Availability, Performance, and Quality.",
    features: ["Real-time monitoring of machine performance", "Identifies root causes of inefficiency", "Improves productivity with accurate data", "Supports data-driven decision-making", "Simplifies daily, weekly, and monthly reporting"],
    techStack: ["Framework Laravel", "Blade Template", "Bootstrap", "Chart Js", "JQuery", "PostreSQL", "Json"],
    githubLink: { type: 'denied', companyProfileUrl: 'https://gemalakempadaya.web.indotrading.com/about' },
    websiteLink: { type: 'denied', companyProfileUrl: 'https://gemalakempadaya.web.indotrading.com/about' }
  },
  {
    id: "ayra-ai",
    title: "Offline Madical Advisor AI",
    mainImage: "https://s14.gifyu.com/images/bKy5F.png",
    overview: "AI-powered medical advisor system designed to assist users in receiving quick, safe, and accurate preliminary health recommendations. AYRA AI does not replace professional doctors but serves as a virtual medical assistant that users can access anytime to receive information, education, and initial advice based on the symptoms they experience.",
    features: ["Offline First", "Provide instant preliminary health assessments", "Help users become more aware of their body conditions", "Reduce the burden on healthcare services for mild symptoms", "Deliver accessible health education for the public"],
    techStack: ["Gemma AI", "Kotlin", "SQLlite RAG"],
    githubLink: { type: 'direct', url: 'https://github.com/riizalhp/medical-advisor-ai' },
    websiteLink: { type: 'denied', companyProfileUrl: 'https://github.com/riizalhp/medical-advisor-ai' }
  },
  {
    id: "healthy-games-quiz",
    title: "Hypertension Educational Game",
    mainImage: "https://s14.gifyu.com/images/bKX3g.png",
    overview: "Interactive digital game platform designed to raise public awareness about hypertension (high blood pressure) through engaging and educational gameplay. The game blends medical knowledge with popular quiz and puzzle mechanics, structured in progressive levels to make learning accessible and fun for all ages..",
    features: ["Level-Based Education", "Progressive Gameplay", "Image Guessing", "Family 1000 Quiz Mode", "Game Map", "Word Guessing", "Scoring System & Leaderboard"],
    techStack: ["overview game game quiz hipertensi"],
    githubLink: { type: 'denied', companyProfileUrl: 'https://gamematahati.com/splash' },
    websiteLink: { type: 'direct', url: 'https://gamematahati.com/splash' }
  },
  {
    id: "multix-company-profile",
    title: "Template Company Profile",
    mainImage: "https://s14.gifyu.com/images/bKXKI.png",
    overview: "A versatile Content Management System (CMS) website built using the PHP CodeIgniter framework. Designed to provide a platform for companies (especially consulting firms) to easily manage their online presence. This demo site showcases various services, features, portfolios, and pricing structures—indicating that the CMS is built for businesses that require a professional website with robust functionality to present services and engage with clients.",
    features: ["Service Management", "Portfolio Management", "Team Management", "Pricing Package Management", "Client Testimonials", "News/Blog", "Contact Form", "Responsive Design", "CMS Dashboard"],
    techStack: ["Backend Framework: CodeIgniter (PHP)", "Backend Language: PHP", "Database: MySQL", "Frontend: HTML, CSS, JavaScript"],
    githubLink: { type: 'denied', companyProfileUrl: 'https://demo.phpscriptpoint.com/multix/' },
    websiteLink: { type: 'direct', url: 'https://demo.phpscriptpoint.com/multix/' }
  },
  {
    id: "pms-panda-resort",
    title: "Property Management System and Online Booking",
    mainImage: "https://s14.gifyu.com/images/bKXxK.jpg",
    overview: "A Property Management System (PMS) or Online Booking System specifically designed for the hospitality industry, such as resorts, hotels, or lodges. This system serves not only as a customer-facing booking interface but also offers a powerful admin panel for property owners to manage all operational aspects. From room management, availability, pricing, to payment and marketing integrations (SEO, coupons)—all are integrated into one platform. It aims to automate reservation processes and improve operational efficiency for accommodation businesses.",
    features: ["Fully Responsive Design", "Easy Customization", "Complete Booking System", "Availability Management", "iCal Sync", "Intuitive Admin Panel", "Multi-User", "Flexible Content Management", "Comment Management"],
    techStack: ["Backend Framework: Laravel", "Backend Language: PHP", "Database: MySQL", "Frontend: HTML5, Tailwind CSS, JavaScript"],
    githubLink: { type: 'denied', companyProfileUrl: 'https://resort.pandao.eu/en' },
    websiteLink: { type: 'direct', url: 'https://resort.pandao.eu/en' }
  },
  {
    id: "pms-flex-home",
    title: "Property Agent Content Management System",
    mainImage: "https://s14.gifyu.com/images/bKXx3.jpg",
    overview: "A powerful real estate and property management platform, most likely built using the Botble CMS. This system is tailored for the property market, offering a complete set of features to showcase property listings, development projects, and agent profiles. With strong functionality for both the frontend (public users) and backend (administration), Flex Home is designed to be the go-to tool for real estate businesses aiming for a professional and efficient online presence.",
    features: ["Frontend: Homepage, Projects, Properties with Map, Single Property, Single Property with Video, News/Blog, About Us", "Backend: Dashboard, Property Management, Payment Gateway, Media Files, Theme Translation"],
    techStack: ["Backend Framework: Laravel with Botble CMS (PHP)", "Database: MySQL", "Frontend: HTML5, CSS3, JavaScript"],
    githubLink: { type: 'denied', companyProfileUrl: 'https://flex-home.botble.com/' },
    websiteLink: { type: 'direct', url: 'https://flex-home.botble.com/' }
  }
];
