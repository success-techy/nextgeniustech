
export interface CourseModule {
  name: string;
  topics: string[];
}

export interface Course {
  id: string;
  title: string;
  description: string;
  icon: string;
  duration: string;
  level: string;
  color: string;
  modules: CourseModule[];
}

export const coursesData: Course[] = [
  {
    id: "linux",
    title: "Linux",
    description: "Master the most popular server operating system",
    icon: "Terminal",
    duration: "8 weeks",
    level: "Beginner to Advanced",
    color: "bg-gradient-to-br from-green-500 to-emerald-600",
    modules: [
      { name: "Linux Fundamentals", topics: ["File System", "Basic Commands", "Text Editors", "Process Management"] },
      { name: "System Administration", topics: ["User Management", "File Permissions", "Package Management", "Services"] },
      { name: "Network Configuration", topics: ["Network Setup", "SSH", "Firewall", "DNS Configuration"] },
      { name: "Shell Scripting", topics: ["Bash Scripting", "Automation", "Cron Jobs", "Log Management"] }
    ]
  },
  {
    id: "aws",
    title: "AWS Cloud Computing",
    description: "Become certified in Amazon Web Services",
    icon: "Cloud",
    duration: "10 weeks",
    level: "Intermediate",
    color: "bg-gradient-to-br from-orange-500 to-red-600",
    modules: [
      { name: "AWS Fundamentals", topics: ["EC2", "S3", "VPC", "IAM"] },
      { name: "Compute Services", topics: ["Lambda", "ECS", "EKS", "Elastic Beanstalk"] },
      { name: "Database Services", topics: ["RDS", "DynamoDB", "ElastiCache", "Redshift"] },
      { name: "Security & Monitoring", topics: ["CloudWatch", "CloudTrail", "Security Groups", "Certification Prep"] }
    ]
  },
  {
    id: "azure",
    title: "Azure Cloud Computing",
    description: "Master Microsoft Azure cloud platform",
    icon: "Globe",
    duration: "10 weeks",
    level: "Intermediate",
    color: "bg-gradient-to-br from-blue-500 to-blue-700",
    modules: [
      { name: "Azure Fundamentals", topics: ["Virtual Machines", "Storage", "Networking", "Azure AD"] },
      { name: "App Services", topics: ["Web Apps", "Functions", "Logic Apps", "API Management"] },
      { name: "Data Services", topics: ["SQL Database", "Cosmos DB", "Data Factory", "Synapse"] },
      { name: "DevOps & Security", topics: ["Azure DevOps", "Key Vault", "Monitor", "Certification Prep"] }
    ]
  },
  {
    id: "devops",
    title: "DevOps",
    description: "Bridge development and operations seamlessly",
    icon: "GitBranch",
    duration: "12 weeks",
    level: "Advanced",
    color: "bg-gradient-to-br from-purple-500 to-indigo-600",
    modules: [
      { name: "Version Control", topics: ["Git", "GitHub", "GitLab", "Branching Strategies"] },
      { name: "CI/CD Pipelines", topics: ["Jenkins", "GitHub Actions", "Docker", "Kubernetes"] },
      { name: "Infrastructure as Code", topics: ["Terraform", "Ansible", "CloudFormation", "Monitoring"] },
      { name: "Container Orchestration", topics: ["Docker Compose", "Kubernetes", "Helm", "Service Mesh"] }
    ]
  },
  {
    id: "python",
    title: "Python",
    description: "Learn the most versatile programming language",
    icon: "Code",
    duration: "8 weeks",
    level: "Beginner to Advanced",
    color: "bg-gradient-to-br from-yellow-500 to-orange-600",
    modules: [
      { name: "Python Basics", topics: ["Syntax", "Data Types", "Control Flow", "Functions"] },
      { name: "Advanced Python", topics: ["OOP", "Modules", "Exception Handling", "File I/O"] },
      { name: "Libraries & Frameworks", topics: ["NumPy", "Pandas", "Django", "Flask"] },
      { name: "Projects", topics: ["Web Scraping", "API Development", "Automation Scripts", "Database Integration"] }
    ]
  },
  {
    id: "datascience",
    title: "Data Science & Machine Learning",
    description: "Unlock insights from data with AI/ML",
    icon: "BarChart3",
    duration: "14 weeks",
    level: "Intermediate to Advanced",
    color: "bg-gradient-to-br from-teal-500 to-cyan-600",
    modules: [
      { name: "Data Analysis", topics: ["Python/R", "Pandas", "NumPy", "Data Visualization"] },
      { name: "Statistics", topics: ["Descriptive Stats", "Inferential Stats", "Hypothesis Testing", "Probability"] },
      { name: "Machine Learning", topics: ["Supervised Learning", "Unsupervised Learning", "Deep Learning", "Neural Networks"] },
      { name: "Projects", topics: ["Predictive Modeling", "NLP", "Computer Vision", "Deployment"] }
    ]
  },
  {
    id: "fullstack",
    title: "Full Stack Development",
    description: "Build complete web applications end-to-end",
    icon: "Code2",
    duration: "16 weeks",
    level: "Beginner to Advanced",
    color: "bg-gradient-to-br from-pink-500 to-rose-600",
    modules: [
      { name: "Frontend", topics: ["HTML5", "CSS3", "JavaScript", "React/Angular"] },
      { name: "Backend", topics: ["Node.js", "Express", "Python/Django", "API Development"] },
      { name: "Database", topics: ["SQL", "MongoDB", "Database Design", "ORM"] },
      { name: "Deployment", topics: ["Cloud Hosting", "Docker", "CI/CD", "Project Portfolio"] }
    ]
  },
  {
    id: "bigdata",
    title: "Big Data",
    description: "Handle massive datasets with modern tools",
    icon: "Database",
    duration: "12 weeks",
    level: "Advanced",
    color: "bg-gradient-to-br from-indigo-500 to-purple-600",
    modules: [
      { name: "Big Data Fundamentals", topics: ["Hadoop", "HDFS", "MapReduce", "Data Warehousing"] },
      { name: "Data Processing", topics: ["Apache Spark", "Kafka", "Storm", "Real-time Processing"] },
      { name: "NoSQL Databases", topics: ["MongoDB", "Cassandra", "HBase", "Graph Databases"] },
      { name: "Analytics Tools", topics: ["Tableau", "Power BI", "ElasticSearch", "Data Mining"] }
    ]
  },
  {
    id: "cybersecurity",
    title: "Cyber Security",
    description: "Protect systems from digital threats",
    icon: "Shield",
    duration: "10 weeks",
    level: "Intermediate to Advanced",
    color: "bg-gradient-to-br from-red-500 to-pink-600",
    modules: [
      { name: "Security Fundamentals", topics: ["Network Security", "Cryptography", "Risk Assessment", "Compliance"] },
      { name: "Ethical Hacking", topics: ["Penetration Testing", "Vulnerability Assessment", "Social Engineering", "OWASP"] },
      { name: "Security Tools", topics: ["Wireshark", "Metasploit", "Nmap", "Burp Suite"] },
      { name: "Incident Response", topics: ["Forensics", "Malware Analysis", "Security Operations", "Certification Prep"] }
    ]
  }
];
