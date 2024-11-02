import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    ABC,
    IEEE,
    carrent,
    jobit,
    tripguide,
    threejs,
  } from "../asset";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "3d Mern Stack Developer",
      icon: web,
    },
    {
      title: "Blockchain Developer",
      icon: mobile,
    },
    {
      title: "AI Developer",
      icon: backend,
    },
    {
      title: "Java Developer",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "Vice-President",
      company_name: "Acropolis Blockchain Club",
      icon: ABC,
      iconBg: "#383E56",
      date: "Nov 2022 - Dec 2023",
      points: [
        "Co-Founded the Club in my second year of college along with my 3 seniors.",
        "Got appointed as Vice-President considering my knowledge in the industry and due to my leadership skills.",
        "Lead a team of 28 members and the community of over 290 members.",
        "Took many lectures and webinars on Blockchain and Web3 Developement.",
      ],
    },
    {
      title: "Vice-Chairperson",
      company_name: "IEEE CS SBCA",
      icon: IEEE,
      iconBg: "#E6DEDD",
      date: "Jan 2022 - Dec 2023",
      points: [
        "Planned and managed meetings and special events to support club efforts.",
         "Functioned with strategic vision and a hands-on approach.",
         "Worked as a versatile member in the club and added glory to it.",
         
      ],
    },
    {
      title: "Chairperson",
      company_name: "IEEE CS SBCA",
      icon: IEEE,
      iconBg: "#E6DEDD",
      date: "Jan 2024 - Present",
      points: [
        "Provided opportunities and guided members of the club to take lead in events and organize them.",
         "Created an open and fostering environment for the team members to think and work independently.",
      ],
    },
    {
      title: "President",
      company_name: "Acropolis Blockchain Club",
      icon: ABC,
      iconBg: "#383E56",
      date: "Jan 2024 - Present",
      points: [
       " Helped the club in setting goals, organizing meetings, and overseeing club activities.",
        "Managed club affairs, including budgeting, event planning, and communication with members and other organizations.",
        "Served as the primary representative of the club, both within the college community and in interactions with external organizations and partners."

      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Batuk proved me wrong.",
      name: "Brandi lee",
      designation: "CFO",
      company: "Corp Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Batuk does.",
      name: "Liam Hemsworth",
      designation: "COO",
      company: "FIG Inc.",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Batuk optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Misa Specter",
      designation: "CTO",
      company: "Angela Industries",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Car Rent",
      description:
        "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/",
    },
    {
      name: "Job IT",
      description:
        "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/",
    },
    {
      name: "Trip Guide",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };
