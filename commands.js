var linkedin = "https://www.linkedin.com/in/sreeroop/";
var email = 'mailto:sr10code@gmail.com';
var github = 'https://github.com/sreeroo'

// try decoding this array to get the password
// Password hint: ASCII adjustments
var password = [114, 113, 100, 100, 113, 110, 110, 111, 98, 110, 99, 100, 114].map(c => c + 2).map(c => c - 1);

whois = [
  "<br>",
  "Hi, I'm Sreeroop 👋",
  "I'm a Computer Science student and Mechatronics Engineer, passionate and curious about programming, computer networks and embedded systems.",
  "Currently, I’m living in Munich, Germany, studying at Munich University of Applied Sciences.",
  "I was honored to receive the Poly goes UAS Scholarship, which supports my studies in Germany and is sponsored by Rohde & Schwarz,",
  "a company where I have had the opportunity to contribute to impactful projects.",
  "Besides computer I love playing football, reading books, travelling around and watching movies",
  "Feel free to reach out to me via linkedin or email if you would like to get in touch *_*",
  "<br>",
  "For more details about my education and skills, check out the commands:",
  "📌 Commands: <span class=\"command\">education</span> | <span class=\"command\">skills</span> | <span class=\"command\">experience</span>",
  "📌 Connect: <a href=\"" + linkedin + "\" target=\"_blank\">LinkedIn</a> | <a href=\"" + email + "\">Email</a>"
  ,"<br>"
];


projects = [
  "<br>",
  "Most of my projects are private (company's and university's server), few personal projects are on GitHub.",
  "<a href=\"" + github + "\">Link to my github</a>",
  "<br>"
];

education = [
  "<br>",
  "🎓 Education:",
  "• BSc.Computer Science - Munich University of Applied Sciences, Germany (2022–2026)",
  "<br>",
  "• Diploma in Mechatronics Engineering - Temasek Polytechnic, Singapore (2018–2021).",
  "   - 3.98 / 4.00 GPA",
  "   - Course Medallist - 3rd Best Student of the whole Cohort | Merit Award for Gesture Recognition Kit project",
  "   - Specialized in semiconductor technology and IC fabrication",
  "<br>",
]

  skills = [
    "<br>",
    "🛠️ Technical Skills:",
    "• Languages: Python, Go, Java, C, C++, Dart, TypeScript, Haskell",
    "• Frameworks: .NET Core, Spring Boot, Angular, Flutter, React Native, Node.js",
    "• Databases: PostgreSQL, MongoDB",
    "• Tools: Docker, Kubernetes, Gitlab CI/CD, Selenium",
    "• Concepts:  Data Structures & Algorithms, Microservices, DevOps, Networking, Databases, Design Patterns, Computer architecuture",
    "<br>"
  ];

experience = [
  "<br>",
  "💼 Professional Experience:",
  "Rohde & Schwarz (R&S) Munich (2020–Present):",
  "• Dual Student, Munich, Germany(:",
  "  - Worked on a Big Data project with ETL pipelines, Python, .NET Core, Angular, PostgreSQL, MongoDB.",
  "  - Developed APIs using REST, GraphQL, OData in Python and C#.",
  "  - Worked on test automation using Python and Selenium.",
  "  - Developed internal tools with C#, Python, and Docker.",
  "<br>",
  "R&S Singapore",
  "• Assistant engineer",
  "  - Developed and ported firmware for an RF device (STM32-based).",
  "• PGU Scholar Internship,", 
  "  - Worked on data analysis algorithms for RF data and RF power calibration algorithms.",
  "<br>",
  "📩 More details available on request: <a href=\"" + email + "\">Email</a> | <a href=\"" + linkedin + "\">LinkedIn</a>"
  ,"<br>"
];



help = [
  "<br>",
  '<span class="command">COMMAND</span>          RESULT',
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