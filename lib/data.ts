export const siteConfig = {
  name: "Vishruthi K V",
  title: "Full Stack Developer",
  description:
    "Full Stack Developer with experience developing end-to-end web applications using Java, Spring Boot, React, MySQL and REST APIs. Strong foundation in Data Structures and Algorithms, Object-Oriented Programming and problem-solving.",
  email: "vishruthi.2569@gmail.com",
  phone: "9962580315",
  linkedin: "https://linkedin.com/in/vishruthikv/",
  github: "https://github.com/KVVISHRUTHI",
  location: "Chennai, India",
};

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Certifications", href: "#certifications" },
  { label: "Contact", href: "#contact" },
];

export const skills = {
  Languages: ["Java", "Python", "JavaScript", "C", "HTML/CSS"],
  Frameworks: ["Spring Boot", "React", "Node.js", "Flask", "FastAPI"],
  Databases: ["PostgreSQL", "MySQL", "MongoDB"],
  "Developer Tools": ["Git", "Docker", "VS Code", "IntelliJ", "PyCharm"],
  Libraries: ["TensorFlow", "pandas", "NumPy", "Matplotlib", "OpenCV"],
  "Core CS": [
    "Data Structures & Algorithms",
    "OOP",
    "DBMS",
    "REST APIs",
    "Testing",
  ],
};

export const projects = [
  {
    slug: "crowdflow",
    title: "CrowdFlow",
    tagline: "Real-time AI crowd monitoring for public safety",
    description:
      "An AI-powered crowd monitoring system that uses CCTV feeds for real-time detection, tracking, and movement analysis. Built to serve public safety applications with live geospatial alerts.",
    tech: ["YOLOv8", "ByteTrack", "OpenCV", "Python", "FastAPI", "React", "Docker"],
    color: "from-blue-600 to-cyan-500",
    accent: "#3b82f6",
    icon: "users",
    github: "https://github.com/KVVISHRUTHI/CROWDFLOW",
    highlights: [
      "Built a real-time AI-powered crowd monitoring system using CCTV feeds for detection, tracking, and movement analysis for public safety applications",
      "Engineered a persistent ID tracking pipeline using ByteTrack to eliminate duplicate counting and maintain temporal consistency across video frames",
      "Developed flow-based predictive analytics to estimate crowd congestion trends using real-time movement rates with a live geospatial dashboard for monitoring and alerts",
    ],
    category: "AI / Computer Vision",
  },
  {
    slug: "bioacoustic-guardian",
    title: "BioAcoustic Guardian",
    tagline: "Forest audio intelligence for biodiversity protection",
    description:
      "A forest audio intelligence system for detecting illegal logging and biodiversity events. Uses a YAMNet-based audio classification pipeline with real-time GPS-tagged threat alerts via Telegram.",
    tech: ["Python", "Flask", "React", "TensorFlow Hub", "Telegram Bot API", "Leaflet.js"],
    color: "from-emerald-600 to-teal-500",
    accent: "#10b981",
    icon: "shield",
    github: "https://github.com/KVVISHRUTHI/BioAcoustic-Guardian",
    highlights: [
      "Built a forest audio intelligence system for detecting illegal logging and biodiversity events using a YAMNet-based audio classification pipeline with confidence-driven alerting",
      "Developed Flask REST APIs for audio processing, alert management, and ranger feedback workflows",
      "Integrated a React dashboard with Leaflet.js for geospatial visualization and live alert monitoring",
      "Implemented a Telegram Bot-based notification system for real-time GPS-tagged threat alerts to monitoring channels",
    ],
    category: "AI / IoT",
  },
  {
    slug: "civic-fix",
    title: "Civic-Fix",
    tagline: "Civic issue reporting and resolution platform",
    description:
      "A full-stack platform for reporting and tracking civic issues with structured user and admin workflows, JWT authentication, and role-based access control.",
    tech: ["Spring Boot", "JWT", "React", "MySQL"],
    color: "from-orange-600 to-amber-500",
    accent: "#f97316",
    icon: "wrench",
    github: "https://github.com/KVVISHRUTHI/Civic-Fix",
    highlights: [
      "Built a platform for reporting and tracking civic issues with structured user and admin workflows",
      "Developed REST APIs with JWT-based authentication and role-based access control for secure operations",
      "Integrated React frontend with backend services for seamless end-to-end functionality",
    ],
    category: "Full Stack Web",
  },
];

export const education = [
  {
    institution: "Saveetha Engineering College",
    degree: "Bachelor of Engineering",
    field: "Electronics and Communication Engineering",
    period: "Sep 2024 – May 2028",
    score: "CGPA 9.4",
    scoreLabel: "Current CGPA",
    type: "university",
  },
  {
    institution: "Lalaji Memorial Omega International School",
    degree: "Higher Secondary Certificate (CBSE)",
    field: "Computer Science",
    period: "2012 – 2024",
    score: "84%",
    scoreLabel: "Score",
    type: "school",
  },
];

export const certifications = [
  {
    title: "Oracle Certified Professional: Java SE 21 Developer",
    issuer: "Oracle",
    score: "86%",
    icon: "award",
    color: "from-red-600 to-rose-500",
    accent: "#ef4444",
    description:
      "Industry-recognized professional certification validating expertise in Java SE 21 programming, object-oriented design, and modern Java features.",
  },
  {
    title: "AWS Educate: Machine Learning Foundations",
    issuer: "Amazon Web Services",
    score: null,
    icon: "cloud",
    color: "from-yellow-600 to-orange-500",
    accent: "#f59e0b",
    description:
      "Foundational certification in machine learning concepts, AWS services, and cloud-based ML workflows provided by Amazon Web Services.",
  },
];

export const achievements = [
  {
    title: "2nd Place — Chatbot Development Challenge",
    organization: "Sai Ram Engineering College",
    description:
      "Secured 2nd place in a competitive chatbot development challenge, demonstrating strong NLP and conversational AI skills.",
    rank: "2nd",
    icon: "trophy",
    color: "from-yellow-500 to-amber-400",
  },
  {
    title: "Top 20 Teams — RotaTechX Hackathon",
    organization: "Sri Venkateswara College of Engineering (SVCE)",
    description:
      "Ranked among the top 20 teams out of all participants in the RotaTechX Hackathon, competing across diverse technical domains.",
    rank: "Top 20",
    icon: "zap",
    color: "from-blue-500 to-sky-400",
  },
];
