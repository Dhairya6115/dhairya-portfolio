/**
 * Central Portfolio Data for Dhairya Kachhiya
 * Junior Web Developer | WordPress Developer
 */

export const personalData = {
  name: "Dhairya Kachhiya",
  role: "Junior Web Developer | WordPress Developer",
  bio: "Entry-level web developer with hands-on training and internship experience in HTML, CSS, JavaScript, jQuery, PHP, SQL and WordPress. Interested in building responsive, functional websites and improving practical development skills.",
  location: "Vadodara, Gujarat, India",
  availability: "Available for Junior Web & WordPress Developer Roles",
  email: "dhairya6115@gmail.com",
  phone: "+91 94088 75525",
  github: "https://github.com/Dhairya6115",
  linkedin: "https://www.linkedin.com/in/dhairya-kachhiya-9a1b5a447/",
  twitter: "https://github.com/Dhairya6115",
  resumeUrl: `${import.meta.env.BASE_URL}dhairya-kachhiya-resume.pdf`,
  languages: ["Gujarati", "Hindi", "English"],
};

export const navLinks = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
];

export const skillCategories = [
  {
    title: "Frontend Development",
    description: "Building responsive, structured, and interactive client-side web pages.",
    skills: ["HTML5", "CSS3", "JavaScript", "jQuery"],
  },
  {
    title: "Backend & Database",
    description: "Server-side scripting and database management for web applications.",
    skills: ["PHP", "SQL", "MySQL"],
  },
  {
    title: "Content Management Systems",
    description: "Developing, configuring, and maintaining WordPress websites.",
    skills: ["WordPress"],
  },
  {
    title: "Tools & Platforms",
    description: "Developer tooling for version control, code editing, and static hosting.",
    skills: ["Git", "GitHub", "VS Code", "GitHub Pages"],
  },
];

export const projects = [
  {
    id: "radhe-creation",
    title: "Radhe Creation",
    subtitle: "WordPress Handmade-Art & Décor Website",
    description: "A website project for showcasing handmade artwork and décor products, with organized product categories and browsable page content.",
    tags: ["WordPress", "HTML5", "CSS3", "JavaScript"],
    liveUrl: "https://dhairya6115.github.io/radhe-creation/",
    githubUrl: "https://github.com/Dhairya6115/radhe-creation",
    featured: true,
  },
];

export const experience = [
  {
    id: "exp-1",
    role: "Web Development Trainee & Intern",
    company: "Webvision Arena",
    period: "June 2026 – September 2026",
    location: "Vadodara, Gujarat, India",
    highlights: [
      "Completed structured training and internship covering HTML, CSS, JavaScript, jQuery, PHP, SQL and WordPress.",
      "Practiced building and styling web pages using semantic HTML and responsive CSS.",
      "Worked with JavaScript and jQuery for interactive DOM behaviors and scripting.",
      "Practiced PHP and SQL database connectivity for dynamic data handling.",
      "Worked on WordPress site setup and content management as part of the program.",
    ],
  },
  {
    id: "exp-2",
    role: "Computer Teacher",
    company: "Shree Gangabai Sarvajanik High School",
    period: "2023 (One-year contract)",
    location: "Gujarat, India",
    highlights: [
      "Taught computer lessons to school students.",
      "Explained technical concepts in simple language.",
      "Developed communication and presentation skills.",
      "Managed classroom activities and planned lessons independently.",
    ],
  },
];

export const education = [
  {
    id: "edu-1",
    degree: "B.Sc. Computer Applications & Information Technology",
    institution: "Shri D. N. Institute of Computer Application",
    period: "2024 – 2027",
    status: "Currently pursuing Semester 5",
    location: "Gujarat, India",
  },
];
