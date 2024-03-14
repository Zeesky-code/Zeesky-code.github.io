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
    `Highly motivated third-year undergraduate student with a strong interest in legal information retrieval (IR) and Natural Language Processing (NLP). Particularly interested in exploring the application of NLP techniques for enhancing access to legal information.` + `\nCurrently working on a personal project focused on improving the accuracy of Optical Character Recognition (OCR) results for Turkish legal documents through post-processing techniques.  Welcome to discuss this project further or any other aspects of my interests in legal IR and NLP.`,
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
        ["Improved the accuracy of an algorithm for detecting names of parties, dates and case citations from legal documents.",
        "Designed and developed microservices architecture leveraging Spring Boot, Tesseract, and Apache PDFBox to orchestrate and deploy advanced algorithms for detecting court judgments from scanned law journals.",
        "Conducted research on information retrieval methods for Turkish legal content, focusing on legal information extraction and OCR enhancement techniques."
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
      ["Spearheaded the development of RESTful APIs using the MERN (MongoDB, Express.js, React.js, Node.js) stack for the library user platform. ",
      "Elevated code quality and reliability by implementing comprehensive unit testing strategies,resulting in a notable 40% increase in code coverage",
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
    "Maven",
    "Git",
    "Tesseract"
  ],
  projects: [
    {
      title: "Turkish Poetry Similarity Analyzer",
      techStack: ["Java", "NLP", "Apache OpenNLP"],
      description:
        "Developed a Java application to analyze the semantic similarity between Turkish poems using NLP techniques. Focused on Nazim Hikmet's poems. Employed Apache OpenNLP for text pre-processing and stemming/lemmatization. Implemented cosine similarity for semantic closeness measurement.",
      link: {
        label: "See Project", 
        href: "https://github.com/Zeesky-code/turkish-poetry-similarity", 
      },
    },
    {
      title: "Judgment Extractor (Turkish Legal Text)",
      techStack: ["NLP", "Regular Expressions", "NER"],
      description:
        "Built a system to automatically extract Turkish court judgments from legal journals. Combined NLP techniques (text pre-processing, NER, keyword extraction) with regular expressions to identify judgments based on legal entities, keywords, and document structure.",
      link: {
        label: "Judgment Extractor", 
        href: "https://github.com/Zeesky-code/pdf-extractor", 
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
