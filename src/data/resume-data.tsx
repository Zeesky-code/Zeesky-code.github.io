import {
  AmbitLogo,
  BarepapersLogo,
  BimLogo,
  CDGOLogo,
  ClevertechLogo,
  ConsultlyLogo,
  EvercastLogo,
  Howdy,
  JarockiMeLogo,
  JojoMobileLogo,
  Minimal,
  MobileVikingsLogo,
  MonitoLogo,
  NSNLogo,
  ParabolLogo,
  TastyCloudLogo,
  YearProgressLogo,
} from "@/images/logos";
import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Zainab Damilola Lawal",
  initials: "ZDL",
  location: "Eskisehir, Turkey, IST",
  locationLink: "https://www.google.com/maps/place/Eskisehir",
  about:
    "A 3rd-year Computer Engineering major interested in Information Retrieval and NLP",
  summary:
    `Highly motivated third-year undergraduate student with a passion for software engineering and a keen interest in OOP and Java.` + `\nI have experience in Java and SpringBoot through coursework and previous internships and currently working on personal projects. I am also love sharing my knowledge and doing this as a TA in a Database Management System course this semester. I am open to discussing my experinces and projects in SWE further.`,
  avatarUrl: "https://avatars.githubusercontent.com/u/71593672?v=4",
  personalWebsiteUrl: "https://jarocki.me",
  contact: {
    email: "zainablaw1012@gmail.com",
    tel: "+905340407341",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/Zeesky-code",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://linkedin.com/in/zainabdlawal/",
        icon: LinkedInIcon,
      },
      {
        name: "X",
        url: "https://x.com/Zeeskylaw",
        icon: XIcon,
      },
    ],
  },
  education: [
    {
      school: "Eskisehir Technical University",
      degree: "Bachelor's Degree in Computer Engineering",
      start: "2021",
      end: "Present",
    },
  ],
  work: [
    {
      company: "Kanunum",
      link: "https://www.kanunum.com/",
      badges: ["Remote", "Internship"],
      title: "Software Engineering Intern",
      logo: ParabolLogo,
      start: "07/2023",
      end: "03/2024",
      description:
        ["Developed RESTful APIs with SpringBoot, Tesseract and ApachePDFBox to extract court judgements from URLS.",
        "Implemented a log storage pipeline using ElasticSearch, Logstash and Kibana enabling real-time analysis of logs generated.",
        "Conducting research for new information retrieval methods for legal documents."
        ],
    },
    {
      company: "Library Aid Africa",
      link: "https://www.libraryaidafrica.org/",
      badges: ["Volunteering"],
      title: "Software Engineering Intern",
      logo: ClevertechLogo,
      start: "04/2023",
      end: "11/2023",
      description:
      ["Spearheaded the development of RESTful APIs using the MERN (MongoDB, Express.js, React.js, Node.js) stack for the new library user platform. ",
      "Elevated code quality and reliability by implementing unit and integration tests, resulting in a notable 40% increase in code coverage",
      ],
    },
  ],
  skills: [
    "HTML/ CSS",
    "JavaScript",
    "Node.js/ Express.js",
    "Java",
    "Springboot",
    "MySQL",
    "MongoDB",
    "JDBC",
    "Apache OpenNLP",
    "ElasticSearch",
    "Kibana",
    "Logstash",
    "Maven",
    "Git",
    "Tesseract"
  ],
  projects: [
    {
      title: "Globe Trotter",
      techStack: ["Java", "Spring MVC", "SpringBoot", "MongoDB", "Elastic BeanStalk", "AWS", "Git"],
      description:
        "A Spring Boot web application deployed on AWS Elastic Beanstalk that allows users to create trips, add destinations, and manage itinerary details.",
      link: {
        label: "See Project", 
        href: "http://globetrotter.eu-north-1.elasticbeanstalk.com/", 
      },
    },
    {
      title: "Burger Bun",
      techStack: ["Node.js", "Express.js", "Socket.io", "HTML/CSS","MongoDB"],
      description:
        "A restaurant website with a restaurant chatbot that allows users to see menu items and place, checkout and delete orders without creating a user account.",
      link: {
        label: "See project", 
        href: "https://burger-bun.onrender.com/", 
      },
    },
    {
      title: "Turkish Poetry Similarity Analyzer",
      techStack: ["Java", "Maven", "Apache OpenNLP", "Git"],
      description:
        "Developed a Java application to analyze the semantic similarity between Nazim Hikmet's (my favourite poet) poems. Implemented cosine similarity for semantic closeness measurement.",
      link: {
        label: "See Project", 
        href: "https://github.com/Zeesky-code/turkish-poetry-similarity", 
      },
    },
    {
      title: "Swapify: Apple Music to Spotify Converter",
      techStack: ["Express.js","Node.js","Web Scraping", "Spotify API"],
      description:
        "Developed 'Swapify', a web application that converts Apple Music links to their corresponding Spotify URLs. Utilized web scraping to extract song details and integrated with the Spotify API to search for matching songs and return Spotify links.",
      link: {
        label: "Swapify", 
        href: "https://github.com/Zeesky-code/Swapify-API", 
      },
    },
  ],
  leadership: [
    {
      company:"Eskisehir Technical University",
      badges: ["Teaching Assistantship"],
      title: "Student Assistant- Database Management Systems",
      start: "11/2023",
      end: "present",
      description:
        ["Facilitate discussions, exercises, and group activities aimed at enhancing students' understanding and proficiency in database management concepts and technologies. ",
        "Provide guidance and support for students working on the Database Management Systems term project, assisting with project requirements, implementation, and troubleshooting.",
        ],
    },
    {
      company:"ESTU Google Developers Student Club",
      badges: ["Volunteering", "Student Club"],
      title: "Core Team Organisation Member",
      start: "10/2023",
      end: "present",
      description:
      ["Organize workshops, hackathons, and events for the GDSC community. ",
      "Organized DevFest Eskişehir 2023 with a turnout of 2k+ attendees.",
      ],
    },
  ],
} as const;
