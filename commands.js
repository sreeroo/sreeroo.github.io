var linkedin = "https://www.linkedin.com/in/sreeroop/";
var email = 'mailto:sr10code@gmail.com';

// try decoding this array to get the password
var password = [114, 113, 100, 100, 113, 110, 110, 111, 98, 110, 99, 100, 114].map(c => c + 2).map(c => c - 1);

whois = [
  "<br>",
  "Hey there, I'm Sreeroop!👋",
  "I'm a computer science student, a mechatronics engineer, and a lifelong learner.",
  "I am living in Munich, Germany at the moment, studying as a Dual Student at Munich University of Applied Sciences.",
  "Before this, I lived in Singapore for around four and a half years. I got my diploma in Mechatronics Engineering there.",
  "and I was deemed worthy of the Poly goes UAS Scholarship to study in Germany for my Bachelor's degree sponsored by Rohde & Schwarz and Economic Development Board (EDB) Singapore.",
  "Should you wish to unravel the mysteries of my education and my skills, simply cast the spell <span class=\"command\">education</span> or <span class=\"command\">skills</span>.",
  "If you want to know more about my professional life, you can check out my LinkedIn profile. Here's the link: <a href=\"" + linkedin + "\" target=\"_blank\">" + linkedin + "</a>.",
  "<br>"
];


projects = [
  "<br>",
  "Still curating...most projects are either private or in GitHub or in my university's Gitlab server or in my company's server",
  "<br>"
];

education = [
  "<br>",
  "- Sreeroop is currently immersed in his studies at Munich University of Applied Sciences, pursuing a Bachelor's degree in Computer Science. It's a journey that began in 2022 and will keep him busy until around 2026.",
  "<br>",
  "- Sreeroop graduated from Temasek Polytechnic with 'Diploma with Merit in Mechatronics Engineering', Singapore, where he also earned the distinction of being a Course Medallist ! Those were the years between 2018 and 2021.",
  "In his final year, he specialized in semiconductor technology modules that focused on the IC fabrication process and cleanroom equipments",
  "His team's final year project 'Gesture Recognition Kit' won the merit award from School of Engineering, Temasek Polytechnic",
  "<br>",
  "- After graduation from Temasek Polytechnic, Sreeroop was indulged in a 10 Months Long Intensive German Language Course until B2 level at Goethe Institute, Singapore and worked at Rohde & Schwarz at the same time as part of the Poly goes UAS Scholarship Program.",
  "Passing the B2/C1 Level German Language Test was a prerequisite for his Bachelor's Degree in Germany.",
  "He completed his Secondary and Higher Secondary education in Science from Kendriya Vidyalaya, Kerala, India in 2018.",
  "<br>"
    ];

skills = [
  "<br>",
  "- Programming languages: Java, Python, C, C#, C++, TypeScript, Dart, SQL and Go(learning).",
  "<br>",
  "- Frameworks: .NET Core, Spring Boot, Angular, Flutter, Node.js, Blazor, React, Dagster, Selenium, RTOS",
  "<br>",
  "- Database: PostgresSQL, MongoDB, MySQL.",
  "<br>",
  "- APIs: REST, GraphQL, OData.",
  "<br>",
  "- Tools: Git, Docker, Gitlab CI/CD, Jenkins, Kubernetes, SonarQube, Graphana. ",
  "<br>",
  "- Concepts: OOP, Computer Networking, Design Patterns, Data Structures and Algorithms, Microservices, Big Data, Test Automation, CI/CD and more..",
];

experience = [
  "<br>",
  "- Sreeroop had the pleasure of diving into various projects across different Research and Development departments at both Rohde & Schwarz (R&S) Singapore and R&S Munich, Germany.",
  "<br>",
  "- Sreeroop is currently working as a Dual Student at Rohde & Schwarz GmbH & Co. KG, Munich, Germany.",
  "He has worked in different divisions of the company, which include Broadcast and Media, Data Analytics, and Test and Measurement.",
  "While working in these departments, he was involved in a variety of Software Development Projects",
  "Few of them are - a Big Data project with ETL pipelines that is based on the microservices architecture. It has a .NET Core Backend, Angular Frontend, and databases such as PostgreSQL and MongoDB.",
  "API development using REST, GraphQL and OData in Python and C#. He has also worked on test automation projects and internal tools development for the company.",
  "<br>",
  "- Sreeroop worked as an Intern and later as an Assistant Engineer at Rohde & Schwarz Asia Pte Ltd, Singapore from 2021 to 2022.",
  "During this time he was involved in the development/porting of firmware in C for an RF device (STM32 based) used during EMC testing, development of a data analysis algorithm to analyze RF data, and in the modification of a RF power calibration algorithm.",
  "<br>",
  "- This is just a brief summary, for more details, contact Sree via his email at <a href=\"" + email + "\" target=\"_blank\">" + email + "</a> or message me on LinkedIn: <a href=\"" + linkedin + "\" target=\"_blank\">" + linkedin + "</a>.",  
  "<br>"
];




help = [
  "<br>",
    '<span class="command">whois</span>          Who is Sreeroop?',
    '<span class="command">education</span>      Where did Sreeroop study?',
    '<span class="command">skills</span>         What can Sreeroop do?',
    '<span class="command">experience</span>     What has Sreeroop done?',
    '<span class="command">projects</span>       Projects from Sreeroop',
    '<span class="command">linkedin</span>       Sreeroop\'s LinkedIn profile',
    '<span class="command">email</span>          Email Sreeroop',
    '<span class="command">clear</span>          Clear the terminal',
    '<span class="command">banner</span>         Print the banner',
    '<span class="command">history</span>        Show command history',
    '<span class="command">sudo</span>           Only use if you\'re admin',
    '<span class="command">features</span>       Features of this terminal?',
    "<br>"
];

features = [
  "<br>",
  "If you press arrow up, you can see the previous commands you've entered. You can also press arrow down to go back to the latest command.",
  "You can also type <span class=\"command\">'clear'</span> to clear the terminal.",
  "If you want to see the banner again, type <span class=\"command\">'banner'</span>.",
  "If you want to see the command history, type <span class=\"command\">'history'</span>.",
  "Site is responsive, so you can use it on your phone or tablet.",
  "I'm still working on this terminal. I'm planning to add more features like a personal AI chatbot based on a LLM and Retreival Augmented Generation or commonly known as RAG, and a few more easter eggs. If you have any suggestions, feel free to email me at <a href=\"" + email + "\" target=\"_blank\">" + email + "</a>.",
  "<br>"
];
