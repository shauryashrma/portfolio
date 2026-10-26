export const personalInfo = {
  name: "Shaurya Sharma",
  role: "Software Developer",
  positioning: "I build practical software experiences at the intersection of full-stack development, AI/ML, and high-performance problem solving.",
  education: {
    degree: "B.Tech in Information Technology",
    institution: "Bhagwan Parshuram Institute of Technology, Delhi",
  },
  bio: "Software Developer with a focus on engineering scalable full-stack applications, data-driven systems, and machine learning pipelines. Experienced in leading large technical teams, architecting distributed backends, and implementing robust algorithms from the ground up.",
  avatar: "/images/profile.jpg", // Drop your genuine photo here in public/images/profile.jpg
  resumeUrl: "/resume.pdf", // Drop your resume here in public/resume.pdf
  socials: {
    github: "https://github.com/shauryashrma",
    linkedin: "https://linkedin.com/in/shauryashrma", // Update with your exact handle if different
    email: "shauryasharmaofficial12@gmail.com", // Verified from Re-medi repository contact
  },
};

export const technicalSkills = [
  {
    category: "Programming Languages",
    skills: ["Java", "Python", "C++", "JavaScript (ES6+)"],
  },
  {
    category: "Frontend Development",
    skills: ["React", "JavaScript", "HTML5", "CSS3", "Tailwind CSS"],
  },
  {
    category: "Backend & Systems",
    skills: ["Node.js", "Express.js", "REST APIs", "JWT Authentication"],
  },
  {
    category: "Databases",
    skills: ["MongoDB", "SQL", "Mongoose"],
  },
  {
    category: "AI & Machine Learning",
    skills: ["Python", "Scikit-learn", "Pandas", "NumPy", "TensorFlow"],
  },
  {
    category: "Core Competencies",
    skills: ["Data Structures & Algorithms", "Object-Oriented Programming (OOP)", "Git & GitHub", "System Design"],
  },
];

export const featuredProjects = [
  {
    id: "re-medi",
    title: "Re-medi — AI-Enabled Healthcare Platform",
    year: "2024",
    category: "Full-Stack & AI Healthcare",
    shortDescription: "A full-stack healthcare platform engineered to streamline doctor-patient interactions, appointment booking, payments, automated medicine reminders, and proactive diabetes risk screening.",
    fullDescription: "Re-medi is an end-to-end healthcare management ecosystem built with React, Node.js, Express, and MongoDB. The platform resolves fragmentation across outpatient workflows with dedicated patient, doctor, and administrator portals. Key capabilities include Stripe/Razorpay payment processing, automated medication reminders, real-time schedule management, and an integrated diabetes risk prediction module.",
    image: "/images/remedi.png", // Drop your genuine screenshot here in public/images/remedi.png
    technologies: ["React", "Node.js", "Express.js", "MongoDB", "Python", "Scikit-learn", "Stripe API", "JWT"],
    keyFeatures: [
      "Doctor appointment scheduling and calendar availability management",
      "Comprehensive Patient, Doctor, and Administrative analytics dashboards",
      "Secure online payment integration via Stripe and Razorpay",
      "Automated scheduled medicine reminder service",
      "Integrated machine-learning diabetes risk estimation module",
      "Role-based access control with JWT authentication"
    ],
    github: "https://github.com/shauryashrma/remedi",
    liveUrl: null, // Add live URL once deployed
  },
  {
    id: "diabetes-prediction",
    title: "Diabetes Prediction Model",
    year: "2024",
    category: "Machine Learning & Predictive Health",
    shortDescription: "A machine learning pipeline evaluating patient diagnostic parameters to estimate diabetes risk with rigorous feature engineering and evaluation metrics.",
    fullDescription: "An applied data science case study utilizing clinical diagnostic indicators (glucose levels, insulin response, BMI, age, and blood pressure) to evaluate early-stage diabetes onset risk. The project covers data preprocessing, outlier treatment, feature scaling, model selection across linear and ensemble classifiers, and comparative evaluation using ROC-AUC and recall-focused metrics.",
    image: "/images/diabetes.png", // Drop your genuine screenshot here in public/images/diabetes.png
    technologies: ["Python", "Pandas", "NumPy", "Scikit-learn", "Data Preprocessing", "ROC-AUC Analysis"],
    keyFeatures: [
      "Feature engineering and missing-value imputation on patient biometric metrics",
      "Exploratory data analysis identifying high-correlation risk indicators",
      "Comparative classifier benchmarking (Logistic Regression, Random Forest, SVM)",
      "Recall-optimized threshold calibration for healthcare safety",
      "Modular prediction interface designed for clinical screening assistance"
    ],
    github: "https://github.com/shauryashrma/remedi", // Integrated within Re-medi ML module
    liveUrl: null,
  },
  {
    id: "simple-rag",
    title: "SIMPLE-RAG — Custom C++ Vector Database & RAG Engine",
    year: "2024",
    category: "Systems Programming & High-Performance AI",
    shortDescription: "A high-performance C++ vector database and retrieval-augmented generation engine featuring custom Hierarchical Navigable Small World (HNSW) indexing and KD-Tree partitioning.",
    fullDescription: "Engineered from scratch in modern C++17, SIMPLE-RAG is a specialized high-dimensional vector search database and RAG pipeline. It implements custom multi-layered HNSW graph indexing for fast approximate nearest neighbor (ANN) search alongside a KD-Tree fallback. The ingestion pipeline integrates sliding-window document chunking, dense 768-dimensional Ollama embeddings, thread-safe memory models, and local LLM synthesis without hallucinations.",
    image: "/images/simplerag.png", // Drop your genuine screenshot here in public/images/simplerag.png
    technologies: ["C++17", "HNSW Graph Indexing", "KD-Tree", "Data Structures", "Ollama LLM", "Multithreading", "REST API"],
    keyFeatures: [
      "Custom multi-layered HNSW graph implementing greedy Layer 0 beam search",
      "K-Dimensional tree space-partitioning with dynamic boundary pruning logic",
      "Thread-safe database monitor pattern with std::lock_guard synchronization",
      "Sliding-window text chunker (250 words, 30-word overlap) for semantic continuity",
      "Built-in HTTP REST endpoints for sub-millisecond vector insertion and benchmark queries"
    ],
    github: "https://github.com/shauryashrma/SIMPLE-RAG",
    liveUrl: null,
  },
];

export const leadershipExperiences = [
  {
    id: "drishti-vp",
    role: "Vice President",
    organization: "Drishti",
    period: "2024 – 2025",
    highlight: "Led an active team of ~120 members across planning, technical execution, and operations.",
    description: "Spearheaded organizational strategy, inter-departmental workflows, and cross-functional project execution. Managed logistics, team mentoring, resource allocation, and technical deliverables across major university-wide initiatives.",
    tags: ["Team Leadership", "Operations", "Strategic Planning", "120+ Members"],
  },
  {
    id: "community-services-director",
    role: "Community Services Director",
    organization: "Inter-Club Collaborative Network",
    period: "2023 – 2024",
    highlight: "Coordinated social welfare and community engagement programs across 25+ partner clubs.",
    description: "Led large-scale community outreach drives and social responsibility initiatives. Fostered collaborative partnerships among 25+ collegiate organizations to maximize outreach, volunteer mobilization, and community impact.",
    tags: ["Community Outreach", "Cross-Club Coordination", "Program Management"],
  },
  {
    id: "project-shakti",
    role: "Core Organizer & Lead",
    organization: "Project Shakti",
    period: "2023 – 2024",
    highlight: "Championed menstrual health awareness drives and sanitary napkin distribution campaigns.",
    description: "Organized educational workshops and healthcare access initiatives focused on breaking menstrual health taboos, providing hygiene kits, and establishing community support networks in underserved regions.",
    tags: ["Public Health", "Social Impact", "Awareness Drives", "Community Welfare"],
  },
];
