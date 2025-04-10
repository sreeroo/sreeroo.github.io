var linkedin = "https://www.linkedin.com/in/sreeroop/";
var email = 'mailto:sr10code@gmail.com';
var github = 'https://github.com/sreeroo'

// try decoding this array to get the password
// Password hint: ASCII adjustments
var password = [114, 113, 100, 100, 113, 110, 110, 111, 98, 110, 99, 100, 114].map(c => c + 2).map(c => c - 1);

whois = [
  "<br>",
  "Hi, I'm Sreeroop 👋",
  "Computer Science student | Mechatronics Engineer",
  "<br>",
  "📍 Based in Munich, Germany",
  "• Dual Student at Munich University of Applied Sciences",
  "• Diploma in Mechatronics from Temasek Polytechnic, Singapore",
  "• Recipient of Poly goes UAS Scholarship (Sponsored by Rohde & Schwarz and EDB Singapore)",
  "<br>",
  "📌 Commands: <span class=\"command\">education</span> | <span class=\"command\">skills</span> | <span class=\"command\">experience</span>",
  "📌 Connect: <a href=\"" + linkedin + "\" target=\"_blank\">LinkedIn</a> | <a href=\"" + email + "\">Email</a>"
];



projects = [
  "<br>",
  "Most of my projects are private or hosted on GitHub, GitLab, or my company’s server.",
  "<a href=\"" + github + "\">Github</a>",
  "<br>"
];

education = [
  "<br>",
  "🎓 Education:",
  "• BSc Computer Science - Munich University of Applied Sciences (2022–2026)",
  "• Diploma in Mechatronics Engineering - Temasek Polytechnic, Singapore (2018–2021)",
  "   - Course Medallist | Merit Award for Gesture Recognition Kit project",
  "   - Specialized in semiconductor technology and IC fabrication",
  "• German Language (B2/C1) - Goethe Institute, Singapore",
  "<br>"
]

    skills = [
      "<br>",
      "🛠️ Technical Skills:",
      "• Languages: Python, Go, Java, C, C++, Dart, TypeScript, Haskell",
      "• Frameworks: .NET Core, Spring Boot, Angular, Flutter, React Native, Node.js",
      "• Databases: PostgreSQL, MongoDB",
      "• Tools: Docker, Kubernetes, Gitlab CI/CD, Selenium",
      "• Concepts: OOP, Networking, Design Patterns, Data Structures & Algorithms, Microservices, Test Automation, CI/CD.",
      "<br>"
    ];

experience = [
  "<br>",
  "💼 Professional Experience:",
  "Rohde & Schwarz (2020–Present):",
  "• Munich (Dual Student):",
  "  - Worked on a Big Data project with ETL pipelines, Python, .NET Core, Angular, PostgreSQL, MongoDB.",
  "  - Developed APIs using REST, GraphQL, OData in Python and C#.",
  "  - Worked on test automation using Python and Selenium.",
  "  - Developed internal tools with C#, Python, and Docker.",
  "• Singapore (Intern/Engineer):",
  "  - Developed and ported firmware for RF devices (STM32-based).",
  "  - Worked on data analysis algorithms for RF data and RF power calibration algorithms.",
  "<br>",
  "📩 Full details available on request: <a href=\"" + email + "\">Email</a> | <a href=\"" + linkedin + "\">LinkedIn</a>"
];



help = [
  "<br>",
  '<span class="command">whois</span>          About me',
  '<span class="command">education</span>      Academic background',
  '<span class="command">skills</span>         Technical skills',
  '<span class="command">experience</span>     Work history',
  '<span class="command">projects</span>       My projects',
  '<span class="command">linkedin</span>       LinkedIn profile',
  '<span class="command">email</span>          Contact me',
  '<span class="command">clear</span>          Clear terminal',
  '<span class="command">banner</span>         Show header',
  '<span class="command">history</span>        Command history',
  '<span class="command">sudo</span>           Admin-only (try me)',
  '<span class="command">features</span>       Terminal features',
  "<br>"
];

features = [
  "<br>",
  "Terminal Features:",
  "• <span class=\"command\">↑/↓</span> - Navigate command history",
  "• <span class=\"command\">clear</span> - Reset terminal",
  "• <span class=\"command\">banner</span> - Show header again",
  "• Responsive design (works on mobile/tablet)",
  "<br>",
  "🚧 Future plans: AI chatbot (LLM/RAG), more easter eggs.",
  "Suggestions? <a href=\"" + email + "\">Email me</a>.",
  "<br>"
];