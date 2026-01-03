export const portfolioData = {
  hero: {
    name: "S B Narasimha Raju",
    role: "Software Engineer | Python Developer | Full Stack & Mobile App Developer | Cybersecurity-Focused",
    location: "Mysore, Karnataka, India",
    summary:
      "I design and develop scalable web and mobile applications with a strong focus on clean architecture, performance, and reliability. MCA graduate with a background in cybersecurity, bringing a security-aware approach to software development through secure coding practices, basic threat awareness, and robust system design. Experienced in Python development, full-stack applications, React Native mobile apps, and database-driven systems.",
    links: {
      github: "https://github.com/Raju84311",
      linkedin: "https://linkedin.com/in/narasimharaju1",
      softwareResume: "/portfolio/software_resume.pdf",
      cyberResume: "/portfolio/cybersecurity_resume.pdf"
    }
  },

  skills: {
    programming: ["Python", "Java", "C", "SQL"],
    webMobile: ["HTML", "CSS", "JavaScript", "React Native"],
    cybersecurity: [
      "SOC Operations",
      "Threat Detection",
      "Incident Response",
      "Vulnerability Assessment",
      "Penetration Testing",
      "IAM"
    ],
    tools: [
      "MySQL",
      "Git",
      "Wireshark",
      "Nmap",
      "Splunk",
      "ELK Stack",
      "Burp Suite",
      "Metasploit"
    ]
  },

  softwareProjects: [
    {
      title: "Home Services Booking App",
      tech: "React Native, JavaScript",
      problem:
        "Manual service booking causes delays, conflicts, and lack of transparency.",
      solution:
        "Built a mobile application enabling users to book home services with real-time worker availability.",
      features: [
        "User authentication",
        "Date & time-based booking",
        "QR-based payment flow",
        "SMS confirmation",
        "Admin & client dashboards",
        "Booking conflict prevention"
      ]
    },
    {
      title: "LiDAR-Based Object Detection",
      tech: "Python, Deep Learning, Open3D",
      problem:
        "Accurate object detection in autonomous driving is challenging in real-world environments.",
      solution:
        "Implemented and compared advanced 3D detection models on the KITTI dataset.",
      features: [
        "PV-RCNN++, PointPillars, CenterPoint comparison",
        "Improved detection accuracy",
        "Real-time 3D visualization",
        "Performance benchmarking"
      ]
    },
    {
      title: "IoT-Based Anti-Poaching Alarm System",
      tech: "Arduino, Sensors, IoT",
      problem:
        "Forests lack real-time monitoring for poaching and fire incidents.",
      solution:
        "Designed an automated IoT system to detect and alert authorities instantly.",
      features: [
        "Fire and tilt sensors",
        "Automated alerts",
        "Water pump activation",
        "Real-time incident notification"
      ]
    }
  ],

  cyberProjects: [
    {
      title: "SOC Log Monitoring & Threat Detection System",
      tools: "Wireshark, Splunk, ELK Stack, Nmap",
      description:
        "Developed a SOC system to monitor logs, detect anomalies, and identify cyber threats in real time.",
      attacksDetected: [
        "Brute-force attacks",
        "Malware activity",
        "Unauthorized access attempts"
      ]
    },
    {
      title: "Web Application Penetration Testing",
      tools: "Nmap, Burp Suite, SQLmap, DVWA",
      description:
        "Performed penetration testing to identify and document critical web vulnerabilities.",
      vulnerabilities: [
        "SQL Injection",
        "Cross-Site Scripting (XSS)",
        "Security misconfigurations"
      ]
    },
    {
      title: "Tata Cybersecurity Analyst Job Simulation",
      tools: "IAM, SOC workflows",
      description:
        "Simulated real-world cybersecurity analyst tasks aligned with enterprise security practices.",
      highlights: [
        "IAM implementation",
        "Security documentation",
        "Risk assessment",
        "Business-aligned security decisions"
      ]
    }
  ],

  education: [
    {
      degree: "MCA (Cybersecurity)",
      institution: "Amrita Vishwa Vidyapeetham",
      year: "2023 – 2025",
      cgpa: "7.41"
    },
    {
      degree: "B.Sc Computer Science",
      institution: "NIE First Grade College",
      year: "2019 – 2022",
      cgpa: "6.74"
    }
  ],

  certifications: [
    "Tata Cybersecurity Analyst – Forage",
    "Software Engineering Job Simulation – Forage",
    "Generative AI Studio – Forage",
    "Cisco Introduction to Cybersecurity",
    "Certified Blockchain Security Examiner",
    "Python Certification",
    "Java Certification",
    "SQL Certification – Simplilearn"
  ],

  contact: {
    email: "rajusbnarasimha@gmail.com",
    phone: "8431190959"
  }
};
