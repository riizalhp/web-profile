interface ProjectDetail {
  id: string;
  title: string;
  mainImage: string;
  overview: string;
  features: string[];
  techStack: string[];
  githubLink?: string;
  websiteLink?: string;
  galleryImages?: string[];
}

export const projectsData: ProjectDetail[] = [
  {
    id: "e-commerce-platform-redesign",
    title: "E-commerce Platform Redesign",
    mainImage: "https://s14.gifyu.com/images/bKyHu.png", // Placeholder
    overview: "A comprehensive redesign of an existing e-commerce platform to improve user experience and conversion rates. This project focused on modernizing the UI/UX, enhancing performance, and streamlining the user journey from product discovery to checkout.",
    features: [
      "Modern and intuitive UI/UX design",
      "Fully responsive layout for seamless experience across all devices (desktop, tablet, mobile)",
      "Advanced product catalog with filtering and search capabilities",
      "Optimized and streamlined checkout process for higher conversion rates",
      "Integration with popular payment gateways (e.g., Stripe, PayPal)",
      "User authentication and profile management",
      "Shopping cart and wishlist functionality",
      "Admin panel for product, order, and user management"
    ],
    techStack: ["React", "Next.js", "Tailwind CSS", "Node.js", "Express.js", "MongoDB", "Stripe API"],
    githubLink: "https://github.com/your-repo/e-commerce-redesign",
    websiteLink: "https://your-ecommerce-site.com"
  },
  {
    id: "project-manager-work-service",
    title: "Project Manager Work Service",
    mainImage: "https://s14.gifyu.com/images/bKyHu.png", // Placeholder
    overview: "This service showcases my capabilities as a Project Manager, detailing various projects I've led from conception to successful completion. It highlights my approach to planning, execution, monitoring, and closing projects, ensuring stakeholder satisfaction and timely delivery.",
    features: [
      "Detailed project timelines and milestones",
      "Risk assessment and mitigation strategies",
      "Stakeholder communication plans",
      "Budget management and resource allocation",
      "Quality assurance and control processes",
      "Post-project evaluation and lessons learned"
    ],
    techStack: ["Project Management Methodologies (Agile, Scrum)", "Jira", "Trello", "Asana", "Microsoft Project", "Confluence"],
    githubLink: "https://github.com/your-repo/project-management-service",
    websiteLink: "https://your-pm-service.com"
  },
  {
    id: "web-developer-portfolio",
    title: "Web Developer Portfolio",
    mainImage: "https://s14.gifyu.com/images/bKyHd.png", // Placeholder
    overview: "A personal portfolio website demonstrating my skills and projects as a web developer. It features a clean, modern design and highlights my expertise in front-end and back-end development, responsive design, and UI/UX principles.",
    features: [
      "Interactive project showcase with detailed descriptions",
      "Responsive design for optimal viewing on all devices",
      "Contact form for inquiries",
      "About section detailing skills and experience",
      "Blog section for sharing insights and articles"
    ],
    techStack: ["React", "Next.js", "Tailwind CSS", "TypeScript", "Node.js", "Express.js", "Vercel"],
    githubLink: "https://github.com/your-repo/web-portfolio",
    websiteLink: "https://your-portfolio-site.com"
  },
  {
    id: "ai-agent-developer-showcase",
    title: "AI Agent Developer Showcase",
    mainImage: "https://s14.gifyu.com/images/bKyH6.png", // Placeholder
    overview: "A collection of AI agent development projects, demonstrating my ability to build intelligent automation solutions, data analysis tools, and enhanced user experiences. This includes projects involving natural language processing, machine learning, and integration with various platforms.",
    features: [
      "Showcase of various AI agent functionalities (e.g., chatbots, data parsers)",
      "Demonstrations of automation workflows",
      "Integration with third-party APIs (e.g., OpenAI, Google Cloud AI)",
      "Performance metrics and analysis of AI models",
      "Use cases and benefits of AI agent implementation"
    ],
    techStack: ["Python", "TensorFlow", "PyTorch", "scikit-learn", "NLTK", "SpaCy", "OpenAI API", "n8n", "LangChain"],
    githubLink: "https://github.com/your-repo/ai-agent-showcase",
    websiteLink: "https://your-ai-agent-showcase.com"
  }
];

